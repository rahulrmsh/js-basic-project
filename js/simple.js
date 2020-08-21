var readyGo = document.querySelector('#refresh');
readyGo.onclick = function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    document.querySelector('#left').setAttribute('src', 'images/dice' + randomNumber1 + '.png');
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector('#right').setAttribute('src', 'images/dice' + randomNumber2 + '.png');
}