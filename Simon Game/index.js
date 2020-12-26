var userPattern = [];
$('#green').click(function () {
    userPattern.push('green');
    animateplay('green');
    check();
});
$('#red').click(function () {
    userPattern.push('red');
    animateplay('red');
    check();
});
$('#blue').click(function () {
    userPattern.push('blue');
    animateplay('blue');
    check();
});
$('#yellow').click(function () {
    userPattern.push('yellow');
    animateplay('yellow');
    check();
})
var sequence = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
function nextSequence() {
    randomNum = Math.round(Math.random() * 3);
    gamePattern.push(sequence[randomNum]);
    animateplay(sequence[randomNum]);
}
started = false;
var lvl = 1;
function startOver() {
    if (started == false) {
        started = true;
        nextSequence();
        $('h1').text('Level ' + lvl);
    }
}
function check() {
    if (userPattern[userPattern.length - 1] != gamePattern[userPattern.length - 1]) {
        var temp = new Audio('sounds/wrong.mp3');
        temp.play();
        $('h1').text('Game Over !!!! Press any key to Restart');
        $('body').css('background-color', 'red');
        setTimeout(function () {
            $('body').css('background-color', '#011F3F')
        }, 200);
        started = false;
        lvl = 1;
        userPattern = [];
        gamePattern = [];
    }
    else if (userPattern.length == gamePattern.length) {
        userPattern = [];
        lvl++;
        $('h1').text('Level ' + lvl);
        setTimeout(function () {
            nextSequence();
        }, 1000);

    }
}
$(document).keydown(function () {
    startOver();
})

function animateplay(name) {
    var temp = new Audio('sounds/' + name + '.mp3');
    temp.play();
    $('#' + name).addClass('pressed');
    setTimeout(function () {
        $('#' + name).removeClass('pressed');
    }, 100);
}
