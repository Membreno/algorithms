// Create a function that take a string input and returns a number representing how many times a letter or a number was repeated.

function duplicateCount(str) {
  let charCount = {};
  let result = 0;
  const stringInput = str + "";

  for (let letter of stringInput) {
    let smLetter = letter.toLowerCase();
    if (charCount[smLetter] > 0 && charCount[smLetter] < 2) {
      result++;
      charCount[smLetter] += 1;
    }
    if (charCount[smLetter] === undefined) {
      charCount[smLetter] = 1;
    }
  }
  return result;
}

console.log(duplicateCount("abcd"));
console.log(duplicateCount(12341));
console.log(duplicateCount("Sass"));
console.log(duplicateCount("aAbbBcdee"));