document.addEventListener("DOMContentLoaded", () => {
    new Splide('#carousel', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        interval: 5000,
        focus: 'center',
        gap: '20px',
        pagination: true,
        arrows: true,
    }).mount();
});
