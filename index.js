const beli = require('./beli.js')

beli(100000, {item: 'Mobil', harga: 50000,waktu: 1000}, function(kembalian){
    beli(kembalian, {item: 'Motor',harga: 25000,waktu: 1000}, function(kembalian){
        beli(kembalian, {item: 'Sepeda', harga: 10000, waktu: 1000}, function(kembalian) {
            beli(kembalian, {item: 'Telepon Fax', harga: 7500, waktu: 500}, function(kembalian){
                beli(kembalian, {item: 'Disket', harga: 5000, waktu: 750}, function(kembalian){
                    beli(kembalian, {item: 'Kaset', harga: 2500, waktu: 850}, function(kembalian){
                        beli(kembalian, {item: 'Langganan Spotify', harga: 1000, waktu: 500}, function(kembalian){
                            if (kembalian === 0) {
                                console.log(`Uang sudah habis, tidak ada kembalian sama sekali`)
                            } else {
                                console.log(`Jangan lupa tabung sisa uang kamu ya, uang kamu masih ada ${kembalian}.`)
                            }
                        })
                    })
                })
            })
        })
    })
})