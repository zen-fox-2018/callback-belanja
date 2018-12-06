//your code here
const beli = require('./beli.js');
var item1 = {"item" : "roti", "harga" : 10000, "waktu" : 1000};
var item2 = {"item" : "ayam", "harga" : 12000, "waktu" : 2000};
var item3 = {"item" : "daging", "harga" : 13000, "waktu" : 1500};
var item4 = {"item" : "sayur", "harga" : 10500, "waktu" : 1300};
var item5 = {"item" : "minyak tanah", "harga" : 20000, "waktu" : 1200};
var uang = 100000
if (item1.harga > uang) {
  console.log('uang tidak cukup');
}
else{
  beli(uang, item1 , function(kembalian){
    if (item2.harga > uang) {
      console.log('uang tidak cukup');
    }
    else{
      beli(kembalian, item2, function(kembalian){
        if (item3.harga > uang) {
          console.log('uang tidak cukup');
        }
        else{
        beli(kembalian, item3, function(kembalian){
          if (item1.harga > uang) {
            console.log('uang tidak cukup');
          }
          else{
          beli(kembalian, item4, function(kembalian){
            if (item1.harga > uang) {
              console.log('uang tidak cukup');
            }
            else{
            beli(kembalian, item5, function(kembalian){
              console.log('sisa kembalianya : '+kembalian);
            })}
          })}
        })}
      })}
    }
  )
}
