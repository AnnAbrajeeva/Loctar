import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


const funcSlider = new Swiper('.functions__slider', {
  slidesPerView: 1,

  navigation: {
    nextEl: ".func-slider__arrow--right",
    prevEl: ".func-slider__arrow--left",
  },
  pagination: {
    // el: ".reviews__slider-pag",
    // type: "fraction",
  },

});

const tabsSlider = new Swiper('.functions__tabs', {


  // pagination: {
  //   el: ".reviews__slider-pag",
  //   type: "fraction",
  // },
});


export {funcSlider, tabsSlider};

