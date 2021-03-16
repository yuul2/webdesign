$(function(){
    $('.menu').mouseover(function(){
        $('.sub-menu').stop().slideDown();
        $('.bg-color').stop().slideDown();
    });
    $('.menu').mouseleave(function(){
        $('.sub-menu').stop().slideUp();
        $('.bg-color').stop().slideUp();
    });
});

//nav

$(function(){
    $('.slide>ul').delay(3000)
        $('.slide>ul').animate({marginLeft:'-1200px'},500);
     $('.slide>ul').delay(3000)
     $('.slide>ul').animate({marginLeft:'-2400px'},500);
     $('.slide>ul').delay(3000)
     $('.slide>ul').animate({marginLeft:'0px'},500);
    });

//modal

$(function(){
    $('.pop-up').click(function(){
        $('.modal').show();
    });
    $('.close-btn').click(function(){
        $('.modal').hide();
    });
})
