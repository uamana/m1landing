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

    function initOrDestroySplide(selector, splideInstance, config) {
        const isMobile = window.innerWidth <= MOBILE_MAX_WIDTH;
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
    initOrDestroySplide("#principals .splide", splidePrincipals, splidePrincipalsConfig);

    // Re-check on resize
    window.addEventListener('resize', function() {
        splidePrincipals = initOrDestroySplide("#principals .splide", splidePrincipals, splidePrincipalsConfig);
    });

    const tourSliderConfig = {
        type: 'loop',
        pagination: false,
        arrows: true,
        gap: '1.5rem',
    };

    /* Mount inner tour image sliders after outer tours slider so nested Splide inits don't conflict */
    function initTourImageSliders() {
        var el10 = document.querySelector('#tour-slider-10');
        if (el10) {
            new Splide('#tour-slider-10', tourSliderConfig).mount();
        }
        var el14 = document.querySelector('#tour-slider-14');
        if (el14) {
            new Splide('#tour-slider-14', tourSliderConfig).mount();
        }
    }

    if (window.innerWidth <= TOURS_SLIDER_MAX_WIDTH) {
        requestAnimationFrame(initTourImageSliders);
    } else {
        initTourImageSliders();
    }

    

    // Tours wrapper: on mobile/tablet all .tour cards in one slider (no arrows, no pagination)
    let splideToursMobile = null;
    const toursMobileSliderConfig = {
        type: 'slide',
        perPage: 1,
        pagination: false,
        arrows: false,
        gap: '1rem',
        drag: true,
    };

    function initOrDestroyToursSlider() {
        const useSlider = window.innerWidth <= TOURS_SLIDER_MAX_WIDTH;
        const el = document.querySelector('#tours-mobile-slider');
        if (!el) return splideToursMobile;

        if (useSlider && !splideToursMobile) {
            splideToursMobile = new Splide('#tours-mobile-slider', toursMobileSliderConfig);
            splideToursMobile.mount();
        }
        if (!useSlider && splideToursMobile) {
            splideToursMobile.destroy(true);
            splideToursMobile = null;
            el.classList.remove('is-initialized', 'is-overflow');
        }
        return splideToursMobile;
    }

    initOrDestroyToursSlider();
    window.addEventListener('resize', function() {
        splideToursMobile = initOrDestroyToursSlider();
    });

    
});