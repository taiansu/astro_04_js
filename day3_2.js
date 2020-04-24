// putInPot('beef')
// putInPot('tomato')
// console.loog('I make tomato beef')

// boomboom('chicken')
// boomboom('coconut')
// console.loog('I make coconut chicken')

function cook(i1, i2, callback) {
  callback(i1)
  callback(i2)
  console.log(`I make ${i2} ${i1}`)
}
cook('beef', 'tomato', function(i) { console.log(`${i} in pot`) })
cook('chicken', 'coconut', function (i) { console.log(`fries ${i}`) })

// function $(selector) {
//   return {
//     on: function(event, f) {
//       let calculatedThings = ''
//       f(calculatedThings)
//     }
//   }
// }
/* map */
// hindly miller typing (Haskell)
// map :: [a] -> (a -> b) -> [b]
// let res28 = [1, 2, 3, 4, 5].map(function(i) { return i * 2})

let res28 = [1, 2, 3, 4, 5].map(i => i * 2)

/* filter */
let res33 = [4, 5, 6, 7, 8].filter(i => i % 3 === 0)

/* reduce */
let x36 = [1, 2, 3, 4, 5].reduce((accu, i) => accu + i, 0)

//let objc = {a: 1}
// objc['c'] = 3
let obj = [1, 2, 3, 4, 5].reduce((accu, i) => {
  console.log(accu)
  accu[`x${i}`] = i + 1
  return accu
}, {})
console.log(obj)
// let objc = {
//   'x1': 2, // 'x${i}': i + 1
//   'x2': 3
// }

let x41 = [1, 2, 3, 4, 5].reduce(
  function(accu, i) {},
  0
)
console.log(x36)
// $('.someClass').on('click', function(event) {  })

// let reducer = (accu, i) => accu + i
let res34 = 
  [1, 2, 3, 4, 5].map(i => i + 1)
                 .filter(i => i % 2 === 0)
                 .reduce((accu, i) => accu + i, 0)

// 箭號函式(Arror function)替換規則 (this)
// let foo = function(i) { return i + i }
// let foo = (i) => { return i + i}
// let foo = (i) => i + 1
let foo = i => i + 1


console.log(res34)

let res73 = [1, 2, 3, 4, 5].map(i => ({'x': i}))
console.log(res73)
// [
    //  {'x': 1},
    //  {'x': 2},
    // blah
//]

RandomSource.transcript('ACTGCTAGCTAG')
// => 'UGAC.....'


/* pure function */
function foo86(x, y) {
  return x + y
}

let a = 100
function bar91(x, y) {
  a = a + 1
  return x + y + a
}