define(function(require) {
	var $ = require('jquery');
	require('bootstrap');
	
	require('../lib/jquery.ui.timepicker');
	require('../lib/jquery.ui.position.min');
	
	
	require('datepicker');


	// 动态加载datepicker需要的css
	var util = require('util');
	util.loadDateCss();
	// datepicker
	$('.log-date').datepicker({
	    format: 'mm-dd-yyyy'
	});
	$('.log-time').timepicker({
        showPeriod: true,
        showLeadingZero: true
    });
});

