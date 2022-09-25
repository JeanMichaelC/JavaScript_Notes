// The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

// -----

// The Syntax of the split() method is: split(separator, limit)

const myString = 'Hello World. How are you doing?'
const splits = myString.split(' ', 3)

console.log(splits)
//In the following example, split() looks for spaces in a string and returns the first 3 splits that it finds.