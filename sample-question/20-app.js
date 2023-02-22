// Write a JS code to find greatest common divisor (gcd) of 2 numbers. 

// Example:  
// gcd of 6, 9 ---> 3  
// gcd of 120, 90 --> 30

function obeb(num1,num2){
    let res =1;
    let max = [num1,num2].sort((a,b) => b-a);
    for(let i = 1; i <= max[0]; i++){
        if(num1 % i == 0 && num2 % i == 0 && i > res){
            res = i;
        }else{
            continue;
        }
    }
    return res;
};
console.log(obeb(120,90));

