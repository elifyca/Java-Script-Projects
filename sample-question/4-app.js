function fibonacci(number) {
        let number1 = 0;
        let number2 = 1;
        let arr1 = [];
        arr1.push(number1);
        arr1.push(number2)
        for (let i = 0; i < number; i++) {
            arr1.push(arr1[arr1.length-1] + arr1[arr1.length-2])
        }
        return arr1
    }
    
    console.log(fibonacci(7));




function fibonacci (number) {
    let arr1 = [0, 1]
    for (let i = 0; i < number; i++) {
        arr1.push(arr1[arr1.length-1] + arr1[arr1.length-2])
    }
    return arr1
}

console.log(fibonacci(8))