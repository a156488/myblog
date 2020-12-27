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

// 上传配置
const upload = multer({
    dest: './static/upload', // 上传文件的存储目录
    limits: {
        fileSize: 1024 * 1024 * 2 // 单个文件大小限制在2M以内
    }
})

// POST请求处理
app.use(express.urlencoded({ extended: true }))
// SESSION配置
app.use(session({
    keys: ['secret'],
    maxAge: 1000 * 60 * 30
}))

// SESSION延期
app.use((req, res, next) => {
    req.session.nowInMinutes = Math.floor(Date.now() / 60e3)
    next()
})

// 进入后台的权限验证
app.use('/admin/?*', require('./middleware/auth').allowToAdmin)

// 上传操作
app.post('/admin/*', upload.single('upload'), (req, res, next) => {
    // 上传成功后的文件对象
    let { file } = req
    if (file) {
        //  file.originalname ==> 文件的原名称
        let extname = path.extname(file.originalname)
        // file.path ==> 上传后的文件路径
        fs.renameSync(file.path, file.path + extname)
        // file.filename ==> 上传后的文件名
        req.uploadUrl = '/upload/' + file.filename + extname
    }
    next()
})

app.get('/user/logout', (req, res) => {
    req.session.user = null
    res.render('login', { msg: '退出成功' })
})

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
