/* global scope */
var a = 1;
console.log(a);

function foo() {
  /* function scope */
  var b = 2;
  console.log(b);
  console.log(a);
}

foo();
// console.log(b);

var x15 = 1;
function foo() {
  var x15 = 100;
  console.log(x15);
}
console.log(x15);


function bar() {
  console.log('lalalala')
  someVariable = 999
}
bar()
console.log(someVariable)