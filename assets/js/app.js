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

    // Tours slider (always enabled on all screen sizes)
    const tourSliderEl = document.querySelector('#tours .tour-slider .splide');
    if (tourSliderEl) {
        new Splide(tourSliderEl, {
            type: 'loop',
            pagination: false,
            arrows: true,
            gap: '1.5rem',
        }).mount();
    }
});