define(function(require) {

	var $ = require('jquery');
  	require('jquery.easing');


  	// 器官区域交互
	$("#organ").find(".item").each(function() {
		$(this).hover(function() {
			$(this).siblings().find(".veryhuo").stop();
			$(this).siblings().find(".veryhuo").fadeTo("fast",0.1);
		},
		function() {
			$(this).siblings().find(".veryhuo").stop();
			$(this).siblings().find(".veryhuo").fadeTo("fast",0);
		});
	});

  	//症状选择区域交互
  	$('#other .title:first').addClass('selected');
  	$('#other .title').on('click',function(e){
  		$('#other .title').removeClass('selected')
  		$('#other .content').slideUp();
  		$(e.target).addClass('selected');
  		$(e.target).next('.content').slideDown();

  	})
});

