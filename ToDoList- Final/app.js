const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost:27017/todolistDB', { useNewUrlParser: true, useUnifiedTopology: true });

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true }
});
const Item = new mongoose.model('item', itemSchema);



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



const items = [];
const workItems = [];

app.get("/", function (req, res) {
  const day = date.getDate();
  Item.find({}, function (err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany([{ name: 'Buy Food' }, { name: 'Cook Food' }, { name: 'Eat Food' }], function (err) {
        if (err)
          console.log(err);
        else
          console.log('updated');
      });
    }
    res.render("list", { listTitle: day, newListItems: foundItems });
  });
});

app.post("/", function (req, res) {
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    Item.insertMany([{
      name: item,
    }]);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post('/delete', function (req, res) {
  // Item.deleteOne({ _id: req.body.check }, function (err) {
  //   if (err)
  //     console.log(err);
  //   else
  //     console.log('deleted');
  // });
  Item.findByIdAndRemove(req.body.check, function (err) {
    if (err)
      console.log(err);
    else
      console.log('deleted');
  });
  res.redirect('/');
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
