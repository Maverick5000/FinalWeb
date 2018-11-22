var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  if (!req.user) {
    res.render('login');
  } else {
    res.render('createchannel', {
      title: 'Express',
      username: req.user.username,
      id: req.user._id
    });
  }
});

module.exports = router;