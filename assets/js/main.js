(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);

//Testimonials Slider
$(document).ready(function(){
	pagenum = 1;
	function AutoRotate() {
		 var myele = null;
		 var allElements = document.getElementsByTagName('label');
		 for (var i = 0, n = allElements.length; i < n; i++) {
			 var myfor = allElements[i].getAttribute('for');
			 if ((myfor !== null) && (myfor == ('slide_2_' + pagenum))) {
				 allElements[i].click();
				 break;
			 }
		 }
		 if (pagenum == 3) {
			 pagenum = 1;
		 } else {
			 pagenum++;
		 }
	}
	setInterval(AutoRotate, 5000);
});

// POST form data to zapier on submit
$('#myForm').submit(function(e){
	e.preventDefault();
	$.ajax({
			url:'https://hooks.zapier.com/hooks/catch/4065334/ep7xus/',
			type:'post',
			data:$('#myForm').serialize(),
			success:function(){
				// Redirect to another success page
				window.location = "https://peterben90.github.io/churchill-meadows-website/";
			}
	});
});

$('#sellForm').submit(function(e){
	e.preventDefault();
	$.ajax({
			url:'https://hooks.zapier.com/hooks/catch/4065334/epjoed/',
			type:'post',
			data:$('#sellForm').serialize(),
			success:function(){
				// Redirect to another success page
				window.location = "https://peterben90.github.io/churchill-meadows-website/";
			}
	});
});