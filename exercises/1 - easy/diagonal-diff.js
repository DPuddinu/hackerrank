// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
function diagonalDifference(arr) {
  let leftSum = 0, rightSum = 0;

  arr.forEach((_, i) => {
    leftSum += arr[i][i]
    rightSum += arr[i][arr.length - i -1]
  })

  return Math.abs(leftSum-rightSum)
}
console.log(diagonalDifference([
  [2,2,3],
  [4,5,6],
  [7,8,3]
]));