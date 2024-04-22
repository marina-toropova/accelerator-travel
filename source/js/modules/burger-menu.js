const navList = document.querySelector('.nav__list');
const navToggle = document.querySelector('.nav__toggle');
const body = document.body;

const menuToggle = () => {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('nav__toggle--closed');
    navList.classList.toggle('nav__list--closed');

    if (!navList.classList.contains('nav__list--closed')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  });
};

export { menuToggle };
