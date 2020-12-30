exports.getDate = function () {
    let date = new Date();
    let currentDate = date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });
    return currentDate;
}

exports.getDay = function () {
    let date = new Date();
    let currentDate = date.toLocaleDateString('en-US', { weekday: 'long' });
    return currentDate;
}