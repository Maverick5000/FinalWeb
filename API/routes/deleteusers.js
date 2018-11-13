var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Video = require('../models/video');
const Channel = require('../models/channel');

router.get('/', function (req, res, next) {
  Channel.remove({})
    .exec()
    .then(docs => {
      console.log(docs);
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