import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const swiper = new Swiper('.training__swiper', {
  direction: 'horizontal',
  modules: [Navigation],
  containerModifierClass: 'training__swiper-',
  wrapperClass: 'training__swiper-wrapper',
  navigation: {
    nextEl: '.training__slider-navigation-button--next',
    prevEl: '.training__slider-navigation-button--prev',
  },
  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 15,
      initialSlide: 2,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0,
    },

    1440: {
      initialSlide: 0,
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

const trainingSwiper = document.querySelector('.training__swiper').swiper;

export { swiper, trainingSwiper };
