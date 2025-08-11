const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: false, // Only required for Google OAuth
    unique: true
  },
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ['teacher', 'student'],
    required: true
  },
  password: {
    type: String,
    required: false // Only for manual registration
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;