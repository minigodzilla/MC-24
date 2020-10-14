(function ($) {
	"use strict"; // Start of use strict

	$(document).ready(function () {

		setVideoContainer();

		$(".owl-carousel").owlCarousel({
			margin: 40,
			dots: false,
			nav: true,
			responsive:{
				0:{
					items:2
				},
				997:{
					items:5,
					slideBy: 5
				}
			}
		});

	});

	function setVideoContainer() {
		$('.ec-video-container .ec-video-poster').on('click', function() {

			var container = $(this).parent();
			var frame = container.find('.ec-video-frame');
			var poster = container.find('.ec-video-poster');

			var videoID = 'KnX1YlXxcvY';

			container.addClass('ec-video-open');
			frame.prepend('<iframe src="https://www.youtube.com/embed/' + videoID + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

		})
	}

})(jQuery); // End of use strict
