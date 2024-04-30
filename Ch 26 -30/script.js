let input = document.getElementById('input');
let output = document.getElementById('result-box');

document.getElementById('clear-btn').onclick = function () {
    input.value = null;
}

document.getElementById('clear-btn-2').onclick = function () {
    output.innerHTML = null;
}

function show(output) {
    document.getElementById('result-box').innerHTML = output;
}

let origStringValue = 25.12345;
document.getElementById('origValue').innerText = origStringValue;

// Round a Number
function roundNumber() {
    let roundedValue = Math.round(origStringValue);
    show(roundedValue);
}

// Ceil a Number
function ceilNumber() {
    let ceiledValue = Math.ceil(origStringValue);
    show(ceiledValue);
}

// Floor a Number
function floor() {
    let floorValue = Math.floor(origStringValue);
    show(floorValue);
}

// Generate a Random Number
function random() {
    let randomNumber = Math.random();
    show(randomNumber);
}

// Throw a Dice
function dice() {
    let diceNum = 1 + Math.floor(Math.random() * 6);
    let rolledDice = '<span style="font-weight: 500; font-size: 2.5rem;">' + diceNum + '</span>' + '<br>Generating a Random Number from 1 to 6';
    show(rolledDice);
}

// Generate a Strong Password
function strongPassword() {
    let input = document.getElementById('input').value;
    if (!input) {
        alert("Please enter the password length in input field.");
        return;
    }
    input = Number(input);
    let generatedPassword = "";
    for (let i = 0; i < input; i++) {
        let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
        show(generatedPassword);
    }
}

// Converting Strings
function convertString() {
    let input = document.getElementById('input').value;
    if (!input) {
        alert("Please enter any numbers in input field.");
        return;
    }
    input = Number(input);
    let convertedString = '<span style="color: blue;">' + input + '</span>';
    show(convertedString);
}

// Controlling Length
function controlLength() {
    let input = document.getElementById('input').value;
    if (!input) {
        alert("Please enter some numbers in input field.");
        return;
    }
    input = Number(input);
    let controlledLength = input.toFixed(2);
    show(controlledLength);
}

// Calculate GST
function gst() {
    let input = document.getElementById('input').value;
    if (!input) {
        alert("Please enter your amount in input field.");
        return;
    }
    input = Number(input);
    let taxPercent = +prompt('Please enter your tax percentage');
    let tax = (taxPercent / 100) * input;
    let price = input + tax;
    let amount = 'Your Bill = ' + input + '<br>Tax ' + taxPercent + '% = ' + tax + '<br> Total Amount including Tax = ' + price;
    show(amount);
}