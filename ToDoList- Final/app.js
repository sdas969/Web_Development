const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const lodash = require('lodash');

const app = express();
mongoose.connect('mongodb+srv://admin-sdas969:kajoldas@cluster0.rn2lf.mongodb.net/todolistDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

const listSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema],
});

const Item = new mongoose.model('item', itemSchema);
const List = new mongoose.model('list', listSchema);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



const items = [];
const workItems = [];

app.get("/", function (req, res) {
  Item.find({}, function (err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany([{ name: 'Buy Food' }, { name: 'Cook Food' }, { name: 'Eat Food' }], function (err) {
        if (err)
          console.log(err);
      });
    }
    res.render("list", { listTitle: 'Today', newListItems: foundItems });
  });
});


app.get('/:listName', function (req, res) {
  const listName = lodash.capitalize(req.params.listName);
  List.findOne({ name: listName }, function (err, foundItems) {
    if (!err) {
      if (!foundItems) {
        const defaultList = new List(
          {
            name: listName,
            items: [{ name: 'Buy Food' }, { name: 'Cook Food' }, { name: 'Eat Food' }],
          }
        );
        defaultList.save();
        res.redirect('/' + listName);
      }
      else
        res.render("list", { listTitle: listName, newListItems: foundItems.items });
    }
  });
});


app.post("/", function (req, res) {
  const item = req.body.newItem;
  const listName = req.body.list;
  if (listName === 'Today') {
    const tempItem = Item({
      name: item,
    });
    tempItem.save();
    res.redirect('/');
  }
  else {
    List.findOne({ name: listName }, function (err, foundItem) {
      if (!err) {
        const tempItem = Item({
          name: item,
        });

        foundItem.items.push(tempItem);
        foundItem.save();
        res.redirect('/' + listName);
      }
    });
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post('/delete', function (req, res) {

  const checked = req.body.check;
  const listTitle = req.body.listTitle;
  if (listTitle === 'Today') {
    Item.findByIdAndRemove(checked, function (err) {
      if (err)
        console.log(err);
    });
    res.redirect('/');
  }
  else {
    List.findOneAndUpdate({ name: listTitle }, { $pull: { items: { _id: checked } } }, function (err, foundItem) {
      if (!err)
        res.redirect('/' + listTitle);
    })
  }
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
