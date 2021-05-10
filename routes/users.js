const express = require('express');
const router = express.Router();

//Home page
router.get('/welcome', (req, res) =>{
    res.render('welcome', { title: 'Pick-A-Flick | Book Movies Online | Action | Animated | Crime | Drama | Horror | Romance | Science-fiction | Thriller |' });
})

//Action movies page
router.get('/action', (req, res) =>{
    res.render('action', { title: 'Action Movies' });
})

//Animated movies page
router.get('/animated', (req, res) =>{
    res.render('animated', { title: 'Animated Movies' });
})

//Crime movies page
router.get('/crime', (req, res) =>{
    res.render('crime', { title: 'Crime Movies' });
})

//Drama movies page
router.get('/drama', (req, res) =>{
    res.render('drama', { title: 'Drama Movies' });
})

//Horror movies page
router.get('/horror', (req, res) =>{
    res.render('horror', { title: 'Horror Movies' });
})

//Romance movies page
router.get('/romance', (req, res) =>{
    res.render('romance', { title: 'Romance Movies' });
})

//Science fiction movies page
router.get('/sci-fi', (req, res) =>{
    res.render('sci-fi', { title: 'Science Fiction Movies' });
})

//Thriller movies page
router.get('/thriller', (req, res) =>{
    res.render('thriller', { title: 'Thriller Movies' });
})

//Booking page
router.get('/movies', (req, res) =>{
    res.render('movies', { title: 'Book now' });
})

//Payment confirmation page
router.get('/confirm', (req, res) =>{
    res.render('confirm', { title: 'Payment Confirmation' });
})

//Payment success page
router.get('/success', (req, res) =>{
    res.render('success', { title: 'Successful Payment' });
})

//Footer learn more page
router.get('/learn_more', (req, res) =>{
    res.render('learn_more', { title: 'Learn More' });
})

//Sign up page
router.get('/signup', (req, res) =>{
    res.render('signup', { title: 'Sign up' });
})

//Login page
router.get('/login', (req, res) =>{
    res.render('login', { title: 'Log in' });
})



module.exports = router;
