var express = require('express');
var router = express.Router();
const Video = require('../models/video');

router.get('/:userId', function (req, res, next) {
    Video.find({user: req.params.userId})
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