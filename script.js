//important const variables
const container= document.getElementById('container')
const displayString= document.getElementById('displayString')
const totalString= document.getElementById('totalString')
const num= document.getElementsByClassName('num')
let numberHolder= 0;
let resultHolder= 0;
let operandHolder= '';
let equationString= '';

//Basic Math functions and the main operate
const addition= function(a, b) {
    return a+b;
}
const subtraction= function(a, b) {
    return a-b;
}
const multiplication= function(a, b) {
    return a*b;
}
const division= function(a, b) {
    if(a=== 0) { return 'Error'}
    return a/b;
}
const operate= function(operand, a, b) {
    return operand=== '+' ? addition(a, b)
          :operand=== '-' ? subtraction(a, b)
          :operand=== '*' ? multiplication(a, b) 
          :operand=== '/' ? division(a, b) : 'That is not a valid operator'
}

//other button functions
const clear= function clear() {
    numberHolder= 0;
    totalString.innerHTML= 0;
    displayString.innerHTML= '';
}
const backspace= function backspace() {
    let str= numberHolder;
    if(str=== 0|| String(str).length=== 1) {
        clear()
    }else {
        numberHolder= String(str).slice(0, str.length-1)
        totalString.innerHTML= numberHolder
    }
}
const result= function calculate() {

}
const saveNumber= function number(number) {
    if(numberHolder=== 0) {
        numberHolder = number 
    }else{numberHolder += number}
    totalString.innerHTML= numberHolder
}
const operator= function operand(string) {
    display.innerHTML
}

//onClick for container
container.addEventListener('click', input);
//input function
function input(e) {
    if(e.target.localName !== 'button') return;
    const btn= e.target;
    switch(true) {
        case btn.id== 'clear':
            clear();
            break;
        case btn.className== 'operator':
            operator(btn.innerHTML)
            break;
        case btn.id== 'calc':
            result();
            break;
        case btn.className== 'num':
            saveNumber(btn.innerHTML)
            break;
        case btn.id== 'backspace':
            backspace();
            break;
        default:
            break;
    }
}
