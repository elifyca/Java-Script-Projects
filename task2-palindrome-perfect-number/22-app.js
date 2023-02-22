// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.
// For example, if N is 4, then there are 5 unique ways:  

function fact(n){
    if (n === 1 || n===0) return 1;
    return n * fact(n - 1) 
}

function staircase(num){
    let numArray = Array(num).fill(1);
    let result = 1;

    while(numArray.includes(1)){
        numArray.pop()
        for(let i=0; i<numArray.length; i++){
            if(numArray[i] === 1){
                numArray[i] = 2;
                break;
            }
        }
        console.log(numArray)
        let ones = numArray.filter(x => x===1).length
        let twos = numArray.filter(x => x===2).length

        ones + 2 * twos === num && (result += fact(numArray.length) / (fact(ones) * fact(twos)))
    }
    return result;

}

console.log(staircase(6))