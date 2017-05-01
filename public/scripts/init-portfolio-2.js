$(function($) {
    "use strict";

    $("#js-grid-masonry-projects").cubeportfolio({
        filters: "#js-filters-masonry-projects",
        loadMore: "#js-loadMore-masonry-projects",
        loadMoreAction: "click",
        layoutMode: "grid",
        defaultFilter: "*",
        animationType: "quicksand",
        gapHorizontal: 3,
        gapVertical: 3,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 4
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
        caption: "zoom",
        displayType: "fadeIn",
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: true,
        lightboxTitleSrc: "data-title",
        lightboxCounter: "<div class='cbp-popup-lightbox-counter'>{{current}} of {{total}}</div>",

        // singlePage popup
        singlePageDelegate: ".cbp-singlePage",
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: "<div class='cbp-popup-singlePage-counter'>{{current}} of {{total}}</div>",
        singlePageCallback: function(url, element) {
            console.log("here");
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
