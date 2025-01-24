document.addEventListener('DOMContentLoaded', function () {
    var glide1 = new Glide('.first-glide', {
        type: 'carousel',
        perView: 4,
        focusAt: 'center',
        breakpoints: {

            1024: {
                perView: 2,
            },
            768: {
                perView: 1,
            },
        },
    }).mount();

    var glide2 = new Glide('.second-glide', {
        type: 'carousel',
        perView: 3,
        focusAt: 'center',
        breakpoints: {
            1024: {
                perView: 2,
            },
            768: {
                perView: 2,
            },
            500: {
                perView: 1,
            }
        }
    }).mount();
    var glide3 = new Glide('.third-glide', {
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
    }).mount();
});
