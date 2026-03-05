document.addEventListener('DOMContentLoaded', function() {
    const splide = new Splide('.splide', {
        direction: 'ltr',
        wheel: true,
        releaseWheel: true,
        heightRatio: 0.8,
        pagination: false,
        fixedWidth: "80%",
        gap: "3rem",
        arrows: false,
    }).mount();
});