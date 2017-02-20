"use strict"

const models = require('./models');


models.Student.create({
  firstname : 'Salsa',
  lastname : 'Billa',
  birthdate : new Date('1996-07-16').toISOString(),
  email : 'salsa533@gmail.com',
  phone : '08127579978',
  height : 160.0
}).then(function(data){
  console.log(`data berhasil!`);
}).catch(function(err){
  console.log(err);
})
//
// models.Student.findAll({// findAll mereturn object
//   attributes : ['firstname','lastname','birthdate']
// }).then(function(param){
//   param.forEach(function(data){
//     console.log(data.getAge());
//   })
//   // berisi command yang mengolah data yang diperoleh
// })
