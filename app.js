var express = require('express');
var path = require('path');
var port = process.env.PORT || 8888;
var app = express();

app.set('views','./views');
app.set('view engine','ejs');
// app.user(express.bodyParser());
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port);


console.log('BBTV start on port '+ port);

// index page
app.get('/', function(req,res){
	res.render('index',{
		title: 'index BBTV首页',
		videos: [{
			title: '科比',
			_id: 1,
			poster: '/images/test.jpg'
		},{
			title: '乔丹',
			_id: 2,
			poster: '/images/test.jpg'
		},{
			title: '库里',
			_id: 3,
			poster: '/images/test.jpg'
		},{
			title: '勒布朗',
			_id: 4,
			poster: '/images/test.jpg'
		},{
			title: '韦德',
			_id: 5,
			poster: '/images/test.jpg'
		},{
			title: '安东尼',
			_id: 6,
			poster: '/images/test.jpg'
		}
		]
	});
});

// detail page
app.get('/video/:id', function(req,res){
	res.render('detail',{
		title: 'detail BBTV详情页',
		video: {
			title: '科比',
			country: '美国',
			year: 2014,
			poster: '/images/test.jpg',
			url: 'http://static.youku.com/v1.0.0460/v/swf/loader.swf',
			summary: '科比·布莱恩特（1978年8月23日－），美国职业篮球运动员，自1996年起效力于NBA洛杉矶湖人队。科比是一名得分后卫，同时又具有打小前锋位置的能力。他被认为是NBA最全面的球员之一，自从1999年以来每一年都入选NBA最佳阵容，并且在他参加的最近的12届NBA全明星赛（2010、2013赛季全明星赛因伤缺战）中都有不错的表现。[1] 2007年，ESPN的体育记者投票评选出了史上最伟大的得分后卫，结果科比仅次于乔丹排名第二位。'
		}
	});
});

// admin page
app.get('/admin/video', function(req,res){
	res.render('admin',{
		title: 'admin BBTV后台录入页',
		video: {
			title: '',
			country: '',
			year: '',
			poster: '',
			url: '',
			summary: ''
		}
	});
});

// list page
app.get('/admin/list', function(req,res){
	res.render('list',{
		title: 'list BBTV后台列表页',
		videos: [{
			title: '科比',
			_id: 1,
			country: '美国',
			year: 2014,
			date: '2014-08-24 12:15:43',
			url: 'http://static.youku.com/v1.0.0460/v/swf/loader.swf'
		},
		{
			title: '乔丹',
			_id: 2,
			country: '美国',
			year: 2014,
			date: '2014-08-05 22:25:49',
			url: 'http://static.youku.com/v1.0.0460/v/swf/loader.swf'
		},{
			title: '库里',
			_id: 3,
			country: '美国',
			year: 2014,
			date: '2014-03-12 02:05:43',
			url: 'http://static.youku.com/v1.0.0460/v/swf/loader.swf'
		}]
	});
});