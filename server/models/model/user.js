const sequelize = require('sequelize');
const userModel = global.dbObject.define('user',{
    deptid:{
        type:sequelize.INTEGER,
        field:'deptid',
        allowNull:false,
    },
    officeid:{
        type:sequelize.INTEGER,
        field:'officeid',
        allowNull:false
    },
    name:{
        type:sequelize.STRING,
        field:'name',
        allowNull:false
    },
    email:{
        type:sequelize.STRING,
        field:'email',
        allowNull:false
    },
    password:{
        type:sequelize.STRING,
        field:'password',
        allowNull:false
    },
    isverified:{
        type:sequelize.BOOLEAN,
        field:'isverified',
        allowNull:false
    },
    isadmin:{
        type:sequelize.BOOLEAN,
        field:'officeid',
        allowNull:false
    },
    level:{
        type:sequelize.INTEGER,
        field:'officeid',
        allowNull:false
    }
});

module.exports = userModel;
