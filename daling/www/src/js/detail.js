/*ajax请求商品详情*/
$(function(){
	$.ajax({
		url:'../json/detail.json',
		type:'get',
		datatype:'json'
	}).done(function(data){
		for(var i = 0;i < data.length;i++){
			var str = '<li class="'+data[i].class+'"><a href="javascript:;" class="cover-img" style="background-image: url('+data[i].img+')"></a><p class="goods-price">'+data[i].price+'<span class="old-price">'+data[i].old+'</span></p><p class="goods-title">'+data[i].title+'</p></li>'
			$('.detail-sidebar ul').append(str);
		}
		var $li = $('.sidebuy li');

	}).fail(function(){
		console.log(1);
	});
})

/*放大镜效果*/
$(function(){
		var $move = $('.good-img').find('.move');
		var $box = $('.good-img').next() ;
		var $img = $($box).find('img');
	$('.good-img').mousemove(function(ev){
		var $h = $(window).scrollTop();
		var ev = ev || window.event;
		$($move).show();
		$($box).show();
		var l = ev.clientX - $(this).offset().left-($($move).width())/2;
		//console.log(l);
		var t = (ev.clientY+$h) - $(this).offset().top-($($move).height())/2;
		//console.log(t);
		//console.log($(this).offset().top);
		if(l < 0){
			l = 0;
		}else if(l > $(this).width()-$($move).width()){
			l = $(this).width()-$($move).width();
		}
		if(t < 0){
			t = 0;
		}else if(t > $(this).height() - $($move).height()){
			t = $(this).height() - $($move).height();
		}
		$($move).css({
			'top':t+'px',
			'left':l+'px'
		})
		//通过比例计算
		$($img).css({
			'left': -(l * $box.width() / $(this).width()),
			'top': -(t * $box.height() / $(this).height())
		})
	})
	$('.good-img').mouseout(function(){
		$($move).hide();
		$($box).hide();
	})
})
/*购物车部分*/
$(function(){
	var count = 2;
	$('.ico-up').on('click',function(){
		count++;
		$('.num').val(count);
	})
	$('.ico-down').on('click',function(){
		count--;
		if(count < 2){
			count = 1;
		}
		$('.num').val(count);
	})
	//$('.num').val(count);
	
})

/*tab商品切换*/
