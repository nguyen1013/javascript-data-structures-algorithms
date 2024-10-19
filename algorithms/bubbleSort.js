const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};

const swap = require('./swap');

const bubbleSort = input => {
  let swapCount = 0
  let swapping = true;
  
  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        swapCount++;
        swapping = true;
      }
    }
  }
  console.log(`Swapped ${swapCount} times`);
  return input;
};
console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1] ))

const randomize = () => Math.floor(Math.random() * 40);

let numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(randomize());
}