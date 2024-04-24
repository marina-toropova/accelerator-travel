import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.tours__swiper', {
  direction: 'horizontal',
  modules: [Navigation],
  containerModifierClass: 'tours__swiper-',
  wrapperClass: 'tours__swiper-wrapper',
  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide: 0,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      initialSlide: 0,
    },

    1366: {
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

const toursSwiper = document.querySelector('.tours__swiper').swiper;

export { swiper, toursSwiper };
