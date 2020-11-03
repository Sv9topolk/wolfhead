
const menuToggle = document.querySelector('#menu-toggle');
const menuHide = document.querySelector('#menu-hide');
const menuLogo = document.querySelector('#logo');

menuToggle.onclick = function () {
	menuToggle.classList.toggle('burger--active');
	menuHide.classList.toggle('menu--hide');
	menuLogo.classList.toggle('header__logo--left');
}
