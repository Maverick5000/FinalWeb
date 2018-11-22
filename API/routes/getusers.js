var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.get('/', function(req, res) {

  if (req.user === undefined) {
      // The user is not logged in
      res.json({
        username: "failed"
      });
  } else {
      res.json({
          username: req.user
      });
  }
});

module.exports = router;

