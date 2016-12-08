$(function () {

    var $menuCopy = $('.menu_copy');

    $('.menu_btn').on('click', function () {
        $menuCopy.toggleClass('on');
    });
    
    $(window).on('resize', function () {
        if ($(this).width() > 850) {
            $menuCopy.removeClass('on');
        }
    });

});