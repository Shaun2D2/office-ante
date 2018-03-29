var express = require('express');
var router = express.Router();

const user = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    user.find().exec().then((result) => res.send(result));
});

module.exports = router;
