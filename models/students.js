'use strict';
module.exports = function(sequelize, DataTypes) {
  var students = sequelize.define('students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback){
          students.findAll().then(function(result){
            result.forEach(function(output){
              output.full_name = output.getFullName();
            })
            callback(result)
          })
      }
    },
    instanceMethods:{
      getFullName: function(){
        return this.first_name + " " + this.last_name
      }
    }
    
  });
  return students;
};