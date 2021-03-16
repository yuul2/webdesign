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
})