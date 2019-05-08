$(function(){
	$(".img-character .img-span").mouseenter(function(){
		$(this).css({"transform":"rotate(-50deg) scale(1.7)"});
		$(this).children().eq(1).addClass("dingwei")
		
	})
	$(".img-character .img-span").mouseleave(function(){
		$(this).css("transform","rotate(0deg)");
		$(this).children().eq(1).removeClass("dingwei")
	})
	
	
	
})