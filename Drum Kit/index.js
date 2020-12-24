for (var i = 0; i <= 6; i++) {
    document.querySelectorAll('button')[i].addEventListener('click',
        function () {
            this.style.color = 'white';
        }
    );
}
// var temp = new Audio('sounds/tom-1.mp3');
// temp.play();