$(document).on("scroll", function () {
    var scrollTop = $(document).scrollTop()
    var scrollBottom = scrollTop + $(window).height()

    var pageBottom = $(document).height()

    var diff = pageBottom - scrollBottom

    var opacity = 1 - diff / 500

    $("div.social-media").css("opacity", opacity)
})

$(document).on("scroll", function () {
    var scrollTop = $(document).scrollTop()
    var scrollBottom = scrollTop + $(window).height()

    var pageBottom = $(document).height()

    var diff = pageBottom - scrollBottom

    var opacity = 1 - diff / 500

    $("div.contact-number").css("opacity", opacity)
})

$(document).on("scroll", function () {
    var scrollTop = $(document).scrollTop()
    var scrollBottom = scrollTop + $(window).height()

    var pageBottom = $(document).height()

    var diff = pageBottom - scrollBottom

    var opacity = 1 - diff / 500

    $("#trans-title").css("opacity", opacity)
})

$(document).on("scroll", function () {
    var scrollTop = $(document).scrollTop()
    var scrollBottom = scrollTop + $(window).height()

    var pageBottom = $(document).height()

    var diff = pageBottom - scrollBottom

    var opacity = 1 - diff / 500

    $("#projects").css("opacity", opacity)
})
