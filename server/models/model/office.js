const sequelize = require('sequelize');
const officeModel = global.dbObject.define('office',{
    name:{
        type:sequelize.STRING,
        field:'name',
        allowNull:false,
    },
    taluka:{
        type:sequelize.STRING,
        field:'taluka',
        allowNull:false
    },
    pin:{
        type:sequelize.STRING,
        field:'pin',
        allowNull:false
    }
});

module.exports = officeModel;
