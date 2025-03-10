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

let num1;
let num2;
let operation;

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


