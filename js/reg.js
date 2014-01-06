define(function(require) {
	var $ = require('jquery');
	var showLocation = require('area');
	var validation = require('validation');
	var util = require('util');
	require('datepicker');


	(function($) {
		var jquery_plugin_css = ['../css/lib/datepicker.css', '../css/lib/font-awesome/css/font-awesome.css'];
		$.each(jquery_plugin_css, function(no, css) {
			util.loadDateCss(css);	
		});
		// 地理位置
		showLocation();
		checkForm();
		// 表单验证&组件
		function checkForm () {
			$('.reg-date-picker').datepicker({
		        format: 'mm-dd-yyyy'
		    });
		    $( '#reg-email' ).validation(
		        {rule:'email' , required:false} ,  '邮箱格式错误.' );
		    $( '#reg-height' ).validation(
		        {rule:'numeric' , required:false} ,  '格式错误,只能是数字' );
		}
	})($);
});

