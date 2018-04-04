const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userModel = new mongoose.Schema({
    email: {
      type: String,
      required: [true, 'email is required.'],
    },
    password: {
      type: String,
      select: false,
      require: [true, 'password is required.'],
      min: [5, 'must be at least 5 characters.'],
      max: [50, 'must be less than 50 characters.']
    }
});

userModel.methods.compareHash = function(password) {
  console.log(this.password);
  return bcrypt.compareSync(password, this.password);
}

userModel.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8), null);
  next();
});

module.exports = mongoose.model('User', userModel);
