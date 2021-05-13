const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//User and Booked Movies model
const User = require('../models/User');
const Movie = require('../models/Movie');
const Seats = require('../models/Seats');

//Home page
router.get('/welcome', (req, res) =>{
    res.render('welcome', { title: 'Pick-A-Flick | Book Movies Online | Action | Animated | Crime | Drama | Horror | Romance | Science-fiction | Thriller |' });
})

//Bookings page
router.get('/bookings', (req, res) =>{
    var movieName = []
    var seatsBooked = []
    if (req.isAuthenticated()) {
        
        Movie.find({ username: username })
            .then(user => {
                for(var i=0; i<user.length; i++){
                    movieName.push(user[i].moviename);
                    seatsBooked.push(user[i].seating);
                }
                res.render('bookings', { 
                    title: 'My Bookings',
                    movieName: movieName,
                    seatsBooked: seatsBooked
                });
            })
            .catch(err => console.log(err));
    }
    else{
        req.flash('error_msg', 'Please log in first!');
        res.redirect('login');
    }
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

//Payment confirmation handle
router.post('/confirm', (req, res) =>{
    if (req.isAuthenticated()) {
        const { moviename, seating, addonscost, x, y, z, a } = req.body;
        const newBooking = new Movie({
            username,
            moviename,
            seating,
        });
        console.log(newBooking);
        newBooking.save()
            .then( user => {
                res.redirect('/users/success');
            })
            .catch(err => console.log(err));
    } 

    else {
        req.flash('error_msg', 'Please log in first!');
        res.redirect('login');
    }
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

//Signup handle
router.post('/signup', (req, res) =>{
    console.log(req.body)
    const { username, email, password, cpassword } = req.body;
    let errors = []
    User.findOne({ username: username })
        .then(user => {
            if(user){
                //Username exists
                errors.push({ msg: 'Username already taken!' })
                c += 1;
                res.render('signup',{
                    title: 'Sign up',
                    errors,
                    username,
                    email,
                    password,
                    cpassword
                });
            }

            else{
                User.findOne({ email: email })
                    .then(user => {
                        if(user){
                            //User email exists
                            errors.push({ msg: 'Email is already registered!' })
                            res.render('signup',{
                                title: 'Sign up',
                                errors,
                                username,
                                email,
                                password,
                                cpassword
                            });
                        }
                    else{
                        const newUser = new User({
                            username,
                            email,
                            password,
                        });
                        console.log(newUser);
                        // Hash password
                        bcrypt.genSalt(10, (err, salt) => 
                            bcrypt.hash(newUser.password, salt, (err, hash) =>{
                                if(err) throw err;
                                //Set password to hashed password
                                newUser.password = hash;
                                //Save user
                                newUser.save()
                                    .then( user => {
                                        req.flash('success_msg', 'You are now registered and can log in');
                                        res.redirect('/users/login');
                                    })
                                    .catch(err => console.log(err));
                        }))
                    }
                })
            }
        });
})


//Login page
router.get('/login', (req, res) =>{
    res.render('login', { title: 'Log in' });
})

//Login handle
router.post('/login', (req, res, next) => {
    
    passport.authenticate('local', {
      successRedirect: '/users/welcome',
      failureRedirect: '/users/login',
      failureFlash: true
    })(req, res, next);
    username = req.body.username;
});

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You have been logged out');
    username = '';
    res.redirect('/users/login');
});


module.exports = router;
