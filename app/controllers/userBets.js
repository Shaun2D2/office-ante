const bet = require('../models/Bet');

module.exports = {
    show(req, res) {
        bet
          .where({ creatorId: req.user.id })
          .or({ challengerId: req.user.id })
          .exec()
          .then((data) => res.json(data))
          .catch(err => console.log(err));
    }
}
