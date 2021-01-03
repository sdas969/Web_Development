const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');

app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/wikiDB', { useNewUrlParser: true, useUnifiedTopology: true });

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

const Post = new mongoose.model('article', postSchema);



app.route('/articles')
    .get(function (req, res) {
        Post.find(function (err, foundItems) {
            if (!err)
                res.send(foundItems);
        })
    })
    .post(function (req, res) {
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content
        });
        newPost.save(function (err) {
            if (!err)
                res.send('Success');
            else
                res.send(err);
        });
    })
    .delete(function (req, res) {
        Item.deleteMany(function (err) {
            if (!err)
                res.send('Deleted');
            else
                res.send(err);
        });
    });



app.route('/articles/:postName')
    .get(function (req, res) {
        Post.findOne({ title: req.params.postName }, function (err, post) {
            if (!err)
                res.send(post);
            else
                res.send(err);
        });
    })
    .put(function (req, res) {
        Post.update(
            { title: req.params.postName },
            { title: req.body.title, content: req.body.content },
            { overwrite: true },
            function (err) {
                if (!err)
                    res.send('Updated');
                else
                    res.send(err);
            });
    })
    .patch(function (req, res) {
        Post.update(
            { title: req.params.postName },
            { $set: req.body },
            function (err) {
                if (!err)
                    res.send('Updated');
                else
                    res.send(err);
            }
        );
    })
    .delete(function (req, res) {
        Post.deleteOne({ title: req.params.postName }, function (err) {
            if (!err)
                res.send('Deleted Post');
            else
                res.send(err);
        });
    })











app.listen(3000, function () {
    console.log('Server running on Port 3000');
});