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
  if(names === [] || names === [{name: ''}]) {
    return '';
  }
  if(names.length === 1) {
    return names[0].name;
  }
  const arrStr = []
  let str = ''
  for(let index1 = 0; index1 < names.length; index1 += 1) {
    arrStr.push(names[index1].name);
  }
  str = arrStr.slice(0, arrStr.length - 1).join(', ') + " & " + arrStr.slice(-1);
  if( str === ' & ') {
    return ''
  }
  return str
}
const case1 = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Bart'} ];
console.log(list(case1));

const case2 = case1.forEach((a) => console.log(a));
console.log(case2);

const case3 = {name: 'Bart'};

console.log(case3.name);

console.log([{name: ''}].length);

// ref: https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript

// https://javascript.plainenglish.io/insert-an-element-in-specific-index-in-javascript-array-9c059e941a67#:~:text=Learn%20how%20to%20insert%20an%20element%20in%20specific%20index%20in%20array.&text=push(value)%20%E2%86%92%20Add%20an,method%20available%20in%20Array%20object.

// https://stackoverflow.com/questions/14763997/javascript-array-to-sentence

// https://www.w3schools.com/jsref/jsref_slice_array.asp  conferir slice com negativo
// o slice(-1) pega o penúltimo numero do array.

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(-3, -1));

// banana = 0, mango = -1, apple = -2, lemon = -3, orange = -4
