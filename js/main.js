(function ($) {
$(document).ready(function(){
	$('.popup__item').on('click', function(e) {
		e.preventDefault();

		$('.popup__item').removeClass('active');
		$(this).addClass('active');

		$('.popup__page').hide();
		$( $(this).attr('href') ).show();
	});
});
})(jQuery);