// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { menuToggle } from './modules/burger-menu';
import { heroSwiper } from './modules/hero-swiper';
import { toursSwiper } from './modules/tours-swiper';
import { trainingSwiper } from './modules/training-swiper';
import { reviewsSwiper } from './modules/reviews-swiper';
import { advantagesSwiper } from './modules/advantages-swiper';
import { gallerySwiper } from './modules/gallery-swiper';

menuToggle();
heroSwiper.init();
toursSwiper.init();
trainingSwiper.init();
reviewsSwiper.init();
advantagesSwiper.init();
gallerySwiper.init();

