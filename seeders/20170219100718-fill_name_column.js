'use strict';

var models = require('../models')
module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    
    let updateName = function(id, fullname) {
      console.log(fullname);
      return new Promise(function(resolve, reject) {
      });
    }
    
    let assignFullname = function(students) {
      return new Promise(function(resolve, reject) {
        students.forEach(function(student) {
          // console.log(student);
          let id = student.id
          let fullname = student.getFullName()
          // console.log(fullname);
          // resolve(id,fullname)
          models.Student.update({
            name: 'Tes'
          },{
            where: {
              id: id
            }
          })
        })
      });
    }
    
    return models.Student.findAll()
    .then(assignFullname)
    // .then(updateName)
    // .then(function(success) {
    //   console.log(success)
    // })
    
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
