define(function(require) {
            var location = require('location');
            var showLocation = function(type, province, city, town) {
                type = type == null ? '': type;
                var loc = new location();

                var title = ['省份', '城市', '地区'];
                $.each(title,
                function(k, v) {
                    title[k] = '<option value="">' + v + '</option>';
                }) 
                $('#loc_province' + type).append(title[0]);
                $('#loc_city' + type).append(title[1]);
                $('#loc_town' + type).append(title[2]);
                $('#loc_province' + type).change(function() {
                    $('#loc_city' + type).empty();
                    $('#loc_city' + type).append(title[1]);
                    loc.fillOption('loc_city' + type, '0,' + $('#loc_province' + type).val());
                    $('#loc_town' + type).empty();
                    $('#loc_town' + type).append(title[2]);

                    var json = loc.find('0');
                    $('input[name=loc_province' + type + ']').val(json[$(this).val()]);
                }) 
                $('#loc_city' + type).change(function() {
                    $('#loc_town' + type).empty();
                    $('#loc_town' + type).append(title[2]);
                    loc.fillOption('loc_town' + type, '0,' + $('#loc_province' + type).val() + ',' + $('#loc_city' + type).val());

                    var json = loc.find('0,' + $('#loc_province' + type).val());
                    $('input[name=loc_city' + type + ']').val(json[$(this).val()]);
                }) 
                $('#loc_town' + type).change(function() {
                    var json = loc.find('0,' + $('#loc_province' + type).val() + ',' + $('#loc_city' + type).val());

                    $('input[name=loc_town' + type + ']').val(json[$(this).val()]);
                })
                if (province) {
                    loc.fillOption('loc_province' + type, '0', province);
                    if (city) {
                        loc.fillOption('loc_city' + type, '0,' + province, city);
                        if (town) {
                            loc.fillOption('loc_town' + type, '0,' + province + ',' + city, town);
                        }
                    }
                } else {
                    loc.fillOption('loc_province' + type, '0');
                }

            }
            return showLocation;

        }
);
//选择地理信息
