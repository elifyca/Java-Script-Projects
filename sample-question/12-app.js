
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.


const text = "Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances.".split(" ");

let numbers = [];
for (const i of text) {if (+i > 150) { numbers.push(+i);}}
console.log(numbers.sort((a,b)=> a-b));