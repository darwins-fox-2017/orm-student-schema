'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn("Students","Height",{type: Sequelize.INTEGER}),
      queryInterface.addColumn("Students","Phone",{type: Sequelize.STRING}),
      queryInterface.addColumn("Students","Email",{type: Sequelize.STRING})
    ]
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn({tableName:"Students", schema:"public"}, "Height"),
      queryInterface.removeColumn({tableName:"Students", schema:"public"}, "Phone"),
      queryInterface.removeColumn({tableName:"Students", schema:"public"}, "Email")
    ]
  }
};
