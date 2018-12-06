//your code here
const beli = require('./beli')

const permen = { item: 'permen', harga: 1000, waktu: 1000 }
const roti = { item: 'roti', harga: 2000, waktu: 1000 }
const coklat = { item: 'coklat', harga: 8000, waktu: 1000 }
const susu = { item: 'susu', harga: 5000, waktu: 1000 }
const makaroni = { item: 'makaroni', harga: 3000, waktu: 1000 }

beli(10000, permen, function(kembalian){
    beli(kembalian, roti, function(kembalian) {
        beli(kembalian, coklat, function(kembalian) {
            beli(kembalian, susu, function(kembalian) {
                beli(kembalian, makaroni, function(kembalian) {
                    console.log(`sisa uang ${kembalian}`)
                })
            })
        })
    })
})