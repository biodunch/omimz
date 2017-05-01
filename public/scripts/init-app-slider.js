$(function() {
    "use strict";

    // for revolution slider
    var tpj = jQuery;

	tpj(document).ready(function() {
		if(tpj("#rev_slider_429_1").revolution === undefined){
			revslider_showDoubleJqueryError("#rev_slider_429_1");
		}else{
			tpj("#rev_slider_429_1").show().revolution({
				sliderType: "standard",
jsFileLocation: "//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
				sliderLayout: "fullscreen",
				dottedOverlay: "none",
				delay: 9000,
				navigation: {
					keyboardNavigation: "on",
					keyboard_direction: "vertical",
					mouseScrollNavigation: "carousel",
						mouseScrollReverse: "default",
					onHoverStop: "off",
					touch: {
						touchenabled: "on",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "vertical",
						drag_block_vertical: false
					},
					bullets: {
						enable: true,
						hide_onmobile: true,
						hide_under: 778,
						style: "hermes",
						hide_onleave: false,
						direction: "vertical",
						h_align: "right",
						v_align: "center",
						h_offset: 20,
						v_offset: 0,
						space: 5,
						tmp: ""
					}
				},
				responsiveLevels: [1240, 1024, 778, 480],
				visibilityLevels: [1240, 1024, 778, 480],
				gridwidth: [1240, 1024, 778, 480],
				gridheight: [868, 768, 960, 720],
				lazyType: "smart",
				shadow: 0,
				spinner: "spinner2",
				stopLoop: "on",
				stopAfterLoops: 0,
				stopAtSlide: 1,
				shuffle: "off",
				autoHeight: "off",
				fullScreenAutoWidth: "off",
				fullScreenAlignForce: "off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "",
				disableProgressBar: "on",
				hideThumbsOnMobile: "off",
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: "off",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: false
				}
			});
		}
	});
});
