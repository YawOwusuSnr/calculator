const display = document.getElementById('display')
display.textContent = '100';




let buttons = document.querySelectorAll('button');


buttons.forEach((item) => {
    item.addEventListener('click', changeDisplay(item))
});


function changeDisplay(button) {
    let dispVal = button; 
    display.textContent = button.target.textContent;
}






let but3 = document.getElementById('9')
but3.addEventListener('click', () => {
    display.textContent = but3.textContent;
})





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

const first = 0;
const op = "none";
const second = 0;

function operate(a, op, b) {
    if (op === "add") {
        add(a, b)
    }
    else if (op === "subtract") {
        subtract(a, b);
    }
    else if (op === "multiply") {
        multiply(a, b);
    }
    else if (op === "divide") {
        divide(a, b);
    }
}