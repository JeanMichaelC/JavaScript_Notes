// Creates a new array populated with the results of calling a provided function on every element in the calling array.

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

console.log([1, , 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
}));
// Visit 0
// Visit 2
// [2, empty, 6] 

