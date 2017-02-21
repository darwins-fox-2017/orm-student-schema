'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      // unique:true,
      validate: {
        isEmail:true,
        isUnique: function(value, next) {
          Student.find({
            where: {email:value},
            attributes: ['id']
          }).then(function(data, error) {
            if (error) {
              return next(error)
            }
            if (data) {
              return next('Email is already used')
            }
            next()
          })
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min:150
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: [10,13],
        isAlphanumeric: true,
        isNumeric: true
      }
    },
    name: DataTypes.STRING
    // createdAt: DataTypes.DATE,
    // updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      getAllData: function(callback) {
        Student.findAll({}).then(function(students) {
          students.forEach(function(student) {
            callback(student)
          })
        })
      },
      associate: function(models) {
        // associations can be defined here
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.first_name} ${this.last_name}`
      },
      getAge: function() {
        let birthdate   = this.birthdate.getFullYear()
        let currentYear = new Date().getFullYear()
        return currentYear - birthdate
      }

    }
  });
  return Student;
};
