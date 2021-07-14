const sequelize = require('sequelize');
const departmentModel = global.dbObject.define('department',{
    name:{
        type:sequelize.STRING,
        field:'name',
        allowNull:false,
    },
});

module.exports = departmentModel;
