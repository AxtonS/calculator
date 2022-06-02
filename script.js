let previousValue = 0;
let displayValue = '0';
let previousOperator = '';

function add(a, b){
    return (a + b).toString();
}
function subtract(a, b){
    return (a - b).toString();
}
function multiply(a, b){
    return (a * b).toString();
}
function divide(a, b){
    return (a / b).toString();
}
function operate(operator, a, b){
    return operator(a, b);
}

const display = document.querySelector('#display');
display.textContent = displayValue;


//number buttons
const one = document.querySelector('#one');
one.addEventListener('click', function(){
    if(displayValue === '0'){
        displayValue = '1';
        display.textContent = displayValue;
    } else if(previousOperator === 'equals'){
        previousOperator = '';
        displayValue = '1';
        display.textContent = displayValue;
    } else {
        displayValue += '1';
        display.textContent = displayValue;
    } 
});
const two = document.querySelector('#two');
two.addEventListener('click', function(){
    if(displayValue === '0'){
        displayValue = '2';
        display.textContent = displayValue;
    } else if(previousOperator === 'equals'){
        previousOperator = '';
        displayValue = '2';
        display.textContent = displayValue;
    } else {
        displayValue += '2';
        display.textContent = displayValue;
    } 
});
const three = document.querySelector('#three');
three.addEventListener('click', function(){
    if(displayValue === '0'){
        displayValue = '3';
        display.textContent = displayValue;
    } else if(previousOperator === 'equals'){
        previousOperator = '';
        displayValue = '3';
        display.textContent = displayValue;
    } else {
        displayValue += '3';
        display.textContent = displayValue;
    } 
});
const four = document.querySelector('#four');
four.addEventListener('click', function(){
    if(displayValue === '0'){
        displayValue = '4';
        display.textContent = displayValue;
    } else if(previousOperator === 'equals'){
        previousOperator = '';
        displayValue = '4';
        display.textContent = displayValue;
    } else {
        displayValue += '4';
        display.textContent = displayValue;
    } 
});
const five = document.querySelector('#five');
five.addEventListener('click', function(){
    if(displayValue === '0'){
        displayValue = '5';
        display.textContent = displayValue;
    } else if(previousOperator === 'equals'){
        previousOperator = '';
        displayValue = '5';
        display.textContent = displayValue;
    } else {
        displayValue += '5';
        display.textContent = displayValue;
    } 
});
const six = document.querySelector('#six');
six.addEventListener('click', function(){
    if(displayValue === '0'){
        displayValue = '6';
        display.textContent = displayValue;
    } else if(previousOperator === 'equals'){
        previousOperator = '';
        displayValue = '6';
        display.textContent = displayValue;
    } else {
        displayValue += '6';
        display.textContent = displayValue;
    } 
});
const seven = document.querySelector('#seven');
seven.addEventListener('click', function(){
    if(displayValue === '0'){
        displayValue = '7';
        display.textContent = displayValue;
    } else if(previousOperator === 'equals'){
        previousOperator = '';
        displayValue = '7';
        display.textContent = displayValue;
    } else {
        displayValue += '7';
        display.textContent = displayValue;
    } 
});
const eight = document.querySelector('#eight');
eight.addEventListener('click', function(){
    if(displayValue === '0'){
        displayValue = '8';
        display.textContent = displayValue;
    } else if(previousOperator === 'equals'){
        previousOperator = '';
        displayValue = '8';
        display.textContent = displayValue;
    } else {
        displayValue += '8';
        display.textContent = displayValue;
    } 
});
const nine = document.querySelector('#nine');
nine.addEventListener('click', function(){
    if(displayValue === '0'){
        displayValue = '9';
        display.textContent = displayValue;
    } else if(previousOperator === 'equals'){
        previousOperator = '';
        displayValue = '9';
        display.textContent = displayValue;
    } else {
        displayValue += '9';
        display.textContent = displayValue;
    } 
});
const zero = document.querySelector('#zero');
zero.addEventListener('click', function(){
    if(displayValue === '0'){
        displayValue = '0';
        display.textContent = displayValue;
    } else if(previousOperator === 'equals'){
        previousOperator = '';
        displayValue = '0';
        display.textContent = displayValue;
    } else {
        displayValue += '0';
        display.textContent = displayValue;
    } 
});

//operator buttons
const clear = document.querySelector('#clear');
clear.addEventListener('click', function(){
    previousOperator = '';
    previousValue = '0';
    displayValue = '0';
    display.textContent = displayValue;
});

const addButton = document.querySelector('#add');
addButton.addEventListener('click', function(){
    if(previousOperator === ''){
        previousValue = displayValue;
    } else {
    const a = parseFloat(previousValue);
    const b = parseFloat(displayValue);
    previousValue = operate(add, a, b);    
    } previousOperator = 'add';
    displayValue = '0';
    display.textContent = displayValue;
});
const subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', function(){
    if(previousOperator === ''){
        previousValue = displayValue;
    } else {
    const a = parseFloat(previousValue);
    const b = parseFloat(displayValue);
    previousValue = operate(subtract, a, b);    
    } previousOperator = 'subtract';
    displayValue = '0';
    display.textContent = displayValue;});
const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', function(){
    if(previousOperator === ''){
        previousValue = displayValue;
    } else {
    const a = parseFloat(previousValue);
    const b = parseFloat(displayValue);
    previousValue = operate(multiply, a, b);    
    } previousOperator = 'multiply';
    displayValue = '0';
    display.textContent = displayValue;
});
const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', function(){
    if(previousOperator === ''){
        previousValue = displayValue;
    } else {
    const a = parseFloat(previousValue);
    const b = parseFloat(displayValue);
    previousValue = operate(divide, a, b);    
    } previousOperator = 'divide';
    displayValue = '0';
    display.textContent = displayValue;
});
const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', function(){
    if(previousOperator === 'equals'){
        display.textContent = displayValue;
    } else if(previousOperator === 'add'){
        const a = parseFloat(previousValue);
        const b = parseFloat(displayValue);
        previousValue = '0';
        displayValue = operate(add, a, b);
        display.textContent = displayValue;
    } else if(previousOperator === 'subtract'){
        const a = parseFloat(previousValue);
        const b = parseFloat(displayValue);
        previousValue = '0';
        displayValue = operate(subtract, a, b);
        display.textContent = displayValue;
    } else if(previousOperator === 'multiply'){
        const a = parseFloat(previousValue);
        const b = parseFloat(displayValue);
        previousValue = '0';
        displayValue = operate(multiply, a, b);
        display.textContent = displayValue;
    } else if(previousOperator === 'divide'){
        const a = parseFloat(previousValue);
        const b = parseFloat(displayValue);
        previousValue = '0';
        displayValue = operate(divide, a, b);
        display.textContent = displayValue;
    } previousOperator = 'equals';
});