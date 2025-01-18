const display = document.querySelector('#display');
const numKeys = Array.from(document.querySelectorAll('.num-keys'));
const operatorKeys = Array.from(document.querySelectorAll('.operator-keys'));
const clearAll = document.querySelector('#all-clear');
const equalOperator = document.querySelector('#equal')
const deleteButton = document.querySelector('#delete')

let num1 = 0;
let num2 = 0;
let operator = '';
let result = 0;
let num1String = '';
let num2String = '';
let isOperatorOn = false;

function addition(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function percent(a,b) {
    return (a/100) *b;
}

numKeys.forEach(numkey => numkey.addEventListener('click',() => {
    if(isOperatorOn === false){
        num1String += numkey.innerHTML;
        display.innerHTML = num1String;
    } else {
        num2String += numkey.innerHTML;
        display.innerHTML = num1String + operator + num2String;
    }
}))

clearAll.addEventListener('click', () => {
    display.innerHTML = '0';
    num1String = '';
    num2String = '';
    operator = '';
})

deleteButton.addEventListener('click', () => {
    if(isOperatorOn){
        num2String = num2String.slice(0,-1);
        display.innerHTML = num2String;
    } else {
        num1String = num1String.slice(0,-1);
        display.innerHTML = num1String + operator + num2String; 
    }
})


operatorKeys.forEach(operatorKey => operatorKey.addEventListener('click',() => {
    num1 = parseInt(num1String);
    isOperatorOn = true;
    operator = operatorKey.innerHTML;
    display.innerHTML = num1String + operatorKey.innerHTML;
}))

equalOperator.addEventListener('click', () => {
    num2 = parseInt(num2String);
    switch(operator){
        case '+':
            result = addition(num1,num2);
            num1String = `${result}`;
            num2String = '';
            break;
        case '-':
            result = subtract(num1,num2);
            num1String = `${result}`;
            num2String = '';
            break;
        case 'X':
            result = multiply(num1,num2);
            num1String = `${result}`;
            num2String = '';
            break;
        case '/':
            result = divide(num1,num2);
            num1String = `${result}`;
            num2String = '';
            break;
        case '%':
            result = percent(num1,num2);
            num1String = `${result}`;
            num2String = '';
            break;
        case '=':
            result
    }

    display.innerHTML = result;
    

})








