// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

function uniqueInOrder(iterable) {
  let lastChar;
  let result = [];

  for (let char of iterable) {
    if (char === lastChar) {
      continue;
    } else {
      lastChar = char;
      result.push(char);
    }
  }
  return result;
}

// TESTS
console.log(uniqueInOrder('AAAABBBCCDAABBB')); // Expected ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')); // Expected ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // Expected [1, 2, 3]