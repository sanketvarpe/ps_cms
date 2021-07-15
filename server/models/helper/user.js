const userModel = require('../model/user');

exports.registerUser = async (req,res,options = {}) => {
    let resObj = {
        err:false,
        msg:"",
        data:[]
    }
    try {
        console.log(options.userObj);
        let user = await userModel.create(options.userObj);
        resObj.msg = "user successfully created";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "error while creating user";
    }
    return resObj;
}