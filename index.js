//your code here
const beli = require('./beli')
// function belanja(cb) {
    // objBeliPermen = {
    //     item : 'Permen' ,
    //     harga : 1000,
    //     waktuCB :10
    // }
    // objBeliRoti = {
    //     item : 'Roti' ,
    //     harga : 10000,
    //     waktuCB :20
    // }


    // objBeliPayung = {
    //     item : 'Payung' ,
    //     harga : 3000,
    //     waktuCB :30
    // }

    // objBeliAcc = {
    //     item :'Accesoris',
    //     harga : 2000,
    //     waktuCB : 300
    // }

// }

objBeliPermen = {
    item : 'Permen' ,
    harga : 1000,
    waktu :1000
}
objBeliRoti = {
    item : 'Roti' ,
    harga : 10000,
    waktu :20
}
objBeliKopi = {
    item : 'Kopi',
    harga : 2000,
    waktu :100
}

objBeliPayung = {
    item : 'Payung' ,
    harga : 3000,
    waktu :300
}

objBeliAcc = {
    item :'Accesoris',
    harga : 2000,
    waktu : 400
}

var uang = 60000

 beli(uang , objBeliAcc , kembalian => {
     uang = kembalian
     beli(uang , objBeliPayung , kembalian =>{
        uang = kembalian 
        beli(uang , objBeliKopi , kembalian =>{
            uang = kembalian
            beli(uang , objBeliPermen, kembalian => {
                uang = kembalian
                beli(uang , objBeliRoti , kembalian =>{
                    console.log(`Sisa duit ${kembalian}`)
                    return kembalian
                })
            })
        })
     })
 })


