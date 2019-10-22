// Given a string capitalize each first letter and duplicate letter depending on it's position and connect words with a hyphen
// EXAMPLE accum("abcd") will equal "A-Bb-Ccc-Dddd"

function accum(str){
  let letters = str.split("");
  let result = [];
  for (let i = 0; i < str.length; i++){
    let newChar = "";
    for (let j = 0; j < (i + 1); j++){
      newChar += letters[i];
    }
    result.push(capitalize(newChar));
  }
  return result.join("-")
}
//Helper Function # 1
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// TEST
console.log(accum("aBcD"));
console.log(accum("dOG"));
console.log(accum("RqaEzty"));


// ############ Alternative Solution ############
function accum2(str) {
  let result = [];
  let letters = str.split("");
  counter = 1;
  for (let letter of letters) {
    result.push(funkyCapitalize(letter, counter));
    counter++;
  }
  return result.join("-")
}

//Helper Function # 2
function funkyCapitalize(letter, number){
  let result = "";
  for (let i = 0; i < number; i++){
    result += i === 0 ? letter.toUpperCase() : letter.toLowerCase();
  }
  return result;
}

// TEST 2
console.log(accum2("aBcD"));
console.log(accum2("elf"));