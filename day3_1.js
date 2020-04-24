// foo();

// 具名函式
// Function Declarations 
function foo() {
  console.log('foooooo')
}

console.log(foo)

// console.log(console.log)
var p = console.log;
p('lalalala')
// 匿名函式
// Function Expression
// var bar = function() {
//   console.log('brrrrr')
// }
// paradiams

// function won't hoisting
let baz;

baz = function(x) {
  console.log(x + 1)
}

let someFunction = function () {
}
console.log(someFunction.name)
function main() {
  let a = someFunction()
}
// console.log(main.name)
// main()

/* function as collection's member */
let funs = [ function(i) { console.log(i + 1)}, function(i) { console.log(i * 2)}, function(i) { console.log(i - 3)},
]

for(let i = 0; i < funs.length; i ++) {
  (funs[i])(10)
}

let car = {
  brand: 'Toyota',
  type: 'RAV4',
  year: 2020,
  move: function(i) {
    console.log(`Drive ${i} miles`)
  }
}
car.move(100)