$(function(){
	$(".list-1-img a").mouseenter(function(){
		$(this).css("transform","scale(1.1)");
	})
	$(".list-1-img a").mouseleave(function(){
		$(this).css("transform","scale(1)");
	})
})