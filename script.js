const display = document.getElementById('display')
const working_display = document.getElementById('working_display')
const equal = document.getElementById('equal');
const clear = document.getElementById('clear')

const digits = document.querySelectorAll(".num");
const operators = document.querySelectorAll('.op');


let firstPart = '';
let secondPart = '';



digits.forEach((digit) => 
    digit.addEventListener('click', () => display.append(digit.textContent)))

operators.forEach((operator) => 
    operator.addEventListener('click', () =>  {
    firstPart = display.textContent
    opText = operator.textContent
    display.append(opText)
}))

equal.addEventListener('click', callToOperate)




function callToOperate() {
    let solution = operate(firstPart, opText, display.textContent)
    working_display.textContent = solution;
}


/*

let btns = document.querySelectorAll('.num');

btns.forEach(function (i) {
  i.addEventListener('click', function() {
    dispVal += i.textContent;
    display.textContent = i.textContent;
    console.log(dispVal);
  });
});




ops.forEach(function (i) {
    i.addEventListener('click', function() {
        first = dispVal;
        dispVal = ''
        op = i.textContent;
    })
});


equal.addEventListener('click', function() {
    a = parseInt(first);
    b = parseInt(dispVal);
    let result = console.log(operate(a, op, b));
    dispVal = result;
});


*/





// operate and arithmetic functions

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {return a / b}


function operate(a, operator, b) {
    if (operator == "+") {
        return add(a, b);
    }
    else if (operator == "-") {
        return subtract(a, b);
    }
    else if (operator == "*") {
        return multiply(a, b);
    }
    else if (operator == "/") {
        return divide(a, b);
    }
    else {
        return "ERROR"
    }
}
