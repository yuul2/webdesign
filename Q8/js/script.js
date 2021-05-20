$(function(){
    $('.menu').mouseover(function(){
        $('.sub').stop().slideDown();
    });
        $('.menu').mouseleave(function(){
        $('.sub').stop().slideUp();
    });

})

setInterval(function(){
    $('.banner>div').delay(300);
     $('.banner>div').animate({marginLeft:'-1200px'},500);
    $('.banner>div').delay(300);
     $('.banner>div').animate({marginLeft:'-2400px'},500);
     $('.banner>div').delay(300);
     $('.banner>div').animate({marginLeft:'0px'},500);
})