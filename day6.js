// '|  a  |  b  |  c  |'
// '|  15  |  2  |  3  |'

// let print = 'a'.padStart(5, ' ')
// console.log(print)

/* THIS!!!! */
console.log(this)

// module.exports.a = 300
console.log(module.exports)

let obj = {
  a: 100,
  b: function(x) {
    return x + this.a
  },
  c: x => {
    return x + this.a
  }
}

let f = obj.b

console.log(obj.b(10))
console.log(f(10))

// console.log(module.exports)

let foo = {a: 2}
let bar = {a: 5}

console.log(f.call(foo, 10, 20))
console.log(f.apply(bar, [10, 20]))

// module.export ={a: 333}

console.log('obj.c', obj.c(10))
// console.log('g.call', g.call(foo, 10))
// console.log('g(10)', g(10))

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
/* destructive assignment */
let ary = [1, 2, 3, 4, 5, 6]

// let firsEl = ary[0]
// let secEl = ary[1]
// let thirdEl = ary[2]
let [firstEl, secEl, thirdEl] = ary
console.log(firstEl)
console.log(secEl)
console.log(thirdEl)
let [head, ...tails] = ary

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
// let oj = {a: 1, b: 2, c: 3, d: 4}
function getObj() {
 return {a: 1, b: 2, c: 3, d: 4}
}
// let {a: a, b: b, d: d} = oj
   let {   a,    b,    d, c: someC} = getObj()
console.log(d)

// person :: {name: '', age: 10}
function printInfo({name, age}) {
  console.log(`Person: ${name} is ${age} years old`)
}

printInfo({name: 'John', age: 30, gender: 'M'})

let classroom = {
  teacher: {name: 'john', age: 30}
}

let {teacher: {name}} = classroom

/* default parameter */
function getY() { return undefined; }
function hasDefault(x, y = 100) {
  y = y || 100
  return x + y
}

let res83 = hasDefault(10, getY())
console.log(res83)

/* spread */
let ary88 = [1, 2, 3]
ary88.push(4)
console.log(ary88)

let ary91 = [0, ...ary88, 5]
console.log(ary91)

let person = {name: 'j', age: 10}
let prn = {...person, gender: 'M'}
console.log(prn)



// IIFE
// let obj104 = (function () {
//   return {a: 'dont modify', b: 'else'}
// })()

// let mod = require('./mod.js')
let {fun1, var1} = require('./mod.js')
fun1()


// In browser
// let mod = require('./mod.js')
import mod from './mod.js'



