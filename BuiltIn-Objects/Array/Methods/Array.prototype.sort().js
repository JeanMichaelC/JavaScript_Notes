// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. 

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const compareNumbers = (a, b) => a - b;
// Sort numbers in ascending order
// Use b - a for descending order

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
array1.sort(compareNumbers);
console.log(array1);
// expected output: Array [ 1, 4, 21, 30, 100000 ]
