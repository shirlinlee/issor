var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
$(document).ready(function(){
    $('#person_slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $('#top').on('click','li',function(){
        var getSection = '#sec'+ ($(this).index()+1);
        $body.animate({scrollTop: $(getSection).offset().top});
    });

    $('.goToTop').on('click',function(){
        $body.animate({scrollTop: 0});
    })
    
});