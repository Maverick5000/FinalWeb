var express = require('express');
var router = express.Router();
const Video = require('../models/video');
const Channel = require('../models/channel');

router.post('/:videoId', function (req, res, next) {
    Video.findByIdAndRemove(req.params.videoId)
    .exec()
    .then(docs => {
        res.redirect('/myvideos/'+req.user._id);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;