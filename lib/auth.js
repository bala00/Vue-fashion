var client = require('util-restify');
var st = Date.parse('2017-05-02');

exports.getAuth = function(){
	// var need_login = function(req, res, next){
	// 		if(!res.locals.envYHCG){
	// 			res.locals.envYHCG = global.envYHCG;
	// 		}
	// 		if(!req.session.mobile){
	// 			if(!res.locals.envYHCG){
	// 				res.locals.envYHCG = global.envYHCG;
	// 			}
	// 			res.redirect('/account/login');
	// 			return false;
	// 		}
	// 		next();
	// 	},
		var pass_value = function(req, res, next){
			// if(!res.locals.envYHCG){
			// 	res.locals.envYHCG = global.envYHCG;
			// }
			var v = req.session.user;
			// console.info('v.unpayOrder~~~~~~~>', v && v.unpayOrder );
			if(v && v.mobile){
				res.locals.user = v;
				res.locals.isLogin = true;
				// res.locals.name = v.name;
				// res.locals.mobile = v.mobile;
				// res.locals.binded = v.card && v.card != '' ? 1 : 0;
				// res.locals.certified = v.ic && v.ic != '' ? 1 : 0;
				// res.locals.isSafe = v.paypwdflag == '1' ? 1 : 0;

				// res.locals.unpayOrder = req.session.unpayOrder 
				// 						&& req.session.unpayOrder.orderNo != undefined 
				// 						&& req.session.unpayOrder.expires > Date.now() 
				// 						? req.session.unpayOrder 
				// 						: { orderNo: undefined, expires: undefined };
			}
			// next();
		}
		// auth_validate = function(req, res, next){
		// 	var v = req.session.info;
		// 	if(v && v.userId){
		// 		if(!v.accountid){
		// 			// res.redirect('/account/openAccount');
		// 			res.redirect('/process/rs?time=3&err=' + encodeURIComponent('请先开户，再执行当前操作') + '&cb=' + encodeURIComponent('/account/openAccount'));
		// 		}else if(v.paypwdflag == '0'){
		// 			// res.redirect('/account/security');
		// 			res.redirect('/process/rs?time=3&err=' + encodeURIComponent('请先设置交易密码，再执行当前操作') + '&cb=' + encodeURIComponent('/account/security'));
		// 		}else{
		// 			next();
		// 		}
		// 	}else{
		// 		next();
		// 	}
		// },
		// checkUser = function(req, res, next){
		// 	if(req.session.changed){
		// 		client.get('/user/checkUser/' + req.session.user, null, function(err, rq, rs, data){
		// 			if(!err){
		// 				if(data.code == '0'){
		// 					var v = data.value,
		// 						checkUser = req.session.checkUser,
		// 						status;
								
		// 					if(v && checkUser){
		// 						for(var k in v){
		// 							if(checkUser[k] != v[k]){
		// 								req.session[k] = k;
		// 								status = k;
		// 								req.session.checkUser = v;
		// 								break;
		// 							}
		// 						}

		// 						// 针对老用户赠送5188元代金券的标记，在用户中心页判断该值
		// 						// if(status && status == 'isSetPaypwd'){//没开户
		// 						// 	var diff = Date.parse(req.session.info.registerTime) - st;
		// 						// 	if(diff < 0){
		// 						// 		req.session.oldUser = 'oldUser';
		// 						// 	}
		// 						// }
		// 					}
		// 				}
		// 			}
		// 			delete req.session.changed;
		// 			next();
		// 		})
		// 	}else{
		// 		next();
		// 	}
		// };

	return {
		// need_login: need_login,
		pass_value: pass_value
		// auth_validate: auth_validate,
		// checkUser: checkUser
	}
}