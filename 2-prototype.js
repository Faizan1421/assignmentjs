class Calculator {
  addition(...nums) {
    let res = nums.reduce((a, b) => a + b, 0);
    return res;
  }
  multiply(...nums) {
    let res = nums.reduce((a, b) => a * b);
    return res;
  }
  divide(a, b) {
    let res = a / b;
    return res;
  }
  minus(a, b) {
    let res = a - b;
    return res;
  }
}
let add = new Calculator();
console.log(add.addition(2, 4, 6, 2));
let multiply = new Calculator();
console.log(multiply.multiply(2, 4, 6, 2));
let divide = new Calculator();
console.log(divide.divide(4, 2));
let minus = new Calculator();
console.log(minus.minus(6, 2));

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(Array.prototype, "mySortingArray", {
  value: function (compare) {
    return [].concat(this).sort(compare);
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(Array.prototype, "addAllNums", {
  value: function () {
    let a = this.reduce((a, b) => a + b, 0);
    return a;
  },
  enumerable: true,
  configurable: true,
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
