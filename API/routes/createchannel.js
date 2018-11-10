const express = require('express');
const router = express.Router();
const Channel = require('../models/channel');
var mongoose = require('mongoose');

router.post('/', (req, res, next) => {
    if (!req.user) {
        res.render('login');
    } else {
        const channel = new Channel({
            _id: new mongoose.Types.ObjectId(),
            nombre: req.body.nombre,
            user: req.user._id,
            videos: req.body.url
        });
        channel.save().then(result => {
                console.log(result);
                console.log('CREATED USER');
            })
            .catch(err => console.log(err));

        res.status(201).json({
            message: 'Handling POST requests to /register'
        });
    }
});

module.exports = router;