$(function(){
    $('.nav>div').mouseover(function(){
        $(this).children('ul').stop().slideDown();
    });
      $('.nav>div').mouseleave(function(){
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
    $('.slide>ul').animate({marginLeft:'-0px'},500);
})
//slide
$(function(){
    $('.pop-up').click(function(){
        $('.modal').show();
    });
       $('.close-btn').click(function(){
        $('.modal').hide();
    });
})