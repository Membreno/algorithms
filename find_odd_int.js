/* Given an array, find the int that appears an odd number of times. There will always be only one integer that appears an odd number of times. */

function findOdd(numbers) {
  let numCount = {};
  for (let num of numbers) {
    numCount[num] ? numCount[num]++ : numCount[num] = 1;
  }
  for (num in numCount) {
    if (numCount[num] % 2 !== 0) return Number(num);
  }
}

// TEST
console.log(findOdd([1,1,4,4,8,8,3,3,8]));