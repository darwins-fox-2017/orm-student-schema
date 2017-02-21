"use strict"
 let db = require('./models');
 

//instanceMethods
// db.students.findAll().then(function(students){
//   students.forEach(function(student){
//     console.log("Fist Name : ", student.first_name);
//     console.log("Last Name : ", student.last_name);
//     console.log("Full Name : ", student.getFullName());
//     console.log("Birth Date : ", student.birthdate);
//   })  
// })

// classMethods
db.students.getAllData(function(result) {
  result.forEach(function(student){
    console.log("Fist Name : ", student.first_name);
    console.log("Last Name : ", student.last_name);
    console.log("Full Name : ", student.getFullName());
    console.log("Birth Date : ", student.birthdate);
  }) 
})