import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const reviewsSlider = new Swiper('.reviews__slider', {
  slidesPerView: 4,
  pagination: {
    el: ".reviews__slider-pag",
    type: "fraction",
  },
  navigation: {
    nextEl: ".reviews__slider-next",
    prevEl: ".reviews__slider-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true
    },
    728: {
      slidesPerView: 2,
      spaceBetween: 0,
      centeredSlides: false
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: false
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 0,
      centeredSlides: false
    }
  },
});

export {reviewsSlider};
