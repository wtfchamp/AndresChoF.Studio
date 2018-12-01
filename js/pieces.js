/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	// Helper vars and functions.
	function extend( a, b ) {
		for( var key in b ) {
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	// from http://www.quirksmode.org/js/events_properties.html#position
	function getMousePos(e) {
		var posx = 0;
		var posy = 0;
		if (!e) var e = window.event;
		if (e.pageX || e.pageY) 	{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft
				+ document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop
				+ document.documentElement.scrollTop;
		}
		return {
			x : posx,
			y : posy
		}
	}

	// From https://davidwalsh.name/javascript-debounce-function
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	/**
	 * PieceMaker obj.
	 */
	function PieceMaker(el, options) {
		this.el = el;
		this.options = extend({}, this.options);
		extend(this.options, options);
		this._init();
	}

	/**
	 * PieceMaker default options.
	 */
	PieceMaker.prototype.options = {
		// Main image tilt: max and min angles.
		tilt: {maxRotationX: -2, maxRotationY: 3, maxTranslationX: 6, maxTranslationY: -2}
	};

	/**
	 * Init. Create layout and initialize/bind any events.
	 */
	PieceMaker.prototype._init = function() {
		// The source of the main image.
		this.imgsrc = this.el.style.backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "");
		// Window sizes.
		this.win = {width: window.innerWidth, height: window.innerHeight};
		// Container sizes.
		this.dimensions = {width:this.el.offsetWidth, height:this.el.offsetHeight};
		// Render all the pieces defined in the options.

		// Init tilt.
		this.initTilt();
		// Init/Bind events
		this._initEvents();
	};

	/**
	 * Init tilt.
	 */
	PieceMaker.prototype.initTilt = function() {
		if( is3DBuggy ) return;
		this.el.style.transition = 'transform 0.2s ease-out';
		this.tilt = true;
	};

	/**
	 * Remove tilt.
	 */

	PieceMaker.prototype._initEvents = function() {
		const self = this,
			  // Mousemove event / Tilt functionality.
			  onMouseMoveFn = function(ev) {
				requestAnimationFrame(function() {
					if( !self.tilt ) {
						if( is3DBuggy ) {
							self.el.style.transform = 'none';
						}
						return false;
					}
					const mousepos = getMousePos(ev),
						  rotX = 2*self.options.tilt.maxRotationX/self.win.height*mousepos.y - self.options.tilt.maxRotationX,
						  rotY = 2*self.options.tilt.maxRotationY/self.win.width*mousepos.x - self.options.tilt.maxRotationY,
						  transX = 2*self.options.tilt.maxTranslationX/self.win.width*mousepos.x - self.options.tilt.maxTranslationX,
						  transY = 2*self.options.tilt.maxTranslationY/self.win.height*mousepos.y - self.options.tilt.maxTranslationY;

					self.el.style.transform = 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,0) rotate3d(1,0,0,' + rotX + 'deg) rotate3d(0,1,0,' + rotY + 'deg)';
				});
			  },
			  // Window resize.
			  debounceResizeFn = debounce(function() {
				self.win = {width: window.innerWidth, height: window.innerHeight};
				self.el.style.width = self.el.style.height = '';
				const elBounds = self.el.getBoundingClientRect();
				self.dimensions = {width: elBounds.width, height: elBounds.height};
			  }, 10);
		document.addEventListener('mousemove', onMouseMoveFn);
		window.addEventListener('resize', debounceResizeFn);
	};

	const DOM = {}, is3DBuggy = navigator.userAgent.indexOf('Firefox') > 0;
	let pm;
	DOM.body = document.body;
	DOM.pieces = document.querySelector('.pieces');

	function init() {
		imagesLoaded(DOM.body, { background: true }, function() {
			pm = new PieceMaker(DOM.pieces);
		});
	}
	init();
})(window);
