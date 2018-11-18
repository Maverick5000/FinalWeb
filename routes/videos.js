const express = require('express');
const router = express.Router();
const Video = require('../API/models/video');
var mongoose = require('mongoose');


router.get('/:videoId', (req, res, next) => {
    const id = req.params.videoId;
    if (!req.user) {
        res.render('login');
    } else {
                res.render('videos', {
                    title: 'Express',
                    username: req.user.username,
                    id: id
                });
    }
});


module.exports = router;