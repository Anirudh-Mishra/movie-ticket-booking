const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

//Welcome page
router.get('/', (req, res) => res.render('welcome'));

//Dashboard page
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('/dashboard', { 
    title: 'Pick-A-Flick | Book Movies Online | Action | Animated | Crime | Drama | Horror | Romance | Science-fiction | Thriller |'
    })
}
);


module.exports = router;
