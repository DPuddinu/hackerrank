// A pangram is a string that contains every letter of the alphabet.
// Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

function pangrams(s) {

  const englishAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const map = new Map(englishAlphabet.map(c => [c, false]))

  const charArray = s.split(' ').join('').toLowerCase().split('');
  charArray.forEach((c) => {
    map.set(c, true);
  });
  const results = [...map.values()].filter(x => x);
  return results.length === englishAlphabet.length ? 'pangram' : 'not pangram';
}

console.log(pangrams('the quick brown fox jumps over the lazy dog'));