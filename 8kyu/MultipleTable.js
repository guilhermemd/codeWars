// Multiplication table for number - 8kyu

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

function multiTable(number) {
  let multipleTable = '';
  for(let index = 1; index <= 10; index += 1) {
    multipleTable += (`${index} * ${number} = ${index * number}\n`); 
  }
  return multipleTable.substring(0, multipleTable.length -1);
}
console.log(multiTable(5))

// var i = 'Hello\nWorld';
// console.log(i)

// referencias: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring

// https://www.youtube.com/watch?v=dJc2kQdHJ94