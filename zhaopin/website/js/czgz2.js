$(function(){
	/*设置遮罩层的高度*/
	$(".chazhao-select-bg2").height($(document).height());
	/*关闭遮罩层*/
	function bghide(){
		$(".chazhao-select-bg2").hide();
	}
	$(".select-close2").click(bghide);
	$(".btn-close2").click(bghide);
	/*开启遮罩层*/
	$(".task_xuanze_one_right3").click(function(){
		$(".chazhao-select-bg2").show();		
	})
	/*选项切换*/
	$(".select-boy-left2 li").click(function(){
		$(this).siblings().removeClass('activeli2');
		$(this).addClass("activeli2");
		var index=$(this).index();
		$(".select-right-item2").eq(index).show().siblings().hide();
	})
	/*添加选项*/
	var arr=[];
	$(".select-right-item2 span").click(function(){
		if(arr.length==5)
		{
			return
		}
		if(!$(this).hasClass('colorclass'))
		{
			$(this).addClass('colorclass');
			arr.push($(this));
			$(".select-content2").html('');
			arr.map(function(item){
				$(".select-content2").append("<div class='item2'><div class='pox2'>"+
					$(item).text()+"</div><span class='item-close2'></span></div>");
			})
			$(".select-content2 .item-close2").on("click",function(){
				$(this).parent().remove();
				var ht=$(this).siblings().html();
				for(var i=0;i<arr.length;i++)
				{
					if(arr[i][0].innerHTML==ht)
					{
						arr.splice(arr.indexOf(arr[i]),1);
					}
				}
				$(".select-right-item2 span:contains('"+ht+"')").removeClass("colorclass");
			})		
		}

	})
	/*确定*/
	$(".btn-ok2").click(function(){
		bghide();
		 var input_text="";
		 for(var i=0;i<arr.length;i++){
			input_text+="   "+arr[i][0].innerHTML;
		 }
		 $("#input-sele2").text(input_text);
	})


})
