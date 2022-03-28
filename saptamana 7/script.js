/* 

param1: nr
param2: nr
param3: 5 sau "scadere"(scadere), A sau "adunare"(adunare), I (inmultire), D(impartire)

functia intoarce rezultatul

vreau o fct care face scadere a 2 nr

inmultire a nr etc

*/

function calculator(number1, number2, mathOperation){
    var result;
    var unifyMathOperation = detectMathOperation(mathOperation);
    switch(unifyMathOperation){
        case "S":
        case"scadere":
        result = number1 - number2;
            break
        case "A": 
        result = number1 + number2;
            break
        case "i": 
        result = number1 * number2;
            break
        case "D": 
        result = number1 / number2; 
            break
        default:
            result = "Informatia introdusa nu este valabila. Te rugam sa reincerci";
            break
    }
    return result;

}

function detectMathOperation(mathOperation){
    if(mathOperation ==="S"||mathOperation==="scadere"){
        return "S";
    } else  if(mathOperation ==="A"||mathOperation==="adunare"){
        return "A";
    } else if(mathOperation ==="I"||mathOperation==="inmultire"){
        return "I";
    } else  if(mathOperation ==="D"||mathOperation==="impartire"){
        return "D";
    }
    return null;
}

function calculator(number1, number2, mathOperation){
    var result;
    switch(mathOperation){
        case "S": 
        result = substract(number1, number2);
            break
        case "A": 
        result = sum(number1, number2);
            break
        case "i": 
        result = multiply(number1, number2);
            break
        case "D": 
        result = divide(number1, number2); 
            break
        default:
            result = "Informatia introdusa nu este valabila. Te rugam sa reincerci";
            break
    }
    return result;

}

function sum(number1, number2){
    return number1 + number2;
}

function substract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1 / number2;
}

//mai simplu 


function calculator(number1, number2, mathOperation){
    var unifyMathOperation2 = detectMathOperation2(mathOperation);
    return  unifyMathOperation2(number1,number2);
}

function detectMathOperation2(mathOperation){
    if(mathOperation ==="S"||mathOperation==="scadere"){
        return substract;
    } else  if(mathOperation ==="A"||mathOperation==="adunare"){
        return sum;
    } else if(mathOperation ==="I"||mathOperation==="inmultire"){
        return multiply;
    } else  if(mathOperation ==="D"||mathOperation==="impartire"){
        return divide;
    }
    return null;
}

//pentru orice mizerie ar fi declarata

var operatiiScadere =["S", "scadere", "SS", "SSS", "substract"];
var operatiiAdunare =["A", "adunare"]
var operatiiInmultire =["I", "inmutire"];
var operatiiImpartire=["D", "divide",];

function calculator(number1, number2, mathOperation){
    var unifyMathOperation6 = detectMathOperation3(mathOperation);
    if (typeof unifyMathOperation6 ==="function"){
        return unifyMathOperation6(number1,number2);
    }
    return  unifyMathOperation6(number1,number2);
}

function detectMathOperation3(mathOperation){
    if(operatiiScadere.includes(mathOperation)){
        return substract;
    } else  if(operatiiAdunare.includes(mathOperation)){
        return sum;
    } else if(operatiiInmultire.includes(mathOperation)){
        return multiply;
    } else  if(operatiiImpartire.includes(mathOperation)){
        return divide;
    }
    return null;
}

console.log(calculator(4,2,"S"));
console.log(calculator(4,2,"A"));
console.log(calculator(4,2,"I"));
console.log(calculator(4,2,"D"));
console.log(calculator(4,2,"H"));