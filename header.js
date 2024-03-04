
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
        if (headerHeight != 0) {
            $(".mobile-header .see-expanded").css(
                "height",
                "calc( 100vh - " + headerHeight + "px )"
            );
        }
        $(".mobile-header .arrows").on("click", function () {
            $(this).find("i").toggleClass("rotate");
        });
        $(".mobile-header .mob-nav-container>button").on(
            "click",
            function () {
                $(".mobile-header .see-expanded").toggleClass("menu-slide");
                $(this).find("i").toggle();

                if ($(".mobile-header .see-expanded").hasClass("menu-slide")) {
                    $(".mobile-header .arrows").find("i").removeClass("rotate");
                    $(".mobile-header .sub-menu").hide();
                    $("body").css("overflow", "hidden");
                    $("header").css("position", "fixed");
                    $(".mobile-header .see-navigation").css(
                        "visibility",
                        "visible"
                    );
                } else {
                    $("body").css("overflow", "visible");
                    $(".mobile-header .see-navigation").css(
                        "visibility",
                        "hidden"
                    );
                    fixedheader == "no"
                        ? $("header").css("position", "absolute")
                        : $("header").css("position", "fixed");
                }
            }
        );
        let branded_logo =
            $(".mobile-header .mob-nav-container .see-logo")
                .find("img")
                .width() +
            $(".mobile-header .mob-nav-container .see-logo")
                .find(".see-brand")
                .width();
        if (
            branded_logo >
            $(".mobile-header .mob-nav-container").find("a.see-logo").width()
        ) {
            $(".mobile-header .see-brand").css("display", "none");
        }

        /****sub menu click hide show*****/
        $("header .arrows, header .arrow").click(function (e) {
            e.preventDefault(),
                $(this).closest("li").find("ul").slideToggle();
        });
    }
});