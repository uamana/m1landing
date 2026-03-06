document.addEventListener('DOMContentLoaded', function() {
    const splideSelector = '#principals .splide';
    const MOBILE_MAX_WIDTH = 767; // slider only below tablet

    let splideInstance = null;

    function initOrDestroySplide() {
        const isMobile = window.innerWidth <= MOBILE_MAX_WIDTH;
        const el = document.querySelector(splideSelector);

        if (!el) return;

        if (isMobile && !splideInstance) {
            splideInstance = new Splide(splideSelector, {
                direction: 'ltr',
                wheel: true,
                releaseWheel: true,
                heightRatio: 0.7,
                pagination: false,
                fixedWidth: '70%',
                gap: '3rem',
                arrows: false,
            });
            splideInstance.mount();
        }

        if (!isMobile && splideInstance) {
            splideInstance.destroy(true);
            splideInstance = null;
            el.classList.remove('is-initialized', 'is-overflow');
        }
    }

    // Initial check
    initOrDestroySplide();

    // Re-check on resize
    window.addEventListener('resize', function() {
        initOrDestroySplide();
    });
});