
/*侧边栏效果*/
//同一个元素绑定多个事件，使用on的链式操作
/*$("p").on({

    mouseover:function(){$("body").css("background-color","lightgray");},  

    mouseout:function(){$("body").css("background-color","lightblue");}, 

    click:function(){$("body").css("background-color","yellow");}  

  });*/
$(function(){
	$('.backtop').fadeOut();
	/*$('.shopcar').hover(function(){
		$(this).css('background','#e34755');
		$(this).children('.cut-line').css('visibility','hidden');
	},function(){
		$(this).css('background','#333');
		$(this).children('.cut-line').css('visibility','visible');
	})*/
	var flag = false;
	$('.shopcar').on('mouseover',function(){
		$(this).css('background','#e34755');
		$(this).children('.cut-line').css('visibility','hidden');
	}).on('mouseout',function(){
		$(this).css('background','#333')
		$(this).children('.cut-line').css('visibility','visible');
	}).on('click',function(){
		if($('#sidebar').width() < 320){
			$('.cart-toggle').css('display','block').siblings('.show').css('display','none');
			$('#sidebar').animate({'width':320},500,function(){
				$('.sidebar-data .close').css('display','block');
			})
		}else{
			//判断如果显示的是当前点击的对象则关闭侧边栏。
			//如果显示的是其他对象则让当前点击的对象显示其他消失

		}
	});
	$('.discount').click(function(){
		
	})
	$('.discount,.collect').hover(function(){
		$(this).css('background','#e34755');
		$(this).find('.pop').css('display','block');
	},function(){
		$(this).css('background','#333');
		$(this).find('.pop').css('display','none');
	})
	$(window).scroll(function(){
		var t = $(this).scrollTop();
		if(t > 1000){
			$('.backtop').fadeIn();
		}else{
			$('.backtop').fadeOut();
		}
	})
	$('.backtop').click(function(){
		$('html,body').animate({'scrollTop':0},1000);
	})
	/*侧边栏弹出*/
})