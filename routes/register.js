const user = require('../models/User');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { email, password } = req.body;
    user.findOne({ email: req.body.email }).exec().then((result) => {
        if(!result) {
            const newUser = new user({
                email,
                password
            });

            return newUser.save().then(() => {

                const token = jwt.sign({
                    subject: newUser.id
                }, process.env.APP_KEY);


                return res.send({ token });
            });
        }

        res.status(400).json({ code: 400, message: 'something went wrong' });
    });
});

module.exports = router;
