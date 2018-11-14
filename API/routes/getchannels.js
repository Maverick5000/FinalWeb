var express = require('express');
var router = express.Router();
const Channel = require('../models/channel');

router.get('/', function (req, res, next) {
    Channel.find()
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/:userId', function (req, res, next) {
    Channel.find({ user: req.params.userId })
        .exec()
        .then(docs => {
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