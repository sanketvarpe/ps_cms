/**
 * @description:load core modules
*/
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const MongoStore = require('connect-mongo');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql');
const sequelize = require('sequelize');
const passport = require('passport');
const mongoose = require('mongoose');
const makeDbConnection = require('./dbHelpers/makeConnection');
dotenv.config({path:'.env'});

/**
 * @description:Connect to mysql database and set global dbObject
 */
global.dbObject = makeDbConnection();
// console.log("sqlObject==>>",global.dbObject);

const MONGODB_URI = require('./configs/keys');
const authRoutes = require('./routes/auth/auth');
const homeRoutes = require('./routes/home/home');
// console.log(process.env);


global.serverBaseDirPath = "D:/ps_cms/server";

/**
 * @description:Connect to mongodb database
*/

console.log("mongo_uri",MONGODB_URI);
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
		console.log("connected to mongodb");
		// app.listen(3001);
}).catch((err) => {
		console.log(err);
});

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

app.use(logger('dev'));
app.use(cors({credentials:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
    store: MongoStore.create({
      mongoUrl: MONGODB_URI
    //   autoReconnect: true,
    })
}));
app.use(passport.initialize());
app.use(passport.session());

/**
 * @description:cross origin settings
*/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type","application/json");
  res.setHeader('Accept','application/json')
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
// const makeMigration = require('./dbHelpers/makeMigrations');
// makeMigration();

/**
 * @description:auth routes
*/
app.use('/auth',authRoutes);
app.use('/',homeRoutes);
module.exports = app;