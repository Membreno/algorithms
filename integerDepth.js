// The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple. So the depth of 42 is 9. Write a function named computeDepth which computes the depth of its integer argument.Only positive numbers greater than zero will be passed as an input.

function computeDepth(n){
  let numbers = [];
  let depth = 1;

  while(numbers.length < 10){
    let number = n * depth;
    let array = number.toString().split('');
    for (let num of array){
      if(numbers.indexOf(num) < 0){
        numbers.push(num);
      }
      if(numbers.length === 10){
        return depth;
      }
    }
    depth++;
  }
  return 0;
}

// TESTS
console.log(computeDepth(1)) // should return 10
console.log(computeDepth(42)) // should return 9