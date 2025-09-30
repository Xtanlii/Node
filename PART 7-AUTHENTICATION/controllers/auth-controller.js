const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register controller
const registerUser = async (req, res) => {
  try {
    // extract user information from our request body
    const { username, email, password, role } = req.body;

    //check if user with the same email already exists
    const checkExistingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with the same email or username already exists'
      });
    }
    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create a new user and save it to the database
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || 'user' //default role is user
    });
    await newUser.save();

    if (newUser) {
      res.status(201).json({
        success: true,
        message: 'User registered successfully',
      })
    } else{
      res.status(400).json({
        success: true,
        message: 'Unable to register the user! Please try again later.',
      })
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Some Error Occurred! Please try again later.'
    });

  }
}

//login controller

const loginUser = async (req, res) => {
  try {
    // extract user information from our request body
    const { username, password } = req.body;

    //check if user exists in the database
    const user = await User.findOne({username});
    if (!user) {
      return res.status(400).json({
        success: false,
        message: `User doesn't exists!`
      });
    }
    // check if the password is correct or not
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials!'
      });
    }
    // create user token
    const accessToken = jwt.sign({
      userId : user._id,
      username: user.username,
      role: user.role
    }, process.env.JWT_SECRET_KEY, {
      expiresIn: '15m'
    });
    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      accessToken
    });


  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Some Error Occurred! Please try again later.'
    });
  }
}

module.exports = {
  registerUser,
  loginUser
};