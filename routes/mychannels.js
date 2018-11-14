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
        var allchannels;
        Channel.find({
                user: req.user._id
            })
            .exec()
            .then(docs => {
                allchannels = docs;
                console.log(allchannels);
                res.render('mychannels', {
                    title: 'Express',
                    username: req.user.username,
                    id: req.user._id,
                    channels: allchannels
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    }
});

module.exports = router;