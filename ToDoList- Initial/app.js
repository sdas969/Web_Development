const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
let workItems = [];
let items = [];

app.get('/', function (req, res) {
    res.render('list', { listTitle: date.getDate(), items: items });
});
app.get('/work', function (req, res) {
    res.render('list', { listTitle: 'Work', items: workItems });
});
app.post('/', function (req, res) {

    if (req.body.list == 'Work') {
        if (req.body.newitem != '')
            workItems.push(req.body.newitem);
        res.redirect('/work');
    } else {
        if (req.body.newitem != '')
            items.push(req.body.newitem);
        res.redirect('/');
    }
});
app.get('/about', function (req, res) {
    res.render('about',);
})

app.listen(process.env.PORT || 2000, function () {
    console.log('server listening');
});