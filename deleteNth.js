/* Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3]. */

function deleteNth(arr, n) {
  let validate = {};
  let result = [];

  for (let number of arr) {
    let num = number.toString();
    if (validate[`${num}`] === undefined) {
      validate[`${num}`] = 0;
    }
    if (validate[`${num}`] < n) {
      result.push(number);
      validate[`${num}`] += 1;
    }
  }
  return result;
}

// TEST
console.log(deleteNth([1, 1, 1, 1], 2));
console.log(deleteNth([20, 37, 20, 21], 1));