import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.advantages__swiper', {

  direction: 'horizontal',
  modules: [Navigation],
  containerModifierClass: 'advantages__swiper-',
  wrapperClass: 'advantages__swiper-wrapper',
  navigation: {
    nextEl: '.slider-navigation__button--next',
    prevEl: '.slider-navigation__button--prev',
  },
  loop: true,
  init: false,

  breakpoints: {

    320: {
      init: false,
    },

    768: {
      init: false,
    },

    1440: {
      initialSlide: 2,
      init: true,
    }
  }
});

const advantagesSwiper = document.querySelector('.advantages__swiper').swiper;

export { swiper, advantagesSwiper };
