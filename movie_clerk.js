/*  There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An movie ticket costs 25 dollars.

The cinema clerk wants to sell a ticket to every single person in this line.

Can cinema cleark sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if clerk can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
*/

function hasChange(cash, bank){
  return (cash - 25) <= bank;
}
function giveChange(cash, cost){
  return cash - cost;
}

function tickets(peopleInLine){
  let bank = 0;
  let ticketPrice = 25;
  for(let cash of peopleInLine){
    if(cash === 25){
      bank += cash;
    }
    else if(hasChange(`${cash}`, bank)){
      bank -= giveChange(`${cash}`, ticketPrice);
    } else {
      return 'NO';
    }
  }
  return 'YES';
}

// TESTS
console.log(tickets([25, 25, 50, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100]));
