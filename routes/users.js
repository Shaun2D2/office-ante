var express = require('express');
var router = express.Router();

const user = require('../models/User');

router.get('/', function(req, res, next) {
    user.find().exec().then((result) => res.send(result));
});

router.get('/:id', (req, res) => {
    user.findOne({ id: req.params.id }).exec().then((result) => {
        if(result) {
          return res.send(result);
        }

        res.status(404).json({ code: 404, message: 'user not found!' });
    }).catch((err) => res.status(500).json({ code: 500, message: 'eh, there was a problem...' }));
});

module.exports = router;
