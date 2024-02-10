; (function () {

	'use strict';



	// iPad and iPod detection	
	var isiPad = function () {
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function () {
		return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
		);
	};


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};

	var burgerMenu = function () {

		$('.js-colorlib-nav-toggle').on('click', function (event) {
			event.preventDefault();
			var $this = $(this);
			if ($('body').hasClass('menu-show')) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function () {
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};

	// Animations

	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });
	};


	var counter = function () {
		$('.js-counter').countTo({
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			},
		});
	};

	var counterWayPoint = function () {
		if ($('#colorlib-counter').length > 0) {
			$('#colorlib-counter').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(counter, 400);
					$(this.element).addClass('animated');
				}
			}, { offset: '90%' });
		}
	};

	// Owl Carousel
	var owlCarouselFeatureSlide = function () {
		var owl = $('.owl-carousel1');
		owl.owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoplay: true,
			loop: true,
			margin: 0,
			nav: true,
			dots: false,
			autoHeight: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			},
			navText: [
				"<i class='icon-arrow-left3 owl-direction'></i>",
				"<i class='icon-arrow-right3 owl-direction'></i>"
			]
		});
		var owl2 = $('.owl-carousel');
		owl2.owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoplay: true,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			autoHeight: true,
			items: 1,
			navText: [
				"<i class='icon-arrow-left3 owl-direction'></i>",
				"<i class='icon-arrow-right3 owl-direction'></i>"
			]
		});
		var owl3 = $('.owl-carousel3');
		owl3.owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoplay: true,
			loop: true,
			margin: 0,
			nav: false,
			dots: false,
			autoHeight: true,
			items: 1,
			navText: [
				"<i class='icon-arrow-left3 owl-direction'></i>",
				"<i class='icon-arrow-right3 owl-direction'></i>"
			]
		});
	};




	// Document on load.
	$(function () {
		fullHeight();
		burgerMenu();
		counterWayPoint();
		contentWayPoint();
		owlCarouselFeatureSlide();
	});


}());

// cursor
if (window.innerWidth >= 1024) {
	document.addEventListener('DOMContentLoaded', function () {
		const cursorCircle = document.createElement('div');
		cursorCircle.id = 'cursorCircle';
		cursorCircle.className = 'cursor-circle';
		document.body.appendChild(cursorCircle);

		document.addEventListener('mousemove', function (e) {
			cursorCircle.style.left = e.clientX + 'px'; // Use clientX and clientY for fixed positioning
			cursorCircle.style.top = e.clientY + 'px';
		});
	});
}

// text animation

// function animateText(element) {
// 	let oldText = element.innerText;
// 	let maxLength = oldText.length;
// 	let currentIndex = 0;
// 	let animation = setInterval(function () {
// 		let result = '';
// 		for (let i = 0; i < maxLength; i++) {
// 			if (i <= currentIndex) {
// 				if (i === currentIndex - 1) {
// 					result += oldText.charAt(i).fontcolor("#00efa6");
// 				} else {
// 					result += oldText.charAt(i);
// 				}
// 			} else {
// 				result += String.fromCharCode(97 + Math.floor(Math.random() * 26));
// 			}
// 		}
// 		element.innerHTML = result;
// 		currentIndex++;
// 		if (currentIndex >= maxLength) {
// 			element.innerHTML = oldText;
// 		}
// 	}, 2000 / maxLength);
// }

// // Create an Intersection Observer
// const observer = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		if (entry.isIntersecting) {
// 			const target = entry.target;
// 			animateText(target);
// 			observer.unobserve(target); // Stop observing once animation starts
// 		}
// 	});
// }, { threshold: 0.5 });

// window.onload = function () {
// 	const targets = document.querySelectorAll('#animatedText');
// 	targets.forEach(target => {
// 		observer.observe(target);
// 	});
// };