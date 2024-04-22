const navList = document.querySelector('.nav__list');
const navToggle = document.querySelector('.nav__toggle');

const menuToggle = () => {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('nav__toggle--closed');
    navList.classList.toggle('nav__list--closed');
  });
};

export { menuToggle };
