$(function($) {
    "use strict";

    $("#js-grid-meet-the-team").cubeportfolio({
        filters: "#js-filters-meet-the-team",
        layoutMode: "grid",
        defaultFilter: "*",
        animationType: "sequentially",
        gapHorizontal: 50,
        gapVertical: 40,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 5
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: "fadeIn",
        displayType: "fadeIn",
        displayTypeSpeed: 100,

        // singlePage popup
        singlePageDelegate: ".cbp-singlePage",
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: "<div class='cbp-popup-singlePage-counter'>{{current}} of {{total}}</div>",
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;
            console.log(element);
            $.ajax({
                    url: url,
                    type: "GET",
                    dataType: "html",
                    timeout: 30000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage("AJAX Error! Please refresh the page!");
                });
        }
    });

});