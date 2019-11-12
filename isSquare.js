// Given an integral number, determine if it's a square number. The tests will always use some integral number, so don't worry about that in dynamic typed languages.

var isSquare = n => Math.sqrt(n) % 1 === 0;

// Tests
console.log(isSquare(-1)) // returns false
console.log(isSquare(0)) // returns true
console.log(isSquare(3)) // returns false
console.log(isSquare(4)) // returns true
console.log(isSquare(25)) // returns true
console.log(isSquare(26)) // returns false