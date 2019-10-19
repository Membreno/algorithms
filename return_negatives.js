// Given a number as an input, return a negative number. If input === 0 return 0, otherwise all outputs must be negative

function makeNegative(number) {
  if (number <= 0) {
    return number;
  }
  return -number;
}

console.log(makeNegative(1)); // return -1
console.log(makeNegative(-5)); // return -5
console.log(makeNegative(0)); // return 0
console.log(makeNegative(0.12)); // return -0.12