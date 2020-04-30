// require('./debug.js')

[1, 2, 3].map(x => x + 1) // [2, 3, 4]

myMap([1, 2, 3], x => x + 1) // [2, 3, 4]

myFilter([1, 2, 3], x => x % 2 === 0) // [2]

function myMap(ary, f) {
  return ary.reduce((accu, x) => [...accu, f(x)], [])
}
// accu.concat([f(x)])

function myFilter(ary, f) {
  return ary.reduce((accu, x) => f(x) ? [...accu, x] : accu, [])
}


/* regexp */
let res18 = "regexp".match(/regex/);
// console.log(res18);
let res20 = /rgx/.exec("regexp");
// console.log(res20);

let res23 = "sadfaasdf!!!".match(/\w\w\w!/)
// console.log(res23)
// 'asdf!!'

let res27 = "aaaaaaaaaaaaaaabcde".match(/\w{3,5}e/)
// console.log(res27)

let inputs = ["A123456789", "235234523A", "ASFDASDFA4", 
              "AB1234567890"]
for(let i of inputs) {
  let res = /^[A-Z]\d{9}$/.exec(i)
  // console.log(i, res)
}

let res37 = "yahoo.com".match(/yahoo\.com/)

// let res39 = "\w".match(/\\\\w/)
// console.log(res39)

let tels = [ "02-2882-5252", "28825252", 
"02-28825252", "0228825252"]

for(let s of tels) {
  let res = /my regex$/.exec(s)
  // console.log(res)
}

let res50 = "0228825252".match(/(?:\d\d-?)?(\d{4}-?\d{4})/)
// let res51 = "28825252".match(/(\d\d-?)?(\d{4}-?\d{4})/)
// console.log(res50)
console.log(res50)
// console.log(res51)

let exts = ["foo.rb", "bar.js", "foobarb.py", "js.rb.py"]
for(let s of exts) {
  let fileRgx = /(\w+\.(rb|js))$/
  // let otherRgx = /\.jsx?$/
  console.log(fileRgx.exec(s))
}

// (rb|js)  群組, or
// 點！ 
// 結尾！

let brds = [
  "the oo design",
  "oomygush",
  "moon"
]
for(let s of brds) {
  let rgx = /\boo\b/
  console.log(rgx.exec(s))
}

let userInput =
  "mymail@yahoo.com<script src='http://hacku.com/blah.js'></script>"

let userInput2 =
  "mymail@yahoo.com');SELECT * from users;"

function carNew(brand, model) {
  return {
    brand: brand,
    model: model,
    drive: function() { console.log(this.model) }
  }
}
// let c = carNew('toyota', 'RAV4')
// let d = carNew('benz', 'c300')

function Car(brand, model) {
  this.brand = brand
  this.model = model
}
let c = new Car('benz', 'c300')
Car.prototype.drive = function() {
  console.log(`${this.brand}: ${this.model}`)
}
Car.prototype.wheels = 4
let d = new Car('toyota', 'RAV4')
// c.drive()
// d.drive()
// console.log(c.wheels)

class Bus extends Car {
  constructor(brand){
    this.brand = brand
  }
}
// class MyComponent extends React.Component {  }

// console.log(Car.prototype)
// console.log(Bus.prototype)

// use of prototype
// Object.prototype.myMap = function(f) {
//   return this.reduce((accu, i) => [...accu, f(i)], [])
// }
// [1, 2, 3, 4, 5].myMap(i => i + 1)

// use of prototype
let res = [1, 2, 3, 4, 5].map(i => i + 1)
                        .filter(i => i % 2 === 0)
                        // .peek()
                        .map(i => i * 3)
                        //  .peek()
                        .reduce((accu, i) => accu + i)
console.log(res)

//

var students = [
  {name: "John Doe", age: 24},
  {name: "Mary Lee", age: 17},
  {name: "Ash Lee",  age: 38},
  {name: "Bill Doe", age: 25},
]

let result = students.filter(s => s.age >= 18 )
                     .map(s => s.name.split(' '))
                     .map(([_fn, ln]) => ln)
                     .reduce((accu, i) => {
                       if(Object.keys(accu).indexOf(i) < 0) {
                         accu[i] = 1 // return {...accu, i: 1}
                       } else {
                         accu[i] += 1 // return {...accu, i: accu[i] + 1}
                       }
                        return accu
                     }, {})
console.log(result)
// {'Doe': 2, 'Lee': 1}
// groupBy

let goodData = {a: 1, b: 2, c: 3}
let badData = {a: null, b: 2, c: 3, d: null}

function nullKeys(data, chkKeys = Object.keys(data)) {
  let res = Object.entries(data) // [['a', 1], ['b', 2]]
        .filter(([k, v]) => chkKeys.indexOf(k) >= 0 && v === null)
        .map(([k, v]) => k)
        .join(',')
  return res === '' ? 'all good' : res
}

let res162 = nullKeys(goodData) // "all good"
let res163 = nullKeys(badData)  // "a,d"
let res164 = nullKeys(badData, ['b', 'c'])  // "all good"
console.log(res162)
console.log(res163)
console.log(res164)

/* recursive */
function sum(ary) {
  if (ary.length === 0) { return 0 }
  let [head, ...tails] = ary
  return head + sum(tails)
}
let res181 = sum([1, 2, 3, 4, 5])
console.log(res181)

// tail call optimization 尾呼叫最佳化
function tailSum(ary, accu = 0) {
  if(ary.length === 0) { return accu }
  let [head, ...tails] = ary
  return tailSum(tails, accu + head) // 函式執行的最後一行，是一個「單純的函式呼叫」
}
let res191 = tailSum([1, 2, 3, 4, 5])
console.log(res191)