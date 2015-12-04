$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

// Smooth Scroll
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	var image = $('.hero-section--app-image'),
	    menuBar = $('.menu-bar'),
	    imageTop = image.offset().top,
	    imageContainer = image.parent();


	if (scroll >= 90) {
		menuBar.addClass("fixed-top");
	} else {
		menuBar.removeClass("fixed-top");
	}

	if (scroll - imageTop > 0 ) {
		image.addClass("fixed-top")
	}

	if (scroll - imageContainer.offset().top < -50) {
		image.removeClass("fixed-top");
	}
});
