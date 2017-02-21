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
      first_name: 'sam',
      last_name: 'gante',
      birthdate: new Date('1992-04-01'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'master',
      last_name: 'eri',
      birthdate: new Date('1995-03-12'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'wahyu',
      last_name: 'macbook',
      birthdate: new Date('1990-02-020'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'firman',
      last_name: 'syanmils',
      birthdate: new Date('1986-02-14'),
      createdAt: new Date(),
      updatedAt: new Date()
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
