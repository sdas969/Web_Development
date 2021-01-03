// require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const md5 = require('md5');
// const encrypt = require('mongoose-encryption');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = mongoose.Schema({
    email: String,
    password: String,
});

// const secret = process.env.SECRET;

// userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] });

const saltRounds = 2;

const User = mongoose.model('User', userSchema);

app.route('/')
    .get(function (req, res) {
        res.render('home');
    });

app.route('/login')
    .get(function (req, res) {
        res.render('login');
    })
    .post(function (req, res) {
        enteredUserName = req.body.username;
        // enteredPassword = md5(req.body.password);
        enteredPassword = req.body.password;
        User.findOne({ email: enteredUserName }, function (err, foundUser) {
            if (foundUser) {
                bcrypt.compare(enteredPassword, foundUser.password, function (err, result) {
                    if (result === true)
                        res.render('secrets');
                    else
                        res.redirect('/login');
                })
            }
            else
                res.redirect('/login');
        });
    });

app.route('/register')
    .get(function (req, res) {
        res.render('register');
    })
    .post(function (req, res) {
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
            const newUser = User({
                email: req.body.username,
                // password: md5(req.body.password)
                password: hash
            });
            newUser.save();
            res.render('secrets');
        });
    });









app.listen(3000, function () {
    console.log('Server Running');
});