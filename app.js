let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let bodyParser = require('body-parser');

const exphbs = require('express-handlebars');

// routes
let indexRouter = require('./routes/index');
let notesRouter = require('./routes/notes');
let createRouter = require('./routes/create');
let deleteRouter = require('./routes/delete');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine('handlebars', exphbs({
    helpers: require('handlebars-helper')
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/notes', notesRouter);
app.use('/create', createRouter);
app.use('/delete', deleteRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


// adds bodyParser for post requests
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));

module.exports = app;
