$(document).ready(() => {
  console.log('')

  let url = 'http://jsonplaceholder.typicode.com/posts/'
  console.log('開始囉！')
  axios.get(url)
       .then(function(resp) {
         console.log('log')
         console.log(resp.data)
       })
  console.log('結束囉！')
      //  .then(function(resp){
      //    console.log(resp.data)
      //    let html = toPostHtml(resp.data)
      //    console.log(html)
      //    $('.container').append(html)
      //  })

  // callback hell
  // $.get(url, function (resp){
  //   let firstId = resp[0].id
  //   let url2 = (`http://jsonplaceholder.typicode.com/posts/${firstId}`)
  //   $.get(url2, function (resp){
  //     console.log(resp)
  //   })
  // })

  // console.log(url2)
  // $.get(url2)
})

function toPostHtml(jsn) {
  return `
  <div>
    <h1><a href="post/${jsn.id}">ID: ${jsn.id}</a></h1>
    <h3>Title: ${jsn.title}</h3>
    <p class="some-body">${jsn.body}</p>
  </div>
  `;
}