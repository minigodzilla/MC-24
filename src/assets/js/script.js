(function ($) {
	"use strict"; // Start of use strict

	$(document).ready(function () {

		setVideoContainer();

		$('.ec-art-carousel .ec-carousel').owlCarousel({
			dots: true,
			loop: true,
			nav: true,
			responsive:{
				0:{
					items:1
				},
				992:{
					items:1
				}
			}
		});

		$('.ec-reasons .ec-carousel').owlCarousel({
			margin: 40,
			dots: false,
			nav: true,
			responsive:{
				0:{
					items:1
				},
				992:{
					items:5,
					slideBy: 5,
					smartSpeed: 150
				}
			}
		});

	});

	function setVideoContainer() {
		$('.ec-video-container .ec-video-poster').on('click', function() {

			var container = $(this).parent();
			var frame = container.find('.ec-video-frame');
			var poster = container.find('.ec-video-poster');

			container.addClass('ec-video-open');
			frame.prepend('<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/468269570?autoplay=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>');

		})
	}

})(jQuery); // End of use strict
