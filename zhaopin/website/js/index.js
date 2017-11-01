/*banner轮播*/
$(document).ready(function() {
            var length,
                    currentIndex = 0,
                    interval,
                    hasStarted = false, //是否已经开始轮播
                    t = 3000; //轮播时间间隔
            length = $('.slider-panel').length;
            //将除了第一张图片隐藏
            $('.slider-panel:not(:first)').hide();
            //将第一个slider-item设为激活状态
            $('.slider-item:first').addClass('slider-item-selected');
            //隐藏向前、向后翻按钮
            $('.slider-page').hide();
            //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
            $('.slider-panel, .slider-pre, .slider-next').hover(function() {
                stop();
                $('.slider-page').show();
            }, function() {
                $('.slider-page').hide();
                start();
            });
            $('.slider-item').hover(function(e) {
                stop();
                var preIndex = $(".slider-item").filter(".slider-item-selected").index();
                currentIndex = $(this).index();
                play(preIndex, currentIndex);
            }, function() {
                start();
            });
            $('.slider-pre').unbind('click');
            $('.slider-pre').bind('click', function() {
                pre();
            });
            $('.slider-next').unbind('click');
            $('.slider-next').bind('click', function() {
                next();
            });
            /**
             * 向前翻页
             */
            function pre() {
                var preIndex = currentIndex;
                currentIndex = (--currentIndex + length) % length;
                play(preIndex, currentIndex);
            }
            /**
             * 向后翻页
             */
            function next() {
                var preIndex = currentIndex;
                currentIndex = ++currentIndex % length;
                play(preIndex, currentIndex);
            }
            /**
             * 从preIndex页翻到currentIndex页
             * preIndex 整数，翻页的起始页
             * currentIndex 整数，翻到的那页
             */
            function play(preIndex, currentIndex) {
                $('.slider-panel').eq(preIndex).fadeOut(500)
                        .parent().children().eq(currentIndex).fadeIn(1000);
                $('.slider-item').removeClass('slider-item-selected');
                $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
            }
            /**
             * 开始轮播
             */
            function start() {
                if(!hasStarted) {
                    hasStarted = true;
                    interval = setInterval(next, t);
                }
            }
            /**
             * 停止轮播
             */
            function stop() {
                clearInterval(interval);
                hasStarted = false;
            }
            //开始轮播
            start();
            var tan2=$(".tan2");
            $(".pp2").click(function(){
               tan2.hide();
             });


            /*表单*/
            $("form :input.required").each(function(){
            var $required = $(); //创建元素
            $(this).parent().append($required); //然后将它追加到文档中
        });
         //文本框失去焦点后
        $('form :input').blur(function(){
             var $parent = $(this).parent();
             $parent.find(".formtips").remove();
             //验证姓名
             if( $(this).is('#yourname') ){
                    if( this.value==""){
//                        var errorMsg = '请输入姓名';
//						        $(".aaaaa").show();
						        $(this).css("border","solid red 1px");
						        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                    }else{
//                        var okMsg = '输入正确.';
						        $(this).css("border","solid #eee 1px");
                        $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                    }
             }
             //验证用户名
             if( $(this).is('#username') ){
                    if( this.value=="" || this.value.length < 4 ){
						 			$(this).css("border","solid red 1px");
//                        var errorMsg = '请输入4~20个字符';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                    }else{
									$(this).css("border","solid #eee 1px");
//                        var okMsg = '输入正确.';
                        $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                    }
             }
             //验证密码
             if( $(this).is('#password') ){
                if( this.value=="" || this.value.length < 6 ){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入6~20个字符.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
									$(this).css("border","solid #eee 1px");
//                      var okMsg = '输入正确.';
                      $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                }
             }
             /*确认密码*/
             
             if( $(this).is('#quere') ){
                var pass=$("#password");

                if( $(this).val() == pass.val()){
						 			$(this).css("border","solid #EEE 1px");
//                       var okMsg = '输入正确.';
                      $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                }else{
									$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入正确的密码.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }
             }
             /*公司名称*/
             if( $(this).is('#company') ){
                if( this.value=="" ){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入公司名称.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
									$(this).css("border","solid #eee 1px");
//                      var okMsg = '输入正确.';
                      $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                }
             }
             // 负责人
             if( $(this).is('#leading') ){
                if( this.value=="" ){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入负责人名称.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
									$(this).css("border","solid #eee 1px");
//                      var okMsg = '输入正确.';
                      $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                }
             }
             // 联系电话
             if( $(this).is('#qu') ){
                if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入联系电话.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else if(this.value.length<11 ||this.value.length>11){
						 			$(this).css("border","solid red 1px");
//                    var errorMsg = '请输入正确联系电话.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
									$(this).css("border","solid #eee 1px");
//                      var okMsg = '输入正确.';
//                      $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                }
             }
             // 手机号
             if( $(this).is('#tel') ){
                if( this.value==""){
						 			$(this).css("border","solid red 1px");
                      var errorMsg = '请输入手机号.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else if(this.value.length<11 ||this.value.length>11){
						 			$(this).css("border","solid red 1px");
                   var errorMsg = '请输入正确手机号.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
									$(this).css("border","solid #eee 1px");
                      var okMsg = '输入正确.';
                      $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                }
             }
             // 验证码
             if( $(this).is('#yanzheng') ){
                if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入验证码.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
					   $(this).css("border","solid #eee 1px");
				}
     
			 }
             // 短信验证码
             if( $(this).is('#duanxin') ){
                if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入验证码.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
					   $(this).css("border","solid #eee 1px");
				}
             }
             // 标题
             if( $(this).is('#btdang') ){
                if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入验证码.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
					   $(this).css("border","solid #eee 1px");
				}
             }
             // 周期
             if( $(this).is('#zhouqi') ){
                if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入验证码.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
					   $(this).css("border","solid #eee 1px");
				}
             }
             // 地点
             if( $(this).is('#didian') ){
                if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入验证码.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
					   $(this).css("border","solid #eee 1px");
				}
             }
             // 内容
             if( $(this).is('#xxjs') ){
                if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入验证码.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
					   $(this).css("border","solid #eee 1px");
				}
             }
             // 招聘人数
             if( $(this).is('#zprs') ){
                if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入验证码.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
					   $(this).css("border","solid #eee 1px");
				}
             }
             // 时间
             if( $(this).is('#shijian') ){
                if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入验证码.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
					   $(this).css("border","solid #eee 1px");
				}
             }
             // 最低工资
             if( $(this).is('#zdgz') ){
                if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入验证码.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
					   $(this).css("border","solid #eee 1px");
				}
             }
             // 最高工资
             if( $(this).is('#zggz') ){
                if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入验证码.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
					   $(this).css("border","solid #eee 1px");
				}
             }
             // 最低工资
             if( $(this).is('#zdnl2') ){
                if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入验证码.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
					   $(this).css("border","solid #eee 1px");
				}
             }
             // 最高工资
             if( $(this).is('#zgnl2') ){
                if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入验证码.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
					   $(this).css("border","solid #eee 1px");
				}
             }
             // 中介费
             if( $(this).is('#zjf') ){
                if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入验证码.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
					   $(this).css("border","solid #eee 1px");
				}
             }
             //微信
             if( $(this).is('#wx') ){
                    if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                        var errorMsg = '请输入微信或QQ账号';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                    }else{
									$(this).css("border","solid #eee 1px");
//                        var okMsg = '输入正确.';
                        $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                    }
             }
             //微信
             if( $(this).is('#qq') ){
                    if( this.value==""){
						 			$(this).css("border","solid red 1px");
//                        var errorMsg = '请输入微信或QQ账号';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                    }else{
									$(this).css("border","solid #eee 1px");
//                        var okMsg = '输入正确.';
                        $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                    }
             }
             // 推荐人
             if( $(this).is('#tuijian') ){
                if( this.value=="" ){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入推荐号.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
									$(this).css("border","solid #eee 1px");
//                      var okMsg = '输入正确.';
                      $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                }
             }
              if( $(this).is('#sfz') ){
                if( this.value=="" ){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入身份证号码.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
									$(this).css("border","solid #eee 1px");
//                      var okMsg = '输入正确.';
                      $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                }
             }
  					if( $(this).is('#czdd') ){
                if( this.value=="" ){
						 			$(this).css("border","solid red 1px");
//                      var errorMsg = '请输入常住地址.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
									$(this).css("border","solid #eee 1px");
//                      var okMsg = '输入正确.';
                      $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                }
             }
             
             
             
        }).keyup(function(){
           $(this).triggerHandler("blur");
        }).focus(function(){
             $(this).triggerHandler("blur");
        });//end blur

        
        //提交，最终验证。
         $('#send').click(function(){
                $("form :input.required").trigger('blur');
                var numError = $('form .onError').length;
                if(numError){
                    return false;
                } 
                alert("注册成功,密码已发到你的邮箱,请查收.");
         });
         $('#send1').click(function(){
                $("form :input.required").trigger('blur');
                var numError = $('form .onError').length;
                if(numError){
                    return false;
                } 
                alert("报名成功,密码已发到你的邮箱,请查收.");
         });
         $('#send2').click(function(){
                $("form :input.required").trigger('blur');
                var numError = $('form .onError').length;
                if(numError){
                    return false;
                } 
                alert("报名成功,密码已发到你的邮箱,请查收.");
         });
         $('#fbcg').click(function(){
                $("form :input.required").trigger('blur');
                var numError = $('form .onError').length;
                if(numError){
                    return false;
                } 
                alert("发布成功");
         });
         $('#fbcg1').click(function(){
                $("form :input.required").trigger('blur');
                var numError = $('form .onError').length;
                if(numError){
                    return false;
                } 
                alert("发布成功");
         });
         $(".shenf").click(function(){
                $(".shangc").show();
                $(".yinhang").hide();
                $(".mima-xg").show();
                $(".mima-zh").hide();
                $(".bd-img").css("left","0")
            })
            $(".yinh").click(function(){
                $(".yinhang").show();
                $(".shangc").hide();
                $(".mima-zh").show();
                $(".mima-xg").hide();
                $(".bd-img").css("left","120px")
            })
            $(".gl-btn").click(function(){
                $(".gl-zj").show();
            })
             
        });
