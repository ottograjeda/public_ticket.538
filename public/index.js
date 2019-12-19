/*! For license information please see index.js.LICENSE */
!function(e){function t(t){for(var r,o,i=t[0],a=t[1],l=t[2],s=0,d=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(P,o)&&P[o]&&d.push(P[o][0]),P[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(U&&U(t);d.length;)d.shift()();return H.push.apply(H,l||[]),n()}function n(){for(var e,t=0;t<H.length;t++){for(var n=H[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==P[i]&&(r=!1)}r&&(H.splice(t--,1),e=F(F.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!j[e])return;for(var n in j[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(b[n]=t[n]);0==--v&&0===y&&E()}(e,t),r&&r(e,t)};var o,i=!0,a="9e31df13446185031e42",l=1e4,s={},d=[],c=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:N,apply:D,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:s[e]};return o=void 0,t}var p=[],f="idle";function m(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,b,_,v=0,y=0,g={},j={},w={};function x(e){return+e+""===e?+e:e}function N(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,m("check"),(t=l,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=F.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return m("idle"),null;j={},g={},w=e.c,_=e.h,m("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in b={},P)O(n);return"prepare"===f&&0===y&&0===v&&E(),t}));var t}function O(e){w[e]?(j[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=F.p+""+e+"."+a+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function E(){m("ready");var e=h;if(h=null,e)if(i)Promise.resolve().then((function(){return D(i)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in b)Object.prototype.hasOwnProperty.call(b,n)&&t.push(x(n));e.resolve(t)}}function D(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,i,l;function c(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),a=o.id,l=o.chain;if((i=k[a])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:l,moduleId:a};if(i.hot._main)return{type:"unaccepted",chain:l,moduleId:a};for(var s=0;s<i.parents.length;s++){var d=i.parents[s],c=k[d];if(c){if(c.hot._declinedDependencies[a])return{type:"declined",chain:l.concat([d]),moduleId:a,parentId:d};-1===t.indexOf(d)&&(c.hot._acceptedDependencies[a]?(n[d]||(n[d]=[]),u(n[d],[a])):(delete n[d],t.push(d),r.push({chain:l.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},h=[],v={},y=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var g in b)if(Object.prototype.hasOwnProperty.call(b,g)){var j;l=x(g);var N=!1,O=!1,E=!1,D="";switch((j=b[g]?c(l):{type:"disposed",moduleId:g}).chain&&(D="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(N=new Error("Aborted because of self decline: "+j.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(N=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(N=new Error("Aborted because "+l+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(j),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),E=!0;break;default:throw new Error("Unexception type "+j.type)}if(N)return m("abort"),Promise.reject(N);if(O)for(l in v[l]=b[l],u(h,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,l)&&(p[l]||(p[l]=[]),u(p[l],j.outdatedDependencies[l]));E&&(u(h,[j.moduleId]),v[l]=y)}var H,I=[];for(r=0;r<h.length;r++)l=h[r],k[l]&&k[l].hot._selfAccepted&&v[l]!==y&&I.push({module:l,errorHandler:k[l].hot._selfAccepted});m("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete P[e]}(e)}));for(var M,A,U=h.slice();U.length>0;)if(l=U.pop(),i=k[l]){var q={},S=i.hot._disposeHandlers;for(o=0;o<S.length;o++)(n=S[o])(q);for(s[l]=q,i.hot.active=!1,delete k[l],delete p[l],o=0;o<i.children.length;o++){var R=k[i.children[o]];R&&((H=R.parents.indexOf(l))>=0&&R.parents.splice(H,1))}}for(l in p)if(Object.prototype.hasOwnProperty.call(p,l)&&(i=k[l]))for(A=p[l],o=0;o<A.length;o++)M=A[o],(H=i.children.indexOf(M))>=0&&i.children.splice(H,1);for(l in m("apply"),a=_,v)Object.prototype.hasOwnProperty.call(v,l)&&(e[l]=v[l]);var C=null;for(l in p)if(Object.prototype.hasOwnProperty.call(p,l)&&(i=k[l])){A=p[l];var L=[];for(r=0;r<A.length;r++)if(M=A[r],n=i.hot._acceptedDependencies[M]){if(-1!==L.indexOf(n))continue;L.push(n)}for(r=0;r<L.length;r++){n=L[r];try{n(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:A[r],error:e}),t.ignoreErrored||C||(C=e)}}}for(r=0;r<I.length;r++){var T=I[r];l=T.module,d=[l];try{F(l)}catch(e){if("function"==typeof T.errorHandler)try{T.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||C||(C=n),C||(C=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||C||(C=e)}}return C?(m("fail"),Promise.reject(C)):(m("idle"),new Promise((function(e){e(h)})))}var k={},P={index:0},H=[];function F(t){if(k[t])return k[t].exports;var n=k[t]={i:t,l:!1,exports:{},hot:u(t),parents:(c=d,d=[],c),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=k[e];if(!t)return F;var n=function(n){return t.hot.active?(k[n]?-1===k[n].parents.indexOf(e)&&k[n].parents.push(e):(d=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),d=[]),F(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return F[e]},set:function(t){F[e]=t}}};for(var i in F)Object.prototype.hasOwnProperty.call(F,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,r(i));return n.e=function(e){return"ready"===f&&m("prepare"),y++,F.e(e).then(t,(function(e){throw t(),e}));function t(){y--,"prepare"===f&&(g[e]||O(e),0===y&&0===v&&E())}},n.t=function(e,t){return 1&t&&(e=n(e)),F.t(e,-2&t)},n}(t)),n.l=!0,n.exports}F.m=e,F.c=k,F.d=function(e,t,n){F.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},F.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},F.t=function(e,t){if(1&t&&(e=F(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(F.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)F.d(n,r,function(t){return e[t]}.bind(null,r));return n},F.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return F.d(t,"a",t),t},F.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},F.p="",F.h=function(){return a};var I=window.webpackJsonp=window.webpackJsonp||[],M=I.push.bind(I);I.push=t,I=I.slice();for(var A=0;A<I.length;A++)t(I[A]);var U=M;H.push([2,"vendor"]),n()}({"./app/components/Footer/FooterView.js":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=r(n("./node_modules/@babel/runtime/helpers/createClass.js")),l=r(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),s=r(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=r(n("./node_modules/@babel/runtime/helpers/inherits.js")),c=o(n("./node_modules/react/index.js"));r(n("./node_modules/react-dom/index.js"));n("./app/components/Footer/style.css");var u="/Users/otto/project.hostbin/h.tickets/ticket.538_reactjs_mpa/app/components/Footer/FooterView.js",p=function(e){function t(e){var n;return(0,i.default)(this,t),(n=(0,l.default)(this,(0,s.default)(t).call(this,e))).state={placeHolder:""},n}return(0,d.default)(t,e),(0,a.default)(t,[{key:"componentWillUnmount",value:function(){console.log("footer > UN mount")}},{key:"componentDidMount",value:function(){console.log("footer > Did Mount")}},{key:"render",value:function(){return c.default.createElement("section",{__source:{fileName:u,lineNumber:25}},c.default.createElement("footer",{__source:{fileName:u,lineNumber:26}},c.default.createElement("hr",{style:{backgroundColor:"#2196F3",marginTop:"0",border:"1px!important",height:"1px!important",paddingTop:"1px!important"},__source:{fileName:u,lineNumber:27}}),c.default.createElement("ul",{className:"list-inline",__source:{fileName:u,lineNumber:28}},c.default.createElement("li",{className:"list-inline-item",__source:{fileName:u,lineNumber:29}},"© 2020 Awesome LLC. All Rights Reserved. | ",c.default.createElement("a",{href:"#",__source:{fileName:u,lineNumber:30}},"Privacy")," | ",c.default.createElement("a",{href:"#",__source:{fileName:u,lineNumber:30}},"Terms"),"  "))))}}]),t}(c.Component);t.default=p},"./app/components/Footer/index.js":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("./app/components/Footer/FooterView.js")).default;t.default=o},"./app/components/Footer/style.css":function(e,t,n){var r=n("./node_modules/css-loader/dist/cjs.js?!./app/components/Footer/style.css");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals),e.hot.accept("./node_modules/css-loader/dist/cjs.js?!./app/components/Footer/style.css",(function(){var t=n("./node_modules/css-loader/dist/cjs.js?!./app/components/Footer/style.css");if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))},"./app/components/Header/HeaderView.js":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("./node_modules/react/index.js")),i=(r(n("./node_modules/react-dom/index.js")),"/Users/otto/project.hostbin/h.tickets/ticket.538_reactjs_mpa/app/components/Header/HeaderView.js"),a=function(e){return o.default.createElement("section",{__source:{fileName:i,lineNumber:7}},o.default.createElement("br",{__source:{fileName:i,lineNumber:9}}),o.default.createElement("header",{className:"mui-appbar mui--z1",style:{lineHeight:"35px"},__source:{fileName:i,lineNumber:10}},o.default.createElement("table",{width:"100%",__source:{fileName:i,lineNumber:11}},o.default.createElement("thead",{__source:{fileName:i,lineNumber:12}},o.default.createElement("tr",{style:{verticalAlign:"middle",backgroundColor:"initial"},__source:{fileName:i,lineNumber:13}},o.default.createElement("td",{className:"mui--appbar-height mui--text-button",align:"left",style:{padding:"15px"},__source:{fileName:i,lineNumber:14}}," ",o.default.createElement("a",{href:"/",className:"mui--text-right",style:{color:"white"},__source:{fileName:i,lineNumber:14}},"Home")),o.default.createElement("td",{className:"mui--appbar-height ",align:"right",style:{padding:"15px"},__source:{fileName:i,lineNumber:15}}," ",o.default.createElement("a",{href:"/blog/post-1.html",className:"mui--text-right",style:{color:"white"},__source:{fileName:i,lineNumber:15}},"Blog")," | ",o.default.createElement("a",{href:"/about.html",className:"mui--text-right",style:{color:"white"},__source:{fileName:i,lineNumber:15}},"About Us")," "))))))};t.default=a},"./app/components/Header/index.js":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("./app/components/Header/HeaderView.js")).default;t.default=o},"./app/pages/index.js":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),o=r(n("./node_modules/react/index.js")),i=r(n("./node_modules/react-dom/index.js")),a=r(n("./app/components/Header/index.js")),l=r(n("./app/components/Footer/index.js")),s="/Users/otto/project.hostbin/h.tickets/ticket.538_reactjs_mpa/app/pages/index.js";i.default.render(o.default.createElement(a.default,{__source:{fileName:s,lineNumber:8}}),document.getElementById("header")),i.default.render(o.default.createElement(l.default,{__source:{fileName:s,lineNumber:9}}),document.getElementById("footer"))},"./node_modules/css-loader/dist/cjs.js?!./app/components/Footer/style.css":function(e,t,n){(t=n("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,"/* Extra media queries for iOS + Android */\n@media (max-width: 768px) {\n  ._3p8KDF87VwhPpO9bJrd0wW {\n    margin-top: -50px!important; /* adjust as needed */\n    /* margin-left: 10px!important; */\n    text-align: center;\n  }\n}\n\n/* Extra media queries ONLY for iOS */\n@supports (-webkit-overflow-scrolling: touch) {\n  ._3p8KDF87VwhPpO9bJrd0wW {\n    margin-top: 150px!important; \n  } \n}\n\nfooter {\n  /* margin-top: -50px; */ /* adjust as needed */\n  font-size: 14px;\n  letter-spacing: 1px;\n  line-height: 1.3;\n  text-align: center;\n  color: #000;\n  background-color: #fff;\n  position: absolute;\n  bottom: 40px;\n  width: 100%; \n  /* margin-left: 80px; */\n  border-top-style: solid;\n  border-top-color: coral;\n\n}\n\nfooter p {\n  margin: 0; \n  line-height: initial!important;\n}\n\nfooter ul {\n  text-align: center;\n  overflow: hidden; \n  list-style-type: none;\n  padding-bottom: 0px;\n  margin: 0 !important; \n}\n\nfooter ul li a {\n  align-items: center;\n  align-self: center;\n  margin: auto;\n  width: auto; \n  color: #000;\n} \n\nfooter ul li a:hover, footer ul li a:focus, footer ul li a:active, footer ul li a._2TjE6btwzTZqPcX-BU1-XH {\n  text-decoration: none; \n}\n\nfooter ul.CKjtzOiEYHA3b2xfwrLpP .m02sgSLuuLPttgYF36f_4 {\n  /* display: inline; */\n  display: inline-block; /* 1 line of icons - 1 of 2 */\n  margin-bottom: 0;\n  padding-bottom: 0; \n}\n\n/* may create false positive css / react error */\n._2kIaNoGtoYoxnFohvaDN6i {\n  display: inline-block; /* 1 line of icons - 2 of 2 */\n  padding: 5px;\n}\n.list-inline-item:not(:last-child)\n",""]),t.locals={"mobile-footer":"_3p8KDF87VwhPpO9bJrd0wW",active:"_2TjE6btwzTZqPcX-BU1-XH","list-social":"CKjtzOiEYHA3b2xfwrLpP","list-social-icon":"m02sgSLuuLPttgYF36f_4","list-inline-item":"_2kIaNoGtoYoxnFohvaDN6i"},e.exports=t},"./node_modules/webpack/hot sync ^\\.\\/log$":function(e,t,n){var r={"./log":"./node_modules/webpack/hot/log.js"};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id="./node_modules/webpack/hot sync ^\\.\\/log$"},2:function(e,t,n){n("./node_modules/webpack-dev-server/client/index.js?http://localhost:8080"),n("./node_modules/webpack/hot/dev-server.js"),e.exports=n("./app/pages/index.js")}});