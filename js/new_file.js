$(function(){
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
            $(document).scroll(function(){
                if ($(document).scrollTop()>0){
                    $("#back-to-top").fadeIn(1000);
                }
                else
                {
                    $("#back-to-top").fadeOut(1000);
                }
            });
            $('.block_a').click(function() {
            	$('body,html').stop().animate({scrollTop:0},1000);
            })

            //当点击跳转链接后，回到页面顶部位置
            $("#back-to-top").click(function(){
                //$('body,html').animate({scrollTop:0},1000);
        		if ($('html').scrollTop()) {
	                $('html').animate({ scrollTop: 0 }, 1000);
	                return false;
            	}
            $('body').animate({ scrollTop: 0 }, 1000);
                 return false;            
           });       
});
