'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    status: DataTypes.STRING,
    height: DataTypes.STRING,
    phone: DataTypes.STRING

  }, {
    classMethods: {
      getAllData: function(result) {
        let newArr = []
        Student.findAll().then(function(students) {
          students.forEach(function(student) {
            let obj = {}
            obj['id'] = student.id
            obj['firstname'] = student.firstname
            obj['lastname'] = student.lastname
            obj['fullname'] = student.getFullName()
            newArr.push(obj)
          })
          result(newArr)
        })
      }
    },
    instanceMethods: {
      getFullName: function() {
        return this.firstname + this.lastname
      },
      getAge: function() {
        return this.birthdate
      }
    }
  });
  return Student;
};
