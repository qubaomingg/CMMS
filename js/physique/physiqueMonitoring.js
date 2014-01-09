/**
 * Created by winter on 14-1-7.
 */
define(function(require){

    var $ = require("jquery");
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
        } else {
            result.sexAgeRagion = getSexAgeRegion();
            if(result.sexAgeRagion.sex === 'male'){
                table.find("tr").eq(40).remove();
            } else {
                table.find("tr").eq(41).remove();
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
                console.log(row_index);

                if( row_index >= count ){
                    console.log(row_index);

                    count = row_index;
                    tr.removeClass("trbg");
                    var nextTr = tr.next();
                    nextTr.find("input").removeAttr("disabled");
                    nextTr.addClass("trbg");
                }
            }
        });

    }


    function formTest(){
        var age = $(".sexAge").find("input[type = 'text']").val();
        var result = regIsNumber(age);
        if( age === "" || false === result ) {
            return false;
        }else{
            return true;
        }
    }

    function regIsNumber(fData)
    {
        var reg = new RegExp("^[0-9]+$");
        var a = reg.test(fData);
        console.log(a);
        return reg.test(fData)
    }

    function getSexAgeRegion() {
        var sexAgeRegion = {};
        var sexAge = $(".sexAge");
        sexAgeRegion.sex = sexAge.find("input[type = 'radio'][name = 'sex']:checked").val();
        sexAgeRegion.age = sexAge.find("input[type = 'text']").val();
        sexAgeRegion.region = sexAge.find("select.form-control").val();
        return sexAgeRegion;
    }

});
    function buttonClick() {
        $(".sixtyQuestion").on("click", function (){
            var value = $("table tr:last-child").find("input[type = 'radio'][name = '62']").val();
            console.log(value);
            if (value === ""){
                alert("请先完成大题后再提交");
             }
        });
    }
    buttonClick();
