// Format a string of names like 'Bart, Lisa & Maggie'. 6 kyu

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

function list(names){
  const arrStr = []
  for(let index1 = 0; index1 < names.length; index1 += 1) {
    arrStr.push(names[index1].name);
  }
  arrStr.splice(arrStr.length -1, 0, "&")
  return arrStr;
}
const case1 = [ {name: 'Bart'}, {name: 'Lisa'} ];
console.log(list(case1));

const case2 = case1.forEach((a) => console.log(a));
console.log(case2);

const case3 = {name: 'Bart'};

console.log(case3.name);

// ref: https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript

// https://javascript.plainenglish.io/insert-an-element-in-specific-index-in-javascript-array-9c059e941a67#:~:text=Learn%20how%20to%20insert%20an%20element%20in%20specific%20index%20in%20array.&text=push(value)%20%E2%86%92%20Add%20an,method%20available%20in%20Array%20object.