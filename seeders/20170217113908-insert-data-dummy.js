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
    [
      {firstname: 'Bambang', lastname: 'Handoko', birthdate: new Date(), createdAt:new Date(), updatedAt:new Date()},
      {firstname: 'Ratna', lastname: 'Santri', birthdate: new Date(), createdAt:new Date(), updatedAt:new Date()},
    ]);
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
