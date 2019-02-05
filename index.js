{
	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("moveup").style.display = "block";
		} else {
			document.getElementById("moveup").style.display = "none";
		}
	}

	// When the user clicks on the button, scroll to the top of the document
	function scrollUp() {
		document.body.scrollTop = 0; // For Safari
  		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

	/* Home page animation starts */

	setTimeout(() => document.body.classList.add('render'), 60);
	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
	const total = navdemos.length;
	const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
	const navigate = (linkEl) => {
		document.body.classList.remove('render');
		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
	};
	navdemos.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));
	document.addEventListener('keydown', (ev) => {
		const keyCode = ev.keyCode || ev.which;
		let linkEl;
		if ( keyCode === 37 ) {
			linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
		}
		else if ( keyCode === 39 ) {
			linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
		}
		else {
			return false;
		}
		navigate(linkEl);
	});

	function selectHandler(evt) {
		switch(evt.hash) {
			case '#about':
				$('.intro1').hide();
				$('.intro2').hide();
				setTimeout(function() {loadAboutSection()},700);
				break;
			case '#skills':
				setTimeout(function() {loadSkillSection()},700);
				break;
			case '#workexperience':
				$('.acc').hide();
				$('.cts').hide();
				setTimeout(function() {loadWorkExSection()},700);
				break;
			case '#portfolio':
				console.log('portfolio');
				break;
			case '#contact':
				console.log('contact');
				break;
			default: document.write("Unknown selection<br />")
		}
		
	}

	/* Home page animation ends */

	/* About me page animation starts */

	function loadAboutSection() {
		$('.intro1').show();
		$('.intro2').show();

		$('.intro1').each(function(){
			$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
		});
		let label = document.querySelector('.intro2 .letters');
		charming(label);
		let domletters= Array.from(label.querySelectorAll('span'));

		const headingAnimation={
			targets: '.intro1 .letter',
			scale: [4,1],
			opacity: [0,1],
			translateZ: 0,
			easing: "easeInOutExpo",
			duration: 950,
			delay: function(el, i) {
			return 70*i;
			}
		};

		const paragraphAnimation={
			targets: '.intro1',
			opacity: 1,
			easing: "easeInOutExpo",
			delay: 1000
		}

		const introAnimation={
			targets: domletters,
			duration: 20,
			delay: (t,i) => (i+5)*30,
			offset: '+=100',
			opacity: {
			value: [0,1],
			duration: 300,
			easing: 'easeOutExpo',
			}
		};

		const tl = anime.timeline({
			autoplay: false,
		});

		tl.add(headingAnimation)
		  .add(paragraphAnimation)
		  .add(introAnimation);

		tl.play();
	}

	/* About me page animation ends */

	/* Skills page animation starts */

	function loadSkillSection() {
		
		const skill = document.querySelectorAll('.lists');
		skill.forEach(ele=>{
			charming(ele);
		});
		let skillletters= Array.from(document.querySelectorAll('.lists span'));
		const logoAnimation={
			targets: '.react, .angular, .ember, .javascript, .html, .css, .sass, .jasmine, .jest, .git, .gulp',
			rotate: '1turn',
			loop: true,
		}
		const skillAnimation={
			targets: skillletters,
			translateY: ["1.1em", 0],
			translateX: ["0.55em", 0],
			translateZ: 0,
			rotateZ: [180, 0],
			duration: 750,
			easing: "easeOutExpo",
			delay: function(el, i) {
			return 50 * i;
			}
		};
		const t1 = anime.timeline({
			autoplay: true,
		});

		t1.add(logoAnimation)
		  .add(skillAnimation);
		  
		t1.play();
	}

	/* Skills page animation ends */

	/* WorkEx page animation starts */

	function loadWorkExSection() {
		$('.acc').show();
		
		setTimeout(()=>{
			$('.cts').show();
		},1000);
		
		const workEx1= {
			targets: '.acc',
			translateX: ['100%', 0],
			easing: 'easeInOutBack',
			duration: 950,
			opacity: {
				value: [0,1],
				duration: 100
			},
			delay: function(el, i) {
				return 70 * i;
			}
		}
		const workEx2= {
			targets: '.cts',
			translateX: ['-100%',0],
			easing: 'easeInOutBack',
			duration: 950,
			opacity: {
				value: [0,1],
				duration: 1000
			},
			delay: function(el, i) {
				return 70 * i;
			}
		}
		const t1 = anime.timeline({
			autoplay: false,
		});
		t1.add(workEx1).add(workEx2);
		t1.play();
	}

	/* WorkEx page animation starts */

	google.maps.event.addDomListener(window, 'load', init);
        
	function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 14,

			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(18.515998,73.9211176), // Pune
			disableDefaultUI: true,
			// How you would like to style the map. 
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]}]
		};
		
		
		// Get the HTML DOM element that will contain your map 
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');

		// Create the Google Map using out element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);
		
		var marker = new google.maps.Marker({
			position: mapOptions.center,
			map: map,
			title: 'I am here'
		});
	}
}