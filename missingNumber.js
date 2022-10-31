let arr = [12, 13, 16, 19];

// find missing numbers with their index number
let newArray = [];
let firstValue = arr[0];
let lastValue = arr[arr.length - 1];

/* Creating a new array with all the numbers between the first and last value of the original array. */
for (let i = firstValue; i <= lastValue; i++) {
  if (i >= firstValue && i <= lastValue) {
    newArray.push(i);
  }
}
let result = [];
/* Checking if the item is not included in the original array. If it is not included, it will push the
item and the index number to the result array. */
newArray.forEach((item, i) => {
  if (!arr.includes(item)) {
    console.log(item);
    result.push(`${item} is missing on index ${i}`);
  }
});
console.log(result.join("\n"));
