const bet = require('../models/Bet');
const invitation = require('../models/Invitation');

module.exports = {
    index(req, res) {
        bet.find({ creatorId: req.user.id }).exec().then((result) => {
            res.json(result);
        }).catch(err => res.status(400).send({ code: 400, message: 'something went wrong...' }));
    },
    create(req, res) {
        const {
            challengerId,
            judgeId,
            wager,
            endDate,
            startDate
        } = req.body;

        const newBet = new bet({
            creatorId: req.user.id,
            challengerId,
            judgeId,
            wager,
            endDate,
            startDate
        });

        newBet.save().then((model) => {

            const invitations = [
                invitation.create({
                    betId: model._id,
                    userId: challengerId,
                    role: 'challenger'
                })
            ];

            if (judgeId) {
                invitations.push(
                    invitation.create({
                        betId: model._id,
                        userId: judgeId,
                        role: 'judge'
                    })
                );
            }

            Promise.all(invitations).then(() => res.status(201).json(model));
        }).catch(err => res.status(400).json({ code: 400, message: err }));

    }
}
