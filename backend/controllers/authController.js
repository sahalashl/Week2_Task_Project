const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

exports.signup = async (req, res) => {
  try{
    const { name, email, password, role } = req.body;
    const exists = await User.findOne({ email });
    if(exists) return res.status(400).json({message:'User already exists'});
    const user = await User.create({ name, email, password, role });
    res.status(201).json({ token: generateToken(user), user: { _id:user._id, name:user.name, email:user.email, role:user.role }});
  }catch(err){
    res.status(500).json({message: err.message});
  }
};

exports.login = async (req, res) => {
  try{
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json({ token: generateToken(user), user: { _id:user._id, name:user.name, email:user.email, role:user.role }});
  }catch(err){
    res.status(500).json({message: err.message});
  }
};

exports.profile = async (req, res) => {
  try{
    const user = await User.findById(req.user.id).select('-password');
    if(!user) return res.status(404).json({message:'User not found'});
    res.json(user);
  }catch(err){
    res.status(500).json({message: err.message});
  }
};
