'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    height: {
      type: DataTypes.INTEGER,
      min: 151
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(data,callback) {
          Student.find({
            where: {email: data},
            attributes: ['id']
          }).then(function(student) {
            if(student) {
              return callback('Email address is already in use')
            }
            callback()
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args:[10-13],
          msg: 'Phone length must be 10 - 13'
        },
        isNumeric: {
          args: true,
          msg: 'Phone not allow letters'
        },
        isAlphanumeric: {
          args: false,
          msg: 'Phone not allow alphanumeric'
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      // getAllData: function(data) {
      //   Student.findAll().then(function())
      // }

      getAllData: function(callback) {
        Student.findAll().then(function(result) {
          let temp = []
          result.forEach(function (data) {
            temp.push({
              id: data.id,
              firstname: data.first_name,
              lastname: data.last_name,
              fullname: data.getFullName(),
              birthdate: data.birthdate,
              age: data.getAge(),
              email: data.email,
              height: data.height,
              phone: data.phone
            })
          })
          callback(temp)
        })
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.first_name} ${this.last_name} `
      },

      getAge: function (birthdate) { // birthdate is a date
        let ageDiff = Date.now() - this.birthdate.getTime();
        let ageDate = new Date(ageDiff); // milisecond from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      }
    }
  });
  return Student;
};
