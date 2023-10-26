// There is a collection of input strings and a collection of query strings.
// For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

function matchingStrings(strings, queries) {

  const results = new Array(queries.length).fill(0);

  queries.forEach((q, i) => {
    strings.forEach(s => {
      if(q === s){
        results[i]++;
      }
    })
  })
  return results
}

console.log(matchingStrings(['as', 'asd', 'asd', 'asdf', 'zxcv', 'as', 'as'], ['as', 'asd', 'asdf', 'zxcv','you']));