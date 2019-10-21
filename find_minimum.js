// Given an array of numbers find the Minimum number

function findMin(numbers) {
  let min = numbers[0];
  for (number of numbers) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}

console.log(findMin([77, -5, 2, 89, 44, 37])); // -5
console.log(findMin([90, -5, 101, 299, -13, 2])); // -13