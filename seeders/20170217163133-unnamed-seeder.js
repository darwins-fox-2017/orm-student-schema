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
        // return queryInterface.bulkInsert('Teachers', [{
        //   name: 'bambang',
        //   email: 'bambang@gmail.com',
        //   createdAt: new Date(),
        //   updatedAt: new Date()
        // }, {
        //   name: 'irsan',
        //   email: 'irsan@gmail.com',
        //   createdAt: new Date(),
        //   updatedAt: new Date()
        // }], {});
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
