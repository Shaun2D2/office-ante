const user = require('../models/User');

module.exports = {
    index(req, res) {
        user.findById(req.user.id).exec().then((data) => {
            delete data.__v;
            
            res.json(data);
        }).catch((err) => res.status(400).json({ code: 400, message: 'something went wrong...' }));
    }
}
