(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"item-1"},i.a.createElement("div",null)),i.a.createElement("div",{className:"item-2"},i.a.createElement("div",null)),i.a.createElement("div",{className:"item-3"},i.a.createElement("div",null)),i.a.createElement("div",{className:"item-4"},i.a.createElement("div",null)),i.a.createElement("div",{className:"item-5"},i.a.createElement("div",null)),i.a.createElement("div",{className:"item-6"},i.a.createElement("div",null)),i.a.createElement("div",{className:"item-7"},i.a.createElement("div",null)),i.a.createElement("div",{className:"item-8"},i.a.createElement("div",null)),i.a.createElement("div",{className:"item-9"},i.a.createElement("div",null)))}},25:function(e,t,n){e.exports=n(36)},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(11),c=n.n(r),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=n(18),u=n(19),d=n(21),m=(n(34),n(8)),v=n(24),f=n.n(v),E=n(6),h={isReady:!1,items:null},p={searchQuery:"",filterLang:{value:[""]},filterCity:{value:[""]}},g=Object(m.c)({guides:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GUIDES":return Object(E.a)(Object(E.a)({},e),{},{items:t.payload,isReady:!0});case"SET_IS_READY":return Object(E.a)(Object(E.a)({},e),{},{isReady:t.payload});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUERY":return Object(E.a)(Object(E.a)({},e),{},{searchQuery:t.payload});case"SET_FILTER_L":return Object(E.a)(Object(E.a)({},e),{},{filterLang:t.payload});case"SET_FILTER_C":return Object(E.a)(Object(E.a)({},e),{},{filterCity:t.payload});default:return e}}}),w=Object(m.d)(g,Object(m.a)(f.a)),b=i.a.lazy((function(){return Promise.all([n.e(2),n.e(3)]).then(n.bind(null,492))}));c.a.render(i.a.createElement(u.a,{store:w},i.a.createElement(s.a,null,i.a.createElement(a.Suspense,{fallback:i.a.createElement(d.a,null)},i.a.createElement(b,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/guides-example",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/guides-example","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(t,e)}))}}()}},[[25,1,4]]]);
//# sourceMappingURL=main.6a6935e6.chunk.js.map