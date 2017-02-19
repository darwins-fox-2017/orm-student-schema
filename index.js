"use strict"
var Model = require('./models')

// Model.Student.create({
//   first_name: 'daniel',
//   last_name: 'agus',
//   birthdate: new Date('1994-08-18')
// }).then(function(user) {
//   // console.log(user.birthdate);
// })
// Model.Student.create({ first_name: 'agnes', last_name: 'lasmono', birthday: new Date('1993-04-01'), gender: 'woman', email: 'agneslasmono', height: 160, phone: '08123444'})
//   .then(function(task) {
//   console.log('Sukses!');
// }).catch(function(err){
//   console.log(err.message);
// })

// Model.Student.findAll({
//   attributes: ['first_name', 'last_name', 'birthdate']
// }).then(function(Murid){
//   // console.log(Murid);
//   Murid.forEach(function(item) {
//     console.log(item.getFullName() + " " + item.getAge());
//     console.log('============');
//
//   })
// })

// getAllData
// Model.Student.getAllData(function(student_data) {
//   console.log('======== Get all Data =========');
//   student_data.forEach(function(data) {
//     console.log('--------------------------------------------');
//     console.log(`ID : ${data.id}`);
//     console.log(`Nama Depan : ${data.first_name}`);
//     console.log(`Nama Belakang : ${data.last_name}`);
//     console.log(`Nama Lengkap : ${data.first_name} ${data.last_name}`);
//     console.log(`Umur : ${data.getAge()} `);
//     console.log('--------------------------------------------');
//   })
//   console.log('======== Get all Data =========');
// })

Model.Student.create({
  first_name : 'Saiful',
  last_name : 'Roma',
  birthdate : new Date('1977-05-28'),
  email : 'saiful@gmail.com',
  tinggi : 160,
  phone : '8738782378278'
}).then(function(data) {
  console.log('Data berhasil ditambah !');
}).catch(function(err) {
  console.log(err.message);
})
