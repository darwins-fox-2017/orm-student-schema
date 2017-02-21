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
    
    
    let assignFullname = function(students) {
      return new Promise(function(resolve, reject) {
        students.forEach(function(student) {
          let id = student.id
          let fullname = student.getFullName()
          models.Student.update({
            name: fullname
          },{
            where: {
              id: id
            }
          })
          .catch(function(err) {
            reject(err)
          })
        })
      });
    }

    let updatedData = function(data) {
      console.log(`${data} records has been updated`)
    }
    
    return models.Student.findAll()
    .then(assignFullname)
    .then(updatedData)
    
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
