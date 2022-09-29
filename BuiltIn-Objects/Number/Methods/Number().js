// The Number() constructor creates a Number object. When called instead as a function, it performs type conversion to a primitive number, which is usually more useful.

const a = new Number('123'); // a === 123 is false
const b = Number('123');     // b === 123 is true
a instanceof Number;         // is true
b instanceof Number;         // is false
typeof a // "object"
typeof b // "number"
