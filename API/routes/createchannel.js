const express = require('express');
const router = express.Router();
const Channel = require('../models/channel');
const Video = require('../models/video');
var mongoose = require('mongoose');

router.post('/', (req, res, next) => {
    if (!req.user) {
        res.render('login');
    } else {
        const channel = new Channel({
            _id: new mongoose.Types.ObjectId(),
            nombre: req.body.nombre,
            user: req.user._id,
            videos: req.body.url
        });
        const video = new Video({
            _id: new mongoose.Types.ObjectId(),
            srcUrl: req.body.url,
            nombre: req.body.nombreVid,
            user: req.user._id,
            usernombre: req.user.username
        });
        video.save();
        channel.save().then(result => {
                console.log(result);
                console.log('CREATED CHANNEL');
            })
            .catch(err => console.log(err));

        res.status(201).json({
            message: 'Handling POST requests to /Create channels'
        });
    }
});

module.exports = router;