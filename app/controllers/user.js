const user = require('../models/User');

const userController = {
    index(req, res) {
        user.find().exec().then((result) => res.send(result));
    },
    show(req, res) {
        user.findById(req.params.id).exec().then((result) => {
            if(result) {
              delete result.password;

              return res.send(result);
            }
            res.status(404).json({ code: 404, message: 'user not found!' });
        }).catch((err) => res.status(500).json({ code: 500, message: 'eh, there was a problem...' }));
    }
}

module.exports = userController;
