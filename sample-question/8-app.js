let list =[10,15,3,7];
let number =17;
let i,j;
for(i of list){
    for(j of list){
        if(i + j == number && i > j){
            console.log(`${i} + $(j) = ${number}`);
        }
    }
}