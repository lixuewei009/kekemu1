(function(e){function t(t){for(var r,a,u=t[0],i=t[1],d=t[2],f=0,s=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(s.length)s.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-191fb4fc":"b48a5c52","chunk-2d0aba9c":"740b3b22","chunk-2d0c1074":"cc39ca23","chunk-2d21d4fb":"32f5211a","chunk-2d229803":"a16b1838","chunk-2d230cb3":"0edf93a8","chunk-4807c898":"9ffd9f16","chunk-72b36efa":"dd15e41e","chunk-fd872b5e":"e3b6c530"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-191fb4fc":1,"chunk-4807c898":1,"chunk-72b36efa":1,"chunk-fd872b5e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-191fb4fc":"c272ab1f","chunk-2d0aba9c":"31d6cfe0","chunk-2d0c1074":"31d6cfe0","chunk-2d21d4fb":"31d6cfe0","chunk-2d229803":"31d6cfe0","chunk-2d230cb3":"31d6cfe0","chunk-4807c898":"7b706af0","chunk-72b36efa":"584001c7","chunk-fd872b5e":"a22df8f4"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var d=c[u],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===r||f===o))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){d=s[u],f=d.getAttribute("data-href");if(f===r||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],l.parentNode.removeChild(l),n(c)},l.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var s=new Error;d=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var l=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=n("bc3a"),o=n.n(a),c=n("f825"),u=n.n(c),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowLoading,expression:"isShowLoading"}],staticClass:"global-loading"},[n("Spin",{attrs:{size:"large"}})],1)],1)},d=[],f=n("5530"),s=n("2f62"),l={name:"App",data:function(){return{keepAliveData:["manage"]}},computed:Object(f["a"])({},Object(s["b"])(["isShowLoading"]))},h=l,p=(n("b56b"),n("2877")),m=Object(p["a"])(h,i,d,!1,null,null,null),b=m.exports,g=n("2909");r["default"].use(s["a"]);var v=new s["a"].Store({state:{isShowLoading:!1,menuItems:[{name:"home",size:18,type:"md-home",text:"主页"},{name:"other",size:18,type:"ios-egg-outline",text:"单独的路由"},{text:"二级菜单",type:"ios-paper",children:[{type:"ios-grid",name:"t1",text:"表格"},{text:"三级菜单",type:"ios-paper",children:[{type:"ios-notifications-outline",name:"msg",text:"查看消息"},{type:"md-lock",name:"password",text:"修改密码"},{type:"md-person",name:"userinfo",text:"基本资料"}]}]}]},mutations:{setMenus:function(e,t){e.menuItems=Object(g["a"])(t)},setLoading:function(e,t){e.isShowLoading=t}}}),k=v,y=n("a18c"),w=(n("f8ce"),n("c7eb")),O=n("1da1");n("14d9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("b0c0");function j(e){var t=[],r=[];return t.push({path:"/",component:function(){return n.e("chunk-191fb4fc").then(n.bind(null,"86d6"))},children:r}),e.forEach((function(e){S(r,e)})),t.push({path:"*",redirect:"/404"}),t}function S(e,t){t.name?y["a"][t.name]&&e.push(y["a"][t.name]):t.children&&t.children.forEach((function(t){S(e,t)}))}var x=n("ed08"),E=!1;y["b"].beforeEach(function(){var e=Object(O["a"])(Object(w["a"])().mark((function e(t,n,r){var a;return Object(w["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(document.title=Object(x["a"])(t.meta.title),c["LoadingBar"].start(),localStorage.getItem("token"))if("/login"===t.path)r({path:"/"});else if(E)r();else try{a=j(k.state.menuItems),y["b"].addRoutes(a),E=!0,r({path:t.path||"/"})}catch(n){Object(x["b"])(),r("/login?redirect=".concat(t.path))}else E=!1,"/login"===t.path?r():r("/login?redirect=".concat(t.path));case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),y["b"].afterEach((function(){c["LoadingBar"].finish()})),r["default"].config.productionTip=!1,r["default"].use(u.a),r["default"].prototype.$axios=o.a,new r["default"]({el:"#app",router:y["b"],store:k,render:function(e){return e(b)}})},"9df0":function(e,t,n){},a18c:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return d}));n("d3b7"),n("3ca3"),n("ddb0");var r=n("2b0e"),a=n("8c4f");r["default"].use(a["a"]);var o=[{path:"/login",name:"login",meta:{title:"登录"},component:function(){return n.e("chunk-4807c898").then(n.bind(null,"578a"))}},{path:"/other",name:"other",meta:{title:"单独的路由"},component:function(){return n.e("chunk-2d21d4fb").then(n.bind(null,"d180"))}},{path:"/404",name:"404",meta:{title:"404"},component:function(){return n.e("chunk-fd872b5e").then(n.bind(null,"7746"))}},{path:"/",redirect:"/home"}],c={home:{path:"home",name:"home",meta:{title:"主页"},component:function(){return n.e("chunk-72b36efa").then(n.bind(null,"bb51"))}},t1:{path:"t1",name:"t1",meta:{title:"表格"},component:function(){return n.e("chunk-2d0aba9c").then(n.bind(null,"15df"))}},password:{path:"password",name:"password",meta:{title:"修改密码"},component:function(){return n.e("chunk-2d0c1074").then(n.bind(null,"43fe"))}},msg:{path:"msg",name:"msg",meta:{title:"通知消息"},component:function(){return n.e("chunk-2d229803").then(n.bind(null,"de5a"))}},userinfo:{path:"userinfo",name:"userinfo",meta:{title:"用户信息"},component:function(){return n.e("chunk-2d230cb3").then(n.bind(null,"ee96"))}}},u=function(){return new a["a"]({routes:o})},i=u();function d(){var e=u();i.matcher=e.matcher}t["b"]=i},b56b:function(e,t,n){"use strict";n("9df0")},ed08:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n("a18c");function a(){localStorage.setItem("token",""),localStorage.setItem("userImg",""),localStorage.setItem("userName",""),Object(r["c"])()}var o="vue-admin-template";function c(e){return e?"".concat(o," - ").concat(e):"".concat(o)}}});
//# sourceMappingURL=app.99c4a5bd.js.map