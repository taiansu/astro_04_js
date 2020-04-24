// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('#btn').addEventListener('click', function() {
//     document.querySelector('h1').classList.toggle('large')
//   })
// })

function btnClickEvent(event) {
    // event.stopPropagation();
    // event.preventDefault();
    $('h1').toggleClass('large');
    console.log('btn clicked')

    return false;
}

$(document).ready(function() {
  // $('#btn').click(function() {
  //   $('h1').toggle('slow')
  // })
  $('#btn').on('click', btnClickEvent)

  $('.wrapper').on('click', function() {
    console.log('wrapper clicked')
    $('#btn').off('click')
  })
  
  let counter = 0;
  $('#addItem').on('click', function() {
    $('#container').append(`<li class='item'>Item${counter}</li>`)
    counter++
  })

  $('#container').on('click', '.item', function() {
    $(this).toggleClass('large')
  })


  $('h1').on('mouseover', function() {
    // alert('boom!!!')
  })
})