
// ajax请求头部
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
})