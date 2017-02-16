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

    return queryInterface.bulkInsert('Students',[{
      firstname : 'Muhammad Firman',
      lastname : 'Pebrizal',
      birthdate : new Date('1992-02-06'),
      createdAt : new Date().toISOString(),
      updatedAt : new Date().toISOString()
    },
    {
      firstname : 'Wahyu',
      lastname : 'Hidayat',
      birthdate : new Date("1997-01-09"),
      createdAt : new Date().toISOString(),
      updatedAt : new Date().toISOString()
    },{
      firstname : 'Dessy',
      lastname : 'Salrianty',
      birthdate : new Date("1990-12-05"),
      createdAt : new Date().toISOString(),
      updatedAt : new Date().toISOString()
    }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    // return queryInterface.bulkDelete('Students', null, {});
  }
};
