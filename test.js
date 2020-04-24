// function foo(x, y, z) {
//   return x + y + z
// }
// curry => Haskell Curry
// function foo(x) {
//   return function(y) {
//     return function(z) {
//       return x + y + z
//     }
//   }
// }
let foo = x => y => z => x + y + z


// let result15 = foo(1)
// console.log(result15)
// let result16 = result15(2)
// console.log(result16)
// let result17 = result16(3)
// console.log(result17)
let result21 = foo(1)(2)(3)

// map, filter <- reduce 推導

// 遞迴
// recursive

// 費波那契數列
// [0, 1, 1, 2, 3, 5, 8, 13, 21]

let ary = [1, 2, 3, 4, 5]
function sum(array) {
  let result = 0
  for(let i = 0; i < array.length; i++) {
    result = result + array[i]
  }
  return result
}
console.log(sum(ary))

function recSum(ary) {
  if(ary.length === 0) { return 0 }
  let [head, ...tails] = ary
  return head + recSum(tails)
}

// function argF(x, ...ys) {
//   console.log(x)
//   console.log(ys)
// }

// let [a, ...b] = [1, 2, 3, 4, 5]