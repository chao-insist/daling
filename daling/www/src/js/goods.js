$(function(){

	$('li .sort').click(function(){
		$(this).find('.drop').toggle();
	})
	$('.drop li').click(function(){
		$(this).parents('.drop').siblings('.sort-name').html($(this).html());
	})

	$.ajax({
		url:'../json/goods.json',
		type:'get',
		datatype:'json'
	}).done(function(data){
		for(var i = 0;i < 12;i++){
			var goods = '<li><a href="javascript:;" class="cover-img" style="background-image: url('+data[i].img+')"></a><div class="data"><p class="price"><span class="redal">￥</span><span class="now-price">'+data[i].price+'</span><span class="old-price">'+data[i].old+'</span></p><p class="title"><span class="discount">'+data[i].discount+'折/</span><a href="javascript:;">'+data[i].title+'</a></p><p class="function">'+data[i].collect+'人收藏<span class="line">|</span>'+data[i].comment+'条评论</p></div></li>';
			$('.searchlist ul').append(goods);
		};
		var i = 12;
		$(window).scroll(function(){
			var $wh = $(this).height();
			var $t = $(this).scrollTop();
			var $top = $('.searchlist').offset().top;
			var $hei = $('.searchlist li').height() * 3.2;
			//console.log($hei);
			if(($wh+$t) > ($top+$hei)){
				var goods = '<li><a href="javascript:;" class="cover-img" style="background-image: url('+data[i].img+')"></a><div class="data"><p class="price"><span class="redal">￥</span><span class="now-price">'+data[i].price+'</span><span class="old-price">'+data[i].old+'</span></p><p class="title"><span class="discount">'+data[i].discount+'折/</span><a href="javascript:;">'+data[i].title+'</a></p><p class="function">'+data[i].collect+'人收藏<span class="line">|</span>'+data[i].comment+'条评论</p></div></li>';
				$('.searchlist ul').append(goods);
			}
			i++;
		})
		//console.log(2);
		//console.log(data);
	}).fail(function(){
		console.log(1);
	})
})