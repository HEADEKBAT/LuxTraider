//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let slider_about = new Swiper('.main-slider__body', {
    /*
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    */
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    //autoHeight: true,
    speed: 800,
    //touchRatio: 0,
    //simulateTouch: false,
    loop: true,
    //preloadImages: false,
    //lazy: true,
    // Dotts
    //pagination: {
    //	el: '.slider-quality__pagging',
    //	clickable: true,
    //},
    // Arrows
    navigation: {
        nextEl: '.control-main-slider__arrow_next',
        prevEl: '.control-main-slider__arrow_prev',
    },

    breakpoints: {
        320: {

            autoHeight: true,
        },
        768: {
            autoHeight: false,
        },
    },

    on: {
        lazyImageReady: function () {
            ibg();
        },
    }
    // And if we need scrollbar
    //scrollbar: {
    //	el: '.swiper-scrollbar',
    //},
});
let lots_about = new Swiper('.slider-lots__body', {
    /*
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    */
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 0,
    //autoHeight: true,
    speed: 800,
    //touchRatio: 0,
    //simulateTouch: false,
    loop: true,
    //preloadImages: false,
    //lazy: true,
    // Dotts
    //pagination: {
    //	el: '.slider-quality__pagging',
    //	clickable: true,
    //},
    // Arrows
    navigation: {
        nextEl: '.control-slider-lots__arrow__next',
        prevEl: '.control-slider-lots__arrow__prev',
    },
    // //
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },

    on: {
        lazyImageReady: function () {
            ibg();
        },
    }
    // And if we need scrollbar
    //scrollbar: {
    //	el: '.swiper-scrollbar',
    //},
});

let quotes_about = new Swiper('.slider-quotes__body', {

    effect: 'fade',
    /*autoplay: {
       delay: 3000,
       disableOnInteraction: false,
   },
   */
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    //autoHeight: true,
    speed: 800,
    //touchRatio: 0,
    //simulateTouch: false,
    loop: true,
    //preloadImages: false,
    //lazy: true,
    // Dotts
    //pagination: {
    //	el: '.slider-quality__pagging',
    //	clickable: true,
    //},
    // Arrows
    navigation: {
        nextEl: '.control-slider-quotes__circle',

    }, breakpoints: {
        320: {

            autoHeight: true,
        },
        570: {
            autoHeight: false,
        },
    },




    on: {
        lazyImageReady: function () {
            ibg();
        },
    }
    // And if we need scrollbar
    //scrollbar: {
    //	el: '.swiper-scrollbar',
    //},
});










