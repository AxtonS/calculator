function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function operate(operator, a, b){
    return operator(a, b);
}

const display = document.querySelector('#display');
let displayValue = '0';
display.textContent = displayValue;

const one = document.querySelector('#one');
one.addEventListener('click', function(){
    if(displayValue === '0'){
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
    } else {
        displayValue += '0';
        display.textContent = displayValue;
    } 
});
const clear = document.querySelector('#clear');
clear.addEventListener('click', function(){
    displayValue = '0';
    display.textContent = displayValue;
})

//const button = document.querySelectorAll('button');
//function printToDisplay(){
//    this.
//    display.textContent = '1';
//};