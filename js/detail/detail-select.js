define(function(require, exports, module) {

  var $ = require('jquery');
  module.exports = {
      organRes: function() {
          var _this = this;
          // 器官区域交互
          $('.body .head').on('click', function() {
              _this._organ('head');
          });
          $('.body .chest').on('click', function() {
              _this._organ('chest');
          });
          $('.body .hand_left').on('click', function() {
              _this._organ('hand');
          });
          $('.body .hand_right').on('click', function() {
              _this._organ('hand');
          });
          $('.body .waist').on('click', function() {
              _this._organ('waist');
          });
          $('.body .leg').on('click', function() {
              _this._organ('leg');
          });
          $('.body .foot').on('click', function() {
              _this._organ('foot');
          });  
          $('.body .neck').on('click', function() {
               _this._organ('neck');
          });
         
      },
      _organ: function(name) {
          var selectedContent = {
              'head': [
                 {'name': '头胀', 'num': '1000'},
                 {'name': '头冷', 'num': '1010'},
                 {'name': '头热', 'num': '1020'},
                 {'name': '头晕', 'num': '1030'},
                 {'name': '头昏', 'num': '1040'},
                 {'name': '头重', 'num': '1050'},
                 {'name': '头痛', 'num': '1060'},
                 {'name': '偏头痛', 'num': '1070'},
                 {'name': '头皮麻木', 'num': '1080'},
                 {'name': '头倾', 'num': '1100'},
                 {'name': '头摇', 'num': '1110'},
                 {'name': '面色红', 'num': '1200'},
                 {'name': '面色白', 'num': '1210'},
                 {'name': '面色青', 'num': '1220'},
                 {'name': '面色黧（li）黑', 'num': '1230'},
                 {'name': '面色萎黄', 'num': '1240'},
                 {'name': '面垢', 'num': '1250'},
                 {'name': '颜面粉刺', 'num': '1260'},
                 {'name': '颜面黄褐斑', 'num': '1279'},
                 {'name': '面部疼痛', 'num': '1300'},
                 {'name': '颜面红肿', 'num': '1310'},
                 {'name': '颜面浮肿', 'num': '1320'},
                 {'name': '面具脸', 'num': '1330'},
                 {'name': '颜面抽搐', 'num': '1340'},
                 {'name': '面肌瘫痪', 'num': '1350'},
                 {'name': '面肌痉挛', 'num': '1360'},
                 {'name': '面瘫（面神经麻痹）', 'num': '1370'},
                 {'name': '脑鸣', 'num': '1150'},
                 {'name': '须发早白', 'num': '1160'},
                 {'name': '脱发（也在皮肤科症状中）', 'num': '1170'},
                 {'name': '头皮发际疖肿', 'num': '1180'},
                 {'name': '头皮疖肿', 'num': '8000'},
                 {'name': '面部脱屑', 'num': '9050'},
                 {'name': '粉刺', 'num': '9060'},
                 {'name': '红鼻子', 'num': '9070'},
                 {'name': '头皮脱屑', 'num': '9000'},
                 {'name': '头面瘙痒', 'num': '9010'},
                 {'name': '头白秃', 'num': '9020'},
                 {'name': '毛发变异', 'num': '9030'},
                 {'name': '脱发', 'num': '9040'},
                 {'name': '舌痒', 'num': '1520'},
                 {'name': '舌裂（舌生裂纹）', 'num': '1530'},
                 {'name': '舌痛', 'num': '1540'},
                 {'name': '舌热', 'num': '1545'},
                 {'name': '舌萎', 'num': '1550'},
                 {'name': '舌肿', 'num': '1551'},
                 {'name': '舌胖', 'num': '1552'},
                 {'name': '舌纵', 'num': '1553'},
                 {'name': '舌卷', 'num': '1554'},
                 {'name': '舌强', 'num': '1555'},
                 {'name': '舌歪', 'num': '1556'},
                 {'name': '舌颤', 'num': '1557'},
                 {'name': '舌麻', 'num': '1558'},
                 {'name': '舌疮', 'num': '1559'},
                 {'name': '舌上出血（舌衄）', 'num': '1600'},
                 {'name': '舌生芒刺', 'num': '1610'},
                 {'name': '舌生瘀斑', 'num': '1620'},
                 {'name': '舌下脉络瘀阻紫黑', 'num': '1629'},
                 {'name': '舌边齿痕', 'num': '1630'},
                 {'name': '舌红绛', 'num': '1640'},
                 {'name': '舌淡白', 'num': '1650'},
                 {'name': '舌青', 'num': '1660'},
                 {'name': '舌紫', 'num': '1670'},
                 {'name': '舌干', 'num': '1680'},
                 {'name': '舌光（镜面舌）', 'num': '1690'},
                 {'name': '舌剥', 'num': '1700'},
                 {'name': '舌苔白', 'num': '1710'},
                 {'name': '舌苔黄', 'num': '1720'},
                 {'name': '舌苔灰黑', 'num': '1730'},
                 {'name': '舌苔腐垢', 'num': '1740'},
                 {'name': '舌苔黄腻', 'num': '1750'},
                 {'name': '舌苔白腻', 'num': '1760'},
                 {'name': '弄舌', 'num': '1780'},
                 {'name': '啮舌', 'num': '1790'},
                 {'name': '耳聋耳鸣', 'num': '3700'},
                 {'name': '耳涨闷', 'num': '3710'},
                 {'name': '耳痒', 'num': '3720'},
                 {'name': '耳痛', 'num': '3730'},
                 {'name': '耳衄', 'num': '3740'},
                 {'name': '耳内流脓', 'num': '3750'},
                 {'name': '外耳道红肿', 'num': '3760'},
                 {'name': '耳胀耳闭', 'num': '3770'},
                 {'name': '喷嚏', 'num': '3800'},
                 {'name': '鼻塞', 'num': '3810'},
                 {'name': '鼻流涕', 'num': '3820'},
                 {'name': '鼻流清涕', 'num': '3822'},
                 {'name': '鼻流浊涕', 'num': '3825'},
                 {'name': '鼻痒', 'num': '3830'},
                 {'name': '鼻痠', 'num': '3840'},
                 {'name': '鼻干', 'num': '3841'},
                 {'name': '鼻痛', 'num': '3842'},
                 {'name': '鼻肿', 'num': '3843'},
                 {'name': '鼻臭', 'num': '3844'},
                 {'name': '鼻衄（鼻出血）', 'num': '3850'},
                 {'name': '失嗅', 'num': '3860'},
                 {'name': '红鼻子', 'num': '9070'},
                 {'name': '目痒', 'num': '3000'},
                 {'name': '目羞明', 'num': '3010'},
                 {'name': '目畏热', 'num': '3020'},
                 {'name': '目畏寒#', 'num': '3030'},
                 {'name': '胞睑肿胀（baojian）', 'num': '3040'},
                 {'name': '眼胞瘀痛', 'num': '3050'},
                 {'name': '眼睑丹毒', 'num': '3060'},
                 {'name': '针眼', 'num': '3070'},
                 {'name': '眼皮跳', 'num': '3080'},
                 {'name': '上胞下垂', 'num': '3090'},
                 {'name': '眼生痰核', 'num': '3100'},
                 {'name': '目生椒粟', 'num': '3110'},
                 {'name': '胞内生肉', 'num': '3120'},
                 {'name': '拳毛倒睫', 'num': '3130'},
                 {'name': '流泪', 'num': '3140'},
                 {'name': '漏睛', 'num': '3150'},
                 {'name': '白睛红赤', 'num': '3160'},
                 {'name': '睑弦赤烂', 'num': '3170'},
                 {'name': '目干涩', 'num': '3180'},
                 {'name': '白睛生疳', 'num': '3200'},
                 {'name': '白睛鱼胞', 'num': '3210'},
                 {'name': '白睛溢血', 'num': '3220'},
                 {'name': '赤脉传睛', 'num': '3230'},
                 {'name': '赤膜下垂', 'num': '3240'},
                 {'name': '胬肉攀睛', 'num': '3250'},
                 {'name': '轮上赤豆', 'num': '3260'},
                 {'name': '抱轮红', 'num': '3270'},
                 {'name': '黒睛星翳', 'num': '3300'},
                 {'name': '黒睛云翳', 'num': '3310'},
                 {'name': '疳翳', 'num': '3320'},
                 {'name': '蟹睛', 'num': '3330'},
                 {'name': '黄液上冲', 'num': '3340'},
                 {'name': '目札', 'num': '3400'},
                 {'name': '目昏', 'num': '3410'},
                 {'name': '目珠自胀', 'num': '3420'},
                 {'name': '目视无神', 'num': '3430'},
                 {'name': '头目胀痛', 'num': '3440'},
                 {'name': '瞳神散大', 'num': '3450'},
                 {'name': '瞳神缩小', 'num': '3460'},
                 {'name': '瞳神干缺', 'num': '3470'},
                 {'name': '血灌瞳神', 'num': '3480'},
                 {'name': '目偏视(斜视)', 'num': '3500'},
                 {'name': '近视', 'num': '3510'},
                 {'name': '远视', 'num': '3520'},
                 {'name': '老花眼', 'num': '3530'},
                 {'name': '经行目痛', 'num': '3540'},
                 {'name': '云雾移睛', 'num': '3550'},
                 {'name': '暴盲', 'num': '3560'},
                 {'name': '白内障', 'num': '3570'},
                 {'name': '视物变形', 'num': '3580'},
                 {'name': '夜盲', 'num': '3590'},
                 {'name': '视瞻昏渺', 'num': '3600'},
                 {'name': '小儿青盲', 'num': '3610'},
                 {'name': '目痛', 'num': '3620'},
                 {'name': '眼球振颤', 'num': '3630'},
                 {'name': '眼球突出', 'num': '3640'},

              ],
              'chest': [
                {'num': '2210', 'name': '咳痰'},
                {'num': '2220', 'name': '咳嗽'},
                {'num': '2230', 'name': '咳血'},
                {'num': '2240', 'name': '短气'},
                {'num': '2250', 'name': '气喘'},
                {'num': '2260', 'name': '哮鸣'},
                {'num': '2270', 'name': '胸痛'},
                {'num': '2280', 'name': '胸闷'},
                {'num': '2290', 'name': '憋气'},
                {'num': '2300', 'name': '心中懊侬'},
                {'num': '2310', 'name': '心悸'},
                {'num': '2320', 'name': '心下悸'},
                {'num': '2330', 'name': '心下痞'},
                {'num': '2340', 'name': '嗳气'},
                {'num': '2350', 'name': '吞酸'},
                {'num': '2360', 'name': '呃逆'},
                {'num': '2370', 'name': '恶心'},
                {'num': '2380', 'name': '干呕'},
                {'num': '2390', 'name': '嘈杂'},
                {'num': '2400', 'name': '呕吐'},
                {'num': '2410', 'name': '吐血'},
                {'num': '2420', 'name': '吐蚘'},
                {'num': '2430', 'name': '食欲不振'},
                {'num': '2440', 'name': '善食易饥'},
                {'num': '2450', 'name': '食后困顿'},
                {'num': '2460', 'name': '喜食异物'},
                {'num': '2470', 'name': '反胃'},
                {'num': '2480', 'name': '噎膈'},
                {'num': '2490', 'name': '胁痛'},
                {'num': '2500', 'name': '胃脘痛'},
                {'num': '2650', 'name': '心痛'},
                {'num': '2660', 'name': '心胸汗出'},
                {'num': '2670', 'name': '胁下痞块'},
                {'num': '8040', 'name': '瘰疬'},
                {'num': '8050', 'name': '缺盆溃烂'},
                {'num': '8090', 'name': '乳房胀痛'},
                {'num': '8100', 'name': '乳房肿块'},
                {'num': '8110', 'name': '乳房红肿'},
                {'num': '8120', 'name': '乳头破裂'}
              ],
              'hand': [
                {'num': '1980', 'name': '臂痛'},
                {'num': '8040', 'name': '瘰疬（腋窝）'},
                {'num': '8060', 'name': '腋窝红肿'},
                { 'num': '1910', 'name': '手足厥冷'},
                { 'num': '1912', 'name': '手指挛急'},
                { 'num': '1915', 'name': '手颤'},
                { 'num': '1920', 'name': '朱砂掌'},
                { 'num': '1922', 'name': '手足肢端青紫'},
                { 'num': '1924', 'name': '手足疔疮'},
                { 'num': '8080', 'name': '指头疔肿'},
                { 'num': '9140', 'name': '指甲变异'},
                { 'num': '9150', 'name': '指（趾）缝湿烂'},
                { 'num': '9110', 'name': '手足紫绀'},
                { 'num': '9120', 'name': '手足脱屑'},
                { 'num': '9130', 'name': '掌跖发疱'}
              ],  
              'waist': [
                {'name':'肠症状A','num': '1234'},
                {'name':'肠症状A','num': '1234'},
                {'name':'肠症状A','num': '1234'},
                {'name':'肠症状A','num': '1234'},
                {'name':'肠症状A','num': '1234'},
                {'num': '2000', 'name':'背痛'},
                {'num': '2010', 'name':'背冷'},
                {'num': '2020', 'name':'背热'},
                {'num': '2100', 'name':'腰痛'},
                {'num': '2110', 'name':'腰脊痛'},
                {'num': '2120', 'name':'腰痠'},
                {'num': '2130', 'name':'腰重'},
                {'num': '2140', 'name':'腰膝无力'},
                {'num': '2150', 'name':'腰如绳束'},
                {'num': '2160', 'name':'腰冷'},
                {'num': '2170', 'name':'腰背俯偻'},
                {'num': '2180', 'name':'尾闾痛'},
                {'num': '2190', 'name':'腰腿痛'},
                {'num': '8070', 'name':'肩背痈肿'},
                {'num': '2340', 'name':'嗳气'},
                {'num': '2350', 'name':'吞酸'},
                {'num': '2360', 'name':'呃逆'},
                {'num': '2370', 'name':'恶心'},
                {'num': '2380', 'name':'干呕'},
                {'num': '2390', 'name':'嘈杂'},
                {'num': '2400', 'name':'呕吐'},
                {'num': '2410', 'name':'吐血'},
                {'num': '2420', 'name':'吐蚘'},
                {'num': '2430', 'name':'食欲不振'},
                {'num': '2440', 'name':'善食易饥'},
                {'num': '2450', 'name':'食后困顿'},
                {'num': '2460', 'name':'喜食异物'},
                {'num': '2470', 'name':'反胃'},
                {'num': '2480', 'name':'噎膈'},
                {'num': '2490', 'name':'胁痛'},
                {'num': '2500', 'name':'胃脘痛'},
                {'num': '2510', 'name':'脐腹痛'},
                {'num': '2520', 'name':'小腹痛'},
                {'num': '2530', 'name':'少腹痛'},
                {'num': '2540', 'name':'腹筋挛急'},
                {'num': '2550', 'name':'腹中痞块'},
                {'num': '2560', 'name':'腹露青筋'},
                {'num': '2570', 'name':'红丝赤缕'},
                {'num': '2580', 'name':'单腹胀大'},
                {'num': '2590', 'name':'腹满'},
                {'num': '2600', 'name':'腹部硬满'},
                {'num': '2610', 'name':'腹冷'},
                {'num': '2620', 'name':'脐下悸动'},
                {'num': '2630', 'name':'气从少腹上冲'},
                {'num': '2640', 'name':'肠鸣'},
                {'num': '2650', 'name':'心痛'},
                {'num': '2660', 'name':'心胸汗出'},
                {'num': '2670', 'name':'胁下痞块'},
                {'num': '8130', 'name':'脐漏'},
                {'num': '8140', 'name':'脐内出血'},
              ],
              'leg': [
                {'num': '1937', 'name': '腿肿痛'},
                {'num': '1938', 'name': '膝肿痛'},
                {'num': '1952', 'name': '膝痛'},
                {'num': '1993', 'name': '胫痠'},
                {'num': '1996', 'name': '下肢红肿热痛@'},
                {'num': '1997', 'name': '下肢结节红斑@'},
                {'num': '1998', 'name': '下肢生疽@'},
                {'num': '1999', 'name': '下肢青筋突起（静脉曲张）'},
                {'num': '8150', 'name': '鼠蹊肿痛（腹股沟肿痛）'},
                {'num': '8160', 'name': '臀部痈肿'},
                {'num': '8170', 'name': '下肢生疽'},
                {'num': '8180', 'name': '臁疮'},
              ],
              'foot': [
                {'num': '1900', 'name':'足痛'},
                {'num': '1905', 'name':'足跟痛'},
                {'num': '1910', 'name':'手足厥冷'},
                {'num': '1922', 'name':'手足肢端青紫'},
                {'num': '1924', 'name':'手足疔疮'},
                {'num': '1926', 'name':'足趾紫黑溃烂'},
                {'num': '1991', 'name':'足颤'},
                {'num': '1994', 'name':'足热'},
                {'num': '1995', 'name':'步态不稳'},
                {'num': '1996', 'name':'下肢红肿热痛'},
                {'num': '1997', 'name':'下肢结节红斑'},
                {'num': '1998', 'name':'下肢生疽'},
                {'num': '1999', 'name':'下肢青筋突起（静脉曲张）'},
                {'num': '8080', 'name':'指头疔肿'},
                {'num': '8190', 'name':'足趾发黑'},
                {'num': '8200', 'name':'足趾溃烂'},
                {'num': '9140', 'name':'指甲变异'},
                {'num': '9150', 'name':'指（趾）缝湿烂'},
                {'num': '9110', 'name':'手足紫绀'},
                {'num': '9120', 'name':'手足脱屑'},
                {'num': '9130', 'name':'掌跖发疱'},
              ],
               'neck': [
                {'num': '1120', 'name':'项强(项强肩痛）'},
                {'num': '1130', 'name':'颈粗(颈部瘿肿（甲状腺肿）)'},
                {'num': '1140', 'name':'颈项痛'},
                {'num': '1970', 'name':'肩痛'},
                {'num': '1971', 'name':'肩不举'},
                {'num': '8020', 'name':'颈后生痈(项背痈肿)'},
                {'num': '8030', 'name':'颈间生疮'},
                {'num': '8040', 'name':'瘰疬'},
                {'num': '8070', 'name':'肩背痈肿'},
              ],
          };
          var nameChange = {
              'neck': '脖子症状',
              'foot': '脚部症状',
              'leg': '腿部症状',
              'waist': '腰腹症状',
              'hand': '手部症状',
              'chest': '胸部症状',
              'head': '头部症状'
          };

          var curArr = selectedContent[name];
          var innerHtml = '<h4>'+nameChange[name]+'</h4><div class="content">';
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
        $('#container').on('click', '.symptom', function() {
          var dataNum = $(this).attr('data-num');
          console.log(dataNum);
          if( !_this.checkExist(dataNum) ) {
            $(this).addClass('selected');
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

