'use strict';
module.exports = function(sequelize, DataTypes) {
    var Students = sequelize.define('Students', {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        birthdate: DataTypes.DATE
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
            getAllData: function(callback) {
                var result = []
                Student.findAll().then(function(hasil) {
                    hasil.forEach(function(output) {
                        let hasil = {};
                        hasil['firstname'] = output.firstname;
                        hasil['lastname'] = output.lastname;
                        hasil['birthdate'] = output.birthdate;
                        hasil['fullname'] = output.getFullName();
                        result.push(hasil);
                        //console.log(output);
                    })
                    callback(result);
                })
            },
            getAgeData: function(callback) {
                var result = [];
                Student.findAll().then(function(currentData) {
                    currentData.forEach(function(item) {
                        let newdata = {}
                        newdata['name'] = item.getFullName();
                        newdata['age'] = item.getAge();
                        result.push(newdata);
                    })
                    callback(result);
                })

            }
        }
    });
    return Students;
};
