// JavaScript Document

function Index()
{
	this.initPage();
}

Index.prototype={
	remoteUrls:{
		//用户信息
		userInfoUrl:'http://api.shihou.tv/api/user/info',
		//收礼
		receiveUrl:'http://api.shihou.tv/api/gift/receive_rank',
		//送礼
		sendUrl:'http://api.shihou.tv/api/gift/send_rank',
		//总收礼榜
		receiveTotalUrl:'http://api.shihou.tv/api/gift/common_receive_rank',
		//总送礼榜
		sendTotalUrl:'http://api.shihou.tv/api/gift/common_send_rank',
		//留言
		commonUrl:'http://event.m.shihou.tv/shihou.forum.service',
		//批量获取用户信息
		commonBatchUrl:'http://api.shihou.tv/api/user/batch?',
		//签到接口list
		signUrl:'http://event.m.shihou.tv/shihou_h5/signSpringFestival/getSign',
		//signUrl:'http://test.youxiduo.com:20017/shihou_h5/signSpringFestival/getSign',
		//签到接口btn
		signBtnUrl:'http://event.m.shihou.tv/shihou_h5/signSpringFestival/sign',
		//signBtnUrl:'http://test.youxiduo.com:20017/shihou_h5/signSpringFestival/sign',
		//抽奖次数
		freeTimesUrl:'http://event.m.shihou.tv/shihou_lottery'
		//freeTimesUrl:'http://test.youxiduo.com/shihou_lottery'
	},
	remoteData:{
		qybfReceiveData : [],
		qybfSendData    : [],
		qgqcReceiveData : [],
		qgqcSendData    : [],
		gxfcReceiveData : [],
		gxfcSendData    : [],
		yshbReceiveData : [],
		yshbSendData    : [],
		jxryReceiveData : [],
		djdlSendData    : []
		 
	},
	initPage:function()
	{
		var _this = this;
		var util  = new Util();
		//初始化html
		$(".mainBox").html(nyHtml.collectPage);
		
		//set menu size
		var menuImgHeight = $(".menuBg").height();
		$(".wrap").css("padding-top",menuImgHeight);
		$(".menu li").css("height",menuImgHeight+"px");
		//初始化加载当前用户
		util.getUserId(function(data)
		{
			util.setCookie("ny_userId",data);
		});
		//alert("初始化："+util.getCookie("ny_userId"));
		//初始化集卡
		_this.collectPage(util);
		
		//menu
		_this.changeMenu(util,menuImgHeight);
		
		//初始化榜单数据
		_this.initData(util);
		/*console.log(_this.remoteData.gxfcReceiveData);
		console.log(_this.remoteData.qybfSendData);
		console.log(_this.remoteData.qgqcReceiveData);
		console.log(_this.remoteData.qgqcSendData);
		console.log(_this.remoteData.gxfcReceiveData);
		console.log(_this.remoteData.gxfcSendData);
		console.log(_this.remoteData.yshbReceiveData);
		console.log(_this.remoteData.yshbSendData);
		console.log(_this.remoteData.jxryReceiveData);
		console.log(_this.remoteData.djdlSendData);*/
	},
	initData:function(util)
	{
		var _this = this;
		var qybfReceiveUrl = _this.remoteUrls.receiveUrl+"?gift_id=1165&start_date=2018-02-12&end_date=2018-02-15"; //气宇不凡榜---收礼URL 12-15
		var qybfSendUrl    = _this.remoteUrls.sendUrl+"?gift_id=1165&start_date=2018-02-12&end_date=2018-02-15";    //气宇不凡榜---送礼URL 12-15
		var qgqcReceiveUrl = _this.remoteUrls.receiveUrl+"?gift_id=1030&start_date=2018-02-12&end_date=2018-02-15"; //倾国倾城榜---收礼URL 12-15
		var qgqcSendUrl    = _this.remoteUrls.sendUrl+"?gift_id=1030&start_date=2018-02-12&end_date=2018-02-15";    //倾国倾城榜---送礼URL 12-15
		var gxfcReceiveUrl = _this.remoteUrls.receiveUrl+"?gift_id=1166&start_date=2018-02-15&end_date=2018-02-25"; //恭喜发财榜---收礼URL 15-25
		var gxfcSendUrl    = _this.remoteUrls.sendUrl+"?gift_id=1166&start_date=2018-02-15&end_date=2018-02-25";    //恭喜发财榜---送礼URL 15-25
		var yshbReceiveUrl = _this.remoteUrls.receiveUrl+"?gift_id=1167&start_date=2018-02-15&end_date=2018-02-25"; //压岁红包榜---收礼URL 15-25
		var yshbSendUrl    = _this.remoteUrls.sendUrl+"?gift_id=1167&start_date=2018-02-15&end_date=2018-02-25";    //压岁红包榜---送礼UR 15-25
		var jxryReceiveUrl = _this.remoteUrls.receiveTotalUrl+'?start_date=2018-02-12&end_date=2018-02-25'; //吉祥如意榜---收礼URL 12-25
		var djdlSendUrl    = _this.remoteUrls.sendTotalUrl+'?start_date=2018-02-12&end_date=2018-02-25';    //大吉大利榜---送礼URL 12-25

		//收礼-气宇不凡榜
		util.requestRemoteDataGetJson(qybfReceiveUrl, {}, function(result)
		{
			if(util.parseResult(result, 'error') == 0)
			{
				_this.remoteData.qybfReceiveData = util.parseResult(result, 'data', 'list');
			}
		}, false);
		
		//送礼-气宇不凡榜
		util.requestRemoteDataGetJson(qybfSendUrl, {}, function(result)
		{
			if(util.parseResult(result, 'error') == 0)
			{
				_this.remoteData.qybfSendData = util.parseResult(result, 'data', 'list');
			}
		}, false);
		
		//收礼-倾国倾城榜
		util.requestRemoteDataGetJson(qgqcReceiveUrl, {}, function(result)
		{
			if(util.parseResult(result, 'error') == 0)
			{
				_this.remoteData.qgqcReceiveData = util.parseResult(result, 'data', 'list');
			}
		}, false);
		
		//送礼-倾国倾城榜
		util.requestRemoteDataGetJson(qgqcSendUrl, {}, function(result)
		{
			if(util.parseResult(result, 'error') == 0)
			{
				_this.remoteData.qgqcSendData = util.parseResult(result, 'data', 'list');
			}
		}, false);
		
		//收礼-恭喜发财榜
		util.requestRemoteDataGetJson(gxfcReceiveUrl, {}, function(result)
		{
			if(util.parseResult(result, 'error') == 0)
			{
				_this.remoteData.gxfcReceiveData = util.parseResult(result, 'data', 'list');
			}
		}, false);
		
		//送礼-恭喜发财榜
		util.requestRemoteDataGetJson(gxfcSendUrl, {}, function(result)
		{
			if(util.parseResult(result, 'error') == 0)
			{
				_this.remoteData.gxfcSendData = util.parseResult(result, 'data', 'list');
			}
		}, false);
		
		//收礼-压岁红包榜
		util.requestRemoteDataGetJson(yshbReceiveUrl, {}, function(result)
		{
			if(util.parseResult(result, 'error') == 0)
			{
				_this.remoteData.yshbReceiveData = util.parseResult(result, 'data', 'list');
			}
		}, false);
		
		//送礼-压岁红包榜
		util.requestRemoteDataGetJson(yshbSendUrl, {}, function(result)
		{
			if(util.parseResult(result, 'error') == 0)
			{
				_this.remoteData.yshbSendData = util.parseResult(result, 'data', 'list');
			}
		}, false);
		
		//收礼-吉祥如意榜
		util.requestRemoteDataGetJson(jxryReceiveUrl, {}, function(result)
		{
			if(util.parseResult(result, 'error') == 0)
			{
				_this.remoteData.jxryReceiveData = util.parseResult(result, 'data', 'list');
			}
		}, false);
		
		//送礼-大吉大利榜
		util.requestRemoteDataGetJson(djdlSendUrl, {}, function(result)
		{
			if(util.parseResult(result, 'error') == 0)
			{
				_this.remoteData.djdlSendData = util.parseResult(result, 'data', 'list');
			}
		}, false);
		
	},	
	//change menu
	changeMenu:function(util,menuImgHeight)
	{
		var _this  = this;
		var cIndex = 0;
		var aLi    = $(".menu li");
		aLi.on(util.clickTouch(),function()
		{
			$(window).scrollTop(0)//切换的时候始终在顶部
			cIndex = $(this).index();
			$(".menu a").html("<img src="+ $(this).attr("data-url")+" />");
			switch(cIndex)
			{
				case 0:
					_this.collectPage(util);
					break;
				case 1:
					_this.lovePage(util);
					break;
				case 2:
					_this.newyearPage(util);
					break;
				case 3:
					_this.happyPage(util);
					break;
				case 4:
					_this.blessing(util,menuImgHeight);
					break;	
			}
		});
	},
	//--- 1.集字篇 ---
	collectPage:function(util)
	{
		var _this  = this;
		var userId = util.getCookie("ny_userId");
		//var userId = "244637";
		//获取卡片方案ID
		var cardSchemeId = "d4d1519cdfbd477c99f9a878a4d557d2";
		//福袋抽奖方案ID
		var bagSchemeId  = "b05ea091fa7c42569b82167e6ffb1508";
		
		//初始化html
		$(".mainBox").html(nyHtml.collectPage);
		
		//判断登录
		if(userId != '' && userId != null && userId != 0)
		{
			//获取卡片抽奖次数
			_this.getFreeTimes(util,cardSchemeId,userId,function(result)
			{
				 $(".count em").html(result.result);
			});
			//获取福袋抽奖次数
			_this.getFreeTimes(util,bagSchemeId,userId,function(result)
			{
				prizeCount = result["result"];
				if(result.result>0)
				{
					$(".btnCj").show();
					$(".btnInit").hide();
					$(".btnCj em").html(result.result);
				}
				else
				{
					$(".btnCj").hide();
					$(".btnInit").show();
				}
			});
			//获取卡片个数
			_this.getCardCount(util,bagSchemeId,userId);
		}
		
		//点击开奖搜集卡片
		_this.getNewCard(util,cardSchemeId,bagSchemeId,userId);
        //点击福袋抽奖
		_this.getBagPrize(util,cardSchemeId,bagSchemeId,userId);
		//集字弹框
		_this.cardPop(util,userId);
       
	},
	cardPop:function(util,userId)
	{
		var _this  = this;
		
		//集卡集福规则
		$("#cardRule").on(util.clickTouch(),function()
		{
            $(".popZb,.mask").fadeIn();
        });
		
        $(".popBox .close").on(util.clickTouch(),function()
		{
            $(".popBox,.mask").fadeOut();
        });
		
		// 分享
        $(".share").on(util.clickTouch(),function()
        {
           _this.sharePage(userId,share_url,share_title,share_desc,share_icon);
        });	
	},
	//免费次数
	getFreeTimes:function (util,schemeId,userId,callback)
	{
		/*
			schemeId 方案id
			userId   用户id
		*/
		var _this    = this;
        var timesUrl = _this.remoteUrls.freeTimesUrl+"/api/getFreeTimes?schemeId="+schemeId+"&uid="+userId+"&platform=shihou";
		util.requestRemoteDataGetJson(timesUrl, null, function(result)
		{
            if(result.errorCode == 0)
			{
				callback(result); 
            }
        },false);
    },
	//加载卡片个数
	getCardCount:function (util,schemeId,userId)
	{
		//console.log(schemeId);
		//console.log(userId);
		var _this = this;
		var dataResult = "";
		var cardInfo   = "";
        var cardCountUrl = _this.remoteUrls.freeTimesUrl+"/api/getPrizeTimes?schemeId="+schemeId+"&uid="+userId+"&platform=shihou";
        //登录判断
		if(userId == '' || userId == null || userId == 0)
		{
			$(".pIconHover").hide();
			$(".pIcon").show();
			return;
		}
		
		util.requestRemoteDataGetJson(cardCountUrl, null, function(result)
		{
            dataResult = util.parseResult(result, 'result');
			//console.log(dataResult);
            for(var i=0;i<dataResult.length;i++)
			{
				cardInfo = dataResult[i]
                for(var key in cardInfo)
				{
                    if(key == 'c218eaad7e43473bae28751d8ced1e57') //2018
					{
                        if(cardInfo[key]>0)
						{
                            $('.p1 .pIcon').hide();
                            $('.p1 .pIconHover').css('display','block');
                            $('.p1 .pIconHover em').html(cardInfo[key]);
                        }
						else
						{
                            $('.p1 .pIcon').show();
                            $('.p1 .pIconHover').hide();
                            $('.p1 .pIconHover em').html(0);
                        }
                    }
                    else if(key == 'f2fac5dd9369442e807ed463a3c0aa74')//新
					{
                        if(cardInfo[key]>0)
						{
                            $('.p2 .pIcon').hide();
                            $('.p2 .pIconHover').css('display','block');
                            $('.p2 .pIconHover em').html(cardInfo[key]);
                        }
						else
						{
                            $('.p2 .pIcon').show();
                            $('.p2 .pIconHover').hide();
                            $('.p2 .pIconHover em').html(0);
                        }
                    }
                    else if(key == '72ce777dac954a1399714ff7745bc408') //年
					{
                        if(cardInfo[key]>0)
						{
                            $('.p3 .pIcon').hide();
                            $('.p3 .pIconHover').css('display','block');
                            $('.p3 .pIconHover em').html(cardInfo[key]);
                        }
						else
						{
                            $('.p3 .pIcon').show();
							$('.p3 .pIconHover').hide();
                            $('.p3 .pIconHover em').html(0);
                        }
                    }
                    else if(key == 'dd7fe2aa0609409cb8cb93afc8df8ec7') //大
					{
                        if(cardInfo[key]>0)
						{
                            $('.p4 .pIcon').hide();
                            $('.p4 .pIconHover').css('display','block');
                            $('.p4 .pIconHover em').html(cardInfo[key]);
                        }
						else
						{
                            $('.p4 .pIcon').show();
                            $('.p4 .pIconHover').hide();
                            $('.p4 .pIconHover em').html(0);
                        }
                    }
                    else if(key == '788a0c86190d451ca6d7e2125fc71c5a') //吉
					{
                        if(cardInfo[key]>0)
						{
                            $('.p5 .pIcon').hide();
                            $('.p5 .pIconHover').css('display','block');
                            $('.p5 .pIconHover em').html(cardInfo[key]);
                        }
						else
						{
                            $('.p5 .pIcon').show();
                            $('.p5 .pIconHover').hide();
                            $('.p5 .pIconHover em').html(0);
                        }
                    }
                }
            }
        });
    },
	//点击开奖搜集卡片
	getNewCard:function (util,cardSchemeId,bagSchemeId,userId)
	{
        var _this       = this;
		//var lotteryNum  = 0;
		var cardName    = "";
		var cardNameImg = "";
		var iBtn        = false;
		
		//刷新
        $(".btnSx").on(util.clickTouch(),function()
        {
            $(".kjBg,.kjBox").hide();
            $(".kjNoBg,.kjBoxNo").show();
        });
		
		
        //点击开奖
        $(".btnKj").on(util.clickTouch(), function()
		{
			//登录判断
			if(userId == '' || userId == null || userId == 0)
			{
				window.location.href='shihoutv://route?jump_type=120';
				return;
			}
			//防止连击
			if(iBtn==true)
			{
				return false;
			}
			iBtn = true;
            lotteryNum = $(".count em").html();
			
            //判断是否有抽奖次数
            if(lotteryNum>0)
			{
                var token = util.getCookie("token1");
				//var token    = '9b552854ca585ec3ac256d52a4db946e5af3ac08';
                var url      = _this.remoteUrls.freeTimesUrl+"/wheel/run";
				var kjBoxStr = '恭喜获得一张';
                var param = {
                    "number"   : 1,
                    "token"    : token,
                    "linkId"   : cardSchemeId,
					"platform" : "shihou"
                };
                util.requestRemoteDataGetJson(url, param, function (result)
				{
					//更新当前获得卡的状态
					if(result.result[0]=="undefined")
					{
						iBtn = false;
						return;
					}
                    //console.log(result);
                    if(result.errorCode == 0)
					{
						console.log(result.result[0]["prize"]);
                        var detailId = result.result[0]["prize"]["detailId"];
                        switch(detailId)
						{
                            case 'c218eaad7e43473bae28751d8ced1e57':
                                cardName    = '2018';
                                cardNameImg = 'iconLion';
								$('.p1 .pIconHover em').html(parseInt($('.p1 .pIconHover em').html()) + 1);
                                break;
                            case 'f2fac5dd9369442e807ed463a3c0aa74':
                                cardName    = '新';
                                cardNameImg = 'iconHou';
								$('.p2 .pIconHover em').html(parseInt($('.p2 .pIconHover em').html()) + 1);
                                break;
                            case '72ce777dac954a1399714ff7745bc408':
                                cardName    = '年';
                                cardNameImg = 'iconOne';
								$('.p3 .pIconHover em').html(parseInt($('.p3 .pIconHover em').html()) + 1);
                                break;
                            case 'dd7fe2aa0609409cb8cb93afc8df8ec7':
                                cardName    = '大';
                                cardNameImg = 'iconWeek';
								$('.p4 .pIconHover em').html(parseInt($('.p4 .pIconHover em').html()) + 1);
                                break;
                            case '788a0c86190d451ca6d7e2125fc71c5a':
                                cardName    = '吉';
                                cardNameImg = 'iconYear';
								$('.p5 .pIconHover em').html(parseInt($('.p5 .pIconHover em').html()) + 1);
                                break;
                        }
						//获得卡的名和图片
						$('.kjBox h3').html('恭喜获得一张'+cardName+'福袋卡');
						$('.jkjp img').attr('src', 'http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/'+cardNameImg+'.png');
						//显示获得卡片结果展示
						$(".kjNoBg,.kjBoxNo").hide();
						$(".kjBg,.kjBox").show();
						
						//更新卡片个数
						_this.getCardCount(util,bagSchemeId,userId);
						
						//更新卡片抽奖次数
						_this.getFreeTimes(util,cardSchemeId,userId,function(result)
						{
							 $(".count em").html(result.result);
						});
						//更新福袋抽奖次数
						_this.getFreeTimes(util,bagSchemeId,userId,function(result)
						{
							if(result.result>0)
							{
								$(".btnCj").show();
								$(".btnInit").hide();
								$(".btnCj em").html(result.result);
							}
							else
							{
								$(".btnCj").hide();
								$(".btnInit").show();
							}
						});
						iBtn = false;
                    }
                },false);
            }
            else
			{
				//没有抽奖次数提示信息
                $(".noKj").fadeIn(200);
                setTimeout('$(".noKj").hide()',3000);
				iBtn = false;
            }
        });
    },
	//福袋抽奖
	getBagPrize:function (util,cardSchemeId,bagSchemeId,userId)
	{
        var _this = this;
		var iBtn  = false;
        //打开福袋
        $(".btnCj").on(util.clickTouch(),function()
        {
			//登录判断
			if(userId == '' || userId == null || userId == 0)
			{
				window.location.href='shihoutv://route?jump_type=120';
				return;
			}
			//防止连击
			if(iBtn==true)
			{
				return false;
			}
			iBtn = true;
			
            var token = util.getCookie("token1");
            //var	token = '9b552854ca585ec3ac256d52a4db946e5af3ac08';
			var url   = _this.remoteUrls.freeTimesUrl+"/wheel/run";
            var param = {
                "number"   : 1,
                "token"    : token,
                "linkId"   : bagSchemeId,
				"platform" : 'shihou'
            };
            util.requestRemoteDataGetJson(url, param, function(result)
			{   
                if(result.errorCode == 0)
				{
                    var resultData = result.result[0];                    
                    $(".jpImg").html('<img src="'+resultData.prize.prizeImg+'" />');
                    $(".jpText").html(resultData.prize.prizeName);
					$(".popBj,.mask").show();
					//更新卡片个数
					_this.getCardCount(util,bagSchemeId,userId);
					//更新福袋抽奖次数
					_this.getFreeTimes(util,bagSchemeId,userId,function(result)
					{
						if(result.result>0)
						{
							$(".btnCj").show();
							$(".btnInit").hide();
							$(".btnCj em").html(result.result);
						}
						else
						{
							$(".btnCj").hide();
							$(".btnInit").show();
						}
					});
					iBtn = false;
                }
            });
        });
    },
	//--- 2.爱情篇end ---
	lovePage:function(util)
	{
		var _this = this;
		var userId = util.getCookie("ny_userId");
		$(".mainBox").html(nyHtml.lovePage);
		//加载当前用户信息
		_this.login(util,$(".unLogin"),$(".login"),userId);
		//气宇不凡榜
		_this.loadGiftRank(util,userId,_this.remoteData.qybfReceiveData,_this.remoteData.qybfSendData,$("#loginLoveQybf"),$("#phbQybf"),10);
		//倾国倾城榜 测试：狮牙数/5000 正式：狮牙数/3344
		_this.loadGiftRank(util,userId,_this.remoteData.qgqcReceiveData,_this.remoteData.qgqcSendData,$("#loginLoveQgqc"),$("#phbQgqc"),3344);
		//规则
		_this.lovePop(util);
	},
	//login
	login:function(util,unLoginObj,loginObj,userId)
	{
		var _this     = this;
		var userInfo  = "";
		var uiUrl     = _this.remoteUrls.userInfoUrl+"?user_id="+userId;
		
		//未登录
		if(userId == '' || userId == null || userId == 0)
		{
			loginObj.hide();
			unLoginObj.show();
		}
		else
		{
			util.requestRemoteDataGetJson(uiUrl,null,function(uiResult)
			{
				if(util.parseResult(uiResult,'error') == 0)
				{
					userInfo = util.parseResult(uiResult,'data','user');
					unLoginObj.hide();
					loginObj.find("em").html('<img src="'+userInfo["avatar"]+'" />');
					loginObj.find("p").html(userInfo["nick_name"]);
					loginObj.show();
				}
			},false);			
		}
	},
	lovePop:function(util)
	{
		//爱情排行版规则
		$(".lovePhb .phbrule").on(util.clickTouch(),function()
		{
			$(".popPhb,.mask").fadeIn();	
		});	
		
		//关闭
		$(".close,.mask").on(util.clickTouch(),function()
		{
			$(".popBox,.mask").fadeOut();	
		});
	},
	//收送礼排行榜
	loadGiftRank: function(util,userId,receiveData,sendData,pmLoginObj,rankObj,giftNum)
	{
		/*
			参数说明
			util        公用方法
			userId      用户id
			receiveUrl  收礼URL
			sendUrl     送礼URL
			pmLoginObj  登录后收送礼jquery对象
			rankObj     排行榜列表ul的ID
		*/
		var _this       = this;
		var giftRankHtml= "";
		
		//渲染排行榜html
		for(var i=0; i<receiveData.length; i++)
		{
			if(i<10)
			{
				giftRankHtml+=_this.setRankListHtml((i+1),1,receiveData[i]["user"]["room"]["jump"],receiveData[i]["user"]["nick_name"],receiveData[i]["user"]["avatar"],receiveData[i]["user"]["room"]["vdo_status"],parseInt(receiveData[i]["total"])/giftNum);
				giftRankHtml+=_this.setRankListHtml((i+1),2,null,sendData[i]["user"]["nick_name"],sendData[i]["user"]["avatar"],null,parseInt(sendData[i]["total"])/giftNum);
			}
		}
		rankObj.html(giftRankHtml);
		
		//判断登录
		if(userId == '' || userId == null || userId == 0)
		{
			return;
		}
		
		//个人收礼排名
		pmLoginObj.find(".sr").html("收入榜："+_this.getCurrUserRank(userId,receiveData));
		//个人送礼排名
		pmLoginObj.find(".gx").html("贡献榜："+_this.getCurrUserRank(userId,sendData));	
	},
	//获取当前用户排名
	getCurrUserRank:function(userId,dataArr)
	{
		var currPm = "";
		for(var i=0; i<dataArr.length; i++)
		{
			if(userId == dataArr[i]["user"]["id"])
			{
				currPm = (i+1);
				break;
			}
			else
			{
				currPm = "未上榜"	;
			}
		}
		return currPm;
	},
	//html phb
	setRankListHtml:function(rankCount, userType, roomLink, nickName, avatarLink, liveState, lwTotal)
	{
		/*
			参数说明
			rankCount   排名
			userType    1为主播(收礼)，2为用户(送礼)
			roomLink    房间链接
			nickName    用户昵称
			avatarLink  用户头像
			liveState   直播状态
			lwTotal     礼物总数
		*/
		var rankHtml = '';
		var liveHtml = '';
		var rankIcon = '';
		var liClass  = 'user';
		var lwCount  = '';
		var rlHtml   = '';
		var pmHtml   = '';
		
		//排名
		if(rankCount < 4)
		{
			rankIcon = 'liveRanking1';
		}
		
		//开播
		if(liveState == 1)
		{
			liveHtml = '<em class="liveIcon"></em>'+
					   '<em class="liveOpacity"></em>'+
					   '<div class="loader-inner line-scale-pulse-out">'+
							'<div></div>'+
							'<div></div>'+
							'<div></div>'+
							'<div></div>'+
							'<div></div>'+
					   '</div>';
		}
		
		//第1排
		if(userType == 1)
		{
			liClass = 'anchor';
			lwCount = '收到'+lwTotal+'个';
			rlHtml  = '<a class="liveNo1" href="'+roomLink+'">';
			pmHtml  = '<span class="liveRanking '+rankIcon+'">'+rankCount+'</span>';
		}
		else if(userType == 2) //第2排
		{
			liClass = 'user';
			lwCount = '贡献'+lwTotal+'个';
			rlHtml  = '<a class="liveNo1">';
			pmHtml  = '';
		}
		
		rankHtml = '<li class="'+liClass+'">'+
						rlHtml+
							'<span class="liveHead">'+
								'<span class="liveWrap">'+
									liveHtml+
									'<img src="'+avatarLink+'"/>'+
								'</span>'+
							'</span>'+
							'<span class="liveName">'+nickName+'</span>'+
							'<span class="liveNum">'+lwCount+'</span>'+
							pmHtml+
						'</a>'+
					'</li>';
		return rankHtml;
	},
	//--- 3.新年篇end ---
	newyearPage:function(util)
	{
		var _this = this;
		var userId = util.getCookie("ny_userId");
		//var userId = "244588";
		$(".mainBox").html(nyHtml.newyearPage);
		
		//加载当前用户信息
		_this.login(util,$(".unLogin"),$(".login"),userId);
		//恭喜发财榜
		_this.loadGiftRank(util,userId,_this.remoteData.gxfcReceiveData,_this.remoteData.gxfcSendData,$("#loginYearGxfc"),$("#phbGxfc"),10);
		//压岁红包榜
		_this.loadGiftRank(util,userId,_this.remoteData.yshbReceiveData,_this.remoteData.yshbSendData,$("#loginYearYshb"),$("#phbYshb"),10);
		//签到
		_this.sign(util,userId);
		//规则
		_this.newyearPop(util);
	},
	//签到
	sign:function(util,userId)
	{
		var _this      = this;
		var token      = util.getCookie("token1");
		//var token      = 'H0aLJjCLXCcWsantC61dPiOfb4Zmhv77yItAyEA94LjFqdwQh0chx2';
		var signClass  = '';
		var signHtml   = '';
		var isNo       = false;
		var currDate   = _this.getNowFormatDate();
		var getSignUrl = _this.remoteUrls.signUrl+'?uid='+userId+'&signDay='+currDate;
		var getBtnSignUrl = _this.remoteUrls.signBtnUrl+'?token='+token+'&signDay='+currDate;
		var imageName = "";
		var stateSign = "";
		var jpStr     = "";
		//console.log(getBtnSignUrl);
		//签到列表
		
		//判断登录
		if(userId == '' || userId == null || userId == 0)
		{
			//console.log($("#btnSignNo"));
			//未签到
			$(".btnSign").hide();
			$("#btnSignNo").show();
			for(var i=1; i<=10; i++)
			{
				signHtml += '<li>'+
								'<span><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/sign'+i+'.jpg"/></span>'+
							'</li>';
			}
			$(".Sign ul").html(signHtml);
		}
		else
		{
			var startDate = new Date('2018-02-15');
			var endDate = new Date('2018-02-24');
			var currDateGetTime = new Date(currDate);
			if(currDateGetTime.getTime()<startDate.getTime())
			{
				//alert("活动未开始");
				$(".btnSign").hide();
				$("#btnSignNotStart").show();
				return;
			}
			else if(currDateGetTime.getTime()>endDate.getTime())
			{
				$(".btnSign").hide();
				$("#btnSignEnd").show();
				//alert("活动已结束");
				return;
			}
			else
			{
				util.requestRemoteDataGetJson(getSignUrl,null,function(data)
				{
					if(util.parseResult(data,"errorCode")==0)
					{
						var awards = util.parseResult(data,"result","awards");				
						for(var i=0; i<awards.length; i++)
						{
							
							//签到列表状态 --- 已签到
							if(awards[i]["status"]=="SIGNED"||awards[i]["status"]=="TODAY_SIGNED")
							{
								imageName = 'sign'+(i+1)+'curr';	
								stateSign = 'class="stateSign"';
							}
							else
							{
								imageName= 'sign'+(i+1);
								stateSign = '';
							}
							signHtml += '<li '+stateSign +' id="'+awards[i]["signDay"].split(" ")[0]+'" data-index="'+i+'">'+
											'<span><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/'+imageName+'.jpg"/></span>'+
										'</li>';
							
							//签到按钮的状态 --- 可以签到
							if(awards[i]["status"]=="TODAY_UNSIGNED")
							{
								isNo = true;
							}
						}
						//签到按钮的状态--可以签到
						if(isNo)
						{
							$(".btnSign").hide();
							$("#btnSignNo").show();
						}
						else
						{
							$(".btnSign").hide();
							$("#btnSignEd").show();
						}
						$(".Sign ul").html(signHtml);
					}
				},false);
			}
		}
		
		
		//签到按钮
		$("#btnSignNo").on(util.clickTouch(),function()
		{
			//登录判断
			if(userId == '' || userId == null || userId == 0)
			{
				window.location.href='shihoutv://route?jump_type=120';
				return;
			}
				
			util.requestRemoteDataGetJson(getBtnSignUrl,null,function(data)
			{
				//签到成功了
				if(data["errorCode"]==0 && data["result"]==true)
				{
					//当前卡片变红 TODAY_UNSIGNED
					$("#"+currDate).attr({"class":"stateSign"}).html('<span><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/sign'+(parseInt($("#"+currDate).attr("data-index"))+1)+'curr.jpg"/></span>');
					
					//签到按钮变灰
					$("#btnSignNo").hide();
					$("#btnSignEd").show();
					//奖品
					switch(currDate)
					{
						case "2018-02-15":
							jpStr = "玫瑰礼盒*2"; 
							break;	
						case "2018-02-16":
							jpStr = "刮刮卡*2"; 
							break;
						case "2018-02-17":
							jpStr = "500经验值"; 
							break;
						case "2018-02-18":
							jpStr = "刮刮卡*2"; 
							break;
						case "2018-02-19":
							jpStr = "888经验值"; 
							break;
						case "2018-02-20":
							jpStr = "恭喜发财*2"; 
							break;
						case "2018-02-21":
							jpStr = "刮刮卡*2"; 
							break;
						case "2018-02-22":
							jpStr = "压岁红包"; 
							break;
						case "2018-02-23":
							jpStr = "恭喜发财*2"; 
							break;
						case "2018-02-24":
							jpStr = "刮刮卡*3"; 
							break;
					}
					//签到成功后弹出框
					if($(".stateSign").length<10)
					{
						$(".popSign p").html('<span>'+jpStr+'</span>');
					}
					else//是否连续签到了10天
					{
						$(".popSign p").html('<span>恭喜获得'+jpStr+'</span><span>恭喜获得吉祥如意勋章7天</span>');
					}
					$(".popSign,.mask").show();	
				}
				else
				{
					alert("签到失败请稍后再试！");	
				}
			},false);
		})
		
		//关闭
		$(".close,.mask").on(util.clickTouch(),function()
		{
			$(".popBox,.mask").fadeOut();	
		});
	},
	//获取当前时间，格式YYYY-MM-DD
	getNowFormatDate:function ()
	{
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9)
		{
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9)
		{
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },
	//newyear pop
	newyearPop:function(util)
	{
		//新年排行版规则
		$(".NewYearPhb .phbrule").on(util.clickTouch(),function()
		{
			$(".NyeARPhb,.mask").fadeIn();	
		});	
		
		//关闭
		$(".close,.mask").on(util.clickTouch(),function()
		{
			$(".popBox,.mask").fadeOut();	
		});
	},
	//--- 4.狂欢篇end ---
	happyPage:function(util)
	{
		var _this = this;
		//console.log(jxryReceiveUrl);
		//渲染html
		$(".mainBox").html(nyHtml.happyPage);
		//吉祥如意榜
		_this.loadGiftRankList3(util,_this.remoteData.jxryReceiveData,$("#happJxry"));
		//大吉大利榜
		_this.loadGiftRankList3(util,_this.remoteData.djdlSendData,$("#happDjdl"));
	},
	//狂欢排行榜
	loadGiftRankList3: function(util,rsData,rankObj)
	{
		var _this       = this;
		var giftRankHtml= "";
		var dataArrId   = [1,0,2];
		var dataId      = 0;
		
		//渲染排行榜html
		for(var i=0; i<3; i++)
		{
			dataId = dataArrId[i];
			giftRankHtml+=_this.setRankListHtml3((dataId+1),rsData[dataId]["user"]["avatar"],rsData[dataId]["total"]);
		}
		rankObj.html(giftRankHtml);
	},
	//狂欢html
	setRankListHtml3:function(index,avatarLink,totalCount)
	{
		var htmlList = "";
		
		htmlList = '<li class="number'+index+'">'+
						'<span>	'+
							'<img class="useIcon" src="'+avatarLink+'"/>'+
							'<em><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/number'+index+'icon.png"/></em>'+
						'</span>'+
						'<p><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/number'+index+'.png"/><em>'+totalCount+'狮牙</em></p>'+
					'</li>';
		return htmlList;
	},
	//--- 5.祝福篇end ---
	blessing:function(util,menuImgHeight)
	{
		var _this       = this;
		var listNewData = [];
		var listHotData = [];
		var events      = util.clickTouch();
		var winHeight   = $(window).height();
		
		//初始化html
		$(".mainBox").html(nyHtml.blessing);
		$(".zhufu").css("height",(winHeight-menuImgHeight)+"px");
		$(window).on("resize",function()
		{
			$(".zhufu").css("height",(winHeight-menuImgHeight)+"px");	
		});
		
		//初始化数据
		$(".listContent ul").each(function(index, element)
		{
            if(index==0)
			{
				_this.loadCommon(util,$(".list1"),1,1);
			}
			else if(index==1)
			{
				_this.loadCommon(util,$(".list2"),2,1);
			}
        });
		
		//最新最热切换
		$(".commonTab a").on(events,function()
		{
			var dataCategory = $(this).attr("data-category");
			$(this).addClass("curr").siblings("a").removeClass("curr");	
			$(".listContent ul").eq($(this).index()).show().siblings("ul").hide();	
			$(".more").attr({"data-type":dataCategory});	 
		});
		
		//点赞
		$(".btnZan").on(events,function()
		{
			var toUid     = $(this).attr("data-uid"); //被点赞用户ID
			var id        = $(this).attr("data-id");  //主键id
			var fabCount  = $(this).attr("data-fabcount"); //点赞数
			_this.fabulousCommon(util,$(this),toUid,id,fabCount);
		});		
		
		//留言
		$("#btnSend").on("click",function()
		{
			_this.sendCommon(util);
		});
		
		//加载更多
		$(".more").on(events,function()
		{
			var commonType = $(this).attr("data-type");
			var pageNum = 1;
			//判断并获取最新或最热的pageNum
			if(commonType == 1)
			{
				pageNum = parseInt($("#a_new").attr("data-pageNum"));
			}
			else if(commonType == 2)
			{
				pageNum = parseInt($("#a_hot").attr("data-pageNum"));
			}
			pageNum++;
			_this.loadCommon(util,$(".list"+commonType),commonType,pageNum);
		});
		
		//祝福墙规则
		$(".zhufuRule").on(util.clickTouch(),function()
		{
			$(".popRule,.mask").fadeIn();	
		});
		
		//关闭
		$(".close,.mask").on(util.clickTouch(),function()
		{
			$(".popBox,.mask").fadeOut();	
		});
		
	},
	//留言列表
	loadCommon: function(util,obj,orderType,pageNumCount)
	{
		var _this = this;
		var util = new Util();
		var userId = util.getCookie("ny_userId");
		//var userId="";
		var activityId = '3575';
		//var userId = "244445";
		//var activityId = '3532';
		var pageSize = 5;
		var pageNum = pageNumCount;
		var auditStatus = 2;
		var url = _this.remoteUrls.commonUrl + "/forum/query";
		var param = {
			"from_user_id" : userId,      //用户ID
			"activityId"   : activityId,  //活动ID
			"pageSize"     : pageSize,    //留言数量
			"pageNum"      : pageNum,     //页数
			"auditStatus"  : auditStatus, //审核中1，审核通过2
			"orderType"    : orderType    //留言类别（最新1或者最热2）
		};
		var fabulousImg = '';
		
		util.requestRemoteDataGetJson2(url, param,function()
		{
			$(".more").html("加载中...");
		},
		function(result)
		{
			if(util.parseResult(result,'errorCode') == 0)
			{
				var dataResult     = util.parseResult(result, 'result');
				var dataList       = util.parseResult(dataResult, 'list');
				var commonListHtml = "";
				var createTime     = "";
				var avatarSrc      = "";
				var nickName       = "";
				var userInfoData   = null;
				var userIdStr      = "";
				var getListInfo = "";
				
				//数据量小于5隐藏添加更多
				if(dataList.length<pageSize)
				{
					$(".more").hide();
				}
				else
				{
					$(".more").show();
				}
				
				//通过userId批量查询用户信息息
				for(var i=0; i<dataList.length; i++)
				{
					userIdStr += '&user_ids[]='+dataList[i].uid;
				}
				userInfoData  = _this.getBatchUI(util,userIdStr);
				
				//渲染html
				for(var i=0; i<dataList.length; i++)
				{
					createTime  = dataList[i]["create_time"].substr(5, 5)+' '+dataList[i]["create_time"].substr(11,5);
					getListInfo = userInfoData.get(dataList[i]["uid"]);
					avatarSrc   = getListInfo["avatar"];
					nickName    = getListInfo["nick_name"];
					//判断是否点赞
					if(dataList[i]["fabulousStatus"])
					{
						fabulousImg = '<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/yizan.png" />';
					}
					else
					{
						fabulousImg = '<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/zan.png" />';
					}
					
					//留言
					commonListHtml += '<li>'+
									'	<p class="listTitle"><span>'+ dataList[i]["content"] +'</span><a class="btnZan zan'+dataList[i]["id"]+'" data-uid="'+ dataList[i]["uid"] +'" data-id="'+ dataList[i]["id"] +'" data-fabCount="'+ dataList[i]["fabulous_count"] +'">'+ fabulousImg +'</a></p>'+
									'	<p class="listFont">'+
									'		<a><em><img src="'+ avatarSrc +'"/></em><i>'+ nickName +'</i>'+ createTime +'</a>'+
									'		<span class="btnJz">积赞：'+ dataList[i]["fabulous_count"] +'</span>'+
									'	</p>'+
									'</li>';
				}
				obj.append(commonListHtml);
				$(".more").html('<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/more.jpg"/>');
				//记录最新，最热页数
				if(orderType == 1)
				{
					$("#a_new").attr({"data-pageNum":pageNum});
				}
				else if(orderType)
				{
					$("#a_hot").attr({"data-pageNum":pageNum});
				}
			}
			
		},false);
	},
	//发送留言
	sendCommon:function(util)
	{
		var _this      = this;
		var uid        = util.getCookie("ny_userId");
		//var uid        = 244443;
		var activityId = "3575";
		var commonMsg  = $('#msg').val();
		var commonUrl  = "";
		
		//判断登录
		if(uid == '' || uid == null || uid == 0)
		{
			window.location.href = 'shihoutv://route?jump_type=120';
			return;
		}
		if(commonMsg == '')
		{
			alert('请输入留言内容');
			return;
		}
		commonUrl = _this.remoteUrls.commonUrl + "/forum/add?activityId=" + activityId + "&uid=" + uid + "&content=" + commonMsg;
		util.requestRemoteDataPostJson(commonUrl, null, function(result)
		{
			//留言成功
			if(util.parseResult(result, 'errorCode') == 0)
			{
				$('#msg').val('');
				alert('留言成功!');
			}
			else
			{
				alert(util.parseResult(result, 'errorDescription'));
				$('#msg').val('');
			}
		});	
	},
	//点赞
	fabulousCommon:function(util,thisObj,toUid,id,fabulousCount)
	{
		var _this      = this;
		var uid        = util.getCookie("ny_userId");
		//uid = "244588";
		var activityId = "3575";
		var fabUrl     = "";
		//var uid = 244445;
		//var activityId = "3532";

		//判断登录
		if(uid == '' || uid == null || uid == 0)
		{
			window.location.href = 'shihoutv://route?jump_type=120';
			return;
		}
		fabUrl = _this.remoteUrls.commonUrl + "/forum/fabulous?activityId="+ activityId +"&uid="+ uid +"&toUid="+ toUid +"&id="+ id;
		util.requestRemoteDataPostJson(fabUrl, null, function(result)
		{
			//console.log(result);
			//点赞成功
			if(util.parseResult(result, 'errorCode')==0)
			{
				alert('点赞成功!');
				$(".zan"+thisObj.attr("data-id")+" img").attr('src', 'http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/yizan.png');
				$(".zan"+thisObj.attr("data-id")).closest("li").find(".btnJz").html('积赞：'+(parseInt(fabulousCount)+1));
			}
			else//已经点过赞了
			{
				alert("您今天已经点过赞了!");	
			}
		},false);
	},
	//批量获取用户头像和名称 
	getBatchUI: function(util,uidStr)
	{
		/*
			注意map的key的类型，要一致，否则通过get获取不到map的value
		*/
		var _this       = this;
		var resultMap   = null;
		var userInfoUrl = _this.remoteUrls.commonBatchUrl+""+uidStr;
		util.requestRemoteDataGetJson(userInfoUrl, null, function(resultData)
		{
			if(util.parseResult(resultData,"error")==0)
			{
				var result = util.parseResult(resultData,"data","users");
				resultMap  = new Map();
				for(var i=0; i<result.length; i++)
				{
					resultMap.set(result[i]["id"]+"",result[i]);
				}
			}	
		},false);
		return resultMap;
	},
	//分享
	sharePage:function(from_user_id,share_url,share_title,share_desc,share_icon)
	{
		if(from_user_id=="0")
		{
			window.location.href = 'shihoutv://route?jump_type=120';
		}
		else
		{
			var web_share = {
				"qq": {
					"url": share_url,
					"img": share_icon,
					"title": share_title,
					"subtitle": share_desc
				},
				"wx_person": {
					"url": share_url,
					"img": share_icon,
					"title": share_title,
					"subtitle": share_desc
				},
				"wx_group": {
					"url": share_url,
					"img": share_icon,
					"title": share_title,
					"subtitle": share_desc
				},
				"wb": {
					"url": share_url,
					"img": share_icon,
					"title": share_title,
					"subtitle": share_desc
				}
			};

			if (typeof(window.lion) != "undefined" && typeof(window.lion.web_share) == 'function')
			{
				window.lion.web_share(JSON.stringify(web_share));
			}
		}
	},
	showPop:function(iTck,iMark)
	{
		iMark.fadeIn();
		iTck.fadeIn();
	},
	hidePop:function(iTck,iMark)
	{
		iTck.fadeOut();
		iMark.fadeOut();
	}
};

$(function()
{
	var index = new Index();
});
