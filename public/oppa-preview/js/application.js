console.clear();

$(document).ready(function() {
	$('#hero .gallery').parallax({imageSrc: 'https://www.chowstatic.com/assets/2014/09/29505_kimchi_3000x2000.jpg'});

	$('nav .hamburger').on('click', function() {
		$('nav li:not(:has(>.logo))').slideToggle(150);
	});

	$(window).resize(function() {
		if($(window).width() <= 768) $('nav li:not(:has(>.logo))').hide();
		else $('nav li:not(:has(>.logo))').show();
	}).resize();
});
