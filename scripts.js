const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu_place_header');
const menuClose = document.querySelector('.header__burger-close');

burger.addEventListener('click', function() {
  menu.classList.add('menu_place_header-show');

  menuClose.style.display = 'block';
  burger.style.display = 'none';

});

menuClose.addEventListener('click', function() {
  menu.classList.remove('menu_place_header-show');

  burger.style.display = 'block';
  menuClose.style.display = 'none';

});