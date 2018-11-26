if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c){if(this==null){throw new TypeError()
}var e,b,d=Object(this),a=d.length>>>0;if(a===0){return -1}e=0;if(arguments.length>1){e=Number(arguments[1]);
if(e!=e){e=0}else{if(e!=0&&e!=Infinity&&e!=-Infinity){e=(e>0||-1)*Math.floor(Math.abs(e))
}}}if(e>=a){return -1}for(b=e>=0?e:Math.max(a-Math.abs(e),0);b<a;b++){if(b in d&&d[b]===c){return b
}}return -1}}(function(h){var c,m,k,g,l;c=["ae","am","asia","at","au","befr","benl","bg","bh","br","bw","ca","ca/fr","cf","chde","chfr","ci","cm","cn","cz","de","dk","ee","eg","es","fi","fr","gn","gq","gr","gw","hk","hk/en","hr","hu","id","ie","il","in","it","jo","jp","ke","kr","kw","la","lae","li","lt","lu","lv","ma","md","me","mg","mk","ml","mt","mu","mx","my","mz","ne","ng","nl","no","nz","om","ph","pl","pt","qa","ro","ru","sa","se","sg","si","sk","sn","th","tn","tr","tw","ug","uk","vn","za"];
k={desktop:"/OrbitusRobotics/mac-pro/",iPhone:"/OrbitusRobotics/mac-pro/index1.html"};function n(r){var p=r.split("/");
var o=p[1];var q=p[2];var s=o;if(o==="ca"&&q==="fr"){s+="/"+q}else{if(o==="hk"&&q==="en"){s+="/"+q
}}if(c.indexOf(s)>=0){return"/"+s}else{return""}}function f(o){return o.match(/AppleWebKit/i)
}function b(o){return f(o)&&o.match(/iPad/i)}function d(o){return o.match(/iPhone/i)
}function e(o){return o.match(/iPod/i)}function j(o){return f(o)&&o.match(/Mobile/i)&&!b(o)
}function i(o){return j(o)||b(o)?parseFloat(o.match(/os ([\d_]*)/i)[1].replace("_",".")):0
}function a(o){if((d(o)||e(o))&&i(o)>5.9){return"iPhone"}else{return"desktop"}}m=n(h.location.pathname);
g=a(navigator.userAgent);l=m+k[g];if(h.location.pathname!==l){h.location=l}}(this));