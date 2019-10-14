function countVowels(word) {
  let vowels = 'aeiou';
  let count = 0;

  for (let letter of word) {
    if (vowels.includes(letter) == true) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("bananas") );