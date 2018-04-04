const user = require('../../models/User');
const createToken = require('../../utils/token').createToken;

const registerController = {
    index(req, res) {
        const { email, password } = req.body;
        user.findOne({ email: req.body.email }).exec().then((result) => {
            if(!result) {
                const newUser = new user({
                    email,
                    password
                });

                return newUser.save().then(() => {
                    return res.send({ token: createToken(newUser.id) });
                });
            }

            res.status(400).json({ code: 400, message: 'something went wrong' });
        });

    }
}

module.exports = registerController;
