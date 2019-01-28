{
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

	/* Home page animation ends */

	/* About me page animation starts */

	// The about me Heading animation

	$('.intro1').each(function(){
		$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
	});
	  
	anime.timeline({loop: false})
	.add({
		targets: '.intro1 .letter',
		scale: [4,1],
		opacity: [0,1],
		translateZ: 0,
		easing: "easeOutExpo",
		duration: 950,
		delay: function(el, i) {
		return 70*i;
		}
	}).add({
		targets: '.intro1',
		opacity: 1,
		easing: "easeOutExpo",
		delay: 1000
	});

	// The about me description animation

	let label = document.querySelector('.intro2 .letters');
	charming(label);
	let domletters= Array.from(label.querySelectorAll('span'));
	applyAnime();
	function applyAnime() {
		anime.timeline({loop: false})
		.add({
			targets: domletters,
			duration: 20,
			delay: (t,i) => (i+5)*30,
			easing: 'easeInOutExpo',
			opacity: [0,1]
		})
	}

	/* About me page animation ends */
	
}