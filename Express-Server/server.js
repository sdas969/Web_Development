const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('<h1>Hello</h1>');
});
app.get('/contact', function (req, res) {
    res.send('<h1>Contact Page</h1>');
});
app.get('/about', function (req, res) {
    res.send('<h1>Smarajit Das</h1>');
});
app.listen(2000, function () {
    console.log('Server Started on Port 2000');
});