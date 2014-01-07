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
            $(".sexAge").slideUp();
            var firstTr = table.find("tr:eq(0) input");
            firstTr.removeAttr("disabled");
            table.find("tr:eq(0)").addClass("trbg");
            radioCheck();
//            var firstInputvalue = table.find("input[name = '1'][checked]").val();

        }
    });

    function radioCheck() {
        var radio = table.find("tr");
        var radioNum = radio.length;
//        console.log(radio.eq(0).find("input[name = '1'][checked]").val());

        radio.find("input").on("click", function(){
            var thisValue = $(this).val();
            if( thisValue !== undefined ){
                this.parentNode
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
        var reg = new RegExp("^[-]?[0-9]+[\.]?[0-9]+$");
        return reg.test(fData)
    }


    function getSexAgeRegion() {
        var sexAgeRegion = {};
        var sexAge = $(".sexAge");
        sexAgeRegion.sex = sexAge.find("input[name = 'sex'][checked]").val();
        sexAgeRegion.age = sexAge.find("input[type = 'text']").val();
        sexAgeRegion.region = sexAge.find("select.form-control").val();
        return sexAgeRegion;
    }

});