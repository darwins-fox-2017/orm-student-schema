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
    //   teacherId: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   name: 'wahyu',
    //   teacherId: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   name: 'agnes',
    //   teacherId: 2,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   name: 'windy',
    //   teacherId: 2,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   name: 'banagher',
    //   teacherId: 3,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   name: 'char',
    //   teacherId: 3,
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
