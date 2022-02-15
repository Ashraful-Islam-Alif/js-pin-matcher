function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin
}

document.getElementById('key-numbers').addEventListener('click', function (event) {
    const number = event.target.innerText
    const numberInput = document.getElementById('input-numbers')
    if (isNaN(number)) {
        if (number == 'C') {
            numberInput.value = '';
        }
        if (number == '<') {
            let pinString = numberInput.value
            const editedText = pinString.slice(0, -1)
            numberInput.value = editedText
        }
    }
    else {
        const prevNumber = numberInput.value
        const newNumber = prevNumber + number
        numberInput.value = newNumber
    }
})

function verifyPin() {
    const displayPin = document.getElementById('display-pin')
    const inputNumber = document.getElementById('input-numbers')
    const notifyNotMatched = document.getElementById('notify-notmatched')
    const notifyMatched = document.getElementById('notify-matched')
    if (displayPin.value == inputNumber.value) {
        notifyMatched.style.display = 'block';
        notifyNotMatched.style.display = 'none';
    }
    else {
        notifyMatched.style.display = 'none';
        notifyNotMatched.style.display = 'block';
    }
}