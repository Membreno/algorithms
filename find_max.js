// Given an array of numbers find the Max number

function findMax(numbers){
  let max = numbers[0];
  for (number of numbers){
    if (number > max){
      max = number;
    }
  }
  return max;
}

console.log(findMax([77, -5, 2, 89, 44, 37])); // 89
console.log(findMax([90, -5, 101, 299])); // 299