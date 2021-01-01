const MongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose');

const assert = require('assert');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please check your data entry'],
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
    favouriteFruit: fruitSchema,
});

const favFruit = new Fruit(
    {
        name: 'Niceee1',
        rating: 10,
        review: 'Hello',
    }
);

favFruit.save();

const favFruit1 = new Fruit({
    name: 'niceee1',
    rating: 10,
    review: 'Hello1',
});
favFruit1.save();

const Person = mongoose.model('person', personSchema);

const favPerson = new Person({
    name: 'Niceeeeeeeeeeeee',
    age: 21,
    favouriteFruit: favFruit,
});

Person.updateOne({ _id: '5fef8f2284d67e4cccf0d426' }, { favouriteFruit: favFruit1 }, function (err) {
    if (err)
        console.log(err);
    else
        console.log('Updated');
});

favPerson.save();
const person = new Person({
    name: 'Smara',
    age: 21,
});

person.save();

Fruit.updateOne({ _id: '5fef883600e43a626c67cc66' }, { name: 'niceeee' }, function (err) {
    if (err)
        console.log(err);
    else
        console.log('Updated Successfully');

});
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


Fruit.deleteOne({ name: 'niceeee' }, function (err) {
    if (err)
        console.log(err);
    else
        console.log('Deleted Successfully');
});

Person.deleteMany({ name: 'Smarajit' }, function (err) {
    if (err)
        console.log(err);
    else
        console.log('Deleted successfully');
});