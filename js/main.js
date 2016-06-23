// // 1 . 不依赖其他木块
// alert('asfasfasf');

//  2. 依赖其他木块-- amd规范定义    -- 拓展 commonJs  AMD
/*配置*/
require.config({
	paths: {
		"commonmath" : 'commonMath'
	},
	shim : {
		'jquery.scroll' : {
			deps : ['jquery'],
			exports : 'jQuery.fn.scroll'
		}
	}
});

require(['commonmath'], function(commonmath){
	console.log(commonmath.add(1, 2));
});


