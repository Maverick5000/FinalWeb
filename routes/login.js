var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const User = require('../API/models/user');

router.get('/', function (req, res, next) {
    res.render('login', {
        username: req.user.username || ''
    });
});