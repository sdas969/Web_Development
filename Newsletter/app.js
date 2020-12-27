const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/signup.html');
});

app.listen(2000, function () {
    console.log('Server listening');
});




