!function(r,e){"object"==typeof exports?module.exports=exports=e(require("./core.js")):"function"==typeof define&&define.amd?define(["./core"],e):e(r.CryptoJS)}(this,function(r){return function(){function e(r,e,t){for(var a=[],o=0,i=0;i<e;i++)if(i%4){var f=t[r.charCodeAt(i-1)]<<i%4*2,c=t[r.charCodeAt(i)]>>>6-i%4*2;a[o>>>2]|=(f|c)<<24-o%4*8,o++}return n.create(a,o)}var t=r,a=t.lib,n=a.WordArray,o=t.enc;o.Base64={stringify:function(r){var e=r.words,t=r.sigBytes,a=this._map;r.clamp();for(var n=[],o=0;o<t;o+=3)for(var i=e[o>>>2]>>>24-o%4*8&255,f=e[o+1>>>2]>>>24-(o+1)%4*8&255,c=e[o+2>>>2]>>>24-(o+2)%4*8&255,s=i<<16|f<<8|c,h=0;h<4&&o+.75*h<t;h++)n.push(a.charAt(s>>>6*(3-h)&63));var p=a.charAt(64);if(p)for(;n.length%4;)n.push(p);return n.join("")},parse:function(r){var t=r.length,a=this._map,n=this._reverseMap;if(!n){n=this._reverseMap=[];for(var o=0;o<a.length;o++)n[a.charCodeAt(o)]=o}var i=a.charAt(64);if(i){var f=r.indexOf(i);-1!==f&&(t=f)}return e(r,t,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),r.enc.Base64});