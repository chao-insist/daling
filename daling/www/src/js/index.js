
$(function(){
	$('.close').click(function(){
		$(this).parent('.tip').css('display','none');
	})
	$('.drop-down').hover(function(){
		$(this).children('.da-code').toggle();
	})
})

/*楼梯*/
$(window).scroll(function(){
	if($(this).scrollTop() > 700){
		$('.staire').fadeIn();
	}else{
		$('.staire').fadeOut();
	}
})
$('.staire li').click(function(){
	$('.staire li').find('span').removeClass('active');
	$(this).find('span').addClass('active');
	var $index = $(this).index();
	var $top = $('.staires').eq($index).offset().top;
	$('html,body').stop().animate({scrollTop:$top},1000);
})


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
	$('.shopcarer').on('mouseover',function(){
		$(this).css('background','#e34755');
		$(this).children('.cut-line').css('visibility','hidden');
	}).on('mouseout',function(){
		$(this).css('background','#333')
		$(this).children('.cut-line').css('visibility','visible');
	}).on('click',function(){
		toggle('.cart-toggle');
	});
	
	$('.discounter').click(function(){
		toggle('.money-toggle');
	})

	$('.collector').click(function(){
		toggle('.collect-toggle');
	})
	$('.sidebar-data .close').click(function(){
		$('#sidebar').animate({'width':40},500);
		$(this).css('display','none');
	})
	$('.discounter,.collector').hover(function(){
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
})

/*二级导航*/

$(function(){
	$('.clasify').hover(function(){
	$('.icon-up').css('display','none').siblings().css('display','block');
	$('.dd').css('display','block');
},function(){
	$('.icon-down').css('display','none').siblings().css('display','block');
	$('.dd').css('display','none');
})
	$('.nav .dd-left').hover(function(){
		$(this).children('.pop').css('display','block');
		$(this).children('.block').css('display','block');
		$(this).css({
			'background-color':'#fff',
			'border-color':'#654579',
		})
	},function(){
		$(this).children('.pop').css('display','none');
		$(this).children('.block').css('display','none');
		$(this).css({
			'background-color':'#e8e3eb',
			'border-color':'#e8e3eb'
		})
	})
	$('.dd-left .pop').each(function(i){
		$(this).css('top',-(120*i));
	})
})

/*轮播图*/
$(function(){
	var $index = 0;
	var timer = null;
	function play(){
		$('.slide li').eq($index).stop().animate({'display':'block','opacity':1}).siblings().stop().animate({'display':'none','opacity':0});
		$('.page li').eq($index).addClass('on').siblings().removeClass('on');
	}
	$('.slide').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
		$index++;
			if($index > 2){
				$index = 0;
			}
		play();
		},1000);
	})
	$('.page li').on('click',function(){
		$index = $(this).index();
		play();
	})
	timer = setInterval(function(){
		$index++;
		if($index > 2){
			$index = 0;
		}
		play();
	},3000);
})

/*今日上新tab切换*/
$(function(){
	var flag = false;
	$('.change').on('click',function(){
		if(flag == false){
			$('.ul1,.ul1-1').hide();
			$('.ul2,.ul2-1').show();
			flag = true;	
		}else{
			$('.ul2,.ul2-1').hide();
			$('.ul1,.ul1-1').show();
			flag = false;
		}
		
	})
	$('.new-box ul li').hover(function(){
		$(this).find('.add').show();
	},function(){
		$(this).find('.add').hide();
	})
})

/*手风琴效果*/
$(function(){
	$('.buy-list dd').hover(function(){
		//console.log($('.buy-list dd').size());
		$(this).removeClass('ex-first').addClass('first').siblings('dd').removeClass('first').addClass('ex-first');
	}/*,function(){
		//console.log($('.buy-list dl dd:first').size());
	}*/)
})
/*倒计时*/
$(function(){
	function double(v){
		return v < 10 ? '0'+ v : v;
	}
	show_time();
	setInterval(show_time,1000);
	function show_time(){
		var time_start = new Date().getTime();//设定当前时间
		var time_end = new Date('2016/11/11 00:00:00').getTime();//设定目标时间
		//计算时间差
		var time_distance = time_end - time_start;
		//时
		var time_hour = Math.floor(time_distance/3600000);
		time_distance -= time_hour*3600000;
		//分
		var time_min = Math.floor(time_distance/60000);
		time_distance -= time_min*60000;
		//秒
		var time_sec = Math.floor(time_distance/1000);
		//显示时间
		$('.time_hour').text(double(time_hour));
		$('.time_min').text(double(time_min));
		$('.time_sec').text(double(time_sec));

	}
	$('.sidebar-data .cart-list .cover').css('background-image','url(img/14367677109668.jpg)');
})
$(function(){
	var count = 0;
	$('.btn-reduce').click(function(){
		count--;
		if(count <=0){
			count = 0;
		}
		$('.num-text').val(count);
		getTotal();
		//getCount();
	})
	$('.btn-add').click(function(){
		count++;
		$('.num-text').val(count);
		getTotal();
		//getCount();
	})
	$('.detach').click(function(){
		$('.sidebar-data .cart-table').css('background','url(img/cart_mini_empty.png) no-repeat center 46px');
		$('.cart-bar').css('display','none');
		$.cookie('good',null,{expires:-1,path:'/'});
	})
	$('.sidebar-data .count').html($('.cart-list').length);
	function getTotal(){
		$('.sidebar-data .total,.sidebar-data .redal').html(parseInt($('.sidebar-data .price').html()*$('.num-text').val()).toFixed(2));
		//console.log($('.sidebar-data .price').html())
		$('.sidebar-data .count').html($('.num-text').val());
	}
	/*function getCount(){

	}*/
})