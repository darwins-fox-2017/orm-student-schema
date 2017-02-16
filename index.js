"use strict"

const db = require("./models")

//getFullName
db.Student.findById(1).then(function(data){
  console.log(data.getFullName());
})

//getAge
db.Student.findById().then(function(data) {
  console.log(data.getAge());
})
