/*Complete the function that takes 3 numbers x, y and k (where x ≤ y), and returns the number of integers within the range [x..y] (both ends included) that are divisible by k.
More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }
Example: Given x = 6, y = 11, k = 2 the function should return 3, because there are three numbers divisible by 2 between 6 and 11: 6, 8, 10
*/

function divisibleCount(x, y, k) {
  let count = 0;
  for (let i = x; i <= y; ++i) {
    if (i % k === 0) {
      count++;
    }
  }
  return count;
}

// TEST
console.log(divisibleCount(6,11,2)) // Expected Result 3
console.log(divisibleCount(11,345,17)) // Expected Result 20
console.log(divisibleCount(20,20,2)) // Expected Result 1
console.log(divisibleCount(20,20,8)) // Expected Result 0

// Alternate Solution w/ faster runtime
function divisibleCount2(x, y, k) {
  return Math.floor(y / k) - Math.floor((x - 1) / k)
}