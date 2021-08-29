// Complete the solution so that it reverses all of the words within the string passed in.

// Example: "battle no requires which that is victory greatest The" --> "The greatest victory is that which requires no battle"

const frase = "battle no requires which that is victory greatest The";

function reverseWords(str){
  const wordArray = str.split(' ');
  const reverdedWord = wordArray.reverse();
  const result = reverdedWord.join(' ');
  return result;
}

reverseWords(frase);