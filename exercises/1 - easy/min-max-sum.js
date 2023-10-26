// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// example
// arr = [1,3,5,7,9]
// min = 16, max = 24

function minMax(arr) {
  const sorted = arr.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  const sumFn = (prev, cur) => prev + cur;
  const minSum = sorted.slice(0, 4).reduce(sumFn);
  const maxSum = sorted.slice(1, arr.length).reduce(sumFn);
  console.log(minSum+' '+maxSum);
}

minMax([1, 5, 2, 3, 67, 21]);
