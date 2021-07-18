// Inverted Ranges - 6kyu

// A range of numbers is represented as a tuple of two numbers, for example [0, 10] would indicate a range between 0 and 10 inclusively.

// The inverse of a range between some bounds are the ranges from the lower bound, to the lowest part of the range and the upper part of the range to the upper bound.

// For example:

// Given the range [25, 75]
// And the lower bound 0
// And the upper bound 100
// The inverse ranges would be [[0, 24], [76, 100]].

// Write a function invertedRanges which when given a list of ranges, returns the inverse of those ranges with a lower bound of 0 and an upper bound of 100.

// All ranges will be between 0 and 100, they will be given in order and will not overlap

// Examples:

// An empty list of ranges would return a list with a single range between 0 and 100:

function invertedRanges(ranges) {
  
}