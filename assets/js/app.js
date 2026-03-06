document.addEventListener('DOMContentLoaded', function() {
    const MOBILE_MAX_WIDTH = 767; // slider only below tablet
    const TOURS_SLIDER_MAX_WIDTH = 991; // tours-as-slider below desktop

    let splidePrincipals = null;
    const splidePrincipalsConfig = {
        direction: 'ltr',
        wheel: true,
        releaseWheel: true,
        heightRatio: 0.7,
        pagination: false,
        fixedWidth: '70%',
        gap: '3rem',
        arrows: false,
    };

    let splideToursMobile = null;
    const toursMobileSliderConfig = {
        type: 'slide',
        perPage: 1,
        pagination: false,
        arrows: true,
        gap: '1rem',
        drag: true,
        classes: {
            arrows: 'tours-mobile-slider__arrows',
        },
    };

    function initOrDestroySplide(selector, splideInstance, breakpoint, config) {
        const isMobile = window.innerWidth <= breakpoint;
        const el = document.querySelector(selector);

        if (!el) return;

        if (isMobile && !splideInstance) {
            splideInstance = new Splide(selector, config);
            splideInstance.mount();
        }

        if (!isMobile && splideInstance) {
            splideInstance.destroy(true);
            splideInstance = null;
            el.classList.remove('is-initialized', 'is-overflow');
        }
        return splideInstance;
    }

    // Initial check
    initOrDestroySplide("#principals .splide", splidePrincipals, MOBILE_MAX_WIDTH, splidePrincipalsConfig);
    initOrDestroySplide("#tours-mobile-slider", splideToursMobile, TOURS_SLIDER_MAX_WIDTH, toursMobileSliderConfig);

    // Re-check on resize
    window.addEventListener('resize', function() {
        splidePrincipals = initOrDestroySplide(
            "#principals .splide", 
            splidePrincipals, 
            MOBILE_MAX_WIDTH, 
            splidePrincipalsConfig
        );
        splideToursMobile = initOrDestroySplide(
            "#tours-mobile-slider", 
            splideToursMobile, 
            TOURS_SLIDER_MAX_WIDTH, 
            toursMobileSliderConfig
        );
    });

    const tourSliderConfig = {
        type: 'loop',
        pagination: false,
        arrows: true,
        gap: '1.5rem',
    };

    const el10 = document.querySelector('#tour-slider-10');
    if (el10) {
        new Splide('#tour-slider-10', tourSliderConfig).mount();
    }
    const el14 = document.querySelector('#tour-slider-14');
    if (el14) {
        new Splide('#tour-slider-14', tourSliderConfig).mount();
    }
});