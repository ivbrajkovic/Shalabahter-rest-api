!function(e){function t(t){for(var r,c,s=t[0],l=t[1],i=t[2],u=0,d=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(p&&p(t);d.length;)d.shift()();return a.push.apply(a,i||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=o[0]))}return e}var r={},n={1:0},a=[];function c(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=r,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(o,r,function(t){return e[t]}.bind(null,r));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var p=l;a.push([69,0]),o()}({2:function(e){e.exports=JSON.parse('{"appName":"shalabahter","appToken":"token","urls":{"login":"https://shalabahter.herokuapp.com/api/auth/login","data":"https://shalabahter.herokuapp.com/api/posts","me":"https://shalabahter.herokuapp.com/api/auth/me","insert":"https://shalabahter.herokuapp.com/api/posts","update":"https://shalabahter.herokuapp.com/api/posts","delete":"https://shalabahter.herokuapp.com/api/posts"}}')},22:function(e,t,o){e.exports={"form-control":"form-control__3UCJd",formControl:"form-control__3UCJd","form-control-label":"form-control-label__K1E0K",formControlLabel:"form-control-label__K1E0K","form-control-line":"form-control-line__1dh59",formControlLine:"form-control-line__1dh59"}},47:function(e,t,o){},5:function(e,t,o){e.exports={root:"root__1XFx6","span-default":"span-default__1S2nX",spanDefault:"span-default__1S2nX","input-default":"input-default__3pNMB",inputDefault:"input-default__3pNMB",input:"input__U4Zrt",bottom:"bottom__2gDuF",top:"top__2_0Zu",left:"left__3xy88",right:"right__1hmLk",icon:"icon__3jjIn"}},69:function(e,t,o){"use strict";o.r(t);o(46),o(47);var r=o(0),n=o(1),a=o(4),c=o(2);const s=sessionStorage,l=e=>({type:"SET_LOADING",payload:e}),i=e=>({type:"SET_ADMIN",payload:e}),p=e=>{let t;return e?"string"==typeof e?t=e:"string"==typeof e.message?t=e.message:e.message="Unknown error":t="",t},u=e=>({type:"SET_ERROR",payload:p(e)});var d=e=>{let{children:t,onDone:o,timeout:a=3e3}=e;const[c,s]=Object(n.j)(!1);return Object(n.d)(()=>{s(!0),setTimeout(()=>{s(!1),o&&setTimeout(()=>o(),1e3)},a)},[]),Object(r.h)("div",{className:"fixed z-50 left-0 bottom-0 ml-8 mb-8 py-4 px-8 text-gray-100 bg-teal-500 transition duration-1000 transform ".concat(c?"opacity-100 translate-y-0":"opacity-0 -translate-y-full")},t)},b=o(29),h=o.n(b);var f=e=>{Object(n.d)(()=>{e?h.a.start():h.a.done()},[e])},m=o(30);const g={bgDecoration:{position:"absolute",top:0,left:0,pointerEvents:"none",width:"100%",height:"100%",overflow:"hidden",zIndex:1},bgDecorationSvg:{position:"absolute",top:0,minWidth:1280,maxWidth:1920,height:"auto",opacity:".4"}};var O=()=>Object(r.h)("figure",{style:g.bgDecoration,"aria-hidden":"true"},Object(r.h)("svg",{style:g.bgDecorationSvg,viewBox:"0 0 1920 450",fill:"none"},Object(r.h)("rect",{opacity:"0.5",x:"610.131",y:"-440",width:"128",height:"836.003",transform:"rotate(46.8712 610.131 -440)",fill:"url(#bg-decoration-v1-fx-5-linear-1)"}),Object(r.h)("rect",{opacity:"0.5",x:"1899.13",y:"-262",width:"128",height:"836.003",transform:"rotate(46.8712 1899.13 -262)",fill:"url(#bg-decoration-v1-fx-5-linear-2)"}),Object(r.h)("rect",{opacity:"0.5",x:"2076.13",y:"-321",width:"128",height:"836.003",transform:"rotate(46.8712 2076.13 -321)",fill:"url(#bg-decoration-v1-fx-5-linear-3)"}),Object(r.h)("rect",{opacity:"0.5",x:"1294.5",y:"40.3308",width:"128",height:"836.003",transform:"rotate(-132.518 1294.5 40.3308)",fill:"url(#bg-decoration-v1-fx-5-linear-4)"}),Object(r.h)("rect",{opacity:"0.5",x:"1866.13",y:"-453",width:"128",height:"836.003",transform:"rotate(46.8712 1866.13 -453)",fill:"url(#bg-decoration-v1-fx-5-linear-5)"}),Object(r.h)("rect",{opacity:"0.5",x:"800.131",y:"-418",width:"128",height:"836.003",transform:"rotate(46.8712 800.131 -418)",fill:"url(#bg-decoration-v1-fx-5-linear-5)"}),Object(r.h)("rect",{opacity:"0.5",x:"436.448",y:"-251",width:"76.1734",height:"340.424",transform:"rotate(46.8712 436.448 -251)",fill:"url(#bg-decoration-v1-fx-5-linear-7)"}),Object(r.h)("defs",null,Object(r.h)("linearGradient",{id:"bg-decoration-v1-fx-5-linear-1",x1:"674.131",y1:"-440",x2:"674.131",y2:"396.003",gradientUnits:"userSpaceOnUse"},Object(r.h)("stop",{"stop-color":"currentColor"}),Object(r.h)("stop",{offset:"1","stop-color":"currentColor","stop-opacity":"0"})),Object(r.h)("linearGradient",{id:"bg-decoration-v1-fx-5-linear-2",x1:"1963.13",y1:"-262",x2:"1963.13",y2:"574.003",gradientUnits:"userSpaceOnUse"},Object(r.h)("stop",{"stop-color":"currentColor"}),Object(r.h)("stop",{offset:"1","stop-color":"currentColor","stop-opacity":"0"})),Object(r.h)("linearGradient",{id:"bg-decoration-v1-fx-5-linear-3",x1:"2140.13",y1:"-321",x2:"2140.13",y2:"515.003",gradientUnits:"userSpaceOnUse"},Object(r.h)("stop",{"stop-color":"currentColor"}),Object(r.h)("stop",{offset:"1","stop-color":"currentColor","stop-opacity":"0"})),Object(r.h)("linearGradient",{id:"bg-decoration-v1-fx-5-linear-4",x1:"1358.5",y1:"40.3308",x2:"1358.5",y2:"876.334",gradientUnits:"userSpaceOnUse"},Object(r.h)("stop",{"stop-color":"currentColor"}),Object(r.h)("stop",{offset:"1","stop-color":"currentColor","stop-opacity":"0"})),Object(r.h)("linearGradient",{id:"bg-decoration-v1-fx-5-linear-5",x1:"1930.13",y1:"-453",x2:"1930.13",y2:"383.003",gradientUnits:"userSpaceOnUse"},Object(r.h)("stop",{"stop-color":"currentColor"}),Object(r.h)("stop",{offset:"1","stop-color":"currentColor","stop-opacity":"0"})),Object(r.h)("linearGradient",{id:"bg-decoration-v1-fx-5-linear-5",x1:"864.131",y1:"-418",x2:"864.131",y2:"418.003",gradientUnits:"userSpaceOnUse"},Object(r.h)("stop",{"stop-color":"currentColor"}),Object(r.h)("stop",{offset:"1","stop-color":"currentColor","stop-opacity":"0"})),Object(r.h)("linearGradient",{id:"bg-decoration-v1-fx-5-linear-7",x1:"474.534",y1:"-251",x2:"474.534",y2:"89.4236",gradientUnits:"userSpaceOnUse"},Object(r.h)("stop",{"stop-color":"currentColor","stop-opacity":"0"}),Object(r.h)("stop",{offset:"1","stop-color":"currentColor"})))));const j="py-4 px-5 sm:py-5 sm:px-6 hover:bg-teal-500 duration-200 cursor-pointer outline-none";var y=e=>{let{loggedIn:t,admin:o}=e;const l=Object(n.b)(Z);return Object(r.h)("div",{className:"fixed top-0 z-50 w-full tracking-wider bg-gray-600 shadow-xl text-md sm:text-lg"},Object(r.h)(O,null),Object(r.h)("div",{className:"container flex justify-between"},Object(r.h)("div",{className:"flex items-center"},Object(r.h)("a",{href:"/",className:"text-xl sm:text-2xl"},"Shalabahter")),Object(r.h)("nav",{className:"flex"},Object(r.h)(m.Link,{href:"/",className:j,activeClassName:"".concat(o?"":"bg-teal-500"),onClick:()=>l(i(!1))},"Home"),t&&Object(r.h)("div",{className:"".concat(j).concat(o?" bg-teal-500":""),onClick:()=>l(i(!0))},"Admin"),t&&Object(r.h)("div",{className:j,onClick:()=>{l((s.removeItem(c.appToken),{type:"SET_LOGOUT"})),Object(a.route)("/login")}},"Logout")||Object(r.h)(m.Link,{href:"/login",className:j,activeClassName:"bg-teal-500"},"Login"))))},v=o(5),x=o.n(v);var w=e=>{const{iconClasses:t,borderClasses:o}=e;return t&&delete e.iconClasses,o&&delete e.borderClasses,e.class?e.class+=" "+x.a.input:e.className=x.a["input-default"]+" "+x.a.input,Object(r.h)("div",{className:x.a.root},Object(r.h)("svg",{className:t||x.a.icon,viewBox:"0 0 24 24"},Object(r.h)("g",{"stroke-linecap":"square","stroke-linejoin":"miter","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-miterlimit":"10"},Object(r.h)("line",{x1:"22",y1:"22",x2:"15.656",y2:"15.656"}),Object(r.h)("circle",{cx:"10",cy:"10",r:"8"}))),Object(r.h)("input",e),["bottom","right","top","left"].map(e=>Object(r.h)("span",{className:"".concat(x.a[e]," ").concat(o||x.a["span-default"])})))},N=(o(31),o(44),o(45));function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}const k=e=>{e.style.height="",e.style.height=Math.min(e.scrollHeight)+2+"px"};var S=Object(N.a)(e=>{const t=Object(n.i)();return Object(n.d)(()=>{k(t.current)},[]),Object(r.h)("textarea",_({ref:t,rows:"1",cols:"50"},e,{onInput:t=>{const o=t.target;k(o),e.onInput&&e.onInput(t)}}))});function C(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function T(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?C(Object(o),!0).forEach((function(t){P(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):C(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function P(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const D="px-4 py-3 text-gray-100 duration-200 cursor-pointer";var E=e=>{let{data:t,admin:o,insertOdgovor:a,updateOdgovor:c,deleteOdgovor:s}=e;const l=Object(n.i)(!0),[i,p]=Object(n.j)(t||{id:"",pitanje:"",odgovori:[]});Object(n.d)(()=>{l.current?l.current=!1:p(t)},[t]);const u=e=>{const t=e.target.value,o=e.target.getAttribute("data-key");p(e=>{const r=T({},e);return r.odgovori[o]=t,r})},d=e=>{const t=e.target.getAttribute("data-key");p(e=>{const o=T({},e);return o.odgovori.splice(t,1),o})},b=o?"pl-2 border":"resize-none";return Object(r.h)("div",{id:"answer-container",className:"flex flex-col p-4 bg-white shadow-md sm:shadow-lg"},Object(r.h)("div",{className:"flex pb-1 mb-3 border-b"},Object(r.h)("div",{className:"inline-block text-lg leading-8"},"".concat(i.id,"."))," ",Object(r.h)("input",{id:"question",type:"text",readonly:!o,className:"flex-1 inline-block h-8 text-lg ".concat(b),value:i.pitanje,onInput:e=>{const t=e.target.value;p(e=>{const o=T({},e);return o.pitanje=t,o})},placeholder:"Unesite pitanje..."})),Object(r.h)("div",{className:"flex-1 ".concat(o?"border-b mb-4":"")},i.odgovori.map((e,t)=>Object(r.h)("div",{key:t,className:"flex"},o&&Object(r.h)("div",{"data-key":t,className:"inline-block w-8 h-8 p-1 mr-2 text-center rounded-full cursor-pointer lin hover:bg-gray-200",onClick:d},"−"),Object(r.h)(S,{id:"answer","data-key":t,readonly:!o,className:"min-h-full flex-1 mb-2 leading-tight ".concat(b),value:e,onInput:u,placeholder:"Unesite odgovor..."}))),o&&Object(r.h)("div",{className:"inline-block w-8 h-8 p-1 text-center rounded-full cursor-pointer lin hover:bg-gray-200",onClick:e=>{const t=e.target.value;p(e=>{const o=T({},e);return o.odgovori.push(t),o})}},"+")),o&&(a&&Object(r.h)("div",{className:"ml-auto "},Object(r.h)("button",{className:"".concat(D," bg-red-500 hover:bg-teal-600"),onClick:()=>{a(i),p({id:"",pitanje:"",odgovori:[]})}},"Add"))||Object(r.h)("div",{className:"ml-auto "},Object(r.h)("button",{className:"".concat(D," bg-red-500 hover:bg-red-600"),onClick:()=>s(i.id)},"Delete"),Object(r.h)("button",{className:"".concat(D," ml-4 bg-teal-500 hover:bg-teal-600"),onClick:()=>c(i)},"Update"))))};var U=e=>{let{DEBUG:t=!1}=e;const o=document.querySelectorAll("#answer-container");t&&console.log("answerContainer:",o);const r=[];let n=0;for(let e=0;e<o.length;e++){const t=o[e].querySelector("#question").value.toUpperCase();r[n++]=[e,t];const a=o[e].querySelectorAll("#answer");for(let t=0;t<a.length;t++)r[n++]=[e,a[t].value.toUpperCase()]}t&&console.log("indexedArray:",r);const a=document.getElementById("input-filter");a&&a.addEventListener("input",(function(){t&&console.log("input: ",this.value),((e,t,o)=>{const r=e.toUpperCase();let n=!1,a=-1,c=0;for(let e=0;e<t.length;e++)if(c=t[e][0],!n||a!==c){if(n=!1,t[e][1].indexOf(r)>-1)n=!0,o[c].style.display.length&&(o[c].style.display="");else{if(a===c)continue;o[c].style.display.length||(o[c].style.display="none")}a=c}})(this.value,r,o)})),t&&console.log("inputFilter: ",a)};var I=(e,t)=>{var o;e((o=t,s.removeItem(c.appToken),{type:"SET_UNAUTHORIZED",payload:p(o)})),Object(a.route)("/login")};const G=async e=>{let{url:t,method:o,headers:r,postData:n,dispatch:a,cb:c}=e;a(l(!0));const s=r&&!!r.authorization;try{const e=await fetch(t,{method:o,headers:r,body:n?JSON.stringify(n):void 0}),i=await e.json();if(a(l(!1)),s&&401===e.status)return I(a,i.error);if(i&&!i.success)return a(u(i.error));i&&i.success&&c(i.data)}catch(e){throw e}},L=e=>{let{url:t,method:o="GET",postData:r,dispatch:n,cb:a}=e;const s=sessionStorage.getItem(c.appToken);if(!s)return I(n,"No token found");const l={authorization:"Bearer "+s};"POST"!==o&&"PUT"!==o||(l["Content-Type"]="application/json"),G({url:t,method:o,headers:l,postData:r,dispatch:n,cb:a})};var A=e=>{let{admin:t}=e;const o=Object(n.i)(!0),a=Object(n.b)(Z),[s,l]=Object(n.j)([]);Object(n.d)(()=>{!t&&s.length>0&&U({DEBUG:!1})},[s]),Object(n.d)(()=>{(o.current||!t)&&((e,t,o)=>{G({url:e,dispatch:t,cb:o})})(c.urls.data,a,e=>{e&&Array.isArray(e)&&e.length>0&&l(e)}),o.current&&(o.current=!1)},[t]);const i=e=>{((e,t,o,r)=>{L({url:e,method:"PUT",postData:t,dispatch:o,cb:r})})(c.urls.update,e,a,e=>{e&&e.id?a(u("Post with id ".concat(e.id," updated uccessfully"))):a(u("Error updating post"))})},p=e=>{((e,t,o)=>{L({url:e,method:"DELETE",dispatch:t,cb:o})})("".concat(c.urls.update,"/").concat(e),a,t=>{t&&t.id?(a(u("Post with id ".concat(t.id," deleted uccessfully"))),l(t=>{let o=[...t];const r=o.findIndex(t=>t.id===e);return r>-1?(o.splice(r,1),o):t})):a(u("Error deleting post"))})};return Object(r.h)("div",{className:"mb-8 text-blue-700"},Object(r.h)("div",{className:"max-w-sm p-4 mx-auto mb-4 bg-white shadow-md sm:mb-8 sm:shadow-lg"},Object(r.h)(w,{id:"input-filter",class:"w-full px-4 py-2",placeholder:"Search for ...",borderClasses:"bg-blue-700",iconClasses:"mx-2 h-6 w-6"})),Object(r.h)("div",{className:"grid gap-4 sm:gap-8 grid-cols-posts"},s.map((e,o)=>Object(r.h)(E,{key:o,data:e,admin:t,updateOdgovor:i,deleteOdgovor:p})),t&&Object(r.h)(E,{admin:t,insertOdgovor:e=>{((e,t,o,r)=>{L({url:e,method:"POST",postData:t,dispatch:o,cb:r})})("".concat(c.urls.insert),e,a,t=>{t&&t.id?(a(u("Post with id ".concat(t.id," created uccessfully"))),l(o=>{const r=[...o];return r.push({id:t.id,pitanje:e.pitanje,odgovori:[...e.odgovori]}),r})):a(u("Error creating post"))})}})))},M=o(22),B=o.n(M);var R=e=>{let{name:t,type:o="text",autofocus:n=!1}=e;return Object(r.h)("div",{className:"relative my-6"},Object(r.h)("input",{type:o,className:"text-blue-700 border-b border-gray-400 ".concat(B.a["form-control"]),name:t,autocomplete:"off",required:!0,autofocus:n}),Object(r.h)("label",{for:"name",className:"text-gray-500 ".concat(B.a["form-control-label"])},t),Object(r.h)("span",{className:"bg-blue-700 ".concat(B.a["form-control-line"])}))};var q=()=>{const e=Object(n.i)(),t=Object(n.b)(Z);return Object(r.h)("div",{className:"container flex items-start justify-center h-full sm:items-center"},Object(r.h)("form",{ref:e,className:"w-full overflow-hidden text-gray-400 bg-white shadow-xl sm:w-8/12 lg:w-1/3",onSubmit:async e=>{e.preventDefault(),t(l(!0));const o=e.currentTarget,r={user:o.elements.name.value,password:o.elements.password.value};((e,t,o,r)=>{G({url:e,method:"POST",headers:{"Content-Type":"application/json"},postData:t,dispatch:o,cb:r})})(c.urls.login,r,t,e=>{const o=e&&e.token;t((e=>(e&&s.setItem(c.appToken,e),{type:"SET_LOGIN"}))(o)),Object(a.route)("/")}),(e=>{e.elements.name.value="",e.elements.password.value="",e.elements.name.focus()})(o)}},Object(r.h)("div",{className:"py-3 text-xl text-center text-gray-100 bg-teal-500 sm:py-4 sm:text-2xl"},Object(r.h)("h2",null,"Login")),Object(r.h)("div",{className:"px-10"},Object(r.h)(R,{name:"name"}),Object(r.h)(R,{name:"password",type:"password"}),Object(r.h)("div",{className:"mt-6 mb-8"},Object(r.h)("input",{className:"px-4 py-3 text-gray-100 duration-200 bg-teal-500 cursor-pointer hover:bg-teal-600",type:"submit",value:"Submit"})))))};function z(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function J(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?z(Object(o),!0).forEach((function(t){F(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):z(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function F(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const H={loading:!1,loggedIn:!1,admin:!1,error:""},K=(e,t)=>{switch(t.type){case"SET_LOGOUT":return J({},H);case"SET_LOGIN":return J({},H,{loggedIn:!0,admin:!0});case"SET_ADMIN":return J({},e,{admin:t.payload});case"SET_LOADING":return J({},e,{loading:t.payload});case"SET_ERROR":return J({},e,{loading:!1,error:t.payload});case"SET_UNAUTHORIZED":return J({},H,{error:t.payload});default:return e}},Z=Object(r.createContext)();var X=()=>{const[e,t]=Object(n.h)(K,H);return f(e.loading),Object(n.d)(()=>()=>{sessionStorage.removeItem(settings.appToken)},[]),Object(r.h)(r.Fragment,null,Object(r.h)(Z.Provider,{value:t},Object(r.h)(y,{loggedIn:e.loggedIn,admin:e.admin}),e.error&&Object(r.h)(d,{onDone:()=>t(u())},e.error),Object(r.h)("main",{className:"container h-screen pt-20 sm:pt-24"},Object(r.h)(a.default,null,Object(r.h)(A,{path:"/",admin:e.admin}),Object(r.h)(q,{path:"/login"})))))};Object(r.render)(Object(r.h)(X,null),document.body)}});