const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    var today = new Date();
    res.render('list', { foo: today.getDate() });
});

app.listen(process.env.PORT || 2000, function () {
    console.log('server listening');
});