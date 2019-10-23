// Check to see if a string has the same amount of 'x's and 'o's. The method should return a boolean and be case insensitive. The string can contain any char.

function XO(str){
  let xCount = 0;
  let oCount = 0;
  const letters = str.split("");
  for (char of letters){
    if(char.toLowerCase() === "x"){
      xCount++
    }
    else if (char.toLowerCase() === "o"){
      oCount++
    }
  }
  return xCount === oCount ? true : false;
}

console.log(XO("ooxx")); // true
console.log(XO("xooxx")); // false
console.log(XO("ooxXm")); // true
console.log(XO("zpzpzpp")); // true //when neither x || o present still true
console.log(XO("zzoo")); // false