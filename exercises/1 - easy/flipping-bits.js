// You will be given a list of 32 bit unsigned integers. Flip all the bits and return the result as an unsigned integer.

function flippingBits(n) {
  return Math.pow(2, 32)-1-n;
}

console.log(flippingBits(1))