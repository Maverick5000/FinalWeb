const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    if (!req.user) {
        res.render('login');
      } else {
        res.render('channels', {
          title: 'Express',
          username: req.user.username
        });
      }
});

router.get('/:channelId', (req, res, next) => {
    const id = req.params.channelId;
    if (id === 'GG') {
        res.status(200).json({
            message: 'Discovered special ID',
            id: id,
            username: req.user.username || ""
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:channelId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated channel!'
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted channel!'
    });
});

module.exports = router;