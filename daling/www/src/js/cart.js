$(function(){
	$.getJSON('json/list.json',function(){
		var $add = $('.add');
		var n = 0;
		

    

		var j = 0;
		$($add).each(function(i){
			$(this).click(function(){
				//$.cookie.raw = true;//是否转码
				$.cookie.json = true;//是否允许cookie写成json格式
				//console.log($(this).parent().css('background-image'));
				var img = $(this).parent().css('background-image');//取图片
				//console.log($(this).parent().siblings('.data').find('.now-price').html());
				var price = $(this).parent().siblings('.data').find('.now-price').html();//取价格
				 //console.log($(this).parent().siblings('.data').find('a').html())
				 var title = $(this).parent().siblings('.data').find('a').html();//取说明
				//$.cookie('good',{img:img,price:price,title:title},{expires:30});
				n++;
				$('.cart span,.count').html(n);
				/*$.cookie("goods", {
				        "sno_123": {id: "sno_123", img:img,price:price,title:title},
				        "sno_124": {id: "sno_124", img:img,price:price,title:title}
				    })
				    var goods = $.cookie('goods');
				var gg = {id:'good'+j,img:img,price:price,title:title};
				goods[gg.id] = gg;
				good = $.cookie('good');
				$.cookie("goods",good);*/
				j++;
			})
		})
	});
	$('.add,.imme').on('click',function(){
		$.cookie.raw = true;		//是否转码
		$.cookie.json = true;	//是否允许使用json格式
		var img = $(this).parents('.goods-data').siblings('.goods-show').find('img').attr('src');
		//console.log(img);
		var title = $(this).parent().siblings('h1').html();
		var title = title.slice(23);
		//console.log(title);
		var title1 = title.slice(0,14).trim();
		//console.log(title1);
		//console.log(title);
		var title2 = title.slice(14).trim();
		//console.log(title2);
		//var num = $('.num').val();
		var price = $(this).parent().siblings('dl').find('.bo').html();
		$.cookie('good',{img:img,title:title1,info:title2,price:price},{expires:30,path:'/'});

		
	})
})
$(function(){
	$.cookie.json = true;
	if($.cookie('good') != null){		//判断是否存在名为good的cookie
		$('.data-empty').css('display','none');
		var str = '<div class="cart-list"><ul><li class="td-check"><input type="checkbox" class="check" name="good"></li><li class="td-good"><a class="cover" href="detail.html" style="background-image: url('+$.cookie('good').img+')"></a><a href="detail.html" class="name"><span class="title">['+$.cookie('good').title+']</span><br><span>'+$.cookie('good').info+'</span></a></li><li class="td-price">￥<span class="price">'+$.cookie('good').price+'</span></li><li class="td-number"><a href="javascript:;" class="btn-reduce"><span class="ico-reduce"></span></a><input type="text" value="0" class="num-text"><a href="javascript:;" class="btn-add f1"><span class="ico-add"></span></a></li><li class="td-total">￥<span class="total"></span></li><li class="td-handle"><a href="javascript:;" class="detach">删除</a></li></ul></div>'
		// console.log($('.cart-table').html());
		$('.cart-table').append(str);
		$('.cart-table').css('background-image','none');
	}else{
		$('.data-empty').css('display','block');
		$('.cart-table').css('background','url(img/cart_mini_empty.png) no-repeat center 46px');
		$('.cart-bar').css('display','none');
	}
	setTotal();
	getCount();
	
	$('.detach').click(function(){
		$(this).parents('.cart-list').remove();
		if($('.cart-list').length<=0){
			$('.data-empty').css('display','block');
			$('.ammount .redal').html('0');
			$('.f20').html('0.00');
		}
	})
	$('.delselect').click(function(){
		$('input[name=good]').each(function(){
			if($(this).prop('checked')){
				$(this).parents('.cart-list').remove();
				$.cookie('good',null,{expires:-1,path:'/'});
				$('.data-empty').css('display','block');
				$('.ammount .redal').html('0');
				$('.f20').html('0.00')
			}
		})

	})
	/*if($('.cart-list').css('display','none')){
		$('.data-empty').css('display','block');
	}*/
	$('.allselect').click(function(){
		if($(this).prop('checked')){	//全选
			$('input[type=checkbox]').each(function(){
				$(this).prop('checked',true);
				setTotal();
				getCount();
			})
		}else{		//反选
			$('input[type=checkbox]').each(function(){
				$(this).prop('checked',false);
				setTotal();
				getCount();
			})
		}
	})
	//点击复选框
	$('input[name=good]').each(function(){
		$(this).click(function(){
			if($(this).prop('checked')){
				$('.allselect').prop('checked',true);
			}else{
				$('.allselect').prop('checked',false);
			}
		setTotal();
		getCount();
		})
		
	})
	// 数量加减
	//var count = $.cookie('good').num;
	var count = 0;
	$('.ico-add').click(function(){
		count++;
		$('.num-text').val(count);
		setTotal();
		getCount();
	})
	$('.ico-reduce').click(function(){
		count--;
		if(count < 0){
			count = 0;
		}
		$('.num-text').val(count);
		setTotal();
		getCount();
	})
	function setTotal(){
		$('.total').html(parseInt($('.num-text').val()*$('.price').html()).toFixed(2));
		//setTotal();
	}
	
	function getCount(){
		var conts = 0,
		num = 0;
		$('input[name=good]').each(function(){
			if($(this).prop('checked')){
				for(var i = 0;i < $(this).length;i++){
					conts += parseInt($(this).parent().siblings().find('.total').html());
					num++;
				}
				
			}
		})
		$('.f20').html(conts.toFixed(2));
		$('.ammount .redal').html(num);
	}
	
})