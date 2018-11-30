var express = require('express');
var router = express.Router();
const Comment = require('../models/comment');
var mongoose = require('mongoose');

router.get('/', function (req, res, next) {
    Comment.find()
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
    Comment.find({video: req.params.videoId})
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

router.post('/:videoId', (req, res, next) => {
    if (!req.user) {
        res.render('login');
    } else {
        const comment = new Comment({
            _id: new mongoose.Types.ObjectId(),
            texto: req.body.texto,
            user: req.user._id,
            usernombre: req.user.username,
            video: req.params.videoId
        });
        comment.save().then(result => {
            res.redirect('/videos/'+req.params.videoId);
            })
            .catch(err => console.log(err));
    }
});



module.exports = router;