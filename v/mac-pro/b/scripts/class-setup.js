(function(b){var a=(function(){var f={mobile:"mobile",desktop:"desktop"};var d=navigator.userAgent,e=document.documentElement;
var c=f.desktop;return{initialize:function(){var g=e.className;e.className=g.replace("no-js","");
if(d&&this.isiPhone(d)&&this.iOSVersion(d)>=6&&typeof e.classList==="object"){e.classList.add(f.mobile);
e.classList.remove(f.desktop);c=f.mobile}},getExperience:function(){return c},isWebKit:function(g){return g.match(/AppleWebKit/i)
},isiPad:function(g){return this.isWebKit(g)&&g.match(/iPad/i)},isiPhone:function(g){return this.isWebKit(g)&&g.match(/iPhone/i)
},isiPod:function(g){return g.match(/iPod/i)},isMobile:function(g){return this.isWebKit(g)&&g.match(/Mobile/i)&&!this.isiPad(g)
},iOSVersion:function(g){return this.isMobile(g)||this.isiPad(g)?parseFloat(g.match(/os ([\d_]*)/i)[1].replace("_",".")):0
}}})();a.initialize();b.ClassNameSetup=a})(window);