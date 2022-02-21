function bubbleSort(arr){
    let len = arr.lenght;
    for (let i = len-1; i>0; i--){
        for (let j = 1; j<=i; j++){
            if(arr[j-1] > arr[j]){
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr;
}
let x = bubbleSort([7,5,2,4,3,9]);

console.log(x);