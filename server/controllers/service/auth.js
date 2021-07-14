const passport = require('passport');

exports.loginService = async (req,res,options = {}) => {
    let { email, password } = req.body;
    let resObj = {err:false,msg:"",data:[]};
    email.trim();
    password.trim();
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            resObj.err = true;
            resObj.msg = "error while authenticating";
        };
        if (!user) {
            resObj.err = true;
            resObj.msg = "incorrect credentials";
        }
        req.logIn(user, (err) => {
            if (err) {
                resObj.err = true;
            }
            else {
                resObj.msg = "Successfully logged in!!";
            }
        });
    })(req, res, next);
    return resObj;
}