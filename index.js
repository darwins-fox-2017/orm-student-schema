"use strict"

let Model = require ('./models')

// Model.Student.create({ firstname: 'Tukul', lastname: 'Arwana', birthdate: new Date(), status: 'jomblo' }).then(function(student) {
//   console.log("student created");
// })

Model.Student.findAll().then(function(students) {
  students.forEach(function(s) {
    console.log(s.id);
    console.log(s.firstname);
    console.log(s.lastname);
    console.log(s.birthdate);
    console.log(s.getFullName());
    console.log(`Umur ${s.firstname} ${s.lastname} sekarang ${s.getAge().getFullYear()-1986} tahun`);

  })
})

Model.Student.getAllData(function(students) {
  students.forEach(function(student) {
    console.log(student.id)
    console.log(student.firstname)
    console.log(student.lastname)
    console.log(student.fullname);
  })
})
