var refreshBtn = document.querySelector('#refresh');
var resetBtn = document.querySelector('#reset');
refreshBtn.onclick = function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    while (randomNumber1 === randomNumber2) {
        randomNumber2 = Math.floor(Math.random() * 6) + 1;
    }
    document.querySelector('#left').setAttribute('src', 'images/dice' + randomNumber1 + '.png');
    document.querySelector('#right').setAttribute('src', 'images/dice' + randomNumber2 + '.png');
}
resetBtn.onclick = function() {
    var randomNumber1 = 1;
    document.querySelector('#left').setAttribute('src', 'images/dice' + randomNumber1 + '.png');
    var randomNumber2 = 1;
    document.querySelector('#right').setAttribute('src', 'images/dice' + randomNumber2 + '.png');
}