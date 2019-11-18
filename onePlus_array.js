/* Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].
[4, 3, 2, 5] would return [4, 3, 2, 6]
*/

function onePlus(array){
  if(array.length === 0){
    return null;
  }

  let originNum = array.join("");
  let newNum = Number(originNum) + 1;
  return newNum.toString().split("")
}

// TESTS
console.log(onePlus([2, 3, 9])); // Expected [ '2', '4', '0' ]
console.log(onePlus([4, 3, 2, 5])); // Expected [ '4', '3', '2', '6' ]