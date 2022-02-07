function addUp(number) {
    let count = 0;
    for(let i = 1; i <= number; i++) {
        count += i
    }
    return count
}

console.log(addUp(4))



function minMax(arrey1) {
    let newarray = [];
    
    newarray.push(Math.min(...arrey1))
    newarray.push(Math.max(...arrey1))
    return newarray
}

console.log(minMax([1, 0, 98, 5, 3, 8]))

