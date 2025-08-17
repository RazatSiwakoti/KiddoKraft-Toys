
//Countdown timer
$(document).ready(function(){

    var targetDate = new Date("2025-08-30 23:59:59").getTime();

    function updateCountdown() {
        var now = new Date().getTime();
        var distance = targetDate - now;

        if (distance < 0) {
            $('#countdown').text("EXPIRED");
            clearInterval(timer);
            return;
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#countdown').text(days + "d " + hours + "h " + minutes + "m " + seconds + "s");
    }

    // update countdown immediately
    updateCountdown();

    // update every second
    var timer = setInterval(updateCountdown, 1000);
});


//Hamburger menu and dropdown functionality
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


// New Arrivals Gallery Slider (mobile only)
$(document).ready(function() {
    if ($(window).width() <= 767) { 
        const gallery = $('.new-arrivals .arrivals-gallery');
        const items = gallery.children('a');
        let index = 0;
        const total = items.length;

        items.hide().eq(index).show();

        setInterval(function() {
            items.eq(index).fadeOut(300);
            index = (index + 1) % total;
            items.eq(index).fadeIn(300);
        }, 3000);
    }
});



//Best Seller Swipping feature
$(".products-container").on("wheel", function (e) {
  if (e.originalEvent.deltaY !== 0) {
    e.preventDefault();
    this.scrollLeft += e.originalEvent.deltaY;
  }
});


//Opening Modal for Logging in and Signing up
$(document).ready(function(){
    // Open modal on login click
    $(".user-account").click(function(e){
        e.preventDefault();
        $(".modal").css("display", "flex");
    });

    // Close modal on X click
    $(".close-modal").click(function(){
        $(".modal").hide();
    });

    // Close modal if clicking outside content
    $(".modal").click(function(e){
        if($(e.target).is(".modal")){
            $(this).hide();
        }
    });
});

