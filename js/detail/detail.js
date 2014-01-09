define(function(require) {
	var $ = require('jquery');	
	require('bootstrap');

	var detail = require('detail/detail-select');
	detail.organRes();
	detail.otherRes();
	detail.resultRes();
});

