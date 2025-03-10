let disp = document.getElementById('display');
let currentA = "";
let currentB = "";
let operation = null;


function addNum(num) {
    disp.textContent += num;
    if(num === '.' && ((operation === null && currentA.includes('.') || (operation !== null && currentB.includes('.'))))){
       return; 
    }
    if(operation !== null){
        currentB+=num;
    }
    else{
        currentA+=num;
    }
}

function percent(){
    if(currentB !== "" && operation !== null){
        currentB = (parseFloat(currentB) / 100).toString();
        disp.textContent += currentA + operation + currentB;
    }
    else if(operation === null && currentA !== ""){
        currentA = (parseFloat(currentA) / 100).toString();
        disp.textContent = currentA;
    }
}

function flipSign(){
    if(currentB !== "" && operation !== null){
        currentB = (parseFloat(currentB) / -1).toString();
        disp.textContent += currentA + operation + currentB;
    }
    else if(operation === null && currentA !== ""){
        currentA = (parseFloat(currentA) / -1).toString();
        disp.textContent = currentA;
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

function delItem(){
    disp.textContent = disp.textContent.slice(0, -1);
    if(operation === null){
        currentA = currentA.slice(0,-1);
    }
    else if(currentB === ""){
        operation = null;
    }
    else{
        currentB = currentB.slice(0,-1);
    }
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

        currentA = String(result);
        currentB = "";
        operation = null;
    }
}