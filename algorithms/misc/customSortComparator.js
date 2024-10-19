// Sort by length
const sortByLength = (a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    return ascendingOrder(a, b);
  }
}

const ascendingOrder = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

// Use this array to test your code:
const testArray = ['car', 'train', 'plane', 'bike', 'skateboard', 'jet'];
testArray.sort(sortByLength);
console.log(testArray);


// Explicit Sort
const explicitSortWithComparator = (inputArray, order) => {
  
  const explicitComparator = (a, b) => {
    let indexA = order.length;
    let indexB = order.length;
    if (order.includes(a)) {
      indexA = order.indexOf(a);
    }
    if (order.includes(b)) {
      indexB = order.indexOf(b);
    }
    return indexA - indexB;
  }
  
  return inputArray.sort(explicitComparator).slice();
}

// Use this array to test your code:
const inputArray = ['a', 'b', 'c', 'd', 'e', 'f', 'n', 'y', 'g']
const order = ['a', 'n', 'd', 'y']
console.log(explicitSortWithComparator(inputArray, order));