const user = require('../models/User');

const userController = {
    index(req, res) {

        const filter = req.query.filter || null;
        const limit = parseInt(req.query.limit) || 50;

        if(req.query.filter) {
          return user.find({ email: new RegExp(filter, 'i') }).limit(limit).exec().then((result) => res.send(result));
        }

        user.find().limit(limit).exec().then((result) => res.send(result));
    },
    show(req, res) {
        user.findById(req.params.id).exec().then((result) => {
            if(result) {
              return res.send(result);
            }
            res.status(404).json({ code: 404, message: 'user not found!' });
        }).catch((err) => res.status(500).json({ code: 500, message: 'eh, there was a problem...' }));
    }
}

module.exports = userController;
