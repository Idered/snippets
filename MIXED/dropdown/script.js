(function($) {

	$('.dropdown').each(function() {

		var $dropdown = $(this),
			$toggle   = $dropdown.children('.dropdown__toggle');

		$toggle.on('click', function() {

			$dropdown.toggleClass('is-open');

			$('.dropdown').not($dropdown).removeClass('is-open');

		});

	});


})(jQuery);