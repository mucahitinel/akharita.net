﻿(function ($) {
    $(document).ready(function () {
        $('.referanslar-menu li.has-sub>a').on('click', function () {
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp();
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown();
                element.siblings('li').children('ul').slideUp();
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp();
            }
        });

        var href = $(location).attr('pathname');

        $(".has-sub ul li a[href='" + href + "']").addClass("active").closest("ul").css("display", "block");


    });
})(jQuery);