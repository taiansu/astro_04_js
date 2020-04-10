let hotel = {
  name: "happy hotel",
  address: "XXXXXXXXX",
  tel: 1336783423,
  stars: 5,  //暫定
  site: "www.happy.com.tw",

  rooms: [
    {roomNumber: 102, type: 'busniess', basePrice: 6000, wifi: false},
    {roomNumber: 202, type: 'luxury', basePrice: 10000, wifi: true},
    {},
    {},
  ],
  // room: {
  //   type: [{ business: 6000 }, { casual: 8000 }, { luxury: 10000 }],
  //   smoke: Boolean,
  //   meal: Boolean
  // },

  "swimming_pool": {},
  "parking": {},
  "gym": {},
  "restaurant": {},

  "staffs": {
    managers: [],
    part_times: [],
    regular_stuffs: [],
  },
  "staffs2": [
    {name: 'a', type: 'manager'},
    {name: 'b', type: 'part-time'},
    {name: 'c', type: 'regular'},
  ]


  //   {
  //   name: String,
  //   age: Integer,
  //   gender: String,
  //   language: ["English", "Chinese", "Japanese", "Korean"]
  // }
}

function getHotelContact(hotel) {
  return {
    name: hotel.name,
    tel: hotel.tel,
    address: hotel.address
  }
}
