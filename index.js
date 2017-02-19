"use strict"

let model = require('./models')
let faker = require('faker')

function addData(firstName, lastName, birthDate) {
  model.Students.create({firstname: firstName, lastname: lastName, birthdate: birthDate})
  .then(function(){
    console.log(`${firstName} inserted`);
  }).catch(function(err){
    console.log(`May be there are something you mis ?`);
  })
}

function generateFakeData(amont) {
  for (let i = 0; i < amont; i++) {
    addData(faker.name.firstName(), faker.name.lastName(), faker.date.past())
  }
}


function getAllStudentData() {
  model.Students.getAllData(function(cb){
    cb.forEach(function(res){
      console.log(res);
    })
  })
}

function getAge(){
  model.Students.getAgeFromData(function(result){
    console.log(result);
  })
}

// addData('diky', 'arga', 1995-10-17)
// generateFakeData(100)
getAge()
// getAllStudentData()
