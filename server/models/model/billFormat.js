const sequelize = require('sequelize');
const billFormatModel = global.dbObject.define('billformat',{
    pay:{
        type:sequelize.INTEGER,
        field:'deptid',
        allowNull:false,
    },
    da:{
        type:sequelize.INTEGER,
        field:'da',
        allowNull:false
    },
    hra:{
        type:sequelize.INTEGER,
        field:'hra',
        allowNull:false
    },
    conti:{
        type:sequelize.INTEGER,
        field:'conti',
        allowNull:false
    },
    work_exp:{
        type:sequelize.INTEGER,
        field:'work_exp',
        allowNull:false
    },
    total:{
        type:sequelize.INTEGER,
        field:'total',
        allowNull:false
    }
});

module.exports = billFormatModel;
