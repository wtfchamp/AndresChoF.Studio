;(function (window) {
  'use strict';

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
    },
    eventtype = mobilecheck() ? 'touchstart' : 'click',
    x = [].slice.call(document.querySelectorAll('.noDisplay')),
    tittleAnim = [].slice.call(document.querySelectorAll('.noth')),
    menuItems = [].slice.call(document.querySelectorAll('.liClass')),
    menuClose = document.querySelector('.menuCross'),
    slideClose = document.querySelector('.slideClose'),
    buttonMenu = document.querySelector('.buttonMenu'),
    buttonMPage = document.querySelector('.MainPage'),
    slideStack = [].slice.call(document.querySelectorAll('.stack')).forEach(function (el) {
      el.addEventListener(eventtype,function (ev) {
        classie.add(document.querySelector('.fullScreenSlide'),'display');
        classie.remove(document.querySelector('.fullScreenSlide'),'noDisplay');
        onEndAnimation(document.querySelector('.fullScreenSlide'),function () {
          classie.remove(document.querySelector('.fullScreenSlide'),'display');
        });
      });
    });

  function tittleAnimation() {
    classie.add(tittleAnim[0],'tittle2Out');
    onEndAnimation(tittleAnim[0],function () {
      classie.remove(tittleAnim[0],'tittle2Out');
      classie.add(tittleAnim[0],'tittle2In');
      onEndAnimation(tittleAnim[0],function () {
        classie.remove(tittleAnim[0],'tittle2In');
      });
    });
    classie.add(tittleAnim[1],'tittleOut');
    onEndAnimation(tittleAnim[1],function () {
      classie.remove(tittleAnim[1],'tittleOut');
      classie.add(tittleAnim[1],'tittleIn');
      onEndAnimation(tittleAnim[1],function () {
        classie.remove(tittleAnim[1],'tittleIn');
      });
    });
    classie.add(tittleAnim[2],'tittleOut');
    onEndAnimation(tittleAnim[2],function () {
      classie.remove(tittleAnim[2],'tittleOut');
      classie.add(tittleAnim[2],'tittleIn');
      onEndAnimation(tittleAnim[2],function () {
        classie.remove(tittleAnim[2],'tittleIn');
      });
    });
    classie.add(tittleAnim[3],'tittleOut');
    onEndAnimation(tittleAnim[3],function () {
      classie.remove(tittleAnim[3],'tittleOut');
      classie.add(tittleAnim[3],'tittleIn');
      onEndAnimation(tittleAnim[3],function () {
        classie.remove(tittleAnim[3],'tittleIn');
      });
    });
  }
  function mobilecheck() {
    var check = false;
    (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }
  /*Close Slide*/
  slideClose.addEventListener(eventtype,function (ev) {
    classie.add(document.querySelector('.fullScreenSlide'),'displayH');
    onEndAnimation(document.querySelector('.fullScreenSlide'),function () {
      classie.remove(document.querySelector('.fullScreenSlide'),'displayH');
      classie.add(document.querySelector('.fullScreenSlide'),'noDisplay');
    });
  });
  /*Main Page*/
  buttonMPage.addEventListener(eventtype,function (ev) {
    if (classie.has(x[1],'noDisplay') == false) {
      classie.add(x[1],'displayBackA');
      onEndAnimation(x[1],function () {
        classie.remove(x[1],'displayBackA');
        classie.add(x[1],'noDisplay');
      });
      classie.add(x[3],'displayItemsA');
      onEndAnimation(x[3],function () {
        classie.remove(x[3],'displayItemsA');
        classie.add(x[3],'noDisplay');
      });
      classie.add(x[2],'displayCrossA');
      onEndAnimation(x[2],function () {
        classie.remove(x[2],'displayCrossA');
        classie.add(x[2],'noDisplay');
      });
    }
    if (classie.has(x[4],'noDisplay') == false) {
      classie.add(x[5],'displayH');
      classie.add(x[4],'displayH');
      onEndAnimation(x[5],function () {
        classie.remove(x[5],'displayH');
        classie.add(x[5],'noDisplay');
      });
      onEndAnimation(x[4],function () {
        classie.remove(x[4],'displayH');
        classie.add(x[4],'noDisplay');
        console.log('Hola si funciono bien!!');
        classie.add(document.querySelector('.arrows'),'display');
        classie.remove(document.querySelector('.arrows'),'noDisplay');
        onEndAnimation(document.querySelector('.arrows'),function () {
          classie.remove(document.querySelector('.arrows'),'display');
        });
      });
    }
    if (classie.has(x[6],'noDisplay') == false) {
      classie.add(x[6],'displayH');
      onEndAnimation(x[6],function () {
        classie.remove(x[6],'content');
        classie.remove(x[6],'displayH');
        classie.add(x[6],'noDisplay');
        classie.add(document.querySelector('.arrows'),'display');
        classie.remove(document.querySelector('.arrows'),'noDisplay');
        onEndAnimation(document.querySelector('.arrows'),function () {
          classie.remove(document.querySelector('.arrows'),'display');
        });
      });
    }
    if (classie.has(x[8],'noDisplay') == false) {
      classie.add(x[8],'displayH');
      onEndAnimation(x[8],function () {
        classie.remove(x[8],'displayH');
        classie.add(x[8],'noDisplay');
        classie.add(document.querySelector('.arrows'),'display');
        classie.remove(document.querySelector('.arrows'),'noDisplay');
        onEndAnimation(document.querySelector('.arrows'),function () {
          classie.remove(document.querySelector('.arrows'),'display');
        });
      });
    }
    if (classie.has(x[9],'noDisplay') == false) {
      classie.add(x[9],'displayH');
      onEndAnimation(x[9],function () {
        classie.remove(x[9],'displayH');
        classie.add(x[9],'noDisplay');
        classie.add(document.querySelector('.arrows'),'display');
        classie.remove(document.querySelector('.arrows'),'noDisplay');
        onEndAnimation(document.querySelector('.arrows'),function () {
          classie.remove(document.querySelector('.arrows'),'display');
        });
      });
    }
  });
  /*Open Menu*/
  buttonMenu.addEventListener(eventtype,function (ev) {
    console.log(x);
    classie.add(x[1],'displayBack');
    classie.remove(x[1],'noDisplay');
    classie.add(x[3],'displayItems');
    classie.remove(x[3],'noDisplay');
    classie.add(x[2],'displayCross');
    classie.remove(x[2],'noDisplay');
    onEndAnimation(x[1],function () {
      classie.remove(x[1],'displayBack');
      console.log('nooooo');
    });
    onEndAnimation(x[3],function () {
      classie.remove(x[3],'displayItems');
      console.log('nooooo');
    });
    onEndAnimation(x[2],function () {
      classie.remove(x[2],'displayCross');
      console.log('nooooo');
    });
  });
  /*close Menu*/
  menuClose.addEventListener(eventtype,function (ev) {
    console.log('que pasa aqui');
    classie.add(x[1],'displayBackA');
    onEndAnimation(x[1],function () {
      classie.remove(x[1],'displayBackA');
      classie.add(x[1],'noDisplay');
      console.log('nooooo');
    });
    classie.add(x[3],'displayItemsA');
    onEndAnimation(x[3],function () {
      classie.remove(x[3],'displayItemsA');
      classie.add(x[3],'noDisplay');
      console.log('nooooo');
    });
    classie.add(x[2],'displayCrossA');
    onEndAnimation(x[2],function () {
      classie.remove(x[2],'displayCrossA');
      classie.add(x[2],'noDisplay');
      console.log('nooooo');
    });
    console.log('que hay aqui?');
  });
  /*Menu events and main content events*/
  /***************************************************************/
  [].slice.call( document.querySelectorAll( '.liClass' ) ).forEach( function( el ) {
    el.addEventListener( eventtype, function( ev ) {
      console.log(el,eventtype);
      classie.add(document.querySelector('.arrows'),'displayH');
      onEndAnimation(document.querySelector('.arrows'),function () {
        classie.remove(document.querySelector('.arrows'),'displayH');
        classie.add(document.querySelector('.arrows'),'noDisplay');
      });
      if(el === document.getElementById('Me')){
        console.log(x,'kha');
        classie.add(x[1],'displayBackA');
        onEndAnimation(x[1],function () {
          classie.remove(x[1],'displayBackA');
          classie.add(x[1],'noDisplay');
          console.log('nooooo');
        });
        classie.add(x[2],'displayCrossA');
        onEndAnimation(x[2],function () {
          classie.remove(x[2],'displayCrossA');
          classie.add(x[2],'noDisplay');
          console.log('nooooo');
        });
        classie.add(x[3],'displayItemsA');
        onEndAnimation(x[3],function () {
          classie.remove(x[3],'displayItemsA');
          classie.add(x[3],'noDisplay');
          console.log('nooooo');
        });
        if(classie.has(x[4],'noDisplay') && classie.has(x[5],'noDisplay') && classie.has(x[6],'noDisplay') && classie.has(x[8],'noDisplay') && classie.has(x[9],'noDisplay')){
          console.log('Hola si funciono bien!!');
          tittleAnimation();
          classie.add(x[4],'display');
          classie.remove(x[4],'noDisplay');
          onEndAnimation(x[4],function () {
            classie.remove(x[4],'display');
          });
          classie.add(x[5],'display');
          classie.remove(x[5],'noDisplay');
          onEndAnimation(x[5],function () {
            classie.remove(x[5],'display');
          });
        }
        if(classie.has(x[6],'noDisplay') == false){
          tittleAnimation();
          classie.add(x[6],'displayH');
          onEndAnimation(x[6],function () {
            classie.remove(x[6],'content');
            classie.remove(x[6],'displayH');
            classie.add(x[6],'noDisplay');
            classie.add(x[4],'display');
            classie.remove(x[4],'noDisplay');
            onEndAnimation(x[4],function () {
              classie.remove(x[4],'display');
            });
            classie.add(x[5],'display');
            classie.remove(x[5],'noDisplay');
            onEndAnimation(x[5],function () {
              classie.remove(x[5],'display');
            });
          });
        }
        if(classie.has(x[8],'noDisplay') == false){
          tittleAnimation();
          classie.add(x[8],'displayH');
          onEndAnimation(x[8],function () {
            classie.remove(x[8],'displayH');
            classie.add(x[8],'noDisplay');
            classie.add(x[4],'display');
            classie.remove(x[4],'noDisplay');
            onEndAnimation(x[4],function () {
              classie.remove(x[4],'display');
            });
            classie.add(x[5],'display');
            classie.remove(x[5],'noDisplay');
            onEndAnimation(x[5],function () {
              classie.remove(x[5],'display');
            });
          });
          console.log('hoolaaaaaaa');
        }
        if(classie.has(x[9],'noDisplay') == false){
          tittleAnimation();
          classie.add(x[9],'displayH');
          onEndAnimation(x[9],function () {
            classie.remove(x[9],'displayH');
            classie.add(x[9],'noDisplay');
            classie.add(x[4],'display');
            classie.remove(x[4],'noDisplay');
            onEndAnimation(x[4],function () {
              classie.remove(x[4],'display');
            });
            classie.add(x[5],'display');
            classie.remove(x[5],'noDisplay');
            onEndAnimation(x[5],function () {
              classie.remove(x[5],'display');
            });
          });
        }

      }else if (el === document.getElementById('Portafolio')) {
        console.log('Portafolio');
        classie.add(x[1],'displayBackA');
        classie.add(x[2],'displayCrossA');
        classie.add(x[3],'displayItemsA');
        onEndAnimation(x[1],function () {
          classie.remove(x[1],'displayBackA');
          classie.add(x[1],'noDisplay');
          console.log('nooooo');
        });
        onEndAnimation(x[2],function () {
          classie.remove(x[2],'displayCrossA');
          classie.add(x[2],'noDisplay');
          console.log('nooooo');
        });
        onEndAnimation(x[3],function () {
          classie.remove(x[3],'displayItemsA');
          classie.add(x[3],'noDisplay');
          console.log('nooooo');
        });
        if(classie.has(x[4],'noDisplay') && classie.has(x[5],'noDisplay') && classie.has(x[6],'noDisplay') && classie.has(x[8],'noDisplay') && classie.has(x[9],'noDisplay')){
          console.log('Hola si funciono bien!!');
          tittleAnimation();
          classie.add(x[6],'content');
          classie.add(x[6],'display');
          classie.remove(x[6],'noDisplay');
          onEndAnimation(x[6],function () {
            classie.remove(x[6],'display');
          });
        }
        if(classie.has(x[5],'noDisplay') == false){
          tittleAnimation();
          classie.add(x[5],'displayH');
          classie.add(x[4],'displayH');
          onEndAnimation(x[5],function () {
            classie.remove(x[5],'displayH');
            classie.add(x[5],'noDisplay');
          });
          onEndAnimation(x[4],function () {
            classie.remove(x[4],'displayH');
            classie.add(x[4],'noDisplay');
            console.log('Hola si funciono bien!!');
            classie.add(x[6],'content');
            classie.add(x[6],'display');
            classie.remove(x[6],'noDisplay');
            onEndAnimation(x[6],function () {
              classie.remove(x[6],'display');
            });
          });
        }
        if(classie.has(x[8],'noDisplay') == false){
          tittleAnimation();
          classie.add(x[8],'displayH');
          onEndAnimation(x[8],function () {
            classie.remove(x[8],'displayH');
            classie.add(x[8],'noDisplay');
            console.log('Hola si funciono bien!!');
            classie.add(x[6],'content');
            classie.add(x[6],'display');
            classie.remove(x[6],'noDisplay');
            onEndAnimation(x[6],function () {
              classie.remove(x[6],'display');
            });
          });
          console.log('hoolaaaaaaa');
        }
        if (classie.has(x[9],'noDisplay') == false) {
          tittleAnimation();
          classie.add(x[9],'displayH');
          onEndAnimation(x[9],function () {
            classie.remove(x[9],'displayH');
            classie.add(x[9],'noDisplay');
            classie.add(x[6],'content');
            classie.add(x[6],'display');
            classie.remove(x[6],'noDisplay');
            onEndAnimation(x[6],function () {
              classie.remove(x[6],'display');
            });
          });
        }
      }else if (el === document.getElementById('Contacto')) {
        console.log('Contacto');
        classie.add(x[1],'displayBackA');
        classie.add(x[2],'displayCrossA');
        classie.add(x[3],'displayItemsA');
        onEndAnimation(x[1],function () {
          classie.remove(x[1],'displayBackA');
          classie.add(x[1],'noDisplay');
          console.log('nooooo');
        });
        onEndAnimation(x[2],function () {
          classie.remove(x[2],'displayCrossA');
          classie.add(x[2],'noDisplay');
          console.log('nooooo');
        });
        onEndAnimation(x[3],function () {
          classie.remove(x[3],'displayItemsA');
          classie.add(x[3],'noDisplay');
          console.log('nooooo');
        });
        if(classie.has(x[4],'noDisplay') && classie.has(x[5],'noDisplay') && classie.has(x[6],'noDisplay') && classie.has(x[8],'noDisplay') && classie.has(x[9],'noDisplay')){
          tittleAnimation();
          classie.add(x[8],'display');
          classie.remove(x[8],'noDisplay');
          onEndAnimation(x[8],function () {
            classie.remove(x[8],'display');
          });
        }
        if(classie.has(x[5],'noDisplay') == false){
          tittleAnimation();
          classie.add(x[5],'displayH');
          classie.add(x[4],'displayH');
          onEndAnimation(x[5],function () {
            classie.remove(x[5],'displayH');
            classie.add(x[5],'noDisplay');
          });
          onEndAnimation(x[4],function () {
            classie.remove(x[4],'displayH');
            classie.add(x[4],'noDisplay');
            classie.add(x[8],'display');
            classie.remove(x[8],'noDisplay');
            onEndAnimation(x[8],function () {
              classie.remove(x[8],'display');
            });
          });
        }
        if(classie.has(x[6],'noDisplay') == false){
          tittleAnimation();
          classie.add(x[6],'displayH');
          onEndAnimation(x[6],function () {
            classie.remove(x[6],'content');
            classie.remove(x[6],'displayH');
            classie.add(x[6],'noDisplay');
            classie.add(x[8],'display');
            classie.remove(x[8],'noDisplay');
            onEndAnimation(x[8],function () {
              classie.remove(x[8],'display');
            });
          });
        }
        if (classie.has(x[9],'noDisplay') == false) {
          tittleAnimation();
          classie.add(x[9],'displayH');
          onEndAnimation(x[9],function () {
            classie.remove(x[9],'displayH');
            classie.add(x[9],'noDisplay');
            classie.add(x[8],'display');
            classie.remove(x[8],'noDisplay');
            onEndAnimation(x[8],function () {
              classie.remove(x[8],'display');
            });
          });
        }
      }else if (el === document.getElementById('Freebies')) {
        classie.add(x[1],'displayBackA');
        onEndAnimation(x[1],function () {
          classie.remove(x[1],'displayBackA');
          classie.add(x[1],'noDisplay');
          console.log('nooooo');
        });
        classie.add(x[2],'displayCrossA');
        onEndAnimation(x[2],function () {
          classie.remove(x[2],'displayCrossA');
          classie.add(x[2],'noDisplay');
          console.log('nooooo');
        });
        classie.add(x[3],'displayItemsA');
        onEndAnimation(x[3],function () {
          classie.remove(x[3],'displayItemsA');
          classie.add(x[3],'noDisplay');
          console.log('nooooo');
        });
        if(classie.has(x[4],'noDisplay') && classie.has(x[5],'noDisplay') && classie.has(x[6],'noDisplay') && classie.has(x[8],'noDisplay') && classie.has(x[9],'noDisplay')){
          tittleAnimation();
          classie.add(x[9],'display');
          classie.remove(x[9],'noDisplay');
          onEndAnimation(x[9],function () {
            classie.remove(x[9],'display');
          });
        }
        if(classie.has(x[5],'noDisplay') == false){
          tittleAnimation();
          classie.add(x[5],'displayH');
          classie.add(x[4],'displayH');
          onEndAnimation(x[5],function () {
            classie.remove(x[5],'displayH');
            classie.add(x[5],'noDisplay');
          });
          onEndAnimation(x[4],function () {
            classie.remove(x[4],'displayH');
            classie.add(x[4],'noDisplay');
            classie.add(x[9],'display');
            classie.remove(x[9],'noDisplay');
            onEndAnimation(x[9],function () {
              classie.remove(x[9],'display');
            });
          });
        }
        if(classie.has(x[6],'noDisplay') == false){
          tittleAnimation();
          classie.add(x[6],'displayH');
          onEndAnimation(x[6],function () {
            classie.remove(x[6],'content');
            classie.remove(x[6],'displayH');
            classie.add(x[6],'noDisplay');
            classie.add(x[9],'display');
            classie.remove(x[9],'noDisplay');
            onEndAnimation(x[9],function () {
              classie.remove(x[9],'display');
            });
          });
        }
        if(classie.has(x[8],'noDisplay') == false){
          tittleAnimation();
          classie.add(x[8],'displayH');
          onEndAnimation(x[8],function () {
            classie.remove(x[8],'displayH');
            classie.add(x[8],'noDisplay');
            classie.add(x[9],'display');
            classie.remove(x[9],'noDisplay');
            onEndAnimation(x[9],function () {
              classie.remove(x[9],'display');
            });
          });
          console.log('hoolaaaaaaa');
        }
      }
      console.log(x,menuItems,tittleAnim);
    } );
  } );

})(window);
