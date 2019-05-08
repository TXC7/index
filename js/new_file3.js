$(function(){
	$(".head-btn").click(function(){
   	var $imgW=$(".Background-picture img").width();
   	if($imgW<1200){
   		$(".Background-picture img").css("width","1519px")
   	}else{
   		$(".Background-picture img").css("width","100%")
   	}
   })
	
	$(window).resize(function(){
		var a=$(window).width();
		if (a<=768) {
			$(".NOV h4").animate({
				"font-size":"1em"
			},1000)
			$(".NOV a").animate({
					"font-size":"1em"
				},1000)
			
		}
		else{
			$(".NOV h4").animate({
				"font-size":"1.4em"
			},1000)
			$(".NOV a").animate({
				"font-size":"1.5em"
			},1000)
			
		}
	})
	
})
