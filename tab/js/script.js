$(function(){
    $('.gallery_title').click(function(){
        $('.gallery').show();
        $('.galley_title').css('background','#fff');
        $('.notice').hide();
        $('.notice_title').css('background','coral');
        
    });
    $('.notice_title').click(function(){
        $('.notice').show();
        $('.notice_title').css('background','#fff');
        $('.gallery').hide();
        $('.galley_title').css('background','coral');
        
    });
});

//gallery

//$('.family-menu').mouseenter(function(){
//    $('.family-menu>ul').slideDown();
//    $('.family-menu>span').text('▲');
//});
//$('.family-menu').mouseleave(function(){
//    $('.family-menu>ul').slideUp();
//    $('.family-menu>span').text('▼');
//});
$('.family-menu').click(function(){
    if($('.family-menu>ul').css('display')=='none'){
        $('.family-menu>ul').stop().slideDown();
        $('.family-menu>span').text('▲');
    }else{
         $('.family-menu>ul').stop().slideUp();
        $('.family-menu>span').text('▼');
    }
});