let shopCart = [
  {
    product: 111,
    amount: 43,
    orderTime: "00:00",
  },

  {
    product: 222,
    amount: 33,
    orderTime: "00:00",
  },

  {
    product: 333,
    amount: 43,
    orderTime: "00:00",
  },

];

prada_db = [
  {
    product_id: '111',
    name: "pen_pinapple_apple_pen",
    price: 33,
    spec: "large",
  },
  {
    product_id: '222',
    name: "apple_pen",
    price: 11,
    spec: "large",
  },
];

// 計算shopCart總價
let s = 0;

for (let x = 0; x < shopCart.length; x++) {
  obj = shopCart[x];
  s += prada_db[obj.product].price * obj.amount;
}
console.log(s);