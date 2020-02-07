//important const variables
const container= document.getElementById('container')
const displayString= document.getElementById('displayString')
const totalString= document.getElementById('totalString')
const num= document.getElementsByClassName('num')
let numberHolder= 0;
let inputHolder= '';
let total= 0



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
const operate= function(a, operand, b) {
    return operand=== '+' ? addition(a, b)
          :operand=== '-' ? subtraction(a, b)
          :operand=== '*' ? multiplication(a, b) 
          :operand=== '/' ? division(a, b) : 'That is not a valid operator'
}

//other button functions
const clear= function () {
    numberHolder= 0;
    totalString.innerHTML= 0;
    displayString.innerHTML= '';
    inputHolder= '';
}
const backspace= function () {
    let str= numberHolder;
    if(str=== 0|| String(str).length=== 1) {
        totalString.innerHTML= 0;
        numberHolder= 0;
    }else {
        numberHolder= String(str).slice(0, str.length-1)
        totalString.innerHTML= numberHolder
    }
}
const result= function () {
inputHolder+= numberHolder
displayString.innerHTML= inputHolder
const regex= /[-|+|*|/]/g
const regex2= /[\s|\d]/g
const operandsOnly= inputHolder.replace(regex2, '').split('')
const numbersOnly= inputHolder.split(regex).map(Number)

while (operandsOnly.includes('*')=== true) {
	let x= operandsOnly.indexOf('*')
	operandsOnly.splice(x,1)
	let a= numbersOnly[x]
	let b= numbersOnly[x+1]
	total= a*b
	numbersOnly[x]= total
    numbersOnly.splice((x+1),1)
}

while (operandsOnly.includes('/')=== true) {
	let x= operandsOnly.indexOf('/')
	operandsOnly.splice(x,1)
	let a= numbersOnly[x]
	let b= numbersOnly[x+1]
	total= a/b
	numbersOnly[x]= total
	numbersOnly.splice((x+1),1)
}

while (operandsOnly.includes('+')=== true) {
	let x= operandsOnly.indexOf('+')
	operandsOnly.splice(x,1)
	let a= numbersOnly[x]
	let b= numbersOnly[x+1]
	total= a+b
	numbersOnly[x]= total
	numbersOnly.splice((x+1),1)
}

while (operandsOnly.includes('-')=== true) {
	let x= operandsOnly.indexOf('-')
	operandsOnly.splice(x,1)
	let a= numbersOnly[x]
	let b= numbersOnly[x+1]
	total= a-b
	numbersOnly[x]= total
	numbersOnly.splice((x+1),1)
}

totalString.innerHTML= String(total)

}
const saveNumber= function (number) {
    if(numberHolder=== 0) {
        numberHolder = number 
    }else{numberHolder += number}
    totalString.innerHTML= numberHolder
}
const operator= function (e) {
    if(numberHolder=== 0 && displayString.innerHTML=== '') {
        alert('Please enter a number first prior to an operand');
        clear();
    }else {
      switch(true) {
            case e== '+':
                inputHolder+= String(numberHolder)
                inputHolder+= e
                displayString.innerHTML= inputHolder
                numberHolder= 0
                totalString.innerHTML= 0
                break;
            case e== '-':
                inputHolder+= String(numberHolder)
                inputHolder+= e
                displayString.innerHTML= inputHolder
                numberHolder= 0
                totalString.innerHTML= 0
                break;
            case e== '/':
                inputHolder+= String(numberHolder)
                inputHolder+= e
                displayString.innerHTML= inputHolder
                numberHolder= 0
                totalString.innerHTML= 0
                break;
            case e== '*':
                inputHolder+= String(numberHolder)
                inputHolder+= e
                displayString.innerHTML= inputHolder
                numberHolder= 0
                totalString.innerHTML= 0
                break;
            default:
                break;
        }
    }
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
            btn.disabled= true;
            operator(btn.innerHTML)
            break;
        case btn.id== 'equals':
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
