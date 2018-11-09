const express = require('express');
const router = express.Router();
const Video = require('../API/models/video');
var mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    if (!req.user) {
        res.render('videos', {
          title: 'Express'
        });
      } else {
        res.render('videos', {
          title: 'Express',
          username: req.user.username
        });
      }
});

router.get('/:videoId', (req, res, next) => {
    const id = req.params.videoId;
    if (id === 'GG') {
        res.status(200).json({
            message: 'Discovered special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:videoId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated Product!'
    });
});

router.post('/', (req, res, next) => {
    const video = new Video({
        _id: mongoose.Types.ObjectId(),
        srcUrl: req.body.srcUrl,
        nombre: req.body.nombre,
        userId: req.body.userId,
        channelId: req.body.channelId
    });
    video.save().then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));

    res.status(201).json({
        message: 'Handling POST requests to /videos'
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted Product!'
    });
});

module.exports = router;