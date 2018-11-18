var express = require('express');
var router = express.Router();
const Video = require('../models/video');

router.get('/', function (req, res, next) {
    Video.find()
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/:videoId', function (req, res, next) {
    Video.find({_id: req.params.videoId})
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});



module.exports = router;