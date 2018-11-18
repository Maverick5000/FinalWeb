const express = require('express');
const router = express.Router();
const Channel = require('../API/models/channel');

router.get('/', function (req, res, next) {
    if (!req.user) {
        res.render('login');
    }
});

router.get('/:userId', (req, res, next) => {
    if (!req.user) {
        res.render('login');
    } else {
        res.render('mychannels', {
            title: 'Express',
            username: req.user.username,
            id: req.user._id
        });
    }
});

module.exports = router;