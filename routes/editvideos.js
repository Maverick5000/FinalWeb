var express = require('express');
var router = express.Router();

router.get('/:videoId', function (req, res, next) {
    if (!req.user) {
      res.render('login');
    } else {
      res.render('editvideos', {
        username: req.user.username,
        id: req.params.videoId
      });
    }
  });

module.exports = router;