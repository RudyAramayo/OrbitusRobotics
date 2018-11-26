Object.defineProperties=Object.defineProperties||function(){};(function(){var b=0;
var c=["ms","moz","webkit","o"];for(var a=0;a<c.length&&!window.requestAnimationFrame;
++a){window.requestAnimationFrame=window[c[a]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[c[a]+"CancelAnimationFrame"]||window[c[a]+"CancelRequestAnimationFrame"]
}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(h,e){var d=new Date().getTime();
var f=Math.max(0,16-(d-b));var g=window.setTimeout(function(){h(d+f)},f);b=d+f;
return g}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(d){clearTimeout(d)
}}}());(function(e,b){var g="",f,a,d;if(e.addEventListener){f="addEventListener"
}else{f="attachEvent";g="on"}d="onwheel" in b.createElement("div")?"wheel":b.onmousewheel!==undefined?"mousewheel":"DOMMouseScroll";
e.addWheelListener=function(i,j,h){c(i,d,j,h);if(d=="DOMMouseScroll"){c(i,"MozMousePixelScroll",j,h)
}};function c(j,i,k,h){j[f](g+i,d=="wheel"?k:function(l){!l&&(l=e.event);var m={originalEvent:l,target:l.target||l.srcElement,type:"wheel",deltaMode:l.type=="MozMousePixelScroll"?0:1,deltaX:0,delatZ:0,preventDefault:function(){l.preventDefault?l.preventDefault():l.returnValue=false
}};if(d=="mousewheel"){m.deltaY=-1/40*l.wheelDelta;l.wheelDeltaX&&(m.deltaX=-1/40*l.wheelDeltaX)
}else{m.deltaY=l.detail}return k(m)},h||false)}})(window,document);
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
if(typeof document!=="undefined"&&!("classList" in document.createElement("a"))){(function(j){if(!("HTMLElement" in j)&&!("Element" in j)){return
}var a="classList",f="prototype",m=(j.HTMLElement||j.Element)[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p
}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p
},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")
}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")
}return c.call(p,o)},d=function(t){var r=k.call(t.className),q=r?r.split(/\s+/):[],p=0,o=q.length;
for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){t.className=this.toString()
}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null
};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var t=arguments,r=0,p=t.length,q,o=false;
do{q=t[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()
}};e.remove=function(){var u=arguments,t=0,p=u.length,r,o=false;do{r=u[t]+"";var q=g(this,r);
if(q!==-1){this.splice(q,1);o=true}}while(++t<p);if(o){this._updateClassName()}};
e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";
if(r){this[r](p)}return !o};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};
try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;
b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)
}}}(self))}var _={defaults:function(c,b){var a={};b=b||{};for(var d in c){if(c.hasOwnProperty(d)){a[d]=(b[d]!=null)?b[d]:c[d]
}}return a}};AC.define("overview/shared/lib/utils",function(){});AC.define("overview/shared/event/Emitter",["require"],function(a){function c(){this._events=[]
}var b=c.prototype;b.on=function(e,f){var d=this._events;if(!d[e]){d[e]=[]}d[e].push(f)
};b.trigger=function(e,f){var d=this._events;var g=e.split(":")[0];f=f||{};f.type=e;
f.index=parseInt(e.split(":")[1],10);if(d[g]){d[g].forEach(function(h){h.call(this,f)
}.bind(this))}if(d[e]&&e.split(":").length>1){d[e].forEach(function(h){h.call(this,f)
}.bind(this))}};return c});AC.define("overview/shared/lib/analytics",["require"],function(a){function c(){this._trackingQueue=[];
this._interactionType=null;this._interactionStart=null}var b=c.prototype;b.flush=function(){var d;
while(d=this._trackingQueue.shift()){this.trackProps(d)}};b.initInteraction=function(d){this._interactionType=d;
this._interactionStart=+new Date()};b.queueInteraction=function(i,g,d){var f=+new Date();
var j=((f-this._interactionStart)/1000).toFixed(1);var e=this.getTrackingString(g,d);
var h={prop1:i,prop2:e,prop35:j};this._trackingQueue.push(h)};b.getTrackingString=function(e,d){return AC.Tracking.pageName()+" - "+e.toLowerCase()+" - section "+d
};b.trackProps=function(d){if(typeof d.prop2!=="string"){return}var e=this._currentSection;
if(e){d.prop3=this.getTrackingString(e.name,e.index)}AC.Tracking.trackClick(d,window,"o",d.prop3)
};b.setCurrentSection=function(d){this._currentSection=d};b.trackLink=function(f,e,d){if(arguments.length<3){return
}window.setTimeout(function(){AC.Tracking.trackClick({prop1:f,prop3:AC.Tracking.pageName()+" - "+e.toString().toLowerCase()+" - section "+d},this,"o",AC.Tracking.pageName()+" - "+e.toLowerCase()+" - section "+d)
},1000)};return c});AC.define("overview/shared/app/Core",["require","overview/shared/lib/utils","overview/shared/event/Emitter","overview/shared/lib/analytics"],function(a){a("overview/shared/lib/utils");
var c=a("overview/shared/event/Emitter");var d=a("overview/shared/lib/analytics");
function b(){this.analyzer=new d();c.call(this)}b.prototype=new c();b.prototype.addTimelineEvents=function(e){e.filter(function(f){return(!isNaN(f.pause))
}).forEach(function(g,f){if(g.events){g.events.forEach(function(h){this.sectionController.on(h.type+":"+f,h.action)
},this)}},this)},b.prototype.createFadeCurtain=function(){var e=document.createElement("div");
e.id="curtain";document.getElementById("wrapper").appendChild(e)};b.prototype.convertSectionsToClips=function(f){var e={};
e.clips=[];e.events={pauses:[]};f.forEach(function(g){if(!isNaN(g.pause)){e.events.pauses.push(g.pause)
}e.events.pauses.sort(function(i,h){return(i>h)?1:-1});e.clips=e.clips.concat(g.clips.map(function(h){return{start:g.time+h.start,end:g.time+h.end,media:h.media,pauses:h.pauses}
}))});return e};b.prototype.resizeFluidAreas=function(){var e=this.resizeContainers();
this.resizePlaceholders(e)};b.prototype.enterAnalytics=function(){this.analyzer.initInteraction();
this.analyzer.setCurrentSection(app.sectionController.currentSection);clearTimeout(this._analyzerTimeout);
this._analyzerTimeout=window.setTimeout(function(){this.analyzer.flush()}.bind(this),1000)
};b.prototype.exitAnalytics=function(g){clearTimeout(this._analyzerTimeout);var e=app.sectionController._pauseTimeline[g.from];
var f=app.sectionController.getSectionFromPausePoint(e).name;var h=app.uiController._lastInteractionType;
this.analyzer.queueInteraction(h,f,g.from)};b.prototype.setupFocusEvents=function(){var e=this.sectionController._pauses[0];
this.sectionController.on("pauseenter",function(i){var j=i.section||e;var f=document.querySelector(j.labelSelector);
var h=f.querySelector(".title");var g=f.querySelector(".button");h.tabIndex=-1;
if(g){g.tabIndex=0}h.focus()}.bind(this));this.sectionController.on("pauseexit",function(h){var i=h.section||e;
var f=document.querySelector(i.labelSelector);var g=f.querySelector(".button");
if(g){g.tabIndex=-1}})};b.prototype.addNextCarets=function(){var g=document.querySelector("#hero .caret");
if(!g){return}var f=[document.querySelector("#hero"),document.querySelector("#comingsoon"),document.querySelector("#measurements")];
var e=document.querySelectorAll("section",this.panelcontainer);e=Array.prototype.slice.call(e);
e=e.filter(function(h){return f.indexOf(h)===-1});e.forEach(function(k){var m=g.cloneNode(true);
var l=k.querySelector(".copy");var h=m.querySelector(".cta");var i=m.querySelector(".button");
var j=function(n){if(n.type==="click"||n.type==="keydown"&&n.keyCode===13){this.sectionController.next()
}}.bind(this);i.id="";i.tabIndex=-1;i.classList.add("next");h.innerHTML=h.getAttribute("data-next");
m.addEventListener("click",j);m.addEventListener("keydown",j);if(document.getElementById("globalheader")){l.appendChild(m)
}}.bind(this))};return b});AC.define("overview/shared/controller/Clip",["require","overview/shared/event/Emitter"],function(b){var d=b("overview/shared/event/Emitter");
function a(f,e){d.call(this);this._mediaTimer=e;this._clips=[].concat(f);this._update=this._update.bind(this);
this._prevTime=this._mediaTimer.currentTime;this._duration=0;this._clips.forEach(function(g){g.media.el.classList.add("clip");
if(!g.end){g.end=g.start+g.media.duration;if(g.pauses){g.pauses.forEach(function(h){g.end+=h.to-h.from
})}}this._duration=Math.max(this._duration,g.end)},this)}var c=a.prototype=new d();
c.constructor=a;c._getActiveClips=function(e){return this._clips.filter(function(f){return(f.media!==this._mediaTimer&&f.start<=e&&e<=f.end)
},this)},c._timeToClipTime=function(f){var e=0;if(f.pauses){f.pauses.forEach(function(g){if(this._mediaTimer.currentTime>=g.from&&this._mediaTimer.currentTime>=g.to){e+=g.to-g.from
}else{if(this._mediaTimer.currentTime>=g.from&&this._mediaTimer.currentTime<g.to){e+=this._mediaTimer.currentTime-g.from
}}}.bind(this))}return this._mediaTimer.currentTime-f.start-e};c._processTransitoryClips=function(e,f){var g=this._getActiveClips(e),h=this._getActiveClips(f);
g=g.filter(function(i){return(h.indexOf(i)===-1)});g.forEach(function(i){if(i.media.el){i.media.el.classList.remove("visible")
}i.media.currentTime=this._timeToClipTime(i)},this);h.forEach(function(i){if(i.media.el){i.media.el.classList.add("visible")
}i.media.currentTime=this._timeToClipTime(i)},this)};c._update=function(e,h){var g,f;
if(this.currentTime<0){this.trigger("start");this.pause();this._mediaTimer.currentTime=0
}this.trigger("timeupdate");if(this._mediaTimer.update){this._mediaTimer.update()
}if(this.currentTime>=this._duration||h){this.pause();this.trigger("ended");this._mediaTimer.currentTime=this._duration
}this._processTransitoryClips(this._prevTime,this.currentTime);if(!this.paused){this._animationID=window.requestAnimationFrame(this._update)
}this._prevTime=this.currentTime};c.play=function(){var e=true;if(this.paused){if(this.currentTime<0.5&&this.playbackRate<0){this.currentTime=0;
this.trigger("play");return}else{if(this.currentTime>this.duration-0.5&&this.playbackRate>0){this.currentTime=this.duration;
this.trigger("play");return}}e=this._mediaTimer.play();this.trigger("play");this._animationID=window.requestAnimationFrame(this._update)
}return e};c.pause=function(){if(!this.paused){this._mediaTimer.pause();this.trigger("pause");
window.cancelAnimationFrame(this._animationID)}return this};Object.defineProperties(a.prototype,{currentTime:{enumerable:true,configurable:false,get:function(){return this._mediaTimer.currentTime
},set:function(e){this._mediaTimer.currentTime=e;this._update()}},playbackRate:{get:function(){return this._mediaTimer.playbackRate
},set:function(e){this._mediaTimer.playbackRate=e}},paused:{get:function(){return this._mediaTimer.paused
},set:function(){}},duration:{get:function(){return this._duration},set:function(){}}});
return a});AC.define("flow/diff/Loader",["require","assetLoader/AssetLoader"],function(b){var c,a=b("assetLoader/AssetLoader");
function d(g,e){var f,j,h=g.match(/#/g).length;this.imagesUrls=[];if(!e){throw new Error("0 images provided")
}for(f=1;f<=e;f++){j="0000"+f;j=j.substring(j.length-h);this.imagesUrls.push(g.replace(/#{2,}/g,j))
}}c=d.prototype;c.load=function(){return new a(this.imagesUrls).load()};return d
});AC.define("flow/diff/Render",["require","flow/diff/Loader","defer/Deferred"],function(d){var e,c=d("flow/diff/Loader"),b=d("defer/Deferred");
function a(g,f){this.flowData=g;this.flowData.imageUrlPattern=f}e=a.prototype;e._storeImages=function(f){if(DEBUG){console.log("loaded images")
}this.images=f;this._blocksPerFullDiff=(f[0].width/this.flowData.blockSize)*(f[0].height/this.flowData.blockSize);
return(new b()).resolve()};e._applyDiffRange=function(h,o){var m=o.block,i=o.length,g=h.canvas.width/this.flowData.blockSize,k=Math.floor(m/this._blocksPerFullDiff),u=this.images[k].width,f=m%this._blocksPerFullDiff,t=u/this.flowData.blockSize,r=(f%t)*this.flowData.blockSize,q=Math.floor(f/(t||1))*this.flowData.blockSize,n=(o.location%g)*this.flowData.blockSize,l=Math.floor(o.location/g)*this.flowData.blockSize,j,p;
while(i){j=Math.min((i*this.flowData.blockSize),h.canvas.width-n,u-r);p=j/this.flowData.blockSize;
if(DEBUG){if(typeof this.renderDebugger!=="undefined"&&this._frameToRender>0){this.renderDebugger.registerComparison(this._frameToRender,{image:k,block:m,x:r,y:q})
}}h.drawImage(this.images[k],r,q,j,this.flowData.blockSize,n,l,j,this.flowData.blockSize);
i-=p;if(i){if((r+=j)>=u){r=0;q+=this.flowData.blockSize}if((f+=p)>=this._blocksPerFullDiff){f=0;
r=0;q=0;k+=1;if(k===this.flowData.imagesRequired-1){u=this.images[k].width}}if((n+=j)>=h.canvas.width){n=0;
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
AC.define("overview/shared/MediaTimer",[],function(){function b(){this._currentTimeMS=0;
this._playbackRate=1;this.playing=false;this._paused=true;this._resetStartTime()
}var a=b.prototype;a._updateCurrentTime=function(){var d,c=+new Date();if(this.paused){d=0
}else{d=(c-this._startTime)}this._currentTimeMS+=(d*this._playbackRate);this._startTime=c
};a._resetStartTime=function(){this._startTime=+new Date()},a.play=function(){this._resetStartTime();
this.playing=true;this._paused=false;return this};a.pause=function(){this._updateCurrentTime();
this.playing=false;this._paused=true;return this};Object.defineProperties(a,{currentTime:{get:function(){this._updateCurrentTime();
return this._currentTimeMS/1000},set:function(c){this._resetStartTime();this._currentTimeMS=c*1000
}},playbackRate:{get:function(){return this._playbackRate},set:function(c){this._resetStartTime();
this._playbackRate=c}},paused:{get:function(){return this._paused},set:function(){}}});
return b});AC.define("overview/shared/media/TimedVideo",["require","overview/shared/MediaTimer","defer/Deferred"],function(c){var e=c("overview/shared/MediaTimer"),b=c("defer/Deferred");
function a(i,f,h){this._deferred=new b();this._paused=true;this._playbackRate=1;
this._backwardsTimer=new e();this._video=document.createElement("video");if(h){this._video.poster=h
}var g=function(j){this._video.removeEventListener("error",g);this._video.parentNode.removeChild(this._video);
this._deferred.reject(j)}.bind(this);this._video.addEventListener("error",g);this._video.addEventListener("canplay",function(j){this._video.removeEventListener("error",g);
this.canplay=true;this._deferred.resolve(j)}.bind(this));this._video.src=f;i.appendChild(this._video)
}var d=a.prototype;d.promise=function(){return this._deferred.promise()};d.update=function(){if(this.playbackRate<0){this._video.currentTime=this._backwardsTimer.currentTime
}};d.play=function(){if(this.paused){if(this.playbackRate>=0){this._video.playbackRate=this.playbackRate;
this._video.play()}else{this._backwardsTimer.playbackRate=this.playbackRate;this._backwardsTimer.play()
}this._paused=false}return true};d.pause=function(){if(!this.paused){this._video.pause();
this._backwardsTimer.pause();this.currentTime=this.currentTime;this._paused=true
}};Object.defineProperties(d,{currentTime:{get:function(){if(!this.paused&&this.playbackRate>=0){return this._video.currentTime
}else{return this._backwardsTimer.currentTime}},set:function(f){this._video.currentTime=f;
this._backwardsTimer.currentTime=f}},playbackRate:{get:function(){return this._playbackRate
},set:function(f){this._playbackRate=f}},paused:{get:function(){return this._paused
},set:function(){}}});return a});AC.define("overview/shared/media/BiVideo",["require","defer/Deferred","overview/shared/MediaTimer"],function(b){var a=b("defer/Deferred"),e=b("overview/shared/MediaTimer");
function d(v,k,l,p,i){var g=new a(),h=new a(),t,j,u=0,o,f;i=i||0;this._paused=true;
this._playbackRate=1;this._mediaTimer=new e();this._forwardsVideo=document.createElement("video");
if(p){this._forwardsVideo.poster=p}if(l){this._backwardsVideo=document.createElement("video")
}this._canPlayBackwards=false;this._canPlayForwards=false;var r=function(w){f=+new Date();
document.removeEventListener("touchstart",r);this._forwardsVideo.addEventListener("canplaythrough",function(){document.addEventListener("touchstart",n)
});this._forwardsVideo.load();window.app.uiController.next();w.preventDefault()
}.bind(this);var n=function(w){document.removeEventListener("touchstart",n);var x=setInterval(function(){var y;
try{y=this._forwardsVideo.seekable.end(0)}catch(z){}if(y===this._forwardsVideo.duration&&this.paused){clearInterval(x);
this._forwardsVideo.addEventListener("seeked",function(A){this._forwardsVideo.style.opacity=1
}.bind(this));this._forwardsVideo.currentTime=i||this.currentTime;this._canPlayForwards=true;
app.uiController.enableInput()}}.bind(this),100);w.preventDefault()}.bind(this);
var m=function(w){this._forwardsVideo.removeEventListener("progress",m);g.resolve(w)
}.bind(this);var q=function(w){this._backwardsVideo.removeEventListener("progress",q);
h.resolve(w)}.bind(this);this._forwardsVideo.style.height="100%";this._forwardsVideo.style.width="100%";
this._forwardsVideo.style.opacity=0;this._forwardsVideo.controls=false;if(l){this._backwardsVideo.style.height="100%";
this._backwardsVideo.style.width="100%";this._backwardsVideo.style.opacity=0;this._backwardsVideo.controls=false;
this._backwardsVideo.addEventListener("progress",q);this._backwardsVideo.src=l;
v.appendChild(this._backwardsVideo)}else{h=true}this._forwardsVideo.addEventListener("progress",m);
this._forwardsVideo.src=k;v.appendChild(this._forwardsVideo);this._promise=a.join(g,h).then(function(){document.addEventListener("touchstart",r)
}.bind(this))}var c=d.prototype;c.promise=function(){return this._promise};c.play=function(){var f=false;
if(this.paused){if(this.playbackRate>=0){if(this._canPlayForwards){this._forwardsVideo.play();
this._forwardsVideo.style.opacity="1";if(this._backwardsVideo){this._backwardsVideo.style.opacity="0"
}this._paused=false;f=true}else{this._mediaTimer.play();this._paused=false;f=true
}}else{if(this._canPlayBackwards){this._backwardsVideo.currentTime=this._backwardsVideo.duration-this._mediaTimer.currentTime;
this._backwardsVideo.play();setTimeout(function(){this._forwardsVideo.style.opacity="0";
this._backwardsVideo.style.opacity="1"}.bind(this),300);this._paused=false;f=true
}else{if(this._backwardsVideo){this._backwardsVideo.play();this._backwardsVideo.pause();
if(this._backwardsVideo.buffered.end(0)===this._backwardsVideo.duration){this._canPlayBackwards=true;
this._backwardsVideo.currentTime=this._backwardsVideo.duration-this._mediaTimer.currentTime
}}}}}return f};c.pause=function(){if(this._playbackRate>=0){if(this._canPlayForwards){this._forwardsVideo.pause();
this._mediaTimer.currentTime=this._forwardsVideo.currentTime;if(this._canPlayBackwards){this._backwardsVideo.currentTime=this._backwardsVideo.duration-this._mediaTimer.currentTime
}}}else{if(this._canPlayBackwards){this._backwardsVideo.pause();this._mediaTimer.currentTime=this._backwardsVideo.duration-this._backwardsVideo.currentTime;
this._forwardsVideo.currentTime=this._mediaTimer.currentTime}}this._mediaTimer.pause();
this._paused=true};Object.defineProperties(c,{currentTime:{get:function(){if(this._playbackRate>=0&&this._canPlayForwards){return this._forwardsVideo.currentTime
}else{if(this._playbackRate<0&&this._canPlayBackwards){return this._backwardsVideo.duration-this._backwardsVideo.currentTime
}else{return this._mediaTimer.currentTime}}},set:function(g){if(this._paused){this._mediaTimer.currentTime=g;
try{this._forwardsVideo.currentTime=g;this._forwardsVideo.play();this._forwardsVideo.pause()
}catch(f){}if(this._backwardsVideo){try{this._backwardsVideo.currentTime=this._backwardsVideo.duration-g
}catch(f){}}}}},playbackRate:{get:function(){return this._playbackRate},set:function(g){if(this._paused){var f=this.currentTime;
this._playbackRate=g;this.currentTime=f}}},paused:{get:function(){return this._paused
},set:function(){}}});return d});AC.define("overview/shared/ClipContainer",["require","overview/shared/controller/Clip","flow/playerFactory","overview/shared/media/TimedVideo","overview/shared/media/BiVideo","overview/shared/MediaTimer","defer/Deferred","assetLoader/AssetLoader"],function(b){var a=b("overview/shared/controller/Clip"),e=b("flow/playerFactory"),d=b("overview/shared/media/TimedVideo"),g=b("overview/shared/media/BiVideo"),h=b("overview/shared/MediaTimer"),c=b("defer/Deferred"),f=b("assetLoader/AssetLoader");
function j(m){var k=document.getElementById("stillcontainer");var l;for(var n in m){if(!k.querySelector(".still_"+n)){l=document.createElement("img");
l.src=m[n];l.alt="";l.className="still still_"+n;k.appendChild(l)}}}function i(m,l,k){this.containerElement=m;
this.config=l;this.clips=k}i.prototype.constructor=i;i.prototype.initFlow=function(l){var w=new c();
var k;var v="json";var q="jpg";var o=[l.flowKeyFrame,l.flowEndFrame];var m=l.diffDir;
var r=l.flowPattern||"flow_###.";var u=m+r+q;var n=l.manifestFileName||"flow_manifest.";
var p=/^https?:\/\/[^\/]+\//i;var t=l.manifest.replace(p,"/")+n+v;if(l.stills){j(l.stills,l.stillsDir)
}k=e(this.containerElement,o,u,t,{superframes:false,keyframeCache:false,benchmark:false});
k.frameRate=l.fps;k.loop=false;k.on("canplaythrough",function(x){w.resolve(x)});
this.mediaElement=k;return w.promise()};i.prototype.initVideo=function(k){if(k.stills){j(k.stills)
}this.mediaElement=new d(this.containerElement,k.file,k.poster);return this.mediaElement.promise()
};i.prototype.initBiVideo=function(k){if(k.stills){j(k.stills)}this.mediaElement=new g(this.containerElement,k.file,k.backwards,k.poster,k.startTime);
return this.mediaElement.promise()};i.prototype.loadExperience=function(k){switch(k.type){case"bivideo":return this.initBiVideo(k);
case"video":return this.initVideo(k);case"flow":return this.initFlow(k);return new c().reject()
}};i.prototype.load=function(){var k=new c(),l=this.config;this.loadExperience(l[0]).then(function(){k.resolve()
},function(){this.loadExperience(l[1]).then(function(){k.resolve()})}.bind(this));
return k.promise().then(function(){this.clipController=new a(this.clips,this.mediaElement)
}.bind(this))};i.prototype.play=function(){this.clipController.play()};return i
});
/*! MIT License
 *
 * KeySpline - use bezier curve for transition easing function
 * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
AC.define("overview/shared/vendor/KeySpline",["require"],function(a){function b(l,i,k,g){this.get=function(m){if(l==i&&k==g){return m
}return d(h(m),i,g)};function f(m,n){return 1-3*n+3*m}function e(m,n){return 3*n-6*m
}function c(m){return 3*m}function d(o,m,n){return((f(m,n)*o+e(m,n))*o+c(m))*o}function j(o,m,n){return 3*f(m,n)*o*o+2*e(m,n)*o+c(m)
}function h(p){var n=p;for(var o=0;o<4;++o){var q=j(n,l,k);if(q===0){return n}var m=d(n,l,k)-p;
n-=m/q}return n}}return b});AC.define("overview/shared/clip/Tween",["require","overview/shared/vendor/KeySpline"],function(f){var h=f("overview/shared/vendor/KeySpline");
var e=["transform","webkitTransform","MozTransform","msTransform","oTransform"];
var g=AC.EasingFunctions;var c=["#measurements .width .line"];var b;(function d(){var i=document.createElement("div");
e.some(function(j){if(j in i.style){b=j;return true}})}());function a(i,l,k){var j=document.querySelector(i);
if(j&&j.nodeType&&j.nodeType===1){this._el=j}else{this._el=i}this.duration=l;this.props=k||[];
this.props.forEach(function(n){var m;if(n.easing==="keyspline"){m=n.keyspline;n.keyspline=new h(m[0],m[1],m[2],m[3])
}});this.beginning=0}a.prototype={tween:function(l){var k=this.duration,j=this.el,i=b;
if(this.props.length<1){return}this.props.forEach(function(u){var r,m=u.units,p=u.axis,o=u.property,t,q,n;
if(u.keyspline){r=u.keyspline.get(l/k)*(u.to-u.from)}else{r=g[u.easing||"linear"](l,u.from,(u.to-u.from),k)
}if(o==="translate"){q=i;if(p==="x"){n="translate3d("+r+m+", 0, 0)"}else{if(p==="y"){n="translate3d(0, "+r+m+", 0)"
}else{if(p==="z"){n="translate3d(0, 0, "+r+m+")"}}}}else{if(o==="translate2d"){q=i;
n="translate"+p.toUpperCase()+"("+r+m+")"}else{if(o==="scale"){q=i;if(p==="x"){n="scaleX("+r+")"
}else{if(p==="y"){n="scaleY("+r+")"}else{if(p==="z"){n="scaleZ("+r+")"}else{n="scale("+r+")"
}}}}else{q=o;n=r+(u.units||"")}}}j.style[q]=n})}};Object.defineProperties(a.prototype,{currentTime:{enumerable:true,configurable:false,get:function(){return this._currentTime
},set:function(i){this._currentTime=Math.max(0,Math.min(i,this.duration));this.tween(this._currentTime)
}},el:{enumerable:true,configurable:false,get:function(){if(this._el&&this._el.nodeType&&this._el.nodeType===1){return this._el
}else{if(!document.querySelector(this._el)){}return this._el=document.querySelector(this._el)
}}}});return a});AC.define("overview/shared/controller/Section",["require","overview/shared/MediaTimer","overview/shared/event/Emitter","overview/shared/clip/Tween"],function(c){var g=c("overview/shared/MediaTimer"),i=c("overview/shared/event/Emitter"),h=c("overview/shared/clip/Tween");
var e=500;var b=AC.Environment.Browser.name==="IE";var f=AC.Environment.Feature.cssPropertyAvailable("transition");
function a(j,k,l){i.call(this);if(!k||!k){throw new Error("SectionController: timeline is missing or incomplete.")
}this._clipController=j;this._pauseTimeline=k;this._sections=l;this._currentSectionIndex=0;
this._currentPauseIndex=0;this._seekable=false;this._update=this._update.bind(this);
this._pauses=this._sections.filter(function(m){return"pause" in m});this.fadeOutAnim=new h("#curtain",0.5,[{property:"opacity",from:0,to:1}]);
this.fadeInAnim=new h("#curtain",0.5,[{property:"opacity",from:1,to:0}]);this._curtain=document.getElementById("curtain");
this.on("pauseenter:0",function(){this._seekable=true}.bind(this));this._clipController.on("timeupdate",this._update);
this._clipController.on("ended",function(){this._currentPauseIndex=this._pauseTimeline.length-1;
this._enableSections(null,true)}.bind(this));this._clipController.on("play",this._derivePauseIndex.bind(this))
}var d=a.prototype=new i();d.constructor=a;d._update=function(m){var p=this.currentTime;
var l=this._clipController.playbackRate>0;var q=!l;var o=!this.paused||p===0||p===this.duration;
var j=l&&p>=this._pauseTimeline[this._currentPauseIndex+1];var k=q&&p<=this._pauseTimeline[this._currentPauseIndex-1];
var n=o&&(j||k);if(n){this._clipController.pause();this._currentPauseIndex+=(l)?1:-1;
p=this._pauseTimeline[this._currentPauseIndex];this._clipController.currentTime=p
}this._enableSections(p);if(n){this.trigger("pauseenter:"+this._currentPauseIndex,{from:this._currentPauseIndex+((l)?-1:1),to:this._currentPauseIndex,section:this._pauses[this._currentPauseIndex]});
this._frontCurrentPauseSection()}};d._derivePauseIndex=function(k){var j=0;while(this._pauseTimeline[j]<k){this._currentPauseIndex=j++
}return this._currentPauseIndex};d._deriveSectionIndex=function(l){var j,k;if(l===this.duration){return this._sections.length-1
}if(l===0){return 0}if(this._clipController.playbackRate>0){j=0;while(j<this._sections.length&&this._sections[j].time<l){k=++j
}}else{j=this._sections.length-1;while(j>-1&&this._sections[j].time>l){k=--j}}return k
};d._enableSections=function(j,m){var j=j||this.currentTime;var k=m?(this._sections.length-1):this._deriveSectionIndex(j);
var l=document.querySelectorAll("#panelcontainer > section");if(this._prevSectionIndex===k){return
}this._currentSectionIndex=k;[].forEach.call(l,function(q,n){var p=k===n;var o=k>=n-1&&k<=n+1;
q.classList[o?"add":"remove"]("show")});this._prevSectionIndex=k};d._frontCurrentPauseSection=function(){var l=document.querySelectorAll("#panelcontainer > section");
var k=this._pauses[this._currentPauseIndex];var j=document.querySelector(k.labelSelector);
[].forEach.call(l,function(m){m.classList.remove("front")});j.classList.add("front")
};d._fadeOut=function(){if(f){this._curtain.classList.add("fadeOut")}else{this._runTimeFade(true)
}};d._fadeIn=function(){if(f){this._curtain.classList.remove("fadeOut")}else{this._runTimeFade(false)
}};d._runTimeFade=function(l){var q,k,p;var n=l?this.fadeOutAnim:this.fadeInAnim;
var j=this._curtain;var o=n.duration;j.style.zIndex=10000;function m(r){if(!q){q=r
}k=(r-q)/1000;p=(k/o)*o;n.tween(p);if(k<o){window.requestAnimationFrame(m)}else{if(!l){j.style.zIndex=30
}}}window.requestAnimationFrame(m)};d._makeJump=function(k,l,j){return function(){var m=this._pauseTimeline.indexOf(k);
this._clipController.pause();this.trigger("seek",j);setTimeout(function(){this._fadeIn();
this._currentPauseIndex=m;this.currentTime=k;this._enableSections(k);this.trigger("pauseenter:"+m,{from:this._currentPauseIndex,to:m,section:this._pauses[m]});
this._frontCurrentPauseSection();this._seekable=true;if(typeof l==="function"){cb.call()
}}.bind(this),e)}.bind(this)};d._makeEndJump=function(k,m,j,l){return function(){var n=this._pauseTimeline.indexOf(k);
var o=this._clipController._mediaTimer._video;l=document.getElementById("wrapper");
l.style.position="absolute";l.style.top="0px";this._clipController.pause();if(b){o.play();
o.pause();o.play();o.pause()}setTimeout(function(){l.style.position="relative";
this.trigger("seek",j);this._currentPauseIndex=n;this.currentTime=k;this._enableSections();
if(n!==-1){this.trigger("pauseenter:"+n,{from:this._currentPauseIndex,to:n,section:this._pauses[n]})
}this._seekable=true;document.documentElement.classList.add("overflow");this._fadeIn();
this._frontCurrentPauseSection()}.bind(this),e)}.bind(this)};d.seek=function(l,u){var r=this._pauseTimeline.indexOf(l);
var j=(l>this.currentTime)?1:-1;var v=Math.abs(this._currentPauseIndex-r)==1;var p=this._currentPauseIndex==this._pauseTimeline.length-1;
var q=this.currentTime===this.duration;var k=p||q;var t=k?this._pauseTimeline.length-1:this._currentPauseIndex;
var n={from:t,to:r};var m=this[k?"_makeEndJump":"_makeJump"].call(this,l,u,n);var o;
if(this._currentPauseIndex==r){return}if(!this._seekable){return}document.getElementById("curtain").style.display="block";
if(document.body.scrollTop>0){document.body.scrollTop=0}this.trigger("pauseexit:"+t,{from:t,to:r});
if(!k&&this._clipController.paused){this._clipController.playbackRate=j;o=this._clipController.play()
}if(k||!v||!o){this._fadeOut();this._seekable=false;window.setTimeout(m,e)}};d._triggerPauseExit=function(){var k=this._currentPauseIndex;
var j=this._clipController.playbackRate>0?k+1:k-1;if(this._currentPauseIndex>0||this._clipController.playbackRate>0){this.trigger("pauseexit:"+k,{from:k,to:j})
}};d.next=function(){var j=this._pauseTimeline[this._currentPauseIndex+1];if(this._currentPauseIndex<this._pauseTimeline.length-1){this.seek(j)
}};d.previous=function(){var j=this._pauseTimeline[this._currentPauseIndex-1];if(this._currentPauseIndex>0){this.seek(j)
}};d.getSectionFromPausePoint=function(j){var l=app.sectionController._sections;
for(var k in l){if(l[k].pause===j){return l[k]}}};Object.defineProperties(a.prototype,{currentSection:{enumerable:true,configurable:false,get:function(){return this._sections[this._currentSectionIndex]
}},currentTime:{enumerable:true,configurable:false,get:function(){return this._clipController.currentTime
},set:function(j){this._clipController.currentTime=j}},paused:{get:function(){return this._clipController.paused
},set:function(){}},duration:{get:function(){return this._clipController.duration
},set:function(){}}});return a});AC.define("overview/shared/controller/Ui",[],function(){var d=false;
var c=0.2;var a=250;function b(e){if(!e){throw new Error("UIController: sectionController required for instantiation.")
}this._sectionController=e;this._pauseTimeline=e._pauseTimeline;this._takeoverThreshold=c;
this._bufferDistance=0;this._inputControllers=[];this._lastInteractionType=null;
this._acceptingInput=true;this._sectionController.on("pauseenter",function(){window.setTimeout(function(){this._acceptingInput=true
}.bind(this),a)}.bind(this));this.update=this.update.bind(this)}b.prototype={getPauseDiff:function(){var e=Infinity,f=this._sectionController.currentTime;
this._pauseTimeline.forEach(function(g){e=Math.min(e,Math.abs(f-g))});return e},update:function(f){var e=f>0?1:-1;
if(!this._sectionController.paused){return}this._bufferDistance+=f;if(this.getPauseDiff()>this._takeoverThreshold){if(f>0){this._sectionController.next()
}else{this._sectionController.previous()}}else{if(this._sectionController.currentTime+f>0){this._sectionController.currentTime+=f
}else{this._sectionController.currentTime=0}}},next:function(){if(this._sectionController.paused&&this._acceptingInput){this._sectionController.next();
this._acceptingInput=false}},previous:function(){if(this._sectionController.paused&&this._acceptingInput){this._sectionController.previous();
this._acceptingInput=false}},add:function(e){if(this._inputControllers.indexOf(e)===-1){this._inputControllers.push(e)
}},disableInput:function(){this._inputControllers.forEach(function(e){e.disable()
})},enableInput:function(){this._inputControllers.forEach(function(e){e.enable()
})}};return b});AC.define("overview/shared/controller/Nav",["require"],function(a){function b(d,e){var c=this._getNavigatableSections(e);
this._sectionNav=document.getElementById("sectionNav");this._navContainer=this._sectionNav.querySelector(".list");
this._navRange=this._sectionNav.querySelector(".range");this._sectionController=d;
this._handleClick=this._handleClick.bind(this);this._handlePauseEnter=this._handlePauseEnter.bind(this);
this._handlePauseExit=this._handlePauseExit.bind(this);this._handleTouchMove=this._handleTouchMove.bind(this);
this._handleTouchEnd=this._handleTouchEnd.bind(this);this._handleTouchStart=this._handleTouchStart.bind(this);
this._handleMouseOver=this._handleMouseOver.bind(this);this._handleMouseOut=this._handleMouseOut.bind(this);
this._handleChange=this._handleChange.bind(this);this._handleKeyDown=this._handleKeyDown.bind(this);
this._buildNavigation(c);this._sectionController.on("pauseexit",this._handlePauseExit);
this._sectionController.on("pauseenter",this._handlePauseEnter);this._sectionNav.addEventListener("touchstart",this._handleTouchStart,true);
this._sectionNav.addEventListener("keydown",this._handleKeyDown);if(this._navRange){if(AC.Environment.Browser.name==="IE"){this._navRange.style.display="none"
}this._navRange.addEventListener("change",this._handleChange);this._navRange.addEventListener("focus",function(){var f=this._sectionNav.querySelector(".active");
if(f){this._highlightNavItem(f)}}.bind(this));this._navRange.addEventListener("blur",function(){var f=this._sectionNav.querySelector(".hover");
if(f){this._unhighlightNavItem(f)}}.bind(this))}}b.prototype={constructor:b,_getNavigatableSections:function(c){if(!this._navigatableSections){this._navigatableSections=c.filter(function(d){return !isNaN(d.pause)&&d.labelSelector
}).map(function(e,d){e.index=d;return e})}return this._navigatableSections},_handleKeyDown:function(d){d.stopPropagation();
var c,f;if(d.keyCode!==13){return}c=this._navContainer.querySelector(".hover");
if(c){f=parseFloat(c.getAttribute("data-seek-time"))}if(!isNaN(f)){this._sectionController.seek(f)
}},_handlePauseEnter:function(c){},_handleClick:function(d){var c=d.target||d.srcElement;
var f;while(!c.getAttribute("data-seek-time")){c=c.parentNode}f=parseFloat(c.getAttribute("data-seek-time"));
if(!isNaN(f)){this._sectionController.seek(f)}window.app.uiController._lastInteractionType="bubble-click"
},_handleChange:function(f){var c=this._navContainer.querySelector(".hover");var d=this._getNavigatableSections().length-1-this._navRange.value;
var h=this._navContainer.querySelector('[data-seek-index="'+d+'"]');var g=parseFloat(h.getAttribute("data-seek-time"));
if(c){this._unhighlightNavItem(c)}this._highlightNavItem(h);if(this._navRangeTimeout){clearTimeout(this._navRangeTimeout)
}this._navRangeTimeout=setTimeout(function(){window.app.uiController._lastInteractionType="bubble-click";
this._sectionController.seek(g)}.bind(this),2000)},_updateRange:function(c){if(!this._navRange){return
}this._navRange.value=this._getNavigatableSections().length-1-c},_handlePauseExit:function(d){var f=d.to;
var e=this._navContainer.querySelectorAll(".active");var c=this._navContainer.querySelector('[data-seek-index="'+f+'"]');
this._updateRange(f);[].forEach.call(e,function(g){g.classList.remove("active");
g.classList.remove("hover")});if(c){window.setTimeout(function(){c.classList.add("active")
}.bind(this),250)}},_buildNavigation:function(c){var f=document.createDocumentFragment();
var d=document.getElementById("panelcontainer");var e="touchstart" in window;c.forEach(function(k){var i;
var g=document.createElement("li");var h=d.querySelector(k.labelSelector);var j=h.getAttribute("data-section-label");
if(h){g.setAttribute("data-seek-index",k.index);g.setAttribute("data-seek-time",k.pause);
g.setAttribute("title",j);g.innerHTML+='<span class="label">'+j+"</span>";g.innerHTML+='<span class="dot" data-nav-item="true"><span class="inner" data-nav-item="true"></span></span>';
g.addEventListener((e)?"touchstart":"click",this._handleClick);i=g.querySelector(".dot");
i.addEventListener("mouseenter",this._handleMouseOver);i.addEventListener("mouseleave",this._handleMouseOut);
f.appendChild(g)}}.bind(this));this._navContainer.appendChild(f)},_handleMouseOver:function(f){var d=f.target||f.srcElement;
if(!d.classList.contains("dot")){return}var c=d.parentNode;this._highlightNavItem(c)
},_highlightNavItem:function(c){c.classList.add("hover")},_unhighlightNavItem:function(c){c.classList.remove("hover")
},_handleMouseOut:function(f){var d=f.target||f.srcElement;if(!d.classList.contains("dot")){return
}var c=d.parentNode;this._unhighlightNavItem(c)},_calcSection:function(c){this._lastSectionCalc=Math.round(((c-this._navRect.top)/this._navRect.height)*this._navCount);
return this._lastSectionCalc},_handleTouchStart:function(f){var c,d=f.target||f.srcElement;
this._navRect=document.getElementById("sectionNav").getBoundingClientRect();this._navCount=document.querySelectorAll("#sectionNav li").length;
this._updateHover(this._calcSection(f.pageY));document.body.addEventListener("touchend",this._handleTouchEnd);
document.body.addEventListener("touchmove",this._handleTouchMove);f.preventDefault();
return false},_updateHover:function(c){var d=document.getElementById("sectionNav");
[].slice.call(d.querySelectorAll("li.hover")).forEach(function(f){f.querySelector(".label").style.display="none";
f.classList.remove("hover")});var e=d.querySelector('li[data-seek-index="'+c+'"]');
if(e){e.querySelector(".label").style.display="block";e.classList.add("hover")}},_handleTouchMove:function(d){var c;
if(!this._throttled){this._throttled=true;c=this._calcSection(d.pageY);this._updateHover(c);
window.clearTimeout(this._throttledTimeout);this._throttledTimeout=window.setTimeout(function(){this._throttled=false
}.bind(this),50)}d.preventDefault();d.stopPropagation();return false},_handleTouchEnd:function(d){var c;
document.body.removeEventListener("touchend",this._handleTouchEnd);document.body.removeEventListener("touchmove",this._handleTouchMove);
c=document.getElementById("sectionNav").querySelector('li[data-seek-index="'+this._lastSectionCalc+'"]');
app.uiController._lastInteractionType="bubble-click";if(c){this._sectionController.seek(parseFloat(c.getAttribute("data-seek-time")));
c.classList.remove("hover")}d.preventDefault();d.stopPropagation();return false
}};return b});AC.define("overview/desktop/input/Touch",[],function(){function a(c,b){this._uiController=c;
this._uiController.add(this);this._pixelToMediaSpeedRatio=0.003;this._swipeThreshold=30;
this._onEnd=this._onEnd.bind(this);this._onMove=this._onMove.bind(this);this._moveBuffer=0;
this._touchStartOnPlaceholder=false;this._controlCenterBuffer=50;this._controlCenterTouch=false;
this.enabled=false;document.addEventListener("touchend",this._onEnd);document.addEventListener("touchmove",this._onMove)
}a.prototype={_onEnd:function(c){var b;if(this._controlCenterTouch){this._controlCenterTouch=false;
return}if(!this.enabled){return}this._active=false;window.clearTimeout(this._timeout);
this._uiController._lastInteractionType=(Math.abs(this._moveBuffer)>this._swipeThreshold)?"swipe":"image-click";
if(this._uiController._sectionController.paused){b=(this._moveBuffer>=0)?"next":"previous";
if(this._moveBuffer===0){this._uiController.update(0.01)}this._uiController[b].call(this._uiController)
}this._moveBuffer=0},_onMove:function(c){var b=c.target;if(c.pageY>(window.innerHeight-this._controlCenterBuffer)){this._controlCenterTouch=true
}if(!this.enabled||this._controlCenterTouch){return}if(this._uiController._sectionController.paused){if(!this._active){this._uiController.takeoverThreshold=0.4;
this._active=true;this._prev=c.pageY;return}this._delta=this._prev-c.pageY;this._moveBuffer+=this._delta;
this._touchStartOnPlaceholder=b&&!!b.getAttribute("data-placeholder");window.clearTimeout(this._timeout);
this._timeout=window.setTimeout(this._onEnd.bind(this),500);if(this._delta){this._uiController.update(this._delta*this._pixelToMediaSpeedRatio)
}this._prev=c.pageY}c.preventDefault()},disable:function(){this.enabled=false},enable:function(){this.enabled=true
}};return a});AC.define("overview/shared/ComparisonChart",["require"],function(b){function a(f){var d;
var g;var h;var k;var c;var j;var e;this._element=AC.Element.getElementById(f);
if(!this._element){return false}Element.cleanWhitespace(AC.Element.selectAll(".bars",this._element)[0]);
if(AC.Detector.isCSSAvailable("transition")){AC.Element.addClassName(this._element,"can-animate")
}j=AC.Element.selectAll(".bars-container")[0];d=AC.Element.selectAll(".bars li",this._element);
g=d.length;for(e=0;e<d.length;e+=1){h=d[e].getAttribute("data-chart-value");k=d[e].getAttribute("data-chart-label");
c=d[e].getAttribute("data-chart-data");if((!h)||isNaN(parseFloat(h))){throw"Could not find a valid data-chart-value attribute on one of the bar elements."
}d[e].innerHTML='<span class="text-value">'+k+'<span class="data-value">'+c+'</span></span><span class="visual-value" role="presentation"></span>';
h=parseFloat(d[e].getAttribute("data-chart-value"));d[e].setAttribute("data-animate-height",h)
}}a.prototype={visitorEngaged:function(){var c=AC.Element.selectAll(".bars li",this._element);
var d;AC.Element.addClassName(this._element,"animate");for(d=0;d<c.length;d+=1){c[d].style.height=c[d].getAttribute("data-animate-height")+"%"
}},resetChart:function(){if(AC.Detector.isCSSAvailable("transition")){var c=AC.Element.selectAll(".bars li",this._element);
var d;AC.Element.removeClassName(this._element,"animate");for(d=0;d<c.length;d+=1){c[d].style.height=0+"%"
}}else{return}}};return a});AC.define("overview/shared/clip/Basic",[],function(){function a(b,e,d){var c=document.querySelector(b);
if(c&&c.nodeType&&c.nodeType===1){this._el=c}else{this._el=b}this.duration=e;this.beginning=0;
this._currentTime=0}a.prototype={};Object.defineProperties(a.prototype,{currentTime:{enumerable:true,configurable:false,get:function(){return this._currentTime
},set:function(b){this._currentTime=Math.max(0,Math.min(b,this.duration))}},el:{enumerable:true,configurable:false,get:function(){if(this._el&&this._el.nodeType&&this._el.nodeType===1){return this._el
}else{return this._el=document.querySelector(this._el)}}}});return a});AC.define("overview/desktop/timeline/timeline-ipad",["require","overview/shared/clip/Tween","overview/shared/ComparisonChart","overview/shared/clip/Basic"],function(d){var b=d("overview/shared/clip/Tween"),a=d("overview/shared/ComparisonChart");
var c=d("overview/shared/clip/Basic");return function(){var f,p,r,e,g;var t=new a("processor-chart"),n=new a("memory-chart"),q=new a("graphics-chart"),j=new a("storage-chart"),m=new a("fan-chart");
var i=document.getElementById("hero"),h=document.getElementById("measurements"),l=document.getElementById("comingsoon"),o=document.getElementById("navcontainer"),u=document.querySelector(".productnav-wrapper");
var k=false;return[{name:"home",pause:0,time:0,labelSelector:"#hero",events:[{type:"pauseenter",action:function(){i.querySelector(".caret").classList.add("show");
i.classList.remove("slide-out");o.classList.remove("slide-out");u.classList.remove("slide-out");
setTimeout(function(){o.style.zIndex=40000},1000)}},{type:"pauseexit",action:function(){i.classList.add("slide-out");
o.classList.add("slide-out");u.classList.add("slide-out");o.style.zIndex=10000;
app.uiController._lastInteractionType="image-click";t.resetChart();n.resetChart();
q.resetChart();j.resetChart()}}],clips:[]},{name:"intro",pause:1.13,time:1.13,labelSelector:"#change",clips:[{start:-1.95,media:new c("#change .hero",2.55)},{start:-2,media:new b("#change .copy",2.5,[{property:"opacity",from:1,to:1},{property:"translate",axis:"y",from:0,to:0,units:"px",easing:"linear"}])},{start:-0.5,end:53.5,media:new b("#sectionNav",0.5,[{property:"display",from:"none",to:"block"},{property:"opacity",from:0,to:1,easing:"easeInQuad"}])},{start:0.5,media:new b("#change .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px",easing:"linear"}])}]},{name:"computing",pause:4.2,time:4.2,labelSelector:"#power",events:[{type:"pauseenter",action:function(){document.querySelector(".still_3").classList.add("crossFade")
}},{type:"pauseexit",action:function(){document.querySelector(".still_3").classList.remove("crossFade")
}}],clips:[{start:-0.1,media:new c(".still_3",0.7)},{start:-0.6,end:0.5,media:new b("#power .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:0.5,media:new b("#power .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])}]},{name:"processor",pause:8.4,time:8.4,labelSelector:"#processor",events:[{type:"pauseenter",action:function(){document.querySelector(".still_4").classList.add("crossFade");
window.clearTimeout(f);setTimeout(function(){t.visitorEngaged()},0)}},{type:"pauseexit",action:function(){document.querySelector(".still_4").classList.remove("crossFade");
f=window.setTimeout(function(){t.resetChart()},600)}}],clips:[{start:-0.1,end:0.6,media:new c(".still_4",0.7)},{start:-0.8,end:0.5,media:new b("#processor .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.5,end:0.5,media:new b("#processor .cores",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0.5,media:new b("#processor .pcie",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0.5,media:new b("#processor #processor-chart",0.5,[{property:"opacity",from:0,to:1}])},{start:0.5,media:new b("#processor .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0.5,media:new b("#processor .cores",0.5,[{property:"opacity",from:1,to:0}])},{start:0.5,media:new b("#processor .pcie",0.5,[{property:"opacity",from:1,to:0}])},{start:0.5,media:new b("#processor #processor-chart",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"memory",pause:11.3,time:11.3,labelSelector:"#memory",events:[{type:"pauseenter",action:function(){document.querySelector(".still_5").classList.add("crossFade")
}},{type:"pauseenter",action:function(){window.clearTimeout(p);setTimeout(function(){n.visitorEngaged()
},0)}},{type:"pauseexit",action:function(){document.querySelector(".still_5").classList.remove("crossFade")
}},{type:"pauseexit",action:function(){p=window.setTimeout(function(){n.resetChart()
},600)}}],clips:[{start:-0.1,end:0.6,media:new c(".still_5",0.7)},{start:-0.8,end:0.5,media:new b("#memory .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.5,end:0.5,media:new b("#memory .bandwidth",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0.5,media:new b("#memory .improvement",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0.5,media:new b("#memory #memory-chart",0.5,[{property:"opacity",from:0,to:1}])},{start:0.5,media:new b("#memory .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0.5,media:new b("#memory .bandwidth",0.5,[{property:"opacity",from:1,to:0}])},{start:0.5,media:new b("#memory .improvement",0.5,[{property:"opacity",from:1,to:0}])},{start:0.5,media:new b("#memory #memory-chart",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"graphics",pause:15.7,time:15.7,labelSelector:"#graphics",events:[{type:"pauseenter",action:function(){document.querySelector(".still_6").classList.add("crossFade")
}},{type:"pauseenter",action:function(){window.clearTimeout(r);setTimeout(function(){q.visitorEngaged()
},0)}},{type:"pauseexit",action:function(){document.querySelector(".still_6").classList.remove("crossFade")
}},{type:"pauseexit",action:function(){r=window.setTimeout(function(){q.resetChart()
},600)}}],clips:[{start:-0.1,end:0.6,media:new c(".still_6",0.7)},{start:-0.8,end:0.5,media:new b("#graphics .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.5,end:0.5,media:new b("#graphics .vram",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0.5,media:new b("#graphics .teraflops",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0.5,media:new b("#graphics #graphics-chart",0.5,[{property:"opacity",from:0,to:1}])},{start:0.5,media:new b("#graphics .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0.5,media:new b("#graphics .vram",0.5,[{property:"opacity",from:1,to:0}])},{start:0.5,media:new b("#graphics .teraflops",0.5,[{property:"opacity",from:1,to:0}])},{start:0.5,media:new b("#graphics #graphics-chart",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"storage",pause:17.75,time:17.75,labelSelector:"#storage",events:[{type:"pauseenter",action:function(){document.querySelector(".still_7").classList.add("crossFade")
}},{type:"pauseenter",action:function(){window.clearTimeout(e);setTimeout(function(){j.visitorEngaged()
},0)}},{type:"pauseexit",action:function(){document.querySelector(".still_7").classList.remove("crossFade")
}},{type:"pauseexit",action:function(){e=window.setTimeout(function(){j.resetChart()
},600)}}],clips:[{start:-0.1,end:0.6,media:new c(".still_7",0.7)},{start:-0.8,end:0.5,media:new b("#storage .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.5,end:0.5,media:new b("#storage .flash",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0.5,media:new b("#storage .improvement",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0.5,media:new b("#storage .capacity",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0.5,media:new b("#storage #storage-chart",0.5,[{property:"opacity",from:0,to:1}])},{start:0.5,media:new b("#storage .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0.5,media:new b("#storage .flash",0.5,[{property:"opacity",from:1,to:0}])},{start:0.5,media:new b("#storage .improvement",0.5,[{property:"opacity",from:1,to:0}])},{start:0.5,media:new b("#storage .capacity",0.5,[{property:"opacity",from:1,to:0}])},{start:0.5,media:new b("#storage #storage-chart",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"thermal core",pause:21.8,time:21.8,labelSelector:"#thermal",events:[{type:"pauseenter",action:function(){document.querySelector(".still_8").classList.add("crossFade")
}},{type:"pauseexit",action:function(){document.querySelector(".still_8").classList.remove("crossFade")
}}],clips:[{start:-0.1,end:0.6,media:new c(".still_8",0.7)},{start:-0.6,end:0.5,media:new b("#thermal .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:0.5,media:new b("#thermal .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])}]},{name:"fan",pause:29,time:29,labelSelector:"#fan",events:[{type:"pauseenter",action:function(){document.querySelector(".still_9").classList.add("crossFade");
window.clearTimeout(g);setTimeout(function(){m.visitorEngaged()},0)}},{type:"pauseexit",action:function(){document.querySelector(".still_9").classList.remove("crossFade");
g=window.setTimeout(function(){m.resetChart()},600)}}],clips:[{start:-0.1,end:0.6,media:new c(".still_9",0.7)},{start:-0.6,end:0.5,media:new b("#fan .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.5,end:0.5,media:new b("#fan .acoustic",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0.5,media:new b("#fan .dba",0.5,[{property:"opacity",from:0,to:1}])},{start:0.5,media:new b("#fan .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0.5,end:1,media:new b("#fan .acoustic",0.5,[{property:"opacity",from:1,to:0}])},{start:0.5,end:1,media:new b("#fan .dba",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"expansion",pause:34.9,time:34.9,labelSelector:"#expansion",events:[{type:"pauseenter",action:function(){document.querySelector(".still_10").classList.add("crossFade")
}}],clips:[{start:-0.1,media:new c(".still_10",4.5)},{start:-1.5,end:0.5,media:new b("#expansion .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:0.5,media:new b("#expansion .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])}]},{name:"thunderbolt",pause:36,time:36,labelSelector:"#thunderbolt",events:[{type:"pauseenter",action:function(){document.querySelector(".still_10").classList.add("crossFade")
}}],clips:[{start:-0.8,end:0.5,media:new b("#thunderbolt .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.5,end:0.5,media:new b("#thunderbolt .speeds",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0.5,media:new b("#thunderbolt .improvement",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0.5,media:new b("#thunderbolt .daisychain",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0.5,media:new b("#thunderbolt .displays",0.5,[{property:"opacity",from:0,to:1}])},{start:0.5,media:new b("#thunderbolt .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0.5,media:new b("#thunderbolt .speeds",0.5,[{property:"opacity",from:1,to:0}])},{start:0.5,media:new b("#thunderbolt .improvement",0.5,[{property:"opacity",from:1,to:0}])},{start:0.5,media:new b("#thunderbolt .daisychain",0.5,[{property:"opacity",from:1,to:0}])},{start:0.5,media:new b("#thunderbolt .displays",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"io",pause:38.2,time:38.2,labelSelector:"#io",events:[{type:"pauseenter",action:function(){document.querySelector(".still_10").classList.add("crossFade")
}},{type:"pauseexit",action:function(){document.querySelector(".still_10").classList.remove("crossFade")
}}],clips:[{start:-1.4,end:0.5,media:new b("#io .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-1.2,end:0.7,media:new b("#io .hdmi",1,[{property:"opacity",from:0,to:1}])},{start:-1.2,end:0.7,media:new b("#io .gigabit",1,[{property:"opacity",from:0,to:1}])},{start:-1,end:0.9,media:new b("#io .thunderbolt",1,[{property:"opacity",from:0,to:1}])},{start:-1,end:0.9,media:new b("#io .usb",1,[{property:"opacity",from:0,to:1}])},{start:0.5,end:1.5,media:new b("#io .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0.9,end:1.5,media:new b("#io .thunderbolt",0.5,[{property:"opacity",from:1,to:0}])},{start:0.9,end:1.5,media:new b("#io .usb",0.5,[{property:"opacity",from:1,to:0}])},{start:0.7,end:1.5,media:new b("#io .hdmi",0.5,[{property:"opacity",from:1,to:0}])},{start:0.7,end:1.5,media:new b("#io .gigabit",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"wireless",pause:40.46,time:40.46,labelSelector:"#wireless",events:[{type:"pauseenter",action:function(){document.querySelector(".still_13").classList.add("crossFade")
}},{type:"pauseexit",action:function(){document.querySelector(".still_13").classList.remove("crossFade")
}}],clips:[{start:-0.1,end:3.3,media:new c(".still_13",3.4)},{start:-0.7,end:0.5,media:new b("#wireless .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.2,end:0.5,media:new b("#wireless .copy",0.2,[{property:"opacity",from:1,to:1}])},{start:-0.5,end:0.5,media:new b("#wireless .ac",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0.5,media:new b("#wireless .bluetooth",0.5,[{property:"opacity",from:0,to:1}])},{start:0.5,media:new b("#wireless .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0.5,media:new b("#wireless .ac",0.5,[{property:"opacity",from:1,to:0}])},{start:0.5,media:new b("#wireless .bluetooth",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"design",pause:42.43,time:42.43,labelSelector:"#design",events:[{type:"pauseenter",action:function(){document.querySelector(".still_14").classList.add("crossFade")
}},{type:"pauseenter",action:function(){h.classList.remove("show")}},{type:"pauseexit",action:function(v){if(v.to===13){h.classList.add("show")
}}}],clips:[{start:-0.1,end:1.9,media:new c(".still_14",2)},{start:-0.6,end:0.5,media:new b("#design .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:0.5,media:new b("#design .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])}]},{name:"assembly",pause:45.8,time:45.8,labelSelector:"#assembly",events:[{type:"pauseenter",action:function(){document.querySelector(".still_14").classList.add("crossFade")
}},{type:"pauseexit",action:function(){document.querySelector(".still_14").classList.remove("crossFade")
}}],clips:[{start:-0.8,end:0.5,media:new b("#assembly .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.5,end:0.5,media:new b("#assembly .first",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0.5,media:new b("#assembly .second",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#assembly .third",0.5,[{property:"opacity",from:0,to:1}])},{start:0.5,media:new b("#assembly .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0.5,media:new b("#assembly .first",0.5,[{property:"opacity",from:1,to:0}])},{start:0.5,media:new b("#assembly .second",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.5,media:new b("#assembly .third",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"learn more",pause:48.3,time:48.3,labelSelector:"#comingsoon",events:[{type:"pauseenter",action:function(){}},{type:"pauseexit",action:function(){}},{type:"pauseenter",action:function(){document.querySelector(".still_15").classList.add("crossFade")
}},{type:"pauseexit",action:function(){document.querySelector(".still_15").classList.remove("crossFade")
}}],clips:[{start:-0.1,end:0.5,media:new c(".still_15",0.6)},{start:-1.3,end:0.5,media:new b("#comingsoon .copy",1.3,[{property:"opacity",from:0,to:1,easing:"easeInQuad"}])}]}]
}});AC.define("overview/desktop/app/iPad",["require","overview/shared/app/Core","overview/shared/ClipContainer","overview/shared/controller/Section","overview/shared/controller/Ui","overview/shared/controller/Nav","overview/desktop/input/Touch","defer/Deferred","assetLoader/AssetLoader","overview/desktop/timeline/timeline-ipad"],function(b){var g=b("overview/shared/app/Core"),l=b("overview/shared/ClipContainer"),a=b("overview/shared/controller/Section"),f=b("overview/shared/controller/Ui"),i=b("overview/shared/controller/Nav"),j=b("overview/desktop/input/Touch"),h=b("defer/Deferred"),k=b("assetLoader/AssetLoader");
var e=b("overview/desktop/timeline/timeline-ipad");var d=null;function c(m){g.call(this);
e=e();this.introcontainer=document.getElementById("introcontainer");this.videocontainer=document.getElementById("videocontainer");
this.stillcontainer=document.getElementById("stillcontainer");this.panelcontainer=document.getElementById("panelcontainer");
this.touch="ontouchstart" in window;this.timeline=this.convertSectionsToClips(e);
this.mainContainer=new l(this.videocontainer,m.main,this.timeline.clips);this.curtain=this.createFadeCurtain();
this._lastTime=0;this.preventTouchDefault=this.preventTouchDefault.bind(this);document.addEventListener("touchstart",this.preventTouchDefault);
var o=document.querySelector("#globalheader, #ac-globalnav");var n=AC.Element.select(".productnav-wrapper");
o.addEventListener("touchstart",function(p){p.stopPropagation()});o.addEventListener("touchend",function(p){p.stopPropagation()
});n.addEventListener("touchstart",function(p){p.stopPropagation()});n.addEventListener("touchend",function(p){p.stopPropagation()
});document.getElementById("navcontainer").style.zIndex=40000;this.loadIntro(m.intro[0]).then(function(){this.mainContainer.load().then(this.initMain.bind(this))
}.bind(this));window.app=this}c.prototype=new g();c.prototype.constructor=c;c.prototype.initAssetLoader=function(n){var m=n.assets.map(function(p){return p.url
});var o;if(n.assets){o=new k(m);return o.load().then(function(p){p.forEach(function(r,q){var t=n.assets[q].container;
var u=document.querySelector(t);r.setAttribute("class",n.assets[q].className);u.appendChild(r)
})})}else{return new h().resolve()}};c.prototype.loadIntro=function(n){var m=new h();
var p=document.getElementById("hero").querySelector(".caret");var o=function(){p.removeEventListener("webkitTransitionEnd",o);
m.resolve();p.classList.add("no-delay")};p.addEventListener("webkitTransitionEnd",o);
var q=this.initAssetLoader(n);q.then(function(){this.resizeFluidAreas();p.classList.add("show");
document.body.classList.remove("intro-hidden")}.bind(this));return m.promise()};
c.prototype.resizeContainers=function(){var m=window.innerHeight;var p=window.innerWidth;
var u,w,x,y;var t=this.videocontainer;var n=this.introcontainer;var r=this.stillcontainer;
var q=this.panelcontainer;var v=768===screen.width&&1024===screen.height&&"number"===typeof window.orientation;
var o=v&&(0===window.orientation||180===window.orientation);u=m*((o)?0.9:1);if(!v){q.style.height=u+"px"
}r.style.height=u+"px";t.style.height=u+"px";q.style.height=u+"px";window.scrollTo(0,0);
return u};c.prototype.resizePlaceholders=function(m){var o=document.querySelectorAll(".placeholder-container");
var n=768===screen.width&&1024===screen.height&&"number"===typeof window.orientation;
[].forEach.call(o,function(p){var v=p.querySelector(".placeholder-inner");var G=p.querySelectorAll(".callout");
var y=parseFloat(p.getAttribute("data-min-top"));var E=496;var q=y/E;var x=parseFloat(p.getAttribute("data-height-ratio"));
var z=parseFloat(p.getAttribute("data-width-ratio"));var A=p.getAttribute("data-width-ratio-narrow");
var u=0.0013;var D;var B;var w;var C=0;var r;var t;var H;var I;var F=185;if(A){A=parseFloat(A)
}if(isNaN(q)||isNaN(x)||isNaN(z)){return}if(m<E){w=y}else{w=m*q}D=(m*x);B=m*((n&&A)?A:z);
if(p.classList.contains("hero")){q=(y/(m+F));w=m*q;p.style.top=w+"px"}if(p.classList.contains("static-top")){p.style.top=y+"px"
}else{p.style.top=w+"px"}v.style.width=B+"px";v.style.height=D+"px";[].forEach.call(G,function(J){if(!p.classList.contains("true-center")){if(m<E){r=0
}else{r=(m*q)*(m*u)}t=(m*x)-(r+r*0.3);J.style.top=r+"px";J.style.height=t+"px"}else{J.style.top="0px";
J.style.height=D+"px"}})})};c.prototype.setupEnd=function(){var q=app.sectionController._pauseTimeline.length-1;
var p=function(){app.uiController._lastInteractionType="image-click";this.sectionController.seek(0)
};var o=document.querySelector(".footer-wrapper, #ac-globalfooter");var n=document.querySelector(".sosumi");
var m=function(){this.uiController.disableInput();document.documentElement.classList.remove("overflow");
document.removeEventListener("touchstart",this.preventTouchDefault);o.classList.add("show");
n.classList.add("show");setTimeout(function(){document.getElementById("curtain").style.display="none"
},1000)}.bind(this);this.sectionController.on("pauseenter:"+q,m);this.mainContainer.clipController.on("ended",m);
this.sectionController.on("pauseexit:"+q,function(){o.classList.remove("show");
n.classList.remove("show")});this.sectionController.on("seek",function(r){if(r.from===q){this.uiController.enableInput();
document.addEventListener("touchstart",this.preventTouchDefault);this.videocontainer.classList.remove("transition");
this.stillcontainer.classList.remove("transition")}}.bind(this))};c.prototype.setupResizeEvents=function(){var o=this.resizeFluidAreas.bind(this);
var n="onorientationchange" in window;var m=n?"orientationchange":"resize";var p=n?1000:0;
window.addEventListener("orientationchange",o)};c.prototype.setupVideoCrossover=function(){var m;
var n=function(){clearTimeout(m);this.videocontainer.style.display="block";this.introcontainer.style.display="none"
};app.sectionController.on("pauseexit:0",n.bind(this));m=setTimeout(n.bind(this),1300)
};c.prototype.setupCaret=function(){var m=document.getElementById("hero").querySelector(".caret .button");
m.addEventListener("click",this.sectionController.seek.bind(this.sectionController,2))
};c.prototype.preventTouchDefault=function(m){m.preventDefault()};c.prototype.pollForAwakeFromSleep=function(){var n=new Date().getTime();
var m=function(){var o=new Date().getTime();if(o-n>1000){this.trigger("awakeFromSleep")
}n=o;setTimeout(m,500)}.bind(this);m()};c.prototype.resyncVideo=function(){var m=this.mainContainer;
if(m&&m.clipController&&!m.clipController.paused&&m.clipController._mediaTimer._forwardsVideo.paused){m.clipController.pause();
m.clipController.play()}};c.prototype.addDuplicateProductNav=function(){var p=document.querySelector(".productnav-wrapper");
var m=p.cloneNode(true);var o=AC.Element.select(".productnav",m);var n=document.querySelector("#panelcontainer #hero");
m.id="productnav-wrapper-clone";o.id="productnav-clone";n.appendChild(m)};c.prototype.pushThrough=function(){var n=this.mainContainer.clipController;
var m=n.currentTime;var o=n._mediaTimer._forwardsVideo;if(m===this._lastTime&&!n.paused&&!o.paused){n.pause();
n.play()}this._lastTime=m};c.prototype.initMain=function(m,p){var n=true;if(this.initialized){return
}this.sectionController=new a(this.mainContainer.clipController,this.timeline.events.pauses,e);
this.uiController=new f(this.sectionController);this.navController=new i(this.sectionController,e);
this.touchInputController=new j(this.uiController);this.setupEnd();this.addTimelineEvents(e);
this.setupResizeEvents();this.setupCaret();this.setupVideoCrossover();this.resizeFluidAreas();
this.pollForAwakeFromSleep();this.setupFocusEvents();this.sectionController.on("pauseenter",this.enterAnalytics.bind(this));
this.sectionController.on("pauseexit",this.exitAnalytics.bind(this));window.addEventListener("beforeunload",function(){this.analyzer.flush()
}.bind(this));this.sectionController.trigger("pauseenter:0");this.sectionController.on("pauseenter",function(q){app.mainContainer.clipController.currentTime=this.sectionController._pauseTimeline[q.index]+0.2
}.bind(this));this.sectionController.on("pauseexit",function(){var q=document.getElementById("sp-searchtext");
if(q){q.blur()}});var o=document.querySelector("#assembly .video");if(o){o.addEventListener("touchstart",function(r){var q=r.target.href||r.target.parentNode.href;
if(q){window.location=q}})}this.mainContainer.clipController.on("timeupdate",this.pushThrough.bind(this));
this.on("awakeFromSleep",this.resyncVideo.bind(this));this.sectionController._update();
if(n){window.app=this}this.initialized=true};return c});AC.define("overview/desktop/settings-ipad",[],function(){var a="mp4";
return{intro:[{type:"loadassets",assets:[{url:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/ipad/hero.jpg",container:"#hero .hero-container",className:"hero"},{url:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/ipad/macpro_ipad_0404.jpg",container:"#change .hero-container",className:"hero"}]}],main:[{type:"bivideo",file:"video/macpro_main_ipad."+a,startTime:2,stills:{3:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/ipad/macpro_ipad_0708.jpg",4:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/ipad/macpro_ipad_1112.jpg",5:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/ipad/macpro_ipad_1416.jpg",6:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/ipad/macpro_ipad_1820.jpg",7:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/ipad/macpro_ipad_2024.jpg",8:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/ipad/macpro_ipad_2428.jpg",9:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/ipad/macpro_ipad_3202.jpg",10:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/ipad/macpro_ipad_3806.jpg",13:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/ipad/macpro_ipad_4314.jpg",14:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/ipad/macpro_ipad_4518.jpg",15:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/ipad/macpro_ipad_5125.jpg"}}]}
});AC.define("overview/desktop/timeline/intro",["require","overview/shared/clip/Tween","overview/shared/clip/Basic"],function(d){var a=d("overview/shared/clip/Tween"),c=d("overview/shared/clip/Basic");
var b="#globalheader";if(document.getElementById("ac-globalnav")){b="#ac-globalnav"
}return function(){var e=[{start:0,end:3,media:new c("#hero",1)},{start:1.7,end:3,media:new a("#hero .title",0.6,[{property:"opacity",from:0,to:1,easing:"easeInQuad"},{property:"translate",axis:"y",from:0,to:0,units:"px"}])},{start:2,end:3,media:new a("#hero .subtitle",0.6,[{property:"opacity",from:0,to:1,easing:"easeInQuad"},{property:"translate",axis:"y",from:0,to:0,units:"px"}])},{start:2.7,end:3,media:new a(b,0.3,[{property:"opacity",from:0,to:1,easing:"easeInQuad"},{property:"translate",axis:"y",from:0,to:0,units:"px"}])},{start:2.7,end:3,media:new a(".productnav",0.3,[{property:"opacity",from:0,to:1,easing:"easeInQuad"},{property:"translate",axis:"y",from:0,to:0,units:"px"}])},{start:2.9,end:3,media:new c("#hero .caret",0.5)},{start:2.9,end:3,media:new a(".still_1",0.1,[{property:"opacity",from:0,to:1,easing:"linear"}])}];
var f={start:2.7,end:3,media:new a("#ac-gn-segmentbar",0.3,[{property:"opacity",from:0,to:1,easing:"easeInQuad"},{property:"translate",axis:"y",from:0,to:0,units:"px"}])};
return document.getElementById("ac-gn-segmentbar")?e.concat([f]):e}});AC.define("overview/desktop/timeline/timeline",["require","overview/shared/clip/Tween","overview/shared/ComparisonChart","overview/shared/clip/Basic"],function(f){var b=f("overview/shared/clip/Tween"),a=f("overview/shared/ComparisonChart");
var e=f("overview/shared/clip/Basic");var d="#globalheader";if(document.getElementById("ac-globalnav")){d="#ac-globalnav"
}var c=-68;var g=-72;if(document.documentElement.className.match("ac-gn-segmentbar-visible")){c=-88;
g=-92}return function(){var i,t,v,h,j;var w=new a("processor-chart"),r=new a("memory-chart"),u=new a("graphics-chart"),n=new a("storage-chart"),q=new a("fan-chart");
var l=document.getElementById("hero"),k=document.getElementById("measurements"),p=document.getElementById("comingsoon");
var o=false;var m=[{start:0,end:0.2,media:new b(".still_1",0.2,[{property:"opacity",from:1,to:0,easing:"easeInQuad"}])},{start:0,end:0.35,media:new b("#hero .title",0.35,[{property:"opacity",from:1,to:1,easing:"easeInQuad"}])},{start:0.35,end:0.65,media:new b("#hero .title",0.3,[{property:"opacity",from:1,to:0,easing:"easeOutQuad"}])},{start:0,end:0.09,media:new b("#hero .title",0.09,[{property:"translate",axis:"y",from:0,to:0,units:"px"}])},{start:0.09,end:0.75,media:new b("#hero .title",0.66,[{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0,end:0.25,media:new b("#hero .subtitle",0.25,[{property:"opacity",from:1,to:1,easing:"easeInQuad"}])},{start:0,end:0.25,media:new b("#hero .subtitle",0.25,[{property:"opacity",from:1,to:1,easing:"linear"}])},{start:0.15,end:0.45,media:new b("#hero .subtitle",0.3,[{property:"opacity",from:1,to:0,easing:"easeInQuad"}])},{start:0,end:0.09,media:new b("#hero .subtitle",0.09,[{property:"translate",axis:"y",from:0,to:0,units:"px"}])},{start:0.09,end:0.75,media:new b("#hero .subtitle",0.66,[{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0,end:0.5,media:new e("#hero .caret",0.5,[])},{start:0,end:0.25,media:new b(d,0.25,[{property:"opacity",from:1,to:1,easing:"easeInQuad"}])},{start:0,end:0.25,media:new b(".productnav",0.25,[{property:"opacity",from:1,to:1,easing:"linear"},{property:"translate",axis:"y",from:0,to:0,easing:"linear"},])},{start:0.25,end:0.75,media:new b(d,0.5,[{property:"opacity",from:1,to:0,easing:"easeInQuad"}])},{start:0,end:0.09,media:new b(d,0.09,[{property:"opacity",from:1,to:1,easing:"linear"}])},{start:0,end:0.1,media:new b(d,0.09,[{property:"translate",axis:"y",from:0,to:0,units:"px"}])},{start:0.1,end:0.75,media:new b(d,0.66,[{property:"translate",axis:"y",from:0,to:c,units:"px"}])},{start:0,end:0.1,media:new b(".productnav",0.09,[{property:"translate",axis:"y",from:0,to:0,units:"px"}])},{start:0.1,end:0.75,media:new b(".productnav",0.66,[{property:"translate",axis:"y",from:0,to:g,units:"px"},{property:"opacity",from:1,to:1,units:"px"},])},{start:0.75,end:47.73,media:new b(".productnav",46.98,[{property:"opacity",from:1,to:1,units:"px"},])}];
var x=[{start:0,end:0.25,media:new b("#ac-gn-segmentbar",0.25,[{property:"opacity",from:1,to:1,easing:"easeInQuad"}])},{start:0.25,end:0.75,media:new b("#ac-gn-segmentbar",0.5,[{property:"opacity",from:1,to:0,easing:"easeInQuad"}])},{start:0,end:0.09,media:new b("#ac-gn-segmentbar",0.09,[{property:"opacity",from:1,to:1,easing:"linear"}])},{start:0,end:0.1,media:new b("#ac-gn-segmentbar",0.09,[{property:"translate",axis:"y",from:0,to:0,units:"px"}])},{start:0.1,end:0.75,media:new b("#ac-gn-segmentbar",0.66,[{property:"translate",axis:"y",from:0,to:c,units:"px"}])}];
if(document.getElementById("ac-gn-segmentbar")){m=m.concat(x)}return[{name:"home",pause:0,time:0,labelSelector:"#hero",events:[{type:"pauseenter",action:function(){document.querySelector(".still_1").classList.add("crossFade");
l.querySelector(".caret").classList.add("show")}},{type:"pauseexit",action:function(){window.setTimeout(function(){l.querySelector(".caret").classList.remove("show")
},500);w.resetChart();r.resetChart();u.resetChart();n.resetChart()}}],clips:m},{name:"intro",pause:1,time:1,labelSelector:"#change",events:[{type:"pauseenter",action:function(){document.querySelector(".still_2").classList.add("crossFade")
}},{type:"pauseexit",action:function(){document.querySelector(".still_2").classList.remove("crossFade")
}}],clips:[{start:-0.1,end:0.1,media:new e(".still_2",0.2)},{start:-0.5,end:0,media:new b("#change .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px",easing:"linear"}])},{start:-0.5,end:47.03,media:new b("#sectionNav",0.5,[{property:"display",from:"none",to:"block"},{property:"opacity",from:0,to:1,easing:"easeInQuad"}])},{start:0,end:0.5,media:new b("#change .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px",easing:"linear"}])}]},{name:"computing",pause:4,time:4,labelSelector:"#power",events:[{type:"pauseenter",action:function(){document.querySelector(".still_3").classList.add("crossFade")
}},{type:"pauseexit",action:function(){document.querySelector(".still_3").classList.remove("crossFade")
}}],clips:[{start:-0.1,end:0.1,media:new e(".still_3",0.2)},{start:-0.5,end:0,media:new b("#power .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:0,end:0.5,media:new b("#power .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])}]},{name:"processor",pause:9,time:9,labelSelector:"#processor",events:[{type:"pauseenter",action:function(){document.querySelector(".still_4").classList.add("crossFade");
window.clearTimeout(i);setTimeout(function(){w.visitorEngaged()},0)}},{type:"pauseexit",action:function(){document.querySelector(".still_4").classList.remove("crossFade");
i=window.setTimeout(function(){w.resetChart()},600)}}],clips:[{start:-0.1,end:0.1,media:new e(".still_4",0.2)},{start:-0.8,end:-0.3,media:new b("#processor .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.3,end:0,media:new b("#processor .copy",0.3,[{property:"opacity",from:1,to:1}])},{start:-0.5,end:0,media:new b("#processor .cores",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#processor .pcie",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#processor #processor-chart",0.5,[{property:"opacity",from:0,to:1}])},{start:0,end:0.5,media:new b("#processor .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0,end:0.5,media:new b("#processor .cores",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.5,media:new b("#processor .pcie",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.5,media:new b("#processor #processor-chart",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"memory",pause:11,time:11,labelSelector:"#memory",events:[{type:"pauseenter",action:function(){document.querySelector(".still_5").classList.add("crossFade")
}},{type:"pauseenter",action:function(){window.clearTimeout(t);setTimeout(function(){r.visitorEngaged()
},0)}},{type:"pauseexit",action:function(){document.querySelector(".still_5").classList.remove("crossFade")
}},{type:"pauseexit",action:function(){t=window.setTimeout(function(){r.resetChart()
},600)}}],clips:[{start:-0.1,end:0.1,media:new e(".still_5",0.2)},{start:-0.8,end:-0.3,media:new b("#memory .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.3,end:0,media:new b("#memory .copy",0.3,[{property:"opacity",from:1,to:1}])},{start:-0.5,end:0,media:new b("#memory .bandwidth",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#memory .improvement",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#memory #memory-chart",0.5,[{property:"opacity",from:0,to:1}])},{start:0,end:0.5,media:new b("#memory .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0,end:0.5,media:new b("#memory .bandwidth",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.5,media:new b("#memory .improvement",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.5,media:new b("#memory #memory-chart",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"graphics",pause:15,time:15,labelSelector:"#graphics",events:[{type:"pauseenter",action:function(){document.querySelector(".still_6").classList.add("crossFade")
}},{type:"pauseenter",action:function(){window.clearTimeout(v);setTimeout(function(){u.visitorEngaged()
},0)}},{type:"pauseexit",action:function(){document.querySelector(".still_6").classList.remove("crossFade")
}},{type:"pauseexit",action:function(){v=window.setTimeout(function(){u.resetChart()
},600)}}],clips:[{start:-0.1,end:0.1,media:new e(".still_6",0.2)},{start:-0.8,end:-0.3,media:new b("#graphics .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.3,end:0,media:new b("#graphics .copy",0.3,[{property:"opacity",from:1,to:1}])},{start:-0.5,end:0,media:new b("#graphics .vram",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#graphics .teraflops",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#graphics #graphics-chart",0.5,[{property:"opacity",from:0,to:1}])},{start:0,end:0.5,media:new b("#graphics .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0,end:0.5,media:new b("#graphics .vram",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.5,media:new b("#graphics .teraflops",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.5,media:new b("#graphics #graphics-chart",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"storage",pause:17,time:17,labelSelector:"#storage",events:[{type:"pauseenter",action:function(){document.querySelector(".still_7").classList.add("crossFade")
}},{type:"pauseenter",action:function(){window.clearTimeout(h);setTimeout(function(){n.visitorEngaged()
},0)}},{type:"pauseexit",action:function(){document.querySelector(".still_7").classList.remove("crossFade")
}},{type:"pauseexit",action:function(){h=window.setTimeout(function(){n.resetChart()
},600)}}],clips:[{start:-0.1,end:0.1,media:new e(".still_7",0.2)},{start:-0.8,end:-0.3,media:new b("#storage .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.3,end:0,media:new b("#storage .copy",0.3,[{property:"opacity",from:1,to:1}])},{start:-0.5,end:0,media:new b("#storage .flash",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#storage .improvement",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#storage .capacity",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#storage #storage-chart",0.5,[{property:"opacity",from:0,to:1}])},{start:0,end:0.5,media:new b("#storage .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0,end:0.5,media:new b("#storage .flash",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.5,media:new b("#storage .improvement",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.5,media:new b("#storage .capacity",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.5,media:new b("#storage #storage-chart",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"thermal core",pause:21,time:21,labelSelector:"#thermal",events:[{type:"pauseenter",action:function(){document.querySelector(".still_8").classList.add("crossFade")
}},{type:"pauseexit",action:function(){document.querySelector(".still_8").classList.remove("crossFade")
}}],clips:[{start:-0.1,end:0.1,media:new e(".still_8",0.2)},{start:-0.5,end:0,media:new b("#thermal .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:0,end:0.5,media:new b("#thermal .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])}]},{name:"fan",pause:28,time:28,labelSelector:"#fan",events:[{type:"pauseenter",action:function(){document.querySelector(".still_9").classList.add("crossFade");
window.clearTimeout(j);setTimeout(function(){q.visitorEngaged()},0)}},{type:"pauseexit",action:function(){document.querySelector(".still_9").classList.remove("crossFade");
j=window.setTimeout(function(){q.resetChart()},600)}}],clips:[{start:-0.1,end:0.1,media:new e(".still_9",0.2)},{start:-0.5,end:0,media:new b("#fan .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.5,end:0,media:new b("#fan .acoustic",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#fan .dba",0.5,[{property:"opacity",from:0,to:1}])},{start:0,end:0.5,media:new b("#fan .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0,end:0.5,media:new b("#fan .acoustic",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.5,media:new b("#fan .dba",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"expansion",pause:34,time:34,labelSelector:"#expansion",events:[{type:"pauseenter",action:function(){document.querySelector(".still_10").classList.add("crossFade")
}}],clips:[{start:-0.1,end:3.2,media:new e(".still_10",3.3)},{start:-1.5,end:-1,media:new b("#expansion .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-1,end:0,media:new b("#expansion .copy",0.5,[{property:"opacity",from:1,to:1}])},{start:0,end:0.5,media:new b("#expansion .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])}]},{name:"thunderbolt",pause:35,time:35,labelSelector:"#thunderbolt",events:[{type:"pauseenter",action:function(){document.querySelector(".still_10").classList.add("crossFade")
}}],clips:[{start:-0.9,end:-0.4,media:new b("#thunderbolt .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.4,end:0,media:new b("#thunderbolt .copy",0.4,[{property:"opacity",from:1,to:1}])},{start:-0.5,end:0,media:new b("#thunderbolt .speeds",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#thunderbolt .improvement",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#thunderbolt .daisychain",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#thunderbolt .displays",0.5,[{property:"opacity",from:0,to:1}])},{start:0,end:0.4,media:new b("#thunderbolt .copy",0.4,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0,end:0.4,media:new b("#thunderbolt .speeds",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.4,media:new b("#thunderbolt .improvement",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.4,media:new b("#thunderbolt .daisychain",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.4,media:new b("#thunderbolt .displays",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"io",pause:36,time:36,labelSelector:"#io",events:[{type:"pauseenter",action:function(){document.querySelector(".still_10").classList.add("crossFade")
}},{type:"pauseexit",action:function(){document.querySelector(".still_10").classList.remove("crossFade")
}}],clips:[{start:-0.9,end:-0.4,media:new b("#io .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.4,end:0,media:new b("#io .copy",0.4,[{property:"opacity",from:1,to:1}])},{start:-0.6,end:-0.2,media:new b("#io .hdmi",0.4,[{property:"opacity",from:0,to:1}])},{start:-0.2,end:0,media:new b("#io .hdmi",0.2,[{property:"opacity",from:1,to:1}])},{start:-0.6,end:-0.2,media:new b("#io .gigabit",0.4,[{property:"opacity",from:0,to:1}])},{start:-0.2,end:0,media:new b("#io .gigabit",0.2,[{property:"opacity",from:1,to:1}])},{start:-0.3,end:0,media:new b("#io .thunderbolt",0.3,[{property:"opacity",from:0,to:1}])},{start:-0.3,end:0,media:new b("#io .usb",0.3,[{property:"opacity",from:0,to:1}])},{start:0,end:0.5,media:new b("#io .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0.5,end:0.9,media:new e("#io .copy",0.4)},{start:0,end:0.4,media:new b("#io .thunderbolt",0.4,[{property:"opacity",from:1,to:1}])},{start:0.4,end:0.9,media:new b("#io .thunderbolt",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.4,media:new b("#io .usb",0.4,[{property:"opacity",from:1,to:1}])},{start:0.4,end:0.9,media:new b("#io .usb",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.2,media:new b("#io .hdmi",0.2,[{property:"opacity",from:1,to:1}])},{start:0.2,end:0.7,media:new b("#io .hdmi",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.2,media:new b("#io .gigabit",0.2,[{property:"opacity",from:1,to:1}])},{start:0.2,end:0.7,media:new b("#io .gigabit",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"wireless",pause:39,time:39,labelSelector:"#wireless",events:[{type:"pauseenter",action:function(){document.querySelector(".still_13").classList.add("crossFade")
}},{type:"pauseenter",action:function(y){document.getElementById("design").classList.add("show")
}},{type:"pauseexit",action:function(){document.querySelector(".still_13").classList.remove("crossFade")
}}],clips:[{start:-0.1,end:3.3,media:new e(".still_13",3.4)},{start:-0.7,end:-0.2,media:new b("#wireless .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.2,end:0,media:new b("#wireless .copy",0.2,[{property:"opacity",from:1,to:1}])},{start:-0.5,end:0,media:new b("#wireless .ac",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#wireless .bluetooth",0.5,[{property:"opacity",from:0,to:1}])},{start:0,end:0.5,media:new b("#wireless .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0,end:0.5,media:new b("#wireless .ac",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.5,media:new b("#wireless .bluetooth",0.5,[{property:"opacity",from:1,to:0}])}]},{time:40,events:[{type:"pauseenter",action:function(y){}}],clips:[]},{name:"design",pause:42,time:42,labelSelector:"#design",events:[{type:"pauseenter",action:function(){document.querySelector(".still_14").classList.add("crossFade")
}},{type:"pauseenter",action:function(){k.classList.remove("show")}},{type:"pauseexit",action:function(y){if(y.to===13){k.classList.add("show")
}}}],clips:[{start:-0.1,end:1.4,media:new e(".still_14",1.5)},{start:-0.5,end:0,media:new b("#design .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:0,end:0.5,media:new b("#design .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])}]},{name:"assembly",pause:44,time:44,labelSelector:"#assembly",events:[{type:"pauseexit",action:function(){document.querySelector(".still_14").classList.remove("crossFade")
}}],clips:[{start:-0.8,end:-0.3,media:new b("#assembly .copy",0.5,[{property:"opacity",from:0,to:1},{property:"translate",axis:"y",from:20,to:0,units:"px"}])},{start:-0.3,end:0,media:new b("#assembly .copy",0.3,[{property:"opacity",from:1,to:1}])},{start:-0.5,end:0,media:new b("#assembly .first",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#assembly .second",0.5,[{property:"opacity",from:0,to:1}])},{start:-0.5,end:0,media:new b("#assembly .third",0.5,[{property:"opacity",from:0,to:1}])},{start:0,end:0.5,media:new b("#assembly .copy",0.5,[{property:"opacity",from:1,to:0},{property:"translate",axis:"y",from:0,to:-20,units:"px"}])},{start:0,end:0.5,media:new b("#assembly .first",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.5,media:new b("#assembly .second",0.5,[{property:"opacity",from:1,to:0}])},{start:0,end:0.5,media:new b("#assembly .third",0.5,[{property:"opacity",from:1,to:0}])}]},{name:"learn more",pause:46,time:46,labelSelector:"#comingsoon",events:[{type:"pauseenter",action:function(){}},{type:"pauseexit",action:function(){}},{type:"pauseenter",action:function(){document.querySelector(".still_15").classList.add("crossFade")
}},{type:"pauseexit",action:function(){document.querySelector(".still_15").classList.remove("crossFade")
}}],clips:[{start:-0.1,end:0,media:new b(".still_15",0.1,[{property:"opacity",from:1,to:1}])},{start:-1.3,end:0,media:new b("#comingsoon .copy",1.3,[{property:"opacity",from:0,to:1,easing:"easeInQuad"}])},{start:-0.3,end:0,media:new b("#comingsoon .copy",0.3,[{property:"opacity",from:1,to:1}])}]}]
}});AC.define("overview/desktop/input/Wheel",[],function(){var b=AC.Environment.Browser.name==="Firefox";
var c=(b)?0.02:0.01;function a(e,d){this.uiController=e;this.uiController.add(this);
this.enabled=true;this.max=0;this.pixelToMediaSpeedRatio=c;this.onWheel=this.onWheel.bind(this);
if(!("addWheelListener" in window)){throw new Error("WheelInputController: window.addWheelListener polyfill missing.")
}window.addWheelListener(document,this.onWheel)}a.prototype={onWheel:function(d){var f;
if(this.enabled){d.preventDefault();f=d.deltaY;if(b){f=this._normalize(f)}f*=this.pixelToMediaSpeedRatio;
this.uiController.update(f);this.uiController._lastInteractionType="scroll"}},enable:function(){this.enabled=true
},disable:function(){this.enabled=false},_normalize:function(e){var d=this._max||0.2;
if(e>d){d=e}else{if(e<-d){d=-e}}this._max=d;clearTimeout(this._normalizeTimeout);
this._normalizeTimeout=setTimeout(function(){this._max=null}.bind(this),100);return e/d
}};return a});AC.define("overview/desktop/input/Keyboard",["require"],function(a){var b=true;
function c(d){this.uiController=d;this.uiController.add(this);this.enabled=true;
this.onKeyDown=this.onKeyDown.bind(this);document.addEventListener("keydown",this.onKeyDown)
}c.prototype={keyMapping:{"37":"previous","38":"previous","39":"next","40":"next","32":"next"},onKeyDown:function(g){var f,d=g.keyCode;
if(!this.enabled){return}if(d in this.keyMapping){f=this.keyMapping[g.keyCode];
this.uiController._lastInteractionType="scroll";this.uiController[f].call(this.uiController)
}},enable:function(){this.enabled=true},disable:function(){this.enabled=false}};
return c});AC.define("overview/desktop/input/Click",["require"],function(b){function a(c){this.uiController=c;
this.uiController.add(this);this.enabled=true;this.onClick=this.onClick.bind(this);
document.addEventListener("click",this.onClick,true)}a.prototype={onClick:function(f){var d=(f&&f.target)||(f&&f.srcElement);
var c=d&&d.getAttribute&&d.getAttribute("data-nav-item");var g=d&&d.getAttribute("data-placeholder");
window.clearTimeout(this._timeout);if(g&&!c){this.uiController._lastInteractionType="image-click";
this.uiController.next()}},disable:function(){this.enabled=false},enable:function(){this.enabled=true
}};return a});AC.define("performance/desktop/HeightMargin",["require"],function(a){function c(f,e,d){this._target=f;
this._sample=e;this._margins=d.map(this._parseMargin);AC.Element.addEventListener(window,"resize",this._handleResize.bind(this));
this.resize()}var b=c.prototype;b.resize=function(){var e=this._sample.getBoundingClientRect();
var d=e.bottom-e.top;var f=this._margins.map(function(g){return this._marginFromHeight(g,d)
}.bind(this));AC.Element.setStyle(this._target,{margin:f.join(" ")})};b._parseMargin=function(d){return parseInt(d,10)
};b._handleResize=function(d){this.resize()};b._marginFromHeight=function(f,d){var e=(f/100)*d;
return e+"px"};return c});AC.define("overview/desktop/app/Desktop",["require","overview/shared/app/Core","overview/desktop/timeline/intro","overview/desktop/timeline/timeline","overview/shared/ClipContainer","overview/shared/controller/Section","overview/shared/controller/Ui","overview/shared/controller/Nav","overview/desktop/input/Wheel","overview/desktop/input/Keyboard","overview/desktop/input/Click","overview/shared/clip/Tween","overview/shared/ComparisonChart","performance/desktop/HeightMargin"],function(h){function q(v,x){var w=v.parentNode;
var u=null;while(w.parentNode){if(w.classList&&w.classList.contains(x)){u=w;break
}w=w.parentNode}return u}var l=AC.Environment.Browser.name==="IE";var b=h("overview/shared/app/Core");
var o=h("overview/desktop/timeline/intro");var i=h("overview/desktop/timeline/timeline");
var k=h("overview/shared/ClipContainer"),f=h("overview/shared/controller/Section"),c=h("overview/shared/controller/Ui"),m=h("overview/shared/controller/Nav"),r=h("overview/desktop/input/Wheel"),g=h("overview/desktop/input/Keyboard"),t=h("overview/desktop/input/Click"),d=h("overview/shared/clip/Tween"),e=h("overview/shared/ComparisonChart");
var j=h("performance/desktop/HeightMargin");var p=[{selector:"processor-chart",pausePoint:10},{selector:"memory-chart",pausePoint:13},{selector:"graphics-chart",pausePoint:17},{selector:"storage-chart",pausePoint:19}];
var a=null;function n(u){b.call(this);this.introcontainer=document.getElementById("introcontainer");
this.videocontainer=document.getElementById("videocontainer");this.stillcontainer=document.getElementById("stillcontainer");
this.panelcontainer=document.getElementById("panelcontainer");i=i();o=o();this.touch="ontouchstart" in window;
this.timeline=this.convertSectionsToClips(i);this.introContainer=new k(this.introcontainer,u.intro,o);
this.mainContainer=new k(this.videocontainer,u.main,this.timeline.clips);this.curtain=this.createFadeCurtain();
this.preventTouchDefault=this.preventTouchDefault.bind(this);document.addEventListener("touchstart",this.preventTouchDefault);
this.revertToStaticDelay=10000;this.revertToStatic=this.revertToStatic.bind(this);
this.revertToStaticTimeout=window.setTimeout(this.revertToStatic,this.revertToStaticDelay);
this.dynamic=true;this.introContainer.load().then(function(){window.clearTimeout(this.revertToStaticTimeout);
this.initializeInitialStill();this.resizeFluidAreas();var v=document.querySelector("#hero .placeholder-container.heading");
this.heightMargin=new j(v,v,["9.5%",0,0,0]);if(this.introContainer.clipController&&this.introContainer.clipController._mediaTimer&&this.introContainer.clipController._mediaTimer._video){this.introContainer.clipController._mediaTimer._video.addEventListener("ended",function(){if(this.introContainer.clipController.currentTime<this.introContainer.clipController.duration){this.introContainer.clipController._update(null,true)
}}.bind(this))}this.introContainer.clipController.on("ended",function(){this.cleanUpInitialStill();
this.mainContainer.load().then(this.initMain.bind(this))}.bind(this));this.introContainer.play()
}.bind(this));window.app=this}n.prototype=new b();n.prototype.constructor=n;n.prototype.revertToStatic=function(){var v=document.documentElement;
var u=document.body;var w=document.getElementById("wrapper");this.dynamic=false;
if(this.uiController){this.uiController.disableInput()}v.classList.remove("enabled");
v.classList.remove("overflow");u.id="static";this.setupStaticCharts()};n.prototype.resizeFluidAreas=function(w,v){var u;
this.resizeContainers();this.resizeCanvas();u=this.getVideoHeight();this.resizePlaceholders(u);
this.resizeCallouts(u);this.resizeBottomContainers();if(this.heightMargin){this.heightMargin.resize()
}if(this.resizeDebounceTimeout){clearTimeout(this.resizeDebounceTimeout)}if(!v){this.resizeDebounceTimeout=setTimeout(this.resizeFluidAreas.bind(this,null,true),250)
}};n.prototype.getVideoHeight=function(){var w=videocontainer.querySelector("*")||introcontainer.querySelector("*");
var v=w.getBoundingClientRect();var u=v.height;return u};n.prototype.resizeContainers=function(){var u=window.innerHeight;
var x=window.innerWidth;var A=this.videocontainer;var v=this.introcontainer;var z=this.stillcontainer;
var y=this.panelcontainer;var w=A.querySelector("*")||v.querySelector("*");var B,D,E;
if(!w){return false}if(u<583){E="495px"}else{if(u<750){var C=750-((Math.abs(u-750)*1.52));
E=C+"px"}else{E="100%"}}z.style.height=E;v.style.height=E;A.style.height=E};n.prototype.resizeCanvas=function(){var v;
var u=this.videocontainer.querySelector("canvas")||this.introcontainer.querySelector("canvas");
if(u){v=videocontainer.getBoundingClientRect().height;u.style.width=v*(u.width/u.height)+"px"
}};n.prototype.resizeBottomContainers=function(){var u=this.panelcontainer.querySelectorAll(".bottom-container");
[].forEach.call(u,function(v){var x=v.querySelector(".copy");var w;if(x!==null){w=Math.round(x.getBoundingClientRect().height);
v.style.minHeight=w+"px"}})};n.prototype.resizeCallouts=function(u){var v=this.panelcontainer.querySelectorAll(".callout");
[].forEach.call(v,function(D){var G=0;var L=496;var A=0.0013;var H=D.querySelector(".bars-container");
var M=D.querySelector(".mid");var w=q(D,"placeholder-container");var K=D.querySelector(".label");
var N=Math.round(M.getBoundingClientRect().height);var B=parseFloat(w.getAttribute("data-height-ratio"));
var C=parseFloat(w.getAttribute("data-min-top"));var E=parseFloat(w.getAttribute("data-top"));
var x=C/L;var J=u*B;var y,z,I;if(H!==null){I=K.height;H.style.height=N-I+"px"}if(!w.classList.contains("true-center")){if(window.innerHeight<750){var F=50-((Math.abs(window.innerHeight-750)*0.29));
if(F<0){F=0}y=F}else{y=(u*x)*(u*A)}if(y<E){y=E}z=(u*B)-(y+y*0.3);D.style.top=y+"px";
D.style.height=z+"px"}else{D.style.top="0px";D.style.height=J+"px"}})};n.prototype.resizePlaceholders=function(u){var v=this.panelcontainer.querySelectorAll(".placeholder-container");
[].forEach.call(v,function(w){var K=496;var A=0.0013;var L=185;var B=w.querySelector(".placeholder-inner");
var E=parseFloat(w.getAttribute("data-min-top"));var J=parseFloat(w.getAttribute("data-top"));
var x=E/K;var D=parseFloat(w.getAttribute("data-height-ratio"));var F=parseFloat(w.getAttribute("data-width-ratio"));
var G=w.getAttribute("data-width-ratio-narrow");var I,H,C,y,z,M,N;if(G){G=parseFloat(G)
}if(isNaN(x)||isNaN(D)||isNaN(F)){return}if(u<K){C=E}else{C=u*x}I=u*D;H=u*F;if(w.classList.contains("hero")){x=(E/(u+L));
C=u*x;w.style.top=C+"px"}if(C<J){C=J}if(w.classList.contains("static-top")){w.style.top=E+"px"
}else{w.style.top=C+"px"}B.style.width=H+"px";B.style.height=I+"px"})};n.prototype.getMidVideoY=function(){var u,w;
var v=Math.round(document.getElementById("change").querySelector(".copy").getBoundingClientRect().height);
return(document.documentElement.clientHeight-v)*0.07};n.prototype.applyDynamicTranslation=function(u){var w=this.getMidVideoY();
var v=AC.Environment.Feature.cssPropertyAvailable("transition");if(v||u){AC.Element.setVendorPrefixStyle(this.videocontainer,"transform","translate3d(0,"+w+"px,0)");
AC.Element.setVendorPrefixStyle(this.stillcontainer,"transform","translate3d(0,"+w+"px,0)")
}else{this.applyRuntimeTween(w)}};n.prototype.getTranslateValues=function(A,w){var y=this.mainContainer.clipController.playbackRate;
var v=185;var z,x,u;if(A===0&&w===1){u={from:v,to:this.getMidVideoY()}}else{if(A===1&&w===0){u={from:this.getMidVideoY(),to:v}
}else{if(A===1&&w===2){u={from:this.getMidVideoY(),to:0}}else{if(A===2&&w===1){u={from:0,to:this.getMidVideoY()}
}}}}return u};n.prototype.applyRuntimeTween=function(w){var z=new d("#videocontainer",1.5,[{property:"translate2d",axis:"y",from:w.from,to:w.to,units:"px"}]);
var u=new d("#stillcontainer",1.5,[{property:"translate2d",axis:"y",from:w.from,to:w.to,units:"px"}]);
var y=z.duration;var A=null;var A,v,y;function x(B){var C=(v/y)*y;if(!A){A=B}v=(B-A)/1000;
z.tween(C);u.tween(C);if(v<y){requestAnimationFrame(x)}}window.requestAnimationFrame(x)
};n.prototype.setupMoveableSeekable=function(){function C(E){E.classList.add("transition")
}function D(E){E.classList.remove("transition")}function w(E){E.classList.add("lowered")
}function A(E){E.classList.remove("lowered")}function u(E){AC.Element.setVendorPrefixStyle(E,"transform","")
}var z=this.videocontainer;var y=this.stillcontainer;var v=this.introcontainer;
var x=[z,y,v];var B=AC.Environment.Feature.cssPropertyAvailable("transition");this.sectionController.on("seek",function(E){if(E.to===0){if(E.from!==1||E.from!==2){x.forEach(u)
}x.forEach(D);x.forEach(w)}else{if(E.to===1&&E.from!==2){x.forEach(w);setTimeout(function(){x.forEach(C)
},10);this.applyDynamicTranslation(true)}else{x.forEach(D);x.forEach(A);x.forEach(u)
}}}.bind(this));this.sectionController.on("pauseexit:0",function(){var F=app.mainContainer.clipController._mediaTimer._forwardsVideo;
var G=this.touch;var E=function(){this.applyDynamicTranslation();x.forEach(C)}.bind(this);
if(B){E()}else{this.applyRuntimeTween(this.getTranslateValues(0,1))}}.bind(this));
this.sectionController.on("pauseexit:1",function(E){if(E.to===2){if(B){x.forEach(A);
x.forEach(u)}else{this.applyRuntimeTween(this.getTranslateValues(1,2))}}else{if(E.to===0){if(B){x.forEach(u)
}else{this.applyRuntimeTween(this.getTranslateValues(1,0))}}}}.bind(this));this.sectionController.on("pauseenter:1",function(E){z.classList.remove("delayed-transition");
z.classList.add("transition")});this.sectionController.on("pauseexit:2",function(E){if(E.to===1){if(B){x.forEach(w);
z.classList.add("delayed-transition");this.applyDynamicTranslation()}else{window.setTimeout(function(){this.applyRuntimeTween(this.getTranslateValues(2,1))
}.bind(this),1000)}}else{x.forEach(D)}}.bind(this))};n.prototype.setupEnd=function(){var z=app.sectionController._pauseTimeline.length-1;
var y=this.sectionController.seek.bind(this.sectionController,0);var x=document.querySelector(".footer-wrapper, #ac-globalfooter");
var w=document.querySelector(".sosumi, .ac-gf-sosumi");var v=document.querySelector(".productnav");
var u=function(){this.uiController.disableInput();document.documentElement.classList.remove("overflow");
x.classList.add("show");w.classList.add("show")}.bind(this);this.sectionController.on("pauseenter:"+z,u);
this.mainContainer.clipController.on("ended",u);this.sectionController.on("pauseexit:"+z,function(){x.classList.remove("show");
w.classList.remove("show")});this.sectionController.on("seek",function(A){if(A.to>0){v.classList.add("enabled")
}if(A.from===z){this.uiController.enableInput();this.videocontainer.classList.remove("transition");
this.stillcontainer.classList.remove("transition")}}.bind(this))};n.prototype.setupResizeEvents=function(){var u=this.applyDynamicTranslation.bind(this);
var v=this.resizeFluidAreas.bind(this);this.sectionController.on("pauseenter:1",function(){window.addEventListener("resize",u)
}.bind(this));this.sectionController.on("pauseexit:1",function(){window.removeEventListener("resize",u)
}.bind(this));window.addEventListener("resize",v)};n.prototype.setupVideoCrossover=function(){var u;
var v=function(){clearTimeout(u);this.videocontainer.style.display="block";this.introcontainer.style.display="none"
};app.sectionController.on("pauseexit:0",v.bind(this));u=setTimeout(v.bind(this),1200)
};n.prototype.setupCaret=function(){var u=document.getElementById("hero").querySelector(".caret .button");
u.addEventListener("click",this.sectionController.seek.bind(this.sectionController,2));
u.addEventListener("keydown",function(v){if(v.keyCode===13){this.sectionController.seek(2)
}}.bind(this))};n.prototype.preventTouchDefault=function(u){u.preventDefault()};
n.prototype.setupStaticCharts=function(){var u="can-animate";p.forEach(function(w){var v=new e(w.selector);
v.visitorEngaged()})};n.prototype.setupForceCurrentTime=function(){this.sectionController.on("pauseenter",function(v){var u=(v.index!=null)?v.index:v.to;
var w=this._pauseTimeline[u];setTimeout(function(){var x=app.mainContainer.clipController;
app.mainContainer.clipController.currentTime=w},200)}.bind(this.sectionController))
};n.prototype.initializeInitialStill=function(){this.stillcontainer.querySelector(".still_1").classList.add("initial")
};n.prototype.cleanUpInitialStill=function(){this.stillcontainer.querySelector(".still_1").classList.remove("initial")
};n.prototype.initMain=function(u,w){if(this.initialized){return}this.sectionController=new f(this.mainContainer.clipController,this.timeline.events.pauses,i);
this.uiController=new c(this.sectionController);if(this.dynamic){this.navController=new m(this.sectionController,i);
this.wheelInputController=new r(this.uiController);this.keyboardInputController=new g(this.uiController);
this.clickInputController=new t(this.uiController)}this.setupEnd();this.addTimelineEvents(i);
this.setupMoveableSeekable();this.setupResizeEvents();this.setupCaret();this.setupVideoCrossover();
this.addNextCarets();this.setupFocusEvents();this.sectionController.on("pauseenter",this.enterAnalytics.bind(this));
this.sectionController.on("pauseexit",this.exitAnalytics.bind(this));window.addEventListener("beforeunload",function(){this.analyzer.flush()
}.bind(this));this.mainContainer.clipController.currentTime=0;this.sectionController.trigger("pauseenter:0");
this.sectionController._update();if(l){this.setupForceCurrentTime();this.setupStaticCharts()
}this.sectionController.on("pauseexit",function(x){if(x.from===0){document.querySelector(".productnav").classList.add("enabled")
}else{if(x.to===0){document.querySelector(".productnav").classList.remove("enabled")
}}});var v=document.getElementById("sp-searchtext");if(v){v.addEventListener("focus",function(x){app.uiController.disableInput()
});v.addEventListener("blur",function(x){app.uiController.enableInput()})}this.sectionController.on("pauseexit",this.resizeFluidAreas.bind(this));
this.sectionController.on("pauseenter",this.resizeFluidAreas.bind(this));this.sectionController.on("seek",this.resizeFluidAreas.bind(this));
this.initialized=true};return n});AC.define("overview/desktop/settings-desktop",[],function(){var b="mp4";
var a="jpg";return{intro:[{type:"video",file:"video/macpro_intro_desktop."+b,stills:{1:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00090.jpg"}},{type:"flow",manifestFileName:"macpro_intro_flow_manifest.",flowPattern:"macpro_intro_flow_###.",manifest:window.assetPath+"flow/desktop/intro2/",diffDir:window.assetPath+"flow/desktop/intro2/",flowKeyFrame:window.assetPath+"flow/desktop/intro/macpro_intro_flow_keyframe."+a,flowEndFrame:window.assetPath+"flow/desktop/intro/macpro_intro_flow_endframe."+a,fps:30}],main:[{type:"video",file:"video/macpro_main_desktop."+b,stills:{1:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00090.jpg",2:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00120.jpg",3:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00210.jpg",4:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00330.jpg",5:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00420.jpg",6:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00540.jpg",7:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00600.jpg",8:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00720.jpg",9:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00930.jpg",10:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_01110.jpg",13:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_01260.jpg",14:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_01320.jpg",15:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_01500.jpg"}},{type:"flow",manifestFileName:"macpro_main_flow_manifest.",flowPattern:"macpro_main_flow_###.",manifest:window.assetPath+"flow/desktop/main2/",diffDir:window.assetPath+"flow/desktop/main2/",fps:30,flowKeyFrame:window.assetPath+"flow/desktop/main/macpro_main_flow_keyframe."+a,flowEndFrame:window.assetPath+"flow/desktop/main/macpro_main_flow_endframe."+a,stills:{1:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00090.jpg",2:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00120.jpg",3:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00210.jpg",4:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00330.jpg",5:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00420.jpg",6:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00540.jpg",7:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00600.jpg",8:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00720.jpg",9:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_00930.jpg",10:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_01110.jpg",13:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_01260.jpg",14:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_01320.jpg",15:"/OrbitusRobotics/v/mac-pro/home/b/images/stills/desktop/macpro_01500.jpg"}}]}
});AC.define("overview/desktop/app/Loader",["require","overview/desktop/app/iPad","overview/desktop/settings-ipad","overview/desktop/app/Desktop","overview/desktop/settings-desktop","overview/shared/ComparisonChart"],function(g){function h(l){return l.match(/AppleWebKit/i)
}function b(l){return h(l)&&l.match(/iPad/i)}function d(l){return l.match(/iPhone/i)
}function f(l){return l.match(/iPod/i)}function k(l){return h(l)&&l.match(/Mobile/i)&&!b(l)
}function j(l){return k(l)||b(l)?parseFloat(l.match(/os ([\d_]*)/i)[1].replace("_",".")):0
}var a=navigator.userAgent;var i=AC.Environment.Feature.canvasAvailable();var e=i&&!a.match(/Android/i);
var c={dynamic:function(){var o=navigator.userAgent;var p=o.match(/AppleWebKit/i);
var l=p&&o.match(/iPad/i)&&j(o)>5.9;var n=document.documentElement;if(l){var r=g("overview/desktop/app/iPad");
var m=g("overview/desktop/settings-ipad");document.body.id="ipad";document.body.classList.add("intro-hidden");
document.querySelector("#wrapper").classList.add("enabled");window.app=new r(m)
}else{var q=g("overview/desktop/app/Desktop");var m=g("overview/desktop/settings-desktop");
document.body.id="desktop";document.body.style.display="block";window.app=new q(m)
}n.classList.add("enabled");n.classList.add("overflow")},fallback:function(){var l=g("overview/shared/ComparisonChart");
var m=new l("processor-chart");var n=new l("memory-chart");var p=new l("graphics-chart");
var o=new l("storage-chart");document.body.style.display="block";m.visitorEngaged();
n.visitorEngaged();p.visitorEngaged();o.visitorEngaged()}};return{load:function(){c[e?"dynamic":"fallback"].call(this)
}}});AC.define("overview/shared/EndLinkTracker",["require"],function(a){var b="ontouchstart" in window?"touchstart":"mousedown";
var f=AC.Element.select(".cta.performance");var e=AC.Element.select(".cta.tech-specs");
var d=AC.Element.addEventListener;function c(g){return function(j){var h={};var i=AC.Event.target(j);
h.prop3=(g+"@"+AC.Tracking.pageName()).toLowerCase();AC.Tracking.trackClick(h,this,"o",h.prop3)
}}return{track:function(){s.useForcedLinkTracking=true;d(f,b,c("performance"));
d(e,b,c("tech specs"))}}});AC.define("overview/desktop/main",["require","overview/desktop/app/Loader","overview/shared/EndLinkTracker"],function(a){window.DEBUG=false;
var c=a("overview/desktop/app/Loader");var b=a("overview/shared/EndLinkTracker");
b.track();c.load()});