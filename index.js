"use strict"


var models = require('./models')
var fs = require('fs')

// 
// models.Student.getAllData(function(student) {
//   console.log(`ID : ${student.id}`)
//   console.log(`First Name : ${student.first_name}`)
//   console.log(`Last Name : ${student.last_name}`)
//   console.log(`Birthdate : ${student.birthdate}`)
//   console.log(`Fullname: ${student.getFullName()}`)
//   console.log(`Age : ${student.getAge()}`)
//   console.log(`Email : ${student.email}`)
//   console.log(`Phone : ${student.phone} `)
//   console.log(`Height: ${student.height}\n`)
// })

// models.Student.create({first_name:'Shello', last_name:'Ren', birthdate:'1995-04-18', email:'bodat@gmail.com', phone:'6034583453',height:172})
// .catch(function(err) {
//   console.log(err.message)
// })

function read(dir) {
  return new Promise(function(res, rej) {
    fs.readFile(dir, 'utf-8',function(err, data) {
      if (err) {
        rej('Error bung')
      } else {
        res({result:data, file:dir})
      }
    })
  })
}

let write = function(requirement) {
  return new Promise(function(res, rej) {
    fs.writeFile(requirement.file, requirement.result+' Berhasil', function(err) {
      if (err) {
        rej('Error bung')
      } else {
        res('Tulis')
      }
    })
  })
}

// read('package.json')
// .then(write)
// .then(function(suc) {
//   console.log(suc);
// }).catch(function(err) {console.log(err);})

Promise.all([read('package.json'),write()]).then(function() {
  
})


// models.Student.findAll({attributes:['first_name', 'last_name','birthdate','createdAt', 'updatedAt']}).then(function(student) {
//   students.forEach((student, index) => {
//     console.log(`${student.first_name}|${student.last_name}|${student.birthdate}|${student.createdAt}|${student.getFullName()}`)
//   })
// })