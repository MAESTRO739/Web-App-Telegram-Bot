(function(){"use strict";var e={4834:function(e,n,t){var r=t(9242),o=t(3396);function u(e,n,t,r,u,i){const a=(0,o.up)("HomePage");return(0,o.wg)(),(0,o.j4)(a)}const i=(0,o._)("h1",null,"Home Page",-1),a=[i];function c(e,n,t,r,u,i){return(0,o.wg)(),(0,o.iD)("div",null,a)}var f={name:"HomePage"},s=t(89);const l=(0,s.Z)(f,[["render",c]]);var m=l,p={name:"App",components:{HomePage:m},mounted(){this.setTelegramTheme()},methods:{setTelegramTheme(){if(window.Telegram.WebApp){const e=window.Telegram.WebApp.themeParams,n=this.isDarkTheme(e.bg_color);this.setTheme(n?"dark":"light")}},setTheme(e){document.documentElement.setAttribute("data-theme",e)},isDarkTheme(e){const n=["dark","#000000"];return n.includes(e)}}};const h=(0,s.Z)(p,[["render",u]]);var d=h,v=t(2483);const g=[{path:"/",name:"HomePage",component:m}],b=(0,v.p7)({history:(0,v.PO)("/Web-App-Telegram-Bot/"),routes:g});var w=b;(0,r.ri)(d).use(w).use(w).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return e[r].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,u){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],u=e[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,u<i&&(i=u));if(a){e.splice(s--,1);var f=o();void 0!==f&&(n=f)}}return n}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[r,o,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,u,i=r[0],a=r[1],c=r[2],f=0;if(i.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(n&&n(r);f<i.length;f++)u=i[f],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(s)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(4834)}));r=t.O(r)})();
//# sourceMappingURL=app.af158d78.js.map