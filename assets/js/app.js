document.addEventListener('DOMContentLoaded', function() {
    const splide = new Splide('.splide', {
        direction: 'ltr',
        wheel: true,
        releaseWheel: true,
        heightRatio: 0.7,
        pagination: false,
        fixedWidth: "70%",
        gap: "3rem",
        arrows: false,
    }).mount();
});