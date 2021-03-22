$(function(){
    $('.nav>ul').mouseover(function(){
        $(this).children('ul').stop().slideDown();
    });
      $('.nav>ul').mouseleave(function(){
        $(this).children('ul').stop().slideUp();
    });
    
});
//nav
setInterval(function(){
    $('.slide>ul').delay(3000);
    $('.slide>ul').animate({marginLeft:'-1200px'},500);
    $('.slide>ul').delay(3000);
    $('.slide>ul').animate({marginLeft:'-2400px'},500);
    $('.slide>ul').delay(3000);
    $('.slide>ul').animate({marginLeft:'0px'},500);
})

////banner

$(function(){
    $('.gallery-tit').click(function(){
        $('.gallery-tit').css('background-color','#fff');
        $('.gallery').css('display','block');
        $('.notice-tit').css('background-color','#ff7200');
        $('.notice').css('display','none');
        
        
    });
    $('.notice-tit').click(function(){
        $('.notice-tit').css('background-color','#fff');
        $('.notice').css('display','block');
        $('.gallery-tit').css('background-color','#ff7200');
        $('.gallery').css('display','none');
        
        
    });
});
//tab

$(function(){
    $('.pop-up').click(function(){
        $('.modal').show();
    });
    $('.close').click(function(){
        $('.modal').hide();
    });
})