function permutation(data) {
  if (data.length == 1) {
    return [data];
  } else {
    let result = [];
    for (let i=0; i<data.length; i++) {
      let copy = [...data.slice(0, i), ...data.slice(i + 1)];
      let partialResult = permutation(copy);
      partialResult
        .map(p => [data[i], ...p])
        .forEach(p => result.push(p));
    }
    return result;
  }
}

console.log(permutation([1, 2, 3, 4]));
