import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

// Burger-menu for desctop and mobile
const menuToggle = document.querySelector('#menu-toggle');
const menuHide = document.querySelector('#menu-hide');
const menuLogo = document.querySelector('#logo');

menuToggle.onclick = function () {
	menuToggle.classList.toggle('burger--active');
	menuHide.classList.toggle('menu--hide');
	menuLogo.classList.toggle('header__logo--left');
}

// Slider swiper for reviews section
const mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})