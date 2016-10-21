
/*侧边栏效果*/
//同一个元素绑定多个事件，使用on的链式操作

$(function(){
	function toggle(obj){		//侧边栏缩进效果封装
			if($('#sidebar').width() < 320){
			$(obj).css('display','block').siblings('.show').css('display','none');
			$('#sidebar').animate({'width':320},500,function(){
				$('.sidebar-data .close').show();
			})
		}else{
			//判断如果显示的是当前点击的对象则关闭侧边栏。
			if($(obj).is(':hidden')){
				$(obj).css('display','block').siblings('.show').css('display','none');
			}else{
				$('#sidebar').animate({'width':40},500,function(){
					$('.show').css('display','none');
					$('.sidebar-data .close').hide();
				})
			}
			//如果显示的是其他对象则让当前点击的对象显示其他消失
		}
	}
	$('.backtop').fadeOut();
	/*$('.shopcar').hover(function(){
		$(this).css('background','#e34755');
		$(this).children('.cut-line').css('visibility','hidden');
	},function(){
		$(this).css('background','#333');
		$(this).children('.cut-line').css('visibility','visible');
	})*/
	//$('.show').css('display','none');
	$('.shopcar').on('mouseover',function(){
		$(this).css('background','#e34755');
		$(this).children('.cut-line').css('visibility','hidden');
	}).on('mouseout',function(){
		$(this).css('background','#333')
		$(this).children('.cut-line').css('visibility','visible');
	}).on('click',function(){
		toggle('.cart-toggle');
	});
	
	$('.discount').click(function(){
		toggle('.money-toggle');
	})

	$('.collect').click(function(){
		toggle('.collect-toggle');
	})
	$('.sidebar-data .close').click(function(){
		$('#sidebar').animate({'width':40},500);
		$(this).css('display','none');
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