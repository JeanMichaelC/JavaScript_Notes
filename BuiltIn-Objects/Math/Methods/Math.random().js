// The Math.random() function returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // expected output: 0
  
  console.log(Math.random());
  // expected output: a number from 0 to <1
  