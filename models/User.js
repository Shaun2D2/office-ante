const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userModel = new mongoose.Schema({
    email: String,
    password: String,
});

userModel.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userModel.methods.compareHash = function(password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', userModel);
