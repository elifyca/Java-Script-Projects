function numbersSum(arr1){
    let count= 0;
    for(let i = 0; < arr1.length; i++) {

        if(arr1[i]=== Number(arr1[i])) {

            count += arr1[i]
        }
    }
    return count
}

console.log(numbersSum([1, 2, "13","4","645"]));




let i = 5;
if(i == Number) {
    console.log(true)
} else {
    console.log(false)
}