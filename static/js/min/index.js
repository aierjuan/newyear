/*
 File:bwzx-1.0.0.js
 Date:2018-02-12
 Author:yanchangshou 
*/
function Index(){this.initPage()}Index.prototype={remoteUrls:{userInfoUrl:"http://api.shihou.tv/api/user/info",receiveUrl:"http://api.shihou.tv/api/gift/receive_rank",sendUrl:"http://api.shihou.tv/api/gift/send_rank",receiveTotalUrl:"http://api.shihou.tv/api/gift/common_receive_rank",sendTotalUrl:"http://api.shihou.tv/api/gift/common_send_rank",commonUrl:"http://event.m.shihou.tv/shihou.forum.service",commonBatchUrl:"http://api.shihou.tv/api/user/batch?",signUrl:"http://event.m.shihou.tv/shihou_h5/signSpringFestival/getSign",signBtnUrl:"http://event.m.shihou.tv/shihou_h5/signSpringFestival/sign",freeTimesUrl:"http://event.m.shihou.tv/shihou_lottery"},remoteData:{qybfReceiveData:[],qybfSendData:[],qgqcReceiveData:[],qgqcSendData:[],gxfcReceiveData:[],gxfcSendData:[],yshbReceiveData:[],yshbSendData:[],jxryReceiveData:[],djdlSendData:[]},initPage:function(){var a=this,b=new Util;$(".mainBox").html(nyHtml.collectPage);var c=$(".menuBg").height();$(".wrap").css("padding-top",c),$(".menu li").css("height",c+"px"),b.getUserId(function(a){b.setCookie("ny_userId",a)}),a.collectPage(b),a.changeMenu(b,c),a.initData(b)},initData:function(a){var b=this,c=b.remoteUrls.receiveUrl+"?gift_id=1165&start_date=2018-02-12&end_date=2018-02-15",d=b.remoteUrls.sendUrl+"?gift_id=1165&start_date=2018-02-12&end_date=2018-02-15",e=b.remoteUrls.receiveUrl+"?gift_id=1030&start_date=2018-02-12&end_date=2018-02-15",f=b.remoteUrls.sendUrl+"?gift_id=1030&start_date=2018-02-12&end_date=2018-02-15",g=b.remoteUrls.receiveUrl+"?gift_id=1166&start_date=2018-02-15&end_date=2018-02-25",h=b.remoteUrls.sendUrl+"?gift_id=1166&start_date=2018-02-15&end_date=2018-02-25",i=b.remoteUrls.receiveUrl+"?gift_id=1167&start_date=2018-02-15&end_date=2018-02-25",j=b.remoteUrls.sendUrl+"?gift_id=1167&start_date=2018-02-15&end_date=2018-02-25",k=b.remoteUrls.receiveTotalUrl+"?start_date=2018-02-12&end_date=2018-02-25",l=b.remoteUrls.sendTotalUrl+"?start_date=2018-02-12&end_date=2018-02-25";a.requestRemoteDataGetJson(c,{},function(c){0==a.parseResult(c,"error")&&(b.remoteData.qybfReceiveData=a.parseResult(c,"data","list"))},!1),a.requestRemoteDataGetJson(d,{},function(c){0==a.parseResult(c,"error")&&(b.remoteData.qybfSendData=a.parseResult(c,"data","list"))},!1),a.requestRemoteDataGetJson(e,{},function(c){0==a.parseResult(c,"error")&&(b.remoteData.qgqcReceiveData=a.parseResult(c,"data","list"))},!1),a.requestRemoteDataGetJson(f,{},function(c){0==a.parseResult(c,"error")&&(b.remoteData.qgqcSendData=a.parseResult(c,"data","list"))},!1),a.requestRemoteDataGetJson(g,{},function(c){0==a.parseResult(c,"error")&&(b.remoteData.gxfcReceiveData=a.parseResult(c,"data","list"))},!1),a.requestRemoteDataGetJson(h,{},function(c){0==a.parseResult(c,"error")&&(b.remoteData.gxfcSendData=a.parseResult(c,"data","list"))},!1),a.requestRemoteDataGetJson(i,{},function(c){0==a.parseResult(c,"error")&&(b.remoteData.yshbReceiveData=a.parseResult(c,"data","list"))},!1),a.requestRemoteDataGetJson(j,{},function(c){0==a.parseResult(c,"error")&&(b.remoteData.yshbSendData=a.parseResult(c,"data","list"))},!1),a.requestRemoteDataGetJson(k,{},function(c){0==a.parseResult(c,"error")&&(b.remoteData.jxryReceiveData=a.parseResult(c,"data","list"))},!1),a.requestRemoteDataGetJson(l,{},function(c){0==a.parseResult(c,"error")&&(b.remoteData.djdlSendData=a.parseResult(c,"data","list"))},!1)},changeMenu:function(a,b){var c=this,d=0,e=$(".menu li");e.on(a.clickTouch(),function(){switch($(window).scrollTop(0),d=$(this).index(),$(".menu a").html("<img src="+$(this).attr("data-url")+" />"),d){case 0:c.collectPage(a);break;case 1:c.lovePage(a);break;case 2:c.newyearPage(a);break;case 3:c.happyPage(a);break;case 4:c.blessing(a,b)}})},collectPage:function(a){var b=this,c=a.getCookie("ny_userId"),d="d4d1519cdfbd477c99f9a878a4d557d2",e="b05ea091fa7c42569b82167e6ffb1508";$(".mainBox").html(nyHtml.collectPage),""!=c&&null!=c&&0!=c&&(b.getFreeTimes(a,d,c,function(a){$(".count em").html(a.result)}),b.getFreeTimes(a,e,c,function(a){prizeCount=a.result,a.result>0?($(".btnCj").show(),$(".btnInit").hide(),$(".btnCj em").html(a.result)):($(".btnCj").hide(),$(".btnInit").show())}),b.getCardCount(a,e,c)),b.getNewCard(a,d,e,c),b.getBagPrize(a,d,e,c),b.cardPop(a,c)},cardPop:function(a,b){var c=this;$("#cardRule").on(a.clickTouch(),function(){$(".popZb,.mask").fadeIn()}),$(".popBox .close").on(a.clickTouch(),function(){$(".popBox,.mask").fadeOut()}),$(".share").on(a.clickTouch(),function(){c.sharePage(b,share_url,share_title,share_desc,share_icon)})},getFreeTimes:function(a,b,c,d){var e=this,f=e.remoteUrls.freeTimesUrl+"/api/getFreeTimes?schemeId="+b+"&uid="+c+"&platform=shihou";a.requestRemoteDataGetJson(f,null,function(a){0==a.errorCode&&d(a)},!1)},getCardCount:function(a,b,c){var d=this,e="",f="",g=d.remoteUrls.freeTimesUrl+"/api/getPrizeTimes?schemeId="+b+"&uid="+c+"&platform=shihou";return""==c||null==c||0==c?($(".pIconHover").hide(),void $(".pIcon").show()):void a.requestRemoteDataGetJson(g,null,function(b){e=a.parseResult(b,"result");for(var c=0;c<e.length;c++){f=e[c];for(var d in f)"c218eaad7e43473bae28751d8ced1e57"==d?f[d]>0?($(".p1 .pIcon").hide(),$(".p1 .pIconHover").css("display","block"),$(".p1 .pIconHover em").html(f[d])):($(".p1 .pIcon").show(),$(".p1 .pIconHover").hide(),$(".p1 .pIconHover em").html(0)):"f2fac5dd9369442e807ed463a3c0aa74"==d?f[d]>0?($(".p2 .pIcon").hide(),$(".p2 .pIconHover").css("display","block"),$(".p2 .pIconHover em").html(f[d])):($(".p2 .pIcon").show(),$(".p2 .pIconHover").hide(),$(".p2 .pIconHover em").html(0)):"72ce777dac954a1399714ff7745bc408"==d?f[d]>0?($(".p3 .pIcon").hide(),$(".p3 .pIconHover").css("display","block"),$(".p3 .pIconHover em").html(f[d])):($(".p3 .pIcon").show(),$(".p3 .pIconHover").hide(),$(".p3 .pIconHover em").html(0)):"dd7fe2aa0609409cb8cb93afc8df8ec7"==d?f[d]>0?($(".p4 .pIcon").hide(),$(".p4 .pIconHover").css("display","block"),$(".p4 .pIconHover em").html(f[d])):($(".p4 .pIcon").show(),$(".p4 .pIconHover").hide(),$(".p4 .pIconHover em").html(0)):"788a0c86190d451ca6d7e2125fc71c5a"==d&&(f[d]>0?($(".p5 .pIcon").hide(),$(".p5 .pIconHover").css("display","block"),$(".p5 .pIconHover em").html(f[d])):($(".p5 .pIcon").show(),$(".p5 .pIconHover").hide(),$(".p5 .pIconHover em").html(0)))}})},getNewCard:function(a,b,c,d){var e=this,f="",g="",h=!1;$(".btnSx").on(a.clickTouch(),function(){$(".kjBg,.kjBox").hide(),$(".kjNoBg,.kjBoxNo").show()}),$(".btnKj").on(a.clickTouch(),function(){if(""==d||null==d||0==d)return void(window.location.href="shihoutv://route?jump_type=120");if(1==h)return!1;if(h=!0,lotteryNum=$(".count em").html(),lotteryNum>0){var i=a.getCookie("token1"),j=e.remoteUrls.freeTimesUrl+"/wheel/run",k={number:1,token:i,linkId:b,platform:"shihou"};a.requestRemoteDataGetJson(j,k,function(i){if("undefined"==i.result[0])return void(h=!1);if(0==i.errorCode){console.log(i.result[0].prize);var j=i.result[0].prize.detailId;switch(j){case"c218eaad7e43473bae28751d8ced1e57":f="2018",g="iconLion",$(".p1 .pIconHover em").html(parseInt($(".p1 .pIconHover em").html())+1);break;case"f2fac5dd9369442e807ed463a3c0aa74":f="新",g="iconHou",$(".p2 .pIconHover em").html(parseInt($(".p2 .pIconHover em").html())+1);break;case"72ce777dac954a1399714ff7745bc408":f="年",g="iconOne",$(".p3 .pIconHover em").html(parseInt($(".p3 .pIconHover em").html())+1);break;case"dd7fe2aa0609409cb8cb93afc8df8ec7":f="大",g="iconWeek",$(".p4 .pIconHover em").html(parseInt($(".p4 .pIconHover em").html())+1);break;case"788a0c86190d451ca6d7e2125fc71c5a":f="吉",g="iconYear",$(".p5 .pIconHover em").html(parseInt($(".p5 .pIconHover em").html())+1)}$(".kjBox h3").html("恭喜获得一张"+f+"福袋卡"),$(".jkjp img").attr("src","http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/"+g+".png"),$(".kjNoBg,.kjBoxNo").hide(),$(".kjBg,.kjBox").show(),e.getCardCount(a,c,d),e.getFreeTimes(a,b,d,function(a){$(".count em").html(a.result)}),e.getFreeTimes(a,c,d,function(a){a.result>0?($(".btnCj").show(),$(".btnInit").hide(),$(".btnCj em").html(a.result)):($(".btnCj").hide(),$(".btnInit").show())}),h=!1}},!1)}else $(".noKj").fadeIn(200),setTimeout('$(".noKj").hide()',3e3),h=!1})},getBagPrize:function(a,b,c,d){var e=this,f=!1;$(".btnCj").on(a.clickTouch(),function(){if(""==d||null==d||0==d)return void(window.location.href="shihoutv://route?jump_type=120");if(1==f)return!1;f=!0;var b=a.getCookie("token1"),g=e.remoteUrls.freeTimesUrl+"/wheel/run",h={number:1,token:b,linkId:c,platform:"shihou"};a.requestRemoteDataGetJson(g,h,function(b){if(0==b.errorCode){var g=b.result[0];$(".jpImg").html('<img src="'+g.prize.prizeImg+'" />'),$(".jpText").html(g.prize.prizeName),$(".popBj,.mask").show(),e.getCardCount(a,c,d),e.getFreeTimes(a,c,d,function(a){a.result>0?($(".btnCj").show(),$(".btnInit").hide(),$(".btnCj em").html(a.result)):($(".btnCj").hide(),$(".btnInit").show())}),f=!1}})})},lovePage:function(a){var b=this,c=a.getCookie("ny_userId");$(".mainBox").html(nyHtml.lovePage),b.login(a,$(".unLogin"),$(".login"),c),b.loadGiftRank(a,c,b.remoteData.qybfReceiveData,b.remoteData.qybfSendData,$("#loginLoveQybf"),$("#phbQybf"),10),b.loadGiftRank(a,c,b.remoteData.qgqcReceiveData,b.remoteData.qgqcSendData,$("#loginLoveQgqc"),$("#phbQgqc"),3344),b.lovePop(a)},login:function(a,b,c,d){var e=this,f="",g=e.remoteUrls.userInfoUrl+"?user_id="+d;""==d||null==d||0==d?(c.hide(),b.show()):a.requestRemoteDataGetJson(g,null,function(d){0==a.parseResult(d,"error")&&(f=a.parseResult(d,"data","user"),b.hide(),c.find("em").html('<img src="'+f.avatar+'" />'),c.find("p").html(f.nick_name),c.show())},!1)},lovePop:function(a){$(".lovePhb .phbrule").on(a.clickTouch(),function(){$(".popPhb,.mask").fadeIn()}),$(".close,.mask").on(a.clickTouch(),function(){$(".popBox,.mask").fadeOut()})},loadGiftRank:function(a,b,c,d,e,f,g){for(var h=this,i="",j=0;j<c.length;j++)j<10&&(i+=h.setRankListHtml(j+1,1,c[j].user.room.jump,c[j].user.nick_name,c[j].user.avatar,c[j].user.room.vdo_status,parseInt(c[j].total)/g),i+=h.setRankListHtml(j+1,2,null,d[j].user.nick_name,d[j].user.avatar,null,parseInt(d[j].total)/g));f.html(i),""!=b&&null!=b&&0!=b&&(e.find(".sr").html("收入榜："+h.getCurrUserRank(b,c)),e.find(".gx").html("贡献榜："+h.getCurrUserRank(b,d)))},getCurrUserRank:function(a,b){for(var c="",d=0;d<b.length;d++){if(a==b[d].user.id){c=d+1;break}c="未上榜"}return c},setRankListHtml:function(a,b,c,d,e,f,g){var h="",i="",j="",k="user",l="",m="",n="";return a<4&&(j="liveRanking1"),1==f&&(i='<em class="liveIcon"></em><em class="liveOpacity"></em><div class="loader-inner line-scale-pulse-out"><div></div><div></div><div></div><div></div><div></div></div>'),1==b?(k="anchor",l="收到"+g+"个",m='<a class="liveNo1" href="'+c+'">',n='<span class="liveRanking '+j+'">'+a+"</span>"):2==b&&(k="user",l="贡献"+g+"个",m='<a class="liveNo1">',n=""),h='<li class="'+k+'">'+m+'<span class="liveHead"><span class="liveWrap">'+i+'<img src="'+e+'"/></span></span><span class="liveName">'+d+'</span><span class="liveNum">'+l+"</span>"+n+"</a></li>"},newyearPage:function(a){var b=this,c=a.getCookie("ny_userId");$(".mainBox").html(nyHtml.newyearPage),b.login(a,$(".unLogin"),$(".login"),c),b.loadGiftRank(a,c,b.remoteData.gxfcReceiveData,b.remoteData.gxfcSendData,$("#loginYearGxfc"),$("#phbGxfc"),10),b.loadGiftRank(a,c,b.remoteData.yshbReceiveData,b.remoteData.yshbSendData,$("#loginYearYshb"),$("#phbYshb"),10),b.sign(a,c),b.newyearPop(a)},sign:function(a,b){var c=this,d=a.getCookie("token1"),e="",f=!1,g=c.getNowFormatDate(),h=c.remoteUrls.signUrl+"?uid="+b+"&signDay="+g,i=c.remoteUrls.signBtnUrl+"?token="+d+"&signDay="+g,j="",k="",l="";if(""==b||null==b||0==b){$(".btnSign").hide(),$("#btnSignNo").show();for(var m=1;m<=10;m++)e+='<li><span><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/sign'+m+'.jpg"/></span></li>';$(".Sign ul").html(e)}else{var n=new Date("2018-02-15"),o=new Date("2018-02-24"),p=new Date(g);if(p.getTime()<n.getTime())return $(".btnSign").hide(),void $("#btnSignNotStart").show();if(p.getTime()>o.getTime())return $(".btnSign").hide(),void $("#btnSignEnd").show();a.requestRemoteDataGetJson(h,null,function(b){if(0==a.parseResult(b,"errorCode")){for(var c=a.parseResult(b,"result","awards"),d=0;d<c.length;d++)"SIGNED"==c[d].status||"TODAY_SIGNED"==c[d].status?(j="sign"+(d+1)+"curr",k='class="stateSign"'):(j="sign"+(d+1),k=""),e+="<li "+k+' id="'+c[d].signDay.split(" ")[0]+'" data-index="'+d+'"><span><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/'+j+'.jpg"/></span></li>',"TODAY_UNSIGNED"==c[d].status&&(f=!0);f?($(".btnSign").hide(),$("#btnSignNo").show()):($(".btnSign").hide(),$("#btnSignEd").show()),$(".Sign ul").html(e)}},!1)}$("#btnSignNo").on(a.clickTouch(),function(){return""==b||null==b||0==b?void(window.location.href="shihoutv://route?jump_type=120"):void a.requestRemoteDataGetJson(i,null,function(a){if(0==a.errorCode&&1==a.result){switch($("#"+g).attr({class:"stateSign"}).html('<span><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/sign'+(parseInt($("#"+g).attr("data-index"))+1)+'curr.jpg"/></span>'),$("#btnSignNo").hide(),$("#btnSignEd").show(),g){case"2018-02-15":l="玫瑰礼盒*2";break;case"2018-02-16":l="刮刮卡*2";break;case"2018-02-17":l="500经验值";break;case"2018-02-18":l="刮刮卡*2";break;case"2018-02-19":l="888经验值";break;case"2018-02-20":l="恭喜发财*2";break;case"2018-02-21":l="刮刮卡*2";break;case"2018-02-22":l="压岁红包";break;case"2018-02-23":l="恭喜发财*2";break;case"2018-02-24":l="刮刮卡*3"}$(".stateSign").length<10?$(".popSign p").html("<span>"+l+"</span>"):$(".popSign p").html("<span>恭喜获得"+l+"</span><span>恭喜获得吉祥如意勋章7天</span>"),$(".popSign,.mask").show()}else alert("签到失败请稍后再试！")},!1)}),$(".close,.mask").on(a.clickTouch(),function(){$(".popBox,.mask").fadeOut()})},getNowFormatDate:function(){var a=new Date,b="-",c=a.getFullYear(),d=a.getMonth()+1,e=a.getDate();d>=1&&d<=9&&(d="0"+d),e>=0&&e<=9&&(e="0"+e);var f=c+b+d+b+e;return f},newyearPop:function(a){$(".NewYearPhb .phbrule").on(a.clickTouch(),function(){$(".NyeARPhb,.mask").fadeIn()}),$(".close,.mask").on(a.clickTouch(),function(){$(".popBox,.mask").fadeOut()})},happyPage:function(a){var b=this;$(".mainBox").html(nyHtml.happyPage),b.loadGiftRankList3(a,b.remoteData.jxryReceiveData,$("#happJxry")),b.loadGiftRankList3(a,b.remoteData.djdlSendData,$("#happDjdl"))},loadGiftRankList3:function(a,b,c){for(var d=this,e="",f=[1,0,2],g=0,h=0;h<3;h++)g=f[h],e+=d.setRankListHtml3(g+1,b[g].user.avatar,b[g].total);c.html(e)},setRankListHtml3:function(a,b,c){var d="";return d='<li class="number'+a+'"><span>\t<img class="useIcon" src="'+b+'"/><em><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/number'+a+'icon.png"/></em></span><p><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/number'+a+'.png"/><em>'+c+"狮牙</em></p></li>"},blessing:function(a,b){var c=this,d=a.clickTouch(),e=$(window).height();$(".mainBox").html(nyHtml.blessing),$(".zhufu").css("height",e-b+"px"),$(window).on("resize",function(){$(".zhufu").css("height",e-b+"px")}),$(".listContent ul").each(function(b,d){0==b?c.loadCommon(a,$(".list1"),1,1):1==b&&c.loadCommon(a,$(".list2"),2,1)}),$(".commonTab a").on(d,function(){var a=$(this).attr("data-category");$(this).addClass("curr").siblings("a").removeClass("curr"),$(".listContent ul").eq($(this).index()).show().siblings("ul").hide(),$(".more").attr({"data-type":a})}),$(".btnZan").on(d,function(){var b=$(this).attr("data-uid"),d=$(this).attr("data-id"),e=$(this).attr("data-fabcount");c.fabulousCommon(a,$(this),b,d,e)}),$("#btnSend").on("click",function(){c.sendCommon(a)}),$(".more").on(d,function(){var b=$(this).attr("data-type"),d=1;1==b?d=parseInt($("#a_new").attr("data-pageNum")):2==b&&(d=parseInt($("#a_hot").attr("data-pageNum"))),d++,c.loadCommon(a,$(".list"+b),b,d)}),$(".zhufuRule").on(a.clickTouch(),function(){$(".popRule,.mask").fadeIn()}),$(".close,.mask").on(a.clickTouch(),function(){$(".popBox,.mask").fadeOut()})},loadCommon:function(a,b,c,d){var e=this,a=new Util,f=a.getCookie("ny_userId"),g="3575",h=5,i=d,j=2,k=e.remoteUrls.commonUrl+"/forum/query",l={from_user_id:f,activityId:g,pageSize:h,pageNum:i,auditStatus:j,orderType:c},m="";a.requestRemoteDataGetJson2(k,l,function(){$(".more").html("加载中...")},function(d){if(0==a.parseResult(d,"errorCode")){var f=a.parseResult(d,"result"),g=a.parseResult(f,"list"),j="",k="",l="",n="",o=null,p="",q="";g.length<h?$(".more").hide():$(".more").show();for(var r=0;r<g.length;r++)p+="&user_ids[]="+g[r].uid;o=e.getBatchUI(a,p);for(var r=0;r<g.length;r++)k=g[r].create_time.substr(5,5)+" "+g[r].create_time.substr(11,5),q=o.get(g[r].uid),l=q.avatar,n=q.nick_name,m=g[r].fabulousStatus?'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/yizan.png" />':'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/zan.png" />',j+='<li>\t<p class="listTitle"><span>'+g[r].content+'</span><a class="btnZan zan'+g[r].id+'" data-uid="'+g[r].uid+'" data-id="'+g[r].id+'" data-fabCount="'+g[r].fabulous_count+'">'+m+'</a></p>\t<p class="listFont">\t\t<a><em><img src="'+l+'"/></em><i>'+n+"</i>"+k+'</a>\t\t<span class="btnJz">积赞：'+g[r].fabulous_count+"</span>\t</p></li>";b.append(j),$(".more").html('<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/more.jpg"/>'),1==c?$("#a_new").attr({"data-pageNum":i}):c&&$("#a_hot").attr({"data-pageNum":i})}},!1)},sendCommon:function(a){var b=this,c=a.getCookie("ny_userId"),d="3575",e=$("#msg").val(),f="";return""==c||null==c||0==c?void(window.location.href="shihoutv://route?jump_type=120"):""==e?void alert("请输入留言内容"):(f=b.remoteUrls.commonUrl+"/forum/add?activityId="+d+"&uid="+c+"&content="+e,void a.requestRemoteDataPostJson(f,null,function(b){0==a.parseResult(b,"errorCode")?($("#msg").val(""),alert("留言成功!")):(alert(a.parseResult(b,"errorDescription")),$("#msg").val(""))}))},fabulousCommon:function(a,b,c,d,e){var f=this,g=a.getCookie("ny_userId"),h="3575",i="";return""==g||null==g||0==g?void(window.location.href="shihoutv://route?jump_type=120"):(i=f.remoteUrls.commonUrl+"/forum/fabulous?activityId="+h+"&uid="+g+"&toUid="+c+"&id="+d,void a.requestRemoteDataPostJson(i,null,function(c){0==a.parseResult(c,"errorCode")?(alert("点赞成功!"),$(".zan"+b.attr("data-id")+" img").attr("src","http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/yizan.png"),$(".zan"+b.attr("data-id")).closest("li").find(".btnJz").html("积赞："+(parseInt(e)+1))):alert("您今天已经点过赞了!")},!1))},getBatchUI:function(a,b){var c=this,d=null,e=c.remoteUrls.commonBatchUrl+""+b;return a.requestRemoteDataGetJson(e,null,function(b){if(0==a.parseResult(b,"error")){var c=a.parseResult(b,"data","users");d=new Map;for(var e=0;e<c.length;e++)d.set(c[e].id+"",c[e])}},!1),d},sharePage:function(a,b,c,d,e){if("0"==a)window.location.href="shihoutv://route?jump_type=120";else{var f={qq:{url:b,img:e,title:c,subtitle:d},wx_person:{url:b,img:e,title:c,subtitle:d},wx_group:{url:b,img:e,title:c,subtitle:d},wb:{url:b,img:e,title:c,subtitle:d}};"undefined"!=typeof window.lion&&"function"==typeof window.lion.web_share&&window.lion.web_share(JSON.stringify(f))}},showPop:function(a,b){b.fadeIn(),a.fadeIn()},hidePop:function(a,b){a.fadeOut(),b.fadeOut()}},$(function(){new Index});