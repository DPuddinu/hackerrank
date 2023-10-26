// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {

  let map = new Map();
  
  a.forEach(t => {
    const x = map.get(t);
    if(!x){
      map.set(t, 1);
    } else {
      map.delete(t)
    }
  })
  return [...map.keys()][0]

}
console.log(lonelyinteger([1,1,2,2,3,4,5,5,4]))