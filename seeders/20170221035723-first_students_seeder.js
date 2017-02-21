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
    // return queryInterface.bulkInsert('Students',
    // [{
    //     first_name: 'Danang',
    //     last_name :  'Aji Tamtomo',
    //     birthdate :  new Date('1992-10-31'),
    //     height    :  170,
    //     email     :  'imsuretamtomo@gmail.com',
    //     phone     :  '085846020358',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },{
    //     first_name: 'Adam',
    //     last_name : 'Saprudin',
    //     birthdate : new Date('1950-08-31'),
    //     height    :  170,
    //     email     :  'adamsaparudin@gmail.com',
    //     phone     :  '086654363463',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },{
    //     first_name: 'Daniel',
    //     last_name:  'Sidiabutar',
    //     birthdate:  new Date('1941-05-23'),
    //     height    :  170,
    //     email     :  'danielag@gmail.com',
    //     phone     :  '04352235235',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }], {})
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
