'use strict';

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
    return queryInterface.bulkInsert('Students', [{
      first_name  : 'Julia',
      last_name   : 'Perez',
      birthdate   : new Date('1984-02-17'),
      createdAt   : new Date(),
      updatedAt   : new Date()
    },{
      first_name  : 'Chelsea',
      last_name   : 'Islan',
      birthdate   : new Date('1992-07-12'),
      createdAt   : new Date(),
      updatedAt   : new Date()
    },{
      first_name  : 'Luis',
      last_name   : 'Nani',
      birthdate   : new Date('1988-06-11'),
      createdAt   : new Date(),
      updatedAt   : new Date()
    }], {});
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
