$(function() {

	$('header button').on('click', function(event) {
		$('header nav').is(':visible') ? $('header nav').hide() : $('header nav').show();
	});

});
