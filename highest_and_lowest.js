// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function makeResult(max, min) {
  let result = `${max} ${min}`
  return result;
}

function highAndLow(string) {
  let numbers = string.split(" ");
  let max = numbers[0];
  let min = numbers[0];

  for (let i = 0; i < string.length; i++) {
    if (Number(numbers[i]) < min) {
      min = numbers[i];
    }
    if (Number(numbers[i]) > max) {
      max = numbers[i];
    }
  }
  return makeResult(max, min);
}

// Alternative Solution using Math methods

function highAndLow2(numbers) {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}