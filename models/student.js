'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email : {
      type : DataTypes.STRING,
      unique : true,
      validate : {
        isEmail : true,
        isUnique : function(value, next){
          Student.find({
            where : {
              email : value
            },
            attributes : ['id']
          }).then(function(x){
            if(x){
              return next('Udah ada')
            }
            next();
          })
        }
      }
    },
    height : {
      type : DataTypes.INTEGER,
      validate : {min : 150}
    },
    phone : {
      type : DataTypes.STRING,
      validate : {
        len : [10, 13],
        isAlphanumeric : true,
        isNumeric : true}
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAlldata : function(callback){
        Student.findAll().then(function(data){
          data.forEach(function(output){
            output.full_name = output.getFullName()
          })
          callback(output)
        })
      }
    },
    instanceMethods:{
      getFullName : function(){
        return `${this.first_name} ${this.last_name}`
      },
      getAge : function(){
        return (new Date().getFullYear()-(this.birthdate.getFullYear()))
      }
    }
  });
  return Student;
};
