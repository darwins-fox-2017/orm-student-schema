"use strict"

const db = require("./models")

//getFullName
// db.Student.findById(1).then(function(data){
//   console.log("Name : " + data.getFullName());
// })

//getAge
// db.Student.findById(1).then(function(data) {
//   console.log("===================================");
//   console.log("Age : " + data.getAge());
// })

//getAllData
// db.Student.getAllData(function(dataStudent){
//   console.log("===============get All Data=================");
//   dataStudent.forEach(function(data) {
//     console.log(`ID : ${data.id}`);
//     console.log(`firstName : ${data.firsName}`);
//     console.log(`lastName  : ${data.lastName}`);
//     console.log(`full Name : ${data.firsName} ${data.lastName}`);
//     console.log(`Age : ${data.getAge()}\n`);
//   })
// })

//Check Validation
db.Student.create({
  firsName : "Rafa",
  lastName : "Irawan",
  birthDate: "1991-12-02",
  Height:150,
  Phone : "123456789012",
  Email:"rafa@email.com"
}).then(function(data) {
  console.log(data);
}).catch(function(err) {
  console.log(err.message);
})
