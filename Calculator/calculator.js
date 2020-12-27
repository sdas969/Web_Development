var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.post('/', function (req, res) {
    res.send('Sum is ' + (Number(req.body.num1) + Number(req.body.num2)).toString());
});
app.get('/bmicalculator', function (req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
});
app.post('/bmicalculator', function (req, res) {
    res.send('Your BMI is ' + (Number(req.body.weight) + Number(req.body.height)).toString());
});
app.listen(2000, function () {
    console.log('Server started on Port 2000');
});