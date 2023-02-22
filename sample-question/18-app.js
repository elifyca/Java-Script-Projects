// Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.
// For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

// output
// 10 = max(10, 5, 2) 
// 7 = max(5, 2, 7) 
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)

// function maxArray(array,k){
//     let newArray = [];
//     for(let i = 0; i < array.length-k+1; i++){
//         newArray.push(Math.max(...array.slice(i,k + i)));
//     }
//     return console.log(newArray);
// }

// maxArray([10,5,2,7,8,7],3);

function maxOfSubarrays(array, k) {
    if (array.length <= k) return Math.max(...array)
    const res = [];
  
    for(let i=0; i<array.length-k+1; i++){
      res.push(Math.max(...array.slice(i, i+k)))
    }
    return res
  }
  
  console.log(maxOfSubarrays([10, 5, 2, 7, 8, 7], 3))