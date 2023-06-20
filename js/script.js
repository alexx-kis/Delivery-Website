'use strict';

/*==================================== TABS ====================================*/

; (function () {
	let links = document.querySelectorAll('.tabs__menu-link');
	let tabs = document.querySelectorAll('.tab');

	for (let i = 0; i < tabs.length; i++) {
		links[i].addEventListener('click', function () {
			document.querySelector('.tab--active').classList.remove('tab--active');
			tabs[i].classList.add('tab--active');
			document.querySelector('.tabs__menu-link--active').classList.remove('tabs__menu-link--active');
			links[i].classList.add('tabs__menu-link--active');
		});
	}
	
})();

/*==================================== ACC ====================================*/

; (function () {
	
	let tabs = document.querySelectorAll('.acc__tab');
	let links = document.querySelectorAll('.acc__link');



	for (let i = 0; i < tabs.length; i++) {
		links[i].addEventListener('click', function () {
			let open = document.querySelector('.acc__tab--active');
			if (tabs[i].classList.contains('acc__tab--active')) {
				tabs[i].classList.remove('acc__tab--active');

			} else {
				tabs[i].classList.add('acc__tab--active');
				if (open) {
					open.classList.remove('acc__tab--active');

				}
			}
		});
	}
})();

/*====================================  ====================================*/

; (function () {
	
	let contents = document.querySelectorAll('.footer__column-list');
	let headings = document.querySelectorAll('.footer__column-heading');



	for (let i = 0; i < headings.length; i++) {
		headings[i].addEventListener('click', function () {
			let open = document.querySelector('.footer__column-list--active');
			if (contents[i].classList.contains('footer__column-list--active')) {
				contents[i].classList.remove('footer__column-list--active');

			} else {
				contents[i].classList.add('footer__column-list--active');
				if (open) {
					open.classList.remove('footer__column-list--active');

				}
			}
		});
	}
})();

/*==================================== BURGER ====================================*/

; (function () {
	let burger = document.querySelector('.header__burger');
	let aside = document.querySelector('.header__aside');
	
	
	burger.addEventListener('click', function () {
		this.classList.toggle('header__burger--active');
		aside.classList.toggle('header__aside--open');
		
		
	});
})();