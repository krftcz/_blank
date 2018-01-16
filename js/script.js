jQuery(document).ready(function ($) {

	// wrap tables for mobile scrolling
	function wrapTables() {
		if ($("table").length) {
			$("*:not(.scroll-inside) > table").each(function () {
				$(this).wrap("<div class='scroll-inside'></div>");
			});
		}
	}
	wrapTables();

	// smooth scroll
	$("body").on('click', 'a[href^="#"]', function (e) {
		e.preventDefault();
		var target = this.hash,
			$target = $(target);
		if (target.length) {
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing', function () {
				window.location.hash = target;
			});
		}
	});

});
