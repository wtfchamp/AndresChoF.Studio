/**
 * main.js
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

	var bodyEl = document.body,
		docElem = window.document.documentElement,
		// http://stackoverflow.com/a/1147768
		docWidth = Math.max(bodyEl.scrollWidth, bodyEl.offsetWidth, docElem.clientWidth, docElem.scrollWidth, docElem.offsetWidth),
		docHeight = Math.max(bodyEl.scrollHeight, bodyEl.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	function extend( a, b ) {
		for( var key in b ) {
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	/**
	 * Circle Slideshow
	 */
	function CircleSlideshow(el, options) {
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );

		// items
		this.items = [].slice.call(this.el.querySelectorAll('.slide'));
		console.log(this.items);
		// total items
		this.itemsTotal = this.items.length;
		if( this.itemsTotal < 2 ) return;

		// content close control
		//this.closeCtrl = this.el.querySelector('.action--close');
		// index of current slide
		this.current = 0;
		// all items are closed initially
		this.isClosed = true;
		this.elementos = document.querySelectorAll('.st1');
		this._init();
	}

	//CircleSlideshow.prototype.options = {};

	CircleSlideshow.prototype._init = function() {
		// add navigation ctrls and left & right circles to the DOM <svg width="100px" height="30px" viewBox="0 0 100 30"><polyline class="navbutton__line" fill="none" stroke="#CAF903" stroke-width="5" points="69.821,3.795 92.232,26.205 0,26.205"/></svg>
		//<svg width="100px" height="30px" viewBox="0 0 100 30"><polyline class="navbutton__line" fill="none" stroke="#CAF903" stroke-width="5" points="30.179,26.205 7.768,3.795 100,3.795"/></svg>
		this.navLeftCtrl = document.createElement('button');
		this.navLeftCtrl.className = 'navbutton navbutton--next';
		this.navLeftCtrl.setAttribute('aria-label', 'Next item');
		this.navLeftCtrl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="30px" viewBox="0 0 35.2 70.4"><polyline fill="#CAF903" class="navbutton__line" points="0,70.4 35.2,35.2 0,0"/></svg>';

		this.navRightCtrl = document.createElement('button');
		this.navRightCtrl.className = 'navbutton navbutton--prev';
		this.navRightCtrl.setAttribute('aria-label', 'Previous item');
		this.navRightCtrl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="30px" viewBox="0 0 35.2 70.4"><polyline fill="#CAF903" class="navbutton__line" points="35.2,70.4 0,35.2 35.2,0"/></svg>';

		this.el.insertBefore(this.navLeftCtrl, this.el.firstChild);
		this.el.insertBefore(this.navRightCtrl, this.el.firstChild);


		// add the expander element per slide (.deco--expander)
		this.items.forEach(function(item) {
			var slideEl = item.querySelector('.slide__item');
		});

		// position current item:
		classie.add(this.items[this.current], 'slide--current');
		classie.add(this.elementos[this.current], 'st0');
		classie.remove(this.elementos[this.current], 'st1');
		console.log(this.itmes);
		// event binding
		this._initEvents();
	};

	CircleSlideshow.prototype._initEvents = function() {
		var self = this;

		// slideshow navigation
		this.navRightCtrl.addEventListener('click', function() { self._navigate('left'); });
		this.navLeftCtrl.addEventListener('click', function() { self._navigate('right'); });

		// keyboard navigation events
		document.addEventListener('keydown', function(ev) {
			var keyCode = ev.keyCode || ev.which;
			switch (keyCode) {
				case 37:
					self._navigate('left');
					break;
				case 39:
					self._navigate('right');
					break;
				case 27: // esc
					if( self.isClosed ) return;
					self._closeContent();
					break;
			}
		});

		// swipe navigation
		// from http://stackoverflow.com/a/23230280
		this.el.addEventListener('touchstart', handleTouchStart, false);
		this.el.addEventListener('touchmove', handleTouchMove, false);
		var xDown = null;
		var yDown = null;
		function handleTouchStart(evt) {
			xDown = evt.touches[0].clientX;
			yDown = evt.touches[0].clientY;
		};
		function handleTouchMove(evt) {
			if ( ! xDown || ! yDown ) {
				return;
			}

			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;

			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
				if ( xDiff > 0 ) {
					/* left swipe */
					if( !self.isExpanded ) {
						self._navigate('right');
					}
				} else {
					/* right swipe */
					if( !self.isExpanded ) {
						self._navigate('left');
					}
				}
			}
			/* reset values */
			xDown = null;
			yDown = null;
		};
	};

	CircleSlideshow.prototype._navigate = function(dir) {
		if( this.isExpanded ) {
			return false;
		}

		var self = this,
			itemCurrent = this.items[this.current],
			currentEl = itemCurrent.querySelector('.slide__item');
			//
		// update new current value
		if( dir === 'right' ) {
			this.current = this.current < this.itemsTotal-1 ? this.current + 1 : 0;
			classie.add(this.elementos[this.current], 'st0');
			classie.remove(this.elementos[this.current], 'st1');
			classie.remove(this.elementos[this.current > 0 ? this.current - 1 : this.itemsTotal-1], 'st0');
			classie.add(this.elementos[this.current > 0 ? this.current - 1 : this.itemsTotal-1], 'st1');
			//console.log(this.elementos);
		}
		else {
			this.current = this.current > 0 ? this.current - 1 : this.itemsTotal-1;
			classie.add(this.elementos[this.current], 'st0');
			classie.remove(this.elementos[this.current], 'st1');
			classie.remove(this.elementos[this.current < this.itemsTotal-1 ? this.current + 1 : 0], 'st0');
			classie.add(this.elementos[this.current < this.itemsTotal-1 ? this.current + 1 : 0], 'st1');
		}

		var itemNext = this.items[this.current],

			nextEl = itemNext.querySelector('.slide__item');
			//The anuimatios begin here!
		// animate the current element out
		dynamics.animate(currentEl,
			{
				translateX: dir === 'right' ? -1*currentEl.offsetWidth : currentEl.offsetWidth, scale: 0.7
			},
			{
				type: dynamics.spring, duration: 2000, friction: 600,
				complete: function() {
					dynamics.css(itemCurrent, { visibility: 'hidden' });
				}
			}
		);

		// animate the current title out    dynamics.animate(currentTitleEl,
		dynamics.animate(
			{
				translateX: dir === 'right' ? -250 : 250, opacity: 0
			},
			{
				type: dynamics.bezier, points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}], duration: 450
			}
		);

		// set the right properties for the next element to come in
		dynamics.css(itemNext, {visibility: 'visible'});
		dynamics.css(nextEl, {translateX: dir === 'right' ? nextEl.offsetWidth : -1*nextEl.offsetWidth, scale: 0.7});

		// animate the next element in
		dynamics.animate(nextEl,
			{
				translateX: 0
			},
			{
				type: dynamics.spring, duration: 3000, friction: 700, frequency: 500,
				complete: function() {
					self.items.forEach(function(item) { classie.remove(item, 'slide--current'); });
					classie.add(itemNext, 'slide--current');
				}
			}
		);

		// set the right properties for the next title to come in
		//dynamics.css(nextTitleEl, { translateX: dir === 'right' ? 250 : -250, opacity: 0 });
		// animate the next title in   dynamics.animate(nextTitleEl,
		dynamics.animate(
			{
				translateX: 0, opacity: 1
			},
			{
				type: dynamics.bezier, points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}], duration: 1000
			}
		);
	};

	window.CircleSlideshow = CircleSlideshow;

})(window);
