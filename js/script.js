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

/*==================================== FOOTER ====================================*/

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
	let overlayMenu = document.querySelector('.overlay-menu');
	
	
	burger.addEventListener('click', function () {
		this.classList.toggle('header__burger--active');
		aside.classList.toggle('header__aside--open');
		overlayMenu.classList.toggle('overlay-menu--show');	
	});
	
	overlayMenu.addEventListener('click', function () {
		if (aside.classList.contains('header__aside--open')) {
			overlayMenu.classList.remove('overlay-menu--show');
			aside.classList.remove('header__aside--open');
			burger.classList.remove('header__burger--active');
		}
	});
})();

/*==================================== SEARCH ====================================*/

; (function () {
	let btn = document.querySelector('.header__search-button');
	let bar = document.querySelector('.header__search-bar');
	let overlaySearch = document.querySelector('.overlay-search');

	btn.addEventListener('click', function () {
		bar.classList.toggle('header__search-bar--active');
		overlaySearch.classList.toggle('overlay-search--show');		
	});
	
	overlaySearch.addEventListener('click', function () {
		if (bar.classList.contains('header__search-bar--active')) {
			overlaySearch.classList.remove('overlay-search--show');	
			bar.classList.remove('header__search-bar--active');
			
		}
	});
	
})();