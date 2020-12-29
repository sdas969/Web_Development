const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    var today = new Date();
    if (today.getDay() === 6 || today.getDay() === 0)
        res.sendFile(__dirname + '/index.html');
    else
        res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 2000, function () {
    console.log('server listening');
});