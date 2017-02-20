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
    return queryInterface.bulkInsert('Students',
    [{
        first_name: 'Danang',
        last_name : 'Aji Tamtomo',
        birthdate : new Date('1992-10-31'),
        createdAt : new Date(),
        updatedAt : new Date(),
        email     : 'imsuretamtomo@gmail.com',
        height    : 170,
        phone     : '085846020358'
      },{
        first_name: 'Adam',
        last_name : 'Saprudin',
        birthdate : new Date('1950-08-31'),
        createdAt : new Date(),
        updatedAt : new Date(),
        email     : 'adamsaparudin@gmail.com',
        height    : 170,
        phone     : '086654363463'
      },{
        first_name: 'Daniel',
        last_name : 'Sidiabutar',
        birthdate : new Date('1941-05-23'),
        createdAt : new Date(),
        updatedAt : new Date(),
        email     : 'danielag@gmail.com',
        height    : 170,
        phone     : '04352235235'
    }], {})
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
