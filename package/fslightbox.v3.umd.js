!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define([],t);else{var n="object"==typeof exports?t(require("vue")):t(e.Vue);for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(self,(function(e){return function(){"use strict";var t={744:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}},203:function(t){t.exports=e}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){o.r(i),o.d(i,{FsLightbox:function(){return _e}});var e=o(203),t={key:0,ref:"container",class:"fslightbox-container fslightbox-full-dimension fslightbox-fade-in-strong"},n="fslightbox-",r="".concat(n,"styles"),s="".concat(n,"cursor-grabbing"),c="".concat(n,"open"),l="".concat(n,"fade-in"),a="".concat(n,"fade-out"),u=l+"-strong",d=a+"-strong",f="".concat(n,"opacity-"),p="".concat(f,"1"),h="".concat(n,"source");function m(){var e=document.createElement("style");e.className=r,e.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0, 0, 0.7, 1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0, 0, 0.7, 1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0 !important}.fslightbox-opacity-1{opacity:1 !important}.fslightbox-scrollbarfix{padding-right:17px}.fslightboxtt{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30, 30, 30, 0.9), black 1810%);z-index:9999999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media(min-width: 476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media(min-width: 768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media(min-width: 768px){.fslightbox-slide-btn{padding:10px}}@media(min-width: 1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-previous-container{left:0}@media(max-width: 475.99px){.fslightbox-slide-btn-previous-container{padding-left:3px}}.fslightbox-slide-btn-next-container{right:0;padding-left:12px;padding-right:3px}@media(min-width: 476px){.fslightbox-slide-btn-next-container{padding-left:22px}}@media(min-width: 768px){.fslightbox-slide-btn-next-container{padding-left:30px}}@media(min-width: 476px){.fslightbox-slide-btn-next-container{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite}.fslightboxl div:nth-child(1){animation-delay:-0.45s}.fslightboxl div:nth-child(2){animation-delay:-0.3s}.fslightboxl div:nth-child(3){animation-delay:-0.15s}@keyframes fslightboxl{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0;transform:translateZ(0);margin:auto;backface-visibility:hidden}")),document.head.appendChild(e)}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}"object"===("undefined"==typeof document?"undefined":g(document))&&m();var v=[],b="fslightbox-types",x="fslightbox-scrollbar-width";function y(e){var t,n=e.props,o=0,i={};this.getSourceTypeFromLocalStorageByUrl=function(e){return t[e]?t[e]:r(e)},this.handleReceivedSourceTypeForUrl=function(e,n){!1===i[n]&&(o--,"invalid"!==e?i[n]=e:delete i[n],0===o&&(function(e,t){for(var n in t)e[n]=t[n]}(t,i),localStorage.setItem(b,JSON.stringify(t))))};var r=function(e){o++,i[e]=!1};n.disableLocalStorage?(this.getSourceTypeFromLocalStorageByUrl=function(){},this.handleReceivedSourceTypeForUrl=function(){}):(t=JSON.parse(localStorage.getItem(b)))||(t={},this.getSourceTypeFromLocalStorageByUrl=r)}var S="image",w="video",k="youtube",C="custom",L="invalid";function B(e){var t=e.componentsServices.isLightboxOpenManager,n=e.elements.sourcesComponents,o=e.sawu;this.runActionsForSourceTypeAndIndex=function(e,i){var r;switch(e){case S:r="I";break;case w:r="V";break;case k:r="Y";break;case C:r="C";break;default:r="In"}n[i]=r,t.get()&&o[i]()}}function F(){var e,t,n,o=function(e){var t=document.createElement("a");t.href=e;var n=t.hostname;return"www.youtube.com"===n||"youtu.be"===n},i=function(e){return e.slice(0,e.indexOf("/"))};function r(){if(4!==n.readyState){if(2===n.readyState){var e;switch(i(n.getResponseHeader("content-type"))){case"image":e=S;break;case"video":e=w;break;default:e=L}n.onreadystatechange=null,n.abort(),t(e)}}else t(L)}this.setUrlToCheck=function(t){e=t},this.getSourceType=function(i){if(o(e))return i(k);t=i,(n=new XMLHttpRequest).onreadystatechange=r,n.open("GET",e,!0),n.send()}}function N(e,t,n){var o=e.props,i=o.types,r=o.type,s=o.sources,c=e.resolve;this.getTypeSetByClientForIndex=function(e){var t;return i&&i[e]?t=i[e]:r&&(t=r),t},this.retrieveTypeWithXhrForIndex=function(e){var o=c(F);o.setUrlToCheck(s[e]),o.getSourceType((function(o){t.handleReceivedSourceTypeForUrl(o,s[e]),n.runActionsForSourceTypeAndIndex(o,e)}))}}function E(e){var t=this,n=e.componentsServices,o=n.isFullscreenOpenManager,i=n.isLightboxOpenManager,r=e.core,s=r.eventsDispatcher,l=r.globalEventsController,a=r.scrollbarRecompensor,u=e.elements,f=e.fs,p=e.props,h=e.sourcePointerProps,m=e.timeout;this.isLightboxFadingOut=!1,this.runActions=function(){t.isLightboxFadingOut=!0,u.container.classList.add(d),l.removeListeners(),p.exitFullscreenOnClose&&o.get()&&f.exitFullscreen(),m((function(){t.isLightboxFadingOut=!1,h.isPointering=!1,u.container.classList.remove(d),document.documentElement.classList.remove(c),a.removeRecompense(),i.set(!1),s.dispatch("onClose")}),270)}}function z(e){var t=e.core,n=t.lightboxCloser,o=t.slideChangeFacade,i=e.fs;this.listener=function(e){switch(e.key){case"Escape":n.closeLightbox();break;case"ArrowLeft":o.changeToPrevious();break;case"ArrowRight":o.changeToNext();break;case"F11":e.preventDefault(),i.toggleFullscreen()}}}function j(e){var t=e.componentsServices,n=e.elements,o=e.smw,i=e.sourcePointerProps,r=e.stageIndexes;function c(e,t){o[e].v(i.swipedX)[t]()}this.runActionsForEvent=function(e){t.showSlideSwipingHoverer(),n.container.classList.add(s),i.swipedX=e.screenX-i.downScreenX,c(r.current,"z"),void 0!==r.previous&&i.swipedX>0?c(r.previous,"ne"):void 0!==r.next&&i.swipedX<0&&c(r.next,"p")}}function T(e){var t=e.props.sources,n=e.resolve,o=e.sourcePointerProps,i=n(j);1===t.length?this.listener=function(){o.swipedX=1}:this.listener=function(e){o.isPointering&&i.runActionsForEvent(e)}}function A(e){var t=e.core.slideIndexChanger,n=e.smw,o=e.stageIndexes,i=e.sws;function r(e){var t=n[o.current];t.a(),t[e]()}function s(e,t){void 0!==e&&(n[e].s(),n[e][t]())}this.p=function(){var e=o.previous;if(void 0===e)r("z");else{r("p");var n=o.next;t.changeTo(e);var c=o.previous;i.d(c),i.b(n),r("z"),s(c,"ne")}},this.n=function(){var e=o.next;if(void 0===e)r("z");else{r("ne");var n=o.previous;t.changeTo(e);var c=o.next;i.d(c),i.b(n),r("z"),s(c,"p")}}}function I(e){var t=e.componentsServices,n=e.core.lightboxCloser,o=e.elements,i=e.resolve,r=e.sourcePointerProps,c=i(A);this.runNoSwipeActions=function(){t.hideSlideSwipingHoverer(),r.isSourceDownEventTarget||n.closeLightbox(),r.isPointering=!1},this.runActions=function(){r.swipedX>0?c.p():c.n(),t.hideSlideSwipingHoverer(),o.container.classList.remove(s),r.isPointering=!1}}function O(e){var t=e.resolve,n=e.sourcePointerProps,o=t(I);this.listener=function(){n.isPointering&&(n.swipedX?o.runActions():o.runNoSwipeActions())}}function P(e,t){var n=e.classList;n.contains(t)&&n.remove(t)}function V(e,t,n){for(var o=0;o<e.props.sources.length;o++)e.collections[t][o]=e.resolve(n,[o])}function H(e,t,n,o){var i=e.data,r=e.elements.sources,s=n/o,c=0;this.adjustSize=function(){if((c=i.maxSourceWidth/s)<i.maxSourceHeight)return n<i.maxSourceWidth&&(c=o),l();c=o>i.maxSourceHeight?i.maxSourceHeight:o,l()};var l=function(){var e=r[t].style;e.width=c*s+"px",e.height=c+"px"}}function D(e,t){var n=this,o=e.collections.sourceSizers,i=e.elements.sources,r=e.isl,s=e.resolve,c=e.saw,l=e.sawu;function a(e,n){o[t]=s(H,[t,e,n]),o[t].adjustSize()}this.runActions=function(e,o){r[t]=!0,l[t](),i[t].classList.add(p),c[t].classList.add(u),a(e,o),n.runActions=a}}function R(e,t){var n,o=this,i=e.elements.sources,r=e.props,s=e.resolve,c=e.timeout,l=s(D,[t]);this.handleImageLoad=function(e){var t=e.target,n=t.naturalWidth,o=t.naturalHeight;l.runActions(n,o)},this.handleVideoLoad=function(e){var t=e.target,o=t.videoWidth,i=t.videoHeight;n=!0,l.runActions(o,i)},this.handleNotMetaDatedVideoLoad=function(){n||o.handleYoutubeLoad()},this.handleYoutubeLoad=function(){var e=1920,t=1080;r.maxYoutubeVideoDimensions&&(e=r.maxYoutubeVideoDimensions.width,t=r.maxYoutubeVideoDimensions.height),l.runActions(e,t)},this.handleCustomLoad=function(){c((function(){var e=i[t];l.runActions(e.offsetWidth,e.offsetHeight)}))}}function M(e){var t=e.componentsServices.isLightboxOpenManager,n=e.core,o=n.eventsDispatcher,i=n.globalEventsController,r=n.scrollbarRecompensor,s=n.sourceDisplayFacade,c=n.windowResizeActioner,d=(e.elements,e.st),f=e.stageIndexes,p=e.sws;function h(){s.displaySourcesWhichShouldBeDisplayed(),document.documentElement.classList.add("fslightbox-open"),r.addRecompense(),i.attachListeners(),c.runActions(),o.dispatch("onOpen")}e.o=function(){V(e,"sourceLoadHandlers",R),t.set(!0,(function(){p.b(f.previous),p.b(f.current),p.b(f.next),d.u(),p.c(),p.a(),h(),o.dispatch("onShow")}))},e.i=function(){e.ii=!0,V(e,"sourceLoadHandlers",R),function(e){var t,n,o,i,r,s,c;!function(e){var t=e.core.eventsDispatcher,n=e.props;t.dispatch=function(e){n[e]&&n[e]()}}(e),function(e){var t=e.componentsServices.isFullscreenOpenManager,n=e.fs,o=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"];function i(e){for(var t=0;t<o.length;t++)document[e](o[t],r)}function r(){t.set(document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)}n.enterFullscreen=function(){t.set(!0);var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},n.exitFullscreen=function(){t.set(!1),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},n.toggleFullscreen=function(){t.get()?n.exitFullscreen():n.enterFullscreen()},n.listen=function(){i("addEventListener")},n.unlisten=function(){i("removeEventListener")}}(e),function(e){var t=e.core,n=t.globalEventsController,o=t.windowResizeActioner,i=e.fs,r=e.resolve,s=r(z),c=r(T),l=r(O);n.attachListeners=function(){document.addEventListener("pointermove",c.listener),document.addEventListener("pointerup",l.listener),addEventListener("resize",o.runActions),document.addEventListener("keydown",s.listener),i.listen()},n.removeListeners=function(){document.removeEventListener("pointermove",c.listener),document.removeEventListener("pointerup",l.listener),removeEventListener("resize",o.runActions),document.removeEventListener("keydown",s.listener),i.unlisten()}}(e),function(e){var t=e.core.lightboxCloser,n=(0,e.resolve)(E);t.closeLightbox=function(){n.isLightboxFadingOut||n.runActions()}}(e),function(e){var t=e.data,n=e.core.scrollbarRecompensor;n.addRecompense=function(){"complete"===document.readyState?o():window.addEventListener("load",(function(){o(),n.addRecompense=o}))};var o=function(){document.body.offsetHeight>window.innerHeight&&(document.body.style.marginRight=t.scrollbarWidth+"px")};n.removeRecompense=function(){document.body.style.removeProperty("margin-right")}}(e),function(e){var t=e.core,n=t.slideChangeFacade,o=t.slideIndexChanger,i=e.props.sources,r=e.st;i.length>1?(n.changeToPrevious=function(){o.jumpTo(r.getPreviousSlideIndex())},n.changeToNext=function(){o.jumpTo(r.getNextSlideIndex())}):(n.changeToPrevious=function(){},n.changeToNext=function(){})}(e),function(e){var t=e.componentsServices,n=e.core,o=n.slideIndexChanger,i=n.sourceDisplayFacade,r=e.isl,s=e.saw,c=e.smw,u=e.st,d=e.stageIndexes,f=e.sws;o.changeTo=function(e){d.current=e,u.u(),t.setSlideNumber(e+1),i.displaySourcesWhichShouldBeDisplayed()},o.jumpTo=function(e){var t=d.previous,n=d.current,i=d.next,p=r[n],h=r[e];o.changeTo(e);for(var m=0;m<c.length;m++)c[m].d();f.d(n),f.c(),requestAnimationFrame((function(){requestAnimationFrame((function(){var e=d.previous,o=d.current,m=d.next;function g(){u.i(n)?n===d.previous?c[n].ne():n===d.next&&c[n].p():(c[n].h(),c[n].n())}p&&s[n].classList.add(a),h&&s[o].classList.add(l),f.a(),void 0!==e&&e!==n&&c[e].ne(),c[o].n(),void 0!==m&&m!==n&&c[m].p(),f.b(t),f.b(i),r[n]?setTimeout(g,260):g()}))}))}}(e),function(e){var t=e.core.sourcesPointerDown,n=e.elements.sources,o=e.smw,i=e.sourcePointerProps,r=e.stageIndexes;t.listener=function(e){"VIDEO"!==e.target.tagName&&e.preventDefault(),i.isPointering=!0,i.downScreenX=e.screenX,i.swipedX=0;var t=n[r.current];t&&t.contains(e.target)?i.isSourceDownEventTarget=!0:i.isSourceDownEventTarget=!1;for(var s=0;s<o.length;s++)o[s].d()}}(e),function(e){var t=e.core.sourceDisplayFacade,n=e.props.loadOnlyCurrentSource,o=e.sawu,i=e.stageIndexes;t.displaySourcesWhichShouldBeDisplayed=function(){if(n)o[i.current]();else for(var e in i){var t=i[e];void 0!==t&&o[t]()}}}(e),function(e){var t=e.props.sources,n=e.st,o=e.stageIndexes,i=t.length-1;n.getPreviousSlideIndex=function(){return 0===o.current?i:o.current-1},n.getNextSlideIndex=function(){return o.current===i?0:o.current+1},n.u=0===i?function(){}:1===i?function(){0===o.current?(o.next=1,delete o.previous):(o.previous=0,delete o.next)}:function(){o.previous=n.getPreviousSlideIndex(),o.next=n.getNextSlideIndex()},n.i=i<=2?function(){return!0}:function(e){var t=o.current;if(0===t&&e===i||t===i&&0===e)return!0;var n=t-e;return-1===n||0===n||1===n}}(e),function(e){var t=e.collections.sourceSizers,n=e.core.windowResizeActioner,o=e.data,i=e.elements.sources,r=e.smw,s=e.stageIndexes;n.runActions=function(){innerWidth<992?o.maxSourceWidth=innerWidth:o.maxSourceWidth=.9*innerWidth,o.maxSourceHeight=.9*innerHeight;for(var e=0;e<i.length;e++)r[e].d(),t[e]&&i[e]&&t[e].adjustSize();var n=s.previous,c=s.next;void 0!==n&&r[n].ne(),void 0!==c&&r[c].p()}}(e),n=(t=e).isl,o=t.stageIndexes,i=t.saw,r=t.smw,s=t.st,(c=t.sws).a=function(){for(var e in o)r[o[e]].s()},c.b=function(e){void 0===e||s.i(e)||(r[e].h(),r[e].n())},c.c=function(){for(var e in o)c.d(o[e])},c.d=function(e){if(n[e]){var t=i[e];P(t,u),P(t,l),P(t,a)}}}(e),d.u(),t.set(!0,(function(){h(),function(e){for(var t=e.props.sources,n=e.resolve,o=n(y),i=n(B),r=n(N,[o,i]),s=0;s<t.length;s++)if("string"==typeof t[s]){var c=r.getTypeSetByClientForIndex(s);if(c)i.runActionsForSourceTypeAndIndex(c,s);else{var l=o.getSourceTypeFromLocalStorageByUrl(t[s]);l?i.runActionsForSourceTypeAndIndex(l,s):r.retrieveTypeWithXhrForIndex(s)}}else i.runActionsForSourceTypeAndIndex(C,s)}(e),o.dispatch("onInit")}))}}function U(e){var t=e.componentsServices.isLightboxOpenManager,n=e.core.slideIndexChanger,o=e.stageIndexes;this.runCurrentStageIndexUpdateActionsFor=function(e){e!==o.current&&(t.get()?n.jumpTo(e):o.current=e)}}function W(e,t,n){return W=Z()?Reflect.construct.bind():function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&X(i,n.prototype),i},W.apply(null,arguments)}function Z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function X(e,t){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},X(e,t)}function q(e){return function(e){if(Array.isArray(e))return $(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Y(e){var t=this;this.props=e,this.data={isFullyRendered:!1,maxSourceWidth:0,maxSourceHeight:0,scrollbarWidth:0},this.isl=[],this.sourcePointerProps={isPointering:!1,downScreenX:null,isSourceDownEventTarget:!1,swipedX:0},this.stageIndexes={current:0},this.componentsServices={isLightboxOpenManager:{},setSlideNumber:null,isFullscreenOpenManager:{},showSlideSwipingHoverer:null,hideSlideSwipingHoverer:null},this.sawu=[],this.elements={sources:[],sourcesComponents:[]},this.saw=[],this.smw=[],this.collections={sourceLoadHandlers:[],sourceSizers:[],xhrs:[]},this.core={eventsDispatcher:{},globalEventsController:{},lightboxCloser:{},lightboxUpdater:{},scrollbarRecompensor:{},slideChangeFacade:{},slideIndexChanger:{},sourcesPointerDown:{},sourceDisplayFacade:{},windowResizeActioner:{}},this.fs={},this.st={},this.sws={},this.getQueuedAction=function(e,n){var o=[];return function(){o.push(!0),t.timeout((function(){o.pop(),o.length||e()}),n)}},this.resolve=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.unshift(t),W(e,q(n))},this.timeout=function(e,n){setTimeout((function(){t.elements.container&&e()}),n)},function(e){var t=e.componentsServices.isLightboxOpenManager,n=e.core,o=n.lightboxCloser,i=n.lightboxUpdater,r=e.data,s=(0,e.resolve)(U);i.handleSlideProp=function(){var t=e.props;"number"==typeof t.sourceIndex?s.runCurrentStageIndexUpdateActionsFor(t.sourceIndex):"string"==typeof t.source?s.runCurrentStageIndexUpdateActionsFor(t.sources.indexOf(t.source)):"number"==typeof t.slide&&s.runCurrentStageIndexUpdateActionsFor(t.slide-1)},i.handleTogglerUpdate=function(){t.get()?o.closeLightbox():r.isInitialized?e.o():e.i()}}(this),M(this)}var _={ref:"nav",class:"fslightbox-nav"},J={class:"fslightbox-toolbar"},G=["title"],Q=["width","height","viewBox"],K=["d"],ee={props:{size:String,viewBox:String,d:String}},te=o(744),ne=(0,te.Z)(ee,[["render",function(t,n,o,i,r,s){return(0,e.openBlock)(),(0,e.createElementBlock)("svg",{width:o.size,height:o.size,viewBox:o.viewBox,xmlns:"http://www.w3.org/2000/svg"},[(0,e.createElementVNode)("path",{class:"fslightbox-svg-path",d:o.d},null,8,K)],8,Q)}]]),oe={components:{Svger:ne},props:{onClick:Function,size:String,viewBox:String,d:String,title:String}};const ie=(0,te.Z)(oe,[["render",function(t,n,o,i,r,s){var c=(0,e.resolveComponent)("Svger");return(0,e.openBlock)(),(0,e.createElementBlock)("div",{onClick:n[0]||(n[0]=function(){return o.onClick&&o.onClick.apply(o,arguments)}),title:o.title,class:"fslightbox-toolbar-button fslightbox-flex-centered"},[(0,e.createVNode)(c,{size:o.size,"view-box":o.viewBox,d:o.d},null,8,["size","view-box","d"])],8,G)}]]);var re=ie,se={components:{ToolbarButton:re},props:{i:Number},data:function(){return{onClick:v[this.i].core.lightboxCloser.closeLightbox}}},ce=(0,te.Z)(se,[["render",function(t,n,o,i,r,s){var c=(0,e.resolveComponent)("ToolbarButton");return(0,e.openBlock)(),(0,e.createBlock)(c,{"on-click":r.onClick,"view-box":"0 0 24 24",size:"20px",d:"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z",title:"Close"},null,8,["on-click"])}]]),le={components:{ToolbarButton:re},props:{i:Number},data:function(){return{isFullscreenOpen:!1}},methods:{getButtonData:function(e){var t=v[this.i].fs,n=t.exitFullscreen,o=t.enterFullscreen;return(this.isFullscreenOpen?{onClick:n,viewBox:"0 0 950 1024",size:"24px",d:"M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z",title:"Exit fullscreen"}:{onClick:o,viewBox:"0 0 18 18",size:"20px",d:"M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",title:"Enter fullscreen"})[e]}},created:function(){var e=this,t=v[this.i].componentsServices.isFullscreenOpenManager;t.get=function(){return e.isFullscreenOpen},t.set=function(t){return e.isFullscreenOpen=t}}},ae={components:{FullscreenButton:(0,te.Z)(le,[["render",function(t,n,o,i,r,s){var c=(0,e.resolveComponent)("ToolbarButton");return(0,e.openBlock)(),(0,e.createBlock)(c,{"on-click":s.getButtonData("onClick"),"view-box":s.getButtonData("viewBox"),size:s.getButtonData("size"),d:s.getButtonData("d"),title:s.getButtonData("title")},null,8,["on-click","view-box","size","d","title"])}]]),CloseButton:ce},props:{i:Number}},ue=(0,te.Z)(ae,[["render",function(t,n,o,i,r,s){var c=(0,e.resolveComponent)("FullscreenButton"),l=(0,e.resolveComponent)("CloseButton");return(0,e.openBlock)(),(0,e.createElementBlock)("div",J,[(0,e.createVNode)(c,{i:o.i},null,8,["i"]),(0,e.createVNode)(l,{i:o.i},null,8,["i"])])}]]),de={ref:"source-outer",class:"fslightbox-slide-number-container"},fe={ref:"source-inner",class:"fslightbox-flex-centered"},pe={"data-test-id":"slide-number"},he=(0,e.createElementVNode)("span",{class:"fslightbox-slash"},null,-1),me={props:{i:Number},data:function(){return{slide:v[this.i].stageIndexes.current+1,sourcesCount:v[this.i].props.sources.length}},created:function(){var e=this;v[this.i].componentsServices.setSlideNumber=function(t){return e.slide=t}},mounted:function(){this.$refs["source-inner"].offsetWidth>55&&(this.$refs["source-outer"].style.justifyContent="flex-start")}},ge={components:{SlideNumber:(0,te.Z)(me,[["render",function(t,n,o,i,r,s){return(0,e.openBlock)(),(0,e.createElementBlock)("div",de,[(0,e.createElementVNode)("div",fe,[(0,e.createElementVNode)("span",pe,(0,e.toDisplayString)(r.slide),1),he,(0,e.createElementVNode)("span",null,(0,e.toDisplayString)(r.sourcesCount),1)],512)],512)}]]),Toolbar:ue},props:{i:Number},data:function(){return{hasMoreThanSource:v[this.i].props.sources.length>1}}},ve=(0,te.Z)(ge,[["render",function(t,n,o,i,r,s){var c=(0,e.resolveComponent)("Toolbar"),l=(0,e.resolveComponent)("SlideNumber");return(0,e.openBlock)(),(0,e.createElementBlock)("div",_,[(0,e.createVNode)(c,{i:o.i},null,8,["i"]),r.hasMoreThanSource?((0,e.openBlock)(),(0,e.createBlock)(l,{key:0,i:o.i},null,8,["i"])):(0,e.createCommentVNode)("v-if",!0)],512)}]]),be={ref:"a"},xe={key:0,class:"fslightboxl"},ye=[(0,e.createElementVNode)("div",null,null,-1),(0,e.createElementVNode)("div",null,null,-1),(0,e.createElementVNode)("div",null,null,-1),(0,e.createElementVNode)("div",null,null,-1)],Se=["src"],we={props:{i:Number,j:Number},data:function(){var e=this,t=v[this.i],n=t.collections.sourceLoadHandlers,o=t.props,i=o.customAttributes;return{onLoad:function(t){n[e.j].handleImageLoad(t)},src:o.sources[this.j],customAttributes:i&&i[this.j]}},mounted:function(){v[this.i].elements.sources[this.j]=this.$refs.ref}};const ke=(0,te.Z)(we,[["render",function(t,n,o,i,r,s){return(0,e.openBlock)(),(0,e.createElementBlock)("img",(0,e.mergeProps)({class:"fslightbox-source",onLoad:n[0]||(n[0]=function(){return r.onLoad&&r.onLoad.apply(r,arguments)}),ref:"ref",src:r.src},r.customAttributes),null,16,Se)}]]);var Ce=ke,Le=["src"],Be={props:{i:Number,j:Number},data:function(){var e=v[this.i],t=e.collections.sourceLoadHandlers,n=e.props,o=n.customAttributes,i=n.sources;return{onLoad:t[this.j].handleVideoLoad,src:i[this.j],customAttributes:o&&o[this.j]}},mounted:function(){v[this.i].elements.sources[this.j]=this.$refs.ref}};const Fe=(0,te.Z)(Be,[["render",function(t,n,o,i,r,s){return(0,e.openBlock)(),(0,e.createElementBlock)("video",(0,e.mergeProps)({class:"fslightbox-source fslightbox-video",onLoadedmetadata:n[0]||(n[0]=function(){return r.onLoad&&r.onLoad.apply(r,arguments)}),ref:"ref",controls:""},r.customAttributes),[(0,e.createElementVNode)("source",{src:r.src},null,8,Le)],16)}]]);var Ne=["src"],Ee={props:{i:Number,j:Number},created:function(){var e=v[this.i].props,t=e.customAttributes,n=e.sources,o=this.j,i=n[o],r=i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2],s=i.split("?")[1];s=s||"",this.src="https://www.youtube.com/embed/".concat(r,"?").concat(s),this.customAttributes=t&&t[o]},mounted:function(){var e=v[this.i],t=this.j;e.elements.sources[t]=this.$refs.a,e.collections.sourceLoadHandlers[t].handleYoutubeLoad()}},ze={props:{i:Number,j:Number},created:function(){var e=v[this.i].props.sources[this.j];this.c=e.component?e.component:e,this.p=e.props?e.props:{}},mounted:function(){var e=v[this.i],t=e.collections.sourceLoadHandlers,n=e.elements.sources;n[this.j]=this.$refs.a.$el,n[this.j].classList.add(h),t[this.j].handleCustomLoad()}},je={class:"fslightbox-invalid-file-wrapper fslightbox-flex-centered"},Te={props:{i:Number,j:Number},mounted:function(){var e=v[this.i],t=this.j,n=e.isl,o=e.sawu,i=e.smw;n[t]=!0,o[t](),i[t].classList.add(u)}},Ae={props:{i:Number,j:Number},components:{I:Ce,V:Fe,Y:(0,te.Z)(Ee,[["render",function(t,n,o,i,r,s){return(0,e.openBlock)(),(0,e.createElementBlock)("iframe",(0,e.mergeProps)({class:"fslightbox-source fslightbox-youtube-iframe",ref:"a",src:t.src,allowfullscreen:""},t.customAttributes),null,16,Ne)}]]),C:(0,te.Z)(ze,[["render",function(t,n,o,i,r,s){return(0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)(t.c),(0,e.mergeProps)(t.p,{ref:"a"}),null,16)}]]),In:(0,te.Z)(Te,[["render",function(t,n,o,i,r,s){return(0,e.openBlock)(),(0,e.createElementBlock)("div",je,"Invalid source")}]])},data:function(){var e={};return this.attachComponentDataToObject(e),e},created:function(){var e=this;v[this.i].sawu[this.j]=function(){e.attachComponentDataToObject(e)}},mounted:function(){v[this.i].saw[this.j]=this.$refs.a},methods:{attachComponentDataToObject:function(e){var t=v[this.i],n=t.elements.sourcesComponents,o=t.isl,i=t.props.loadOnlyCurrentSource,r=t.st,s=t.stageIndexes.current;e.sourceComponent=n[this.j],e.isl=o[this.j],e.ist=r.i(this.j),e.current=s,e.loadOnlyCurrentSource=i}}},Ie={props:{i:Number,j:Number},components:{Saw:(0,te.Z)(Ae,[["render",function(t,n,o,i,r,s){return(0,e.openBlock)(),(0,e.createElementBlock)("div",be,[t.isl?(0,e.createCommentVNode)("v-if",!0):((0,e.openBlock)(),(0,e.createElementBlock)("div",xe,ye)),t.current===o.j||!t.loadOnlyCurrentSource&&t.ist?((0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)(t.sourceComponent),{key:1,i:o.i,j:o.j},null,8,["i","j"])):(0,e.createCommentVNode)("v-if",!0)],512)}]])},created:function(){this.css=v[this.i].st.i(this.j)?{}:{display:"none"}},mounted:function(){var e=v[this.i],t=this.$refs.a,n=0;function o(e){t.style.transform="translateX(".concat(e+n,"px)"),n=0}function i(){return(1+e.props.slideDistance)*innerWidth}t.s=function(){t.style.display="flex"},t.h=function(){t.style.display="none"},t.a=function(){t.classList.add("fslightboxtt")},t.d=function(){t.classList.remove("fslightboxtt")},t.n=function(){t.style.removeProperty("transform")},t.v=function(e){return n=e,t},t.ne=function(){o(-i())},t.z=function(){o(0)},t.p=function(){o(i())},e.smw[this.j]=t}},Oe={props:{i:Number},components:{Smw:(0,te.Z)(Ie,[["render",function(t,n,o,i,r,s){var c=(0,e.resolveComponent)("Saw");return(0,e.openBlock)(),(0,e.createElementBlock)("div",{ref:"a",class:"fslightbox-absoluted fslightbox-full-dimension fslightbox-flex-centered",style:(0,e.normalizeStyle)(t.css)},[(0,e.createVNode)(c,{i:o.i,j:o.j},null,8,["i","j"])],4)}]])},data:function(){var e=v[this.i],t=e.core.sourcesPointerDown.listener;return{sources:e.props.sources,listener:t}}};const Pe=(0,te.Z)(Oe,[["render",function(t,n,o,i,r,s){var c=(0,e.resolveComponent)("Smw");return(0,e.openBlock)(),(0,e.createElementBlock)("div",{class:"fslightbox-absoluted fslightbox-full-dimension",onPointerdown:n[0]||(n[0]=function(){return r.listener&&r.listener.apply(r,arguments)})},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(r.sources.length,(function(t,n){return(0,e.openBlock)(),(0,e.createBlock)(c,{i:o.i,j:n,key:n},null,8,["i","j"])})),128))],32)}]]);var Ve=Pe,He={key:0},De=["title"],Re={class:"fslightbox-slide-btn fslightbox-flex-centered"},Me={components:{Svger:ne},props:{onClick:Function,name:String,d:String},data:function(){var e=this.name.charAt(0).toUpperCase()+this.name.slice(1);return{title:"".concat(e," slide")}}};const Ue=(0,te.Z)(Me,[["render",function(t,n,o,i,r,s){var c=(0,e.resolveComponent)("Svger");return(0,e.openBlock)(),(0,e.createElementBlock)("div",{class:(0,e.normalizeClass)("fslightbox-slide-btn-container fslightbox-slide-btn-".concat(o.name,"-container")),title:r.title,onClick:n[0]||(n[0]=function(){return o.onClick&&o.onClick.apply(o,arguments)})},[(0,e.createElementVNode)("div",Re,[(0,e.createVNode)(c,{"view-box":"0 0 20 20",size:"20px",d:o.d},null,8,["d"])])],10,De)}]]);var We,Ze={props:{i:Number},components:{SlideButton:Ue},data:function(){var e=v[this.i],t=e.core.slideChangeFacade,n=t.changeToPrevious,o=t.changeToNext;return{sourcesCount:e.props.sources.length,changeToPrevious:n,changeToNext:o}}},Xe={key:0,class:"fslightbox-slide-swiping-hoverer fslightbox-full-dimension fslightbox-absoluted"},qe={props:{i:Number},data:function(){return{isSlideSwipingHovererShown:!1}},created:function(){var e=this,t=v[this.i].componentsServices;t.showSlideSwipingHoverer=function(){e.isSlideSwipingHovererShown||(e.isSlideSwipingHovererShown=!0)},t.hideSlideSwipingHoverer=function(){e.isSlideSwipingHovererShown&&(e.isSlideSwipingHovererShown=!1)}}};function $e(e){e.core.lightboxOpener;var t=e.data,n=e.props.openOnMount;document.getElementsByClassName(r).length||m(),t.scrollbarWidth=function(e){var t=e.props.disableLocalStorage;if(!t){var n=localStorage.getItem(x);if(n)return n}var o=function(){var e=document.createElement("div"),t=e.style;return t.visibility="hidden",t.width="100px",t.msOverflowStyle="scrollbar",t.overflow="scroll",e}(),i=function(){var e=document.createElement("div");return e.style.width="100%",e}();document.body.appendChild(o);var r=o.offsetWidth;o.appendChild(i);var s=i.offsetWidth;document.body.removeChild(o);var c=r-s;return t||localStorage.setItem(x,c.toString()),c}(e),n&&e.i()}var Ye={props:{toggler:Boolean,sources:Array,slide:Number,source:String,sourceIndex:Number,onOpen:Function,onClose:Function,onInit:Function,onShow:Function,disableLocalStorage:Boolean,types:Array,type:String,customAttributes:Array,maxYoutubeVideoDimensions:Object,loadOnlyCurrentSource:Boolean,slideDistance:{type:Number,default:.3},openOnMount:Boolean,exitFullscreenOnClose:Boolean},components:{Swc:Ve,SlideButtons:(0,te.Z)(Ze,[["render",function(t,n,o,i,r,s){var c=(0,e.resolveComponent)("SlideButton");return r.sourcesCount>1?((0,e.openBlock)(),(0,e.createElementBlock)("div",He,[(0,e.createVNode)(c,{"on-click":r.changeToPrevious,name:"previous",d:"M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"},null,8,["on-click"]),(0,e.createVNode)(c,{"on-click":r.changeToNext,name:"next",d:"M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"},null,8,["on-click"])])):(0,e.createCommentVNode)("v-if",!0)}]]),Naver:ve,SlideSwipingHoverer:(0,te.Z)(qe,[["render",function(t,n,o,i,r,s){return r.isSlideSwipingHovererShown?((0,e.openBlock)(),(0,e.createElementBlock)("div",Xe)):(0,e.createCommentVNode)("v-if",!0)}]])},data:function(){return{isOpen:!1}},watch:{slide:function(){v[this.i].core.lightboxUpdater.handleSlideProp()},sourceIndex:function(){v[this.i].core.lightboxUpdater.handleSlideProp()},source:function(){v[this.i].core.lightboxUpdater.handleSlideProp()},toggler:function(){v[this.i].core.lightboxUpdater.handleSlideProp(),v[this.i].core.lightboxUpdater.handleTogglerUpdate()}},created:function(){var e=this;this.i=v.push(new Y(this))-1;var t=v[this.i].componentsServices.isLightboxOpenManager;t.get=function(){return e.isOpen},t.set=function(t,n){e.isOpen=t,n&&(We=n)}},mounted:function(){v[this.i].elements.container=this.$refs.container,$e(v[this.i])},updated:function(){v[this.i].elements.container=this.$refs.container,We&&We(),We=null}},_e=(0,te.Z)(Ye,[["render",function(n,o,i,r,s,c){var l=(0,e.resolveComponent)("Naver"),a=(0,e.resolveComponent)("Swc"),u=(0,e.resolveComponent)("SlideButtons"),d=(0,e.resolveComponent)("SlideSwipingHoverer");return s.isOpen?((0,e.openBlock)(),(0,e.createElementBlock)("div",t,[(0,e.createVNode)(l,{i:n.i},null,8,["i"]),(0,e.createVNode)(a,{i:n.i},null,8,["i"]),(0,e.createVNode)(u,{i:n.i},null,8,["i"]),(0,e.createVNode)(d,{i:n.i},null,8,["i"])],512)):(0,e.createCommentVNode)("v-if",!0)}]])}(),i}()}));