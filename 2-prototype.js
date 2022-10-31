Object.defineProperty(Array.prototype, "mySortingArray", {
  value: function (compare) {
    return [].concat(this).sort(compare);
  },
});

Object.defineProperty(Array.prototype, "addAllNums", {
  value: function () {
    let a = this.reduce((a, b) => a + b, 0);
    return a;
  },
});

let num = [4, 6, 3, 2, 5, 7, 1, 8];

console.log(num.mySortingArray()); //Output [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(num.addAllNums()); //output 36
// built in Array Prototypes methods
// fill()
// reverse()
// pop()
// shift()
// push()
// unshift()
// sort()
// splice()
// concat()
// join()
// slice()
// includes()
// indexOf()
// map()
// forEach()
// reduce()
// filter()
// find()
// every()
// some()
