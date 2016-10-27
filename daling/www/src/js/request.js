
/*// ajax请求头部
$(function(){
	$.ajax({
		url:'html/header.html',
		type:'get',
		datatype:'html'
	}).done(function(data){
		$('#header').append(data);
	}).fail(function(err){
		alert(err.status);
	})
	$.getScript('js/index.js');
})

//ajax请求尾部
$(function(){
	$.ajax({
		url:'html/footer.html',
		type:'get',
		datatype:'html'
	}).done(function(data){
		$('#footer').append(data);
	}).fail(function(err){
		alert(err.status);
	})
})*/

/*ajax请求首页商品数据*/
$(function(){
	$.ajax({
		url:'json/list.json',
		type:'get',
		datatype:'json'
	}).done(function(data){
		//console.log(data.ul1);
		var data1 = data["ul1"];
		var data2 = data["ul2"];
		var data3 = data["deserve"];
		var data4 = data['goods'];
		var data5 = data['buyAgain'];
		var data6 = data["newgoods"];
		var data7 = data["todayBuy"];
		var data8 = data["tomorrowBuy"];
		for(var i = 0;i < data1.length;i++){
			//console.log(data1[1]);
			var str = '<li><a style="background-image:url('+data1[i].img+')"><div class="add">加入购物车<span class="icon-cart"></span></div></a><div class="data"><p class="price"><span class="collect">人收藏</span><span class="redal">￥</span><span class="now-price">'+data1[i].price+'</span><span class="old-price">'+data1[i].old+'</span></p><p class="title"><span class="discount">'+data1[i].discount+'折/</span><a href="javascript:;">'+data1[i].info+'</a></p></div></li>';
			var str1 = '<li class="bot"></div><a  href="'+data1[i].href+'" class="new-img" style="background-image:url('+data1[i].img+')"><div class="add">加入购物车<span class="icon-cart"></span></div></a><div class="data"><p class="price"><span class="collect">人收藏</span><span class="redal">￥</span><span class="now-price">'+data1[i].price+'</span><span class="old-price">'+data1[i].old+'</span></p><p class="title"><span class="discount">'+data1[i].discount+'折/</span><a href="javascript:;">'+data1[i].info+'</a></p></div></li>'
			if(i < 4){
				$('.new-box .ul1').append(str);
			}else{
				$('.new-box .ul1-1').append(str1);
			}
		}
		for(var i = 0;i < data2.length;i++){
			//console.log(data1[1]);
			var str = '<li><a style="background-image:url('+data2[i].img+')"><div class="add">加入购物车<span class="icon-cart"></span></div></a><div class="data"><p class="price"><span class="collect">人收藏</span><span class="redal">￥</span><span class="now-price">'+data2[i].price+'</span><span class="old-price">'+data2[i].old+'</span></p><p class="title"><span class="discount">'+data2[i].discount+'折/</span><a href="javascript:;">'+data2[i].info+'</a></p></div></li>';
			var str2 = '<li class="bot"><div class="sign"><img src="" alt="" /></div><a  class="new-img" style="background-image:url('+data2[i].img+')"><div class="add">加入购物车<span class="icon-cart"></span></div></a><div class="data"><p class="price"><span class="collect">人收藏</span><span class="redal">￥</span><span class="now-price">'+data2[i].price+'</span><span class="old-price">'+data2[i].old+'</span></p><p class="title"><span class="discount">'+data2[i].discount+'折/</span><a href="javascript:;">'+data2[i].info+'</a></p></div></li>'
			if(i < 4){
				$('.new-box .ul2').append(str);
			}else{
				$('.new-box .ul2-1').append(str2);
			}
		}
		for(var i = 0;i < data3.length;i++){
			var str3 = '<li><a href="javascript:;" style="background-image:url('+data3[i].img+')"></a></li>';
			$('.deserve-box ul').append(str3);	
		}
		for(var i = 0;i < data4.length;i++){
			var str4 = '<li><a href="javascript:;" style="background-image:url('+data4[i].img+')"></a><div class="data"><p class="price"><span class="redal">￥</span><span class="now-price">'+data4[i].price+'</span><span class="old-price">'+data4[i].old+'</span></p><p class="title"><span class="redal">'+data4[i].discount+'</span>'+data4[i].title+'</p><div class="comment"><div class="bg"></div><a href="javascript:;" style="background-image:url('+data4[i].icon+')"></a><p class="comment-text">'+data4[i].comment+'</p></div></div></li>'
			$('.good-list .all-goods').append(str4);
		}
		for(var i = 0;i < data5.length;i++){
			var str5 = '<dd class="'+data5[i].first+'"><span class="tag">TOP'+data5[i].tag+'</span><a href="javascript:;" class="cover-img" style="background-image:url('+data5[i].img+')"></a><div class="data"><p class="title">'+data5[i].title+'</p><div class="data1"><p class="price"><span class="redal">￥</span>'+data5[i].price+'<span class="old-price">'+data5[i].old+'</span></p><p class="state">共'+data5[i].state+'购买<a href="javascript:;">回头率'+data5[i].head+'</a></p></div></div></dd>';
			$('.buy-list dl').append(str5);
		}
		for(var i = 0;i < data6.length;i++){
			var str6 = '<li><a href="javascript:;" style="background-image: url('+data6[i].img+')"></a><div class="data"><p class="price"><span class="redal">￥</span><span class="now-price">'+data6[i].price+'</span><span class="old-price">'+data6[i].old+'</span></p><p class="title"><a href="javascript:;">'+data6[i].title+'</a></p></div><div class="comment"><div class="bg"></div><div class="comment-text"><p>推荐理由:<br/>'+data6[i].reason+'</p></div></div></li>'
			$('.newest-goods').append(str6);
		}
		for(var i = 0;i < data7.length;i++){
			var str7 = '<li><a href="javascript:;" class="cover-img" style="background-image: url('+data7[i].img+');"></a><div class="data"><div class="timeout">距闪购结束&ensp;<span class="time_hour"></span><span class="colon">:</span><span class="time_min"></span><span class="colon">:</span><span class="time_sec"></span></div><p class="title"><span class="discount">'+data7[i].discount+'折</span><a href="javascript:;">'+data7[i].title+'</a></p><p class="intro">'+data7[i].intro+'</p><p class="price"><span class="redal">￥</span><span class="now-price">'+data7[i].price+'</span><span class="old-price">'+data7[i].old+'</span></p><p class="function"><a href="javascript:;" class="btn-buy">立即抢购</a><span class="info">'+data7[i].buy+'购买</span></p></div></li>'
			$('.index-sale-list ul').append(str7);
		}
		for(var i = 0;i < data8.length;i++){
			var str8 = '<li><a href="javascript:;" class="cover-img" style="background-image: url('+data8[i].img+')"></a><div class="data"><p class="title"><span class="discount">'+data8[i].discount+'折</span><a href="javascript:;">'+data8[i].title+'</a></p><p class="intro">'+data8[i].intro+'</p><div class="function"><a href="javascript:;"><span class="icon-collect"></span>收藏<button class="btn-cart">加入购物车</button></a></div></div></li>';
			$('.index-tomorrow ul').append(str8);
		};
	}).fail(function(){
		console.log(1);
	})
})