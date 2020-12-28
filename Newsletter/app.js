const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/signup.html');
});
app.get('/styles.css', function (req, res) {
    res.sendFile(__dirname + '/styles.css');
});
app.post('/?', function (req, res) {
    var first_name = req.body.firstname;
    var last_name = req.body.lastname;
    var email = req.body.email;
    var data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: first_name,
                    LNAME: last_name,
                },
            }
        ]
    }
    var jsonData = JSON.stringify(data);
    var url = 'https://us7.api.mailchimp.com/3.0/lists/e6ce392712'
    var options = {
        method: 'POST',
        auth: 'sdas9:1a86c5c82f558d2e84d2d73e095ff38b-us7',
    }
    var returnData;
    const req2 = https.request(url, options, function (res1) {

        if (res1.statusCode === 200) {
            res.sendFile(__dirname + '/success.html');
        }
        else
            res.sendFile(__dirname + '/failure.html');
    });
    req2.write(jsonData);
    req2.end();

});
app.post('/failure', function (req, res) {
    res.redirect('/');
});
app.listen(process.env.PORT || 2000, function () {
    console.log('Server listening');
});




