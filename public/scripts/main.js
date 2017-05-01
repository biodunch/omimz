$(function($) {
    "use strict";

    // FadeOut page loader
    $(window).load(function(){
        $(".page-loader").fadeOut("slow");
    });

    // For Fixed header & Scroll to top
	$(window).on("scroll resize", function() {
		if ($(window).scrollTop() >= 75) {
			$("body").addClass("secondNav");
            $(".scroll-to-top").css("bottom", "0px");
		}
		if ($(window).scrollTop() < 75) {
			$("body").removeClass("secondNav");
            $(".scroll-to-top").css("bottom", "-50px");
		}
	});

    // For Scroll to top
    $(".scroll-to-top", "footer").on("click", function() {
      return $("html, body").animate({
        scrollTop: 0
      });
    });

    // For Counter
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });

    // For client carousel
    $(".client-carousel").owlCarousel({
        loop: true,
        items: 6,
        autoplay: true,
        dots: false
    });

    // For smooth scroll
    smoothScroll.init({
        offset: 50
    });

    // For Animations on scroll
    $(".anim").waypoint({
        handler: function() {
            var anim;
            var elem = this.element;
            anim = $(elem).data("animation");
            anim = "animated " + anim;
            $(elem).addClass(anim);
        },
        offset: "60%"
    });

    // For hidden nav
    $(".open-nav-button").on("click", function() {
        var clicks;
        clicks = $(this).data("clicks");
        if (clicks) {
            $(".main-menu").removeClass("animated fadeIn");
            $(".main-menu").css("display", "none");
        } else {
            $(".main-menu").css("display", "block");
            $(".main-menu").addClass("animated fadeIn");
        }
        $(this).data("clicks", !clicks);
    });

    // For typer
    $(".typed").typed({
        strings: ["ThemeForest", "WordPress", "Web Design", "Graphic Design"],
        typeSpeed: 100,
        backDelay: 1000,
        loop: true,
        loopCount: false
    });

    // For Pie Charts
    $(".chart").easyPieChart({
        barColor: "#47b475",
        scaleColor: false,
        lineCap: "square",
        size: 150
    });

    // For Page Title - Revolution
    $(".pageTitleHero").revolution({
        sliderType: "hero",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 9000,
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1170, 1024, 778, 480],
        gridheight: [400, 400, 300, 300],
        lazyType: "none",
        shadow: 0,
        spinner: "off",
        autoHeight: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        parallax: {
            type: "scroll"
        }
    });

    // For SWITCHER
    $(".handle").on("click", function() {
        var clicks;
        clicks = $(this).data("clicks");
        if (clicks) {
            $(".switcher").css("left", "-200px");
        } else {
            $(".switcher").css("left", "0px");
        }
        $(this).data("clicks", !clicks);
    });
    $(".color").on("click", function() {
        var color;
        color = $(this).data("color-class");
        $("head").append("<link rel='stylesheet' href='styles/" + color + ".css' type='text/css'>");
    });

    // For Footer Word Rotator
    $(".word-rotator-footer", "#footer").Morphext({
        animation: "fadeIn",
        separator: ",",
        speed: 4000
    });

});
