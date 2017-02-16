'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail:true,
        isUnique: function(value, callback) {
          Student.find({
            where: value === email
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
    phone: DataTypes.STRING
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
        let currentYear = new Date()
        return currentYear.getFullYear() - birthdate
      }

    }
  });
  return Student;
};
