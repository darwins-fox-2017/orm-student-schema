"use strict"
var Model = require('./models')

// Model.Student.create({
//   first_name: 'daniel',
//   last_name: 'agus',
//   birthdate: new Date('1994-08-18')
// }).then(function(user) {
//   // console.log(user.birthdate);
// })
Model.Student.create({ first_name: 'agnes', last_name: 'lasmono', birthday: new Date('1993-04-01'), gender: 'woman', email: 'agneslasmono', height: 160, phone: '08123444'})
  .then(function(task) {
  console.log('Sukses!');
}).catch(function(err){
  console.log(err.message);
})

Model.Student.findAll({
  attributes: ['first_name', 'last_name', 'birthdate']
}).then(function(Murid){
  Murid.forEach(function(item) {
    console.log(item.getFullName());
  })
  // console.log(Murid);
  // --
})
