// The Math.ceil() function always rounds up and returns the smaller integer greater than or equal to a given number.

// Because ceil() is a static method of Math, you always use it as Math.ceil(), rather than as a method of a Math object you created (Math is not a constructor).

console.log(Math.ceil(4));
// expected output: 4

console.log(Math.ceil(.95));
// expected output: 1

console.log(Math.ceil(7.004));
// expected output: 8

console.log(Math.ceil(-7.004));
// expected output: -7
