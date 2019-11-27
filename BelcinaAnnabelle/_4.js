//Largest palindrome product

function largestPalindromeProduct(digit) {
  // Good luck!
  var number;
  if(digit === 2) {
    for(let i=99; i>9; i--) {
      for(let j=99; j>9; j--) {
        number = i * j;
        let str = number.toString();
        if(str === str.split("").reverse().join("")) {
          console.log(+i + " * "+ j);
          console.log(number);
          return number;
        }
      }
    }
  }
    for(let i=999; i>99; i--) {
      for(let j=999; j>99; j--) {
        number = i * j;
        let str = number.toString();
        if(str === str.split("").reverse().join("")) {
          console.log(i + " * " + j);
          console.log(number);
          return number;
        }
      }
    }
  return undefined;
}
largestPalindromeProduct(3);