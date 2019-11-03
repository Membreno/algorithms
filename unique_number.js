// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(array) {
  let numCount = {};
  for (let num of array) {
    numCount[`${num}`] = numCount[`${num}`] === undefined ? 0 : numCount[`${num}`] + 1;
  }
  return Number(Object.keys(numCount).find(key => numCount[key] === 0));
}

// Tests
console.log(findUniq([0,0,1,0,0]));
console.log(findUniq([1,1,0.55,1,1]));
console.log(findUniq([1,0,0,0,0]));