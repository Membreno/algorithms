// Given a number as an input, square every digit of the number. For example, if we run 9119 through the function, 811181 will come out.

function squareDigits(number){
  let numbers = number.toString().split("");
  let result = "";
  for (number of numbers){
    result += Math.pow(number, 2);
  }
  return parseInt(result);
}

console.log(squareDigits(9119));
console.log(squareDigits(223));