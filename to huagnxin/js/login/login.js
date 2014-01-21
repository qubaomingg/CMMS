define(function(require) {
	require('jquery');
	require('bootstrap');
	
  	
  	 $('.login-button').click(function() {

  	 		if( $('.login-usrename').val() === '' || $('.login-password').val() === '') {
  	 			alert('登陆信息不完整');
  	 		}
  	 		return false;
  	 });
  	
});

