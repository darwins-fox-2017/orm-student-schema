'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firsName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },

    instanceMethods:{
      getFullName:function(){
        return (this.firsName + " " + this.lastName)
      }

      getAge:function() {
        return
      }
    }
  });
  return Student;
};
