define([
        "helper"
] , function( helper ){

function check_spec( el , leng , blank , error ){

         var reg = new RegExp('[ ]');
         var user_input_string_array = el.val().split( '' );

         //是否允许空格出现
         if( !blank ){
                 //不允许空格
                 for ( var i in user_input_string_array ){

                         if( reg.test( user_input_string_array[i] ) ? true : false ){
                 
                                 return validation_after_check(el, false , error);
                          }
                  }
                 
                 if( reg.test( el.val() ) ? true : false ){
                 
                         //有空格存在
                         return validation_after_check(el, false , error);
                 }       
         }

         if( helper.count_length( el ) > leng ){

                 //超过长度
                 return validation_after_check(el, false , error);
         }
}

var validation_ajax_count = 0;
var past_value = null;
jQuery.fn.validation = function (options , error , description) {
        
        var rules = {
                required        : "^.+$",
                password        : "^.{6,16}$",
                nick            : "^.+$",
                email           : "^[a-z0-9]{0,}[a-z0-9-_.+]+[@][a-z0-9-]+[.][a-z]",
                just_email      : "^[a-z0-9][a-z0-9-_.+]+[@][a-z0-9-]+[.][a-z]",
                phone           : "^([0-9]{0}|[0-9]{3,4})[-]{0,1}[0-9]{7,8}$",
                cellphone       : "^1[3|5][0-9][0-9]{8}$",
                zip             : "^[0-9]{6}$",
                numeric         : "^[0-9]+$",
                idcard          : "^([0-9]{15}|[0-9]{18})$",
                describe        : "^.+$",
                motto           : "^.*$",
                address         : "^([s]|[^\S]|[\u4e00-\u9fa5]){0,200}$",
                domain          : "^(?![0-9]+$)([a-zA-Z0-9]){5,20}$" ,
                tsina           : "^http://weibo.com/[a-z0-9A-Z\u4e00-\u9fa5]" , 
                tqq             : "^http://t.qq.com/[a-z0-9A-Z\u4e00-\u9fa5]" ,
                lostpwd_email   : "^[a-z0-9][a-z0-9.+]+[@][a-z0-9-]+[.][a-z]"
        }
        
        var el = $(this);
        
        if (description) {
                el.after($('<span class="validationDescription">' + description + '</span>'));
        }
        
        // 获得焦点时
        $(this).focus(function() {
                 
                //获得当前值
                past_value = $.trim(el.val());

                //清除错误提示
                if( el.attr( 'id' ) == 'loc_city' ){
                
                         if( $( '#loc_town' ).html() != null ){
                         
                                 $( '#loc_town' ).next('span.err').remove();
                         }
                }

                el.next('span.err').remove();
                el.next('span.validationDescription').show();
                el.removeClass('err_input');
        })
        
        $(this).blur(function() {                               
                
                //失去焦点时
                return validation_check(el , rules , options , error);
        }).parents("form").submit(function() {  
                
                // 表单提交时           
                return validation_check(el , rules , options , error);
        })
        
        return $(this);
        
}

function validation_check(el , rules , options , error) {

        // 如果当前表单项已有错误消息，则不再检查
        if (el.attr('class') == 'err') {
        
                return false;
        }
        
        var result = null
        var validation_value = $.trim(el.val());
        el.val(validation_value);
        
        //检查是否有自定函数
        eval('function_exist = typeof validation_rule_' + options.rule);
        
        //有自定义函数则通过自定义函数匹配
        if (function_exist == 'function') {
                result  = validation_check_rule(el , options , error);
                if (typeof result != 'boolean') {
                        return false;
                }
        } else if (!validation_value && options.rule != 'required' && options.required != true) {
                return true;
        } else if (typeof options.check != 'undefined') {
                // 若定义了检查指定对象
                result  = $.trim($(options.check).val())?true:false;
        } else {
                eval('validation_patrn = rules.' + options.rule  + ';');
                var reg = new RegExp(validation_patrn , "gi");
                result  = reg.test(validation_value)?true:false;

                //如果参与的是nick
                if( options.rule == 'nick' ){

                         var reg = new RegExp('[ ]');
                         var user_input_string_array = el.val().split( '' );

                         for ( var i in user_input_string_array ){
                         
                                 if( reg.test( user_input_string_array[i] ) ? true : false ){
                                 
                                         return validation_after_check(el, false , error);
                                 }
                         }
                         if( reg.test( el.val() ) ? true : false ){
                                 
                                 //有空格存在
                                 return validation_after_check(el, false , error);
                         }
        
                         reg = new RegExp( '[^a-zA-Z_0-9\-\u4e00-\u9fa5]' );
                         if( reg.test( el.val() ) ? true : false ){
                        
                                 //有标点存在
                                 return validation_after_check(el, false , error);
                         }
        
                         if( count_length( el ) > 10 ){
                         
                                 //超过长度
                                 return validation_after_check(el, false , error);
                         }

                         //统计汉字的个数
                         var reg = new RegExp('[\u4E00-\u9FA5]');
                         //计算用户剩余可输入字数
                         //先变为数组
                         var user_input_string_array = el.val().split( '' );
                         var cc = 0;
                         var not_cc = 0;
                         for ( var i in user_input_string_array ){

                                  if( reg.test( user_input_string_array[i] ) ? true : false ){

                                          //为汉字加1
                                          cc++;
                                  }else{
                                  
                                          not_cc++;
                                  }
                         }

                         if(( cc < 2 && not_cc < 4 ) || not_cc > 20 ){
                         
                                 return validation_after_check(el, false , error);
                         }

                         //汉字
                         if( count_length( el ) > 10 ){
                         
                                return validation_after_check(el, false , error);
                         }
                }

                if( options.rule == 'describe' ){
                
                         return check_spec( el , 20 , true , error );
                }

                //如果参与认证的是Email，或是nick
                //则请求服务器看其是否唯一
                if( options.rule == 'email' || options.rule == 'nick' || options.rule == 'lostpwd_email' || options.rule == 'domain' ){
                        if( options.rule == 'nick' ){
                                
                                err_message = "已经被注册"; 
                        }
                        if( options.rule == 'email' ){
                                
                                err_message = "该Email已经被注册"; 
                        }
                        //用于找回密码时输入的邮箱地址，判断是否未注册
                        if( options.rule == 'lostpwd_email' ){
                        
                                err_message = "该Email还没有被注册"; 
                        }
                        if( options.rule == 'domain' ){
                                if( validation_value == '' ){
                                
                                        err_message = "格式不正确"; 
                                }else{
                                        
                                        err_message = "已经被注册"; 
                                }
                        }
                 
                        var ajax_validation_type = ( options.rule == 'email' || options.rule == 'lostpwd_email' ) ? 'email' : options.rule ;
         
                        //判断表单中的值是否已经改变 @todo 不知道以前怎么想的。。。( 这样可以减少流量 )
                        //只有值发生改变才进行ajax验证
                        if ( past_value != validation_value || true ){
                                 $.ajax({
                                         type: "POST",
                                         url: "/reg/has_this_"+ ajax_validation_type +"_reg",
                                         data: ajax_validation_type+"="+validation_value,
                                         start: function(){},
                                         success: function(msg){
                                         
                                                 if( msg == 'TRUE' ){
                                                         
                                                         //已经被注册
                                                         if( options.rule != 'lostpwd_email' ){
                                                                 
                                                                 return validation_after_check(el, false , err_message);
                                                         } 
                                                 }else{
                                        
                                                         if( options.rule == 'lostpwd_email' ){
                                                                 
                                                                 return validation_after_check(el, false , err_message);
                                                         } 
                                                 }
                                         },
                                         error: function(){
                                                //找回密码时输入正确的密码 也会出错。。
                                                //alert( 'ajax error' );
                                         }
                                 });
                        }
                }
        }
        
        return validation_after_check(el, result , error);
}

//判断是否允许用户提交表单
function available_submit( this_from_id ){

        //当前值不为空
        var null_input = '';
        $( '#'+this_from_id +' input' ).each( function(){
                 var i = 0;
                 //判断输入框是否为空
                 if ( this.value == '' ) {
                         //如果输入为空，得到当前元素的 id
                         //保存在数组中
                         null_input[i++] = ( this.id );
                 }
        });

        //当前值不为空
        var email = $('#email').val();
        var nick = $('#nick').val();
        var password = $('#password').val();
        var check_password = $('#check_password').val();
        var city = $('#loc_city').val();
                        
        if( !(email != '' && nick != '' && password != '' && check_password != '' && city != '' 
                //不是默认值
                && email != 'user@exp.com' && nick != '最少 3 个汉字或 6 个字符'  )){
        
                //不能提交
                if ( email == '' ) { validation_after_check( $( '#email' ), false , '请输入电邮地址') };
                if ( password == '' ) { validation_after_check( $( '#password') , false , '请输入密码' ) };
                
                if( city == '' ){

                        if( $( '#loc_town').html() != null ){

                                 validation_after_check( $( '#loc_town') , false , '请选择城市' );
                        }else{
                                 
                                 validation_after_check( $( '#loc_city') , false , '请选择城市' );
                        }
                 }
        }
                
        //没有正在显示的错误信息
        var err_infos = $( "span.err" ).text();
        var res = false;
        var err_info;
        $.each( err_infos , function(){
                 
                 res = res || (err_info != '');
        });

        if( res == false ){
        
                $( '#'+this_from_id ).submit();
        }
}

function validation_after_check(el , result , error) {
        
        if (!result) {
                el.next('span.err').remove();
                el.next('span.validationDescription').hide();
                el.after($('<span class="err">' + error + ' ' + el.next('span.validationDescription').text() + '</span>'));
                el.addClass('err_input');
        } else {
                el.next('span.err').remove();
                el.next('span.validationDescription').show();
                el.removeClass('err_input');
                
                // 还有ajax验证未返回
                //if (validation_ajax_count) {
                //      return false;
                //}
                
                return true;
        }
        
        return false;
}

function validation_check_rule(el , options , error) {
        eval('validation_patrn = validation_rule_' + options.rule  + '(el , options , error);');
        return validation_patrn;
}

/**
 * 验证两次输入是否一致
 * @param {Object} el
 * @param {Object} options
 */
function validation_rule_match(el , options) {
        return (el.val() == $(options.el).val())?true:false;
}

/**
 * 验证两次输入是否不一致
 * @param {Object} el
 * @param {Object} options
 */
function validation_rule_unmatch(el , options) {
        return (el.val() == $(options.el).val())?false:true;
}

function validation_rule_exist(el , options , error) {
        validation_ajax_count++;
        validation_after_check(el , false , '请稍候……');
        
        $.getJSON(options.url , {data:el.val()} , function(json) {
                validation_ajax_count--;
                if (json) {
                        var result      = (json.result == 1)?false:true;
                        validation_after_check(el , result , error);
                        
                        /*
                        if (result && validation_ajax_count == 0) {
                                if ($('span.validationError').length == 0) {
                                        el.parents('form').unbind('submit').submit();
                                }
                        }
                        */
                }
                
        })
        
        return true;
}

});

