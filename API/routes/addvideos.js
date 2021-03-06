var express = require('express');
var router = express.Router();
const Channel = require('../models/channel');
var mongoose = require('mongoose');
const Video = require('../models/video');
var vidId;
var channel;

router.post('/:channelId', function (req, res, next) {
  if (!req.user) {
    res.render('login');
  } else {
    const video = new Video({
      _id: new mongoose.Types.ObjectId(),
      srcUrl: req.body.url,
      nombre: req.body.nombreVid,
      user: req.user._id,
      descripcion: req.body.descripcion,
      usernombre: req.user.username
  });
  video.save().then(result => {
    vidId = result._id;
    channel = req.params.channelId;
    Channel.findByIdAndUpdate( {_id: channel} , {$push: {videos:vidId}}, { new: true })
    .exec()
    .then(docs => {
      res.redirect('/mychannels/'+req.user._id);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  });
  }
});


module.exports = router;