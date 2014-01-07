define(function(require) {
	var $ = require('jquery');
	var showLocation = require('area');
	
	
	var formOperation = require('form-operate');
	require('datepicker');


	(function($) {
		
		// 地理位置
		showLocation();

		// 动态加载datepicker需要的css
		var util = require('util');
		util.loadDateCss();

		// 表单验证
		var opt = {
			forNums: [$( '#reg-height' ), $( '#reg-weight' ), $( '#reg-waistline' ), $( '#reg-arm' ), $( '#reg-age' )],
			forEmails: [$( '#reg-email' )]
		}
		var regForm = new formOperation(opt);
		regForm.validation();
		regForm.showOtherInput();
		regForm.showDialog();
		regForm.checkBeforeSubmit();

		// datepicker
		$('.reg-date-picker').datepicker({
		    format: 'mm-dd-yyyy'
		});
		
	})($);

	
});

