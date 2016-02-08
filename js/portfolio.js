jQuery(document).ready(function () {

    // Selectors with the class scrollable will scroll to the selector with
    // appropriate data-scrollto attribute
    jQuery(".scrollable").click(function () {
        var scroll_to = jQuery(this).data("scrollto");
        console.log(scroll_to);
        jQuery("html, body").animate({scrollTop: jQuery(scroll_to).offset().top}, 1000);
    });
     
    // Invoke colorbox
    jQuery('a.colorbox-img').colorbox({
        opacity: 0.5,
        rel: 'work-pic',
    });
    
    
    // First page script
    var width = jQuery(window).width(),
        height = jQuery(window).height();

    jQuery('.first-page').height(height);
    
    jQuery(window).bind('resize', function () {
        imgsize();
    });    
    
    // Resizing image height on resize
    function imgsize() {
        var width = jQuery(window).width(),
                height = jQuery(window).height();

        jQuery('.first-page').height(height);
    }
    
     
    jQuery("#owl-demo").owlCarousel({
        navigation: true,
        pagination: true,
        items: 3,
    });
 

});


