$(function(){
   $(".head-btn").click(function(){
   	var $imgW=$(".Background-picture img").width();
   	if($imgW<1200){
   		$(".Background-picture img").css("width","1519px")
   	}else{
   		$(".Background-picture img").css("width","100%")
   	}
   })
   $(".Carl-div").mouseenter(function(){
   		$(this).children(".carl-character").css("background-color","#000000")
   })
   $(".Carl-div").mouseleave(function(){
   		$(".carl-character").css("background-color","#f44336")
   })
   $(".Carl-div").mouseenter(function(){
   		$(this).children(".carp-xian").css("background","#f44336")
   })
   $(".Carl-div").mouseleave(function(){
   		$(".carp-xian").css("background-color","#000000")
   })
})
