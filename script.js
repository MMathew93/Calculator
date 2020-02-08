//important const variables
const container= document.getElementById('container')
const displayString= document.getElementById('displayString')
const totalString= document.getElementById('totalString')
const num= document.getElementsByClassName('num')
let numberHolder= 0; //this holds the literal inputs of the num button clicked, linked to the totalString div
let inputHolder= ''; //this holds the entire string of numbers and operands, linked to the displayString div
let total= 0; //the actual output/total result when hitting calculate

//this function clears all holders, and resets them back to 0 and empty
const clear= function () {
    numberHolder= 0;
    totalString.innerHTML= 0;
    displayString.innerHTML= '';
    inputHolder= '';
    total= 0;
}
//this function allows you to delete an incorrect number input
const backspace= function () {
    let str= numberHolder;
    if(str=== 0||totalString.innerHTML=== Infinity||String(str).length=== 0) {
        clear()
    }else {
        numberHolder= String(str).slice(0, str.length-1)
        totalString.innerHTML= numberHolder
    }
}
//this function takes the entire input string and deconstructs it for the while loop to run through it for the result
const result= function () {
numberHolder= totalString.innerHTML
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
numberHolder= totalString.innerHTML;
displayString.innerHTML= ''
inputHolder= ''
}
//this function updates the numberholder with what numbers are clicked
const saveNumber= function (number) {
    if(numberHolder=== 0) {
        numberHolder = number 
    }else{numberHolder += number}
    totalString.innerHTML= numberHolder
}
//this updates the inputHolder with the last numberHolder, adds the operand, and resets the numberHolder and total string back to 0
const operator= function (e) {
    if(numberHolder=== 0 && displayString.innerHTML=== '') {
        alert('Please enter a number first prior to an operand');
        clear();
    }else {
      switch(true) {
            case e== '+':
                inputHolder+= totalString.innerHTML
                inputHolder+= e
                displayString.innerHTML= inputHolder
                numberHolder= 0
                totalString.innerHTML= 0
                break;
            case e== '-':
                inputHolder+= totalString.innerHTML
                inputHolder+= e
                displayString.innerHTML= inputHolder
                numberHolder= 0
                totalString.innerHTML= 0
                break;
            case e== '/':
                inputHolder+= totalString.innerHTML
                inputHolder+= e
                displayString.innerHTML= inputHolder
                numberHolder= 0
                totalString.innerHTML= 0
                break;
            case e== '*':
                inputHolder+= totalString.innerHTML
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
//input function and called functions
function input(e) {
    if(e.target.localName !== 'button') return;
    const btn= e.target;
    switch(true) {
        case btn.id== 'clear':
            clear();
            break;
        case btn.className== 'operator':
            //btn.disabled= true;
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



/*Basic Math functions and the main operate
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
*/
