$(function(){
    $('.nav').mouseover(function(){
        $('.sub-menu').stop().slideDown();
    });
    $('.nav').mouseout(function(){
        $('.sub-menu').stop().slideUp();
    });
})
//nav
setInterval(function(){ 
    $('.slide>div').delay(200);
    $('.slide>div').animate({marginTop:'-300px'},500);
     $('.slide>div').delay(200);
    $('.slide>div').animate({marginTop:'-603px'},500);
     $('.slide>div').delay(200);
    $('.slide>div').animate({marginTop:'-0px'},500);
})
//slide

$(function(){
    $('.gallery').click(function(){
        $('.gallery-box').show();
        $('.gallery>a').css('background','#fff');
        $('.gallery>a').css('color','coral');
        $('.notice-text').hide(); 
        $('.notice>a').css('background','bisque');
        $('.notice>a').css('color','#333');
    });
    $('.notice').click(function(){
        $('.notice-text').show();
        $('.notice>a').css('background','#fff');
        $('notice>a').css('color','coral');
        $('.gallery-box').hide();
         $('.gallery>a').css('background','bisque');
        $('.gallery>a').css('color','#333');
    });
})
//tab-space