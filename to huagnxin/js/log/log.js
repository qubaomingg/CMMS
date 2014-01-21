define(function(require) {
	var $ = require('jquery');
	require('bootstrap');
	
	require('datepicker');


	// 动态加载datepicker需要的css
	var util = require('util');
	util.loadDateCss();
	// datepicker
	$('.log-time').datepicker({
	    format: 'mm-dd-yyyy'
	});
});

