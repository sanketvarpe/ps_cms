const sequelize = require('sequelize');
const officeModel = global.dbObject.define('user',{
    name:{
        type:sequelize.String,
        field:'name',
        allowNull:false,
    },
    taluka:{
        type:sequelize.String,
        field:'taluka',
        allowNull:false
    },
    pin:{
        type:sequelize.String,
        field:'pin',
        allowNull:false
    }
});

module.exports = officeModel;
