document.addEventListener('DOMContentLoaded', function() {
    const MOBILE_MAX_WIDTH = 767; // slider only below tablet

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

    // Tours slider (always enabled on all screen sizes)
    const tourSlider10El = document.querySelector('#tour-slider-10');
    if (tourSlider10El) {
        new Splide(tourSlider10El, tourSliderConfig).mount();
    }

    const tourSlider14El = document.querySelector('#tour-slider-14');
    if (tourSlider14El) {
        new Splide(tourSlider14El, tourSliderConfig).mount();
    }
});