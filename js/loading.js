;(function(window) {
  'use stric';
  var support = {animations : Modernizr.cssanimations},
    animEndEventNames = {'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
    animEndEventName = animEndEventNames[ Modernizr.prefixed('animation')],
  onEndAnimation = function( el, callback ) {
    //console.log(callback);
    var onEndCallbackFn = function( ev ) {
      if( support.animations ) {
        if( ev.target != this ) return;
        this.removeEventListener( animEndEventName, onEndCallbackFn );
      }
      if( callback && typeof callback === 'function' ) {callback.call();}
    };
    if( support.animations ) {
      el.addEventListener( animEndEventName, onEndCallbackFn );
    }
    else {
      onEndCallbackFn();
    }
  };
  var loading = anime.timeline({
    direction: 'alternate',
    complete: function () {
      if(loading.completed == true){
        classie.add(document.querySelector('.loading'),'displayH');
        onEndAnimation(document.querySelector('.loading'),function () {
          classie.remove(document.querySelector('.loading'),'displayH');
          classie.add(document.querySelector('.loading'),'noDisplay');
          classie.add(document.querySelector('.init'),'display');
          classie.remove(document.querySelector('.init'),'noDisplay');
          onEndAnimation(document.querySelector('.init'),function () {
            classie.remove(document.querySelector('.init'),'display');
          });
        });
      }
    },
    loop: false,
    autoplay: false
  });
  loading.add({
    targets: '.svgLogo .dotSVGContinue',
    opacity: {
      value: [0, 1],
      duration: 100
    },
    translateY: 4,
    translateX: [0, 103],
    scale: {
      value: 0.5,
      duration: 200
    },
    easing: 'easeOutCirc',
    duration: 2000,
    offset: 0
  });
  loading.add({
    targets: "#nameLoad .st3",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutCirc',
    duration: 400,
    delay: function (el, i) {
      return i * 250
    },
    offset: '+=0'
  });
  loading.add({
    targets: '.svgStyleStudio .st4' ,
    translateY: [10, -5, 0],
    opacity: {
      value: [0, 1],
      duration: 1000
    },
    delay: (el, i) => 200 + (i * 75),
    duration: 1000,
    easing: 'easeOutCirc',
    offset: '-=1000'
  });
  loading.add({
    targets: '.divNombre',
    delay: 1000,
    translateY: [0, 50],
    opacity: {
      value: [1, 0],
      duration: 200
    },
    duration: 500,
    easing: 'easeOutCirc',
    offset: '+=0'
  });

  var i = 0;
  var logoLoad = anime.timeline({
    direction: 'alternate',
    loop: 1,
    autoplay: false
  });
  logoLoad.add({
    targets: '.initContent',
    easing: 'easeOutElastic',
    opacity: {
      value: [1, 1],
      duration: 100
    },
    duration: 100,
    direction: 'alternate',
    offset: 0
  });
  logoLoad.add({
    targets: '.circleG1 .st2',
    translateY: [2,0],
    opacity: {
      value: [0, 1],
      duration: 100
    },
    delay: (el, i) => 2000 + (i * 75),
    duration: 200,
    easing: 'easeOutCirc',
    offset: 0
  });
  logoLoad.add({
    targets: '.lineG .st2',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutCirc',
    opacity: {
      value: [0, 1],
      duration:100
    },
    duration: 200,
    delay: function (el, i) {
      return i * 250
    },
    offset: '+=0'
  });
  logoLoad.add({
    targets: '.circleG6 .st2',
    translateY: [-5,0],
    opacity: {
      value: [0, 1],
      duration:100
    },
    delay: (el, i) => 400 + (i * 75),
    duration: 200,
    easing: 'easeOutCirc',
    offset: '+=0'
  });
  function init() {
    logoLoad.play();
    logoLoad.update = function () {
      console.log(Math.round(logoLoad.delay - logoLoad.currentTime));
      i = (Math.round(logoLoad.delay - logoLoad.currentTime) == -4725) ? i=1 : i;
      console.log(i);
      if (i == 1 && Math.round(logoLoad.delay - logoLoad.currentTime) >= -2110) {
        loading.play();
      }
    }
  }
  init();

})(window);
