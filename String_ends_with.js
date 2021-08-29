// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'c'b) // returns true
// solution('abc', 'd') // returns false
// abcde', 'cde'), true)

function solution(str, ending){
  return str.endsWith(ending);
};


// result from codeWars 
function solution(str, ending){
  return new RegExp(ending+"$", "i").test(str);
}

// https://www.alura.com.br/artigos/javascript-replace-manipulando-strings-e-regex