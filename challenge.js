function birthday(s, d, m) {
  let numOfWays = 0;

  for (let i = 0; i < s.length; i++) {
    let sum = 0;
    for (let x = 0; x < m; x++) {
      sum += s[i + x];
    }

    if (sum === d) {
      numOfWays++;
    }
  }

  return numOfWays;
}

//expected to be 2
console.log(birthday([1, 2, 1, 3, 2], 3, 2));
