let alphabet = ['a', 'b', 'c', 'd', 'e'];

/*
Output:

[ 'a', 'b', 'c', 'd' ]
[ 'a', 'b', 'c', 'e' ]
[ 'a', 'b', 'd', 'e' ]
[ 'a', 'c', 'd', 'e' ]
[ 'b', 'c', 'd', 'e' ]
*/

search(alphabet, [], 0);

function search(alphabet, combination, index) {
  // console.log("Received " + combination + " index=" + index);
  if (combination.length == 4) {
    console.log(combination);
  } else {
    for (let i=index; i<alphabet.length; i++) {
        search(alphabet, [...combination, alphabet[i]], i + 1);
    }
  }
}
