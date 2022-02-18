let elements  = [999, 333, 2, 8982, 12, 45, 77, 99, 11];
let new_list = [];
let lengthOfElements = elements.length;

for (let i = 0; i < lengthOfElements; i++) {
    new_list.push(Math.max(...elements))
    elements.splice(elements.indexOf(Math.max(...elements)), 1)
}
console.log(new_list);