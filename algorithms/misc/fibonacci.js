// Space complexity = O(n)
const memo = {};

const fibonacci = (num) => {
  if (memo[num] !== undefined) return memo[num];
  if (num < 2) return num;
  memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
  return memo[num];
};

// Test your code with calls here:
// console.log(fibonacci(20));
// console.log(fibonacci(200));

// No recursive option
function getNthFibo(n) {
  if (n <= 1) return n;
  var sum = 0,
    last = 1,
    lastlast = 0;

  for (var i = 1; i < n; i++) {
    sum = lastlast + last;
    lastlast = last;
    last = sum;
  }
  return sum;
}

// console.log(getNthFibo(50));

// Space complexity = O(1)
function getNthFiboBetter(n, lastlast=0, last=1) {
  if (n == 0) {
    return lastlast;
  }
  if (n == 1) {
    return last;
  }
  return getNthFiboBetter(n - 1, last, lastlast + last);
}

console.log(getNthFiboBetter(5));