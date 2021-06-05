// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13.If there are numbers or special characters included in the string, they should be returned as they are.Only letters from the latin / english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  let ciphered = "";
  for(let i = 0; i < message.length; i++){
    let char = message[i];
    isLetter(char) ? ciphered += cipher(char) : ciphered += char;
  }
  return ciphered;
}

function isLetter(letter) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerL = letter.toLowerCase()
  return alphabet.indexOf(lowerL) > -1;
}

function cipher(letter){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let index = alphabet.indexOf(letter.toLowerCase());
  index += 13;
  if (index > 25){
    index -= 26
  }
  return isCapital(letter) ? alphabet[index].toUpperCase() : alphabet[index];
}

function isCapital(letter){
  return letter === letter.toUpperCase();
}

// TEST
console.log(rot13("test"));  // Expected outcome => grfg
console.log(rot13("Test"));  // Expected outcome => Grfg
console.log(rot13("Codewars"));  // Expected outcome => Pbqrjnef
console.log(rot13("Ruby is cool!"));  // Expected outcome => Ehol vf pbby!
console.log(rot13("10+2 is twelve."));  // Expected outcome => 10+2 vf gjryir.
console.log(rot13("abcdefghijklmnopqrstuvwxyz"));  // Expected outcome => nopqrstuvwxyzabcdefghijklm
console.log(rot13("Random Strings"));  // Expected outcome => Enaqbz Fgevatf