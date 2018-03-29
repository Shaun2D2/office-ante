const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    email: String,
    password: String,
});

module.exports = mongoose.model('User', UserModel);
