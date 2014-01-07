define(function(require, exports, module) {
	var $ = require('jquery');
	module.exports = {
		addLink: function(src) {
	        var head = document.getElementsByTagName('head').item(0);
	        var css = document.createElement('link');
	        css.href = src;
	        css.rel = 'stylesheet';
	        css.type = 'text/css';
	        head.appendChild(css);	
		},
		loadDateCss: function() {
			var jquery_plugin_css = ['../css/lib/datepicker.css', '../css/lib/font-awesome/css/font-awesome.css'];
			var _this = this;
			$.each(jquery_plugin_css, function(no, css) {
				_this.addLink(css);	
			});
		}
	};
});


