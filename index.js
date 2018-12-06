//your code here
const beli = require ('./beli.js')

class Barang {
    constructor(item, harga, waktu) {
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}


let permen = new Barang('permen', 1000, 2000)
let chokichoki = new Barang ('choki-choki', 500, 2000)
let kitKat = new Barang ('Kit-Kat', 7000, 2000)
let kacang = new Barang ('kacang', 1000, 2000)
let snickers = new Barang ('snickers', 7000, 3000)
let belanja = [permen, chokichoki, kitKat, kacang, snickers]
beli (5000, permen, function(kembalian){
    if(kembalian > chokichoki.harga){
        beli(kembalian, chokichoki, function(kembalian){
            if(kembalian > kitKat.harga){
                beli(kembalian, kitKat, function(kembalian){
                    if(kembalian > kacang.harga){
                        beli(kembalian, kacang, function(kembalian){
                            if (kembalian > snickers.harga) {
                                beli(kembalian, snickers, function(kembalian){

                                })
                            }else{
                                console.log(`uang tidak cukup buat beli snickers`)
                            }
                        })
                    }else{
                        console.log(`uang tidak cukup buat beli kacang`)
                    }
                })
            }else{
                console.log(`uang tidak cukup buat beli kit-kat`)
            }
        })
    }else{
        console.log(`uang tidak cukup buat beli choki-choki`)
    }
    
})

