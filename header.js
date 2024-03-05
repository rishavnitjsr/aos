$(document).ready(function () {
    if ($(window).width() > 991) {
        if (
            $(".desktop-header .see-menus>li:last-child>a").text() == "More"
        ) {
            $(".desktop-header .see-menus>li:last-child>.arrow").show();
        }
    }
});

/***mobile header****/
$(document).ready(function () {
    if ($(window).width() < 992) {
        var headerHeight = $(".mobile-header .mob-nav-container").height();

        if (headerHeight !== 0) {
            $(".mobile-header .see-expanded").css(
                "height",
                "calc(100vh - " + headerHeight + "px)"
            );
        }

        $(".mobile-header .arrows").on("click", function () {
            $(this).find("i").toggleClass("rotate");
        });

        $(".mobile-header .mob-nav-container > button").on("click", function () {
            var seeExpanded = $(".mobile-header .see-expanded");
            var arrows = $(".mobile-header .arrows");

            seeExpanded.toggleClass("menu-slide");
            $(this).find("i").toggle();

            if (seeExpanded.hasClass("menu-slide")) {
                arrows.find("i").removeClass("rotate");
                $(".mobile-header .sub-menu").hide();
                $("body").css("overflow", "hidden");
                $("header").css("position", "fixed");
                $(".mobile-header .see-navigation").css("visibility", "visible");
            } else {
                $("body").css("overflow", "visible");
                $(".mobile-header .see-navigation").css("visibility", "hidden");

                var fixedHeader = "no" === "no" ? "absolute" : "fixed";
                $("header").css("position", fixedHeader);
            }
        });

        var brandedLogoWidth =
            $(".mobile-header .mob-nav-container .see-logo img").width() +
            $(".mobile-header .mob-nav-container .see-logo .see-brand").width();

        if (brandedLogoWidth > $(".mobile-header .mob-nav-container a.see-logo").width()) {
            $(".mobile-header .see-brand").css("display", "none");
        }

        // Submenu click hide/show
        $("header .arrows, header .arrow").click(function (e) {
            e.preventDefault();
            $(this).closest("li").find("ul").slideToggle();
        });
    }
});
