const express = require('express');
const router = express.Router();
const Video = require('../models/video');
var mongoose = require('mongoose');

router.post('/', (req, res, next) => {
    if (!req.user) {
        res.render('login');
    } else {
        const video = new Video({
            _id: new mongoose.Types.ObjectId(),
            srcUrl: req.body.url,
            nombre: req.body.nombreVid,
            descripcion: req.body.descripcion,
            user: req.user._id,
            usernombre: req.user.username
        });
        video.save().then(result => {
            res.redirect('/myvideos/'+req.user._id);
            })
            .catch(err => console.log(err));
    }
});

module.exports = router;