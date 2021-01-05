require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcrypt');
const findOrCreate = require('mongoose-findorcreate');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
// const md5 = require('md5');
// const encrypt = require('mongoose-encryption');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'Thesecretfile',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
// const secret = process.env.SECRET;

// userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] });

// const saltRounds = 2;

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
},
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));


app.route('/')
    .get(function (req, res) {
        res.render('home');
    });

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/secrets',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/secrets');
    });

app.route('/login')
    .get(function (req, res) {
        res.render('login');
    })
    .post(function (req, res) {
        enteredUserName = req.body.username;
        enteredPassword = req.body.password;

        const loginUser = new User({
            username: enteredUserName,
            password: enteredPassword
        });

        req.login(loginUser, function (err) {
            if (err) {
                console.log(err);
                res.redirect('/login');
            }
            else {
                passport.authenticate('local')(req, res, function () {
                    res.redirect('/secrets');
                });
            }
        });




        // enteredPassword = md5(req.body.password);
        // User.findOne({ email: enteredUserName }, function (err, foundUser) {
        //     if (foundUser) {
        //         bcrypt.compare(enteredPassword, foundUser.password, function (err, result) {
        //             if (result === true)
        //                 res.render('secrets');
        //             else
        //                 res.redirect('/login');
        //         })
        //     }
        //     else
        //         res.redirect('/login');
        // });
    });

app.route('/register')
    .get(function (req, res) {
        res.render('register');
    })
    .post(function (req, res) {

        User.register({ username: req.body.username }, req.body.password, function (err, user) {
            if (err) {
                console.log(err);
                res.redirect('/register');
            }
            else {
                passport.authenticate('local')(req, res, function () {
                    res.redirect('/secrets');
                });
            }

        });




        // bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        //     const newUser = User({
        //         email: req.body.username,
        //         // password: md5(req.body.password)
        //         password: hash
        //     });
        //     newUser.save();
        //     res.render('secrets');
        // });
    });

app.route('/secrets')
    .get(function (req, res) {
        User.find({ secret: { $ne: null } }, function (err, foundUsers) {
            if (err)
                console.log(err);
            else
                res.render('secrets', { Users: foundUsers });
        });
        // if (req.isAuthenticated())
        //     res.render('secrets');
        // else
        //     res.redirect('/login');
    });


app.route('/logout')
    .get(function (req, res) {
        req.logout();
        res.render('home');
    });

app.route('/submit')
    .get(function (req, res) {
        if (req.isAuthenticated())
            res.render('submit');
        else
            res.redirect('/login');
    })
    .post(function (req, res) {
        User.findById(req.user.id, function (err, foundUser) {
            foundUser.secret = req.body.secret;
            foundUser.save(
                function (err) {
                    if (err)
                        console.log(err);
                    else
                        res.redirect('/secrets');
                }
            );
        });
    });







app.listen(3000, function () {
    console.log('Server Running');
});