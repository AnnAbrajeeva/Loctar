import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const reviewsSlider = new Swiper('.reviews__slider', {
  slidesPerView: 'auto',
  slidesPerView: 4,
  pagination: {
    el: ".reviews__slider-pag",
    type: "fraction",
  },
  navigation: {
    nextEl: ".reviews__slider-next",
    prevEl: ".reviews__slider-prev",
  },
});

export {reviewsSlider};
