let num1;
let num2;
let operator;
let numButtons = 19;
let output;
const elements = ['AC', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', 
'-', '1','2','3', '+', 'zero', '.', '='];
const numbersArray = ['zero','1','2','3', '4', '5', '6', '7', '8', '9' ,'.']
const numbersOnly = ['zero','1','2','3', '4', '5', '6', '7', '8', '9']
const operatorArray = elements.filter( (element) => !numbersArray.includes(element) );

// Swapping text on calculator

const textCalc = document.querySelector('.text');
textCalc.textContent = '12345678';



// TODO : 
// - write function that outputs what is inside of button
// - write function that appends numbers and dot`s to the display
// - write a code that displays numbers after operator was clicked
// - write a function that removes text when AC will be clicked



// Creating new buttons

const container = document.querySelector('.container')

for (let i = 0; i < numButtons; i++) {
    const newButton = document.createElement('button');
    newButton.classList.add(`${elements[i]}`);
    newButton.textContent = `${elements[i]}`;
    // gives properties if button is included in given array
    if (numbersArray.includes(elements[i]) == true) {
        newButton.style.cssText += 'background-color: rgb(55, 55, 250);'
        newButton.addEventListener('click', () => {calcNumb = newButton.textContent
        });
    } else {
        newButton.style.cssText += 'background-color: orange;'
        newButton.addEventListener('click', () => {operator = newButton.textContent
        });
    }
    container.appendChild(newButton);
}


let zeroButton = document.querySelector('.zero');
zeroButton.textContent = '0';
// Function that takes numbers and operator and returns result

function operate(num1,num2,operator) {
    if (operator == '+') {
        return add(num1,num2);
    } else if (operator == '-') {
        return subtract(num1,num2);
    } else if (operator == '*') {
        return multiply(num1,num2);
    } else if (operator == '/') {
        return divide(num1,num2);
    } else if (operator == '%') {
        return percent(num1);
    } else if (operator == '+/-') {
        return plusminus(num1);
    }
}

// Basic functions
function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function percent(num1) {
    return num1/100;
}

function plusminus(num1) {
    return num1 * -1;
}

const buttons = document.querySelectorAll('button');

const buttonsArray = Array.from(buttons);
