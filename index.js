//your code here
const beli = require('./beli')

let roti = {
    item: 'Roti',
    harga: 15000,
    waktu: 1000
}

let permen = {
    item: 'Permen',
    harga: 500,
    waktu: 500
}

let daging = {
    item: 'Daging',
    harga: 150000,
    waktu: 2000
}

let telur = {
    item: 'Telur',
    harga: 2500,
    waktu: 1000
}

beli(50000, permen, function(kembalian) {
    beli(kembalian, roti, function(kembalian) {
        beli(kembalian, telur, function(kembalian) {
            beli(kembalian, daging, function(kembalian) {
                beli(kembalian, roti, function(kembalian) {
                    console.log(`ini uang sisa anda: ${kembalian}`);
                })
            })
        })
    })
})