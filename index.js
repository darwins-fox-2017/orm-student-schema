"use strict"

let db = require('./models')

// db.Student.findAll().then(function (result) {
//   result.forEach(function(data) {
//     console.log(data.getFullName());
//   })
// })

db.Student.getAllData(function(result) {
  result.forEach(function (data) {
    console.log(`\nID         : ${data.id}`);
    console.log(`Firstname  : ${data.firstname}`);
    console.log(`Lastname   : ${data.lastname}`);
    console.log(`Fullname   : ${data.fullname}`);
    console.log(`Age        : ${data.age} years old`);
    console.log(`height     : ${data.height} cm`);
    console.log(`email      : ${data.email}`);
    console.log(`Phone      : ${data.phone}`);
  })
})

// db.Student.create({
//   first_name: "Eri",
//   last_name: "Irawan",
//   birthdate: "1999-03-12",
//   height: 160,
//   email: "1eri123@email.com",
//   phone: "081246412422"
// }).then(function() {
//   console.log("Data Added");
// }).catch(function(e) {
//   console.log(e.message);
// })

// db.Student.create({
//   first_name: "Akbar",
//   last_name: "Sahata",
//   birthdate: "1993-03-12",
//   height: 160,
//   email: "akbar@sahata.com",
//   phone: "081234512312"
// }).then(function() {
//   console.log("Data Added");
// }).catch(function(e) {
//   console.log(e.message);
// })
