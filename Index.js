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
				console.log('workexperience');
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
}