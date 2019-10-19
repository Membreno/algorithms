// Capitalize the first letter of every word in a string

function capitalize(word){
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function jadenCase(str){
  let words = str.split(" ");
  let result = [];
  for(let word of words){
    result.push( capitalize(word) );
  }
  return result.join(" ");
}

console.log(jadenCase("How can mirrors be real if our eyes aren't real"));
console.log(jadenCase("Up is down seen in it's original FORM"));