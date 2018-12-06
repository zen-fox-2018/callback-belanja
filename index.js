const beli = require('./beli.js')

let uang = 100000

let permen = {
    item : 'permen',
    harga : 5000,
    waktu : 200
} 

let roti = {
    item : 'roti',
    harga : 10000,
    waktu : 300
} 

let susu = {
    item : 'susu',
    harga : 15000,
    waktu : 350
} 

let esKrim = {
    item : 'Es Krim',
    harga : 20000,
    waktu : 250
} 

let chiki = {
    item : 'chiki',
    harga : 20000,
    waktu : 150
} 

beli(uang, esKrim, function(kembalian) {
    beli(kembalian, permen, function(kembalian){
        beli(kembalian,roti, function(kembalian){
            beli(kembalian,susu, function(kembalian){
                beli(kembalian,chiki,function(kembalian){
                    console.log(`Sisa duit jajan nya segini ${kembalian}`)
                })
            })
        })
    })
})