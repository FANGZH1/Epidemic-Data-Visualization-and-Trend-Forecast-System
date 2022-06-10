function showTime() {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth()+1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    if(hour < 10){ hour = "0"+hour}
    if(minute < 10){ minute = "0"+minute}
    if(second < 10){ second = "0"+second}
    var time = year + "年"+ month + "月"+day + "日"+hour + ":"+minute + ":"+second
    $("#tim").html(time)
}


function get_c1_chinadataIncr(){
    $.ajax({
        url: "/center_1_chinaIncr",
           timeout: 10000,
          success: function (data) {
               $(".china_num h1").eq(0).text(data.chinaconfirmedIncr);
               $(".china_num h1").eq(1).text(data.chinasuspectedCount);
               $(".china_num h1").eq(2).text(data.chinacuredIncr);
            $(".china_num h1").eq(3).text(data.chinadeadIncr);
        },
        error: function (xhr, type, errorThrown) {

        }
    })
}


function get_c1_chinadataCount(){
    $.ajax({
        url: "/center_1_chinaCount",
           timeout: 10000,
          success: function (data) {
               $(".world_num h1").eq(0).text(data.chinacurrentconfirmedCount);
               $(".world_num h1").eq(1).text(data.chinaconfirmedCount);
               $(".world_num h1").eq(2).text(data.chinacuredCount);
            $(".world_num h1").eq(3).text(data.chinadeadCount);
        },
        error: function (xhr, type, errorThrown) {

        }
    })
}


function get_c2_data(){
	$.ajax({
        url: "/center_2",
        timeout: 10000,
        success: function (data) {
			ec_center_option.series[0].data = data.data;
			ec_center.setOption(ec_center_option)
        },
        error: function (xhr, type, errorThrown) {

        }
    })
}

function get_l1_data() {
    ec_left1.showLoading()
    $.ajax({
        url: "/left_1",
        success: function (data) {
            ec_left1_Option.xAxis[0].data = data.date_id
            ec_left1_Option.series[0].data = data.confirmed_incr
            ec_left1_Option.series[1].data = data.dead_incr
            ec_left1_Option.series[2].data = data.cured_incr
            ec_left1.setOption(ec_left1_Option)
            ec_left1.hideLoading()
        },
        error: function (xhr, type, errorThrown) {
        }
    })
}


function get_r1_data() {
    ec_right1.showLoading()
    $.ajax({
        url: "/right_1",
        success: function (data) {
            ec_right1_Option.xAxis[0].data = data.date_id
            ec_right1_Option.series[0].data = data.confirmed
            ec_right1_Option.series[1].data = data.dead
            ec_right1_Option.series[2].data = data.cured
            ec_right1.setOption(ec_right1_Option)
            ec_right1.hideLoading()
        },
        error: function (xhr, type, errorThrown) {
        }
    })
}


function get_r2_data() {
    ec_right2.showLoading()
    $.ajax({
        url: "/right_2",
        success: function (data) {
            ec_right2_Option.xAxis[0].data = data.date_id
            ec_right2_Option.series[0].data = data.confirmedCountPred
            ec_right2_Option.series[1].data = data.confirmedTrueData
            ec_right2_Option.series[2].data = data.confirmedIncrPred
            ec_right2_Option.series[3].data = data.confirmedIncrTrueData
            ec_right2.setOption(ec_right2_Option)
            ec_right2.hideLoading()
        },
        error: function (xhr, type, errorThrown) {
        }
    })
}


function get_l3_data() {
    $.ajax({
        url:"/left_3",
        success: function(data) {
            var update_time = data.update_time
            var details = data.details
             $("#left_3 .ts").html("截至时间：" + update_time)
            var s =""
            for(var i in details){
                     s += "<li><span class='hotsearch'>百度热搜\t\t</span>"+ details[i] + "</li>"
            }
             $("#hotsearch_wrapper_li1 ul").html(s)
            start_roll()
		},
		error: function(xhr, type, errorThrown) {
		}
    })
}


function get_l2_data() {
    $.ajax({
        url:"/left_2",
        success: function(data) {
            var update_time = data.update_time
            var details = data.details
            var risk = data.risk
             $("#left_2 .ts").html("截至时间：" + update_time)
            var s =""
            for(var i in details){
                if (risk[i] == "高风险"){
                     s += "<li><span class='high_risk'>高风险\t\t</span>"+ details[i] + "</li>"
                }else{
                     s += "<li><span class='middle_risk'>中风险\t\t</span>"+ details[i] + "</li>"
                }
            }
             $("#risk_wrapper_li1 ul").html(s)
            start_roll()
		},
		error: function(xhr, type, errorThrown) {
		}
    })
}


function refreshPage(){
    window.location.reload()
}


setInterval(showTime,1000)
//gettime()
get_c1_chinadataIncr()
get_c1_chinadataCount()
//get_c1_worlddata()
get_c2_data()
get_l1_data()
get_l2_data()
get_r1_data()
get_r2_data()
get_l3_data()