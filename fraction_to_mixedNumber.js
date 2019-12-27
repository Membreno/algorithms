/* Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

[sign]a b/c

where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).

If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

Division by zero should raise an error (preferably, the standard zero division error of your language). */

function mixedFraction(fraction){
  let integers = fraction.split("/");
  let numerator = integers[0];
  let denominator = integers[1];
  let negative = numerator < 0;
  if(negative){
    numerator *= -1;
  }
  let wholeNumber = Math.floor(numerator / denominator);
  let remainder = numerator - (wholeNumber * denominator);
  if(remainder === 0){
    return wholeNumber.toString();
  }
  if(negative){
    wholeNumber *= -1;
  }
  if(lcm(remainder, Number(denominator))){
    let divider = lcm(remainder, Number(denominator));
    remainder = remainder / divider;
    denominator = denominator / divider;
    return mixedResult(wholeNumber, remainder, denominator);
  }
  return mixedResult(wholeNumber, remainder, denominator);
}

// HELPER FUNCTIONS
function lcm(numerator, denominator){
  for (let i = numerator; i > 1; --i){
    if(numerator % i === 0 && denominator % i === 0){
      return i;
    }
  }
  return false;
}
function mixedResult(whole, numer, denom){
  if(whole === 0){
    return `${numer}/${denom}`;
  } else {
    return `${whole} ${numer}/${denom}`;
  }
}

// TESTS
console.log(mixedFraction('-10/7')) // -1 3/7
console.log(mixedFraction("42/9")) // 4 2/3
console.log(mixedFraction("6/3")) // 2
console.log(mixedFraction("4/6")) // 2/3

// PENDING TEST
console.log(mixedFraction("-22/-7")) // 3 1/7
console.log(mixedFraction("0/0")) // ZeroDivisionError
console.log(mixedFraction("3/0")) // ZeroDivisionError
console.log(mixedFraction("678/-788")) // -339/394