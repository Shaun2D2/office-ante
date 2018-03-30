var express = require('express');
var router = express.Router();

const user = require('../models/User');

router.post('/', (req, res) => {
    user.find({ email: req.body.email }).exec().then((result) => {

        res.send(result);

    });
});

module.exports = router;
