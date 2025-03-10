let disp = document.getElementById('display');
let currentA = "";
let currentB = "";
let operation = null;


function addNum(num) {
    disp.textContent += num;
    if(operation !== null){
        currentB+=num;
    }
    else{
        currentA+=num;
    }
}

function addOperation(op){
    if(!operation && currentA !== ""){
        operation = op;
        disp.textContent += op;
    }
}

function clearDisplay() {
    disp.textContent = "";
    currentA="";
    currentB="";
    operation=null;
}


function add (a, b){
    return a + b;
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


function getAns(){
    if(currentA !== "" && currentB !== "" && operation !== null){
        let numA = parseFloat(currentA);
        let numB = parseFloat(currentB);

        let result = operate(numA, numB, operation);
        disp.textContent = result;

        currentA = "";
        currentB = "";
        operation = null;
    }
}