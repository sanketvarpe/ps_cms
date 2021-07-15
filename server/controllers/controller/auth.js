const authService = require('./../service/auth');

exports.loginController = async (req,res,next) => {
    console.log(req.user);
    if(req.user) {
        return res.status(200).json({msg:"already loogged in"});
    }
    const response = await authService.loginService(req,res,next,options = {});
    if(response.err){
        res.status(401).json(response);
    }
    res.status(200).json(response);
}

exports.registerController = async (req,res) => {
    let body = req.body;
    // console.log(body);
    let userObj = {};
    Object.keys(body).forEach((key) => {
        userObj[key] = body[key];
    })
    console.log("user obj===>>",userObj);
    let resObj = await authService.registerUser(req,res,{userObj});
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).json(userObj);
}