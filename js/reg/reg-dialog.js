/*
* 对话框组件
* @author <qubaoming@gmail.com>
*/
define(function(require, exports, module) {

  var $ = require('jquery');
  require('datepicker');

  // 动态加载datepicker需要的css
  var util = require('util');
  util.loadDateCss();
  
  /*
  * 对话框对象
  * @param name 对话框名字
  * @param columns 对话框的列名。eg: [{'name': '病名', 'needTime': false}]
  * @param parent 最后append的父元素。
  */


  function Dialog(name, columns, parent) {
      this.name = name;
      this.columns = columns;
      this.parent = parent;
  }

  module.exports = Dialog;

  Dialog.prototype = {
      render: function() {
          var dialogHtml = this.renderHeader(this.name) + this.renderBody(this.columns) + this.renderFooter();
          var dialog = $(dialogHtml);
          $('body').append(dialog);
          this.handlerEvent();
      },
      renderHeader: function(title) {
          var headHtml = '';
          headHtml = '<div class="dialog"><div class="lay"></div><div class="dialog-content modal-content"><div class="dialog-head modal-header"><button class="close" data-mismiss="modal" aria-hidden="true">x</button><h4 class="dialog-title modal-title">';
          headHtml += title;
          headHtml += '</h4></div>';
          return headHtml;
      },
      renderBody: function(columns) {
          var bodyHtml = '<div class="dialog-body modal-body">';
          $.each(columns, function(no, column) {
              bodyHtml += '<p class="dialog-item"><span class="dialog-span-left">';
              bodyHtml += column.name;
              bodyHtml += '</span><input type="text" class="form-control';
              if( column.needTime ) {
                  bodyHtml += ' dialog-need-time';
              }
              bodyHtml += '"></p>';
          });
          return bodyHtml;
      },
      renderFooter: function() {
          var footHtml = '';
          footHtml += '<div class="dialog-foot modal-footer"><button type="button" class="btn btn-close btn-default">取消</button><button type="button" class="btn btn-primary dialog-ok">确定</button></div>';
          return footHtml;
      },
      handlerEvent: function() {
          $(document).on('click', '.close', $.proxy(this.close, this));
          $(document).on('click', '.btn-close', $.proxy(this.close, this));
          $(document).on('click', '.dialog-ok', $.proxy(this.dialogOk, this));

          // datepicker
          $('.dialog-need-time').datepicker({
              format: 'mm-dd-yyyy'
          });
      },
      close: function() {
          var _this = this;
          console.log('s');

          $('body').find('.dialog').fadeOut(400, function() {
              $(this).remove();
              _this.unbindAllEvent();
          });
      },
      unbindAllEvent: function() {
          $(document).unbind();
      },
      dialogOk: function() {
          var result = [];

          $.each($('.dialog-body').find('input'), function(no, input) {
              result.push($(input).val());
          });
          var newTr = '<tr>';
          $.each(result, function(no, td) {
              newTr += '<td>' + td + '</td>';
          })
          newTr += '</tr>';
         
          var $newTr = $(newTr);
         
          $newTr.insertBefore(this.parent);

          this.close();
      }
  }
});

