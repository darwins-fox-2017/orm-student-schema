"use strict"
let  model = require('./models');

model.Student.create({firstname:'bala',lastname:'bala', birthdate:'1992-04-12',email :'acot@gmail.com',height:151,phonenumber:'081239283192'}).
then(function(){
  console.log('data inserted');
}).catch(function(err){
  console.log('tinggi kurang/ email tidak sesuai / email sudah terdaftar / nomor hp kurang');
})
;
//
// model.Student.findOne({
//   where : {firstname:'hepiska'}
// }).then(function(hasil){
//   console.log(hasil.getFullName());
// })

// model.Student.getAllData(function(callback){
//   //console.log(callback);
//   callback.forEach(function(hasil){
//     console.log(hasil);
//   })
// });
//
// model.Student.getAgeData(function(result){
//   console.log(result);
// })
