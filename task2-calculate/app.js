let number1 = document.querySelector(".number1");
let number2 = document.querySelector(".number2");
let operator = document.querySelector(".operator");
let calculate = document.querySelector(".calculate");
let title = document.querySelector(".title");
​
​
​
calculate.addEventListener("click", calc);
​
​
function calc(){
    let snc;
    if(operator.value == "+"){
        snc = Number(number1.value) + Number(number2.value)        
    }else if (operator.value == "-"){
        snc = Number(number1.value) - Number(number2.value)
    }else if (operator.value == "*"){
        snc = Number(number1.value) * Number(number2.value)
    }else if (operator.value == "/"){
        snc = Number(number1.value) / Number(number2.value)
    }
    title.innerHTML = `${number1.value} ${operator.value} ${number2.value} = ${snc}`
}   