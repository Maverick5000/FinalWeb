var express = require('express');
var router = express.Router();
const Channel = require('../models/channel');

router.get('/:channelId', function (req, res, next) {
  Channel.findByIdAndRemove(req.params.channelId)
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

module.exports = router;