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

    // Quick View functionality
    $('.quick-view').click(function(e) {
        e.preventDefault();
        const productName = $(this).closest('.product-card').find('h3').text();
        alert('Quick view for: ' + productName + '\nThis would open a product modal in a real implementation.');
    });

    // Add to Cart functionality
    $('.add-to-cart').click(function(e) {
        e.preventDefault();
        const productName = $(this).closest('.product-card').find('h3').text();
        const currentCount = parseInt($('.cart-count').text()) || 0;
        $('.cart-count').text(currentCount + 1);
        
        // Show success message
        $(this).text('Added!').addClass('added');
        setTimeout(() => {
            $(this).text('Add to Cart').removeClass('added');
        }, 2000);
        
        console.log('Added to cart: ' + productName);
    });

    // Newsletter form submission
    $('.newsletter-form-main').submit(function(e) {
        e.preventDefault();
        const email = $(this).find('input[type="email"]').val();
        if (email) {
            $(this).find('button').text('Subscribed!').prop('disabled', true);
            setTimeout(() => {
                $(this).find('button').text('Subscribe').prop('disabled', false);
                $(this).find('input[type="email"]').val('');
            }, 3000);
            console.log('Newsletter subscription: ' + email);
        }
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 800);
        }
    });

    // Animate elements on scroll
    $(window).scroll(function() {
        $('.category-card, .product-card, .feature').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate-in');
            }
        });
    });

    // Initialize animations
    setTimeout(() => {
        $('.hero-content').addClass('animate-in');
    }, 500);
});
