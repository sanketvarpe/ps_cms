const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

const User = require('../models/model/user');

passport.serializeUser((user,done) => {
    done(null,user.id);
});

passport.deserializeUser(async (id,done) => {
    let user = await User.findByPk(id);
    if(!user) {done(null,false);}
    done(null,user,{msg:'User not found'});
});

passport.use(new LocalStrategy({usernameField:'email'},async (email,password,done) => {
    let user = await User.findOne({
        where:{
            email:email
        }
    });

    if(!user) {return done(null,false,{msg:`Email ${email} not found`})};
    user.comparePassword(password,user.password,(err,isMatch) => {
        if(err) {return done(err)};
        if(isMatch) {return done(null,user,{msg:'user found'});}
        return done(null,false,{msg:'Invalid email or password.'});
    });
}));
