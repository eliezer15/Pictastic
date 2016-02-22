var config = require('./config');
var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var multer = require('multer');

module.exports = function() {
    var app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    app.set('views', '../app/views');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/album.server.routes.js')(app);
    require('../app/routes/picture.server.routes.js')(app);

    app.use(express.static('./public'));

    return app;
};