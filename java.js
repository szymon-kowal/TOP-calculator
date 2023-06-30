let num1 = 0;
let num2 = 0;
let appendedNum = '';
let operator;
let operatorAfter;
let numButtons = 19;
let output;
let dotFlag = 0;
let percentFlag = 0;
let calculateFlag = 0;
let numberFlag = 0;
const elements = ['AC', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', 
'-', '1','2','3', '+', 'zero', '.', '='];
const numbersArray = ['zero','1','2','3', '4', '5', '6', '7', '8', '9' ,'.']
const numbersOnly = ['zero','1','2','3', '4', '5', '6', '7', '8', '9']
const operatorArray = elements.filter( (element) => !numbersArray.includes(element) );

// Swapping text on calculator

const textCalc = document.querySelector('.text');
textCalc.textContent = '12345678';

// TODO : 
// - write function that outputs what is inside of button - done
// - write function that appends numbers and dot`s to the display - done
// - write a code that displays numbers after operator was clicked - done
// - write a function that removes text when AC will be clicked - done



// Creating new buttons

const container = document.querySelector('.container')
const disp = document.querySelector('.text');


for (let i = 0; i < numButtons; i++) {
    const newButton = document.createElement('button');
    newButton.classList.add(`${elements[i]}`);
    newButton.textContent = `${elements[i]}`;
    // gives properties if button is included in given array
    if (numbersOnly.includes(elements[i]) == true) {
        newButton.style.cssText += 'background-color: rgb(55, 55, 250);'
        newButton.addEventListener('click', () => {
            calcNumb = newButton.textContent;
            disp.textContent = appendNum(calcNumb);
            numberFlag = 1;
        });
    } else if (elements[i] == '.') {
        newButton.style.cssText += 'background-color: rgb(55, 55, 250);'
        newButton.addEventListener('click', () => {
            dot = newButton.textContent;
            disp.textContent = appendDot(dot);
        });
    } else if (elements[i] == 'AC') {
        newButton.style.cssText += 'background-color: orange;;'
        newButton.addEventListener('click', () => {
            disp.textContent = AC();
        });
    } else if (elements[i] == '+/-') {
        newButton.style.cssText += 'background-color: orange;'
        newButton.addEventListener('click', () => {
            text = disp.textContent;
            if (text.length < 8 && parseFloat(text) > 0) {
            appendedNum = String(plusminus(text));
            } else if (text.length < 9 && parseFloat(text) < 0) {
            appendedNum = String(plusminus(text));
            };
            disp.textContent = appendedNum;
        });
    } else if (elements[i] == '%') {
        newButton.style.cssText += 'background-color: orange;'
        newButton.addEventListener('click', () => {
            text = disp.textContent;
            if (text.length < 8 && percentFlag == 0) {
                disp.textContent = roundNumb(percent());
            }
            
        });
    } else if (elements[i] == '=') {
        newButton.style.cssText += 'background-color: orange;'
        newButton.addEventListener('click', () => {
            equal();

        });
    } else {
        newButton.style.cssText += 'background-color: orange;'
        newButton.addEventListener('click', () => {
            operator = newButton.textContent;
            console.log(operator);
            calculate(operator);
        });
    }
    container.appendChild(newButton);
}


// Append number to string and check if it can be displayed on display
function appendNum(numb) {
    if (appendedNum == '0') {
        appendedNum = ''
    }
    if (appendedNum.length < 8) {
        return appendedNum += numb;
    } 
    else { 
        return appendedNum;
        }
}

function appendDot(dot) {
    if (appendedNum == '0') {
        appendedNum = '0'
    }
    if (appendedNum.length < 8 && dotFlag == 0) {
        dotFlag = 1;
        return appendedNum += dot;
    } 
    else { 
        return appendedNum;
        }
}

function AC() {
    appendedNum = '0';
    dotFlag = 0;
    percentFlag = 0;
    calculateFlag = 0;
    num1 = 0;
    num2 = 0;
    numberFlag = 0;
    return appendedNum;
}

function plusminus() {  
    appendedNum = parseFloat(appendedNum) * -1;
    return appendedNum;
}

function percent() {
        return String(Number(disp.textContent) / 100);
    percentFlag = 1;    
}

let zeroButton = document.querySelector('.zero');
zeroButton.textContent = '0';

// Function that takes numbers and operator and returns result
// Basically i need to 
// save the number
// press the button that multiply etc.
// it saves the old number somewhere as num1
// when you press number on calculator it will remove numbers from display and 
// appends it to the num2 - done
// And then:
// If the = will be pressed it will do the math and after it it will save
// the operator and if = will be pressed will still do the math
// If another operator will be pressed then it will do the math, overwrite numer 1 and
// change the operator to the pressed one;

function equal() {
    if (calculateFlag == 1) {
        if (numberFlag == 1) {
            num2 = disp.textContent;
            numberFlag = 0;
        }
        let num1F = parseFloat(num1);
        let num2F = parseFloat(num2);
        console.log(numberFlag, 'numFlag')
        console.log(num1F ,'n1')
        console.log(num2F, 'n2')
        operatorAfter = operator;
        score = String(roundNumb(operate(num1F,num2F,operatorAfter)))
        console.log(score,'score')
        num1 = score;
        appendedNum = '';
        disp.textContent = score;
    }
}

function calculate(operator) {
    if (calculateFlag == 1) {
        if (numberFlag == 1) {
            num2 = disp.textContent;
            numberFlag = 0;
        }
        let num1F = parseFloat(num1);
        let num2F = parseFloat(num2);
        console.log(numberFlag, 'numFlag')
        console.log(num1F ,'n1')
        console.log(num2F, 'n2')
        operatorAfter = operator;
        score = String(roundNumb(operate(num1F,num2F,operatorAfter)))
        console.log(score,'score')
        num1 = score;
        appendedNum = '';
        disp.textContent = score;
        //calculateFlag = 2;

    } else if (calculateFlag == 0) {
        num1 = disp.textContent;
        operatorAfter = operator;
        appendedNum = ''
        calculateFlag = 1;
    } else { 
        return
    }
    
        
}
// Chcecks how long is the number and returns number at max 8 characters long
function roundNumb(numb) {
    const numString = numb.toString();
    const numDigits = numString.length;
    if (numb > 99999999) {
        alert(' Number is bigger than 99999999')
    } 
    if (numDigits > 8) {
        let sliceNumb = numString.slice(0, 8);
        return sliceNumb;
    } else {
        return numb;
    }
}

function equals() {
    return
}

function operate(num1,num2,operator) {
    if (operator == '+') {
        return add(num1,num2);
    } else if (operator == '-') {
        return subtract(num1,num2);
    } else if (operator == '*') {
        return multiply(num1,num2);
    } else if (operator == '/') {
        return divide(num1,num2);
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
    if (num2 == 0) {
        disp.textContent = 'lol';
        return
    }
    return num1 / num2;
};





