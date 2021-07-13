const sequelize = require('sequelize');
const dbConfig = require('../configs/config.js');

/**
 * @description:make db connection using sequelize
 * @param:database
 * @param:username
 * @param:password
 * @param:host
 * @param:dialect(mysql|mssql|postgressql)
 */

function makeConnection(){
    return new sequelize(dbConfig.database,dbConfig.username,dbConfig.password,{
        host:dbConfig.host,
        dialect:dbConfig.dialect,
        define: {
            freezeTableName: true
        }
    })
}

module.exports = makeConnection;