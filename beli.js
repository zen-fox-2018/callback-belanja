function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    if (uang >= obj.harga) {
      uang = uang - obj.harga
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${uang}`);
      cb(uang)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`);
      cb(uang)
    }
  }, obj.waktu);
}

module.exports = beli;
