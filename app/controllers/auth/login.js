const user = require('../../models/User');
const createToken = require('../../utils/token').createToken;

const loginController = {
    index(req, res) {
        user.findOne({ email: req.body.email }).select('+password').exec().then((user) => {
            if(!user) {
                return res.status(401).json({ code: 401, message: 'invalid login' });
            }

            if(user.compareHash(req.body.password)) {
                return res.json({ token: createToken(user.id) });
            }

            return res.status(401).json({ code: 401, message: 'invalid login' });

        })
        .catch(err => res.status(401).json({ code: 401, message: 'invalid login' }));
    }
}

module.exports = loginController;
