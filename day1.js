let a = 10;
let b = 20;
let result = a + b;

let a5 = "1";
let b6 = 2;
let result7 = a5 + b6;
// console.log(result7);

let ary = [1, 2, 3, 4, 5];
// console.log(typeof ary)

for (var i = 0; i < 10; i++) {
  // do something
}
// console.log(i);

// camelCase
let myAweseomVariable = 10;

// function
/* 
multi
line
comment 
*/
function foo(num) {
  console.log(num + 1);
}

// foo(10)

function bar() {
  console.log("hohoho");
}
// bar()

// define a function call getMax, print the max number pass in
// 可以用 $, _, 英文字母開頰
// 接著可以用數字
function getMax(n1, n2, n3, n4, n5, n6) {
  console.log("n1:", n1);
  console.log("n2:", n2);
  // let res = Math.max(n1, n2, n3, n4, n5, n6)
  // console.log('res:', res)
  // console.log(Math.max(n1, n2, n3))
}

let aary = [1, 2, 3, 4, 5, 6];
// getMax(aary) // => "6"

function addOne(x) {
  // console.log('lalala')
  return x + 1;
}
// console.log(addOne(100))

// 定義一個接收兩個數字的函式，會回傳將兩個數字相加的結果
function add(x, y) {
  return x + y;
}
// 呼叫函式並印出來
let res64 = add(5, 6);
// console.error(res64)

function badAdd(i) {
  if (i % 2 === 0) {
    return "noooo";
  } else {
    return i + 1;
  }
}

function badReturn(userName, number) {
  return `Hello, ${userName}, I just received the nubmer ${number} you gave me`;
}

// console.log('badReturn(100): ', badReturn(100))

// console.log('a2' < 'a1')
let num1 = 1;
let str1 = "1";
// console.log('==: ', num1 == str1)
// console.log('===: ', num1 === str1)
// console.log('0 == false:', 0 == false)
// console.log('NaN == NaN', NaN == NaN)

var someVariable;
// console.log(someVariable);
// console.log(someVariable === null);
// console.log("Hello, ${username}, I receive ${number}")

// if...else
// let bool89 = 10 < 18
let numA = 0;
if (numA) {
  console.log("lalala");
  console.log("hohoho");
} else {
  console.log("no way");
}

// falthy value:
// false, undefined, null, 0, '', []

// Ruby falthy value:
// nil, false

// else if
// if(cond1) {
// } else if(cond2) {
// } else if(cond3) {
// } else { }

// 寫一個叫 calculate 的函式，接收一個數字
// 超過一千打八折，超過一百打八五折，其它九折。
// 回傳計算後的總價
function getDiscountRate(num) {
  if (num > 1000) {
    return 0.8;
  } else if (num > 100) {
    return 0.85;
  } else {
    return 1;
  }
}
function getTaxRate() {
  return 1.05
}
function clac(num) {
  return num * getDiscountRate(num) * getTaxRate();
}

consol.log(clac(2000));

// SO(open close)LID