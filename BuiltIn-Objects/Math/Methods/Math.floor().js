// The Math.floor() function always rounds down and returns the largest integer less than or equal to a given number.

// Because floor() is a static method of Math, you always use it as Math.floor(), rather than as a method of a Math object you created (Math is not a constructor).

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6
