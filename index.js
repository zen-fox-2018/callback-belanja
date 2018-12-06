//your code here

const beli = require("./beli")

let candy = {
    item : "permen",
    harga : 80000
}

let beer = {
    item: "Beer",
    harga: 19000
}

let milk = {
    item: "susu",
    harga: 70000
}

let cookies = {
    item: "kueh",
    harga: 4000
}

let iceCream = {
    item : "Ice Cream",
    harga : 3000
}

beli(200000, candy, function(kembalian) {
    beli(kembalian, beer, function(kembalian){
        beli(kembalian, milk, function(kembalian){
            beli(kembalian, cookies, function(kembalian) {
                beli(kembalian, iceCream, function(kembalian) {})
            })
        })
    })
})