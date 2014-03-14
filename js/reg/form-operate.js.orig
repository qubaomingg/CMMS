define(function(require, exports, module) {

  var $ = require('jquery');
  var validation = require('validation');
  var Dialog = require('reg-dialog');

  function FormOperation(options) {
    this.options = options || {};
  }

  module.exports = FormOperation;

  FormOperation.prototype = {
    validation : function() {
          $.each(this.options.forNums, function( no, forNum) {
              forNum.validation(
                  {rule:'numeric' , required:false} ,  '格式错误,只能是数字' );
          });
          $.each(this.options.forEmails, function( no, forEmail) {
              forEmail.validation(
                  {rule:'email' , required:false} ,  '邮箱格式错误' );
          });
    },
    showOtherInput: function() {
        $('.events-in-year').change(function() {
            if( $(this).val() === '03' ) {
                $(this).siblings('input').show();
            } else {
                $(this).siblings('input').hide();
            }
        });
    },
    showDialog: function() {
        $('.illness-info-add').click(function() {
            var parent = $(this).parents('tr')[0];
            
            var columns = [
                {
                  'name': '病名',
                  'needTime': false
                },
                {
                  'name': '发病时间',
                  'needTime': true
                },
                {
                  'name': '确诊时间',
                  'needTime': true
                },
                {
                  'name': '痊愈时间',
                  'needTime': true
                },
                {
                  'name': '后遗诊',
                  'needTime': false
                }
              ]
            var dialog = new Dialog('疾病信息', columns, $(parent));
            dialog.render();
            return false;
        });

        $('.family-illness-add').click(function() {
            var parent = $(this).parents('tr')[0];
            
            var columns = [
                {
                  'name': '与本人关系',
                  'needTime': false
                },
                {
                  'name': '家族病',
                  'needTime': false
                }
              ]
            var dialog = new Dialog('家族病史', columns, $(parent));
            dialog.render();
            return false;
        });

        $('.surgery-add').click(function() {
            var parent = $(this).parents('tr')[0];
            
            var columns = [
                {
                  'name': '名称',
                  'needTime': false
                },
                {
                  'name': '手术时间',
                  'needTime': true
                },
                {
                  'name': '痊愈时间',
                  'needTime': true
                },
                {
                  'name': '后遗症',
                  'needTime': false
                }

              ]
            var dialog = new Dialog('手术史', columns, $(parent));
            dialog.render();
            return false;
        });
    },
    checkBeforeSubmit: function() {
        $('#reg-confirm-psw').blur(function() {
            if( $('#reg-confirm-psw').val() !== $('#reg-password').val() ) {
                $(this).parent('div').append($('<span class="err">两次密码不一致</span>'));
            } else {
                $(this).parent('div').find('.err').remove();
            }
        });
        $('.reg-submit').click(function() {
            var notNull = ['#reg-email', '#reg-password', '#reg-confirm-psw', '#birthday', '#loc_province', '#loc_city', '#degree', '#major', '#favor'];
            if( !noNull(notNull) ) {
                $('.reg-submit-error').show();
                return false;
            } 
            if( $('.err').length !== 0) {
                // validation 没有通过。
                $('.reg-submit-error').show();
                return false;
            }
        });


        $('.reg1-submit').click(function() {
            
            var notNull = ['#reg-height', '#reg-weight', '#reg-age', '#reg-addr', '#bear-condition', '.reg-career', '.sleep-condition', '#ill-bear'];
            if( !noNull(notNull) ) {
                $('.reg1-submit-error').show();
                return false;
            } 
            if( $('.err').length !== 0) {
                // validation 没有通过。
                $('.reg1-submit-error').show();
                return false;
            }
        });
        function noNull(objs) {
            var result = true;
            $.each(objs, function( no, obj ) {
                // 必须每个都不能为空
                if( $(obj).val() === '') {
                    
                    result = false;
                }
            });
            return result;
        }
    },
    showBMIs: function() {
      
        $('#reg-weight').blur(function() {
            var height = $('#reg-height').val();
            var weight = $('#reg-weight').val();
            if( height != '' && weight != '') {
                var BMI = (height / (height * height)).toPrecision(3);
                $('.BMI').html(BMI);
                $(this).siblings('.more-info').show();
            }
        });

        $('#reg-arm').blur(function() {
            var waistline = $('#reg-waistline').val();
            var arm = $('#reg-arm').val();

            if( waistline != '' && arm != '') {
                var Tun = (waistline / arm).toPrecision(3);
                $('.Tun').html(Tun);
                $(this).siblings('.more-info').show();
            }
        });
        return false;
    }
  }
});

