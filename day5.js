// Homework
// https://ln.tai.su/astro_js_05

// 'G' -> 'C'
// 'C' -> 'G'
// 'A' -> 'U'
// 'T' -> 'A'
// 'ACGTGGTCTTAA' -> 'UGCACCAGAAUU'
// Rna.transcript('GC') // => 'CG'

// `UAG`、`UAA`、`UGA`
// Rna.transcript('ACGTATTCCCCC') // => 'UGCAUAA'

let dnaMap = {
  G: "C",
  C: "G",
  A: "U",
  T: "A",
};
let ender = [`UAG`, `UAA`, `UGA`];

function translate(c) {
  return dnaMap[c];
}
function hasEnder(currentDna) {
  let res = currentDna.split("").slice(-3).join("");
  return ender.indexOf(res) >= 0;
}

let Rna = {
  transcript: function (dna, checkF = (_) => false) {
    return dna
      .split("")
      .map(translate)
      .reduce((accu, c) => {
        return checkF(accu) ? accu : accu + c;
      }, "");
  },
};

let expected = "UGCACCAGAAUU";
// console.log(translate('A') === 'U')
// console.log(Rna.transcript('ACGTGGTCTTAA') === "UGCACCAGAAUU")
// console.log(Rna.transcript('ACGTATTCCCCC', hasEnder) === 'UGCAUAA')

// indexOf
let res46 = [1, 2, 3, 4, 5].indexOf(1);
// console.log(res46)
let res48 = [1, 2, 3, 4, 5].indexOf(6);
// console.log(res48)

// default parameter
function foo(a, b = 999) {
  console.log(a);
  console.log(b);
}
// foo(1, 2)
// console.log("--------------------");
// foo(3)

// varargs
function bar(...y) {
  console.log(y);
}
// console.log("--------------------");
// bar(1, 2, 3, 4, 5, 6, 7, 8, 9)
// bar()

// JavaScript Object
let obj = {
  a: 100,
  b: true,
  c: "test",
  d: [],
  e: {},
  f: function () {},
  g: () => {},
};

let jn = '{"a": 100, "b": true, "c": "test", "d": [], "e": {}}';
// console.log(jn);

// AJAX
// XML
// JSON (JavaScript Object Notation)
// 1. 是一個很長的字串
// 2. key 一定是字串
// 3. 每個語言都會自己實作 encoder 跟 decoder

//http://jsonplaceholder.typicode.com/posts
let posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];
let post = {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  }

function toPostHtml(jsn) {
  return `
  <h1><a href="post/${jsn.id}">ID: ${jsn.id}</a></h1>
  <h3>Title: ${jsn.title}</h3>
  <p class="some-body">${jsn.body}</p>
  `;
}
// let result = toPostHtml(post);
// console.log(result);
let result = posts.map(toPostHtml).join('')
// console.log(result)

function expensiveCalc(i) {
  return i + 1
}
// sync 同步(道)， blocking
function bar(i) {
  let a = i + 1
  let b = expensiveCalc(a)
  let c = 100
  return b * 10 + c
}

// async 非同步(道)
function main() {
  console.log('開始囉！')

  function reached() {
    console.log('五秒到了')
  }
  setTimeout(reached, 5000)

  console.log('結束囉！')
}