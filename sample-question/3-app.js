let arr1=[[4,2,4] ,[3,3,3] ,[1,1,2] ,[2,1,1]];
let count1 =0;
for (let i = 0; i < arr1.length; i++){
    let count2 =1;
    for (let j = 0; j < arr1[i].length; j++){
        count2 *= arr1[i][j]
    }
    count1 += count2
}
console.log(count1)




function indexMultiplier(arr1){
    let count = 0;
    for (let i =0; i< arr1.lenght; i++){
        count += arr1[i]*i
    }
    return count
}
console.log(indexMultiplier([1, 2, 3, 4, 5]));
console.log(indexMultiplier([-3 ,0 ,8 ,-6]));