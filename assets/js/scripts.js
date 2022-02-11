var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function color() {
    if (currentNumber < 0) {
        return document.getElementById('currentNumber').style.color = 'red';
    } else {
        return document.getElementById('currentNumber').style.color = 'blue';
        }
}

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    color();
}


function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    color();
}