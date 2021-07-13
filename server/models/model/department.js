const sequelize = require('sequelize');
const departmentModel = global.dbObject.define('user',{
    name:{
        type:sequelize.String,
        field:'name',
        allowNull:false,
    },
});

module.exports = departmentModel;
