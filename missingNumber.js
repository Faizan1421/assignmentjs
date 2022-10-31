let arr = [12, 13, 16, 19];

// find missing numbers with their index number
let newArray = [];
let firstValue = arr[0];
let lastValue = arr[arr.length - 1];
console.log(firstValue);
console.log(lastValue);

for (let i = firstValue; i <= lastValue; i++) {
  if (i >= firstValue && i <= lastValue) {
    newArray.push(i);
  }
}
let result = [];
newArray.forEach((item, i) => {
  if (!arr.includes(item)) {
    console.log(item);
    result.push(`${item} is missing on index ${i}`);
  }
});
console.log(result.join("\n"));
