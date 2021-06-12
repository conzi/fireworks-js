!function(t,i){if("object"==typeof exports&&"object"==typeof module)module.exports=i();else if("function"==typeof define&&define.amd)define([],i);else{var e=i();for(var s in e)("object"==typeof exports?exports:t)[s]=e[s]}}(this,(function(){return function(t){var i={};function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)e.d(s,n,function(i){return t[i]}.bind(null,n));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";function s(t,i){return Math.random()*(i-t)+t}function n(t,i){return Math.floor(t+Math.random()*(i+1-t))}function h(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}e.r(i),e.d(i,"Fireworks",(function(){return c}));var o=function(){function t(i,e,s,h,o,a,r,_,c){for(!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this._currentDistance=0,this._coordinates=[],this._x=i,this._y=e,this._sx=i,this._sy=e,this._dx=s,this._dy=h,this._ctx=o,this._hue=a,this._speed=r,this._acceleration=_,this._traceLength=c,this._totalDistance=this.getDistance(this._sx,this._sy,this._dx,this._dy);this._traceLength--;)this._coordinates.push([i,e]);this._angle=Math.atan2(this._dy-this._sy,this._dx-this._sx),this._brightness=n(50,70)}var i,e,s;return i=t,(e=[{key:"update",value:function(t){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._acceleration;var i=Math.cos(this._angle)*this._speed,e=Math.sin(this._angle)*this._speed;this._currentDistance=this.getDistance(this._sx,this._sy,this._x+i,this._y+e),this._currentDistance>=this._totalDistance?t(this._dx,this._dy,this._hue):(this._x+=i,this._y+=e)}},{key:"draw",value:function(){var t=this._coordinates.length-1;this._ctx.beginPath(),this._ctx.moveTo(this._coordinates[t][0],this._coordinates[t][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle="hsl(".concat(this._hue,", 100%, ").concat(this._brightness,"%)"),this._ctx.stroke()}},{key:"getDistance",value:function(t,i,e,s){var n=Math.pow;return Math.sqrt(n(t-e,2)+n(i-s,2))}}])&&h(i.prototype,e),s&&h(i,s),t}();function a(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var r=function(){function t(i,e,h,o,a,r,_){for(!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this._coordinates=[],this._alpha=1,this._x=i,this._y=e,this._ctx=h,this._hue=o,this._friction=a,this._gravity=r,this._explosionLength=_;this._explosionLength--;)this._coordinates.push([i,e]);this._angle=s(0,2*Math.PI),this._speed=n(1,10),this._hue=n(this._hue-20,this._hue+20),this._brightness=n(50,80),this._decay=s(.015,.03)}var i,e,h;return i=t,(e=[{key:"update",value:function(t){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._friction,this._x+=Math.cos(this._angle)*this._speed,this._y+=Math.sin(this._angle)*this._speed+this._gravity,this._alpha-=this._decay,this._alpha<=this._decay&&t()}},{key:"draw",value:function(){var t=this._coordinates.length-1;this._ctx.beginPath(),this._ctx.moveTo(this._coordinates[t][0],this._coordinates[t][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle="hsla(".concat(this._hue,", 100%, ").concat(this._brightness,"%, ").concat(this._alpha,")"),this._ctx.stroke()}}])&&a(i.prototype,e),h&&a(i,h),t}();function _(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var c=function(){function t(i,e){var s=this,n=e.hue,h=e.speed,o=e.acceleration,a=e.friction,r=e.gravity,_=e.particles,c=e.trace,u=e.explosion,l=e.autoresize,d=e.mouse,f=e.boundaries,p=e.sound,v=e.delay;!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this._mouse={click:!1,move:!1,max:5},this._sound={enable:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],min:1,max:2},this._delay={min:15,max:30},this._tick=0,this._version="1.1.0",this._running=!1,this._m=!1,this._traces=[],this._explosions=[],this._container=i,this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),this._container.appendChild(this._canvas),this.updateSize(),this.updateBoundaries(f||{top:50,bottom:0,left:50,right:0}),this._hue=n||{min:0,max:360},this._speed=h||2,this._acceleration=o||1.05,this._friction=a||.95,this._gravity=r||1.5,this._particleCount=_||50,this._traceLength=c||3,this._explosionLength=u||5,this._autoresize=null==l||l,this._mouse=Object.assign(Object.assign({},this._mouse),d),this._sound=Object.assign(Object.assign({},this._sound),p),this._delay=Object.assign(Object.assign({},this._delay),v),this._autoresize&&window.addEventListener("resize",(function(){s.updateSize()})),this._canvas.addEventListener("mousedown",(function(t){return s.useMouse(t,s._mouse.click)})),this._canvas.addEventListener("mouseup",(function(t){return s.useMouse(t,!1)})),this._canvas.addEventListener("mousemove",(function(t){return s.useMouse(t,s._m)}))}var i,e,h;return i=t,(e=[{key:"isRunning",get:function(){return this._running}},{key:"version",get:function(){return this._version}},{key:"start",value:function(){this._running||(this._running=!0,this.clear(),this.render())}},{key:"stop",value:function(){this._running=!1,this.clear()}},{key:"pause",value:function(){this._running=!this._running,this._running&&this.render()}},{key:"clear",value:function(){this._ctx&&(this._traces=[],this._explosions=[],this._ctx.clearRect(0,0,this._width,this._height))}},{key:"updateSize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.width,e=void 0===i?this._container.clientWidth:i,s=t.height,n=void 0===s?this._container.clientHeight:s;this._width=e,this._height=n,this._canvas.width=e,this._canvas.height=n,this.updateBoundaries({right:e,bottom:n})}},{key:"updateBoundaries",value:function(t){this._boundaries=Object.assign(Object.assign({},this._boundaries),t)}},{key:"useMouse",value:function(t,i){(this._mouse.click||this._mouse.move)&&(this._mx=t.pageX-this._canvas.offsetLeft,this._my=t.pageY-this._canvas.offsetTop,this._m=i)}},{key:"playSound",value:function(){if(this._sound.enable&&this._sound.files.length>0){var t=n(0,this._sound.files.length-1),i=s(this._sound.min/10,this._sound.max/10),e=new Audio(this._sound.files[t]);e.volume=i,e.play()}}},{key:"render",value:function(){var t=this;this._ctx&&this._running&&(requestAnimationFrame((function(){return t.render()})),this._ctx.globalCompositeOperation="destination-out",this._ctx.fillStyle="rgba(0, 0, 0, 0.5)",this._ctx.fillRect(0,0,this._width,this._height),this._ctx.globalCompositeOperation="lighter",this.initTrace(),this.drawTrace(),this.drawExplosion(),this._tick++)}},{key:"initTrace",value:function(){this._ds=n(this._delay.min,this._delay.max),(2*this._ds<this._tick||this._m&&this._mouse.max>this._traces.length)&&(this._traces.push(new o(.5*this._width,this._height,this._m||this._mouse.move?this._mx:n(this._boundaries.left,this._boundaries.right-50),this._m||this._mouse.move?this._my:n(this._boundaries.top,.5*this._boundaries.bottom),this._ctx,n(this._hue.min,this._hue.max),this._speed,this._acceleration,this._traceLength)),this._tick=0)}},{key:"drawTrace",value:function(){for(var t=this,i=this._traces.length;i--;)this._traces[i].draw(),this._traces[i].update((function(e,s,n){t.playSound(),t.initExplosion(e,s,n),t._traces.splice(i,1)}))}},{key:"initExplosion",value:function(t,i,e){for(var s=this._particleCount;s--;)this._explosions.push(new r(t,i,this._ctx,e,this._friction,this._gravity,this._explosionLength))}},{key:"drawExplosion",value:function(){for(var t=this,i=this._explosions.length;i--;)this._explosions[i].draw(),this._explosions[i].update((function(){t._explosions.splice(i,1)}))}}])&&_(i.prototype,e),h&&_(i,h),t}()}])}));