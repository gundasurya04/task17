// Arrow function that returns a Promise
const divideNumbers = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Error: Division by zero is not allowed.");
    } else {
      resolve(a / b);
    }
  });
};

// Test cases
const testCases = [
  [10, 2],
  [15, 3],
  [20, 0],  // should reject
  [7, 1],
  [9, -3]
];

// Run all cases
testCases.forEach(([x, y]) => {
  divideNumbers(x, y)
    .then(result => console.log(`${x} / ${y} = ${result}`))
    .catch(error => console.log(`${x} / ${y} -> ${error}`));
});
