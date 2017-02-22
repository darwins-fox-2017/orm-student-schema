"use strict"
 let db = require('./models');
 

//instanceMethods
db.Student.findAll().then(function(students){
  students.forEach(function(student){
    console.log("Fist Name : ", student.first_name);
    console.log("Last Name : ", student.last_name);
    console.log("Full Name : ", student.getFullName());
    console.log("Birth Date : ", student.birthdate);
  })  
})

//fullname
// db.Student.findById(1).then(function(data){
//   console.log(data.getFullName());
// })

//getAge
// db.Student.findById(1).then(function(data) {
//   console.log("Age : " + data.getAge());
// })

// Seed Data
// db.Student.create({first_name : 'raisa', last_name : 'adriana', birthdate : new Date(), email : 'raisa@gmaol.com', phone : '0000909090909', height : 150 }).then(function(data){
//   console.log(data);
// }).catch(function(err){
//   console.log(err);
// })

// classMethods
// db.sTUDENT.getAllData(function(result) {
//   result.forEach(function(student){
//     console.log("Fist Name : ", student.first_name);
//     console.log("Last Name : ", student.last_name);
//     console.log("Full Name : ", student.getFullName());
//     console.log("Birth Date : ", student.birthdate);
//   }) 
// })