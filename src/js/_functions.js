// Подключение свайпера
// sliders main page
import Swiper, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
    Thumbs,
} from "swiper";

Swiper.use([Navigation, Pagination, EffectFade, Autoplay, Thumbs]);

// const cardSlider = document.querySelector("");
// const cardSliderThumbs = document.querySelector(".mySwiper2");

const eSwiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: eSwiper,
    },
});

if (document.querySelector(".hero__slider")) {
    new Swiper(".hero__slider", {
        // loop: true,
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        autoHeight: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        navigation: {
            nextEl: ".hero-arrow.swiper-button-next",
            prevEl: ".hero-arrow.swiper-button-prev",
        },
    });
}

const brandsSlider = document.querySelector(".brands-slider");
if (brandsSlider) {
    const buttonNext = brandsSlider.parentElement.querySelector(
        ".swiper-button-next"
    );
    const buttonPrev = brandsSlider.parentElement.querySelector(
        ".swiper-button-prev"
    );
    new Swiper(brandsSlider, {
        slidesPerView: 5,
        spaceBetween: 12,
        navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
}

const reviewsSlider = document.querySelector(".reviews-slider");
if (reviewsSlider) {
    const buttonNext = reviewsSlider.parentElement.querySelector(
        ".reviews-arrow--next"
    );
    const buttonPrev = reviewsSlider.parentElement.querySelector(
        ".reviews-arrow--prev"
    );
    new Swiper(reviewsSlider, {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
}

const acticlesSlider = document.querySelector(".articles-slider");
if (acticlesSlider) {
    const buttonNext = acticlesSlider.parentElement.querySelector(
        ".articles-arrow--next"
    );
    const buttonPrev = acticlesSlider.parentElement.querySelector(
        ".articles-arrow--prev"
    );
    new Swiper(acticlesSlider, {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
}

const cardNestedSliders = document.querySelectorAll(".card-slider");
if (cardNestedSliders) {
    cardNestedSliders.forEach((slider) => {
        const buttonNext =
            slider.parentElement.querySelector(".card-arrow--next");
        const buttonPrev =
            slider.parentElement.querySelector(".card-arrow--prev");
        new Swiper(slider, {
            slidesPerView: 1,
            nested: true,
            allowTouchMove: false,
            navigation: {
                nextEl: buttonNext,
                prevEl: buttonPrev,
            },
        });
    });
}
const accessoriesSlider = document.querySelector(".accessories-list");
if (accessoriesSlider) {
    const buttonNext = accessoriesSlider.parentElement.querySelector(
        ".swiper-button-next"
    );
    const buttonPrev = accessoriesSlider.parentElement.querySelector(
        ".swiper-button-prev"
    );
    new Swiper(accessoriesSlider, {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            640: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
}

const tabVideoSlider = document.querySelector(".tab-video-slide");
if (tabVideoSlider) {
    new Swiper(tabVideoSlider, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".video-button-next",
            prevEl: ".video-button-prev",
        },
    });
    new Swiper(".accessory-slide", {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            320: { slidesPerView: 2 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            990: { slidesPerView: 3 },
            1200: { slidesPerView: 2.3 },
            1400: { slidesPerView: 3 },
        },
        navigation: {
            nextEl: ".accessory-button-next",
            prevEl: ".accessory-button-prev",
        },
    }),
        new Swiper(".similar-slide", {
            loop: false,
            slidesPerView: 4,
            spaceBetween: 10,
            breakpoints: {
                320: { slidesPerView: 1.5 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                990: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
                1400: { slidesPerView: 3 },
            },
            navigation: {
                nextEl: ".similar-button-next",
                prevEl: ".similar-button-prev",
            },
        });
}

const cardsList = document.querySelectorAll(".cards-list");
if (cardsList.length) {
    cardsList.forEach((slider) => {
        const buttonNext =
            slider.parentElement.querySelector(".cards-arrow--next");
        const buttonPrev =
            slider.parentElement.querySelector(".cards-arrow--prev");
        new Swiper(slider, {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: buttonNext,
                prevEl: buttonPrev,
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },

                640: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                991: {
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },
        });
    });
}

const keysSlider = new Swiper(".keys-slide", {
    spaceBetween: 20,
    navigation: {
        nextEl: ".keys-button-next",
        prevEl: ".keys-button-prev",
    },
    pagination: {
        el: ".keys-pagination",
        clickable: true,
        renderBullet: function (e, t) {
            return '<span class="' + t + '">' + (e + 1) + "</span>";
        },
    },
});

const slideDate = new Swiper(".slide-date", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".date-button-next",
        prevEl: ".date-button-prev",
    },
});

new Swiper(".slide-images", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper2-button-next",
        prevEl: ".swiper2-button-prev",
    },
    thumbs: { swiper: slideDate },
});

// range-slider on catalog page
import noUiSlider from "nouislider";

const slider = document.querySelector(".js-range-slider");
const minCost = document.querySelector(".js-input-from");
const maxCost = document.querySelector(".js-input-to");
if (slider) {
    noUiSlider.create(slider, {
        start: [2000, 40000000], // Handle start position
        step: 10, // Slider moves in increments of '10'
        margin: 20, // Handles must be more than '20' apart
        connect: true, // Display a colored bar between the handles
        behaviour: "tap-drag", // Move handle on tap, bar is draggable
        format: {
            to: function (value) {
                return value + "";
            },
            from: function (value) {
                return Number(value.replace("", ""));
            },
        },
        range: {
            min: 2000,
            max: 36000,
        },
    });

    slider.noUiSlider.on("update", function (values, handle) {
        if (handle) {
            maxCost.value = Math.floor(parseInt(values[handle]));
        } else {
            minCost.value = Math.floor(parseInt(values[handle]));
        }
    });

    minCost.addEventListener("change", function () {
        console.log(this.value);
        slider.noUiSlider.set([Math.floor(Number(this.value)), null]);
    });

    maxCost.addEventListener("change", function () {
        slider.noUiSlider.set([Math.floor(Number(this.value)), null]);
    });
}

import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]");
