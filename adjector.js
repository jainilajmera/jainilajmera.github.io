/* ====================================
 * adjector.js
 * ====================================
 * Copyright 2014 Arsh Shah Dilbagi.
 * http://robo.im
 *
 * ================================= */
! function ($) {

    var no_input = {
        sep: "|",
        stay: 1600,
        trans: 550,
        arm: 110
    };

    $.fn.adjector = function (input) {
        var options_input = $.extend({}, no_input, input);

        var front_css = "style='-webkit-transform: translate3d(0,0," + options_input.arm + "px); " +
            "-moz-transform: translate3d(0,0," + options_input.arm + "px); " +
            "-ms-transform: translate3d(0,0," + options_input.arm + "px); " +
            "-o-transform: translate3d(0,0," + options_input.arm + "px); " +
            "transform: translate3d(0,0," + options_input.arm + "px); ";

        return this.each(function () {
            var flip_container = $(this)
            var array = [];
            $.each(flip_container.text().split(options_input.sep), function (key, value) {
                array.push(value);
            });
            flip_container.text(array[0]);

            var adject = function () {
                if (flip_container.find(".back-face").length > 0) {
                    flip_container.html(flip_container.find(".back-face").html())
                }

                var front_text = flip_container.text()
                var back_text_index = $.inArray(front_text, array)
                if ((back_text_index + 1) == array.length) back_text_index = -1

                flip_container.html("");
                $("<span class='front-face'>" + front_text + "</span>").appendTo(flip_container);
                $(".front-face").css({
                    "-webkit-transform": "translate3d(0,0," + options_input.arm + "px)",
                    "-moz-transform": "translate3d(0,0," + options_input.arm + "px)",
                    "-o-transform": "translate3d(0,0," + options_input.arm + "px)",
                    "transform": "translate3d(0,0," + options_input.arm + "px)",
                })

                $("<span class='back-face'>" + array[back_text_index + 1] + "</span>").appendTo(flip_container);
                $(".back-face").css({
                    "-webkit-transform": "translate3d(0,0," + options_input.arm + "px) rotateY(180deg)",
                    "-moz-transform": "translate3d(0,0," + options_input.arm + "px) rotateY(180deg)",
                    "-o-transform": "translate3d(0,0," + options_input.arm + "px) rotateY(180deg)",
                    "transform": "translate3d(0,0," + options_input.arm + "px) rotateY(180deg)",
                })

                flip_container.wrapInner("<span class='adjecting' />").find(".adjecting").hide().show().css({
                    "-webkit-transform": " rotateY(180deg)",
                    "-moz-transform": " rotateY(180deg)",
                    "-o-transform": " rotateY(180deg)",
                    "transform": " rotateY(180deg)",
                    "-webkit-transition": " " + options_input.trans + "ms",
                    "-moz-transition": " " + options_input.trans + "ms",
                    "-o-transition": " " + options_input.trans + "ms",
                    "transition": " " + options_input.trans + "ms",
                })
            };
            setInterval(adject, options_input.stay + options_input.trans);
        });
    }

}(window.jQuery);