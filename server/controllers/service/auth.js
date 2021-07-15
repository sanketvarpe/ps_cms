const passport = require('passport');
const userHelper = require('../../models/helper/user');

exports.loginService = async (req,res,next,options = {}) => {
    let { email, password } = req.body;
    let resObj = {err:false,msg:"",data:[]};
    email.trim();
    password.trim();
    try {
        let msg = await authenticateUser(req,res,next);
        resObj.msg = msg;
    } catch (err) {
        resObj.err = true;
        resObj.msg = err;
    }
    return resObj;
}

exports.registerUser = async (req,res,options = {}) => {
    let resObj = await userHelper.registerUser(req,res,options);
    return resObj;
}

async function authenticateUser(req,res,next) {
    return new Promise((res,rej) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                rej("error while authenticating");
            };
            if (!user) {
                rej("incorrect credentials");
            }
            req.logIn(user, (err) => {
                if (err) {
                    rej("error while loging in");
                }
                else {
                    console.log("user",user);
                    res("successfully loggef in");
                }
            });
        })(req, res, next);
    })
}