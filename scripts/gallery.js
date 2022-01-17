'use strict';

$(function () {
    //zoom img onclick
    $(".zoom").click(function () {
        $(".hover-buttons").css("visibility", "hidden");
        $(".overlay").addClass("active");
        $(".open-img").addClass("active");

        var activeImg = $(this).attr("href");
        $(activeImg).fadeIn();
    });
    //close img onclick
    $(".close").click(function () {
        $(".overlay").removeClass("active");
        $(".open-img").removeClass("active");
        $(".full-image").hide();
        $(".hover-buttons").css("visibility", "visible");
    });

    $(document).on("click", ".overlay", function() {
        $(".overlay").removeClass("active");
        $(".open-img").removeClass("active");
        $(".full-image").hide();
        $(".hover-buttons").css("visibility", "visible");
    });

    $(".overlay").click(function () {
        $(".overlay").removeClass("active");
        $(".open-img").removeClass("active");
        $(".full-image").hide();
        $(".hover-buttons").css("visibility", "visible");
    });
});