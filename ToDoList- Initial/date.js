module.exports.getDate = getDate;
module.exports.getDay = getDay;
function getDate() {
    let date = new Date();
    let currentDate = date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });
    return currentDate;
}

function getDay() {
    let date = new Date();
    let currentDate = date.toLocaleDateString('en-US', { weekday: 'long' });
    return currentDate;
}