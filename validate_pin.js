// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
  pin = pin.toString();
  var numbers = /^[0-9]+$/;
  let pinLength = pin.length;

  if (pin.match(numbers) === null) {
    return false;
  }
  if (isNaN(pin)) {
    return false;
  }
  if (pinLength === 4 || pinLength === 6) {
    return true;
  }
  return false;
}


// Test Code
console.log(validatePIN("1243")); // True
console.log(validatePIN("123")); // False
console.log(validatePIN("ab12")); // False
console.log(validatePIN("124355")); // True
console.log(validatePIN('-1.234')); // False

// Alternative Solution
function validatePIN2(pin) {
  var pinlen = pin.length;
  var isCorrectLength = (pinlen == 4 || pinlen == 6);
  var hasOnlyNumbers = pin.match(/^\d+$/);

  if (isCorrectLength && hasOnlyNumbers) {
    return true;
  }
  return false;
}