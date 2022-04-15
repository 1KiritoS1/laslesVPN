import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(function() {
	$('.review__slider').slick({
		dots: true,
		appendDots: $('.review__dots'),
		arrows: true,
		prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow'),
		infinite: true,
		slidesToShow: 2,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
				}
			}	
		]
	});

	//* --- Burger --- *//
	const burger = document.querySelector('.header__burger');
	// const burgerBtn = document.querySelector('.btn');
	const burgerMenu = document.querySelector('.nav');
	const burgerList = [burger, burgerMenu];
	burger.addEventListener('click', () => {
		burgerList.forEach((e) => {
			e.classList.toggle('active');
		})
		
		// Anchor crossing
		for (let i = 0; i < burgerList.length; i++) {
			if (burgerList[i].classList.contains('active')) {
				document.body.style.overflow = 'hidden';
				document.documentElement.style.scrollBehavior = 'auto';
			} else {
				document.body.style.overflow = 'auto';	
				document.documentElement.style.scrollBehavior = 'smooth';
			}
		}
	});

	// Anchor crossing
	const navLinks = document.querySelectorAll('.nav__link');
	navLinks.forEach((navLink) => {
		navLink.addEventListener('click', (e) => {
			document.body.style.overflow = 'auto';	
			setTimeout(() => {
				document.documentElement.style.scrollBehavior = 'smooth';	
			}, 1000);
		});
	});
});