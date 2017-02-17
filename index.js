"use strict"
let Model = require('./models')

Model.Student.create({
  first_name : 'joko',
  last_name : 'widodo',
  birthdate : new Date('1980-07-01'),
  height : 130,
  email : 'wahyu@gmail.com',
  phone : '922929299229'
}).then(function(param){
  console.log(`Berhasil`);
}).catch(function(err){
  console.log(err.message);
})
//
// Model.Student.findAll({
//   attributes: ['first_name', 'last_name', 'birthdate']
// }).then(function(param){
//   param.forEach(function(item){
//   console.log(item.getFullName());
//   })
// })
// Model.Student.findAll().then(function(data){
//   data.forEach(function(result){
//     console.log(result.id);
//     console.log(result.first_name);
//     console.log(result.last_name);
//     console.log(result.birthdate);
//     console.log(result.getFullName());
//     console.log(result.getAge());
//   })
// })
