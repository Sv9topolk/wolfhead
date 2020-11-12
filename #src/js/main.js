import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

// ! Burger-menu for desctop and mobile
const menuToggle = document.querySelector('#menu-toggle');
const menuHide = document.querySelector('#menu-hide');
const menuLogo = document.querySelector('#logo');

let body = document.querySelector('body');
let html = document.documentElement.clientWidth;
let bodyPadding = window.innerWidth - html;

menuToggle.addEventListener('click', function () {
	menuToggle.classList.toggle('burger--active');
	menuHide.classList.toggle('menu--hide');
	menuLogo.classList.toggle('header__logo--left');

	if (window.matchMedia('(max-width: 768px)').matches && menuHide.classList.contains('menu--hide')) {
		document.querySelector('.header').style.paddingRight = bodyPadding + 'px';
		body.style.overflow = 'hidden';
		menuHide.style.right = '-' + (window.innerWidth - html) + 'px';
	} else {
		document.querySelector('.header').removeAttribute('style');
		body.style.overflow = 'visible';
		menuHide.removeAttribute('style');
	}
});

menuHide.addEventListener('click', function (e) {
	let target = e.target;
	if (target.closest('.menu--hide')) {
		menuToggle.classList.toggle('burger--active');
		menuHide.classList.toggle('menu--hide');
		menuLogo.classList.toggle('header__logo--left');

		if (window.matchMedia('(max-width: 768px)').matches) {
			document.querySelector('.header').removeAttribute('style');
			body.style.overflow = 'visible';
		}
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

// ! Tabs for team section
document.querySelectorAll('.tabs-triggers__item').forEach((item) =>
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');

		document.querySelectorAll('.tabs-triggers__item').forEach(
			(child) => child.classList.remove('tabs-triggers__item--active')
		);
		document.querySelectorAll('.member').forEach(
			(child) => child.classList.remove('member--active')
		);

		item.classList.add('tabs-triggers__item--active');
		document.getElementById(id).classList.add('member--active')
	})
);
