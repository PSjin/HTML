$(function(){
    // 상단 slider
   
    

    // 홈페이지 li에 올렸을 때 블랙깔리기
    $('.hpSample li a')
    .on('mouseover',function(){
        $(this).find('.black').stop(true).animate({bottom:'0'},300,'easeOutQuad');
    })
    .on('mouseout',function(){
        $(this).find('.black').stop(true).animate({bottom:'-100%'},300,'easeOutQuad');
    });

});