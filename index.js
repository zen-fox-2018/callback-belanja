const beli = require('./beli.js')

let rokok = {
  item: "rokok",
  harga: 1000
}

let mekdi = {
  item: "mekdi",
  harga: 1500
}

let minum = {
  item: "minum",
  harga: 500
}

let permen = {
  item: "permen",
  harga: 200
}

beli(10000, rokok, function(uang) {
  beli(uang, mekdi, function(uang) {
    beli(uang, minum, function(uang) {
      beli(uang, permen, function(uang) {
        return console.log(`selesai belanja saatnya berpesta`);
      })
    })
  })
})
