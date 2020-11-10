import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

// ! Burger-menu for desctop and mobile
const menuToggle = document.querySelector('#menu-toggle');
const menuHide = document.querySelector('#menu-hide');
const menuLogo = document.querySelector('#logo');

menuToggle.addEventListener('click', function () {
	let body = document.querySelector('body');
	let html = document.documentElement.clientWidth;
	let bodyPadding = window.innerWidth - html;

	menuToggle.classList.toggle('burger--active');
	menuHide.classList.toggle('menu--hide');
	menuLogo.classList.toggle('header__logo--left');

	if (window.matchMedia('(max-width: 768px)').matches && menuHide.classList.contains('menu--hide')) {
		document.querySelector('.header').style.paddingRight = bodyPadding + 'px';
		body.style.overflow = 'hidden';
		menuHide.style.right = '-' + (window.innerWidth - html) + 'px';
	} else {
		document.querySelector('.header').style.paddingRight = 0 + 'px';
		body.style.overflow = 'visible';
		menuHide.style.right = '0';
	}
});



// ! Slider swiper for reviews section
const mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})