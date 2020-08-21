var refreshBtn = document.querySelector('#refresh');
var resetBtn = document.querySelector('#reset');
var header = document.querySelector('#header');
refreshBtn.onclick = function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    while (randomNumber1 === randomNumber2) {
        randomNumber2 = Math.floor(Math.random() * 6) + 1;
    }
    if (randomNumber1 > randomNumber2) {
        header.textContent = 'Left Won';
    } else {
        header.textContent = 'Right Won';
    }
    document.querySelector('#left').setAttribute('src', 'images/dice' + randomNumber1 + '.png');
    document.querySelector('#right').setAttribute('src', 'images/dice' + randomNumber2 + '.png');
}
resetBtn.onclick = function() {
    header.textContent = 'Pick A Side';
    var randomNumber1 = 1;
    document.querySelector('#left').setAttribute('src', 'images/dice' + randomNumber1 + '.png');
    var randomNumber2 = 1;
    document.querySelector('#right').setAttribute('src', 'images/dice' + randomNumber2 + '.png');
}