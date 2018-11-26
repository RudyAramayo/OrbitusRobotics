AC.define("shared/Detector",["require"],function(a){var b=(function(){return{isMobile:function(){var c=false;
if(typeof window.ClassNameSetup==="object"&&ClassNameSetup.getExperience()==="mobile"){c=true
}if(c||AC.Environment.Browser.os==="iOS"&&AC.Detector.isMobile()){return true}return false
}}})();return b});AC.define("eventEmitter/EventEmitter",[],function(){var d=function(f){this.context=f
};var c=d.prototype;var b=function(){if(!this.hasOwnProperty("_events")&&typeof this._events!=="object"){this._events={}
}return this._events};var a=function(g,i){var j=g[0];var k=g[1];var h=g[2];if(typeof j==="object"){for(var f in j){i.call(this,f,j[f],h)
}}if(typeof j==="string"){j=j.split(" ");j.forEach(function(l){i.call(this,l,k,h)
},this)}};var e=function(j,k){var f;var g;var h;f=b.call(this)[j];if(!f){return
}for(g=0,h=f.length;g<h;g++){if(k(f[g],g)){break}}};c.on=function(){var f=b.call(this);
a.call(this,arguments,function(h,i,g){f[h]=f[h]||(f[h]=[]);f[h].push({callback:i,context:g})
});return this};c.once=function(){a.call(this,arguments,function(g,i,f){var h=function(j){i.call(f||this,j);
this.off(g,h)};this.on(g,h,this)});return this};c.off=function(h,j){var g=b.call(this);
if(arguments.length===0){g={};return this}if(arguments.length===1&&g[h]){g[h]=[];
return this}var f=-1;e.call(this,h,function(k,i){f=i;if(k.callback===j){return true
}});if(f===-1){return}g[h].splice(f,1);return this};c.trigger=function(f,g){f=f.split(" ");
f.forEach(function(h){e.call(this,h,function(i){i.callback.call(i.context||this.context||this,g)
}.bind(this))},this);return this};return d});AC.define("touchScroll/AutoLockMapper",[],function(){var a=function(c,b){this.options=b||{};
this.position=this.options.position||"bottom";this.relativePosition=this.options.relativePosition||"bottom";
this._lastPadding=this.options.lastPadding||0;this._lockAttr=this.options.lockAttr||"data-ts-lock";
this._positionAttr=this.options.positionAttr||"data-ts-position";this._relativePositionAttr=this.options.pagePosition||"data-ts-relative-position";
this._el=c;this._lockElements=this._el.querySelectorAll("["+this._lockAttr+"]");
this.setScrollHeight(this.options.scrollHeight);this.setLockMap();return this};
a.prototype.setLockMap=function(){this._lockMap=this._mapLockValues(this._lockElements)
};a.prototype.getLockMap=function(){return this._lockMap};a.prototype.setScrollHeight=function(b){if(typeof b==="number"||(typeof b==="string"&&b.indexOf("px")>-1)){this._scrollHeight=parseInt(b,10);
return}this._scrollHeight=0};a.prototype._mapLockValues=function(b){var k={},j=0;
var e,d,f,h,g=b.length;for(e=0;e<g;e++){d=b[e];h=parseInt(d.getAttribute(this._lockAttr),10);
f=this._getScrollPosition(d,this._getPositionAttributeValue(d));k[j]=f+h;j=+f}var c=j-this._lastPadding;
k[c]=Infinity;return k};a.prototype._getPositionAttributeValue=function(c){var b=c.getAttribute(this._positionAttr);
if(b){return b}return this.position};a.prototype._getRelativePositionAttributeValue=function(c){var b=c.getAttribute(this._relativePositionAttr);
if(b){return b}return this.relativePosition};a.prototype._getScrollPosition=function(c,b){var d=AC.Element.getBoundingBox(c)[b];
if(this._getRelativePositionAttributeValue(c)==="top"&&typeof this._scrollHeight==="number"){d=d+this._scrollHeight
}return d};return a});AC.define("touchScroll/RangeManager",["require","eventEmitter/EventEmitter"],function(a){var d=a("eventEmitter/EventEmitter");
var b={change:"change",forward:"forward",backward:"backward"};var c=function(e){this._events=new d();
if(e){this.initialize(e)}};c.prototype.initialize=function(e){this.ranges=e;this.setIndex(0);
return this};c.prototype.on=function(e,f){this._events.on.apply(this,[e,f]);return this
};c.prototype.off=function(e,f){this._events.off.apply(this,[e,f]);return this};
c.prototype.once=function(e,f){this._events.once.apply(this,[e,f]);return this};
c.prototype.trigger=function(e,f){this._events.trigger.apply(this,[e,f]);return this
};c.prototype.setVal=function(f){var e=this.getRangeIndex(f,this._currentIdx);this.setIndex(e);
return this};c.prototype.setIndex=function(e){if(e===this._currentIdx){return}var g=this._currentIdx,h={idx:e,lastIdx:g},f=b.forward;
this._currentIdx=e;if(g>e){f=b.backward}this.trigger(b.change,h);this.trigger(f,h);
return this};c.prototype.getRangeIndex=function(j,h){if(typeof h!=="undefined"){var f=h,e=this.ranges[f],i=this._currentIdx+1,g=this.ranges[i];
if(typeof g==="undefined"){g=Infinity}if((e<j)&&(j<g)){return f}}return this.getRangeStartByVal(j,this.ranges).idx
};c.prototype.getRangeStartByVal=function(i,f){var e=0,h=f.length;while(h-e>1){var g=Math.round((e+h)/2);
if(f[g]<=i){e=g}else{h=g}}if(f[e]===i){h=e}return{idx:e,val:f[e]}};return c});AC.define("touchScroll/ScrollLocker",["require","touchScroll/RangeManager"],function(a){var c=a("touchScroll/RangeManager");
var b=function(d,e,f){this._touchScroll=d;this.el=f;this._rangeManager=new c();
this.reset(e);this.setScrollTop(this._lockData.vals[0]);this._rangeManager.on("change",this._handleUnlock.bind(this));
this._touchScroll.on("trueScroll",this._onScroll.bind(this))};b.prototype.setLockData=function(d){this._lockData=this._parseLockData(d);
this._rangeManager.initialize(this._lockData.keys)};b.prototype.setScrollTop=function(f,d){d=d||this.el;
var e=f+"px";if(f===Infinity){e=""}AC.Element.setStyle(d,{"max-height":e});return this
};b.prototype.reset=function(d){if(d){this.setLockData(d)}this.wrapperHeight=AC.Element.getBoundingBox(this._touchScroll.el).height;
this.contentHeight=AC.Element.getBoundingBox(this.el).height;AC.Element.setStyle(this.el,{overflow:"hidden",position:"absolute",top:0,left:0,height:this.contentHeight+"px",width:"inherit"});
return this};b.prototype._handleUnlock=function(e){var d=e.idx;if(typeof d==="undefined"){return
}var f=this._lockData.vals[d];this.setScrollTop(f)};b.prototype._onScroll=function(e){var d=e.scrollTop+this.wrapperHeight;
this._rangeManager.setVal(d)};b.prototype._parseLockData=function(g){var d={keys:[],vals:[]};
var f,e,h;for(f in g){if(g.hasOwnProperty(f)){e=f;h=g[f];if(typeof e==="string"){e=parseInt(e,10)
}if(typeof h==="string"){e=parseInt(h,10)}d.keys.push(e);d.vals.push(h)}}return d
};return b});AC.define("touchScroll/TouchScroll",["require","eventEmitter/EventEmitter","touchScroll/AutoLockMapper","touchScroll/ScrollLocker"],function(d){var k=d("eventEmitter/EventEmitter"),a=d("touchScroll/AutoLockMapper"),i=d("touchScroll/ScrollLocker");
var j={touchstart:"touchstart",touchmove:"touchmove",touchend:"touchend",scroll:"scroll",scrollEnd:"scrollEnd",trueScroll:"trueScroll",fastVelocity:"fastVelocity"};
var b="scrollTop";var e=0.85,h=0.75,g="time";var c=function(m,l){this.el=m;this.options=l||{};
this.scrollTop=this.el.scrollTop;this.lastScrollTop=this.el.scrollTop;this._events=new k();
var n,o;if(this.options.locks){n=this.options.locks,o=this.options.locksOptions||{};
if(typeof this.options.height!=="undefined"){o.scrollHeight=this.options.height
}this.wrapper=this.options.wrapper||this._wrapContent(this.el);this.el=this._wrapContent(this.wrapper);
if(this.options.locks==="auto"){this._autoLockMapper=new a(this.wrapper,o);n=this._autoLockMapper.getLockMap()
}}else{this.el=this._wrapContent(this.el)}if(!this.options.preventInit){this._enhanceToOverflowScrollingTouch(this.el)
}if(this.options.locks){this._scrollLocker=new i(this,n,this.wrapper)}this._wrapContent(this.el,{position:"relative"});
this._resetState();AC.Element.addEventListener(this.el,j.touchstart,this._onTouchStart.bind(this));
AC.Element.addEventListener(this.el,j.touchmove,this._onTouchMove.bind(this));AC.Element.addEventListener(this.el,j.touchend,this._onTouchEnd.bind(this));
AC.Element.addEventListener(this.el,j.scroll,this._onScroll.bind(this));this.ambientScrollDelegate=new f(this);
this.ambientScrollDelegate.initialize();return this};c.prototype.on=function(l,m){this._events.on.apply(this,[l,m]);
return this};c.prototype.off=function(l,m){this._events.off.apply(this,[l,m]);return this
};c.prototype.once=function(l,m){this._events.once.apply(this,[l,m]);return this
};c.prototype.trigger=function(l,m){this._events.trigger.apply(this,[l,m]);return this
};c.prototype.setScrollTop=function(l){this._setScrollTop(l)};c.prototype.scrollTo=function(l){this.el.scrollTop=l;
this.setScrollTop()};c.prototype._resetState=function(){this._clearScrollTimeout();
this.state={touching:false,scrolling:false,scrollTimeout:null,transition:{},touchstart:{},touchmoves:[],touchend:{}};
return this};c.prototype._onScroll=function(){if(this.state.touching){return this
}this._onScrollEnd(this.el.scrollTop);return this};c.prototype._onTouchStart=function(l){this._resetState();
this.state.touchstart=this._captureEventData(l);this._setScrollTop(this.state.touchstart.scrollTop);
this.state.touching=true;this.state.scrolling=true;this.trigger(j.touchstart,{scrollTop:this.scrollTop});
this.publishTrueScroll();return this};c.prototype._onTouchMove=function(l){this.state.touchmoves.push(this._captureEventData(l));
this.state.touching=true;this.state.scrolling=true;this._setScrollTop(this._getLastTouchMoveOrStartEvent().scrollTop);
this.trigger(j.touchmove,{scrollTop:this.state.touchend.scrollTop});this.publishTrueScroll();
return this};c.prototype._onTouchEnd=function(l){this.state.touchend=this._captureEventData(l);
this.state.touching=false;this._setScrollTop(this.state.touchend.scrollTop);this.trigger(j.touchend,{scrollTop:this.state.touchend.scrollTop});
if(this._touchEndScrollingStopped()){this._onScrollEnd(this.scrollTop);return this
}this.publishTrueScroll();this._clearScrollTimeout();if(this.state.transition.velocity/10>h){this.trigger(j.fastVelocity)
}this._startSelfScroll();return this};c.prototype._captureEventData=function(l){return{time:l.timeStamp,type:l.type,scrollTop:this.el.scrollTop}
};c.prototype._onScrollEnd=function(l){this._setScrollTop(l);this.publishTrueScroll();
this.trigger(j.scrollEnd,{scrollTop:this.scrollTop});this._resetState();return this
};c.prototype.publishTrueScroll=function(){this.trigger(j.trueScroll,{scrollTop:this.scrollTop})
};c.prototype._enhanceToOverflowScrollingTouch=function(n){var m={"-webkit-overflow-scrolling":"touch","-webkit-touch-callout":"none","-webkit-user-select":"none",overflow:"hidden","overflow-y":"scroll",position:"absolute","z-index":"1"};
if(typeof this.options.width!=="undefined"){m.width=this.options.width;if(typeof this.options.width==="number"){m.width=this.options.width+"px"
}}if(typeof this.options.height!=="undefined"){m.height=this.options.height;if(typeof this.options.height==="number"){m.height=this.options.height+"px"
}}var l,o;for(l in m){if(m.hasOwnProperty(l)){o={};o[l]=m[l];AC.Element.setStyle(n,o)
}}return this};c.prototype._wrapContent=function(n,m){var o=document.createElement("DIV"),l=n.parentNode;
if(!l){l=document.createElement("DIV");l.appendChild(n)}l.insertBefore(o,n);o.appendChild(n);
if(typeof m==="object"){AC.Element.setStyle(o,m)}return o};c.prototype._startSelfScroll=function(){var l=250;
this.state.transition.lastPos=this.scrollTop;this.state.scrollTimeout=setTimeout(function(){this._onSelfScroll();
this._startSelfScroll()}.bind(this),l);return this};c.prototype._onSelfScroll=function(){var l=this._getSelfScrollParams();
this._setScrollTop(this._selfScrollPos(l));return this};c.prototype._selfScrollPos=function(l){return AC.EasingFunctions.easeOutCubic(l.percentComplete,l.launchPos,l.totalChange,1)
};c.prototype._selfScrollDuration=function(n){var m=1.7,o=n.velocity/10;if(o>e){o=e
}var l=(o*o*o+1);return(m+l)*1000};c.prototype._selfScrollEndPos=function(l){var m=l.velocity;
return l.launchPos+(l.rate*(m*m*m)*l.duration/1000)};c.prototype._selfScrollPosChange=function(l){return l.endPos-l.launchPos
};c.prototype._selfScrollValue=function(m){var l=m.currentTime-m.launchTime;return l/m.duration
};c.prototype._getSelfScrollParams=function(){var l={initialTime:this.state.transition.previousTime,initialPos:this.state.transition.previousTop,launchTime:this.state.transition.startTime,launchPos:this.state.transition.startTop,velocity:this.state.transition.velocity,distance:this.state.transition.distance,rate:this.state.transition.rate,lastPos:this.scrollTop,currentTime:new Date().getTime()};
l.duration=this._selfScrollDuration(l);l.endPos=this._selfScrollEndPos(l);l.totalChange=this._selfScrollPosChange(l);
l.percentComplete=this._selfScrollValue(l);return l};c.prototype._clearScrollTimeout=function(){if(this.state&&this.state.scrollTimeout){clearTimeout(this.state.scrollTimeout);
this.state.scrollTimeout=null}return this};c.prototype._touchEndScrollingStopped=function(){var n=0.1,l=15,m=this._getLastTouchMoveOrStartEvent();
if(m.type===j.touchstart){this.state.transition.distance=0;this.state.transition.velocity=0;
return true}this.state.transition.distance=this._getDistanceDifference(m,this.state.touchend);
if(this.state.transition.distance===0&&this.state.touchmoves.length>1){m=this.state.touchmoves[this.state.touchmoves.length-2];
this.state.transition.distance=this._getDistanceDifference(m,this.state.touchend)
}this.state.transition.rate=1;if(!this._isScrollingDownward(m,this.state.touchend)){this.state.transition.rate=-1
}this.state.transition.velocity=this._getVelocity(m,this.state.touchend);this.state.transition.previousTop=m[b];
this.state.transition.startTop=this.state.touchend[b];this.state.transition.previousTime=m[g];
this.state.transition.startTime=this.state.touchend[g];if(this.state.transition.distance>l&&this.state.transition.velocity>n){return false
}return true};c.prototype._setScrollTop=function(l){if(typeof l!=="number"){return
}this.lastScrollTop=this.scrollTop;this.scrollTop=l;this._publishScrollTop();return this
};c.prototype._publishScrollTop=function(){this.trigger(j.scroll,{scrollTop:this.scrollTop});
return this};c.prototype._getDistanceDifference=function(m,l){return Math.abs(l[b]-m[b])
};c.prototype._getTimeDifference=function(m,l){return Math.abs(m[g]-l[g])};c.prototype._getVelocity=function(m,l){var o=this._getDistanceDifference(m,l),n=this._getTimeDifference(m,l);
return o/n};c.prototype._isScrollingDownward=function(m,l){if(l[b]>m[b]){return true
}return false};c.prototype._getLastTouchMoveOrStartEvent=function(){var l=this.state.touchmoves.length;
if(l>1){return this.state.touchmoves[l-1]}return this.state.touchstart};var f=function(l){this.rate=1000;
this.touchScrollDelegate=l};f.prototype.initialize=function(){this.startTracking()
};f.prototype.startTracking=function(){this.timeout=setTimeout(function(){this.setScrollPosition();
this.startTracking()}.bind(this),this.rate)};f.prototype.setScrollPosition=function(){if(this.touchScrollDelegate.state.scrolling||this.touchScrollDelegate.state.touching||this.touchScrollDelegate.state.scrollTimeout!==null){return false
}this.touchScrollDelegate.setScrollTop(this.touchScrollDelegate.el.scrollTop);return
};return c});AC.define("mobile/PageSetup",["require","touchScroll/TouchScroll"],function(a){var b=a("touchScroll/TouchScroll");
var c=(function(){var d="desktop",e="mobile";return{initialize:function(g,i){var f=document.body,j=f.scrollTop;
this.setZoomScrollHandler();this.viewable=g;var h=new b(this.viewable,{height:this.getBodyHeight(),width:this.getBodyWidth(),locks:i,locksOptions:{position:"top",relativePosition:"top"}});
h.on("scroll",function(l){var k=new CustomEvent("scroll",{detail:{dispatched:true,scrollTop:l.scrollTop}});
window.dispatchEvent(k)})},setClassName:function(){document.documentElement.classList.add(e);
document.documentElement.classList.remove(d);return this},getBodyHeight:function(){if(window.orientation===0){return document.documentElement.clientHeight
}var f=false;if(window.screen.height>=568){f=true}if(AC.Environment.Browser.version>=7){if(f){return 1472
}return 1191}if(f){return 1421}return 1140},getBodyWidth:function(){return document.documentElement.clientWidth
},setZoomScrollHandler:function(){window.addEventListener("scroll",function(g){if(g.detail&&g.detail.dispatched){return
}var f=document.documentElement.clientWidth/window.innerWidth;if(f<1.1&&window.scrollY>5&&window.orientation===0){this.scrollToTop()
}}.bind(this))},scrollToTop:function(){window.scroll(0,0)}}})();return c});AC.define("animationSequencer/vendor/utils",[],function(){return{isNum:function(a){return typeof a==="number"
},addClass:function(a,b){a.classList.add(b)},removeClass:function(a,b){a.classList.remove(b)
},hasClass:function(a,b){return a.contains(b)},defaults:function(c,b){var a={};
b=b||{};for(var d in c){if(c.hasOwnProperty(d)){a[d]=(b[d]!=null)?b[d]:c[d]}}return a
},defaultProps:function(d,c,a){var b=this.defaults(c,a);for(var e in b){if(b.hasOwnProperty(e)){d[e]=b[e]
}}},invoke:function(c,a){var b=[].slice.call(arguments,2);if(!Array.isArray(c)){throw new Error("List is not an array")
}c.forEach(function(d){var e=d[a];if(e&&typeof e==="function"){e.apply(d,b)}})}}
});AC.define("animationSequencer/PlayerMonitor",["require","eventEmitter/EventEmitter","animationSequencer/vendor/utils"],function(b){var e=b("eventEmitter/EventEmitter");
var a=b("animationSequencer/vendor/utils");function c(g,h,f){f=(Array.isArray(h)?f:h)||{};
this._player=g;this._isMonitoring=true;this._times=[0];this._previous=0;this._currentTimeIndex=0;
this._options=a.defaults({active:true,readyEvent:"canplaythrough",autoInit:false},f);
if(this._options.autoInit){this.addPlayerListener(this._options.readyEvent,this._init.bind(this,h))
}}var d=c.prototype=new e();d.addPlayerListener=function(g,f){if(typeof this._player.addEventListener==="function"){this._player.addEventListener(g,f)
}else{if(typeof this._player.on==="function"){this._player.on(g,f)}}};d._init=function(f){if(this._initialized){return
}this.addTime(this._player.duration);if(f&&f.length){f.forEach(this.addTime.bind(this))
}this._resetNextTimes();this._attachEvents();if(this._options.active){this._listen()
}this.trigger("ready");this._initialized=true};d._attachEvents=function(){this.addPlayerListener("play",this._handlePlay.bind(this));
if(!this._options.active){this.addPlayerListener("timeupdate",this._listen.bind(this))
}this.addPlayerListener("seeking",this._handleSeek.bind(this));this.addPlayerListener("ratechange",this._handleRateChange.bind(this))
};d.addTime=function(f,g){f=parseFloat(f);if(isNaN(f)){throw new TypeError('Invalid time "'+f+'", expected Number"')
}if(this._times.indexOf(f)===-1){this._times.push(f);this._times.sort(function(i,h){return i-h
})}if(typeof g==="function"){this.on("time:"+f,g)}this._resetNextTimes()};d._handleSeek=function(){var g=this._player.currentTime;
var f=this._times.indexOf(g);this._currentTimeIndex=(f!==-1)?f:this._calcCurrentTimeIndex(g);
this._resetNextTimes()};d._handlePlay=function(){this._resetNextTimes();this._listen()
};d._handleRateChange=function(){var g=this._player.currentTime;var h=g===this._player.duration;
var f=this._times.indexOf(g)!==-1;this._currentTimeIndex=(h||f)?this._currentTimeIndex:this._calcCurrentTimeIndex(g);
this._resetNextTimes()};d._resetNextTimes=function(){var f=this._calcNextTimeIndex(this._currentTimeIndex);
if(f){this._nextTimeIndex=f;this._nextTimePoint=this._times[f]}};d._calcCurrentTimeIndex=function(j){var g,i,h,f;
h=this._calcTimeIndices(j);i=h[0];g=h[1];f=(this._forwards())?i:g;return(this._validTimeIndex(f))?f:null
};d._validTimeIndex=function(f){return(0<=f&&f<=this._times.length-1)};d._calcNextTimeIndex=function(f){var g=f+((this._forwards())?1:-1);
return(this._validTimeIndex(g))?g:null};d._calcTimeIndices=function(g){var f=this._times.reduce(function(i,j,h){return(g>=this._times[i+1])?h:i
}.bind(this),0);return[f,f+1]};d._reachedNextTime=function(j){var i=this._forwards();
var g=this._nextTimePoint;var h=!this._player.paused||j===0||j===this._player.duration;
var k=i&&j>=g;var f=!i&&j<=g;return h&&(k||f)};d._forwards=function(){return this._player.playbackRate>0
};d._listen=function(){var g=this._player.currentTime;var f=this._previous;var h=this._reachedNextTime(g);
if(h){this._enterTimePoint(f)}this._previous=g;if(this._options.active&&!this._player.paused){window.requestAnimationFrame(this._listen.bind(this))
}};d._enterTimePoint=function(g){var f=this._calcNextTimeIndex(this._currentTimeIndex);
if(!f){return}var h=this._times[f];this.trigger("time:"+h,{previous:g,next:this._player.currentTime,requested:h});
this._currentTimeIndex=f;this._resetNextTimes()};return c});AC.define("screenSequence/ScreenSequence",["require","defer/Deferred"],function(b){var c=b("defer/Deferred");
var a=AC.Class({__defaultOptions:{preload:false,hidePosterframeOnPlay:true,endframeTransitionDuration:0.4,requireCanPlayThroughToPlay:true,posterframe:"posterframe"},initialize:function(d,e){this._options={};
this._delegate={};this._container=AC.Element.getElementById(d);this._id=null;this._assetPath=null;
this._sequence=null;this._posterframeElement=null;this._endstateElement=null;this._screenElement=null;
this._canPlayThrough=false;this._loading=false;this._loaded=false;this._hasPlayed=false;
this._playing=false;this._autoplay=false;this.synthesize();this.setOptions(AC.Object.extend(AC.Object.clone(this.__defaultOptions),e||{}));
this.setId(this.container().getAttribute("data-"+a.prefix));this.setAssetPath(a.assetPath+this.id()+"/");
this.__enhance();this.hideEndstate();this.__addEventListeners();if(this.options().preload===true){this.load()
}},load:function(){if(this.playing()===true||this.loaded()===true){return(new c()).resolve()
}var d;this.setLoading(true);if(typeof this.delegate().load==="function"){d=this.delegate().load(this)
}else{d=this.__load()}d.then(function(){this.setLoading(false);this.setLoaded(true)
}.bind(this));this.__publish("loading");return d},__load:function(){var d=new c();
d.resolve();return d},play:function(){if(this.playing()===true){return false}if(this.options().requireCanPlayThroughToPlay&&this.canPlayThrough()!==true){this.options().autoplay=true;
if(!this.loading()){this.load()}return}this.__publish("play");if(this.options().hidePosterframeOnPlay===true){this.hidePosterframe()
}this.hideEndstate();if(typeof this.delegate().play==="function"){this.delegate().play(this)
}else{this.__play()}this.setPlaying(true)},__play:function(){},pause:function(){if(this.playing()!==true){return false
}if(typeof this.delegate().pause==="function"){this.delegate().pause(this)}else{this.__pause()
}this.setPlaying(false);this.__publish("paused")},__pause:function(){this.sequence().pause()
},stop:function(){if(this.playing()!==true&&this.loaded()===true){return false}var d;
if(typeof this.delegate().stop==="function"){d=function(){this.delegate().stop(this)
}.bind(this)}else{d=this.__stop.bind(this)}this.options().autoplay=false;var e=this.showEndstate();
e.then(d);this.__publish("stopped")},__stop:function(){if(this.loading()){this.setLoading(false);
this.hidePosterframe()}AC.Element.addClassName(this.container(),a.prefix+"-ended");
if(this.loaded()){this.sequence().currentTime=0}},showPosterframe:function(){AC.Element.setStyle(this.posterframeElement(),{display:"block"})
},hidePosterframe:function(){AC.Element.setStyle(this.posterframeElement(),{display:"none"})
},showEndstate:function(){var g=new c();var e=this.endstateElement();var d=false;
var f=function(){if(!d){g.resolve()}d=true};AC.Element.setVendorPrefixStyle(e,"transform","none");
AC.Element.setStyle(e,"opacity:0");g.then(function(){AC.Element.removeVendorPrefixEventListener(e,"transitionEnd",f)
});if(this.playing()){this.pause();this.setHasPlayed(true)}AC.Element.setVendorPrefixStyle(e,"transition","opacity "+this.options().endframeTransitionDuration+"s ease-out");
AC.Element.setStyle(e,"opacity:1; z-index:1002");if(AC.Environment.Feature.cssPropertyAvailable("transition")){AC.Element.addVendorPrefixEventListener(e,"transitionEnd",f)
}else{f()}return g},hideEndstate:function(){var d=this.endstateElement();AC.Element.setVendorPrefixStyle(d,"transition","none");
AC.Element.setStyle(d,"opacity:0; z-index:1000")},__enhance:function(){this.setScreenElement(document.createElement("div"));
this.setEndstateElement(this.__createEndstate());this.setPosterframeElement(this.__createPosterframe());
this.setSequence(this.__createSequence());AC.Element.insert(this.endstateElement(),this.screenElement());
AC.Element.insert(this.posterframeElement(),this.screenElement());AC.Element.insert(this.sequence().node,this.screenElement());
AC.Element.addClassName(this.screenElement(),"screen");AC.Element.addClassName(this.screenElement(),a.prefix+"-screen");
AC.Element.removeClassName(this.endstateElement(),"screen");AC.Element.addClassName(this.endstateElement(),a.prefix+"-endstate");
AC.Element.addClassName(this.endstateElement(),a.prefix+"-element");AC.Element.addClassName(this.posterframeElement(),a.prefix+"-posterframe");
AC.Element.addClassName(this.posterframeElement(),a.prefix+"-element");AC.Element.addClassName(this.sequence().node,a.prefix+"-sequence");
AC.Element.addClassName(this.sequence().node,a.prefix+"-element");AC.Element.insert(this.screenElement(),this.container(),"first");
AC.Element.addClassName(this.container(),a.prefix+"-enhanced");this.__publish("enhanced")
},__createEndstate:function(){var d=AC.Element.select(".endstate",this.container());
if(!AC.Element.isElement(d)){throw"Missing endstate node for ScreenSequence"}return d
},__createSequence:function(){var d={node:document.createElement("div")};return d
},__createPosterframe:function(f){var d=document.createElement("img");var e="jpg";
f=f||"";d.src=this.assetPath()+this.id()+"_"+this.options().posterframe+f+"."+e;
d.setAttribute("data-hires","false");return d},__publish:function(d){AC.NotificationCenter.publish(a.prefix+"-"+d,{target:this,data:{sequence:this,eventName:d}})
},canPlayThrough:function(){if(this._canPlayThrough!==true&&typeof this.delegate().canPlayThrough==="function"){this._canPlayThrough=this.delegate().canPlayThrough(this)
}return this._canPlayThrough},setCanPlayThrough:function(d){this._canPlayThrough=d;
if(this._canPlayThrough){this.__publish("canPlayThrough")}return this._canPlayThrough
},setLoading:function(d){this._loading=!!d;if(this._loading){AC.Element.addClassName(this.container(),a.prefix+"-loading")
}else{AC.Element.removeClassName(this.container(),a.prefix+"-loading")}return this._loading
},setPlaying:function(d){this._playing=!!d;if(this._playing){AC.Element.addClassName(this.container(),a.prefix+"-playing");
AC.Element.removeClassName(this.container(),a.prefix+"-ended")}else{AC.Element.removeClassName(this.container(),a.prefix+"-playing")
}return this._playing},setId:function(d){d=d.match(/([^#]+)/);if(d){this._id=d[1]
}return this._id},__onCanPlayThrough:function(){AC.Element.removeEventListener(this.sequence().node,"canplaythrough",this.__boundOnCanPlayThrough);
if(typeof this.delegate().setCanPlayThrough==="function"){this.delegate().setCanPlayThrough(this)
}else{this.setCanPlayThrough(true)}if(this.options().autoplay===true){this.play()
}},__onPlaying:function(){this.__publish("playing")},__onTimeupdate:function(){if(typeof this.delegate().onTimeUpdate==="function"){this.delegate().onTimeUpdate(this)
}},__onEnded:function(){var d;this.setHasPlayed(true);this.setPlaying(false);AC.Element.addClassName(this.container(),a.prefix+"-ended");
d=this.showEndstate();this.__publish("ended");return d},__addEventListeners:function(){var d=this.sequence().node;
if(this.__boundOnCanPlayThrough===undefined){this.__boundOnCanPlayThrough=AC.Function.bindAsEventListener(this.__onCanPlayThrough,this)
}if(this.__boundOnPlaying===undefined){this.__boundOnPlaying=AC.Function.bindAsEventListener(this.__onPlaying,this)
}if(this.__boundOnTimeupdate===undefined){this.__boundOnTimeupdate=AC.Function.bindAsEventListener(this.__onTimeupdate,this)
}if(this.__boundOnEnded===undefined){this.__boundOnEnded=AC.Function.bindAsEventListener(this.__onEnded,this)
}AC.Element.addEventListener(d,"canplaythrough",this.__boundOnCanPlayThrough);AC.Element.addEventListener(d,"playing",this.__boundOnPlaying);
AC.Element.addEventListener(d,"timeupdate",this.__boundOnTimeupdate);AC.Element.addEventListener(d,"ended",this.__boundOnEnded)
},__removeEventListeners:function(){var d=this.sequence().node;AC.Element.removeEventListener(d,"canplaythrough",this.__boundOnCanPlayThrough);
AC.Element.removeEventListener(d,"playing",this.__boundOnPlaying);AC.Element.removeEventListener(d,"timeupdate",this.__boundOnTimeupdate);
AC.Element.removeEventListener(d,"ended",this.__boundOnEnded)}});a.canPlay=function(){return true
};a.prefix="screensequence";a.assetPath=window.ScreenSequenceAssetPath;return a
});AC.define("flow/diff/Loader",["require","assetLoader/AssetLoader"],function(b){var c,a=b("assetLoader/AssetLoader");
function d(g,e){var f,j,h=g.match(/#/g).length;this.imagesUrls=[];if(!e){throw new Error("0 images provided")
}for(f=1;f<=e;f++){j="0000"+f;j=j.substring(j.length-h);this.imagesUrls.push(g.replace(/#{2,}/g,j))
}}c=d.prototype;c.load=function(){return new a(this.imagesUrls).load()};return d
});AC.define("flow/diff/Render",["require","flow/diff/Loader","defer/Deferred"],function(d){var e,c=d("flow/diff/Loader"),b=d("defer/Deferred");
function a(g,f){this.flowData=g;this.flowData.imageUrlPattern=f}e=a.prototype;e._storeImages=function(f){if(DEBUG){console.log("loaded images")
}this.images=f;this._blocksPerFullDiff=(f[0].width/this.flowData.blockSize)*(f[0].height/this.flowData.blockSize);
return(new b()).resolve()};e._applyDiffRange=function(h,o){var m=o.block,i=o.length,g=h.canvas.width/this.flowData.blockSize,k=Math.floor(m/this._blocksPerFullDiff),t=this.images[k].width,f=m%this._blocksPerFullDiff,s=t/this.flowData.blockSize,r=(f%s)*this.flowData.blockSize,q=Math.floor(f/(s||1))*this.flowData.blockSize,n=(o.location%g)*this.flowData.blockSize,l=Math.floor(o.location/g)*this.flowData.blockSize,j,p;
while(i){j=Math.min((i*this.flowData.blockSize),h.canvas.width-n,t-r);p=j/this.flowData.blockSize;
if(DEBUG){if(typeof this.renderDebugger!=="undefined"&&this._frameToRender>0){this.renderDebugger.registerComparison(this._frameToRender,{image:k,block:m,x:r,y:q})
}}h.drawImage(this.images[k],r,q,j,this.flowData.blockSize,n,l,j,this.flowData.blockSize);
i-=p;if(i){if((r+=j)>=t){r=0;q+=this.flowData.blockSize}if((f+=p)>=this._blocksPerFullDiff){f=0;
r=0;q=0;k+=1;if(k===this.flowData.imagesRequired-1){t=this.images[k].width}}if((n+=j)>=h.canvas.width){n=0;
l+=this.flowData.blockSize}m+=p}}};e.init=function(){if(DEBUG){console.log("load images")
}return new c(this.flowData.imageUrlPattern,this.flowData.imagesRequired).load().then(this._storeImages.bind(this))
};e.renderDiff=function(f,i){var g=f.getContext("2d");i-=1;if(DEBUG){this._frameToRender=i;
console.log("applying diff frame : "+(i+1))}this.frames[i].forEach(function h(j){this._applyDiffRange(g,j)
}.bind(this))};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(e,{frames:{get:function(){return this.flowData.frames},set:function(f){this.flowData.frames=f
},enumerable:true}});return a});AC.define("flow/compositor/Sequence",["require","assetLoader/AssetLoader","flow/diff/Render","defer/Deferred"],function(c){var e,a=c("assetLoader/AssetLoader"),f=c("flow/diff/Render"),b=c("defer/Deferred");
function d(i,h,g){this._keyframes=i;this._imageUrlPattern=h;this._flowDataProvider=g
}e=d.prototype;e._initDiffRender=function(g){this._images=g;this.canvas.height=g[0].height;
this.canvas.width=g[0].width;this.applyFrame(g[0])};e.init=function(g){this.canvas=g||document.createElement("canvas");
return new a(this._keyframes).load().then(this._initDiffRender.bind(this)).then(this._flowDataProvider.load.bind(this._flowDataProvider))
};e.createDiffRender=function(g){this._diffRender=new f(g,this._imageUrlPattern);
return this._diffRender.init()};e.applyFrame=function(h){var g=this.canvas.getContext("2d");
g.drawImage(h,0,0)};e.calculateRenderCount=function(g,h){var i=0;if(Math.abs(h-g)>=h){g=1;
i=1}else{if(Math.abs(h-g)>=(this.frameCount-h)&&this._images[1]){g=this.frameCount-2;
i=1}}if(h>0&&h<this.frameCount-1){return Math.abs(g-h)+i}else{return i}};e.compositeFrames=function(g,i){var h=new b();
i=(this.frameCount<i)?this.frameCount-1:(i<0)?0:i;g=(this.frameCount-2<g)?this.frameCount-2:(g<0)?0:g;
var j;if(DEBUG){console.groupCollapsed("Rendering diff frames: "+g+"..."+i)}if(Math.abs(i-g)>=i){g=1;
if(DEBUG){console.log("applying start keyframe")}this.applyFrame(this._images[0])
}else{if(Math.abs(i-g)>=(this.frameCount-i)&&this._images[1]){g=this.frameCount-2;
if(DEBUG){console.log("applying end keyframe")}this.applyFrame(this._images[1])
}}j=(g>i)?-1:(g<i)?1:0;if(i>0&&i<this.frameCount-1){while(g!==i){h.progress(g);
this._diffRender.renderDiff(this.canvas,g);g+=j;h.progress(g)}}if(DEBUG){console.groupEnd()
}h.resolve(g);return h.promise()};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(e,{frameCount:{get:function(){return this._diffRender.frames.length+2
},enumerable:true},canvas:{get:function(){return this._canvas},set:function(g){return this._canvas=g
},enumerable:true},mainCompositor:{get:function(){var g=this;while(g._compositor){g=g._compositor
}return g},enumerable:true}});return d});AC.define("flow/data/Manifest",[],function(){function a(){}return a
});AC.define("flow/data/Block",[],function(){function a(b,c){this.location=b;this.length=c
}return a});AC.define("flow/data/processor",["require","flow/data/Manifest","flow/data/Block"],function(b){var e=b("flow/data/Manifest"),a=b("flow/data/Block"),d;
var c={parseData:function(f){d=0;var g=f.frames.map(this._parseFrame,this);return Object.create(e.prototype,{version:{value:f.version},framecount:{value:f.frameCount},blockSize:{value:f.blockSize},imagesRequired:{value:f.imagesRequired},reversible:{value:f.reversible},superframeFrequency:{value:f.superframeFrequency},frames:{value:g}})
},_valueForCharAt:function(h,f){var g=h.charCodeAt(f);if(g>64&&g<91){return g-65
}if(g>96&&g<123){return g-71}if(g>47&&g<58){return g+4}if(g===43){return 62}if(g===47){return 63
}throw"Invalid Bas64 character: "+h.charAt(f)},_createNumberFromBase64Range:function(j,f,i){var h=0,g;
while(i--){g=this._valueForCharAt(j,f++);h+=(g<<i*6)}return h},_parseFrame:function(g){var h,k=[],g=g.value||g,j,f;
for(h=0;h<g.length;h+=5){f=this._createNumberFromBase64Range(g,h,3);j=this._createNumberFromBase64Range(g,h+3,2);
k.push(Object.create(a.prototype,{location:{value:f,enumerable:true},length:{value:j,enumerable:true},block:{value:(d+=j)-j,enumerable:true}}))
}return k}};return c});AC.define("flow/data/provider/Async",["require","ajax/Ajax","flow/data/processor"],function(b){var d,a=b("ajax/Ajax"),e=b("flow/data/processor");
function c(f,g){this._url=f;this._ajaxAdaptor=g||new a()}d=c.prototype;d.load=function(){var f=this;
return this._ajaxAdaptor.get(this._url).then(function(h){try{var g=h.response||h.responseText;
return JSON.parse(g)}catch(i){if(DEBUG){console.log("Failed to parse manifest data")
}}}).then(function(g){f._data=g;return e.parseData(g)})};return c});AC.define("flow/data/provider/Sync",["require","defer/Deferred","flow/data/processor"],function(b){var d,a=b("defer/Deferred"),e=b("flow/data/processor");
function c(f){this._data=f}d=c.prototype;d.load=function(){var f=new a();f.resolve(e.parseData(this._data));
return f.promise()};return c});AC.define("flow/Player",["require","defer/Deferred"],function(b){var d,a=b("defer/Deferred");
function c(f,e){this._flow=e;this._frameRate=30;this.element=f;this.paused=true;
this.loop=false}d=c.prototype;d._dispatchEvent=function(e){var f=document.createEvent("Events");
f.initEvent(e,true,false);f.data=this;this.element.dispatchEvent(f);return f};d._timeToFrame=function(e){var f;
f=Math.round(e/this.duration*this._flow.frameCount);f=f%(this._flow.frameCount+1);
return(f<0)?this._flow.frameCount+f:f};d._advanceToTimeGlobal=function(e){this._prevTime=this._prevTime||e;
this._currentTime+=((e-this._prevTime)/1000)*this.playbackRate;this._prevTime=e;
var f=this._timeToFrame(this._currentTime),g=false;if(!this.loop){if(this.playbackRate>0&&this._currentTime>this.duration){f=this._flow.frameCount;
this._currentTime=this.duration;g=true}else{if(this.playbackRate<0&&this._currentTime<0){f=0;
this._currentTime=0;g=true}}}else{this._currentTime=(this.duration+this._currentTime)%this.duration
}if(!this.paused&&!this.seeking){return this._flow.gotoFrame(f).then(function(){this._dispatchEvent("timeupdate");
if(g){this.paused=true;this._dispatchEvent("ended")}else{this._requestAnimationFrame=window.requestAnimationFrame(this._advanceToTimeGlobal.bind(this))
}}.bind(this))}else{return(new a()).reject()}};d._advanceToTimeLocal=function(e){if(!this.seeking){this.seeking=true;
this._dispatchEvent("seeking");this._currentTime=1*e;this._prevTime=null;window.cancelAnimationFrame(this._requestAnimationFrame);
this._flow.gotoFrame(this._timeToFrame(e)).then(function(){this.seeking=false;this._dispatchEvent("timeupdate");
this._dispatchEvent("seeked");this._requestAnimationFrame=window.requestAnimationFrame(this._advanceToTimeGlobal.bind(this))
}.bind(this))}if(DEBUG){console.log("advance to time "+e+" from "+this._currentTime)
}};d.load=function(){this._dispatchEvent("loadstart");return this._flow.init(this.element).then(this._dispatchEvent.bind(this,"canplaythrough"))
};d.play=function(){if(this.paused){this.paused=false;this._dispatchEvent("play");
this._prevTime=null;this._requestAnimationFrame=window.requestAnimationFrame(this._advanceToTimeGlobal.bind(this))
}return this};d.pause=function(){if(!this.paused){this.paused=true;window.cancelAnimationFrame(this._requestAnimationFrame);
this._dispatchEvent("pause")}return this};d.on=function(){this.element.addEventListener.apply(this.element,arguments)
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(d,{_currentTime:{value:0,enumerable:false,writable:true},_playbackRate:{value:1,enumerable:false,writable:true},currentTime:{get:function(){return this._currentTime*1
},set:d._advanceToTimeLocal,enumerable:true},frameRate:{get:function(){return this._frameRate
},set:function(e){if(isFinite(e)){this._frameRate=e;this._dispatchEvent("durationchange")
}},enumerable:true},playbackRate:{get:function(){return this._playbackRate*1},set:function(e){if(isFinite(e)){this._playbackRate=1*e;
this._dispatchEvent("ratechange")}},enumerable:true},duration:{get:function(){return this._flow.frameCount/this.frameRate
},enumerable:true}});return c});AC.define("flow/keyframe/Loader",["require","assetLoader/AssetLoader","defer/Deferred"],function(d){var e,a=d("assetLoader/AssetLoader"),c=d("defer/Deferred");
function b(f,i){var h,g=f.match(/#/g).length;this._keyframes={};f=f.replace(/([^#]+)(#+)(\..*)/,"$1key_$2$3");
this._imageUrls=[];if(i.frames){i.frames.forEach(function(k,j){if(k.type==="keyframe"){h="0000"+j;
h=h.substring(h.length-g);this._imageUrls.push(f.replace(/#+/g,h));this._keyframes[j]=k
}}.bind(this))}}e=b.prototype;e.load=function(){if(this._imageUrls.length>0){return new a(this._imageUrls).load()
}return(new c()).resolve()};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(e,{keyframes:{get:function(){return this._keyframes},enumerable:true}});
return b});AC.define("flow/keyframe/Render",["require","flow/keyframe/Loader"],function(a){var b,d=a("flow/keyframe/Loader");
function c(f,e){this.flowData=f;this.flowData.imageUrlPattern=e}b=c.prototype;b._storeImages=function(e){var g=0,h;
if(e&&e.length>0){if(DEBUG){console.log("loaded keyframe diff images")}for(var f in this._loader._keyframes){if(this._loader._keyframes.hasOwnProperty(f)){h=e[g];
this._loader._keyframes[f].image=h;g+=1}}}if(DEBUG){if(!e||e.length===0){console.log("no keyframe diff images to load")
}}};b.init=function(){if(DEBUG){console.log("loading keyframe diff images")}this._loader=new d(this.flowData.imageUrlPattern,this.flowData);
return this._loader.load().then(this._storeImages.bind(this))};b.renderKeyframe=function(g,f,o){var e=g.getContext("2d"),i=this._loader.keyframes[f],j=i.image,m=i.x,l=i.y,n=i.width,k=i.height;
if(DEBUG){console.log("applying keyframe diff image: "+f);console.log("x:"+m+" y:"+l+" w:"+n+" h:"+k)
}if(o===true){if(DEBUG){console.log("drawing superKeyframe sub-rectangle")}e.drawImage(j,m,l,n,k,m,l,n,k)
}else{if(this.flowData.reversible){if(DEBUG){console.log("drawing superKeyframe full image")
}e.drawImage(j,0,0)}else{if(DEBUG){console.log("drawing keyframe full image")}e.drawImage(j,m,l,n,k)
}}};return c});AC.define("flow/compositor/decorator/Keyframe",["require","flow/keyframe/Render","defer/Deferred"],function(c){var d,b=c("flow/keyframe/Render"),a=c("defer/Deferred");
function e(f){this._compositor=f;this._flowDataProvider=this.mainCompositor._flowDataProvider
}d=e.prototype;d.init=function(f){this._keyframeDiffRender=new b(this._flowDataProvider._data,this.mainCompositor._imageUrlPattern);
return this._keyframeDiffRender.init()};d.applyFrame=function(f){return this._compositor.applyFrame.apply(this._compositor,arguments)
};d.applyKeyframe=function(f,g){this._keyframeDiffRender.renderKeyframe(this.canvas,f,g)
};d.compositeFrames=function(f,h){if(!this._isKeyframeDiff(h-1)){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}var g=new a();if(DEBUG){console.groupCollapsed("Rendering keyframe diff image: "+(f-1))
}this.applyKeyframe(h-1);if(DEBUG){console.groupEnd()}g.resolve(f-1);return g.promise()
};d._isKeyframeDiff=function(f){return f in this._keyframeDiffRender._loader._keyframes
};d.calculateRenderCount=function(f,g){return this._compositor.calculateRenderCount.apply(this._compositor,arguments)
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(d,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(f){return this._compositor.canvas=f
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});return e});AC.define("flow/compositor/decorator/Superframe",[],function(){var a;
function b(d,c){this._compositor=d;this._superframeInterval=c||4}a=b.prototype;
a._getClosestSuperframe=function(c){return Math.round(c/this._superframeInterval)*this._superframeInterval
};a.init=function(c){this._screenCanvas=c};a.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};a.calculateRenderCount=function(c,e){var d=this._getClosestSuperframe(c);if(Math.abs(d-e)>this._superframeInterval/2){c=d+((c>e)?-1:1)*this._superframeInterval;
return this.calculateRenderCount(c,e)+1}else{return Math.abs(d-e)+1}};a.compositeFrames=function(c,f){var g,d;
if(f<=0||f>=this.frameCount-2){this._compositor.compositeFrames(c,f)}if(c>this.frameCount-2){c=this.frameCount-2
}else{if(c<=0){c=1}}d=this._getClosestSuperframe(c);if(DEBUG){console.groupCollapsed("Rendering : "+c+"..."+f)
}if(this._compositor.calculateRenderCount(c,f)>this.calculateRenderCount(c,f)){if(DEBUG){console.groupCollapsed("Rendering (superframe) : "+d)
}g=this._compositor.compositeFrames(d,d).then(function e(){if(DEBUG){console.groupEnd()
}var h=d+((c>f)?-1:1)*this._superframeInterval;this._compositor.compositeFrames(d,h).then(function(){return this.compositeFrames(h,f)
}.bind(this))}.bind(this))}else{if(DEBUG){console.groupCollapsed("Rendering (final frames) : "+c+"..."+f)
}g=this._compositor.compositeFrames(c,f).then(function e(){if(DEBUG){console.groupEnd()
}}.bind(this))}g.then(function e(){if(DEBUG){console.groupEnd()}}.bind(this));return g
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(a,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(c){return this._compositor.canvas=c
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});return b});AC.define("flow/compositor/decorator/SuperKeyframe",["require","defer/Deferred"],function(b){var c,a=b("defer/Deferred");
function d(e){this._compositor=e;this._frames=this.mainCompositor._flowDataProvider._data.frames;
this._superframeInterval=this.mainCompositor._diffRender.flowData.superframeFrequency
}c=d.prototype;c.init=function(e){return this._compositor.init.apply(this._compositor,arguments)
};c.applyFrame=function(e){return this._compositor.applyFrame.apply(this._compositor,arguments)
};c.applyKeyframe=function(e,f){this._compositor.applyKeyframe.apply(this._compositor,arguments)
};c.compositeFrames=function(e,h){var i,g,f=new a();if(h<1||h>this.frameCount-2){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}if(this._isKeyframeDiff(h-1)){i=Math.abs(e-h)===1?true:false;if(DEBUG){console.groupCollapsed("Drawing superKeyframe image: "+(h-1))
}this.applyKeyframe(h-1,i);if(DEBUG){console.groupEnd()}f.resolve(e-1);return f.promise()
}if(Math.abs(h-e)>this._superframeInterval){g=this._getShortestRender(e,h);if(this._isKeyframeDiff(g-1)||g<=0||g>=this.frameCount-2){return this._compositeFromSuperKeyframe(g,h)
}}if(DEBUG){console.log("SuperKeyframe compositor handing off to slave compositor: fromFrame:"+e+" toFrame:"+h)
}return this._compositor.compositeFrames.apply(this._compositor,[e,h])};c._getShortestRender=function(e,g){var i=this._compositor.calculateRenderCount,h=this._getClosestSuperKeyframe(g-1),f=i.apply(this._compositor,[h,g])+1,j=i.apply(this._compositor,[e,g]);
if(f<=j){return h}else{return e}};c._compositeFromSuperKeyframe=function(i,g){var e=this.canvas.getContext("2d"),f=(i<=0)?this.mainCompositor._images[0]:(i>=this.frameCount-2?this.mainCompositor._images[1]:this._frames[i-1].image),h;
if(DEBUG){console.log("Drawing superKeyframe for composite base: superKeyframe "+(i-1))
}e.drawImage(f,0,0);return this._compositor.compositeFrames.call(this._compositor,i,g)
};c._getClosestSuperFrame=function(e){return Math.round(e/this._superframeInterval)*this._superframeInterval
};c._getClosestSuperKeyframe=function(f){var j,k,h,g,e=this._frames.length;if(f<e+1&&f>0){g=f-1;
while(g>=0){if(this._frames[g].type==="keyframe"){j=g+1;break}g-=1}g=f+1;while(g<=e-1){if(this._frames[g].type==="keyframe"){k=g+1;
break}g+=1}}j=j?j:0;k=k?k:this.frameCount;h=(f-j)<(k-f)?j:k;return h};c._isKeyframeDiff=function(e){return this._compositor._isKeyframeDiff.apply(this._compositor,arguments)
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(c,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(e){return this._compositor.canvas=e
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});return d});AC.define("flow/compositor/decorator/Cache",[],function(){var b;
function a(d,c){this._compositor=d;this._keyframeInterval=c||8;this._keyframes=[]
}b=a.prototype;b._getClosestKeyframe=function(c){var d=c%this._keyframeInterval,e=Math.floor(c/this._keyframeInterval)+((d>(this._keyframeInterval/2))?1:0);
return e};b._getFrameFromKeyframe=function(c){return c*this._keyframeInterval};
b._saveKeyframe=function(e){var c,d=Math.floor(e/this._keyframeInterval);if(e%this._keyframeInterval===0&&!this._keyframes[d]){if(DEBUG){console.log("saving keyframe "+e)
}c=document.createElement("canvas");c.width=this._compositor.canvas.width;c.height=this._compositor.canvas.height;
c.getContext("2d").drawImage(this._compositor.canvas,0,0);this._keyframes[d]=c}};
b.init=function(c){return this._compositor.init.apply(this._compositor,arguments)
};b.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};b.calculateRenderCount=function(c,d){c=this._getFrameFromKeyframe(this._getClosestKeyframe(d));
return this._compositor.calculateRenderCount(c,d)+1};b.compositeFrames=function(c,e){var f=this._getClosestKeyframe(e);
if(DEBUG){console.groupCollapsed("Rendering frames: "+c+"..."+e)}if(this._keyframes[f]&&(this._compositor.calculateRenderCount(c,e)>this.calculateRenderCount(c,e))){c=this._getFrameFromKeyframe(f);
if(DEBUG){console.log("applying prerendered keyframe: "+c)}this.applyFrame(this._keyframes[f]);
return this._compositor.compositeFrames(c,e).then(function d(){if(DEBUG){console.groupEnd()
}})}else{return this._compositor.compositeFrames(c,e).then(function d(){if(DEBUG){console.groupEnd()
}},null,this._saveKeyframe.bind(this))}};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(b,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(c){return this._compositor.canvas=c
},enumerable:true}});return a});AC.define("stats/Benchmark",[],function(){function a(b){this.name=b
}a.prototype.start=function(){if(DEBUG){console.log("▼▼▼ start "+this.name+" benchmark");
this.startTime=new Date().getTime();console.time(this.name)}};a.prototype.end=function(){if(DEBUG){this.endTime=new Date().getTime();
console.log("▲▲▲ end "+this.name+" benchmark "+(this.endTime-this.startTime)/1000+" sec");
console.time(this.timeEnd)}};return a});AC.define("flow/compositor/decorator/Benchmark",["require","stats/Benchmark"],function(a){var b,d=a("stats/Benchmark");
function c(e){this._compositor=e}b=c.prototype;b.init=function(e){var f=new d("init");
f.start();return this._compositor.init.apply(this._compositor,arguments).then(f.end.bind(f))
};b.applyFrame=function(){var e=new d("applyFrame");e.start();this._compositor.applyFrame.apply(this._compositor,arguments);
e.end.bind(e)};b.calculateRenderCount=function(){return this._compositor.calculateRenderCount.apply(this._compositor,arguments)
};b.compositeFrames=function(){var e=new d("renderFrames");e.start();return this._compositor.compositeFrames.apply(this._compositor,arguments).then(e.end.bind(e))
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(b,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(e){return this._compositor.canvas=e
},enumerable:true}});c.prototype=b;return c});AC.define("flow/Flow",["require","defer/Deferred","flow/compositor/decorator/Keyframe","flow/compositor/decorator/Superframe","flow/compositor/decorator/SuperKeyframe","flow/compositor/decorator/Cache","flow/compositor/decorator/Benchmark"],function(a){var c,f=a("defer/Deferred"),g=a("flow/compositor/decorator/Keyframe"),e=a("flow/compositor/decorator/Superframe"),d=a("flow/compositor/decorator/SuperKeyframe"),i=a("flow/compositor/decorator/Cache"),h=a("flow/compositor/decorator/Benchmark");
function b(j,k){this._compositor=j;this.options=k||{}}c=b.prototype;c.gotoFrame=function(j){if(this._rendering){return(new f()).resolve()
}else{if(this._currentFrame===j){return(new f()).resolve()}}this._rendering=true;
if(DEBUG){console.groupCollapsed("gotoFrame:"+j+" currentFrame:"+this._currentFrame)
}return this._compositor.compositeFrames(this._currentFrame,j).then(function(){this._rendering=false;
this._currentFrame=j;if(DEBUG){console.groupEnd()}}.bind(this))};c.init=function(k){var j;
if(k.nodeName==="CANVAS"){j=k}else{j=document.createElement("canvas");k.appendChild(j)
}return this._compositor.init(j).then(function(l){return f.all([this._compositor.createDiffRender(l).then(this._decorateCompositor.bind(this))])
}.bind(this))};c._decorateCompositor=function(){var j=this._compositor,l=this._compositor._diffRender.flowData,k=this._compositor.canvas;
if(l.superframeFrequency){j=new e(j,l.superframeFrequency)}if(l.version===3){j=new g(j)
}if(l.version===3&&l.superframeFrequency){j=new d(j)}if(this.options.keyframeCache){j=new i(j,this.options.keyframeCache)
}if(this.options.benchmark){j=new h(j)}if(j===this._compositor){return(new f()).resolve()
}else{this._compositor=j;return this._compositor.init(k)}};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(c,{_currentFrame:{value:0,enumerable:false,writable:true},frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true}});return b});AC.define("flow/playerFactory",["require","flow/compositor/Sequence","flow/data/provider/Async","flow/data/provider/Sync","flow/Player","flow/Flow"],function(c){var b=c("flow/compositor/Sequence"),g=c("flow/data/provider/Async"),f=c("flow/data/provider/Sync"),a=c("flow/Player"),d=c("flow/Flow");
function e(l,n,k,m,j){var i,o,h;j=j||{};j={keyframeCache:(typeof j.keyframeCache==="undefined")?8:j.keyframeCache,benchmark:(typeof j.benchmark==="undefined")?false:j.benchmark,preload:(typeof j.preload==="undefined")?true:j.preload};
n=n||[l.getAttribute("data-start-frame")];if(l.getAttribute("data-end-frame")){n.push(l.getAttribute("data-end-frame"))
}k=k||l.getAttribute("data-image-url-pattern");h=(typeof m==="string")?new g(m):new f(m);
i=new b(n,k,h);o=new a(l,new d(i,j));if(j.preload){o.load()}return o}return e});
AC.define("screenSequence/sequences/Flow",["require","screenSequence/ScreenSequence","flow/playerFactory"],function(b){var a=b("screenSequence/ScreenSequence");
var c=b("flow/playerFactory");var d=AC.Class(a,{__defaultOptions:{preload:false,hidePosterframeOnPlay:true,endframeTransitionDuration:0.4,requireCanPlayThroughToPlay:true,posterframe:"posterframe",loop:false,autoplay:false,frameRate:24,prefer2x:false,extension:"jpg"},initialize:function($super,e,g){var f;
e=AC.Element.getElementById(e);g=g||{};f=e.getAttribute("data-"+a.prefix);if(!!f.match(/#.*frameRate.*/)){g.frameRate=parseInt(f.match(/frameRate([\d]+)/)[1],10)
}if(!!f.match(/#.*extension:.*/)){g.extension=f.match(/extension:([a-zA-Z]{3})/)[1]
}$super(e,g)},__load:function(){return this.sequence().load()},__play:function(){if(this.canPlayThrough()){this.sequence().play();
this.__onPlaying()}else{this.load().then(function(){this.sequence().play();this.__onPlaying()
}.bind(this))}},__onEnded:function($super){return $super().then(function(){this.sequence().currentTime=0
}.bind(this))},__enhance:function($super){AC.Element.addClassName(this.container(),a.prefix+"-flow");
if(this.__shouldUse2x()){AC.Element.addClassName(this.container(),a.prefix+"-flow-hires")
}$super()},__createSequence:function(){var l="json";var m=AC.Object.clone(this.options());
var k=this.__shouldUse2x()===true?"_2x":"";m.preload=false;m.keyframeCache=false;
var e=this.assetPath()+this.id();var j=e+k+"_###."+this.options().extension;var f=e.replace(/^https?:\/\/[^\/]+\//i,"/")+k+"_manifest."+l;
var i=[e+k+"_keyframe."+this.options().extension,e+k+"_endframe."+this.options().extension];
var g=document.createElement("canvas");var h=c(g,i,j,f,m);h.frameRate=this.options().frameRate;
h.node=g;return h},__shouldUse2x:function(){return this.options().prefer2x===true&&AC.Retina.sharedInstance().shouldReplace("img-tag")
},__createPosterframe:function(){var e=document.createElement("img");var g=this.__shouldUse2x()===true?"_2x":"";
var f=this.options().posterframe==="lastframe"?"_endframe":"_keyframe";e.src=this.assetPath()+this.id()+g+f+"."+this.options().extension;
e.setAttribute("data-hires","false");AC.Element.addClassName(e,a.prefix+"-flow-keyframe");
return e}});d.canPlay=function(){return typeof Object.defineProperties==="function"&&AC.Environment.Feature.canvasAvailable()
};return d});AC.define("screenSequence/sequences/Video",["require","defer/Deferred","screenSequence/ScreenSequence"],function(c){var d=c("defer/Deferred");
var a=c("screenSequence/ScreenSequence");var b=AC.Class(a,{__defaultOptions:{preload:false,hidePosterframeOnPlay:false,endframeTransitionDuration:0.4,requireCanPlayThroughToPlay:true,posterframe:"posterframe",prefer2x:false,addPosterFrameToScreen:true,useiPhoneVideoOnHandheld:true},initialize:function($super,f,e){$super(f,e);
this.__stoppedBeforeCouldLoad=false;if(this.options().addPosterFrameToScreen===true){this.__addPosterFrameToScreen()
}},play:function($super){if(this.playing()===true){return false}if(this.__stoppedBeforeCouldLoad&&AC.Environment.Feature.isTablet()){this.__removeEventListeners();
AC.Element.remove(this.sequence().node);this.setSequence(this.__createSequence());
AC.Element.insert(this.sequence().node,this.screenElement());this.__addEventListeners();
this.__stoppedBeforeCouldLoad=false}$super()},stop:function($super){if(this.loading()){this.setLoading(false);
this.__stoppedBeforeCouldLoad=true}if(this.__playOnTimeUpdateListener){AC.Element.removeEventListener(this.sequence(),"timeupdate",this.__playOnTimeUpdateListener,false)
}$super()},__load:function(){if(this.playing()===true){return false}this.__loadingPromise=new d();
this.sequence().load();return this.__loadingPromise},__playOnTimeUpdate:function(){if(this.sequence().currentTime>0){this.hidePosterframe();
AC.Element.removeEventListener(this.sequence(),"timeupdate",this.__playOnTimeUpdateListener,false)
}},__play:function(){var e=this.sequence();this.__playOnTimeUpdateListener=this.__playOnTimeUpdate.bind(this);
AC.Element.addEventListener(e,"timeupdate",this.__playOnTimeUpdateListener,false);
e.play()},__enhance:function($super){AC.Element.addClassName(this.container(),a.prefix+"-video");
$super()},__createSequence:function(){var j=document.createElement("video");var i=this.assetPath()+this.id();
var f=this.container().getAttribute("data-"+a.prefix);var g="100%";var e="100%";
var h;j.setAttribute("preload","none");j.setAttribute("poster",this.posterframeElement().src);
if(this.options().useiPhoneVideoOnHandheld===true&&AC.Environment.Feature.isHandheld()){i+="_iphone"
}else{if(this.options().prefer2x&&AC.Environment.Browser.name!=="IE"&&!(AC.Environment.Browser.os==="iOS"&&window.devicePixelRatio<1.5)){i+="_2x"
}}i+="."+b.format;if(f.match(/#.*width:[0-9]+.*/i)){g=window.parseInt(f.match(/#.*width:([0-9]+).*/i)[1],10)
}if(f.match(/#.*height:[0-9]+.*/i)){e=window.parseInt(f.match(/#.*height:([0-9]+).*/i)[1],10)
}h="width:"+g+";height:"+e+";";j.setAttribute("style",h);j.setAttribute("src",i);
j.node=j;return j},__createPosterframe:function($super,f){var e;if(typeof f!=="string"&&this.options().prefer2x&&AC.Environment.Browser.name!=="IE"){f="_2x"
}e=$super(f);return e},__addPosterFrameToScreen:function(){AC.Element.setStyle(this.screenElement(),"background:url("+this.posterframeElement().getAttribute("src")+") no-repeat 0 0")
},__onCanPlayThrough:function($super){if(this.__loadingPromise!==undefined){this.__loadingPromise.resolve()
}$super()},__onPlaying:function($super){if(this.playing()){$super()}}});b.canPlay=function(){if(typeof b.__canPlay==="boolean"){return b.__canPlay
}var e=document.createElement("video");if(typeof e.canPlayType==="function"){b.__canPlay=e.canPlayType(b.videoCodec)==="probably"
}else{b.__canPlay=false}return b.__canPlay};b.videoCodec='video/mp4; codecs="mp4a.40.5"';
b.format="mp4";return b});AC.define("screenSequence/loader",[],function(){var a=AC.Class({initialize:function(){this._sequences=[];
this._currentSequence=null;this._deferredQueue=new AC.DeferredQueue({asynchronous:false});
this.synthesize()},loadSequences:function(){this.deferredQueue().start()},loadSequence:function(c){var b=c.load();
this.setCurrentSequence(c);if(b&&typeof b.then==="function"){b.then(this.deferredQueue().didFinish)
}else{this.deferredQueue().didFinish()}return b},add:function(d){var b=this.loadSequence.bind(this);
var c=function(){b(d)};d.__loadAction=c;this.deferredQueue().add(c)}});return a.sharedInstance()
});AC.define("screenSequence/UXController",["require","screenSequence/ScreenSequence"],function(c){var a=c("screenSequence/ScreenSequence");
var b=AC.Class({__defaultOptions:{ambient:false,clickToPlay:true,clickToReplay:false,playOutOfView:false,timeInView:0.1},initialize:function(e,d){this._options={};
this._sequence=e;this._trigger=null;this._showOnScroll=null;this._initialEngage=false;
this._disabled=false;this.synthesize();this.setOptions(AC.Object.extend(AC.Object.clone(this.__defaultOptions),d||{}));
this.__augmentSequence();this.__bindShowOnScroll();this.__addListeners(this.sequence())
},enable:function(){AC.Element.removeClassName(this.sequence().container(),a.prefix+"-disabled");
this.setDisabled(false)},disable:function(){AC.Element.addClassName(this.sequence().container(),a.prefix+"-disabled");
this.setDisabled(true)},__augmentSequence:function(){var e=this.sequence();var d;
if(this.options().clickToPlay||this.options().clickToReplay){d=this.__replaceContainer(e.container());
e.setContainer(d);AC.Element.addEventListener(e.container(),"click",function(f){f.preventDefault();
if(e.playing()&&this.options().preventPause){return false}this.sequence().__publish("willPlay");
if(e.playing()&&!this.disabled()){e.stop()}else{this.__ensureInView();e.play()}}.bind(this),false);
if(this.options().ambient){this.disable()}}if(this.options().clickToPlay){this.__createSpinner()
}return e},__createSpinner:function(){var d=document.createElement("div");d.setAttribute("class",a.prefix+"-spinner");
d.setAttribute("data-hires","false");AC.Element.insert(d,this.sequence().screenElement())
},__ensureInView:function(){var d=this.showOnScroll().options().threshold;this.showOnScroll().options().threshold=0.9;
if(!this.showOnScroll().isEnoughInView()){this.__scrollIntoView(this.sequence().container())
}this.showOnScroll().options().threshold=d},__scrollIntoView:function(d){var e=AC.Element.getBoundingBox(d).top;
if(e<0||e>(document.viewport.getHeight()*0.75)){new Effect.ScrollTo(d,{duration:0.3})
}},__scrolledOutOfView:function(){this.showOnScroll().options().threshold=0.9},__setTrigger:function(){var d=this.sequence().container();
var e=AC.Element.select("."+a.prefix+"-trigger",d);return e||d||null},__replaceContainer:function(e){var d=document.createElement("a");
var f=e.childNodes;d=this.__copyAttributes(e,d);AC.Element.addClassName(d,"block");
AC.Array.toArray(f).forEach(function(g){AC.Element.insert(g,d,"last")});e=e.parentNode.replaceChild(d,e);
return d},__copyAttributes:function(g,d){var e=g.attributes;var f;if(e.length>0){for(f=0;
f<e.length;f+=1){d.setAttribute(e[f].name,e[f].value)}}return d},__bindShowOnScroll:function(){var e=this.sequence();
var d=new AC.ShowOnScroll(e.container(),{threshold:0.65,timeInView:this.options().timeInView});
this.setShowOnScroll(d);if(this.options().ambient||!this.options().playOutOfView){d.setDelegate({visitorEngaged:function(){if(this.initialEngage()!==true){if(this.options().ambient){e.play();
if(this.options().playOutOfView){d.stopObserving()}}this.setInitialEngage(true);
this.sequence().__publish("visitorEngaged")}}.bind(this),scrolledOutOfView:function(){if((e.playing()||e.loading())&&!this.options().playOutOfView){e.stop();
this.enable()}}.bind(this)})}},__addListeners:function(d){if(typeof this.__boundNotificationCallback!=="function"){this.__boundNotificationCallback=this.__notificationCallback.bind(this)
}AC.NotificationCenter.subscribe(a.prefix+"-play",this.__boundNotificationCallback,d);
AC.NotificationCenter.subscribe(a.prefix+"-ended",this.__boundNotificationCallback,d)
},__notificationCallback:function(d){if(this.options().clickToReplay){if(d.eventName==="play"){if(this.options().clickToPlay!==true){this.disable()
}}if(d.eventName==="ended"){this.enable()}}}});return b});AC.define("screenSequence/analyticsTracker",["require","screenSequence/ScreenSequence"],function(c){var a=c("screenSequence/ScreenSequence");
var b=AC.Class({initialize:function(d){this._sequence=d;this._ambient=null;this._containerId=null;
this._dataAnalyticsName=null;this._visitorEngaged=false;this._canPlayThrough=false;
this.synthesize();this.setContainerId(this.sequence().container().id);this.setDataAnalyticsName(this.sequence().container().getAttribute("data-analytics-name"));
this.__ambientEvents=["visitorEngaged","play","didPlay","stop"];this.__screenSequenceEvents=["playing","ended","stopped"];
this.__initAmbient();this.__addListeners()},__setAmbientName:function(){return this.dataAnalyticsName()||this.containerId()
},__initAmbient:function(){var d;var g;var f=this.__getEventsFromDataAttribute();
f=f==="false"?false:f;if(f===false){d=false}else{g=f||this.__ambientEvents;d=new AC.Ambient.AnalyticsController(g)
}var e={analytics:d,showOnScrollOptions:{threshold:0.65,timeInView:0.1}};this.setAmbient(new AC.Ambient.Scroll(this.sequence().screenElement(),e));
this.ambient().setName(this.__setAmbientName());this.ambient().setDelegate({stop:AC.Function.emptyFunction})
},__getEventsFromDataAttribute:function(){var d=this.sequence().container().getAttribute("data-analytics");
if(d){return d==="false"?d:d.split(",")}return false},__addListeners:function(){if(typeof this.__boundNotificationCallback!=="function"){this.__boundNotificationCallback=this.__notificationCallback.bind(this)
}this.__screenSequenceEvents.forEach(function(d){AC.NotificationCenter.subscribe(a.prefix+"-"+d,this.__boundNotificationCallback,this.sequence())
}.bind(this));AC.NotificationCenter.subscribe(this.ambient().options().classNamePrefix+"visitorEngaged",this.__boundNotificationCallback,this.ambient())
},__notificationCallback:function(d){if(d.eventName==="playing"){this.__publishToAmbient("play")
}if(d.eventName==="ended"){this.__publishToAmbient("didPlay")}if(d.eventName==="stopped"){this.__publishToAmbient("stop",{cancelled:function(f){var e={prop13:("v@c: "+AC.Tracking.pageName()+" - "+f.ambientContent.name()),prop47:"v@c - "+(Math.round(this.sequence().sequence().currentTime*100)/100)+"s"};
AC.Tracking.trackClick(e,f.ambientContent,"o",e.prop13)}.bind(this)})}},__publishToAmbient:function(d,g){var e=this.ambient().options().classNamePrefix+d;
var f={ambientContent:this.ambient(),notificationName:e};var h;if(g){for(h in g){f[h]=g[h]
}}AC.NotificationCenter.publish(e,{target:this.ambient(),data:f})}});return b});
AC.define("screenSequence/director",["require","screenSequence/ScreenSequence","screenSequence/sequences/Flow","screenSequence/sequences/Video","screenSequence/loader","screenSequence/UXController","screenSequence/analyticsTracker"],function(f){var b=f("screenSequence/ScreenSequence");
var h=f("screenSequence/sequences/Flow");var e=f("screenSequence/sequences/Video");
var c=f("screenSequence/loader");var d=f("screenSequence/UXController");var a=f("screenSequence/analyticsTracker");
var g=AC.Class({initialize:function(){this._sequences=[];this._currentSequence=null;
this.synthesize();AC.onDOMReady(this.__createSequencesFromDOM.bind(this));AC.Element.addEventListener(window,"load",function(){window.setTimeout(function(){c.loadSequences()
},20)})},sequenceForContainer:function(j){var i=null;this.sequences().some(function(k){if(k.container()===j){i=k;
return true}}.bind(this));return i},createSequence:function(m){var n;var k={};var l=this.__getDeviceOptions(m);
var j=this.__chooseConstructor(m,l);var i=m.getAttribute("data-"+b.prefix);if(j===null){return
}if(j===e){k.prefer2x=!!i.match(/#.*2xvideo.*/i)}if(j===h){k.prefer2x=!!i.match(/#.*2xflow.*/i)
}if(!!i.match(/#.*posterframe:([^,]+).*/i)){k.posterframe=i.match(/#.*posterframe:([^,]+).*/i)[1]
}n=new j(m,k);this.register(n);return n},createUXController:function(n){var j={};
var m;var i=this.__getDataAttribute(n.container());var k=!this.__isNotClickToPlay(n.container(),this.__getDeviceOptions(n.container()));
var l=this.__getDataAttributeAsObject(i).timeinview;j.ambient=!!i.match(/#.*ambient.*/i)&&!k;
j.clickToPlay=k;j.clickToReplay=!!i.match(/#.*clicktoreplay.*/i);j.playOutOfView=!!i.match(/#.*playoutofview.*/i);
j.preventPause=!!i.match(/#.*preventpause.*/i)&&k;if(typeof l!=="undefined"){j.timeInView=l
}m=new d(n,j);if(j.ambient){c.add(n)}return m},register:function(i){this.__addListeners(i);
if(!this.__noAnalytics(i)){new a(i)}this.sequences().push(i)},__noAnalytics:function(i){return !!i.container().getAttribute("data-"+b.prefix).match(/#.*analytics:false.*/i)
},__enhanceable:function(){if((!e.canPlay()&&!h.canPlay())||(AC.Environment.Browser.os==="iOS"&&parseInt(AC.Environment.Browser.osVersion,10)<6)||(AC.Environment.Feature.isHandheld()&&window.devicePixelRatio<2)){return false
}return true},__isNotClickToPlay:function(l,k){var i=this.__getDataAttribute(l);
var j=!!i.match(/[#|,]clicktoplay.*/i);if(this.__getCurrentDeviceOverrides(k).hasOwnProperty("clicktoplay")){return false
}return !j},__getDataAttributeAsObject:function(q){var r={};var n=q.split("#")[1];
var l=n.split(",");var k;var o;var p;var j;var m=l.length;for(k=0;k<m;k++){o=l[k].split("=");
p=o[0];j=o[1]||true;r[p]=j}return r},__isNotExcluded:function(l){var j=l.getAttribute("data-"+b.prefix);
var k=!!j.match(/#.*exclude:iphone.*/i);var i=!!j.match(/#.*exclude:ipadNonRetina.*/i);
if(k&&AC.Environment.Feature.isHandheld()){return false}if(i&&AC.Environment.Feature.isTablet()&&!AC.Environment.Feature.isRetina()){return false
}return true},__createSequencesFromDOM:function(){var i=this;if(!this.__enhanceable()){return false
}AC.Element.selectAll("[data-"+b.prefix+"]").forEach(function(j){if(i.__isNotExcluded(j)){var k=i.createSequence(j);
if(k){i.createUXController(k)}}})},__chooseConstructor:function(l,k){var i=this.__getDataAttribute(l);
var j;if(AC.Environment.Browser.os==="OS X"&&AC.Environment.Browser.osVersion.match("10.7")&&AC.Environment.Browser.name==="Safari"&&AC.Environment.Browser.version<6||AC.Environment.Browser.os==="OS X"&&AC.Environment.Browser.osVersion.match("10.6")&&AC.Environment.Browser.name==="Safari"&&AC.Environment.Browser.version<6){if(h.canPlay()){return h
}}if(!!i.match(/.*format:.*/)){j=i.match(/format:([^,]+)/);j=j[1];if(j==="flow"){if(h.canPlay()){return h
}}if(j==="video"){if(e.canPlay()){return e}}}if(h.canPlay()){if((AC.Environment.Browser.name==="Firefox")||(this.__isNotClickToPlay(l,k)&&AC.Environment.Browser.os==="iOS")){return h
}}if(e.canPlay()){return e}return null},__getDeviceOptions:function(r){var v=["iphone","ipadRetina","ipadNonRetina","desktop"];
var u=this.__getSequenceProperties(r);var t=v.length;var n=u.options.length;var w={};
var l;var s;var p;var o;var k;var q;var m;for(p=0;p<t;p++){l=v[p];k=new RegExp(".*"+l+".*");
q=new RegExp(l+":([^,]+)");for(o=0;o<n;o++){s=u.options[o];if(!!s.match(k)){m=s.match(q);
if(m){m=m[1];w[l]=w[l]||{};w[l][m]=true}}}}return w},__getDataAttribute:function(i){return i.getAttribute("data-"+b.prefix)
},__getCurrentDeviceOverrides:function(i){if(AC.Environment.Feature.isHandheld()&&AC.Environment.Browser.os==="iOS"&&i.hasOwnProperty("iphone")){return i.iphone
}return{}},__getSequenceProperties:function(m){var l=this.__getDataAttribute(m);
var j=l.slice(0,l.length).split(",");var i=j[0].split("#");var k=i[0];j[0]=i[1];
return{name:k,options:j}},__addListeners:function(i){if(typeof this.__boundNotificationCallback!=="function"){this.__boundNotificationCallback=this.__notificationCallback.bind(this)
}AC.NotificationCenter.subscribe(b.prefix+"-willPlay",this.__boundNotificationCallback,i);
AC.NotificationCenter.subscribe(b.prefix+"-play",this.__boundNotificationCallback,i);
AC.NotificationCenter.subscribe(b.prefix+"-loading",this.__boundNotificationCallback,i);
AC.NotificationCenter.subscribe(b.prefix+"-ended",this.__boundNotificationCallback,i);
AC.NotificationCenter.subscribe(b.prefix+"-stopped",this.__boundNotificationCallback,i)
},__notificationCallback:function(i){if(i.eventName==="willPlay"){if(this.currentSequence()===i.sequence){return
}if(this.currentSequence()&&(this.currentSequence()!==i.sequence)){this.currentSequence().stop()
}this.setCurrentSequence(i.sequence)}if(i.eventName==="play"){if(this.currentSequence()&&this.currentSequence()!==i.sequence){this.currentSequence().stop()
}this.setCurrentSequence(i.sequence)}if((i.eventName==="ended"||i.eventName==="stopped")&&this.currentSequence()===i.sequence){this.setCurrentSequence(null)
}}});return g.sharedInstance()});AC.define("specs/shared/DimensionsVideoAnimation",["require","animationSequencer/PlayerMonitor","screenSequence/director","shared/Detector"],function(c){if(!AC.Environment.Feature.supportsCanvas()){return
}var d=c("animationSequencer/PlayerMonitor");var e=AC.Element.select("#specs .specs-desktop .dimensions .callouts");
var f=AC.Element.select("#specs .specs-desktop .dimensions .callouts .height");
var b=c("screenSequence/director");var a=AC.Element.select("#screensequence-dimensions");
var g=c("shared/Detector");window.DEBUG=false;var h="ontouchstart" in window;return{init:function(){var k=b.sequenceForContainer(a);
window.director=b;var i=new d(k._sequence,[2,3.5],{autoInit:true});var l=AC.Element.select("#specs .specs-desktop .dimensions .callouts");
var o=AC.Element.select("#specs .specs-desktop .dimensions .callouts .height");
k.play();var n=0.1;var m=h?1.9:1.2;var p=h?3.8:3;var j=h?250:50;i.addTime(n,function(){AC.Element.addClassName(l,"show-height")
});i.addTime(m,function(){AC.Element.addClassName(l,"show-diameter")});i.addTime(p,function(){AC.Element.addClassName(l,"show-weight")
})}}});AC.define("specs/iphone/main",["require","shared/Detector","mobile/PageSetup","specs/shared/DimensionsVideoAnimation"],function(b){var d=b("shared/Detector"),a=b("mobile/PageSetup"),c=b("specs/shared/DimensionsVideoAnimation");
if(!d.isMobile()){return false}window.DEBUG=false;window.addEventListener("DOMContentLoaded",function(){c.init();
a.initialize(document.querySelector("#wrapper"))})});