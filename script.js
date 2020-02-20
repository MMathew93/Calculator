//important const variables
const container= document.getElementById('container')
const displayString= document.getElementById('displayString')
const totalString= document.getElementById('totalString')
const num= document.getElementsByClassName('num')
let numberHolder= 0 //this holds the literal inputs of the num button clicked, linked to the totalString div
let inputHolder= '' //this holds the entire string of numbers and operands, linked to the displayString div
let total= 0 //the actual output/total result when hitting calculate
const operandOrder= [['*','/'], ['+', '-']]

//this function clears all holders, and resets them back to 0 and empty
const clear= function () {
    numberHolder= 0
    totalString.innerHTML= 0
    displayString.innerHTML= ''
    inputHolder= ''
    total= 0
    disableEquals(false)
    disableDecimal(false)
}
//this function allows you to delete an incorrect number input
const backspace= function () {
    let str= numberHolder
    if(str=== 0||totalString.innerHTML=== Infinity||String(str).length=== 0) {
        clear()
    }else {
        numberHolder= String(str).slice(0, str.length-1)
        totalString.innerHTML= numberHolder
    }
}
//this function takes the entire input string and deconstructs it for the while loop to run through it for the result
const result= function () {
inputHolder+= numberHolder
displayString.innerHTML= inputHolder
const regex= /[-|+|*|/]/g
const regex2= /[\s|\d|\^.]/g
var operandsOnly= inputHolder.replace(regex2, '').split('')
var numbersOnly= inputHolder.split(regex).map(Number)

for(let z= 0; z<operandOrder.length; z++){
    for(let i= 0; i<= operandsOnly.length; i++) {
        let j= operandOrder[z]
        if(operandsOnly.length=== 1) {
            i= 0
        }
        if(operandsOnly[i]== j[0]||operandsOnly[i]== j[1]) {
            let x= operandsOnly.indexOf(operandsOnly[i])
            let a= numbersOnly[x]
            let b= numbersOnly[x+1]
            if(operandsOnly[i]=== '*') {
                total= a*b
            }else if(operandsOnly[i]=== '/') {
                total= a/b
            }else if(operandsOnly[i]=== '+') {
                total= a+b
            }else if(operandsOnly[i]=== '-'){
                total= a-b
            }else {
                console.log("No operands found, how did you do that?")
            }
            operandsOnly.splice(x,1)
            numbersOnly[x]= total
            numbersOnly.splice((x+1),1)
        }
    }
}

totalString.innerHTML= String(total)
numberHolder= totalString.innerHTML;
displayString.innerHTML= ''
inputHolder= ''
disableEquals(true)
disableDecimal(true)
}
//this function updates the numberholder with what numbers are clicked
const saveNumber= function (number) {
    if(numberHolder=== 0) {
        numberHolder = number 
    }else{numberHolder += number}
    totalString.innerHTML= numberHolder
}
//this disables and enables operands, stops spamming
function disableAllOperands(val) {
	document.querySelectorAll(".operator").forEach(o => o.disabled = val)
}
//this will disable spam clicking the equal button
function disableEquals(val) {
	document.querySelector("#equals").disabled= val
}
//this will disable spam clicking of the decimal
function disableDecimal(val) {
	document.querySelector("#decimal").disabled= val
}
//this updates the inputHolder with the last numberHolder, adds the operand, and resets the numberHolder and total string back to 0
const operator= function (e) {
    if(numberHolder=== 0 && displayString.innerHTML=== '') {
        alert('Please enter a number first prior to an operand')
        clear()
    }else {
      switch(true) {
            case e== '+':
                inputHolder+= totalString.innerHTML
                inputHolder+= e
                displayString.innerHTML= inputHolder
                disableAllOperands(true)
                numberHolder= 0
                totalString.innerHTML= 0
                break;
            case e== '-':
                inputHolder+= totalString.innerHTML
                inputHolder+= e
                displayString.innerHTML= inputHolder
                disableAllOperands(true)
                numberHolder= 0
                totalString.innerHTML= 0
                break;
            case e== '/':
                inputHolder+= totalString.innerHTML
                inputHolder+= e
                displayString.innerHTML= inputHolder
                disableAllOperands(true)
                numberHolder= 0
                totalString.innerHTML= 0
                break;
            case e== '*':
                inputHolder+= totalString.innerHTML
                inputHolder+= e
                displayString.innerHTML= inputHolder
                disableAllOperands(true)
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
    const btn= e.target
    switch(true) {
        case btn.id== 'clear':
            clear();
            break;
        case btn.className== 'operator':
            disableDecimal(false)
            operator(btn.innerHTML)
            break;
        case btn.id== 'equals':
            result();
            break;
        case btn.className== 'num':
            saveNumber(btn.innerHTML)
            disableAllOperands(false)
            disableEquals(false)
            break;
        case btn.id== 'backspace':
            backspace();
            break;
        case btn.id== 'decimal':
            saveNumber(btn.innerHTML)
            disableAllOperands(false)
            disableEquals(false)
            disableDecimal(true)
            break;
        default:
            break;
    }
}
