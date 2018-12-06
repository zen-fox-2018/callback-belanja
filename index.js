//your code here
const beli = require('./beli.js');

let uang = 100000;

const americanno = {
    item: 'Americanno',
    harga: 10000,
    waktu: 2000
};

const espresso = {
    item: 'Espresso Khusus Sultan', 
    harga: 600000,
    waktu: 5000
};

const cappucino = {
    item: 'Cappucino',
    harga: 12000,
    waktu: 3000
};

const greentea = {
    item: 'Green Tea',
    harga: 6000,
    waktu: 2000
};

const water = {
    item: 'Air Mineral',
    harga: 2000,
    waktu: 1000
};

beli(uang, americanno, function (kembalian) {
    beli(kembalian, espresso, function (kembalian) {
        beli(kembalian, cappucino, function (kembalian) {
            beli(kembalian, greentea, function (kembalian) {
                beli(kembalian, water, function (kembalian) {
                });
            });
        });
    });
});