// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.
//assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' )

const s = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"];
const s2 = ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"];

function twoSort(s) {
  const sortedArray = s.sort();
  const splitedWord = sortedArray[0].split('');
  const solution = splitedWord.join('***')
  return solution;
};

twoSort(s2);
