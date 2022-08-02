(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);


$(document).ready(function () {
    $('.header_center_line_p img').on('click',function () {
        $('.sec4_img').toggleClass('active')
    })
});
