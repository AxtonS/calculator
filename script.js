function add(a, b) {
    let c = parseFloat(a) + parseFloat(b);
    if (c.length > 16) {
        c = c.toFixed(2);
        return c;
    } return c;
};
function subtract(a, b) {
    let c = parseFloat(a) - parseFloat(b);
    if (c.length > 16) {
        c = c.toFixed(2);
        return c;
    } return c;
};
function multiply(a, b) {
    let c = parseFloat(a) * parseFloat(b);
    if (c.length > 16) {
        c = c.toFixed(2);
        return c;
    } return c;
};
function divide(a, b) {
    let c = parseFloat(a) / parseFloat(b);
    if (c.length > 16) {
        c = c.toFixed(2);
        return c;
    } return c;
};

let operator = '';
let previous = '';
let current = '';

let display = document.querySelector('#display');
let oneBtn = document.querySelector('#one');
let twoBtn = document.querySelector('#two');
let threeBtn = document.querySelector('#three');
let fourBtn = document.querySelector('#four');
let fiveBtn = document.querySelector('#five');
let sixBtn = document.querySelector('#six');
let sevenBtn = document.querySelector('#seven');
let eightBtn = document.querySelector('#eight');
let nineBtn = document.querySelector('#nine');
let zeroBtn = document.querySelector('#zero');
let addBtn = document.querySelector('#add');
let subtractBtn = document.querySelector('#subtract');
let multiplyBtn = document.querySelector('#multiply');
let divideBtn = document.querySelector('#divide');
let equalsBtn = document.querySelector('#equals');
let clearBtn = document.querySelector('#clear');
let backBtn = document.querySelector('#backspace');
let decimalBtn = document.querySelector('#decimal');

display.textContent = '0';

oneBtn.addEventListener('click', function () {
    if (current.length >= 20) {
        display.textContent = current;
    }
    else if (current === '0') {
        current = '1';
        display.textContent = current;
    } else {
        current += '1';
        display.textContent = current;
    }
});
twoBtn.addEventListener('click', function () {
    if (current.length >= 20) {
        display.textContent = current;
    }
    else if (current === '0') {
        current = '2';
        display.textContent = current;
    } else {
        current += '2';
        display.textContent = current;
    }
});
threeBtn.addEventListener('click', function () {
    if (current.length >= 20) {
        display.textContent = current;
    }
    else if (current === '0') {
        current = '3';
        display.textContent = current;
    } else {
        current += '3';
        display.textContent = current;
    }
});
fourBtn.addEventListener('click', function () {
    if (current.length >= 20) {
        display.textContent = current;
    }
    else if (current === '0') {
        current = '4';
        display.textContent = current;
    } else {
        current += '4';
        display.textContent = current;
    }
});
fiveBtn.addEventListener('click', function () {
    if (current.length >= 20) {
        display.textContent = current;
    }
    else if (current === '0') {
        current = '5';
        display.textContent = current;
    } else {
        current += '5';
        display.textContent = current;
    }
});
sixBtn.addEventListener('click', function () {
    if (current.length >= 20) {
        display.textContent = current;
    }
    else if (current === '0') {
        current = '6';
        display.textContent = current;
    } else {
        current += '6';
        display.textContent = current;
    }
});
sevenBtn.addEventListener('click', function () {
    if (current.length >= 20) {
        display.textContent = current;
    }
    else if (current === '0') {
        current = '7';
        display.textContent = current;
    } else {
        current += '7';
        display.textContent = current;
    }
});
eightBtn.addEventListener('click', function () {
    if (current.length >= 20) {
        display.textContent = current;
    }
    else if (current === '0') {
        current = '8';
        display.textContent = current;
    } else {
        current += '8';
        display.textContent = current;
    }
});
nineBtn.addEventListener('click', function () {
    if (current.length >= 20) {
        display.textContent = current;
    }
    else if (current === '0') {
        current = '9';
        display.textContent = current;
    } else {
        current += '9';
        display.textContent = current;
    }
});
zeroBtn.addEventListener('click', function () {
    if (current.length >= 20) {
        display.textContent = current;
    }
    else if (current === '0') {
        current = '0';
        display.textContent = current;
    } else {
        current += '0';
        display.textContent = current;
    }
});
decimalBtn.addEventListener('click', function () {
    if (display.textContent.includes('.')) {
        display.textContent = current;
    } else if (current.length >= 20) {
        display.textContent = current;
    } else if (current === '0') {
        current = '0.';
        display.textContent = current;
    } else {
        current += '.';
        display.textContent = current;
    }
});

