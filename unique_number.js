// There is an array with some numbers. All numbers are equal except for one. Try to find it! It’s guaranteed that array contains more than 3 numbers. The tests contain some very huge arrays, so think about performance.

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


// Alternative Solution
function findUniq2(array) {
  let[a, b, c] = array.slice(0, 3);
  if(a !== b && a !== c){
    return a;
  }
  for(let x of array){
    if (x !== a){
      return x;
    }
  }
}