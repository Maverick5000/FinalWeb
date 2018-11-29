var express = require('express');
var router = express.Router();
const Video = require('../models/video');


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


router.post('/:videoId', (req, res, next) => {
    if (!req.user) {
        res.render('login');
    } else {
    Video.findByIdAndUpdate( {_id: req.params.videoId} , { $set: { srcUrl: req.body.url, nombre: req.body.nombreVid, descripcion: req.body.descripcion }}, { new: true })
        .then(result => {
            res.redirect('/myvideos/'+req.user._id);
            })
            .catch(err => console.log(err));
    }
});


module.exports = router;