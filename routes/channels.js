const express = require('express');
const router = express.Router();
const Channel = require('../API/models/channel');

router.get('/', function (req, res, next) {
    if (!req.user) {
        res.render('login');
    } else {
        var allchannels;
        Channel.find({})
            .exec()
            .then(docs => {
                allchannels = docs;
                console.log(allchannels);
                res.render('channels', {
                    title: 'Express',
                    username: req.user.username,
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

router.get('/:channelId', (req, res, next) => {
    const id = req.params.channelId;
    if (id === 'GG') {
        res.status(200).json({
            message: 'Discovered special ID',
            id: id,
            username: req.user.username || ""
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

module.exports = router;