// Isograms - 7kyu

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str){
  if(str === '') {
    return true;
  }
  const lowLetters = str.toLowerCase()
  const splitStr = lowLetters.split('');
  return splitStr.every((letter, index) => str.indexOf(letter) === index);
}

// Funciona porquê na palavra 'aba' quando chegar no segundo 'a' o index que irá retornar é 0 porem o segundo 'a' tem index 2. Com isso tenho o return false :) 
// Demorou mais entendeu cabeção! ;)

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));

// https://stackoverflow.com/questions/50134662/check-that-a-word-is-an-isogram-with-pure-javascript/50134663

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// Testing indexOf!!

const string1 = 'Dermatoglyphics';
console.log(string1.indexOf('a'))

const string2 = 'aba';
console.log(string2.indexOf('a'))

// Solução que passa em todos os teste https://www.youtube.com/watch?v=zDaAS4NyvBk
// Desta forma verificamos se o tamanho do array de new Set é igual a o tamanho da palavra

function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));