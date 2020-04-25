// import $ from 'jquery'
// const $ = require('jquery')

// $(document).ready(function() {
//   $('#add-img-by-id').on('click', idImgeHandler)

//   $('#add-img-randomly').on('click', randomImgeHandler)

//   $('#pic-destroy').on('click', picDestroyHandler)
// })

function idImgeHandler(evt) { }

function randomImgeHandler(evt) { }

function picDestroyHandler(evt) { }

// other functions
function randomPicID() {}

const Logger = {
  info: function() { },
  debug: function() { },
  log: function(msg) {
    if(getSystemEnv() === 'dev' || getSystemEnv() == 'test') {
      console.log('------------------------------')
      console.log(msg)
      console.log('------------------------------')
    }
  }
}

// const IMAGE_LIMIT = 1085
// let randomPicID = function (url){
//   return Math.floor(Math.random() * IMAGE_LIMIT )
// }

// let a = 10
// if(a = 100) {
//   console.log('true!!')
// } else {
//   console.log('false!!')
// }

function foo(a) {
  console.log(a)
}