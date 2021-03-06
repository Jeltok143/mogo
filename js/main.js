$(function() {
    
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // FIXED HEADER 

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop;

        checkScroll(scrollOffset);
    });
    
    function checkScroll() {

        scrollOffset = $(this).scrollTop();

        if(scrollOffset >= introH -20) {
            header.addClass("fixed"); 
        }else {
                header.removeClass("fixed");
            }
        
    }

    // SMOOTH SCROLL PLUS ACTIVE CLASSES 

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

            $("#nav a").removeClass("active");
            $this.addClass("active");
        
        $("html, body").animate({
            scrollTop:  blockOffset
        }, 700);
    });


    // MENU NAV TOGGLE 
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();


        $(this).toggleClass("active");
        $("#nav").toggleClass("active");



    }),


    // COLLAPSE 
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
        blockId = $this.data('collapse');

        $this.toggleClass("active");
    });

    // SLIDER 

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToShow: 1
    });
});