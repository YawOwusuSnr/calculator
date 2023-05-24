const display = document.getElementById('display')
display.textContent = '100';

let first = '';
let op = "";
let second = '';
let dispVal = '';
let equal = document.querySelector('#equal');



function changeDisplay() {
    
}

let btns = document.querySelectorAll('.num');

btns.forEach(function (i) {
  i.addEventListener('click', function() {
    dispVal += i.textContent;
    display.textContent = i.textContent;
    console.log(dispVal);
  });
});


let ops = document.querySelectorAll('.op');

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
