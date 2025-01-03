const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true }, // Ensure email is unique
  password: { type: String, required: true },
},{ collection: 'mernpocusers' });

const User = mongoose.model('User', userSchema);

module.exports = User;
