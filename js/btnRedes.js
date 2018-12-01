/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	// taken from mo.js demos
	function isIOSSafari() {
		var userAgent;
		userAgent = window.navigator.userAgent;
		return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
	};

	// taken from mo.js demos
	function isTouch() {
		var isIETouch;
		isIETouch = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
		return [].indexOf.call(window, 'ontouchstart') >= 0 || isIETouch;
	};

	// taken from mo.js demos
	var isIOS = isIOSSafari(),
		clickHandler = isIOS || isTouch() ? 'touchstart' : 'click';

	function extend( a, b ) {
		for( var key in b ) {
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function Animocon(el, options) {
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );

		this.timeline = new mojs.Timeline();

		for(var i = 0, len = this.options.tweens.length; i < len; ++i) {
			this.timeline.add(this.options.tweens[i]);
		}

		var self = this;
		this.el.addEventListener(clickHandler, function() {
		self.timeline.replay();
		});
	}

	var items = [].slice.call(document.querySelectorAll('ol.Grid > .grid__Item'));

	function init() {

		/* Icon 11 */
		var el0 = items[0].querySelector('button.icobutton'), el0span = el0.querySelector('span');
		var opacityCurve1 = mojs.easing.path('M0,100 L20,100 L20,1 L100,1');
		var translationCurve1 = mojs.easing.path('M0,100h20V0c0,0,0.2,101,80,101');
		new Animocon(el0, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 	el0,
					count: 		2,
					radius: 	{10:90},
					angle: 		92,
					top: 					'90%',
					children: {
						shape: 				'line',
						fill: 				'#fff',
						scale: 				1,
						radius: 			{40:0},
						stroke: 			'#fff',
						strokeWidth: 	{4:1},
						strokeLinecap:'round',
						opacity: 			0.5,
						duration: 		500,
						delay: 				200,
						easing: 			mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// burst animation
				new mojs.Burst({
					parent: 			el0,
					count: 				3,
					radius: 			{10:40},
					angle: 				182,
					top: 					'90%',
					children: {
						shape: 			'line',
						fill: 			'#fff',
						opacity: 		0.5,
						scale: 			1,
						radius: 		{10:0},
						stroke: 		'#fff',
						strokeWidth:{4:1},
						strokeLinecap: 'round',
						duration: 	600,
						delay: 			200,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// ring animation
				new mojs.Shape({
					parent: el0,
					radius: 	{40: 0},
					radiusY: 	{20: 0},
					fill: 		'#fff',
					stroke: 	'#fff',
					strokeWidth: 1,
					opacity: 	0.3,
					top: 			'90%',
					duration: 400,
					delay: 		100,
					easing: 	'bounce.out'
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 500,
					easing: mojs.easing.bounce.out,
					onUpdate: function(progress) {
						var translationProgress = translationCurve1(progress);
						el0span.style.WebkitTransform = el0span.style.transform = 'translate3d(0,' + -450 * translationProgress + '%,0)';

						var colorProgress = opacityCurve1(progress);
						el0.style.color = '#CAF903' ;
					}
				})
			]
		});
		/* Icon 1 */
		/* Icon 2 */
		var el1 = items[1].querySelector('button.icobutton'), el1span = el1.querySelector('span');
		var opacityCurve2 = mojs.easing.path('M0,100 L20,100 L20,1 L100,1');
		var translationCurve2 = mojs.easing.path('M0,100h20V0c0,0,0.2,101,80,101');
		new Animocon(el1, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 	el1,
					count: 		2,
					radius: 	{10:90},
					angle: 		92,
					top: 					'90%',
					children: {
						shape: 				'line',
						fill: 				'#fff',
						scale: 				1,
						radius: 			{40:0},
						stroke: 			'#fff',
						strokeWidth: 	{4:1},
						strokeLinecap:'round',
						opacity: 			0.5,
						duration: 		500,
						delay: 				200,
						easing: 			mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// burst animation
				new mojs.Burst({
					parent: 			el1,
					count: 				3,
					radius: 			{10:40},
					angle: 				182,
					top: 					'90%',
					children: {
						shape: 			'line',
						fill: 			'#fff',
						opacity: 		0.5,
						scale: 			1,
						radius: 		{10:0},
						stroke: 		'#fff',
						strokeWidth:{4:1},
						strokeLinecap: 'round',
						duration: 	600,
						delay: 			200,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// ring animation
				new mojs.Shape({
					parent: el1,
					radius: 	{40: 0},
					radiusY: 	{20: 0},
					fill: 		'#fff',
					stroke: 	'#fff',
					strokeWidth: 1,
					opacity: 	0.3,
					top: 			'90%',
					duration: 400,
					delay: 		100,
					easing: 	'bounce.out'
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 500,
					easing: mojs.easing.bounce.out,
					onUpdate: function(progress) {
						var translationProgress = translationCurve2(progress);
						el1span.style.WebkitTransform = el1span.style.transform = 'translate3d(0,' + -450 * translationProgress + '%,0)';

						var colorProgress = opacityCurve2(progress);
						el1.style.color = '#CAF903' ;
					}
				})
			]
		});
		/* Icon 2 */
		/* Icon 3 */
		var el2 = items[2].querySelector('button.icobutton'), el2span = el2.querySelector('span');
		var opacityCurve3 = mojs.easing.path('M0,100 L20,100 L20,1 L100,1');
		var translationCurve3 = mojs.easing.path('M0,100h20V0c0,0,0.2,101,80,101');
		new Animocon(el2, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 	el2,
					count: 		2,
					radius: 	{10:90},
					angle: 		92,
					top: 					'90%',
					children: {
						shape: 				'line',
						fill: 				'#fff',
						scale: 				1,
						radius: 			{40:0},
						stroke: 			'#fff',
						strokeWidth: 	{4:1},
						strokeLinecap:'round',
						opacity: 			0.5,
						duration: 		500,
						delay: 				200,
						easing: 			mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// burst animation
				new mojs.Burst({
					parent: 			el2,
					count: 				3,
					radius: 			{10:40},
					angle: 				182,
					top: 					'90%',
					children: {
						shape: 			'line',
						fill: 			'#fff',
						opacity: 		0.5,
						scale: 			1,
						radius: 		{10:0},
						stroke: 		'#fff',
						strokeWidth:{4:1},
						strokeLinecap: 'round',
						duration: 	600,
						delay: 			200,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// ring animation
				new mojs.Shape({
					parent: el2,
					radius: 	{40: 0},
					radiusY: 	{20: 0},
					fill: 		'#fff',
					stroke: 	'#fff',
					strokeWidth: 1,
					opacity: 	0.3,
					top: 			'90%',
					duration: 400,
					delay: 		100,
					easing: 	'bounce.out'
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 500,
					easing: mojs.easing.bounce.out,
					onUpdate: function(progress) {
						var translationProgress = translationCurve3(progress);
						el2span.style.WebkitTransform = el2span.style.transform = 'translate3d(0,' + -450 * translationProgress + '%,0)';

						var colorProgress = opacityCurve3(progress);
						el2.style.color = '#CAF903' ;
					}
				})
			]
		});
		/* Icon 3 */
		/* Icon 4 */
		var el3 = items[3].querySelector('button.icobutton'), el3span = el3.querySelector('span');
		var opacityCurve4 = mojs.easing.path('M0,100 L20,100 L20,1 L100,1');
		var translationCurve4 = mojs.easing.path('M0,100h20V0c0,0,0.2,101,80,101');
		new Animocon(el3, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 	el3,
					count: 		2,
					radius: 	{10:90},
					angle: 		92,
					top: 					'90%',
					children: {
						shape: 				'line',
						fill: 				'#fff',
						scale: 				1,
						radius: 			{40:0},
						stroke: 			'#fff',
						strokeWidth: 	{4:1},
						strokeLinecap:'round',
						opacity: 			0.5,
						duration: 		500,
						delay: 				200,
						easing: 			mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// burst animation
				new mojs.Burst({
					parent: 			el3,
					count: 				3,
					radius: 			{10:40},
					angle: 				182,
					top: 					'90%',
					children: {
						shape: 			'line',
						fill: 			'#fff',
						opacity: 		0.5,
						scale: 			1,
						radius: 		{10:0},
						stroke: 		'#fff',
						strokeWidth:{4:1},
						strokeLinecap: 'round',
						duration: 	600,
						delay: 			200,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// ring animation
				new mojs.Shape({
					parent: el3,
					radius: 	{40: 0},
					radiusY: 	{20: 0},
					fill: 		'#fff',
					stroke: 	'#fff',
					strokeWidth: 1,
					opacity: 	0.3,
					top: 			'90%',
					duration: 400,
					delay: 		100,
					easing: 	'bounce.out'
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 500,
					easing: mojs.easing.bounce.out,
					onUpdate: function(progress) {
						var translationProgress = translationCurve4(progress);
						el3span.style.WebkitTransform = el3span.style.transform = 'translate3d(0,' + -450 * translationProgress + '%,0)';

						var colorProgress = opacityCurve4(progress);
						el3.style.color = '#CAF903' ;
					}
				})
			]
		});
		/* Icon 4 */

		 /*Icon 16*/
		var el16 = document.querySelector('button.icobuttonH'), el16span = el16.querySelector('span');
		var opacityCurve16 = mojs.easing.path('M0,0 L25.333,0 L75.333,100 L100,0');
		var translationCurve16 = mojs.easing.path('M0,100h25.3c0,0,6.5-37.3,15-56c12.3-27,35-44,35-44v150c0,0-1.1-12.2,9.7-33.3c9.7-19,15-22.9,15-22.9');
		var squashCurve16 = mojs.easing.path('M0,100.004963 C0,100.004963 25,147.596355 25,100.004961 C25,70.7741867 32.2461944,85.3230873 58.484375,94.8579105 C68.9280825,98.6531013 83.2611815,99.9999999 100,100');
		new Animocon(el16, {
			tweens : [
				// burst animation (circles)
				new mojs.Burst({
					parent: 		el16,
					count: 			6,
					radius: 		{0:150},
					degree: 		50,
					angle:      -25,
					opacity: 		0.3,
					children: {
						fill: 			'#FF6767',
						scale: 			1,
						radius: 		{'rand(5,15)':0},
						duration: 	1700,
						delay: 			350,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				new mojs.Burst({
					parent: 	el16,
					count: 		3,
					degree: 	0,
					radius: 	{80:250},
					angle:   	180,
					children: {
						top: 			[ 45, 0, 45 ],
						left: 		[ -15, 0, 15 ],
						shape: 		'line',
						radius: 	{60:0},
						scale: 		1,
						stroke: 	'#FF6767',
						opacity:  0.4,
						duration: 650,
						delay: 		200,
						easing: 	mojs.easing.bezier(0.1, 1, 0.3, 1)
					},
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 500,
					onUpdate: function(progress) {
						var translateProgress = translationCurve16(progress),
							squashProgress = squashCurve16(progress),
							scaleX = 1 - 2*squashProgress,
							scaleY = 1 + 2*squashProgress;

						el16span.style.WebkitTransform = el16span.style.transform = 'translate3d(0,' + -180*translateProgress + 'px,0) scale3d(' + scaleX + ',' + scaleY + ',1)';

						var opacityProgress = opacityCurve16(progress);
						el16span.style.opacity = opacityProgress;

						el16.style.color = progress >= 0.75 ? '#FF6767' : '#fff';
					}
				})
			]
		});
		/* Icon 16*/


		/*bursts when hovering the mo.js link*/
		var molinkEl = document.querySelector('.icobuttonH'),
			moTimeline = new mojs.Timeline(),
			moburst1 = new mojs.Burst({
				parent: 			molinkEl,
				count: 				6,
				left: 				'0%',
				top:  				'-50%',
				radius: 			{0:60},
				children: {
					fill : 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
					duration: 	1300,
					easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
				}
			}),
			moburst2 = new mojs.Burst({
				parent: 	molinkEl,
				left: '-100%', top: '-20%',
				count: 		14,
				radius: 		{0:120},
				children: {
					fill: 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
					duration: 	1600,
					delay: 			100,
					easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
				}
			}),
			moburst3 = new mojs.Burst({
				parent: 			molinkEl,
				left: '130%', top: '-70%',
				count: 				8,
				radius: 			{0:90},
				children: {
					fill: 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
					duration: 	1500,
					delay: 			200,
					easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
				}
			}),
			moburst4 = new mojs.Burst({
				parent: molinkEl,
				left: '-20%', top: '-150%',
				count: 		14,
				radius: 	{0:60},
				children: {
					fill: 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
					duration: 	2000,
					delay: 			300,
					easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
				}
			}),
			moburst5 = new mojs.Burst({
				parent: 	molinkEl,
				count: 		12,
				left: '30%', top: '-100%',
				radius: 		{0:60},
				children: {
					fill: 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
					duration: 	1400,
					delay: 			400,
					easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
				}
			});

		moTimeline.add(moburst1, moburst2, moburst3, moburst4, moburst5);
		molinkEl.addEventListener('mouseenter', function() {
			//console.log('Funciono???',molinkEl);
			moTimeline.replay();
		});
	}

	init();

})(window);
