define(function(require, exports, module) {

  var $ = require('jquery');
  module.exports = {
      organRes: function() {
          var _this = this;
          // 器官区域交互
          $('.body .head').on('click', function() {
              console.log('head');
              _this._organ('head');
          });
          $('.body .lung_left').on('click', function() {
              console.log('lung');
              _this._organ('lung');
          });
          $('.body .lung_right').on('click', function() {
              console.log('lung');
              _this._organ('lung');
          });
          $('.body .arm_left').on('click', function() {
              console.log('arm');
              _this._organ('arm');
          });
          $('.body .arm_right').on('click', function() {
              console.log('arm');
              _this._organ('arm');
          });
          $('.body .gut').on('click', function() {
              console.log('gut');
              _this._organ('gut');
          });
          $('.body .leg').on('click', function() {
              console.log('.leg');
              _this._organ('leg');
          });
          $('.body .stomach').on('click', function() {
              console.log('stomach');
              _this._organ('stomach');
          });
      },
      _organ: function(name) {
          var selectedContent = {
              'head': [
                {'name':'头症状A','num': '1234'},
                {'name':'头症状A','num': '1234'},
                {'name':'头症状A','num': '1234'},
                {'name':'头症状A','num': '1234'},
                {'name':'头症状A','num': '1234'}
              ],
              'lung': [
                {'name':'肺症状A','num': '1234'},
                {'name':'肺症状A','num': '1234'},
                {'name':'肺症状A','num': '1234'},
                {'name':'肺症状A','num': '1234'},
                {'name':'肺症状A','num': '1234'}
              ],
              'arm': [
                {'name':'手臂症状A','num': '1234'},
                {'name':'手臂症状A','num': '1234'},
                {'name':'手臂症状A','num': '1234'},
                {'name':'手臂症状A','num': '1234'},
                {'name':'手臂症状A','num': '1234'}
              ],  
              'gut': [
                {'name':'肠症状A','num': '1234'},
                {'name':'肠症状A','num': '1234'},
                {'name':'肠症状A','num': '1234'},
                {'name':'肠症状A','num': '1234'},
                {'name':'肠症状A','num': '1234'}
              ],
              'leg': [
                {'name':'腿症状A','num': '1234'},
                {'name':'腿症状A','num': '1234'},
                {'name':'腿症状A','num': '1234'},
                {'name':'腿症状A','num': '1234'},
                {'name':'腿症状A','num': '1234'}
              ],
              'stomach': [
                {'name':'胃症状A','num': '1234'},
                {'name':'胃症状A','num': '1234'},
                {'name':'胃症状A','num': '1234'},
                {'name':'胃症状A','num': '1234'},
                {'name':'胃症状A','num': '1234'}
              ],
          };


          var curArr = selectedContent[name];
          var innerHtml = '<h4>'+name+'</h4><div class="content">';
          $.each(curArr, function(no, illitem) {
              innerHtml += '<span class="symptom" data-num="'+ illitem.num +'">'+ illitem.name +'</span>';
          });
          innerHtml += '</div>';
          $('#selected_content').html(innerHtml);
      },
      otherRes: function() {
        //症状选择区域交互
        var _this = this;
        $('#other .title:first').addClass('selected');
        $('#other .title').on('click',function(e){
          $('#other .title').removeClass('selected')
          $('#other .content').slideUp();
          $(e.target).addClass('selected');
          $(e.target).next('.content').slideDown();
        });


        $('.content').on('click', '.symptom', function() {
          $(this).addClass('selected');
          var dataNum = $(this).attr('data-num');
          console.log(dataNum);
          if( !_this.checkExist(dataNum) ) {
            console.log(dataNum);
            $('#result .result-content').append($(this).clone(false));
          } else {
            alert('您选择的症状已经在结论区了，无需重复添加.');
          }
        });
      },

      resultRes: function() {
          var _this = this;
          $('#result .result-content').on('click', 'span', function() {
            $(this).animate({
              'width': '0',
              'height': '0',
              'padding': '0'
            }, 500, function() {
              var nowData = $(this).attr('data-num');
              _this.removeSelected(nowData);
              $(this).remove();
            });
         });
      },
      checkExist: function(dataNum) {
        var returnValue = false;

        $('#result .result-content').find('span').each(function() {
            console.log($(this).attr('data-num'));
            if($(this).attr('data-num') === dataNum ) {
                returnValue = true;
            }
        });
        return returnValue;
      },
      removeSelected: function(num) {
        $('#other').find('span').each(function() {
          if( $(this).attr('data-num') === num ) {
             $(this).removeClass('selected');
          }
        });
      }
  };

});

