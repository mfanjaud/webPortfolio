$(document).ready(function() {
	$('section#experience a').on('click', function() {
			$('div#modal img').attr('src', $(this).attr('data-image-url') ); 
	});

});
