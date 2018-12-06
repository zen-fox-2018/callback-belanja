//your code here
var beli =  require('./beli.js')



beli(10000, {item :'baju', harga : 2000, waktu : 2000},function(data){
    beli(data, {item :'topi', harga : 2000, waktu : 2000},function(data){
        beli(data,{item :'celana', harga : 2000, waktu : 2000},function(data){
            beli(data,{item :'kemeja', harga : 2000, waktu : 2000},function(data){
                beli(data,{item :'sepatu', harga : 2000, waktu : 2000},function(data){
                    console.log(data)
                  })
              })
          })
      })
  })

  