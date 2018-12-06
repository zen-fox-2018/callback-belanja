//your code here
const beli = require("./beli.js");
const coklat = 
    {
        item : 'coklat',
        harga : 2000,
        waktu : 1000
    }
const snacks =
    {
        item : 'snacks',
        harga : 10000,
        waktu : 2000
    }
const shampoo =
    {
        item : 'shampoo',
        harga : 15000,
        waktu : 2000
    }
const sabun = 
    {
        item : 'sabun',
        harga : 15000,
        waktu : 2000
    }
const kopi = 
    {
        item : 'kopi',
        harga : 7000,
        waktu : 1000
    }
    
beli(100000, coklat, function(kembalian) {
    if (kembalian > 0) {
    beli(kembalian, snacks, function(kembalian) {
        if (kembalian > 0) {
        beli(kembalian, shampoo, function(kembalian) {
            if (kembalian > 0) {
            beli(kembalian, sabun, function(kembalian) {
                if (kembalian > 0) {
                beli(kembalian, kopi, function() {
                })
                }
            })
            }
        })
        }
    })
    } 
})


