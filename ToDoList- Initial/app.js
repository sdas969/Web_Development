const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let items = [];

app.get('/', function (req, res) {
    let today = new Date();
    let day = today.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });
    res.render('list', { dayname: day, items: items });
});

app.post('/', function (req, res) {
    items.push(req.body.newitem);
    res.redirect('/');
});

app.listen(process.env.PORT || 2000, function () {
    console.log('server listening');
});