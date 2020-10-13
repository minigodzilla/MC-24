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
					items:1
				},
				997:{
					items:5,
					slideBy: 5
				}
			}
		});

	});

	function setVideoContainer() {
		$('.video-container .video-poster').on('click', function() {

			var container = $(this).parent();
			var frame = container.find('.video-frame');
			var poster = container.find('.video-poster');

			var videoID = 'KnX1YlXxcvY';

			container.addClass('video-open');
			frame.prepend('<iframe src="https://www.youtube.com/embed/' + videoID + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

		})
	}

})(jQuery); // End of use strict
