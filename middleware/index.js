/**
 * Created by Mihnea on 5/2/2015.
 */
var express = require('express');
var morgan = require('morgan');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

module.exports = function (app) {
    app.use(morgan('dev'));

    // Good for now
    // In the future, use connect-mongo or similar
    // for persistant sessions
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());
    app.use(session({secret: 'building a blog', saveUninitialized: true, resave: true}));
    app.use(favicon(__dirname+'/../css/favicon.ico'));



    // Expose session to views
    app.use(function (req, res, next) {
        if (req.session.isLoggedIn && req.session.user) {
            res.locals.isLoggedIn = req.session.isLoggedIn;
        }
        next();
    })
}