// (function() {
let fun1 = () => {
  console.log('mod fun1!!')
}
let fun2 = () => {}
let var1 = 1
let privVar = 100

module.exports = {fun1, fun2, var1}
// return {fun1, fun2, var1}
// })()

// in other files
// let mod = require('mod.js')