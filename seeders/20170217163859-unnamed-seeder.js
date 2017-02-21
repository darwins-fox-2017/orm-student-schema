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
      // return queryInterface.bulkInsert('Schools', [{
      //   name: 'endy',
      //   teacher_id: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }, {
      //   name: 'wahyu',
      //   teacher_id: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }, {
      //   name: 'agnes',
      //   teacher_id: 2,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }, {
      //   name: 'windy',
      //   teacher_id: 2,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }, {
      //   name: 'banagher',
      //   teacher_id: 3,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }, {
      //   name: 'char',
      //   teacher_id: 3,
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
