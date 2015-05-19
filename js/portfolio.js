$(document).ready(function () {

    // Selectors with the class scrollable will scroll to the selector with
    // appropriate data-scrollto attribute
    $(".scrollable").click(function () {
        var scroll_to = $(this).data("scrollto");
        console.log(scroll_to);
        $("html, body").animate({scrollTop: $(scroll_to).offset().top}, 1000);
    });
     
    // Invoke colorbox
    jQuery('a.colorbox-img').colorbox({
        opacity: 0.5,
        rel: 'work-pic',
    });
    
    
    // First page script
    var width = $(window).width(),
        height = $(window).height();

    $('.first-page').height(height);
    
    $(window).bind('resize', function () {
        imgsize();
    });    
    
    // Resizing image height on resize
    function imgsize() {
        var width = $(window).width(),
                height = $(window).height();

        $('.first-page').height(height);
    }

});

