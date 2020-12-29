const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    var today = new Date();
    var day = today.getDay();
    var ans = '';
    switch (day) {
        case 0: ans = 'Sunday'; break;
        case 1: ans = 'Monday'; break;
        case 2: ans = 'Tuesday'; break;
        case 3: ans = 'Wednesday'; break;
        case 4: ans = 'Thursday'; break;
        case 5: ans = 'Friday'; break;
        case 6: ans = 'Saturday'; break;
        default: ans = ''; break;
    }
    res.render('list', { dayname: ans, day: day });
});

app.listen(process.env.PORT || 2000, function () {
    console.log('server listening');
});