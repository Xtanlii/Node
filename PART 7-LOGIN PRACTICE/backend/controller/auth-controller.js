const User = require('../model/user-model');


// Registration controller
const register = async (req,res) => {
  res.json({ message: 'Register endpoint' });
};

const login = async (req,res) => {

};

module.exports = { register, login };


