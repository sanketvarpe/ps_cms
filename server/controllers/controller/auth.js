const loginService = require('./../service/auth');

exports.loginController = (req,res) => {
    const response = loginService(req.body);
    if(response.error){
        res.status(401).send(response);
    }
    res.status(200).send(response);
}   