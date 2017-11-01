$(function(){
	/*设置遮罩层的高度*/
	$(".chazhao-select-bg").height($(document).height());
	/*关闭遮罩层*/
	function bghide(){
		$(".chazhao-select-bg").hide();
	}
	$(".select-close").click(bghide);
	$(".btn-close").click(bghide);
	/*开启遮罩层*/
	$(".task_xuanze_one_left3").click(function(){
		$(".chazhao-select-bg").show();		
	})
	/*选项切换*/
	$(".select-boy-left li").click(function(){
		$(this).siblings().removeClass('activeli');
		$(this).addClass("activeli");
		var index=$(this).index();
		$(".select-right-item").eq(index).show().siblings().hide();
	})
	/*添加选项*/
	var arr=[];
	$(".select-right-item span").click(function(){
		if(arr.length==5)
		{
			return
		}
		if(!$(this).hasClass('colorclass'))
		{
			$(this).addClass('colorclass');
			arr.push($(this));
			$(".select-content").html('');
			arr.map(function(item){
				$(".select-content").append("<div class='item'><div class='pox'>"+
					$(item).text()+"</div><span class='item-close'></span></div>");
			})
			$(".select-content .item-close").on("click",function(){
				$(this).parent().remove();
				var ht=$(this).siblings().html();
				for(var i=0;i<arr.length;i++)
				{
					if(arr[i][0].innerHTML==ht)
					{
						arr.splice(arr.indexOf(arr[i]),1);
					}
				}
				$(".select-right-item span:contains('"+ht+"')").removeClass("colorclass");
			})		
		}

	})
	/*确定*/
	$(".btn-ok").click(function(){
		bghide();
		 var input_text="";
		 for(var i=0;i<arr.length;i++)
		 {
			input_text+="   "+arr[i][0].innerHTML;
		 }
		 $("#input-sele").text(input_text);
	})


})