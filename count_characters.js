/* The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 } What if the string is empty ? Then the result should be empty object literal { } */

function count(string) {
  let result = {};
  if (string == null) {
    return result;
  }
  for (let letter of string) {
    if (result[`${letter}`] === undefined) {
      result[`${letter}`] = 1;
    } else {
      result[`${letter}`] += 1;
    }
  }
  return result;
}