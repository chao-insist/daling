
$(function(){
	/*聚焦改变输入框样式*/
	function onfocus(){
		$(this).css('border-color','#94d469');
		$(this).prev().css('border-right-color','#94d469');
	}
	function onblur(){
		$(this).css('border-color','#ccc');
		$(this).prev().css('border-right-color','#ccc');
	}
	$('.txt,.pas,#msg').on('focus',onfocus).on('blur',onblur);
	$('.txt').on('focus',function(){
		$(this).prev().find('span').css('background-position','0 0');
	}).on('blur',function(){
		$(this).prev().find('span').css('background-position','-29px 0');
	})
	$('.pas').on('focus',function(){
		$(this).prev().find('span').css('background-position','0 -27px');
	}).on('blur',function(){
		$(this).prev().find('span').css('background-position','-29px -27px');
	})
	$('#msg').on('focus',function(){
		$(this).prev().find('span').css('background-position','0 -56px');
	}).on('blur',function(){
		$(this).prev().find('span').css('background-position','-29px -56px');
	})
	/*点击切换验证码*/
	var previ = 0;		//必须在函数外初始化前索引，否则每点击一次初始化一次
	$('.code').on('click',function(){
		var i = Math.floor(Math.random()*5);
		if(i == previ){
		//console.log(1);
			if(i < 4){	//console.log(2);
				i++;
				$(this).attr('src','../img/index'+i+'.png');
			}else{		//console.log(3);
				i--;
				$(this).attr('src','../img/index'+i+'.png');
			}
		}else{
			$(this).attr('src','../img/index'+i+'.png');
		}
		//console.log(i);
		previ = i;
		
	})
	/*tab切换登录注册页面*/
	$('.tab a').each(function(){
		$(this).click(function(){
			$index = $(this).index();
			$('.form').eq($index).css('display','block').siblings('.form').css('display','none');
			$(this).addClass('active').siblings().removeClass('active');
		})
	})
})

