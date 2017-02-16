'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    [
      queryInterface.addColumn(
          'Students',
          'email',
          {
            type: Sequelize.STRING,
            after: 'birthdate'
          }
      ),
      queryInterface.addColumn(
          'Students',
          'height',
          {
            type: Sequelize.INTEGER,
            after: 'email'
          }
      ),
      queryInterface.addColumn(
          'Students',
          'phone',
          {
            type: Sequelize.STRING,
            after: 'height'
          }
      )
    ]
  },


  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
