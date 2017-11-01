//返回顶部
$(window).scroll(function() {
	var docT = $(document).scrollTop();
	if(docT > 0) {
		$(".fan").fadeIn();
	} else {
		$(".fan").fadeOut();
	}
});
$(".fan").click(function() {
	$("html,body").animate({
		"scrollTop": "0px"
	}, 500)
})
//选项卡
//$(".zw-list02 li").click(function(){
//	$(this).addClass("active").siblings().removeClass("active");
////	var i=$(this).index();
////	$(".wrapper>.children").eq(i).show().siblings().hide();
////	$(".con_fixed .fixed").eq(i).show().siblings().hide();
//})

//点击显示隐藏
$(".imgage01").click(function() {
	$(this).siblings(".imgage01-1").show();
})
$(".imgage01-1").click(function() {
	$(this).hide().siblings(".imgage01").show();
})

$(".imgage02").click(function() {
	$(this).siblings(".imgage02-1").show();
})
$(".imgage02-1").click(function() {
	$(this).hide().siblings(".imgage02").show();
})

$(".imgage03").click(function() {
	$(this).siblings(".imgage03-1").show();
})
$(".imgage03-1").click(function() {
	$(this).hide().siblings(".imgage03").show();
})

$(".imgage04").click(function() {
	$(this).siblings(".imgage04-1").show();
})
$(".imgage04-1").click(function() {
	$(this).hide().siblings(".imgage04").show();
})
//招聘中
//点击下拉显示
$(".click").click(function() {
	$(".hidden").toggle();
})

$(".click01").click(function() {
	$(".hidden01").toggle();
})
$(".click02").click(function() {
	$(".hidden02").toggle();
})
$(".click03").click(function() {
	$(".hidden03").toggle();
})
$(".click04").click(function() {
	$(".hidden04").toggle();
})
//待查看
//点击下拉显示

$(".on").click(function() {
	$(".hide").toggle();
})

$(".on01").click(function() {
	$(".hide01").toggle();
})

$(".on02").click(function() {
	$(".hide02").toggle();
})

$(".on03").click(function() {
	$(".hide03").toggle();
})
$(".on04").click(function() {
	$(".hide04").toggle();
})

// 职位发布
// //图片上传预览    IE是用了滤镜。
function previewImage(file) {
	var MAXWIDTH = 90;
	var MAXHEIGHT = 90;
	var div = document.getElementById('preview');
	if(file.files && file.files[0]) {
		div.innerHTML = '<img id=imghead onclick=$("#previewImg").click()>';
		var img = document.getElementById('imghead');
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = rect.width;
			img.height = rect.height;
			//                 img.style.marginLeft = rect.left+'px';
			img.style.marginTop = rect.top + 'px';
		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
	} else //兼容IE
	{
		var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
		file.select();
		var src = document.selection.createRange().text;
		div.innerHTML = '<img id=imghead>';
		var img = document.getElementById('imghead');
		img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
		var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
		status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
		div.innerHTML = "<div id=divhead style='width:" + rect.width + "px;height:" + rect.height + "px;margin-top:" + rect.top + "px;" + sFilter + src + "\"'></div>";
	}
}

function previewImage1(file) {
	var MAXWIDTH = 90;
	var MAXHEIGHT = 90;
	var div = document.getElementById('preview1');
	if(file.files && file.files[0]) {
		div.innerHTML = '<img id=imghead1 onclick=$("#previewImg1").click()>';
		var img = document.getElementById('imghead1');
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = rect.width;
			img.height = rect.height;
			//                 img.style.marginLeft = rect.left+'px';
			img.style.marginTop = rect.top + 'px';
		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
	} else //兼容IE
	{
		var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
		file.select();
		var src = document.selection.createRange().text;
		div.innerHTML = '<img id=imghead1>';
		var img = document.getElementById('imghead1');
		img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
		var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
		status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
		div.innerHTML = "<div id=divhead style='width:" + rect.width + "px;height:" + rect.height + "px;margin-top:" + rect.top + "px;" + sFilter + src + "\"'></div>";
	}
}

function previewImage2(file) {
	var MAXWIDTH = 90;
	var MAXHEIGHT = 90;
	var div = document.getElementById('preview2');
	if(file.files && file.files[0]) {
		div.innerHTML = '<img id=imghead2 onclick=$("#previewImg2").click()>';
		var img = document.getElementById('imghead2');
		img.onload = function() {
			var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
			img.width = rect.width;
			img.height = rect.height;
			//                 img.style.marginLeft = rect.left+'px';
			img.style.marginTop = rect.top + 'px';
		}
		var reader = new FileReader();
		reader.onload = function(evt) {
			img.src = evt.target.result;
		}
		reader.readAsDataURL(file.files[0]);
	} else //兼容IE
	{
		var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
		file.select();
		var src = document.selection.createRange().text;
		div.innerHTML = '<img id=imghead2>';
		var img = document.getElementById('imghead2');
		img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
		var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
		status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
		div.innerHTML = "<div id=divhead style='width:" + rect.width + "px;height:" + rect.height + "px;margin-top:" + rect.top + "px;" + sFilter + src + "\"'></div>";
	}s
}
$(function() {
	$(".zhiwei_suoyouzhiwei18").click(function() {
		$(this).toggleClass("zhiwei_suoyouzhiwei18-1").parent().next().toggle();;
	})
	$(".qx").click(function() {
		if($(this).prop("checked") == true) {
			$("input[type='checkbox']").prop("checked", true);
		} else {
			$("input[type='checkbox']").prop('checked', false);
		}
	});
	$(".qx1").click(function() {
		if($(this).prop("checked") == true) {
			$(".xz1").prop("checked", true);
		} else {
			$(".xz1").prop('checked', false);
		}
	});
})