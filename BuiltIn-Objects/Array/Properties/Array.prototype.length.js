// The length property of an object which is an instance of type Array sets or returns the number of elements in that array

const listA = [1,2,3];
const listB = new Array(6);

console.log(listA.length);
// expected output: 3
console.log(listB.length);
// expected output: 6

listA.length = 9;
console.log(listA);
// expected output: [ 1, 2, 3, <6 empty items> ]
