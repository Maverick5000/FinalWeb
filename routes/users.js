var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  if (!req.user) {
    res.render('users', {
      title: 'Express'
    });
  } else {
    res.render('users', {
      title: 'Express',
      username: req.user.username
    });
  }
});

router.get('/:userId', function (req, res, next) {
  res.render('users', {
    username: req.user.username || ' '
  });
});

module.exports = router;