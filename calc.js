let disp = document.getElementById('display');
let btns = document.getElementsByTagName('BUTTON');



function addNum(num) {
    disp.textContent += num;
}

function clearDisplay() {
    disp.textContent = "";
}


function add (a, b){
    return + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a/b;
}

function operate(a, b, operation){
    if(String(operation) == '+'){
        return add(a, b);
    }
    else if(String(operation) == '-'){
        return subtract(a, b);
    }
    else if(String(operation) == '*'){
        return multiply(a, b);
    }
    else if(String(operation) == '/'){
        return divide(a, b);
    }
}