addBtn.addEventListener('click', function () {
    if (operator === '') {
        previous = display.textContent;
        current = '0';
        operator = 'add';
    } else if (operator === 'add') {
        previous = add(previous, current);
        current = '0';
        operator = 'add';
        display.textContent = previous;
    } else if (operator === 'subtract') {
        previous = subtract(previous, current);
        current = '0';
        operator = 'add';
        display.textContent = previous;
    } else if (operator === 'multiply') {
        previous = multiply(previous, current);
        current = '0';
        operator = 'add';
        display.textContent = previous;
    } else if (operator === 'divide') {
        if (current !== '0') {
            previous = divide(previous, current);
            current = '0';
            operator = 'add';
            display.textContent = previous;
        } else if (current === '0') {
            display.textContent = 'I refuse to divide by 0';
        }
    }
});
subtractBtn.addEventListener('click', function () {
    if (operator === '') {
        previous = display.textContent;
        current = '0';
        operator = 'subtract';
    } else if (operator === 'add') {
        previous = add(previous, current);
        current = '0';
        operator = 'subtract';
        display.textContent = previous;
    } else if (operator === 'subtract') {
        previous = subtract(previous, current);
        current = '0';
        operator = 'subtract';
        display.textContent = previous;
    } else if (operator === 'multiply') {
        previous = multiply(previous, current);
        current = '0';
        operator = 'subtract';
        display.textContent = previous;
    } else if (operator === 'divide') {
        if (current !== '0') {
            previous = divide(previous, current);
            current = '0';
            operator = 'subtract';
            display.textContent = previous;
        } else if (current === '0') {
            display.textContent = 'I refuse to divide by 0';
        }
    }
});
multiplyBtn.addEventListener('click', function () {
    if (operator === '') {
        previous = display.textContent;
        current = '0';
        operator = 'multiply';
    } else if (operator === 'add') {
        previous = add(previous, current);
        current = '0';
        operator = 'multiply';
        display.textContent = previous;
    } else if (operator === 'subtract') {
        previous = subtract(previous, current);
        current = '0';
        operator = 'multiply';
        display.textContent = previous;
    } else if (operator === 'multiply') {
        previous = multiply(previous, current);
        current = '0';
        operator = 'multiply';
        display.textContent = previous;
    } else if (operator === 'divide') {
        if (current !== '0') {
            previous = divide(previous, current);
            current = '0';
            operator = 'multiply';
            display.textContent = previous;
        } else if (current === '0') {
            display.textContent = 'I refuse to divide by 0';
        }
    }
});
divideBtn.addEventListener('click', function () {
    if (operator === '') {
        previous = display.textContent;
        current = '0';
        operator = 'divide';
    } else if (operator === 'add') {
        previous = add(previous, current);
        current = '0';
        operator = 'divide';
        display.textContent = previous;
    } else if (operator === 'subtract') {
        previous = subtract(previous, current);
        current = '0';
        operator = 'divide';
        display.textContent = previous;
    } else if (operator === 'multiply') {
        previous = multiply(previous, current);
        current = '0';
        operator = 'divide';
        display.textContent = previous;
    } else if (operator === 'divide') {
        if (current !== '0') {
            previous = divide(previous, current);
            current = '0';
            operator = 'divide';
            display.textContent = previous;
        } else if (current === '0') {
            display.textContent = 'I refuse to divide by 0';
        }
    }
});
equalsBtn.addEventListener('click', function () {
    if (operator === '') {
        previous = display.textContent;
        current = '0'
        operator = '';
    } else if (operator === 'add') {
        previous = add(previous, current);
        current = '0';
        operator = '';
        display.textContent = previous;
    } else if (operator === 'subtract') {
        previous = subtract(previous, current);
        current = '0';
        operator = '';
        display.textContent = previous;
    } else if (operator === 'multiply') {
        previous = multiply(previous, current);
        current = '0';
        operator = '';
        display.textContent = previous;
    } else if (operator === 'divide') {
        if (current !== '0') {
            previous = divide(previous, current);
            current = '0';
            operator = '';
            display.textContent = previous;
        } else if (current === '0') {
            display.textContent = 'I refuse to divide by 0';
        }
    }
});
clearBtn.addEventListener('click', function () {
    previous = '';
    current = '';
    operator = '';
    display.textContent = '0';
});
backBtn.addEventListener('click', function () {
    if (display.textContent.length !== 1) {
        current = display.textContent.slice(0, -1);
        display.textContent = current;
    } else {
        current = '0';
        display.textContent = current;
    }
});
window.addEventListener('keydown', function (e) {
    if (e.key === '1') {
        if (current.length >= 20) {
            display.textContent = current;
        }
        else if (current === '0') {
            current = '1';
            display.textContent = current;
        } else {
            current += '1';
            display.textContent = current;
        }
    } else if (e.key === '2') {
        if (current.length >= 20) {
            display.textContent = current;
        }
        else if (current === '0') {
            current = '2';
            display.textContent = current;
        } else {
            current += '2';
            display.textContent = current;
        }
    } else if (e.key === '3') {
        if (current.length >= 20) {
            display.textContent = current;
        }
        else if (current === '0') {
            current = '3';
            display.textContent = current;
        } else {
            current += '3';
            display.textContent = current;
        }
    } else if (e.key === '4') {
        if (current.length >= 20) {
            display.textContent = current;
        }
        else if (current === '0') {
            current = '4';
            display.textContent = current;
        } else {
            current += '4';
            display.textContent = current;
        }
    } else if (e.key === '5') {
        if (current.length >= 20) {
            display.textContent = current;
        }
        else if (current === '0') {
            current = '5';
            display.textContent = current;
        } else {
            current += '5';
            display.textContent = current;
        }
    } else if (e.key === '6') {
        if (current.length >= 20) {
            display.textContent = current;
        }
        else if (current === '0') {
            current = '6';
            display.textContent = current;
        } else {
            current += '6';
            display.textContent = current;
        }
    } else if (e.key === '7') {
        if (current.length >= 20) {
            display.textContent = current;
        }
        else if (current === '0') {
            current = '7';
            display.textContent = current;
        } else {
            current += '7';
            display.textContent = current;
        }
    } else if (e.key === '8') {
        if (current.length >= 20) {
            display.textContent = current;
        }
        else if (current === '0') {
            current = '8';
            display.textContent = current;
        } else {
            current += '8';
            display.textContent = current;
        }
    } else if (e.key === '9') {
        if (current.length >= 20) {
            display.textContent = current;
        }
        else if (current === '0') {
            current = '9';
            display.textContent = current;
        } else {
            current += '9';
            display.textContent = current;
        }
    } else if (e.key === '0') {
        if (current.length >= 20) {
            display.textContent = current;
        }
        else if (current === '0') {
            current = '0';
            display.textContent = current;
        } else {
            current += '0';
            display.textContent = current;
        }
    } else if (e.key === '.') {
        if (display.textContent.includes('.')) {
            display.textContent = current;
        }
        else if (current.length >= 20) {
            display.textContent = current;
        } else if (current === '0') {
            current = '0.';
            display.textContent = current;
        } else {
            current += '.';
            display.textContent = current;
        }
    } else if (e.key === '+') {
        if (operator === '') {
            previous = display.textContent;
            current = '0';
            operator = 'add';
        } else if (operator === 'add') {
            previous = add(previous, current);
            current = '0';
            operator = 'add';
            display.textContent = previous;
        } else if (operator === 'subtract') {
            previous = subtract(previous, current);
            current = '0';
            operator = 'add';
            display.textContent = previous;
        } else if (operator === 'multiply') {
            previous = multiply(previous, current);
            current = '0';
            operator = 'add';
            display.textContent = previous;
        } else if (operator === 'divide') {
            if (current !== '0') {
                previous = divide(previous, current);
                current = '0';
                operator = 'add';
                display.textContent = previous;
            } else if (current === '0') {
                display.textContent = 'I refuse to divide by 0';
            }
        }
    } else if(e.key === '-'){
        if (operator === '') {
            previous = display.textContent;
            current = '0';
            operator = 'subtract';
        } else if (operator === 'add') {
            previous = add(previous, current);
            current = '0';
            operator = 'subtract';
            display.textContent = previous;
        } else if (operator === 'subtract') {
            previous = subtract(previous, current);
            current = '0';
            operator = 'subtract';
            display.textContent = previous;
        } else if (operator === 'multiply') {
            previous = multiply(previous, current);
            current = '0';
            operator = 'subtract';
            display.textContent = previous;
        } else if (operator === 'divide') {
            if (current !== '0') {
                previous = divide(previous, current);
                current = '0';
                operator = 'subtract';
                display.textContent = previous;
            } else if (current === '0') {
                display.textContent = 'I refuse to divide by 0';
            }
        }
    } else if (e.key === '*'){
        if (operator === '') {
            previous = display.textContent;
            current = '0';
            operator = 'multiply';
        } else if (operator === 'add') {
            previous = add(previous, current);
            current = '0';
            operator = 'multiply';
            display.textContent = previous;
        } else if (operator === 'subtract') {
            previous = subtract(previous, current);
            current = '0';
            operator = 'multiply';
            display.textContent = previous;
        } else if (operator === 'multiply') {
            previous = multiply(previous, current);
            current = '0';
            operator = 'multiply';
            display.textContent = previous;
        } else if (operator === 'divide') {
            if (current !== '0') {
                previous = divide(previous, current);
                current = '0';
                operator = 'multiply';
                display.textContent = previous;
            } else if (current === '0') {
                display.textContent = 'I refuse to divide by 0';
            }
        }
    } else if (e.key === '/'){
        if (operator === '') {
            previous = display.textContent;
            current = '0';
            operator = 'divide';
        } else if (operator === 'add') {
            previous = add(previous, current);
            current = '0';
            operator = 'divide';
            display.textContent = previous;
        } else if (operator === 'subtract') {
            previous = subtract(previous, current);
            current = '0';
            operator = 'divide';
            display.textContent = previous;
        } else if (operator === 'multiply') {
            previous = multiply(previous, current);
            current = '0';
            operator = 'divide';
            display.textContent = previous;
        } else if (operator === 'divide') {
            if (current !== '0') {
                previous = divide(previous, current);
                current = '0';
                operator = 'divide';
                display.textContent = previous;
            } else if (current === '0') {
                display.textContent = 'I refuse to divide by 0';
            }
        }
    } else if (e.key === '='){
        if (operator === '') {
            previous = display.textContent;
            current = '0'
            operator = '';
        } else if (operator === 'add') {
            previous = add(previous, current);
            current = '0';
            operator = '';
            display.textContent = previous;
        } else if (operator === 'subtract') {
            previous = subtract(previous, current);
            current = '0';
            operator = '';
            display.textContent = previous;
        } else if (operator === 'multiply') {
            previous = multiply(previous, current);
            current = '0';
            operator = '';
            display.textContent = previous;
        } else if (operator === 'divide') {
            if (current !== '0') {
                previous = divide(previous, current);
                current = '0';
                operator = '';
                display.textContent = previous;
            } else if (current === '0') {
                display.textContent = 'I refuse to divide by 0';
            }
        }
    } else if (e.key === 'Delete'){
        previous = '';
        current = '';
        operator = '';
        display.textContent = '0';
    } else if (e.key === 'Backspace'){
        if (display.textContent.length !== 1) {
            current = display.textContent.slice(0, -1);
            display.textContent = current;
        } else {
            current = '0';
            display.textContent = current;
        }
    }
});