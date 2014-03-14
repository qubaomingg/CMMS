/**
 * Created by winter on 14-1-7.
 */
define(function(require){

    var $ = require("jquery");
    var showLocation = require("area");
    require ('jquery.easing');


    var result = {};
    var table = $(".sixtyQuestion").find("table");
    table.find("input[type = 'radio']").attr("disabled","disabled");

    $(".sexAge").find("button").on("click",function(){
        var formTestResult = formTest();
        if( false === formTestResult ) {
            var target = $("div.sexAge").find("div.age");
            target.addClass("has-error");
            target.find("input[type = 'text']").attr("id","inputError");
        } else if(regTest() === false) {
        	alert("请选择出生地！");
        } else {
            result = getSexAgeRegion();
            
            if(result.sex === 'male'){
                table.find("tr").eq(46).remove();
            } else {
                table.find("tr").eq(45).remove();
            }
            $(".sexAge").slideUp();
            var firstTr = table.find("tr:eq(0) input");
            firstTr.removeAttr("disabled");
            table.find("tr:eq(0)").addClass("trbg");
            radioCheck();

        }
    });

    function radioCheck() {
        var radio = table.find("tr");
        var count = 0;
        radio.find("input").on("click", function(){
            var thisValue = $(this).val();
            if( thisValue !== undefined ){

                var tr = $(this).parents("tr");
                var row_index = tr.index();

                if( row_index >= count ){

                    count = row_index;
                    tr.removeClass("trbg");
                    var nextTr = tr.next();
                    nextTr.find("input").removeAttr("disabled");
                    nextTr.addClass("trbg");
                }
            }
        });

    }
    
    function regTest() {
    	var reg = $(".sexAge").find("select.form-control").val();
    	if(reg === ""){
            return false;
        } else {
        	return true;
        }
    }

    function formTest(){
        var age = $(".sexAge").find("input[type = 'text']").val();
        var result = regIsNumber(age);
        
        if( age === "" || false === result ) {
            return false;
        } else {
        	return true;
        }
    }

    function regIsNumber(fData)
    {
        var reg = new RegExp("^[0-9]+$");
        var a = reg.test(fData);
        return reg.test(fData)
    }

    function getSexAgeRegion() {
        var sexAge = $(".sexAge");
        result.visitorsex = sexAge.find("input[type = 'radio'][name = 'sex']:checked").val();
        result.visitorage = sexAge.find("input[type = 'text']").val();
        result.visitorarea = sexAge.find("select.form-control1").val() + sexAge.find("select.form-control2").val() + sexAge.find("select.form-control3").val();
        return result;
    }


    function buttonClick() {
        $(".btn-success").on("click", function (){
            var value = $("table tr:last-child").find("input[type = 'radio'][name = '67']:checked").val();
            if (value === undefined || value === ""){
                alert("请先完成大题后再提交");
                return ;
            } else {
            	var scores = [];
				for (i = 1; i < 68; i++) {
					var score = $('table').find('input[type="radio"][name="' + i + '"]:checked').val();
					var each = {};
					each['number'] = i;
					each['score'] = score;
					scores.push(each);
				}
				result.scores = scores;
				
				$.ajax({
					url:"../constitution/add.do",
					type:'POST',
					data:JSON.stringify(result),
					dataType:'json',
					contentType:'application/json',
					success:function(response){
						var result = response.results;
						setSuggestion(result);
	        			if(response.status==0){
	        				$('.questionsContent').attr('hidden', 'hidden');
	        				var dataArray = result.datas;
	        		        for( var i = 0; i < dataArray.length; i++ ){
	        		            var num = i + 1;
	        		            var height = dataArray[i];
	        		            draw(num, height);
	        		        }
	        		        $('.content').removeAttr('hidden');
	        			}else{
	        				alert("保存失败!");
	        			}	
	        		},
	        		error:function(){
	        			alert("ajax error");
	        		}
				});
            }
        });
    }
    
    function setSuggestion(data) {
    	var tizhi = data.message;
    	var suggestions = data.suggestions;
    	$('#targettizhi').text(tizhi);
    	var html = '<p class = "lead leadP">体质检测结果如下：</p>';
    	for(var i=0; i<suggestions.length; i++) {
    		html += '<p class = "lead leadP">总体特征：'+suggestions[0].mainfeature+'</p>';
    		html += '<p class = "lead leadP">形体特征：'+suggestions[0].bodyfeature+'</p>';
    		html += '<p class = "lead leadP">常见表现：'+suggestions[0].presentation+'</p>';
    		html += '<p class = "lead leadP">心理特征：'+suggestions[0].personality+'</p>';
    		html += '<p class = "lead leadP">发病倾向：'+suggestions[0].diesasetrend+'</p>';
    		html += '<p class = "lead leadP">对外界环境适应能力：'+suggestions[0].adaptation+'</p>';
    		html += '<p class = "lead leadP">调节建议：'+suggestions[0].suggestion+'</p>';
    		if (i > 0) {
    			html += '<p class = "lead leadP">偏向体质结果：-------------</p>';
			}
    	}
    	$('.suggest').html(html);
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
    
    buttonClick();
    showLocation();
});
