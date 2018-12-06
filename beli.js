let items = [{
  item: `sayur`,
  harga: 1000
}, {
  item: `kentang`,
  harga: 2000
}, {
  item: `ayam`,
  harga: 3000
}, {
  item: `nasi`,
  harga: 4000
}, {
  item: `mouse`,
  harga: 10000
}, {
  item: `pulsa`,
  harga: 3000
}, {
  item: `tempe`,
  harga: 6000
}]

function beli(uang, obj, cb) {
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function () {
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    } else {
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      cb(0)
    }
  }, obj.waktu);
}

beli(30000, items[0], function (params) {
  beli(params, items[1], function (params) {
    beli(params, items[2], function (params) {
      beli(params, items[3], function(params) {
        beli(params, items[4], function(params) {
          beli(params, items[5], function(params) {
            beli(params, items[5], function (params) {
              //KAME-KAMEHAA
            })
          })
        })
      })
    })
  })
})

module.exports = beli;
