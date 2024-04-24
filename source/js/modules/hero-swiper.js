import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet--active',
  },
});

const heroSwiper = document.querySelector('.hero__swiper').swiper;

export { swiper, heroSwiper };
