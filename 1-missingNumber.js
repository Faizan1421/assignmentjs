let arr = [12, 13, 16, 19, 30];

// find missing numbers with their index number
function missingNumbers(arr) {
  let firstValue = arr[0];
  let lastValue = arr[arr.length - 1];
  let newArray = [];
  let result = [];

  /* Creating a new array with all the numbers between the first and last value of the original array. */
  for (let i = firstValue; i <= lastValue; i++) {
    newArray.push(i);
  }
  /* Checking if the item is not included in the original array. If it is not included, it will push the
  item and the index number to the result array. */
  newArray.forEach((item, i) => {
    if (!arr.includes(item)) {
      console.log(item);
      result.push(`${item} is missing on index ${i}`);
    }
  });
  return result;
}
let ans = missingNumbers(arr).join("\n");
console.log(ans);

/* output:
14 is missing on index 2 
15 is missing on index 3 
17 is missing on index 5 
18 is missing on index 6 
20 is missing on index 8 
21 is missing on index 9 
22 is missing on index 10 
23 is missing on index 11 
24 is missing on index 12 
25 is missing on index 13 
26 is missing on index 14 
27 is missing on index 15 
28 is missing on index 16 
29 is missing on index 17 */
