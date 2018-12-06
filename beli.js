function beli(uang, obj, cb){
  let kembalian = uang
  // for(let i = 0; i < obj.length; i++) {
    setTimeout(function(){
      console.log(`Saya pergi membeli ${obj.item}`)
      if (kembalian > obj.harga) {
        kembalian -= obj.harga
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        cb(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
        cb(0)
      }
    }, obj.waktu);
  // }
  
}

module.exports = beli;
