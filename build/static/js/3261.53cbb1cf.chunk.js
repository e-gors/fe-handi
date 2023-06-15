/*! For license information please see 3261.53cbb1cf.chunk.js.LICENSE.txt */
(self.webpackChunkfe_handi=self.webpackChunkfe_handi||[]).push([[3261],{35611:function(t,e,o){"use strict";var r=o(64836);e.Z=void 0;var n=r(o(45649)),i=o(80184),a=(0,n.default)((0,i.jsx)("path",{d:"M9 16h6v-6h4l-7-7-7 7h4v6zm3-10.17L14.17 8H13v6h-2V8H9.83L12 5.83zM5 18h14v2H5z"}),"UploadOutlined");e.Z=a},38136:function(t,e,o){t.exports=o(20166)},24872:function(t){"use strict";var e=!("undefined"===typeof window||!window.document||!window.document.createElement),o={canUseDOM:e,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:e&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:e&&!!window.screen,isInWorker:!e};t.exports=o},65811:function(t){var e,o,r,n,i,a,c,s,h,u,p,d,l,f,v,m=!1;function g(){if(!m){m=!0;var t=navigator.userAgent,g=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t),w=/(Mac OS X)|(Windows)|(Linux)/.exec(t);if(d=/\b(iPhone|iP[ao]d)/.exec(t),l=/\b(iP[ao]d)/.exec(t),u=/Android/i.exec(t),f=/FBAN\/\w+;/i.exec(t),v=/Mobile/i.exec(t),p=!!/Win64/.exec(t),g){(e=g[1]?parseFloat(g[1]):g[5]?parseFloat(g[5]):NaN)&&document&&document.documentMode&&(e=document.documentMode);var y=/(?:Trident\/(\d+.\d+))/.exec(t);a=y?parseFloat(y[1])+4:e,o=g[2]?parseFloat(g[2]):NaN,r=g[3]?parseFloat(g[3]):NaN,(n=g[4]?parseFloat(g[4]):NaN)?(g=/(?:Chrome\/(\d+\.\d+))/.exec(t),i=g&&g[1]?parseFloat(g[1]):NaN):i=NaN}else e=o=r=i=n=NaN;if(w){if(w[1]){var C=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);c=!C||parseFloat(C[1].replace("_","."))}else c=!1;s=!!w[2],h=!!w[3]}else c=s=h=!1}}var w={ie:function(){return g()||e},ieCompatibilityMode:function(){return g()||a>e},ie64:function(){return w.ie()&&p},firefox:function(){return g()||o},opera:function(){return g()||r},webkit:function(){return g()||n},safari:function(){return w.webkit()},chrome:function(){return g()||i},windows:function(){return g()||s},osx:function(){return g()||c},linux:function(){return g()||h},iphone:function(){return g()||d},mobile:function(){return g()||d||l||u||v},nativeApp:function(){return g()||f},android:function(){return g()||u},ipad:function(){return g()||l}};t.exports=w},95780:function(t,e,o){"use strict";var r,n=o(24872);n.canUseDOM&&(r=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("","")),t.exports=function(t,e){if(!n.canUseDOM||e&&!("addEventListener"in document))return!1;var o="on"+t,i=o in document;if(!i){var a=document.createElement("div");a.setAttribute(o,"return;"),i="function"===typeof a[o]}return!i&&r&&"wheel"===t&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}},20166:function(t,e,o){"use strict";var r=o(65811),n=o(95780),i=10,a=40,c=800;function s(t){var e=0,o=0,r=0,n=0;return"detail"in t&&(o=t.detail),"wheelDelta"in t&&(o=-t.wheelDelta/120),"wheelDeltaY"in t&&(o=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(e=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(e=o,o=0),r=e*i,n=o*i,"deltaY"in t&&(n=t.deltaY),"deltaX"in t&&(r=t.deltaX),(r||n)&&t.deltaMode&&(1==t.deltaMode?(r*=a,n*=a):(r*=c,n*=c)),r&&!e&&(e=r<1?-1:1),n&&!o&&(o=n<1?-1:1),{spinX:e,spinY:o,pixelX:r,pixelY:n}}s.getEventType=function(){return r.firefox()?"DOMMouseScroll":n("wheel")?"wheel":"mousewheel"},t.exports=s},97005:function(t,e,o){"use strict";o.d(e,{ZP:function(){return w}});var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)};var n=function(){return n=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},n.apply(this,arguments)};Object.create;Object.create;var i=o(72791),a=o(38136),c=o.n(a);function s(t,e,o,r,n){void 0===n&&(n=0);var i=v(e.width,e.height,n),a=i.width,c=i.height;return{x:h(t.x,a,o.width,r),y:h(t.y,c,o.height,r)}}function h(t,e,o,r){var n=e*r/2-o/2;return m(t,-n,n)}function u(t,e){return Math.sqrt(Math.pow(t.y-e.y,2)+Math.pow(t.x-e.x,2))}function p(t,e){return 180*Math.atan2(e.y-t.y,e.x-t.x)/Math.PI}function d(t,e){return Math.min(t,Math.max(0,e))}function l(t,e){return e}function f(t,e){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function v(t,e,o){var r=o*Math.PI/180;return{width:Math.abs(Math.cos(r)*t)+Math.abs(Math.sin(r)*e),height:Math.abs(Math.sin(r)*t)+Math.abs(Math.cos(r)*e)}}function m(t,e,o){return Math.min(Math.max(t,e),o)}function g(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.filter((function(t){return"string"===typeof t&&t.length>0})).join(" ").trim()}var w=function(t){function e(){var o=null!==t&&t.apply(this,arguments)||this;return o.imageRef=i.createRef(),o.videoRef=i.createRef(),o.containerRef=null,o.styleRef=null,o.containerRect=null,o.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},o.dragStartPosition={x:0,y:0},o.dragStartCrop={x:0,y:0},o.gestureZoomStart=0,o.gestureRotationStart=0,o.isTouching=!1,o.lastPinchDistance=0,o.lastPinchRotation=0,o.rafDragTimeout=null,o.rafPinchTimeout=null,o.wheelTimer=null,o.currentDoc="undefined"!==typeof document?document:null,o.currentWindow="undefined"!==typeof window?window:null,o.resizeObserver=null,o.state={cropSize:null,hasWheelJustStarted:!1},o.initResizeObserver=function(){if("undefined"!==typeof window.ResizeObserver&&o.containerRef){var t=!0;o.resizeObserver=new window.ResizeObserver((function(e){t?t=!1:o.computeSizes()})),o.resizeObserver.observe(o.containerRef)}},o.preventZoomSafari=function(t){return t.preventDefault()},o.cleanEvents=function(){o.currentDoc&&(o.currentDoc.removeEventListener("mousemove",o.onMouseMove),o.currentDoc.removeEventListener("mouseup",o.onDragStopped),o.currentDoc.removeEventListener("touchmove",o.onTouchMove),o.currentDoc.removeEventListener("touchend",o.onDragStopped),o.currentDoc.removeEventListener("gesturemove",o.onGestureMove),o.currentDoc.removeEventListener("gestureend",o.onGestureEnd))},o.clearScrollEvent=function(){o.containerRef&&o.containerRef.removeEventListener("wheel",o.onWheel),o.wheelTimer&&clearTimeout(o.wheelTimer)},o.onMediaLoad=function(){var t=o.computeSizes();t&&(o.emitCropData(),o.setInitialCrop(t)),o.props.onMediaLoaded&&o.props.onMediaLoaded(o.mediaSize)},o.setInitialCrop=function(t){if(o.props.initialCroppedAreaPercentages){var e=function(t,e,o,r,n,i){var a=v(e.width,e.height,o),c=m(r.width/a.width*(100/t.width),n,i);return{crop:{x:c*a.width/2-r.width/2-a.width*c*(t.x/100),y:c*a.height/2-r.height/2-a.height*c*(t.y/100)},zoom:c}}(o.props.initialCroppedAreaPercentages,o.mediaSize,o.props.rotation,t,o.props.minZoom,o.props.maxZoom),r=e.crop,n=e.zoom;o.props.onCropChange(r),o.props.onZoomChange&&o.props.onZoomChange(n)}else if(o.props.initialCroppedAreaPixels){var i=function(t,e,o,r,n,i){void 0===o&&(o=0);var a=v(e.naturalWidth,e.naturalHeight,o),c=m(function(t,e,o){var r=function(t){return t.width>t.height?t.width/t.naturalWidth:t.height/t.naturalHeight}(e);return o.height>o.width?o.height/(t.height*r):o.width/(t.width*r)}(t,e,r),n,i),s=r.height>r.width?r.height/t.height:r.width/t.width;return{crop:{x:((a.width-t.width)/2-t.x)*s,y:((a.height-t.height)/2-t.y)*s},zoom:c}}(o.props.initialCroppedAreaPixels,o.mediaSize,o.props.rotation,t,o.props.minZoom,o.props.maxZoom);r=i.crop,n=i.zoom;o.props.onCropChange(r),o.props.onZoomChange&&o.props.onZoomChange(n)}},o.computeSizes=function(){var t,e,r,i,a,c,s=o.imageRef.current||o.videoRef.current;if(s&&o.containerRef){o.containerRect=o.containerRef.getBoundingClientRect();var h=o.containerRect.width/o.containerRect.height,u=(null===(t=o.imageRef.current)||void 0===t?void 0:t.naturalWidth)||(null===(e=o.videoRef.current)||void 0===e?void 0:e.videoWidth)||0,p=(null===(r=o.imageRef.current)||void 0===r?void 0:r.naturalHeight)||(null===(i=o.videoRef.current)||void 0===i?void 0:i.videoHeight)||0,d=u/p,l=void 0;if(s.offsetWidth<u||s.offsetHeight<p)switch(o.props.objectFit){default:case"contain":l=h>d?{width:o.containerRect.height*d,height:o.containerRect.height}:{width:o.containerRect.width,height:o.containerRect.width/d};break;case"horizontal-cover":l={width:o.containerRect.width,height:o.containerRect.width/d};break;case"vertical-cover":l={width:o.containerRect.height*d,height:o.containerRect.height};break;case"auto-cover":l=u>p?{width:o.containerRect.width,height:o.containerRect.width/d}:{width:o.containerRect.height*d,height:o.containerRect.height}}else l={width:s.offsetWidth,height:s.offsetHeight};o.mediaSize=n(n({},l),{naturalWidth:u,naturalHeight:p}),o.props.setMediaSize&&o.props.setMediaSize(o.mediaSize);var f=o.props.cropSize?o.props.cropSize:function(t,e,o,r,n,i){void 0===i&&(i=0);var a=v(t,e,i),c=a.width,s=a.height,h=Math.min(c,o),u=Math.min(s,r);return h>u*n?{width:u*n,height:u}:{width:h,height:h/n}}(o.mediaSize.width,o.mediaSize.height,o.containerRect.width,o.containerRect.height,o.props.aspect,o.props.rotation);return(null===(a=o.state.cropSize)||void 0===a?void 0:a.height)===f.height&&(null===(c=o.state.cropSize)||void 0===c?void 0:c.width)===f.width||o.props.onCropSizeChange&&o.props.onCropSizeChange(f),o.setState({cropSize:f},o.recomputeCropPosition),o.props.setCropSize&&o.props.setCropSize(f),f}},o.onMouseDown=function(t){o.currentDoc&&(t.preventDefault(),o.currentDoc.addEventListener("mousemove",o.onMouseMove),o.currentDoc.addEventListener("mouseup",o.onDragStopped),o.onDragStart(e.getMousePoint(t)))},o.onMouseMove=function(t){return o.onDrag(e.getMousePoint(t))},o.onTouchStart=function(t){o.currentDoc&&(o.isTouching=!0,o.props.onTouchRequest&&!o.props.onTouchRequest(t)||(o.currentDoc.addEventListener("touchmove",o.onTouchMove,{passive:!1}),o.currentDoc.addEventListener("touchend",o.onDragStopped),2===t.touches.length?o.onPinchStart(t):1===t.touches.length&&o.onDragStart(e.getTouchPoint(t.touches[0]))))},o.onTouchMove=function(t){t.preventDefault(),2===t.touches.length?o.onPinchMove(t):1===t.touches.length&&o.onDrag(e.getTouchPoint(t.touches[0]))},o.onGestureStart=function(t){o.currentDoc&&(t.preventDefault(),o.currentDoc.addEventListener("gesturechange",o.onGestureMove),o.currentDoc.addEventListener("gestureend",o.onGestureEnd),o.gestureZoomStart=o.props.zoom,o.gestureRotationStart=o.props.rotation)},o.onGestureMove=function(t){if(t.preventDefault(),!o.isTouching){var r=e.getMousePoint(t),n=o.gestureZoomStart-1+t.scale;if(o.setNewZoom(n,r,{shouldUpdatePosition:!0}),o.props.onRotationChange){var i=o.gestureRotationStart+t.rotation;o.props.onRotationChange(i)}}},o.onGestureEnd=function(t){o.cleanEvents()},o.onDragStart=function(t){var e,r,i=t.x,a=t.y;o.dragStartPosition={x:i,y:a},o.dragStartCrop=n({},o.props.crop),null===(r=(e=o.props).onInteractionStart)||void 0===r||r.call(e)},o.onDrag=function(t){var e=t.x,r=t.y;o.currentWindow&&(o.rafDragTimeout&&o.currentWindow.cancelAnimationFrame(o.rafDragTimeout),o.rafDragTimeout=o.currentWindow.requestAnimationFrame((function(){if(o.state.cropSize&&void 0!==e&&void 0!==r){var t=e-o.dragStartPosition.x,n=r-o.dragStartPosition.y,i={x:o.dragStartCrop.x+t,y:o.dragStartCrop.y+n},a=o.props.restrictPosition?s(i,o.mediaSize,o.state.cropSize,o.props.zoom,o.props.rotation):i;o.props.onCropChange(a)}})))},o.onDragStopped=function(){var t,e;o.isTouching=!1,o.cleanEvents(),o.emitCropData(),null===(e=(t=o.props).onInteractionEnd)||void 0===e||e.call(t)},o.onWheel=function(t){if(o.currentWindow&&(!o.props.onWheelRequest||o.props.onWheelRequest(t))){t.preventDefault();var r=e.getMousePoint(t),n=c()(t).pixelY,i=o.props.zoom-n*o.props.zoomSpeed/200;o.setNewZoom(i,r,{shouldUpdatePosition:!0}),o.state.hasWheelJustStarted||o.setState({hasWheelJustStarted:!0},(function(){var t,e;return null===(e=(t=o.props).onInteractionStart)||void 0===e?void 0:e.call(t)})),o.wheelTimer&&clearTimeout(o.wheelTimer),o.wheelTimer=o.currentWindow.setTimeout((function(){return o.setState({hasWheelJustStarted:!1},(function(){var t,e;return null===(e=(t=o.props).onInteractionEnd)||void 0===e?void 0:e.call(t)}))}),250)}},o.getPointOnContainer=function(t){var e=t.x,r=t.y;if(!o.containerRect)throw new Error("The Cropper is not mounted");return{x:o.containerRect.width/2-(e-o.containerRect.left),y:o.containerRect.height/2-(r-o.containerRect.top)}},o.getPointOnMedia=function(t){var e=t.x,r=t.y,n=o.props,i=n.crop,a=n.zoom;return{x:(e+i.x)/a,y:(r+i.y)/a}},o.setNewZoom=function(t,e,r){var n=(void 0===r?{}:r).shouldUpdatePosition,i=void 0===n||n;if(o.state.cropSize&&o.props.onZoomChange){var a=m(t,o.props.minZoom,o.props.maxZoom);if(i){var c=o.getPointOnContainer(e),h=o.getPointOnMedia(c),u={x:h.x*a-c.x,y:h.y*a-c.y},p=o.props.restrictPosition?s(u,o.mediaSize,o.state.cropSize,a,o.props.rotation):u;o.props.onCropChange(p)}o.props.onZoomChange(a)}},o.getCropData=function(){return o.state.cropSize?function(t,e,o,r,i,a,c){void 0===a&&(a=0),void 0===c&&(c=!0);var s=c?d:l,h=v(e.width,e.height,a),u=v(e.naturalWidth,e.naturalHeight,a),p={x:s(100,((h.width-o.width/i)/2-t.x/i)/h.width*100),y:s(100,((h.height-o.height/i)/2-t.y/i)/h.height*100),width:s(100,o.width/h.width*100/i),height:s(100,o.height/h.height*100/i)},f=Math.round(s(u.width,p.width*u.width/100)),m=Math.round(s(u.height,p.height*u.height/100)),g=u.width>=u.height*r?{width:Math.round(m*r),height:m}:{width:f,height:Math.round(f/r)};return{croppedAreaPercentages:p,croppedAreaPixels:n(n({},g),{x:Math.round(s(u.width-g.width,p.x*u.width/100)),y:Math.round(s(u.height-g.height,p.y*u.height/100))})}}(o.props.restrictPosition?s(o.props.crop,o.mediaSize,o.state.cropSize,o.props.zoom,o.props.rotation):o.props.crop,o.mediaSize,o.state.cropSize,o.getAspect(),o.props.zoom,o.props.rotation,o.props.restrictPosition):null},o.emitCropData=function(){var t=o.getCropData();if(t){var e=t.croppedAreaPercentages,r=t.croppedAreaPixels;o.props.onCropComplete&&o.props.onCropComplete(e,r),o.props.onCropAreaChange&&o.props.onCropAreaChange(e,r)}},o.emitCropAreaChange=function(){var t=o.getCropData();if(t){var e=t.croppedAreaPercentages,r=t.croppedAreaPixels;o.props.onCropAreaChange&&o.props.onCropAreaChange(e,r)}},o.recomputeCropPosition=function(){if(o.state.cropSize){var t=o.props.restrictPosition?s(o.props.crop,o.mediaSize,o.state.cropSize,o.props.zoom,o.props.rotation):o.props.crop;o.props.onCropChange(t),o.emitCropData()}},o}return function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(e,t),e.prototype.componentDidMount=function(){this.currentDoc&&this.currentWindow&&(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),"undefined"===typeof window.ResizeObserver&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_Contain {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.reactEasyCrop_Cover_Horizontal {\n  width: 100%;\n  height: auto;\n}\n.reactEasyCrop_Cover_Vertical {\n  width: auto;\n  height: 100%;\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n",this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef))},e.prototype.componentWillUnmount=function(){var t,e;this.currentDoc&&this.currentWindow&&("undefined"===typeof window.ResizeObserver&&this.currentWindow.removeEventListener("resize",this.computeSizes),null===(t=this.resizeObserver)||void 0===t||t.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&(null===(e=this.styleRef.parentNode)||void 0===e||e.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},e.prototype.componentDidUpdate=function(t){var e,o,r,n,i,a,c,s,h;t.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):t.aspect!==this.props.aspect?this.computeSizes():t.zoom!==this.props.zoom?this.recomputeCropPosition():(null===(e=t.cropSize)||void 0===e?void 0:e.height)!==(null===(o=this.props.cropSize)||void 0===o?void 0:o.height)||(null===(r=t.cropSize)||void 0===r?void 0:r.width)!==(null===(n=this.props.cropSize)||void 0===n?void 0:n.width)?this.computeSizes():(null===(i=t.crop)||void 0===i?void 0:i.x)===(null===(a=this.props.crop)||void 0===a?void 0:a.x)&&(null===(c=t.crop)||void 0===c?void 0:c.y)===(null===(s=this.props.crop)||void 0===s?void 0:s.y)||this.emitCropAreaChange(),t.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),t.video!==this.props.video&&(null===(h=this.videoRef.current)||void 0===h||h.load())},e.prototype.getAspect=function(){var t=this.props,e=t.cropSize,o=t.aspect;return e?e.width/e.height:o},e.prototype.onPinchStart=function(t){var o=e.getTouchPoint(t.touches[0]),r=e.getTouchPoint(t.touches[1]);this.lastPinchDistance=u(o,r),this.lastPinchRotation=p(o,r),this.onDragStart(f(o,r))},e.prototype.onPinchMove=function(t){var o=this;if(this.currentDoc&&this.currentWindow){var r=e.getTouchPoint(t.touches[0]),n=e.getTouchPoint(t.touches[1]),i=f(r,n);this.onDrag(i),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame((function(){var t=u(r,n),e=o.props.zoom*(t/o.lastPinchDistance);o.setNewZoom(e,i,{shouldUpdatePosition:!1}),o.lastPinchDistance=t;var a=p(r,n),c=o.props.rotation+(a-o.lastPinchRotation);o.props.onRotationChange&&o.props.onRotationChange(c),o.lastPinchRotation=a}))}},e.prototype.render=function(){var t=this,e=this.props,o=e.image,r=e.video,a=e.mediaProps,c=e.transform,s=e.crop,h=s.x,u=s.y,p=e.rotation,d=e.zoom,l=e.cropShape,f=e.showGrid,v=e.style,m=v.containerStyle,w=v.cropAreaStyle,y=v.mediaStyle,C=e.classes,S=C.containerClassName,x=C.cropAreaClassName,b=C.mediaClassName,z=e.objectFit;return i.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(e){return t.containerRef=e},"data-testid":"container",style:m,className:g("reactEasyCrop_Container",S)},o?i.createElement("img",n({alt:"",className:g("reactEasyCrop_Image","contain"===z&&"reactEasyCrop_Contain","horizontal-cover"===z&&"reactEasyCrop_Cover_Horizontal","vertical-cover"===z&&"reactEasyCrop_Cover_Vertical","auto-cover"===z&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),b)},a,{src:o,ref:this.imageRef,style:n(n({},y),{transform:c||"translate(".concat(h,"px, ").concat(u,"px) rotate(").concat(p,"deg) scale(").concat(d,")")}),onLoad:this.onMediaLoad})):r&&i.createElement("video",n({autoPlay:!0,loop:!0,muted:!0,className:g("reactEasyCrop_Video","contain"===z&&"reactEasyCrop_Contain","horizontal-cover"===z&&"reactEasyCrop_Cover_Horizontal","vertical-cover"===z&&"reactEasyCrop_Cover_Vertical","auto-cover"===z&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),b)},a,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:n(n({},y),{transform:c||"translate(".concat(h,"px, ").concat(u,"px) rotate(").concat(p,"deg) scale(").concat(d,")")}),controls:!1}),(Array.isArray(r)?r:[{src:r}]).map((function(t){return i.createElement("source",n({key:t.src},t))}))),this.state.cropSize&&i.createElement("div",{style:n(n({},w),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:g("reactEasyCrop_CropArea","round"===l&&"reactEasyCrop_CropAreaRound",f&&"reactEasyCrop_CropAreaGrid",x)}))},e.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:3,minZoom:1,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},e.getMousePoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},e.getTouchPoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},e}(i.Component)},15861:function(t,e,o){"use strict";function r(t,e,o,r,n,i,a){try{var c=t[i](a),s=c.value}catch(h){return void o(h)}c.done?e(s):Promise.resolve(s).then(r,n)}function n(t){return function(){var e=this,o=arguments;return new Promise((function(n,i){var a=t.apply(e,o);function c(t){r(a,n,i,c,s,"next",t)}function s(t){r(a,n,i,c,s,"throw",t)}c(void 0)}))}}o.d(e,{Z:function(){return n}})},74165:function(t,e,o){"use strict";o.d(e,{Z:function(){return n}});var r=o(71002);function n(){n=function(){return t};var t={},e=Object.prototype,o=e.hasOwnProperty,i=Object.defineProperty||function(t,e,o){t[e]=o.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",h=a.toStringTag||"@@toStringTag";function u(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(_){u=function(t,e,o){return t[e]=o}}function p(t,e,o,r){var n=e&&e.prototype instanceof f?e:f,a=Object.create(n.prototype),c=new P(r||[]);return i(a,"_invoke",{value:b(t,o,c)}),a}function d(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(_){return{type:"throw",arg:_}}}t.wrap=p;var l={};function f(){}function v(){}function m(){}var g={};u(g,c,(function(){return this}));var w=Object.getPrototypeOf,y=w&&w(w(M([])));y&&y!==e&&o.call(y,c)&&(g=y);var C=m.prototype=f.prototype=Object.create(g);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(i,a,c,s){var h=d(t[i],t,a);if("throw"!==h.type){var u=h.arg,p=u.value;return p&&"object"==(0,r.Z)(p)&&o.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(p).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,s)}))}s(h.arg)}var a;i(this,"_invoke",{value:function(t,o){function r(){return new e((function(e,r){n(t,o,e,r)}))}return a=a?a.then(r,r):r()}})}function b(t,e,o){var r="suspendedStart";return function(n,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw i;return D()}for(o.method=n,o.arg=i;;){var a=o.delegate;if(a){var c=z(a,o);if(c){if(c===l)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===r)throw r="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r="executing";var s=d(t,e,o);if("normal"===s.type){if(r=o.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:o.done}}"throw"===s.type&&(r="completed",o.method="throw",o.arg=s.arg)}}}function z(t,e){var o=e.method,r=t.iterator[o];if(void 0===r)return e.delegate=null,"throw"===o&&t.iterator.return&&(e.method="return",e.arg=void 0,z(t,e),"throw"===e.method)||"return"!==o&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+o+"' method")),l;var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function M(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:D}}function D(){return{value:void 0,done:!0}}return v.prototype=m,i(C,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=u(m,h,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,h,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},S(x.prototype),u(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,o,r,n,i){void 0===i&&(i=Promise);var a=new x(p(e,o,r,n),i);return t.isGeneratorFunction(o)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(C),u(C,h,"Generator"),u(C,c,(function(){return this})),u(C,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),o=[];for(var r in e)o.push(r);return o.reverse(),function t(){for(;o.length;){var r=o.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=M,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(o,r){return a.type="throw",a.arg=t,e.next=o,r&&(e.method="next",e.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),R(o),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var r=o.completion;if("throw"===r.type){var n=r.arg;R(o)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:M(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=void 0),l}},t}}}]);
//# sourceMappingURL=3261.53cbb1cf.chunk.js.map