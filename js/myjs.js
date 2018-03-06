$(function(){

	//wow
	var wow = new WOW({
			boxClass:     'wow',       //动画元素的CSS类 (默认类名 wow)
			animateClass: 'animated',    //动画CSS类 (默认类名 animated)
			offset:       200,         //距离可视区域多少开始执行动画(默认值 0)
			mobile:       true,        //是否在移动设备上执行动画(默认值 true)
	});
	wow.init();	
	//scrollrover
	var config = {
		reset             : true,         //鼠标滚动时，动画开关  默认false关闭
		origin            : "bottom" ,     //动画开始的方向
		duration          :1000,		   //动画持续时间
		delay             :0,			   //延迟
		rotate            :{ x:0, y:90, z:0 },       //过渡到0 的初始角度
		opacity           :0,                         //初始透明度
		scale             :0.5                        //缩放
	};
	window.sr = ScrollReveal();
	sr.reveal('.box',config);
	
	//爆炸焦点图
	$('.banners').bomb({
		col:5, 
		row:5 
	});
	
	
	
	//导航
	
	$('.head .ul_banxin li').click(function(e) {
        var index = $(this).index();
		var top = $('body>section').eq(index).offset().top;
		$('html,body').animate({scrollTop:top-90});
    });
})
	//音乐
$('#music').click(function(){var audio=$('audio').get(0);if(audio.paused){audio.play();$(this).css('animation-play-state','running')}else{audio.pause();$(this).css('animation-play-state','paused')}});

















