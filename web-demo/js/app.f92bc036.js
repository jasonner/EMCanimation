(function(t){function e(e){for(var s,r,c=e[0],o=e[1],l=e[2],d=0,m=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"17cf":function(t,e,a){t.exports=a.p+"img/list2.e73e933b.png"},"1b89":function(t,e,a){},"1e1a":function(t,e,a){},2107:function(t,e,a){"use strict";a("5fe3")},"282e":function(t,e,a){t.exports=a.p+"img/btn.f7e358d8.png"},"2ae8":function(t,e,a){t.exports=a.p+"img/01.89454775.png"},"3d28":function(t,e,a){t.exports=a.p+"img/text-slogan.1e1ef79d.png"},"3d6f":function(t,e,a){},"47a3":function(t,e,a){t.exports=a.p+"img/text-slogan.d5dde81d.png"},5005:function(t,e,a){"use strict";a("eb7b")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],r=(a("9911"),a("18a0")),c=a.n(r),o={name:"App",data:function(){return{data:{title:"立骨巅峰 涵钙一生",desc:"第十八届钙素论坛 暨助力世界骨质疏松日",imgUrl:"https://oss.sxyweb.com.cn/2021/wj/jiyu0906/map-logo.png",link:"https://wxcore.forhoo.com.cn/21/wj/Message0906/#/index"}}},mounted:function(){var t=this;c.a.ready((function(){var e={link:t.data.link,imgUrl:t.data.imgUrl,title:t.data.title,desc:t.data.desc,success:function(){},cancel:function(){}};c.a.onMenuShareTimeline(e),c.a.onMenuShareAppMessage(e)}))},methods:{initWXlogin:function(t){var e=this;e.axios.get("GetUserWXInfo?callkey="+t).then((function(a){console.log(a),200==a.status?a.data.user?e.getKey():window.location.href="/lhwxlogin/WXlogin?callkey="+t:e.$message({message:"服务异常请稍后重试！",type:"warning"})}))},getKey:function(){var t=this;t.axios.get("jsapi?url="+window.location.href).then((function(e){console.log(e),200==e.status?t.initIMg(e.data):t.$message({message:"服务异常请稍后重试！",type:"warning"})}))},initIMg:function(t){console.log(t),c.a.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","checkJsApi","chooseImage","previewImage","uploadImage","downloadImage","getNetworkType","openLocation","getLocation"]})}}},l=o,u=(a("034f"),a("2877")),d=Object(u["a"])(l,i,n,!1,null,null,null),m=d.exports,f=a("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index-page"},[s("div",{attrs:{id:"particles-js"}},[s("canvas",{staticClass:"particles-js-canvas-el",staticStyle:{width:"100%",height:"100%"},attrs:{width:"1920",height:"1080"}}),t._m(0),t._m(1),s("div",{staticClass:"meteor-star"}),s("div",{staticClass:"meteor-star meteor-star-pink"}),s("div",{staticClass:"meteor-star meteor-star-blue"}),s("div",{staticClass:"Big-star1"}),s("div",{staticClass:"Big-star2"}),s("div",{staticClass:"Big-star3"}),t._m(2),s("div",{staticClass:"Accept-btn animate__animated animate__backInUp",on:{click:function(e){return t.goPage()}}},[s("img",{attrs:{src:a("282e"),alt:"",srcset:""}})])])])},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"middle-star1"},[s("img",{attrs:{src:a("2ae8"),alt:"",srcset:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"middle-star2"},[s("img",{attrs:{src:a("2ae8"),alt:"",srcset:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-tip animate__animated animate__zoomIn"},[s("img",{attrs:{src:a("e77e"),alt:"",srcset:""}})])}],v=(a("ac1f"),a("5319"),{data:function(){return{flag:null}},created:function(){var t=this;setTimeout((function(){t.initChange()}),1e3)},mounted:function(){},methods:{initChange:function(){console.log(111),particlesJS("particles-js",{particles:{number:{value:200,density:{enable:!0,value_area:800}},color:{value:["#fff","#ff4792"]},shape:{type:"circle",stroke:{width:0,color:"#fff"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!0}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:.8}},bubble:{distance:250,size:4,duration:2,opacity:1,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},goPage:function(){this.$router.replace("/list")}}}),h=v,b=(a("a147"),Object(u["a"])(h,p,g,!1,null,"e44271fa",null)),_=b.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index-page"},[t._m(0),t._m(1),t._m(2),s("div",{staticClass:"user-list"},[s("div",{on:{click:function(e){return t.goListDetail1()}}},[s("img",{attrs:{src:a("bbac")}})]),s("div",{on:{click:function(e){return t.goListDetail2()}}},[s("img",{attrs:{src:a("17cf")}})])]),s("div",{staticClass:"list3-user",on:{click:function(e){return t.goListDetail3()}}},[s("img",{attrs:{src:a("f6f7")}})])])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"particles-js"}},[s("canvas",{staticClass:"particles-js-canvas-el",staticStyle:{width:"100%",height:"100%"},attrs:{width:"1920",height:"1080"}}),s("div",{staticClass:"middle-star1"},[s("img",{attrs:{src:a("2ae8"),alt:"",srcset:""}})]),s("div",{staticClass:"middle-star2"},[s("img",{attrs:{src:a("2ae8"),alt:"",srcset:""}})]),s("div",{staticClass:"meteor-star"}),s("div",{staticClass:"meteor-star meteor-star-pink"}),s("div",{staticClass:"meteor-star meteor-star-blue"}),s("div",{staticClass:"Big-star1"}),s("div",{staticClass:"Big-star2"}),s("div",{staticClass:"Big-star3"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-slogan"},[s("img",{attrs:{src:a("47a3"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slogan-box"},[s("img",{attrs:{src:a("c24f"),alt:"",srcset:""}})])}],w={name:"",data:function(){return{}},created:function(){var t=this;setTimeout((function(){t.initChange()}),1e3)},mounted:function(){},methods:{initChange:function(){console.log(111),particlesJS("particles-js",{particles:{number:{value:200,density:{enable:!0,value_area:800}},color:{value:["#fff","#ff4792"]},shape:{type:"circle",stroke:{width:0,color:"#fff"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!0}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:.8}},bubble:{distance:250,size:4,duration:2,opacity:1,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},goListDetail1:function(){this.$router.replace("/listDetail1")},goListDetail2:function(){this.$router.replace("/listDetail2")},goListDetail3:function(){this.$router.replace("/listDetail3")}}},x=w,k=(a("5005"),Object(u["a"])(x,y,C,!1,null,"44b78f38",null)),$=k.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"listDetail1-page"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("div",{staticClass:"Accept-btn animate__animated animate__backInUp",on:{click:function(e){return t.goPage()}}},[s("img",{attrs:{src:a("282e"),alt:"",srcset:""}})])])},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"particles-js"}},[s("canvas",{staticClass:"particles-js-canvas-el",staticStyle:{width:"100%",height:"100%"},attrs:{width:"1920",height:"1080"}}),s("div",{staticClass:"middle-star1"},[s("img",{attrs:{src:a("2ae8"),alt:"",srcset:""}})]),s("div",{staticClass:"middle-star2"},[s("img",{attrs:{src:a("2ae8"),alt:"",srcset:""}})]),s("div",{staticClass:"meteor-star"}),s("div",{staticClass:"meteor-star meteor-star-pink"}),s("div",{staticClass:"meteor-star meteor-star-blue"}),s("div",{staticClass:"Big-star1"}),s("div",{staticClass:"Big-star2"}),s("div",{staticClass:"Big-star3"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-slogan"},[s("img",{attrs:{src:a("3d28"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slogan-box"},[s("img",{attrs:{src:a("beec"),alt:"",srcset:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-user-box"},[s("img",{attrs:{src:a("bbac"),alt:"",srcset:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"help-free-box"},[s("img",{attrs:{src:a("68b9"),alt:"",srcset:""}})])}],S={name:"",data:function(){return{}},created:function(){var t=this;setTimeout((function(){t.initChange()}),1e3)},mounted:function(){},methods:{initChange:function(){console.log(111),particlesJS("particles-js",{particles:{number:{value:200,density:{enable:!0,value_area:800}},color:{value:["#fff","#ff4792"]},shape:{type:"circle",stroke:{width:0,color:"#fff"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!0}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:.8}},bubble:{distance:250,size:4,duration:2,opacity:1,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},goPage:function(){this.$router.replace("/list")}}},z=S,D=(a("8c9a"),Object(u["a"])(z,j,E,!1,null,"1e419c96",null)),O=D.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"listDetail1-page"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("div",{staticClass:"Accept-btn animate__animated animate__backInUp",on:{click:function(e){return t.goPage()}}},[s("img",{attrs:{src:a("282e"),alt:"",srcset:""}})])])},B=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"particles-js"}},[s("canvas",{staticClass:"particles-js-canvas-el",staticStyle:{width:"100%",height:"100%"},attrs:{width:"1920",height:"1080"}}),s("div",{staticClass:"middle-star1"},[s("img",{attrs:{src:a("2ae8"),alt:"",srcset:""}})]),s("div",{staticClass:"middle-star2"},[s("img",{attrs:{src:a("2ae8"),alt:"",srcset:""}})]),s("div",{staticClass:"meteor-star"}),s("div",{staticClass:"meteor-star meteor-star-pink"}),s("div",{staticClass:"meteor-star meteor-star-blue"}),s("div",{staticClass:"Big-star1"}),s("div",{staticClass:"Big-star2"}),s("div",{staticClass:"Big-star3"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-slogan"},[s("img",{attrs:{src:a("3d28"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slogan-box"},[s("img",{attrs:{src:a("beec"),alt:"",srcset:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-user-box"},[s("img",{attrs:{src:a("17cf"),alt:"",srcset:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"help-free-box"},[s("img",{attrs:{src:a("68b9"),alt:"",srcset:""}})])}],I={name:"",data:function(){return{}},created:function(){var t=this;setTimeout((function(){t.initChange()}),1e3)},mounted:function(){},methods:{initChange:function(){console.log(111),particlesJS("particles-js",{particles:{number:{value:200,density:{enable:!0,value_area:800}},color:{value:["#fff","#ff4792"]},shape:{type:"circle",stroke:{width:0,color:"#fff"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!0}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:.8}},bubble:{distance:250,size:4,duration:2,opacity:1,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},goPage:function(){this.$router.replace("/list")}}},M=I,L=(a("2107"),Object(u["a"])(M,P,B,!1,null,"283ed514",null)),T=L.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"listDetail1-page"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("div",{staticClass:"Accept-btn animate__animated animate__backInUp",on:{click:function(e){return t.goPage()}}},[s("img",{attrs:{src:a("282e"),alt:"",srcset:""}})])])},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"particles-js"}},[s("canvas",{staticClass:"particles-js-canvas-el",staticStyle:{width:"100%",height:"100%"},attrs:{width:"1920",height:"1080"}}),s("div",{staticClass:"middle-star1"},[s("img",{attrs:{src:a("2ae8"),alt:"",srcset:""}})]),s("div",{staticClass:"middle-star2"},[s("img",{attrs:{src:a("2ae8"),alt:"",srcset:""}})]),s("div",{staticClass:"meteor-star"}),s("div",{staticClass:"meteor-star meteor-star-pink"}),s("div",{staticClass:"meteor-star meteor-star-blue"}),s("div",{staticClass:"Big-star1"}),s("div",{staticClass:"Big-star2"}),s("div",{staticClass:"Big-star3"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-slogan"},[s("img",{attrs:{src:a("3d28"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slogan-box"},[s("img",{attrs:{src:a("beec"),alt:"",srcset:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-user-box"},[s("img",{attrs:{src:a("f6f7"),alt:"",srcset:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"help-free-box"},[s("img",{attrs:{src:a("68b9"),alt:"",srcset:""}})])}],J={name:"",data:function(){return{}},created:function(){var t=this;setTimeout((function(){t.initChange()}),1e3)},mounted:function(){},methods:{initChange:function(){console.log(111),particlesJS("particles-js",{particles:{number:{value:200,density:{enable:!0,value_area:800}},color:{value:["#fff","#ff4792"]},shape:{type:"circle",stroke:{width:0,color:"#fff"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!0}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:.8}},bubble:{distance:250,size:4,duration:2,opacity:1,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},goPage:function(){this.$router.replace("/list")}}},X=J,Y=(a("bef9"),Object(u["a"])(X,A,U,!1,null,"8d00e354",null)),W=Y.exports;s["default"].use(f["a"]);var K=[{path:"/",name:"首页",redirect:"/index",menuShow:!1},{path:"/index",name:"首页",component:_,menuShow:!1},{path:"/list",name:"ListPage",component:$,menuShow:!1},{path:"/listDetail1",name:"listDetail1",component:O,menuShow:!1},{path:"/listDetail2",name:"listDetail2",component:T,menuShow:!1},{path:"/listDetail3",name:"listDetail3",component:W,menuShow:!1},{path:"*",redirect:"/index"}],G=f["a"].prototype.push;f["a"].prototype.push=function(t){return G.call(this,t).catch((function(t){return t}))};var N=new f["a"]({routes:K}),R=a("bc3a"),q=a.n(R),F=a("2106"),H=a.n(F),Q=a("5c96"),V=a.n(Q),Z=(a("0fae"),a("499a"),a("fb0c"),a("7212")),tt=a.n(Z),et=(a("dfa4"),a("77ed")),at=a.n(et),st=a("b970"),it=(a("157a"),a("726b")),nt=a.n(it),rt=a("572f"),ct=a.n(rt);s["default"].use(ct.a),s["default"].component("vue-scratchable",nt.a),s["default"].use(st["a"]),s["default"].use(at.a),s["default"].use(tt.a),s["default"].use(V.a),s["default"].use(f["a"]),s["default"].use(H.a,q.a),s["default"].config.productionTip=!1,s["default"].prototype.$axios=q.a,q.a.defaults.baseURL="https://wxcore.forhoo.com.cn/lhwxlogin/",new s["default"]({router:N,render:function(t){return t(m)}}).$mount("#app")},"5fe3":function(t,e,a){},"68b9":function(t,e,a){t.exports=a.p+"img/help-free.d7a39193.png"},"85ec":function(t,e,a){},"8c9a":function(t,e,a){"use strict";a("1e1a")},a147:function(t,e,a){"use strict";a("1b89")},bbac:function(t,e,a){t.exports=a.p+"img/list1.59d3ed48.png"},beec:function(t,e,a){t.exports=a.p+"img/slogan.33201c2a.png"},bef9:function(t,e,a){"use strict";a("3d6f")},c24f:function(t,e,a){t.exports=a.p+"img/slogan.8cc1cb67.png"},e77e:function(t,e,a){t.exports=a.p+"img/06.f054bd3a.png"},eb7b:function(t,e,a){},f6f7:function(t,e,a){t.exports=a.p+"img/list3.4cc96e20.png"},fb0c:function(t,e){var a=75;function s(){var t=document.documentElement.clientWidth/750;document.documentElement.style.fontSize=a*Math.min(t,2)+"px"}s(),window.onresize=function(){s()}}});
//# sourceMappingURL=app.f92bc036.js.map