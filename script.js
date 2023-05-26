const display = document.getElementById('display')
const second_display = document.getElementById
const equal = document.getElementById('equal');


const digits = document.querySelectorAll(".num")
const ops = document.querySelectorAll('.op');




let first = '';
let op = "";
let second = '';
let dispVal = '';




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
        return add(a, b);
    }
}
