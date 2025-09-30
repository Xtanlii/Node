const User = require('../model/user-model');
const bcrypt = require('bcrypt');


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
  try {
    const { email, password } = req.body;

    // Check if user email exists
    const userExists = await User.find({email})
    if(!userExists) {
      return res.status(400).json({
        success: false,
        message: "User does not exist"
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
    

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later."
    })
  }

};

module.exports = { register, login };


