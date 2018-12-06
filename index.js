const beli = require ('./beli.js')

//test case 1 
let barang1 = {
    item : 'permen',
    harga : 500,
    waktu : 3000,
}

let koleksiBarang = [
    {
        item : 'buku',
        harga : 2000,
        waktu : 3000,
    },
    {
        item : 'onigiri',
        harga : 4500,
        waktu : 3500,
    },
    {
        item : 'air mineral',
        harga : 4000,
        waktu : 3000,
    },
    {
        item : 'fanta',
        harga : 5000,
        waktu : 3500,
    },
    {
        item : 'pepsi',
        harga : 5000,
        waktu : 2000,
    },
    {
        item : 'mentos',
        harga : 1000,
        waktu : 1500,
    }
]


for (let i = 0; i < koleksiBarang.length; i++){
    
}

beli(8000, koleksiBarang[0], function(kembalian){
    beli (kembalian, koleksiBarang[1], function(kembalian){
        beli (kembalian, koleksiBarang[2], function(kembalian){
            beli(kembalian, koleksiBarang[3], function(kembalian){
                beli(kembalian, koleksiBarang[4], function(kembalian){
                    beli(kembalian, koleksiBarang[5], function(kembalian){
                        
                    })
                })
            })
        })       
        
    })    
    
})
