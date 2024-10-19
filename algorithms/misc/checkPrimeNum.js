const listOfPrimeNums = (limit) => {
  function checkPrime(n) {
    if (n < 2) return false;
    if (n === 2 || n===3) return true;

    if (n%2===0 || n%3===0 || n%5===0) return false

    for (i = 5; i <= n; i += 6) {
      if (n%i===0 || n%(i+2)===0) return true;
    }
  }
  const arr = [];

  for (let i=1; i<=limit; i++) {
    if (checkPrime(i)) arr.push(i)
  }

  return arr;
};

const test = listOfPrimeNums(50);
console.log(test);
