//your code here
const beli = require('./beli.js')

let sampo = {
  item : 'sampo',
  harga : 15000,
  waktu : 1000
}

let tehKotak = {
  item : 'teh kotak',
  harga : 5000,
  waktu : 900
}

let tisu = {
  item : 'tisu',
  harga : 11000,
  waktu : 600
}

let sabun = {
  item : 'sabun',
  harga : 18000,
  waktu : 2000
}

let permen = {
  item : 'permen',
  harga : 10000,
  waktu : 300
}

beli(100000 , sampo, function(callback) {
  beli(callback, tehKotak, function(callback) {
    beli(callback, tisu, function(callback) {
      beli(callback, sabun, function(callback) {
        beli(callback, permen, function(callback) {
          console.log(`Uang sisa kembaliannya adalah : ${callback}`);
        })
      })
    })
  });
})
