dice1 = Math.round(Math.random() * 5 + 1);
dice2 = Math.round(Math.random() * 5 + 1);
document.querySelector('#dice1').setAttribute('src', 'images/dice' + dice1.toString() + '.png');
document.querySelector('#dice2').setAttribute('src', 'images/dice' + dice2.toString() + '.png')
if (dice1 > dice2) {
    document.querySelector('#winner').innerText = 'Player 1 Won!!!!';
}
else if (dice2 > dice1) {
    document.querySelector('#winner').innerText = 'Player 2 Won!!!!';
}
if (dice1 == dice2) {
    document.querySelector('#winner').innerText = 'Tie!!!!';
}