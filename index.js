const beli = require('./beli')
let permen =  {
  item: 'Permen',
  harga: 2000,
  waktu: 1000
}
let pita =  {
  item: 'Pita',
  harga: 3000,
  waktu: 1000
}
let baju =  {
  item: 'Baju',
  harga: 5000,
  waktu: 1000
}
let celana =  {
  item: 'Celana',
  harga: 3500,
  waktu: 1000
}
let makanan =  {
  item: 'Makanan',
  harga: 4000,
  waktu: 1000
}

beli(10000, permen, function(kembalian) {
  beli(kembalian, makanan , function(kembalian) {
    beli (kembalian, baju , function(kembalian) {
      beli (kembalian, pita, function(kembalian) {
        beli (kembalian, celana, function (kembalian) {
          console.log(`Selesai belanja uang sisa tinggal ${kembalian}`)
        })
      })
    })
  })
})

