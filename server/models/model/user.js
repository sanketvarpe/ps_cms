const sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const passport = require('passport');
const userModel = global.dbObject.define('user',{
    email:{
        type:sequelize.STRING,
        field:'email',
        allowNull:false,
    },
    password:{
        type:sequelize.STRING,
        field:'password',
        allowNull:false
    }
});

/**
 *@description:before save hook to encrypt password
 */
userModel.beforeSave(async (user,options = {}) => {

    return new Promise((res,rej) => {
        bcrypt.genSalt(10, (err,salt) => {
        if(err) {rej(err);}
        bcrypt.hash(user.password,salt,(err,hash) => {
            if(err) {rej(err);}
            user.password = hash;
            res(user);
        });
    });})

});

/**
 * @description:method to compare password
 */
userModel.prototype.comparePassword = (password,hash,cb) => {
    const user = this;
    bcrypt.compare(password,hash,(err,isMatch) => {
        cb(err,isMatch);
    });
};

module.exports = userModel;