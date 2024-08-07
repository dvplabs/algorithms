let alphabet = ['a', 'b', 'c', 'd', 'e'];

/*
Output:

[ 'a', 'b', 'c', 'd' ]
[ 'a', 'b', 'c', 'e' ]
[ 'a', 'b', 'd', 'e' ]
[ 'a', 'c', 'd', 'e' ]
[ 'b', 'c', 'd', 'e' ]
*/

console.log(combinations(alphabet, [], 0));

function combinations(alphabet, combination, index) {
  if (combination.length == 4) {
    return [combination];
  } else {
    let result = [];
    for (let i=index; i<alphabet.length; i++) {
        let partialResult = combinations(alphabet, [...combination, alphabet[i]], i + 1);
        partialResult.forEach(el => result.push(el));
    }
    return result;
  }
}
