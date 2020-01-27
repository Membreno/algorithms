/* Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced? If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance". */

function balance(left, right){
  let l = 0;
  let r = 0;
  const score = {
    "!" : 2,
    "?" : 3
  }

  for(let mark of left){
    if(score[mark]){
      l += score[mark]
    }
  }
  for(let mark of right){
    if(score[mark]){
      r += score[mark]
    }
  }
  if (l === r){
    return "Balance"
  }
  return l > r ? "Left" : "Right"
}

// TESTS
console.log(balance('!!', '??')) // "Right"
console.log(balance('!?!!', '?!?')) // "Left"
console.log(balance('!!???!????', '??!!?!!!!!!!')) // "Right"