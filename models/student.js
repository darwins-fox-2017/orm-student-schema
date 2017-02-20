'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    height: {
      type: DataTypes.REAL,
      validate: {
        min : 150,
        isNumeric : true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail : {msg: 'email format must be valid'},
        // unique : true
        isUnique : function(item,next){
          console.log(next);
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
    phone: {
      type: DataTypes.STRING,
      validate: {
        len : {
          args: [10,13],
          msg: 'Phone length must be 10-13'
        },
        isAlphanumeric: {
          args: false,
          msg: 'Phone not allow alphanumeric'
        },
        not: {
          args: ["[a-z]",'i'],
          msg: 'Phone not allow letters'
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
      },

      getAllData : function(callback){
        Student.findAll().then(function(data){
          callback(data)
        })
      }
    },

    instanceMethods: {
      getFullName : function () {
        return `${this.firstname} ${this.lastname}`
      },

      getAge : function(){
        let today = new Date()
        let birth_date = new Date(`${this.birthdate}`)
        let age = today.getFullYear() - birth_date.getFullYear()
        let m = today.getMonth() - birth_date.getMonth()

        if (m<0 || (m === 0 && today.getDate() < birth_date.getDate())) {
          age--
        }
        return age
      }
    }
  });
  return Student;
};
