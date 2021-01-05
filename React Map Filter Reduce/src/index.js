import emojipedia from './emojipedia.js';
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
numbers.map(function (num) {
    return num
});
var filteredArr = numbers.filter(function (num) {
    return num > 10;
});
console.log(filteredArr);

var ans = numbers.reduce(function (accumulator, currentNum) {
    return accumulator + currentNum;
});
console.log(ans);

var foundNum = numbers.find(function (num) {
    return num > 10;
});
console.log(foundNum);

var foundIndex = numbers.findIndex(function (num) {
    return num > 10;
});
console.log(foundIndex);

var truncatedEmoji = emojipedia.map(function (emojiEntry) {
    return emojiEntry.meaning.substring(0, 100);
});
console.log(truncatedEmoji);