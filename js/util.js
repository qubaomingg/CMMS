define(function(require, exports, module) {
	module.exports = {
		loadDateCss: function(src) {
	        var head = document.getElementsByTagName('head').item(0);
	        var css = document.createElement('link');
	        css.href = src;
	        css.rel = 'stylesheet';
	        css.type = 'text/css';
	        head.appendChild(css);	
		}
	};
});


