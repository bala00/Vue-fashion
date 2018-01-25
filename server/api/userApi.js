// 测试用api示例
var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// var auth = require('../../lib/auth.js').getAuth();

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {

    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else if(ret == '2') {
        res.json({
            code: '2',
            msg: '手机号已经注册'
        });
    }else if(ret == '3'){
        res.json({
            code: '3',
            msg: '该手机暂未注册！'
        });
    }else if(ret == '4'){
        res.json({
            code: '4',
            msg: '密码错误！'
        });
    }else{
        res.json(ret)
    }
};

// 增加用户接口  注册
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var sqlCount = $sql.user.count;
    var params = req.body;
    console.log('addUser-->',params);

    conn.query(sqlCount, params.mobile, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            if(result[0].num < 1){
                conn.query(sql, [params.mobile, params.password], function(err, result) {
                    if (err) {
                        console.log(err);
                    }
                    if (result) {
                        jsonWrite(res, result);
                    }
                })
            }else(
                jsonWrite(res, '2')
            )
        }
    });
});

// 检测手机号是否存在
router.post('/checkUser', (req, res) => {
    var sql = $sql.user.count;
    var params = req.body;
    console.log('checkUser-->',params);
    
    conn.query(sql, params.mobile, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            if(result[0].num < 1){
                jsonWrite(res, '3')
            }
        }
    })
            
});

// 登录
router.post('/login', (req, res) => {
    var sql = $sql.user.validate;
    var sqlCount = $sql.user.count;
    var params = req.body;

    console.log('login-->',params);
    // console.log('11111111');
    
    conn.query(sqlCount, params.mobile, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {

            if(result[0].num > 0){
                conn.query(sql, [params.mobile], function(err, result) {
                    if (err) {
                        console.log(err);
                        return false;
                    }
                    var pwd = result[0].password;
                    if (params.password == pwd) {
                        
                        req.session.user = {
                            mobile: params.mobile
                        }
                        
                        // jsonWrite(res, {result, isLogin:100});
                        jsonWrite(res, result);
            
                    }else{
                        jsonWrite(res, '4');
                    }
                })
            }else{
                jsonWrite(res, '3');
            }
        }
    })

    
            
});

module.exports = router;