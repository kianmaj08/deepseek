// jQuery Scroll-Effekte
$(document).ready(function() {
    // Glatte Scroll-Animation für Ankerlinks
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 70,
            },
            500,
            'linear'
        );
    });
    
    // Parallax-Effekt für Hero-Section
    $(window).scroll(function() {
        const scrolled = $(window).scrollTop();
        $('.hero').css('transform', `translateY(${scrolled * 0.5}px)`);
    });
    
    // Fade-In-Animation für Elemente beim Scrollen
    function checkScroll() {
        const windowHeight = $(window).height();
        const windowTop = $(window).scrollTop();
        const windowBottom = windowTop + windowHeight;
        
        $('.card, .about-text, .contact-form, .contact-info').each(function() {
            const element = $(this);
            const elementHeight = element.outerHeight();
            const elementTop = element.offset().top;
            const elementBottom = elementTop + elementHeight;
            
            // Prüfe, ob das Element im sichtbaren Bereich ist
            if ((elementBottom >= windowTop) && (elementTop <= windowBottom)) {
                element.addClass('visible');
            }
        });
    }
    
    // Initial und bei Scroll prüfen
    checkScroll();
    $(window).scroll(checkScroll);
});
