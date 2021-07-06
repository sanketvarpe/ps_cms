const nodemailer = require('nodemailer');
const passport = require('passport');
const validator = require('validator');
const mailChecker = require('mailchecker');
const userModel = require('../../models/model/user');

/**
 * @description: signup page actions
*/

exports.signupController = async (req,res,next) => {
    if(req.user) {return res.redirect('/');}

    if(req.method === 'GET') {return res.render('signupForm');}
    console.log(req.body);
    let {email,password} = req.body;
    const validationErrors = [];

    if(!validator.isEmail(email)) 
    validationErrors.push({msg:'Please enter valid email'});
    if(!validator.isLength(password,{min:8}))
    validationErrors.push({msg:'Password must be atlest 8 characters long'});

    if (validationErrors.length) {
        req.flash('error', validationErrors);
        return res.redirect('/auth/signup');
    }

    let newUser = {
        email:email,
        password:password
    };

    await userModel.create(newUser).then(user => {
        console.log(user);
    }).catch(err => {
        validationErrors.push(err);
        req.flash('error',validationErrors);
        return res.redirect('/auth/signup');
    });
    req.flash('success',{msg:'Account ccreated..'});
    return res.redirect('/auth/signin');
};

/**
 * @description:login page actions
 */

 exports.signinController = async (req,res,next) => {
    if(req.user){
    return res.redirect('/');}

    if(req.method === 'GET'){
    return res.render('signinForm');}

    let {email,password} = req.body;

    const validationErrors = [];
    if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' });
    if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: 'Password cannot be blank.' });

    if (validationErrors.length) {
        req.flash('error', validationErrors);
        return res.redirect('/auth/signin');
    }

    passport.authenticate('local',(err,user,info) => {
        if(err) {return next(err)};
        if (!user) {
            req.flash('error', info);
            return res.redirect('/auth/signin');
        }

        req.logIn(user,(err) => {
            if(err) {return next(err)};
            req.flash('success', { msg: 'Success! You are logged in.' });
            return res.redirect('/');
        });
    })(req,res,next);
 };

 exports.homeController = async (req,res,next) => {
     if(!req.user){
     return res.redirect('/auth/signin')}

     return res.send(`Welcome ${req.user.email}..`);
 }

 exports.logout = (req, res) => {
    req.logout();
    req.session.destroy((err) => {
      if (err) console.log('Error : Failed to destroy the session during logout.', err);
      req.user = null;
      return res.redirect('/auth/signin');
    });
};