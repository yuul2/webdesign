$(function(){
    $('.nav>ul>li').mouseover(function(){
        $(this).children('.submenu').stop().slideDown();
    
    });
    $('.nav>ul>li').mouseleave(function(){
        $(this).children('.submenu').stop().slideUp();
    
    });
    
});

//nav

$(function(){
    $('banner>div>a:gt(0)').hide();
        setInterval(function(){
            $('banner>div>a:first').fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('banner>div')
        },3000)
    
    });
   

$(function(){
    $('.gallery').click(function(){
        $('.gallery>p').css('color','#333');
        $('.img-box').show()
        $('.notice>p').css('color','lightgrey');
        $('.notice-c').hide();
    });
    $('.notice').click(function(){
        $('.notice>p').css('color','#333');
        $('.notice-c').show()
        $('.gallery>p').css('color','lightgrey');
        $('.img-box').hide();
    });
});
$(function(){
    $('.pop').click(function(){
        $('.modal').show();
    });
    $('.close').click(function(){
        $('.modal').hide();
    });
    
})


