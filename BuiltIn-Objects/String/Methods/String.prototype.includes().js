// Performs a case-sensitive search to determine whether one string may be found within another string, returning true or false.

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`"${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: ""fox" is in the sentence"
