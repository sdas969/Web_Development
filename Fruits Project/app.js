const MongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose');

const assert = require('assert');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit(
    {
        name: 'hello',
        rating: 5,
        review: 'niceeee'
    }
);
fruit.save();
Fruit.insertMany([
    {
        name: 'hello1',
        rating: 5,
        review: 'nicee1'
    },
    {
        name: 'hello2',
        rating: 5,
        review: 'nicee2'
    },
    {
        name: 'hello3',
        rating: 5,
        review: 'nicee3'
    }
], function (err) {
    if (err)
        console.log(err);
    else
        console.log('Succefully added the entries');
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Person = mongoose.model('person', personSchema);

const person = new Person({
    name: 'Smarajit',
    age: 21
});

person.save();


Fruit.find(function (err, fruits) {
    if (err)
        console.log(err);
    else {
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
        mongoose.connection.close();
    }
});
