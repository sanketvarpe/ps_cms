const loginService = require('./../service/auth');

exports.loginController = async (req,res) => {
    const response = await loginService.loginService(req,res,Option = {});
    if(response.err){
        res.status(401).json(response);
    }
    res.status(200).json(response);
}   