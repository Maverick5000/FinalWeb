var express = require('express');
var router = express.Router();

router.get('/:channelId', function (req, res, next) {
    if (!req.user) {
      res.render('login');
    } else {
      res.render('addvideos', {
        title: 'Express',
        username: req.user.username,
        id: req.params.channelId
      });
    }
  });

module.exports = router;