// // 1 . 不依赖其他木块
// alert('asfasfasf');

//  2. 依赖其他木块-- amd规范定义    -- 拓展 commonJs  AMD
/*配置*/
requirejs.config({
	baseUrl : 'js/lib/',
	paths: {
		"commonmath" : 'commonMath',
		"a" : "a",
		"b" : "b",
		"c" : "c",
		"jquery" : "jquery.min",
	},

	shim : {
		'jquery.slimscroll.min' : {
			deps : ['jquery'],
			exports : 'jQuery.fn.slimscroll'
		},

		// 'jquery.validate.min' : {
		// 	deps : ['jquery'],
		// 	exports : "jQuery.fn.validate",
		// }
	}
});


// requirejs(['commonmath'], function(commonmath){
// 	alert(commonmath.add(1, 2));
// 	alert(commonmath.sub(50, 10));
// });


// requirejs(['a', 'b', 'c', 'jquery'], function(a, b, c, $){
// 	// a.hello();
// 	// b.hello();
// 	// c.hello();

// 	// console.log($("#show").text());
// 	$("#show").on('click', function(){
// 		$(this).text('aaaaaa');
// 	});

// });

/*验证form*/
// requirejs(['jquery.validate.min', 'jquery'], function(validate, $){
// 	$(document).on('click', '.save', function(){
// 		var validateForm = $("#form_sample_2");

// 		var r = $(".alert-danger", validateForm);
// 		var i = $(".alert-success", validateForm);

// 		validateForm.validate({
// 			errorElement: "span",
// 			errorClass: "help-block help-block-error",
// 			focusInvalid: true,
// 			ignore: "",
// 			// messages: messages,
// 			rules: {
// 				name: {
// 					required: true
// 				},
// 				email: {
// 					required: true
// 				},
// 			},
// 			invalidHandler: function(e, t) {
// 				i.hide();
// 				r.show();
// 				// App.scrollTo(r, -200)
// 			},
// 			errorPlacement: function(e, r) {
// 				r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
// 			},
// 			highlight: function(e) {
// 				$(e).closest(".form-group").addClass("has-error");
// 			},
// 			unhighlight: function(e) {
// 				// $(e).closest(".form-group").removeClass("has-error");
// 			},
// 			success: function(e) {
// 				e.closest(".form-group").removeClass("has-error");
// 			},
// 			submitHandler: function(e) {
				
// 			}
// 		});			
// 	});
// });

/*slimscroll*/
requirejs(['jquery.slimscroll.min', 'jquery'], function(slimscroll, $){
	$("#box-list").slimScroll({
		'height' : 400,
	});
});