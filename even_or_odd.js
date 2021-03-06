// Given a integer, determine if number is even or odd
// function even_or_odd(number) {
//   if(number % 2 === 0){
//     return "Number is Even";
//   }
//   return "Number is Odd";
// }

// Using a ternary operator
function even_or_odd(number){
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(even_or_odd(4)); // EVEN
console.log(even_or_odd(9)); // ODD
console.log(even_or_odd(0)); // EVEN