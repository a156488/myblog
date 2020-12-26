const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const logger = require('morgan');
const ejs = require('ejs');


const indexRouter = require('./router/index'), usersRouter = require('./router/users'),
    loginRouter = require('./router/login'), postRouter = require('./router/post'),
    contactRouter = require('./router/contact'), aboutRouter = require('./router/about'),
    regRouter = require('./router/reg'), searchRouter = require('./router/search'),app = express();


app.set('view engine', 'html');
app.set('views',`${__dirname}/views`);
app.engine('html', ejs.renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public/',express.static(path.join(__dirname, './public/')));
app.use('/node_modules/',express.static(path.join(__dirname, './node_modules/')));

app.use(express.urlencoded({extended:true}))

app.use(session({
    keys:['secret'],
    maxAge:1000*60*30
}))

app.use(/\/(index)?/, indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/post', postRouter);
app.use('/contact', contactRouter);
app.use('/about', aboutRouter);
app.use('/reg', regRouter);
app.use('/search', searchRouter);

app.use(function(req, res, next) {
    next(createError(404));
});

// 错误处理器
app.use(function(err, req, res, next) {
    // 生产环境下的错误处理器，不会将错误信息泄漏给用户
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // 开发环境下的错误处理器，加个错误信息渲染error模版并显示到浏览器中
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
