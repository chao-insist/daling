$(function(){
	$.ajax({
		url:'../json/goods.json',
		type:'get',
		datatype:'json'
	}).done(function(data){
		for(var i = 0;i < data.length;i++){
			var goods = '<li><a href="javascript:;" class="cover-img" style="background-image: url()"></a><div class="data"><p class="price"><span class="redal">￥</span><span class="now-price"></span><span class="old-price"></span></p><p class="title"><span class="discount">折/</span><a href="javascript:;"></a></p><p class="function">人收藏<span class="line">|</span>条评论</p></div></li>';
			$('.searchlist ul').append(goods);
		}
		console.log(2);
		console.log(data);
	}).fail(function(){
		console.log(1);
	})
})