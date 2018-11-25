var express = require('express');
var router = express.Router();
const Video = require('../models/video');


router.get('/:text', function (req, res, next) {
    Video.find({nombre: { $regex: '.*' + req.params.text + '.*' }})
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