/*验证注册*/
$(function(){
	$.cookie.json = true;
	$.cookie.raw = true;
	/*验证码*/
	function verification(){
		var arrImg = [];
		for(var j = 0;j < 5;j++){
			var str = '../img/index'+j+'.png';
			arrImg.push(str);
		}
		var arrUp = ['吕A苏韩','薛吴郎苗','C任F何','孙G朱鲁','H5冯A'];
		var arrLow = ['吕a苏韩','薛吴郎苗','c任f何','孙g朱鲁','h5冯a'];
		for(var i = 0;i < arrImg.length;i++){
			if($('#very').next().attr('src') == arrImg[i]){
				//console.log($('#very').next().attr('src'));
				//console.log(arrImg[i]);
				if($('#very').val() == arrUp[i] || $('#very').val() == arrLow[i]){
					//console.log(2);
					$('#very').siblings('.tip').css('display','none');
				}else{
					$('#very').siblings('.tip').css('display','block');
					$('#very').focus();
					return false;
				}
			}
		}
	}
	/*用户名：失去焦点的时候判断	
	按下enter键（13）的时候验证全部
	用户名密码在得到焦点后为空弹出警告*/
	function err(obj){
		$(obj).css({
			'backgroundColor':'#fdf3fd',
			'border-color':'#e14958'
		});
	}
	function suceess(obj){
		$(obj).css({
			'backgroundColor':'#fff',
			'border-color':'#ccc'
		});
	}
	
	$('#txt-register,#txt-login').on('blur',function(){
		var reg = /^1(3|4|5|7|8)\d{9}$/;
		if(reg.test($(this).val())){
			$(this).siblings('.tip').css('display','none');
			suceess($(this));

		}else {
			if($(this).val().length == 0){
				$(this).siblings('.tip').eq(1).css('display','none');
				$(this).siblings('.tip').eq(0).css('display','block');
			}else{
				$(this).siblings('.tip').eq(0).css('display','none');
				$(this).siblings('.tip').eq(1).css('display','block');
			}
			err($(this));
		}
	})
	var flag = false;
	$('#agree').click(function(){
		if(flag == false){
			$('.submit').attr('disabled',false).css('backgroundColor','#e14958');
			flag = true;
		}else{
			$('.submit').attr('disabled',true).css({
				'backgroundColor':'#ccc',
				'border':'none'
			});
			flag = false;
		}
	})
	$('.register-form').submit(function(){
		 if($('#pas-register,#txt-register,#very,#msg').val().length == 0){
			$('#txt-register').focus();
			$('.tip').css('display','block');
			$('#very,#pas-register,#msg').css({
				'backgroundColor':'#fdf3fd',
				'border-color':'#e14958'
			})
			return false;
		}

		var arrImg = [];
		for(var j = 0;j < 5;j++){
			var str = '../img/index'+j+'.png';
			arrImg.push(str);
		}
		var arrUp = ['吕A苏韩','薛吴郎苗','C任F何','孙G朱鲁','H5冯A'];
		var arrLow = ['吕a苏韩','薛吴郎苗','c任f何','孙g朱鲁','h5冯a'];
		for(var i = 0;i < arrImg.length;i++){
			if($('#very').next().attr('src') == arrImg[i]){
				//console.log($('#very').next().attr('src'));
				//console.log(arrImg[i]);
				if($('#very').val() == arrUp[i] || $('#very').val() == arrLow[i]){
					//console.log(2);
					$('#very').siblings('.tip').css('display','none');
				}else{
					$('#very').siblings('.tip').css('display','block');
					$('#very').focus();
					return false;
				}
			}
		}


		var reg = /^1(3|4|5|7|8)\d{9}$/;
		if(reg.test($('#txt-register').val())){
			$('#txt-register').siblings('.tip').css('display','none');
			suceess($('#txt-register'));
		}else {
			if($('#txt-register').val().length == 0){
				$('#txt-register').siblings('.tip').eq(1).css('display','none');
				$('#txt-register').siblings('.tip').eq(0).css('display','block');
			}else{
				$('#txt-register').siblings('.tip').eq(0).css('display','none');
				$('#txt-register').siblings('.tip').eq(1).css('display','block');
			}
			err($('#txt-register'));
			return false;
		}

		$('.tab a').addClass('active');
		$('.form-register').css('display','none');
		$('.form-login').css('display','block');
		var $name = $('#txt-register').val();
		var $pass = $('#pas-register').val();
		//console.log($name);
		//$.cookie.raw = true;
		//$.cookie.json = true;
		$.cookie('login',{name:$name,pass:$pass},{expires:30,path:'/'});
		
	})
	/*登录*/

	$('.login-form').submit(function(){
		var reg = /^1(3|4|5|7|8)\d{9}$/;
			if(reg.test($('#txt-login').val())){
				$('#txt-login').siblings('.tip').css('display','none');
				suceess($('#txt-login'));
			}else {
				if($('#txt-login').val().length == 0){
					$('#txt-login').siblings('.tip').eq(1).css('display','none');
					$('#txt-login').siblings('.tip').eq(0).css('display','block');
				}else{
					$('#txt-login').siblings('.tip').eq(0).css('display','none');
					$('#txt-login').siblings('.tip').eq(1).css('display','block');
				}
				err($('#txt-login'));
				return false;
			}
			/*console.log(oCookie.getCookie('name') );
			return false;*/
			var $getName = $.cookie('login').name;
			var $getPass = $.cookie('login').pass;
		if($('#txt-login').val() ==  $getName && $('#pas-login').val() == $getPass){
			$('.err').css('display','none');
			//alert('登录成功')
			window.open('../index.html');
			$.cookie('ready','',{expires:30,path:'/'});
		}else if($('#txt-login').val() ==  $getName && $('#pas-login').val() != $getPass){
			$('.no-match').css('display','block').siblings('.err').css('display','none');
			return false;
		}
		else if($('#txt-login').val() !=  $getName){
			$('.no-exit').css('display','block').siblings('.err').css('display','none');
			return false;
		}
	})

})

