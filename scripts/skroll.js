$(function () {
    
    $(window).scroll(function () {
        if ($('body,html').scrollTop() >= parseInt(300)) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();
        }
    });

    $('#toTop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
    });
});