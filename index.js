//your code here
const beli = require('./beli.js')

class objItem{
    constructor(item, harga, waktu){
      this.item = item
      this.harga = harga
      this.waktu= waktu
    }
  }

var permen = new objItem('permen', 2000, 1000)
var indomie = new objItem('indomie', 4000, 1000)
var kopi = new objItem('kopi', 6000, 1000)
var emas = new objItem('emas', 120000, 1000)
var minum = new objItem('minum', 12000, 1000)

beli(100000, permen, function (change){
  beli(change, indomie, function(change){
    beli(change, kopi, function(change){
      beli(change, emas, function(change){
        beli(change, minum, function(change){
            console.log('saya pulang');          
        })
      })
    })
  })
})