//图片上传预览    IE是用了滤镜。
        function previewImage(file)
        {
          var MAXWIDTH  = 100; 
          var MAXHEIGHT = 100;
          var div = document.getElementById('preview');
          var div2 = document.getElementById('preview2');
          if (file.files && file.files[0])
          {
              div.innerHTML ='<img id=imghead onclick=$("#previewImg").click()>';
              var img = document.getElementById('imghead');
              img.onload = function(){
                var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                img.width  =  rect.width;
                img.height =  rect.height;
//                 img.style.marginLeft = rect.left+'px';
//                img.style.marginTop = rect.top+'px';
              }
              var reader = new FileReader();
              reader.onload = function(evt){img.src = evt.target.result;}
              reader.readAsDataURL(file.files[0]);
          }
          else //兼容IE
          {
            var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
            file.select();
            var src = document.selection.createRange().text;
            div.innerHTML = '<img id=imghead>';
            var img = document.getElementById('imghead');
            img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
            var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
            status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
            div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
          }
        }
        function previewImage2(file)
        {
          var MAXWIDTH  = 100; 
          var MAXHEIGHT = 100;
          var div2 = document.getElementById('preview2');
          
          if (file.files && file.files[0])
          {
              div2.innerHTML ='<img id=imghead2 onclick=$("#previewImg2").click()>';
              var img2 = document.getElementById('imghead2');
              img2.onload = function(){
                var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img2.offsetWidth, img2.offsetHeight);
                img2.width  =  rect.width;
                img2.height =  rect.height;
//                 img.style.marginLeft = rect.left+'px';
                img2.style.marginTop = rect.top+'px';
              }
              var reader = new FileReader();
              reader.onload = function(evt){img2.src = evt.target.result;}
              reader.readAsDataURL(file.files[0]);
          }
          else //兼容IE
          {
            var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
            file.select();
            var src = document.selection.createRange().text;
            div2.innerHTML = '<img id=imghead2>';
            var img = document.getElementById('imghead2');
            img2.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
            var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img2.offsetWidth, img2.offsetHeight);
            status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
            div2.innerHTML = "<div id=divhead2 style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
          }
        }
        function clacImgZoomParam( maxWidth, maxHeight, width, height ){
            var param = {top:0, left:0, width:width, height:height};
            if( width>maxWidth || height>maxHeight ){
                rateWidth = width / maxWidth;
                rateHeight = height / maxHeight;
                
                if( rateWidth > rateHeight ){
                    param.width =  maxWidth;
                    param.height = Math.round(height / rateWidth);
                }else{
                    param.width = Math.round(width / rateHeight);
                    param.height = maxHeight;
                }
            }
            param.left = Math.round((maxWidth - param.width) / 2);
            param.top = Math.round((maxHeight - param.height) / 2);
            return param;
        }
        // 增值服务
        $(function(){
          $(".zz-bl").click(function(){
          $(".bx-tanchuk").show();
        })
        $(".tc-h img").click(function(){
          $(".bx-tanchuk").hide();
        })
        $(".zz-b2").click(function(){
          $(".zs-tanchuk").show();
        })
        $(".tc-h img").click(function(){
          $(".zs-tanchuk").hide();
        })
        $(".zz-b3").click(function(){
          $(".xy-tanchuk").show();
        })
        $(".tc-h img").click(function(){
          $(".xy-tanchuk").hide();
        })
        })

        // 职位发布
        // //图片上传预览    IE是用了滤镜。
        function previewImage(file)
        {
          var MAXWIDTH  = 100; 
          var MAXHEIGHT = 100;
          var div = document.getElementById('preview');
          if (file.files && file.files[0])
          {
              div.innerHTML ='<img id=imghead onclick=$("#previewImg").click()>';
              var img = document.getElementById('imghead');
              img.onload = function(){
                var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                img.width  =  rect.width;
                img.height =  rect.height;
//                 img.style.marginLeft = rect.left+'px';
//                img.style.marginTop = rect.top+'px';
              }
              var reader = new FileReader();
              reader.onload = function(evt){img.src = evt.target.result;}
              reader.readAsDataURL(file.files[0]);
          }
          else //兼容IE
          {
            var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
            file.select();
            var src = document.selection.createRange().text;
            div.innerHTML = '<img id=imghead>';
            var img = document.getElementById('imghead');
            img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
            var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
            status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
            div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
          }
        }
        function previewImage1(file)
        {
          var MAXWIDTH  =100; 
          var MAXHEIGHT = 100;
          var div = document.getElementById('preview1');
          if (file.files && file.files[0])
          {
              div.innerHTML ='<img id=imghead1 onclick=$("#previewImg1").click()>';
              var img = document.getElementById('imghead1');
              img.onload = function(){
                var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                img.width  =  rect.width;
                img.height =  rect.height;
//                 img.style.marginLeft = rect.left+'px';
//                img.style.marginTop = rect.top+'px';
              }
              var reader = new FileReader();
              reader.onload = function(evt){img.src = evt.target.result;}
              reader.readAsDataURL(file.files[0]);
          }
          else //兼容IE
          {
            var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
            file.select();
            var src = document.selection.createRange().text;
            div.innerHTML = '<img id=imghead1>';
            var img = document.getElementById('imghead1');
            img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
            var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
            status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
            div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
          }
        }
        function previewImage2(file)
        {
          var MAXWIDTH  = 100; 
          var MAXHEIGHT = 100;
          var div = document.getElementById('preview2');
          if (file.files && file.files[0])
          {
              div.innerHTML ='<img id=imghead2 onclick=$("#previewImg2").click()>';
              var img = document.getElementById('imghead2');
              img.onload = function(){
                var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                img.width  =  rect.width;
                img.height =  rect.height;
//                 img.style.marginLeft = rect.left+'px';
//                img.style.marginTop = rect.top+'px';
              }
              var reader = new FileReader();
              reader.onload = function(evt){img.src = evt.target.result;}
              reader.readAsDataURL(file.files[0]);
          }
          else //兼容IE
          {
            var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
            file.select();
            var src = document.selection.createRange().text;
            div.innerHTML = '<img id=imghead2>';
            var img = document.getElementById('imghead2');
            img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
            var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
            status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
            div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
          }
        }
        $(function(){
         $(".suoyouzhiwei16").click(function(){
           $(this).toggleClass("suoyouzhiwei16-1").parent().next().toggle();
           ;
         })
         $(".qx").click(function () {
        if ($(this).prop("checked") == true) {
            $("input[type='checkbox']").prop("checked", true);
        }
        else {
            $("input[type='checkbox']").prop('checked',false);
     }
    });
    $(".qx1").click(function () {
        if ($(this).prop("checked") == true) {
            $(".xz1").prop("checked", true);
        }
        else {
            $(".xz1").prop('checked',false);
     }
    });
        })

