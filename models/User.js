const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userModel = new mongoose.Schema({
    email: {
      type: String,
      required: [true, 'email is required.'],
    },
    password: {
      type: String,
      require: [true, 'password is required.'],
      min: [5, 'must be at least 5 characters.'],
      max: [50, 'must be less than 50 characters.']
    }
});

userModel.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userModel.methods.compareHash = function(password) {
  return bcrypt.compareSync(password, this.password);
}

userModel.pre('save', () => {
    this.password = this.methods.generateHash(this.password);
});


module.exports = mongoose.model('User', userModel);
