'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';

import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';


import exphbs from 'ejs';
import expressLayouts from 'express-ejs-layouts';

import expressValidator from 'express-validator';
import flash from 'connect-flash';
import session from 'express-session';
import passport from 'passport';
import cookieSession from 'cookie-session';

import users from './routes_static/users';

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app)



// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.use(expressLayouts);

const mongo = require('mongodb');
const mongoose = require('mongoose');
//connect to api of cloud mongodb
mongoose.connect('mongodb://harsha:1234@ds113736.mlab.com:13736/stack_overflow');
console.log("connected");
// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Express passport initialize
app.use(passport.initialize());
app.use(passport.session());
// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


// Connect Flash for flash messages
app.use(flash());

// Global Variables
app.use(function (req, res, next) {
//setting up global validation flash messages
//res.locals sets global variable
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
  //go to next middleware
});


app.use('/users',users);

// universal routing and rendering
app.get('*', (req, res) => {
  
   //All other routings
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );
});


// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});

module.exports = app;