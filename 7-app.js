function getSum(a,b){
    let big,small;
    if (a>b){
        big=a; small=b;
    } else{
        big = b; small=a;
    }

 for (let i= big; i >small; i--){
     big +=i -1;

 }
    return big;
}
console.log(getSum(0,-1));