/**
 * Created by winter on 14-1-8.
 */

define(function( require ){
    var $ = require( "jquery" );
    require("bootstrap");


    function init(){
//        sentRequest();
// 假数据
    var data = {
        alldata:[
            {
                name:"yangxuzhi",
                num:1,
                heights: 172
            },
            {
                name:"yinxuzhi",
                num:2,
                heights: 152
            },
            {
                name:"qixuzhi",
                num: 3,
                heights: 192
            },
            {
                name:"yanshizhi",
                num: 4,
                heights: 142
            },
            {
                name:"shirezhi",
                num: 5,
                heights: 202
            },
            {
                name:"xueyuzhi",
                num: 6,
                heights: 142
            },
            {
                name:"tebingzhi",
                num: 7,
                heights: 132
            },
            {
                name:"qiyuzhi",
                num: 8,
                heights: 112
            },
            {
                name:"pinghezhi",
                num: 9,
                heights: 200
            }
        ]
    };
        var dataArray = data.alldata;
        for( var i = 0; i < dataArray.length; i++ ){
            console.log(dataArray[i]);
            var num = dataArray[i].num;
            var height = dataArray[i].heights;
            draw(num, height);
        }
    }
    function sentRequest() {
        $.ajax({
            url:"",
            data:"result",
            type: 'POST',
            dataType:'JSON',
            mimeType:'application/json',
            success:function(data){
                return data;
            },
            fail:function(){
                alert("a~o~failed");
            },
            error: function(data, status, er){
                alert("data"+data+"status"+status+"er"+er);
            }
        });
    }

     function draw( num, height) {

         var canvas = document.getElementById("tutorial");

         if( canvas.getContext ){

             var pointX = (num-1) * 81 + 45;
             var pointY = 230 - height;
             var ctx = canvas.getContext("2d");
             ctx.fillStyle = "rgb(120, 70, 20)";
             ctx.fillRect(pointX, pointY, 36, height);
         } else {
             alert("你的浏览器太低级了，快升级浏览器吧~推荐chrome哦~~~");
         }

     }
    init();
});
