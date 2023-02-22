// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?


// const array = [1, 2, 3, 4, 5]
// const newArray = []

// for(let i=0; i<array.length; i++){
//     let temp = array.shift()
//     newArray.push(array.reduce((a, b) => a * b))
//     array.push(temp)
// }

// console.log(newArray)

function productNumbers(array){
    let array2 = []
    for (let i = 0; i < array.length; i++) {
        let number = 1
        for (let j = 0; j < array.length; j++) {
            if(i !== j){
                number *= array[j]
            }
        }
        array2.push(number)
    }
    return array2
}

array = [1, 2, 3, 4, 5]
console.log(productNumbers(array));
