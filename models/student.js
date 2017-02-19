'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail: true,
        isunique: function(value, next) {
          Student.find({
            where: {
              email : value
            },
            attributes : ['id']
          }).then(function(data) {
            if(data) {
              return next("Email sudah ada !")
            }
            next();
          })
        }
      }
    },
    tinggi : {
      type : DataTypes.INTEGER,
      validate : {min : 150, isNumeric:true}
    },
    phone : {
      type : DataTypes.STRING,
      validate : {
        len : [10, 13],
        isAlphanumeric : true,
        isNumeric : true,
        //isAlpha: false
      }
    }
  }, {
    classMethods: {
      // getFullName: function(firstName, lastName) {
      //   return `Nama lengkap kamu adalah : ${firstName} ${lastName}`
      // }
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(student_data) {
        Student.findAll().then(function(data) {
          student_data(data)
        })
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
