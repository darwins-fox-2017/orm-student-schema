"use strict"


var models = require('./models')


models.Student.getAllData(function(student) {
  console.log(`ID : ${student.id}`)
  console.log(`First Name : ${student.first_name}`)
  console.log(`Last Name : ${student.last_name}`)
  console.log(`Birthdate : ${student.birthdate}`)
  console.log(`Fullname: ${student.getFullName()}`)
  console.log(`Age : ${student.getAge()} \n`)
})


// models.Student.findAll({attributes:['first_name', 'last_name','birthdate','createdAt', 'updatedAt']}).then(function(student) {
//   students.forEach((student, index) => {
//     console.log(`${student.first_name}|${student.last_name}|${student.birthdate}|${student.createdAt}|${student.getFullName()}`)
//   })
// })