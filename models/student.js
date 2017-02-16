'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(models) {
        return `${this.first_name}`
      },

    },
    instanceMethods: {
      getFullName : function() {
        return `${this.first_name} ${this.last_name}`
      },
      getAge : function() {
        let tampung = 
        return `${this.birthdate}`
      }
    }


  });
  return Student;
};
