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
      first_name: 'Irwin',
      last_name: 'Pratajaya',
      birthdate: new Date('1989-03-21'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Endy',
      last_name: 'Susanto',
      birthdate: new Date('1988-08-18'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Firman',
      last_name: 'Wahyu',
      birthdate: new Date('1999-09-19'),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
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
