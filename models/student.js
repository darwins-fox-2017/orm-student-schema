'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
<<<<<<< HEAD
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail : {msg: 'invalid email format'},
        isUnique : function(item, next){
          Student.find({
            where: {email : item},
            attributes : ["id"]
          }).then(function(user){
            if(user){
              return next(`email is already in used`)
            }
            next()
          })
        }
      }
    },
    height: { type: DataTypes.REAL,
        validate: {
        min : 150,
        isNumeric : true
      }
    },
    phone: { type: DataTypes.STRING,
        validate: {
        len : {
          arg: [10-13],
          msg: 'Phone number length must be 10-13'
        },
        isAlphanumeric: {
          arg: false,
          msg: 'Phone not allow alphanumeric'
        },
        not: {
          args: ["[a-zA-Z]",'i'],
          msg: 'Phone not allow letters'
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
=======
    status: DataTypes.STRING,
    height: DataTypes.STRING,
    phone: DataTypes.STRING

  }, {
    classMethods: {
>>>>>>> 5c5180b068cea8b37a7948b35444aa8b2a29b7d3
      getAllData: function(result) {
        let newArr = []
        Student.findAll().then(function(students) {
          students.forEach(function(student) {
            let obj = {}
            obj['id'] = student.id
            obj['firstname'] = student.firstname
            obj['lastname'] = student.lastname
<<<<<<< HEAD
            obj['birthdate'] = student.birthdate
            obj['fullname'] = student.getFullName()
            obj['createdAt'] = student.createdAt
            obj['updatedAt'] = student.updatedAt
=======
            obj['fullname'] = student.getFullName()
>>>>>>> 5c5180b068cea8b37a7948b35444aa8b2a29b7d3
            newArr.push(obj)
          })
          result(newArr)
        })
      }
    },
    instanceMethods: {
<<<<<<< HEAD
      getFullName : function () {
        return `${this.firstname} ${this.lastname}`
      },
      getAge : function() {
        return this.birthdate.getFullYear()-1990
=======
      getFullName: function() {
        return this.firstname + this.lastname
      },
      getAge: function() {
        return this.birthdate
>>>>>>> 5c5180b068cea8b37a7948b35444aa8b2a29b7d3
      }
    }
  });
  return Student;
};
