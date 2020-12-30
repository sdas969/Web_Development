const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

var items = [];

app.get('/', function (req, res) {
    var today = new Date();
    var day = today.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });
    res.render('list', { dayname: day, items: items });
});

app.post('/', function (req, res) {
    items.push(req.body.newitem);
    console.log(items);
    res.redirect('/');
});

app.listen(process.env.PORT || 2000, function () {
    console.log('server listening');
});