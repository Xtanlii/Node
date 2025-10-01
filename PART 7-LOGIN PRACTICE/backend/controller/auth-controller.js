const User = require('../model/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Registration controller
const register = async (req, res) => {
  try {
    //get user data
    const {username, email, password, role} = req.body;

    //check if user already exists
    const existingUser = await User.findOne({$or: [{email}, {username}]});
    if(existingUser){
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role
    })
    if(!newUser){
      return res.status(400).json({
        success: false,
        message: "Something went wrong. Please try again later."
      });
    }
    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later."
    })
  }
};

const login = async (req, res) => {
  console.log('Route hit')
  try {
    console.log('Try hit');
    const { email, password } = req.body;
    console.log(email, password)
    // Check if user email exists
    const userExists = await User.findOne({email})
    
    if(!userExists) {
      return res.status(400).json({
        success: false,
        message: "Invalid email "
      })
    }

    //Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, userExists.password);
    if(!isPasswordCorrect) {
      res.status(400).json({
        success: false,
        message: "Invalid password! please try again"
      })
    }
    // create token
    const token = jwt.sign(
      { 
        userId: userExists._id,
        role: userExists.role 
      },process.env.JWT_SECRET,{ expiresIn: '1d' }
    );

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
    })

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later."
    })
  }

};

module.exports = { register, login };


