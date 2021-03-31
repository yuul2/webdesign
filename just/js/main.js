$(function(){
    $('.nav').mouseover(function(){
        $('.sub-menu').stop().slideDown();
    })
    $('.nav').mouseleave(function(){
        $('.sub-menu').stop().slideUp();
    })
})

//nav

setInterval(function(){
    $('.banner>div').delay(300);
     $('.banner>div').animate({marginTop:'-300px'},500);
     $('.banner>div').delay(300);
     $('.banner>div').animate({marginTop:'-600px'},500);
     $('.banner>div').delay(300);
     $('.banner>div').animate({marginTop:'0px'},500);
    
})

//banner

$(function(){
    $('.gallery').click(function(){
        $('.gallery').css('background-color','#fff');
        $('.gallery-menu').show();
        $('.notice').css('background-color','#cecece');
        $('.notice-menu').hide();
        
    })
    $('.notice').click(function(){
        $('.notice').css('background-color','#fff');
        $('.notice-menu').show();
        $('.gallery').css('background-color','#cecece');
        $('.gallery-menu').hide();
        
    })
})

//tab

$(function(){
    $('.pop').click(function(){
    
        $('.modal').show();
    })
       $('.close').click(function(){
    
        $('.modal').hide();
    })
})