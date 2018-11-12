var express = require('express');
var router = express.Router();
const Channel = require('../models/channel');
var mongoose = require('mongoose');

router.post('/:channelId', function (req, res, next) {
  if (!req.user) {
    res.render('login');
  } else {
    
    Channel.findByIdAndUpdate({ _id: req.params.channelId }, { $push: { videos: req.body.url }}, { new: true })
    //Channel.updateOne({_id: req.params.id}, {$push: {videos: req.body.url}}, { new: true })
    .exec()
    .then(docs => {
      console.log(docs);
      res.render('mychannels', {
        title: 'Express',
        username: req.user.username,
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


module.exports = router;