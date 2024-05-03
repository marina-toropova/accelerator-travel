import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.reviews__swiper', {
  direction: 'horizontal',
  modules: [Navigation],
  containerModifierClass: 'reviews__swiper-',
  wrapperClass: 'reviews__swiper-wrapper',
  navigation: {
    nextEl: '.slider-navigation__button--next',
    prevEl: '.slider-navigation__button--prev',
  },
  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide: 0,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      initialSlide: 0,
    },

    1440: {
      initialSlide: 0,
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

const reviewsSwiper = document.querySelector('.reviews__swiper').swiper;

export { swiper, reviewsSwiper };
