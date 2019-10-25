// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple with the same values, remove the one at the lower index. If array only has one element, return an empty array.

function removeSmallest(numbers) {
  if (numbers.length <= 1) {
    return result;
  }

  let result = [];
  let position;
  let min = Math.min(...numbers);

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i]);
    if (numbers[i] === min && position === undefined) {
      position = i;
      result.pop();
    }
  }
  return result;
}


// Testing Code

console.log( removeSmallest([1, 2, 3, 4, 5]) ) // expected result [2, 3, 4, 5]
console.log( removeSmallest([5, 3, 2, 1, 4]) ) // expected result [5, 3, 2, 4]
console.log( removeSmallest([2, 2, 1, 2, 1]) ) // expected result [2, 2, 2, 1]
console.log( removeSmallest([]) ) // expected result []