import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.gallery__swiper', {
  direction: 'horizontal',
  modules: [Navigation],
  containerModifierClass: 'gallery__swiper-',
  wrapperClass: 'gallery__swiper-wrapper',
  navigation: {
    nextEl: '.slider-navigation__button--next',
    prevEl: '.slider-navigation__button--prev',
  },
  loop: true,
  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide: 0,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 5,
      initialSlide: 0,
    },

    1440: {
      allowTouchMove: false,
    }
  }
});

const gallerySwiper = document.querySelector('.gallery__swiper').swiper;

export { swiper, gallerySwiper };
