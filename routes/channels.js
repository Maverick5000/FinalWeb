const express = require('express');
const router = express.Router();
const Channel = require('../API/models/channel');

router.get('/', function (req, res, next) {
    if (!req.user) {
        res.render('channels');
    } else {
        res.render('channels', {
            username: req.user.username,
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