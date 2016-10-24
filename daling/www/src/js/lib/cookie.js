var oCookie = {
	addCookie:function(key,val,lifeCircle){
		var oDate = new Date();
		oDate.setDate(new Date().getDate()+lifeCircle);
		document.cookie = key + "=" + val +";expires="+oDate+";path=/";
	},
	getCookie:function(key){
		var cookies = document.cookie;
		var reg = /\s+/g;
		cookies = cookies.replace(reg,"");
		var cookiesArr = cookies.split(";");
		for(var i=0;i<cookiesArr.length;i++){
			var nowKey = cookiesArr[i].split("=")[0];
			var val = cookiesArr[i].split("=")[1];
			if(nowKey == key){
				return val;
			}
		}
	},
	delCookie:function(key){
		var oDate = new Date();
		oDate.setDate(new Date().getDate()-1);
		document.cookie = key + "=123;expires="+oDate+";path=/";
	}
}