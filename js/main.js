// Description
	console.log('Designed By: Xing.Huang');
// Owl
	$("#owl-demo").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
	});

// scroll
	$('.bg-holder').parallaxScroll({
		friction: 0.5
	});