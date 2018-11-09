var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const User = require('../API/models/user');

router.get('/', function (req, res, next) {
    res.render('register', {
        username: req.user.username || ''
    });
});

router.post('/', (req, res, next) => {
    const user = new User({
        userId: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password
    });
    user.save().then(result => {
            console.log(result);
            console.log('CREATED USER');
        })
        .catch(err => console.log(err));

    res.status(201).json({
        message: 'Handling POST requests to /register'
    });
});