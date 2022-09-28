// The reverse() method reverses an array in place and returns the reference to the same array

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]
