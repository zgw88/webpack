!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(8),n(7),n(3),n(4)},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=u[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(d(i.parts[o],t))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(d(i.parts[o],t));u[i.id]={id:i.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},i=0;i<e.length;i++){var r=e[i],o=r[0],a=r[1],l=r[2],s=r[3],d={css:a,media:l,sourceMap:s};n[o]?n[o].parts.push(d):t.push(n[o]={id:o,parts:[d]})}return t}function o(e,t){var n=g(),i=y[y.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function d(e,t){var n,i,r;if(t.singleton){var o=v++;n=b||(b=l(t)),i=c.bind(null,n,o,!1),r=c.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),i=p.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),i=f.bind(null,n),r=function(){a(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}function c(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,i=t.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var u={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,v=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return i(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var l=n[a],s=u[l.id];s.refs--,o.push(s)}if(e){var d=r(e);i(d,t)}for(var a=0;a<o.length;a++){var s=o[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){!function(e,t){function n(){var t=o.getBoundingClientRect().width;t/s>540&&(t=540*s);var n=t/10;o.style.fontSize=n+"px",c.rem=e.rem=n}var i,r=e.document,o=r.documentElement,a=r.querySelector('meta[name="viewport"]'),l=r.querySelector('meta[name="flexible"]'),s=0,d=0,c=t.flexible||(t.flexible={});if(a){console.warn("将根据已有的meta标签来设置缩放比例");var f=a.getAttribute("content").match(/initial\-scale=([\d\.]+)/);f&&(d=parseFloat(f[1]),s=parseInt(1/d))}else if(l){var p=l.getAttribute("content");if(p){var u=p.match(/initial\-dpr=([\d\.]+)/),h=p.match(/maximum\-dpr=([\d\.]+)/);u&&(s=parseFloat(u[1]),d=parseFloat((1/s).toFixed(2))),h&&(s=parseFloat(h[1]),d=parseFloat((1/s).toFixed(2)))}}if(!s&&!d){var m=(e.navigator.appVersion.match(/android/gi),e.navigator.appVersion.match(/iphone/gi)),g=e.devicePixelRatio;s=m?g>=3&&(!s||s>=3)?3:g>=2&&(!s||s>=2)?2:1:1,d=1/s}if(o.setAttribute("data-dpr",s),!a)if(a=r.createElement("meta"),a.setAttribute("name","viewport"),a.setAttribute("content","initial-scale="+d+", maximum-scale="+d+", minimum-scale="+d+", user-scalable=no"),o.firstElementChild)o.firstElementChild.appendChild(a);else{var b=r.createElement("div");b.appendChild(a),r.write(b.innerHTML)}e.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===r.readyState?r.body.style.fontSize=12*s+"px":r.addEventListener("DOMContentLoaded",function(){r.body.style.fontSize=12*s+"px"},!1),n(),c.dpr=e.dpr=s,c.refreshRem=n,c.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},c.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},function(e,t){!function(){var e="@charset \"utf-8\";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}ins,a{text-decoration:none}",t=document.createElement("style");if(document.getElementsByTagName("head")[0].appendChild(t),t.styleSheet)t.styleSheet.disabled||(t.styleSheet.cssText=e);else try{t.innerHTML=e}catch(n){t.innerText=e}}()},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,"*{margin:0;padding:0}a{text-decoration:none}li,ul{list-style:none}.container,body,html{height:100%;width:100%}body,html{font-family:Microsoft YaHei}.container,.head{width:100%}.head{height:auto}.head .title{width:100%;background:#ab1b1a;text-align:center;line-height:1.34375rem;position:relative;height:1.34375rem}.head .title h2{color:#fff;font-size:.5625rem;display:inline-block}.head .title .shopcart{width:1.64063rem;height:.8125rem;position:absolute;right:.3125rem;top:.3125rem;border-radius:15px;box-shadow:0 0 7px 1px rgba(0,0,0,.7)}.footer{width:100%;height:1.53125rem;background:#484850;position:absolute;bottom:0;z-index:3}.footer ul{display:flex;justify-content:space-around}.footer ul li{color:#fff;text-align:center;margin-top:.15625rem;font-size:.40625rem}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,"*{margin:0;padding:0}a{text-decoration:none}li,ul{list-style:none}.container,body,html{height:100%;width:100%}body,html{font-family:Microsoft YaHei}.container,.head{width:100%}.head{height:auto}.head .title{width:100%;background:#ab1b1a;text-align:center;line-height:1.34375rem;position:relative;height:1.34375rem}.head .title h2{color:#fff;font-size:.5625rem;display:inline-block}.head .title .shopcart{width:1.64063rem;height:.8125rem;background:url("+n(9)+') no-repeat 50%;position:absolute;right:.3125rem;top:.3125rem;border-radius:15px;box-shadow:0 0 7px 1px rgba(0,0,0,.7)}.head .logo{width:100%;height:.92188rem;background:#9a9fa5;position:relative;align-items:center;justify-content:center;display:flex}.head .logo img{padding:0 .21875rem}.head .logo:after{content:"";height:0;width:0;border-bottom:.125rem solid #fff;border-left:.125rem solid transparent;border-right:.125rem solid transparent;position:absolute;top:.80375rem;left:.3125rem}.content{width:100%;height:10rem;background:#f3f4f6;position:relative;padding-top:.625rem;z-index:1}.content ul{display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center}.content ul li{width:3.82813rem;height:5.3125rem;position:relative;margin-bottom:.23438rem}.content ul li .img img{border:1px solid #ccc;width:100%;height:100%}.content ul li .img:before{left:1.3375rem;top:2.65rem;box-shadow:0 0 2px 5px rgba(0,0,0,.5);transform:skew(31deg) rotate(3deg)}.content ul li .img:after,.content ul li .img:before{content:"";position:absolute;width:2.03125rem;height:1.15625rem;background:transparent;z-index:-1}.content ul li .img:after{left:.54063rem;top:2.63438rem;box-shadow:0 0 2px 6px rgba(0,0,0,.5);transform:skew(-31deg) rotate(-3deg)}.content ul li .desc{text-align:center;font-size:.46875rem;margin:.23438rem 0}.content ul li .price{color:red;font-size:.46875rem}.content ul li .price del{color:silver;float:right}.footer{width:100%;height:1.53125rem;background:#484850;position:absolute;bottom:0;z-index:3}.footer ul{display:flex;justify-content:space-around}.footer ul li{color:#fff;text-align:center;margin-top:.15625rem;font-size:.40625rem}.footer ul:after{content:"";width:2.03125rem;height:.07813rem;background:red;position:absolute;top:0;left:2.03125rem}',""])},function(e,t,n){var i=n(5);"string"==typeof i&&(i=[[e.id,i,""]]);n(2)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,n){var i=n(6);"string"==typeof i&&(i=[[e.id,i,""]]);n(2)(i,{});i.locals&&(e.exports=i.locals)},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAnCAIAAAD/1O2oAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI1NUY1RTUyOTUyRDExRTZBNzRCREUwOTlFNTcyNDZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI1NUY1RTUzOTUyRDExRTZBNzRCREUwOTlFNTcyNDZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjU1RjVFNTA5NTJEMTFFNkE3NEJERTA5OUU1NzI0NkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjU1RjVFNTE5NTJEMTFFNkE3NEJERTA5OUU1NzI0NkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Am4EqAAAMO0lEQVR42sxYa4ycVRk+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"}]);