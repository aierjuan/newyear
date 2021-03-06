// JavaScript Document

var nyHtml = {	
	mainPage:
		'<div class="main">'+
			'<div class="menu">'+
				'<a><img class="menuBg" src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/tabcurr1.jpg"/></a>'+
				'<ul>'+
					'<li class="menuImg1" data-url="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/tabcurr1.jpg"></li>'+
					'<li class="menuImg2" data-url="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/tabcurr2.jpg"></li>'+
					'<li class="menuImg3" data-url="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/tabcurr3.jpg"></li>'+
					'<li class="menuImg4" data-url="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/tabcurr4.jpg"></li>'+
					'<li class="menuImg5" data-url="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/tabcurr5.jpg"></li>'+
				'</ul>'+
			'</div>'+
            '<div class="mainBox"></div>'+
		'</div>',
	//集字篇
	collectPage :
		'<div class="box">'+
			'<div class="boxImg">'+
				'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box1img1.jpg"/>'+
				'<img class="photo xin" src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/xin.png"/>'+
				'<img class="photo nian" src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/nian.png"/>'+
				'<img class="photo kuang" src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/kuang.png"/>'+
				'<img class="photo huan" src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/huan.png"/>'+
				'<img class="photo pa" src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/pa.png"/>'+
			'</div>'+
			'<!---集卡-->'+
			'<div class="boxImg">'+
				'<!---未开奖-->'+
				'<p class="fuRule"><a class="btnSx"><i></i>刷新</a><em id="cardRule">集卡及福袋开启规则<i></i></em></p>'+
				'<span class="kjNoBg"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box1img2.jpg" /></span>'+
				'<div class="kjBoxNo">'+
					'<h3>联欢闹新春 集字赢豪礼</h3>'+
					'<a class="btnKj"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/btnKj.jpg" /></a>'+
				'</div>'+
				'<!-- 已开奖 -->'+
				'<span class="kjBg" style="display:none;"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box1img3.jpg" /></span>'+
				'<div class="kjBox" style="display:none;">'+
					'<h3></h3>'+
					'<span class="jkjp"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/iconHou.png" /></span>'+
				'</div>'+
				'<p class="count">当前剩余开奖机会：<em>0</em></p>'+
				'<a class="share btnshare"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/share.jpg"/></a>'+
			'</div>'+
			'<!---2018新年大吉-->'+
			'<div class="boxImg jiKa">'+
				'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box1img4.jpg"/>'+
				'<span class="btnInit"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/btnLiwu.png" /></span>'+
				'<a class="btnCj"><span class="cjWrap"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/btnLiwu2.png" /><em>0</em></span></a>'+
				'<div class="pCj">'+
					 '<div class="p1">'+
						'<span class="pIcon"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/iconLionNo.png" /></span>'+
						'<span class="pIconHover"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/iconLion.png" /><em>0</em></span>'+
					 '</div>'+
					 '<div class="p2">'+
						'<span class="pIcon"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/iconHouNo.png" /></span>'+
						'<span class="pIconHover"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/iconHou.png" /><em>0</em></span>'+
					 '</div>'+
					 '<div class="p3">'+
						'<span class="pIcon"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/iconOneNo.png" /></span>'+
						'<span class="pIconHover"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/iconOne.png" /><em>0</em></span>'+
					 '</div>'+
					 '<div class="p4">'+
						'<span class="pIcon"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/iconWeekNo.png" /></span>'+
						'<span class="pIconHover"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/iconWeek.png" /><em>0</em></span>'+
					 '</div>'+
					 '<div class="p5">'+
						'<span class="pIcon"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/iconYearNo.png" /></span>'+
						'<span class="pIconHover"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/iconYear.png" /><em>0</em></span>'+
					 '</div>'+
				 '</div>'+
			'</div>'+
			'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box1img5.jpg"/>'+
			'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box1img6.jpg"/>'+
		'</div>',
	//爱情篇
	lovePage:
		'<div class="box">'+
			'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box2img1.jpg"/>'+
			'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box2img2.jpg"/>'+
			'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box2img3.jpg"/>'+
			'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box2img4.jpg"/>'+
			'<div class="lovePhb">'+
				'<!--未登录--->'+
				'<div class="Nenroll unLogin" id="noLoginLoveQybf" style="display:none;">'+
					'<em><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/Nenrollicon.png"/></em>'+
					'<p>请登录后查看个人排行榜哦~</p>'+
					'<a href="shihoutv://route?jump_type=120">立即登录 &gt;&gt;</a>'+
				'</div>'+
				'<!--已登录--->'+
				'<div class="Nenroll enroll login" id="loginLoveQybf">'+
					'<em></em>'+
					'<p></p>'+
					'<a><span class="sr"></span><span class="gx"></span></a>'+
				'</div>'+
				'<div class="phbList">'+
					'<ul id="phbQybf"></ul>'+
					'<a class="phbrule"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/phbrule.jpg"/></a>'+
				'</div>'+
				'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box2img5.jpg"/>'+
				'<!--未登录--->'+
				'<div class="Nenroll unLogin" id="nologinLoveQgqc" style="display:none;">'+
					'<em><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/Nenrollicon.png"/></em>'+
					'<p>请登录后查看个人排行榜哦~</p>'+
					'<a href="shihoutv://route?jump_type=120">立即登录 &gt;&gt;</a>'+
				'</div>'+
				'<!--已登录--->'+
				'<div class="Nenroll enroll login" id="loginLoveQgqc">'+
					'<em></em>'+
					'<p></p>'+
					'<a><span class="sr"></span><span class="gx"></span></a>'+
				'</div>'+
				'<div class="phbList">'+
					'<ul id="phbQgqc"></ul>'+
					'<a class="phbrule"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/phbrule.jpg"/></a>'+
				'</div>'+
				'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box2img6.jpg"/>'+
			'</div>'+
		'</div>',
	//新年篇
	newyearPage:
		'<div class="box" style="background:#fff8e5;">'+
			'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box3img1.jpg"/>'+
			'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box3img2.jpg"/>'+
			'<!--未签到红色-->'+
			'<a class="btnSign" id="btnSignNo" style="display:none;"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/weiqiandao.jpg"/></a>'+
			'<!--已签到灰色-->'+
			'<a class="btnSign" id="btnSignEd" style="display:none;"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/qiandao.jpg"/></a>'+
			'<!--未开始灰色-->'+
			'<a class="btnSign" id="btnSignNotStart" style="display:none;"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/iconSignNotStart.jpg"/></a>'+
			'<!--已结束灰色-->'+
			'<a class="btnSign" id="btnSignEnd" style="display:none;"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/iconSignEnd.jpg"/></a>'+
			'<div class="Sign">'+
				'<ul></ul>'+
			'</div>'+
			'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box3img3.jpg"/>'+
			'<div class="NewYearPhb">'+
				'<!--未登录--->'+
				'<div class="Nenroll unLogin" id="noLoginYearGxfc">'+
					'<em><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/Nenrollicon.png"/></em>'+
					'<p>请登录后查看个人排行榜哦~</p>'+
					'<a href="shihoutv://route?jump_type=120">立即登录 &gt;&gt;</a>'+
				'</div>'+
				'<!--已登录--->'+
				'<div class="Nenroll enroll login" id="loginYearGxfc" style="display:none;">'+
					'<em></em>'+
					'<p></p>'+
					'<a><span class="sr"></span><span class="gx"></span></a>'+
				'</div>'+
				'<div class="phbList">'+
					'<ul id="phbGxfc"></ul>'+
					'<a class="phbrule"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/phbrule2.jpg"/></a>'+
				'</div>'+
				'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box3img4.jpg"/>'+
				'<!--未登录--->'+
				'<div class="Nenroll unLogin" id="noLoginYearYshb">'+
					'<em><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/Nenrollicon.png"/></em>'+
					'<p>请登录后查看个人排行榜哦~</p>'+
					'<a href="shihoutv://route?jump_type=120">立即登录 &gt;&gt;</a>'+
				'</div>'+
				'<!--已登录--->'+
				'<div class="Nenroll enroll login" id="loginYearYshb" style="display:none;">'+
					'<em></em>'+
					'<p></p>'+
					'<a><span class="sr"></span><span class="gx"></span></a>'+
				'</div>'+
				'<div class="phbList">'+
					'<ul id="phbYshb"></ul>'+
					'<a class="phbrule"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/phbrule2.jpg"/></a>'+
				'</div>'+
				'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box3img5.jpg"/>'+
			'</div>'+
		'</div>',
	//狂欢篇
	happyPage:
		'<div class="box">'+
			'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box4img1.jpg"/>'+
			'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box4img2.jpg"/>'+
			'<div class="boxImg">'+
				'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box4img3.jpg"/>'+
				'<ul class="carnival" id="happJxry">'+
				'</ul>'+
			'</div>'+
			'<div class="boxImg">'+
				'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box4img4.jpg"/>'+
				'<ul class="carnival" id="happDjdl">'+
				'</ul>'+
			'</div>'+
			'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box4img5.jpg"/>'+
			'<img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/box4img6.jpg"/>'+
		'</div>',
	//祝福篇
	blessing:'<div class="box zhufu">'+
			'<div class="zhufuRule"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/btnblessing.png"/></div>'+
			'<div class="boxImg headergu">'+
				'<img class="photo xin" src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/shi.png"/>'+
				'<img class="photo nian" src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/hou.png"/>'+
				'<img class="photo kuang" src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/zhu.png"/>'+
				'<img class="photo huan" src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/fu.png"/>'+
				'<img class="photo pa" src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/qiang.png"/>'+
			'</div>'+
			'<div class="commonMenu">'+
				'<div class="commonTab">'+
					'<a id="a_new" class="curr" data-category="1" data-pageNum="1">最新</a>'+
					'<a id="a_hot" data-category="2" data-pageNum="1">最热</a>'+
				'</div>'+
			'</div>'+
			'<div class="line">'+
				'<div class="lineCont">'+
					'<div class="nav">'+
						'<input type="text" placeholder="快来留言吧~" id="msg" />'+
						'<a class="spend" id="btnSend"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/spend.png" /></a>'+
					'</div>'+
					'<div class="listContent">'+
						'<ul class="list list1"></ul>'+
						'<ul class="list list2" style="display:none;"></ul>'+
					'</div>'+
					'<a class="more" data-type="1"><img src="http://resource.youxiduo.com/special/shihou/promoter/newyear/static/img/more.jpg"/></a>'+
				'</div>'+
			'</div>'+
		'</div>'
		
}