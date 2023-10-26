// PROBLEM
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with  places after the decimal.
// input 
// arr = [1,1,0,-1,-1] 
// output
// 0.400000
// 0.400000
// 0.200000
//
// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

function ratios(arr){
  let positives = 0, negatives = 0, zeros = 0;
  arr.forEach(x => {
    if(x === 0){
      zeros++;
    } else if(x > 0){
      positives++;
    } else {
      negatives++;
    }
  })

  function ratio(x, total, precision){
    return (x/total).toFixed(precision)
  }
  console.log(ratio(positives, arr.length, 6));
  console.log(ratio(negatives, arr.length, 6));
  console.log(ratio(zeros, arr.length, 6));
  
}

ratios([0,0,1,1,1,-1,-2])