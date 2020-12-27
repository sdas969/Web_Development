const express = require('express');
var app = express();
var bodyParser = require('body-parser');

const https = require('https');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.post('/', function (req, res) {
    var loc = req.body.loc;
    console.log(loc);
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + loc + '&appid=0dec4553f0471255d96b1dea9e772223&units=metric';
    https.get(url, function (response) {
        response.on('data', function (data) {
            var weatherData = JSON.parse(data);
            res.write('<h1>Weather is ' + weatherData.weather[0].description + '</h1>');
            res.write('<h1>The Weather in ' + loc + ' is ' + weatherData.main.temp + '</h1>');
            res.write('<img src="https://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png">');
            res.send();
        });
    });
});

app.listen(2000, function () {
    console.log('Server running');
});