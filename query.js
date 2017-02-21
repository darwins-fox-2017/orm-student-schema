"use strict"
let db = require('./models');

// db.Teacher.findAll({raw: true}).then(function(result) {
//   console.log(`Teacher`)
//   result.forEach(function(data) {
//     console.log(data);
//   })
//   console.log(`-------------------------`);
// })

// db.School.findAll({ include: [{model: db.Teacher}] })
// .then(function(result) {
//   console.log(`School`)
//   result.forEach(function(data) {
//     console.log(`nama murid: ` + data.name);
//     console.log(`nomor guru: ` + data.teacherId);
//     console.log(`nama guru: ` + data.Teacher.name);       // hasil relasi
//     console.log(`email guru: ` + data.Teacher.email);     // hasil relasi
//     console.log(`-------------------------`);
//   })
// })

db.Student.create({ first_name: 'agnes', last_name: 'lasmono', birthday: new Date('1993-04-01'), gender: 'woman', email: 'anges@gmail.com', height: 160, phone: '08123444'})
.then(function(task) {
  console.log('oke coy');
}).catch(function(err){
  console.log(err.message);
})
