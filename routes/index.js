var express = require('express');
var router = express.Router();
var auth = require("../API/controllers/AuthController.js");
const Video = require('../API/models/video');


// restrict index for logged in user only
//router.get('/', auth.home);

// route to register page
router.get('/register', auth.register);

// route for register action
router.post('/register', auth.doRegister);

// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login', auth.doLogin);

// route for logout action
router.get('/logout', auth.logout);

router.use("/public", express.static(__dirname + "/public"));

/* GET home page. */
router.get('/', function (req, res, next) {
    if (!req.user) {
        res.render('index');
    } else {
        res.render('index', {
            username: req.user.username,
            id: req.user._id
        });
    }
});


module.exports = router;