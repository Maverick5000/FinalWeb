var express = require('express');
var router = express.Router();

router.get('/:userId', function (req, res, next) {
    if (!req.user) {
        res.render('login');
    } else {
        res.render('myvideos', {
            username: req.user.username,
            id: req.user._id
        });
    }
});

module.exports = router;