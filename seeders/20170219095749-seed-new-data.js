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
    let faker = require('faker')

    // Initiate random data contacts
    var randomFirstName = faker.name.firstName()
    var randomLastName = faker.name.lastName()
    var randomEmail = faker.internet.email()
    var randomPhone = faker.phone.phoneNumber()
    var randomCompany = faker.company.companyName()

    return queryInterface.bulkInsert('Students',
    [
      {firstname: `${randomFirstName}`, lastname: `${randomLastName}`, email: `${randomEmail}`, phone: `${randomPhone}`, height: 168, birthdate: new Date(), createdAt:new Date(), updatedAt:new Date()}
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
