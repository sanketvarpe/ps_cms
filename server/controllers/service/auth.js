const passport = require('passport');

exports.loginService = () => {

         let {email,password} = req.body;
         email.trim();
         password.trim();
         passport.authenticate('local',(err,user,info) => {
                if(err) {return next(err)};
                if (!user) {
                   return {"error" : true, "msg" : "Incorrect email/password" };                    
                }
        
                req.logIn(user,(err) => {
                    if(err) {return next(err)};
                    return {"data" : "", "msg" : "Success! You are logged in." };
                });
            })(req,res,next);
}