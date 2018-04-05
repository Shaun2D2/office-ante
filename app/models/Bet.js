const mongoose = require('mongoose');

const betModel = new mongoose.Schema({
    creatorId: {
        type: String
    },
    challengerId: {
        type: String
    },
    judgeId: {
        type: String
    },
    wager: {
        type: String
    },
    endDate: {
        type: Date
    },
    startDate: {
        type: Date
    },
    cancelledDate: {
        type: Date
    },
    cancelledBy: {
        type: String
    }
});

module.exports = mongoose.model('Bet', betModel);
