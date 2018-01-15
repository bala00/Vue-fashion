// Express服务器入口文件
// node 后端服务器

const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var session = require('express-session');
var cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser('fashion-session-secret'));
app.use(session({
    secret: 'fashion-session-secret',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}))

// 后端api路由
app.use('/api/user', userApi);

// 监听端口
app.listen(3010);
console.log('success listen at port:3010......');