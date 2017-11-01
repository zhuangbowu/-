//	进程条点击事件
	$('.process-box .queding-one').click(function(){
		$(this).siblings(".process").children("li:eq(6)").children("div").animate({"width":"25px"},"4000ms");
		$(this).siblings(".process").children("li:eq(6)").css("border","2px solid #1fbbee");
	})
	$('.process-box .queding-two').click(function(){
		$(this).siblings(".process").children("li:eq(10)").children("div").animate({"width":"25px"},"4000ms");
		$(this).siblings(".process").children("li:eq(10)").css("border","2px solid #1fbbee");
	})
	$('.process-box .queding-three').click(function(){
		$(this).siblings(".process").children("li:eq(12)").children("div").animate({"width":"25px"},"4000ms");
		$(this).siblings(".process").children("li:eq(12)").css("border","2px solid #1fbbee");
	})
	$('.process-box .queding-four').click(function(){
		$(this).siblings(".process").children("li:eq(14)").children("div").animate({"width":"25px"},"4000ms");
		$(this).siblings(".process").children("li:eq(14)").css("border","2px solid #1fbbee");
	})
	$('.process-box .queding-five').click(function(){
		$(this).siblings(".process").children("li:eq(16)").children("div").animate({"width":"25px"},"4000ms");
		$(this).siblings(".process").children("li:eq(16)").css("border","2px solid #1fbbee");
	})
	$('.qued').click(function(){
		$('.process li:eq(0)').css({"border":"2px solid #1fbbee","background-color":"#1fbbee"});
	})
	$('.process-kaoshi').mouseover(function(){
		$('.process-tz').css("display","block");
	})
	$('.process-kaoshi').mouseleave(function(){
		$('.process-tz').css("display","none");
	})
	$('.process-kaoshi2').mouseover(function(){
		$('.process-tz2').css("display","block");
	})
	$('.process-kaoshi2').mouseleave(function(){
		$('.process-tz2').css("display","none");
	})
//	考核点击事件
	$('.process li:eq(8)').click(function(){
//		$(this).children("div").animate({"width":"70px"},"8000ms");
//		$(this).css("border","2px solid #1fbbee");
		$('.kaoshijieguo').show();
	})
	$('.kaoshijieguo-conter p span img,.kaoshijieguo-button button:eq(1)').click(function(){
//		$(this).children("div").animate({"width":"70px"},"8000ms");
//		$(this).css("border","2px solid #1fbbee");
		$('.kaoshijieguo').hide();
	})
	$('.kaoshijieguo-button button:eq(0)').click(function(){
		$('.kaoshijieguo').hide();
		$(".process li:eq(8)").children("div").animate({"width":"50px"},"8000ms");
		$(".process li:eq(8)").css("border","2px solid #1fbbee");
	})
$('.jianlihege').click(function(){
	$('.jianlichakan').show();
})
$('.jianlichakan3').click(function(){
	$('.jianlichakan').hide();
})
$('.tzks').click(function(){
	$('#ks').show();
})
$('#ksgb,#ksgb2').click(function(){
	$('#ks').hide();
})
$('.tzqz').click(function(){
	$('#qz').show();
})
$('#qzgb,#qzgb2').click(function(){
	$('#qz').hide();
})
$('.tzgp').click(function(){
	$('#gp').show();
})
$('#gpgb,#gpgb2').click(function(){
	$('#gp').hide();
})
$('.tzcj').click(function(){
	$('#cj').show();
})
$('#cjgb,#cjgb2').click(function(){
	$('#cj').hide();
})
$('.ul1 li').eq(0).click(function(){
	$('.ul1').children('li').removeClass('ul1-l');
	$(this).addClass("ul1-l")
	$('.dadeneir').children('.lihaile').css("display","none");
	$('.dadeneir .lihaile').eq(0).css("display","block");
});
$('.ul1 li').eq(1).click(function(){
	$('.ul1').children('li').removeClass('ul1-l');
	$(this).addClass("ul1-l")
	$('.dadeneir').children('.lihaile').css("display","none");
	$('.dadeneir .lihaile').eq(1).css("display","block");
});
$('.ul1 li').eq(2).click(function(){
	$('.ul1').children('li').removeClass('ul1-l');
	$(this).addClass("ul1-l")
	$('.dadeneir').children('.lihaile').css("display","none");
	$('.dadeneir .lihaile').eq(2).css("display","block");
});
$('.ul1 li').eq(3).click(function(){
	$('.ul1').children('li').removeClass('ul1-l');
	$(this).addClass("ul1-l")
	$('.dadeneir').children('.lihaile').css("display","none");
	$('.dadeneir .lihaile').eq(3).css("display","block");
});
$('.ul1 li').eq(4).click(function(){
	$('.ul1').children('li').removeClass('ul1-l');
	$(this).addClass("ul1-l")
	$('.dadeneir').children('.lihaile').css("display","none");
	$('.dadeneir .lihaile').eq(4).css("display","block");
});
$('.ul1 li').eq(5).click(function(){
	$('.ul1').children('li').removeClass('ul1-l');
	$(this).addClass("ul1-l")
	$('.dadeneir').children('.lihaile').css("display","none");
	$('.dadeneir .lihaile').eq(5).css("display","block");
});
$('.ul1 li').eq(6).click(function(){
	$('.ul1').children('li').removeClass('ul1-l');
	$(this).addClass("ul1-l")
	$('.dadeneir').children('.lihaile').css("display","none");
	$('.dadeneir .lihaile').eq(6).css("display","block");
});