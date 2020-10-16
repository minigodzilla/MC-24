//----------------------------------------------------------------------------//
// Video Container                                                            //
//----------------------------------------------------------------------------//
$(function()
{

	$('.ec-video-container .ec-video-poster').on('click', function() {

		var container = $(this).parent();
		var frame = container.find('.ec-video-frame');
		var poster = container.find('.ec-video-poster');

		container.addClass('ec-video-open');
		frame.prepend('<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/468269570?autoplay=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>');

	})

});

//----------------------------------------------------------------------------//
// Owl Carousels                                                              //
//----------------------------------------------------------------------------//
$(function()
{
	
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

//----------------------------------------------------------------------------//
// Register Form                                                              //
//----------------------------------------------------------------------------//

$(function()
{
	////////////////////////////////////////////////////////////////////////////////

	var $form              = $('#ec-register-form');
	var $inputs            = $form.find ('.form-control');
	var $email             = $form.find ('.form-control[name=Email]');
	var $button            = $form.find ('.ec-btn-submit');
	var errorState         = false;

	////////////////////////////////////////////////////////////////////////////////

	function isEmail(email) {

		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(!regex.test(email))
		{
			return false;
		}

		else
		{
			return true;
		}
	}

	$inputs.blur (function()
	{
		if (!$(this).val())
		{
			$(this).removeClass ('is-valid').addClass ('is-invalid');
		}

		else
		{
			$(this).removeClass ('is-invalid').addClass ('is-valid');
		}
	});

	$email.blur (function()
	{
		if (!isEmail ($(this).val()))
		{
			$(this).removeClass ('is-valid').addClass ('is-invalid');
		}

		else
		{
			$(this).removeClass ('is-invalid').addClass ('is-valid');
		}

	});

	$button.click (function(e)
	{
		e.preventDefault();

		// Check for empty fields
		$inputs.each (function()
		{
			if (!$(this).val())
			{
				$(this).removeClass ('is-valid').addClass ('is-invalid');
				errorState = true;
			}

			else
			{
				$(this).removeClass ('is-invalid').addClass ('is-valid');
			}
		});

		// Check whether the email is valid
		if (!isEmail ($(this).val()))
		{
			$email.removeClass ('is-valid').addClass ('is-invalid');
			errorState = true;
		}

		else
		{
			$email.removeClass ('is-invalid').addClass ('is-valid');
		}

		// form has errors
		if (errorState)
			return false;

		// get form
		var form = $('#ec-register-form')[0];

		// create an FormData object 
		var data = new FormData(form);

		// prevent duplicate submissions
		$('.ec-btn-submit').prop('disabled', true);

		// do a barrel roll
		$.ajax({
			type: "POST",
			enctype: 'multipart/form-data',
			url: "/register.php",
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
