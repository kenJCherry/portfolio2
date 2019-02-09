var sections = [".title-projects", ".social-media-projects", "#projects" ]

$(document).on("scroll", function () {
    var width = $(window).width();
        if (width > 769) {

          for (var i = 0; i < sections.length; i++) {
                var scrollTop = $(document).scrollTop()
                var scrollBottom = scrollTop + $(window).height()

                var pageBottom = $(document).height()

                var diff = (pageBottom - scrollBottom)

                var opacity = 1 - diff / 1000

                $(sections[i]).css("opacity", opacity)
          }/*End for*/
    } else {
        var opacity = 1
        for (var i = 0; i < sections.length; i++) {
            $(sections[i]).css("opacity", opacity)
        }/*End for*/
        
    } /*End else*/ 
})
