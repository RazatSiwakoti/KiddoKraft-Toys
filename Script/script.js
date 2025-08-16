$(document).ready(function() {
    // Hamburger click toggles menu
    $('.hamburger').click(function() {
        $('.nav-menu').toggleClass('active'); // open/close menu
        $('.overlay').fadeToggle(300);        // show/hide overlay
    });

    // Overlay click closes menu
    $('.overlay').click(function() {
        $('.nav-menu').removeClass('active'); 
        $(this).fadeOut(300);
    });

    // Dropdown toggle (mobile/tablet only)
    $('.dropdown > .nav-link').click(function(e) {
        if ($(window).width() <= 1024) {
            e.preventDefault();
            $(this).siblings('.dropdown-menu').slideToggle(300);
        }
    });

    // Reset menu when resizing to desktop
    $(window).resize(function() {
        if ($(window).width() > 1024) {
            $('.nav-menu').removeClass('active').removeAttr('style');
            $('.dropdown-menu').removeAttr('style');
            $('.overlay').hide();
        }
    });
});
