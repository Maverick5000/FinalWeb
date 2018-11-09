var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.get('/', function (req, res, next) {
  User.find()
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

