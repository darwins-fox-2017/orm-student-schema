'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE
  }, {
    classMethods: {
      // getFullName: function(firstName, lastName) {
      //   return `Nama lengkap kamu adalah : ${firstName} ${lastName}`
      // }
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(where) {
        // Student.findAll({where:where}).then(function)
      },

    },
    instanceMethods: {
      getFullName : function() {
        return `${this.first_name} ${this.last_name}`
      },
      getAge : function() {
        let tahun = this.birthdate.getFullYear()//toString().split(" ").splice(3, 1)
        let tampung = new Date().getFullYear()
        return tampung - tahun + " Tahun "
      }
    }


  });
  return Student;
};
