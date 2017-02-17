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
      first_name:'wahyu',
      last_name :'hidayat',
      birthdate : new Date('1995-01-09'),
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      first_name:'Muhammad',
      last_name :'Firman',
      birthdate : new Date('1999-01-09'),
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      first_name:'Daniel',
      last_name :'Sidabutar',
      birthdate : new Date('1993-08-09'),
      createdAt : new Date(),
      updatedAt : new Date()
    }]
  )},

down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
