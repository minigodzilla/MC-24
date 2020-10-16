(function ($) {
	"use strict"; // Start of use strict

	$(document).ready(function () {

		setVideoContainer();

		// owl carousels: art/renderings and 10 reasons

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

		// event handler with jQuery AJAX for register form

		$('.ec-btn-submit').click(function (event) {

			//stop submit the form, we will post it manually.
			event.preventDefault();

			// Get form
			var form = $('.ec-register-form')[0];

			// Create an FormData object 
			var data = new FormData(form);

			// disabled the submit button
			$('.ec-btn-submit').prop('disabled', true);

			$.ajax({
				type: "POST",
				enctype: 'multipart/form-data',
				url: "/upload.php",
				data: data,
				processData: false,
				contentType: false,
				cache: false,
				timeout: 800000,
				success: function (data) {

					$('.ec-form-fields').addClass('d-none');
					$('.ec-form-success').removeClass('d-none');

				},
				error: function (e) {

					console.log("ERROR : ", e);

					$('.ec-form-fields').addClass('d-none');
					$('.ec-form-error').removeClass('d-none');

				}
			});

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
