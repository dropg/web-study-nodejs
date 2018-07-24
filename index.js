//引入第三方包
var express = require('express');
var router = require('./router');
var bodyParser = require('body-parser');

var app = express();
//获取可以被访问的资源
app.use('/node_modules/',express.static('./node_modules/'));
app.use('/public',express.static('./public/'));

//配置模板引擎
app.engine('html',require('express-art-template'));

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

//配置路由规则
app.use(router);


app.listen(8080,function () {
    return console.log('app is running...');
});

module.exports = app;
