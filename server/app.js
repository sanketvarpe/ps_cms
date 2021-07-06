/**
 * @description:load core modules
*/
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const MongoStore = require('connect-mongo').default;
const dotenv = require('dotenv');
const flash = require('express-flash');
const path = require('path');
const mysql = require('mysql');
const sequelize = require('sequelize');
const passport = require('passport');
const makeDbConnection = require('./dbHelpers/makeConnection');

/**
 * @description:Connect to mysql database and set global dbObject
 */
global.dbObject = makeDbConnection();
// console.log(global.dbObject);
global.serverBaseDirPath = "D:/ps_cms";

const userControllers = require('./controllers/controller/user')
dotenv.config({path:'../env'});

/**
 * @description:Create express app object
 */
const app = express();


/**
 * @description:require passport configs
 */
const passportConfigs = require('./configs/passport');

/**
 * @description:express configs
*/
app.set('port',process.env.port||3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    //   autoReconnect: true,
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.req = req;
    res.locals.res = res;
    res.locals.success = req.flash('success');
    res.locals.errors = req.flash('error');
    next();
});

app.use((req, res, next) => {
    // After successful login, redirect back to the intended page
    if (!req.user
      && req.path !== '/signin'
      && req.path !== '/signup'
      && !req.path.match(/^\/auth/)
      && !req.path.match(/\./)) {
      req.session.returnTo = req.originalUrl;
    } else if (req.user
      && (req.path === '/account' || req.path.match(/^\/api/))) {
      req.session.returnTo = req.originalUrl;
    }
    next();
});
// app.use('/public',express.static(path.join(__dirname,'views')));
// app.use('/public',express.static(path.join(__dirname,'public')));
// app.use('/node_modules',express.static(path.join(__dirname,'node_modules')));
if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorHandler());
  } else {
    app.use((err, req, res, next) => {
      console.error(err);
      res.status(500).send('Server Error');
    });
}

/**
 * @description:make migration of changed models
 */
const makeMigration = require('./dbHelpers/makeMigrations');
makeMigration();

/**
 * @description:user routes
*/
app.get('/',userControllers.homeController);
app.get('/auth/signup',userControllers.signupController);
app.get('/auth/signin',userControllers.signinController);
app.post('/auth/signup',userControllers.signupController);
app.post('/auth/signin',userControllers.signinController);
app.get('/auth/logout',userControllers.logout)
app.get('/ide',(req,res) => {
  res.render('ide');
})

console.log(process.argv[2]);
app.listen(process.argv[2],() => {
    console.log(`Server is running on ${app.get('port')} port..`);
});