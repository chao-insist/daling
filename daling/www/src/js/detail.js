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
	}).fail(function(){
		console.log(1);
	});
	$('.scroll-up').on('click',function(){
		$('sidebuy li').
	})
})