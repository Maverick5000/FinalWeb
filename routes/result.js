const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    if (!req.user) {
        res.render('login');
    } else {
        res.render('result', {
            username: req.user.username,
            id: req.user._id
        });
    }
});

module.exports = router;