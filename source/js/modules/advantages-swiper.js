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
  breakpoints: {

    320: {
      allowTouchMove: false,
      width: 290,
    },

    768: {
      allowTouchMove: false,
      width: 324,
    },

    1440: {
      initialSlide: 1,
      width: 380,
      slidesPerGroup: 1,
      loopAddBlankSlides: false,
      loopAdditionalSlides: 0,
      centeredSlides: true,
      loopPreventsSliding: false,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
    }
  }
});

const advantagesSwiper = document.querySelector('.advantages__swiper').swiper;

export { swiper, advantagesSwiper };
