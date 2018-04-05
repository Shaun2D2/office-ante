const mongoose = require('mongoose');

const invitationModel = new mongoose.Schema({
    betId: {
        type: String
    },
    userId: {
        type: String
    },
    role: {
        type: String
    },
    accpeted: {
        type: Boolean,
        default: false
    },
     declined: {
        type: Boolean,
        default: false
     }
});

module.exports = mongoose.model('Invitation', invitationModel);
