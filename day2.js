let fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits.join(''))

/* indexOf */
// console.log(fruits.indexOf()) // => -1
// console.log(fruits.indexOf('apple')) // => 0
// console.log(fruits.indexOf('cherry')) // => 0

/* concat */
fruits = fruits.concat(['pear', 'watermelon'])
// console.log(fruits)

/* slice */
// console.log(fruits.slice(2, 3))
// console.log(fruits)

/* splice */
// console.log(fruits.splice(2, 3))
// console.log(fruits)

fruits = [ 'apple', 'banana', 'cherry', 'pear', 'watermelon']
//           ^
for (let i = 0; i < fruits.length; i ++) {
  // console.log(`I love ${fruits[i]}`)
}

for (let f of fruits) {
  // console.log(`I got some ${f}`)
}

function printSomeItems(items) {
  items = items.slice(1, 4);

  for(let item of items) {
    console.log(`I love ${item}`)
  }
}

// printSomeItems(fruits)

/* variable scope */
// function foo() {
//   let someVariable = 100;
// }
// console.log(someVariable);

/* Object */
function getCurrency(country) {
  let currencies = {
    us: 'USD',
    tw: 'NTD',
    jp: 'JPY'
  }
  return currencies[country]
}
console.log(getCurrency('jp'))

let studentA = {
  name: 'John',
  age: 18,
  gender: 'M',
  merried: false,
}

console.log(studentA.name)

// console.log(Object.keys(studentA))
// console.log(Object.values(studentA))
let entrs = Object.entries(studentA)
console.log(entrs)
let entrsWithoutMerried = []
for (let pair of entrs) {
  if (pair[0] !== 'merried') {
    entrsWithoutMerried.push(pair)
  }
}

console.log(Object.fromEntries(entrsWithoutMerried))


// taiansu@gmail.com
// taian.su@gmail.com
// tai.an.su@gmail.com
// t.a.i.a.n.s.u.@gmail.com
// taiansu+fubon@gmail.com