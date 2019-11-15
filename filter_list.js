// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(arr){
  let result = [];
  for (let num of arr){
    if(typeof(num) === 'number'){
      result.push(num)
    }
  }
  return result;
}

// Tests
console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));