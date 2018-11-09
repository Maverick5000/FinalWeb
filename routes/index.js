var express = require('express');
var router = express.Router();
var auth = require("../API/controllers/AuthController.js");


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

/* GET home page. */
router.get('/', function (req, res, next) {
  if (!req.user) {
    res.render('index', {
      title: 'Express'
    });
  } else {
    res.render('index', {
      title: 'Express',
      username: req.user.username
    });
  }
});


module.exports = router;