for (var i = 0; i <= 6; i++) {
    document.querySelectorAll('button')[i].addEventListener('click',
        function () {
            var innerText = this.innerText;
            switch (innerText) {
                case 'w':
                    var temp = new Audio('sounds/crash.mp3');
                    temp.play();
                    break;
                case 'a':
                    var temp = new Audio('sounds/kick-bass.mp3');
                    temp.play();
                    break;
                case 's':
                    var temp = new Audio('sounds/snare.mp3');
                    temp.play();
                    break;
                case 'd':
                    var temp = new Audio('sounds/tom-1.mp3');
                    temp.play();
                    break;
                case 'j':
                    var temp = new Audio('sounds/tom-2.mp3');
                    temp.play();
                    break;
                case 'k':
                    var temp = new Audio('sounds/tom-3.mp3');
                    temp.play();
                    break;
                case 'l':
                    var temp = new Audio('sounds/tom-4.mp3');
                    temp.play();
                    break;
                default:
                    break;
            }
            buttonAnimation(innerText);
        }
    );
}
// var temp = new Audio('sounds/tom-1.mp3');
// temp.play();
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'w':
            var temp = new Audio('sounds/crash.mp3');
            temp.play();
            break;
        case 'a':
            var temp = new Audio('sounds/kick-bass.mp3');
            temp.play();
            break;
        case 's':
            var temp = new Audio('sounds/snare.mp3');
            temp.play();
            break;
        case 'd':
            var temp = new Audio('sounds/tom-1.mp3');
            temp.play();
            break;
        case 'j':
            var temp = new Audio('sounds/tom-2.mp3');
            temp.play();
            break;
        case 'k':
            var temp = new Audio('sounds/tom-3.mp3');
            temp.play();
            break;
        case 'l':
            var temp = new Audio('sounds/tom-4.mp3');
            temp.play();
            break;
        default:
            break;
    }
    buttonAnimation(event.key);
})

function buttonAnimation(pressedkey) {
    document.querySelector('.' + pressedkey).classList.add('pressed');
    setTimeout(function () {
        document.querySelector('.' + pressedkey).classList.remove('pressed');
    }, 500);
}