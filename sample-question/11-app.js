// function bubbleSort(arr){
//     let len = arr.lenght;
//     for (let i = len-1; i>0; i--){
//         for (let j = 1; j<=i; j++){
//             if(arr[j-1] > arr[j]){
//                 let temp = arr[j-1];
//                 arr[j-1] = arr[j];
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr;
// }
// let x = bubbleSort([7,5,2,4,3,9]);

// console.log(x);




// ------------------------------------

function bubbleSort(myArray){
    
    let myArrayLength = myArray.length;
    for(let i = 0; myArrayLength -1; i++){
        for(let j = 0; j < myArrayLength-i-1; j++){

        if(myArray[j] > myArray[j+1]){
            let temp = myArray[j];
            myArray[j] = myArray[j+1];
            myArray[j+1] = temp;
        }
    }
}
  return myArray;
}
let myArray = [56,43,21,90,789,3,0,76,232,8,17,29];

console.log(bubbleSort(myArray));

