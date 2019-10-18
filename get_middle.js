// Given a string determine the middle character. If the string has an even set of characters grab the middle two. If the string only has one character return single character.

function isEven(word){
  return word.length % 2 === 0 ? true : false;
}

function getMiddle(word){
  if(word.length === 0){
    return word;
  }
  else if(!isEven(word)){
    let middle = Math.floor(word.length / 2);
    return word[middle];
  } else {
    let middlePoint = word.length / 2;
    let middleChars = word[(middlePoint - 1)] + word[middlePoint];
    return middleChars;
  }
}

console.log(getMiddle("Love"));
console.log(getMiddle("Element"));
console.log(getMiddle("M"));
console.log(getMiddle(""));