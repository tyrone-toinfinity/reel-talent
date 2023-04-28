var jp=Object.defineProperty;var Lp=(t,e,n)=>e in t?jp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var C=(t,e,n)=>(Lp(t,typeof e!="symbol"?e+"":e,n),n);import{r as m,a as ua,R as Y,g as Ls}from"./react-c38fdf14.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Vu={exports:{}},$s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p=m,Fp=Symbol.for("react.element"),Up=Symbol.for("react.fragment"),Bp=Object.prototype.hasOwnProperty,Vp=$p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qp={key:!0,ref:!0,__self:!0,__source:!0};function qu(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Bp.call(e,r)&&!qp.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Fp,type:t,key:i,ref:o,props:s,_owner:Vp.current}}$s.Fragment=Up;$s.jsx=qu;$s.jsxs=qu;Vu.exports=$s;var h=Vu.exports;var io={},Ll=ua;io.createRoot=Ll.createRoot,io.hydrateRoot=Ll.hydrateRoot;/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nr(){return nr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nr.apply(this,arguments)}var lt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(lt||(lt={}));const $l="popstate";function Hp(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return oo("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:us(s)}return Gp(e,n,null,t)}function J(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ha(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function zp(){return Math.random().toString(36).substr(2,8)}function Fl(t,e){return{usr:t.state,key:t.key,idx:e}}function oo(t,e,n,r){return n===void 0&&(n=null),nr({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?En(e):e,{state:n,key:e&&e.key||r||zp()})}function us(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function En(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Gp(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=lt.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(nr({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=lt.Pop;let y=u(),_=y==null?null:y-c;c=y,l&&l({action:a,location:v.location,delta:_})}function f(y,_){a=lt.Push;let A=oo(v.location,y,_);n&&n(A,y),c=u()+1;let I=Fl(A,c),x=v.createHref(A);try{o.pushState(I,"",x)}catch{s.location.assign(x)}i&&l&&l({action:a,location:v.location,delta:1})}function p(y,_){a=lt.Replace;let A=oo(v.location,y,_);n&&n(A,y),c=u();let I=Fl(A,c),x=v.createHref(A);o.replaceState(I,"",x),i&&l&&l({action:a,location:v.location,delta:0})}function g(y){let _=s.location.origin!=="null"?s.location.origin:s.location.href,A=typeof y=="string"?y:us(y);return J(_,"No window.location.(origin|href) available to create URL for href: "+A),new URL(A,_)}let v={get action(){return a},get location(){return t(s,o)},listen(y){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener($l,d),l=y,()=>{s.removeEventListener($l,d),l=null}},createHref(y){return e(s,y)},createURL:g,encodeLocation(y){let _=g(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:f,replace:p,go(y){return o.go(y)}};return v}var Ul;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ul||(Ul={}));function Qp(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?En(e):e,s=da(r.pathname||"/",n);if(s==null)return null;let i=Hu(t);Wp(i);let o=null;for(let a=0;o==null&&a<i.length;++a)o=rm(i[a],om(s));return o}function Hu(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(J(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=ft([r,l.relativePath]),u=n.concat(l);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Hu(i.children,e,u,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:tm(c,i.index),routesMeta:u})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of zu(i.path))s(i,o,l)}),e}function zu(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=zu(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Wp(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:nm(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Kp=/^:\w+$/,Yp=3,Xp=2,Jp=1,Zp=10,em=-2,Bl=t=>t==="*";function tm(t,e){let n=t.split("/"),r=n.length;return n.some(Bl)&&(r+=em),e&&(r+=Xp),n.filter(s=>!Bl(s)).reduce((s,i)=>s+(Kp.test(i)?Yp:i===""?Jp:Zp),r)}function nm(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function rm(t,e){let{routesMeta:n}=t,r={},s="/",i=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=s==="/"?e:e.slice(s.length)||"/",u=sm({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let d=a.route;i.push({params:r,pathname:ft([s,u.pathname]),pathnameBase:um(ft([s,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(s=ft([s,u.pathnameBase]))}return i}function sm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=im(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((c,u,d)=>{if(u==="*"){let f=a[d]||"";o=i.slice(0,i.length-f.length).replace(/(.)\/+$/,"$1")}return c[u]=am(a[d]||"",u),c},{}),pathname:i,pathnameBase:o,pattern:t}}function im(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ha(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function om(t){try{return decodeURI(t)}catch(e){return ha(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function am(t,e){try{return decodeURIComponent(t)}catch(n){return ha(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function da(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function lm(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?En(t):t;return{pathname:n?n.startsWith("/")?n:cm(n,e):e,search:hm(r),hash:dm(s)}}function cm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Ti(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gu(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Qu(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=En(t):(s=nr({},t),J(!s.pathname||!s.pathname.includes("?"),Ti("?","pathname","search",s)),J(!s.pathname||!s.pathname.includes("#"),Ti("#","pathname","hash",s)),J(!s.search||!s.search.includes("#"),Ti("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;s.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=lm(s,a),c=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const ft=t=>t.join("/").replace(/\/\/+/g,"/"),um=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hm=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dm=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function fm(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hs(){return hs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hs.apply(this,arguments)}const fa=m.createContext(null),Wu=m.createContext(null),_n=m.createContext(null),Fs=m.createContext(null),An=m.createContext({outlet:null,matches:[]}),Ku=m.createContext(null);function pm(t,e){let{relative:n}=e===void 0?{}:e;Tn()||J(!1);let{basename:r,navigator:s}=m.useContext(_n),{hash:i,pathname:o,search:a}=Xu(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ft([r,o])),s.createHref({pathname:l,search:a,hash:i})}function Tn(){return m.useContext(Fs)!=null}function In(){return Tn()||J(!1),m.useContext(Fs).location}function Yu(t){m.useContext(_n).static||m.useLayoutEffect(t)}function Us(){return m.useContext(fa)!=null?xm():mm()}function mm(){Tn()||J(!1);let{basename:t,navigator:e}=m.useContext(_n),{matches:n}=m.useContext(An),{pathname:r}=In(),s=JSON.stringify(Gu(n).map(a=>a.pathnameBase)),i=m.useRef(!1);return Yu(()=>{i.current=!0}),m.useCallback(function(a,l){if(l===void 0&&(l={}),!i.current)return;if(typeof a=="number"){e.go(a);return}let c=Qu(a,JSON.parse(s),r,l.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:ft([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state,l)},[t,e,s,r])}function Xu(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=m.useContext(An),{pathname:s}=In(),i=JSON.stringify(Gu(r).map(o=>o.pathnameBase));return m.useMemo(()=>Qu(t,JSON.parse(i),s,n==="path"),[t,i,s,n])}function gm(t,e){return ym(t,e)}function ym(t,e,n){Tn()||J(!1);let{navigator:r}=m.useContext(_n),{matches:s}=m.useContext(An),i=s[s.length-1],o=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let l=In(),c;if(e){var u;let v=typeof e=="string"?En(e):e;a==="/"||(u=v.pathname)!=null&&u.startsWith(a)||J(!1),c=v}else c=l;let d=c.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",p=Qp(t,{pathname:f}),g=_m(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:ft([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:ft([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n);return e&&g?m.createElement(Fs.Provider,{value:{location:hs({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:lt.Pop}},g):g}function vm(){let t=Cm(),e=fm(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},e),n?m.createElement("pre",{style:s},n):null,i)}const wm=m.createElement(vm,null);class bm extends m.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?m.createElement(An.Provider,{value:this.props.routeContext},m.createElement(Ku.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Em(t){let{routeContext:e,match:n,children:r}=t,s=m.useContext(fa);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(An.Provider,{value:e},r)}function _m(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let i=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=i.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||J(!1),i=i.slice(0,Math.min(i.length,a+1))}return i.reduceRight((a,l,c)=>{let u=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||wm);let f=e.concat(i.slice(0,c+1)),p=()=>{let g;return u?g=d:l.route.element?g=l.route.element:g=a,m.createElement(Em,{match:l,routeContext:{outlet:a,matches:f},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?m.createElement(bm,{location:n.location,revalidation:n.revalidation,component:d,error:u,children:p(),routeContext:{outlet:null,matches:f}}):p()},null)}var ao;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(ao||(ao={}));var rr;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(rr||(rr={}));function Am(t){let e=m.useContext(fa);return e||J(!1),e}function Tm(t){let e=m.useContext(Wu);return e||J(!1),e}function Im(t){let e=m.useContext(An);return e||J(!1),e}function Ju(t){let e=Im(),n=e.matches[e.matches.length-1];return n.route.id||J(!1),n.route.id}function Cm(){var t;let e=m.useContext(Ku),n=Tm(rr.UseRouteError),r=Ju(rr.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function xm(){let{router:t}=Am(ao.UseNavigateStable),e=Ju(rr.UseNavigateStable),n=m.useRef(!1);return Yu(()=>{n.current=!0}),m.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,hs({fromRouteId:e},i)))},[t,e])}function Sm(t){let{to:e,replace:n,state:r,relative:s}=t;Tn()||J(!1);let i=m.useContext(Wu),o=Us();return m.useEffect(()=>{i&&i.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:s})}),null}function Ve(t){J(!1)}function Nm(t){let{basename:e="/",children:n=null,location:r,navigationType:s=lt.Pop,navigator:i,static:o=!1}=t;Tn()&&J(!1);let a=e.replace(/^\/*/,"/"),l=m.useMemo(()=>({basename:a,navigator:i,static:o}),[a,i,o]);typeof r=="string"&&(r=En(r));let{pathname:c="/",search:u="",hash:d="",state:f=null,key:p="default"}=r,g=m.useMemo(()=>{let v=da(c,a);return v==null?null:{location:{pathname:v,search:u,hash:d,state:f,key:p},navigationType:s}},[a,c,u,d,f,p,s]);return g==null?null:m.createElement(_n.Provider,{value:l},m.createElement(Fs.Provider,{children:n,value:g}))}function Dm(t){let{children:e,location:n}=t;return gm(lo(e),n)}var Vl;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Vl||(Vl={}));new Promise(()=>{});function lo(t,e){e===void 0&&(e=[]);let n=[];return m.Children.forEach(t,(r,s)=>{if(!m.isValidElement(r))return;let i=[...e,s];if(r.type===m.Fragment){n.push.apply(n,lo(r.props.children,i));return}r.type!==Ve&&J(!1),!r.props.index||!r.props.children||J(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=lo(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},co.apply(this,arguments)}function km(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function Rm(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Pm(t,e){return t.button===0&&(!e||e==="_self")&&!Rm(t)}const Mm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Om(t){let{basename:e,children:n,window:r}=t,s=m.useRef();s.current==null&&(s.current=Hp({window:r,v5Compat:!0}));let i=s.current,[o,a]=m.useState({action:i.action,location:i.location});return m.useLayoutEffect(()=>i.listen(a),[i]),m.createElement(Nm,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:i})}const jm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,X=m.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:l,to:c,preventScrollReset:u}=e,d=km(e,Mm),{basename:f}=m.useContext(_n),p,g=!1;if(typeof c=="string"&&Lm.test(c)&&(p=c,jm))try{let A=new URL(window.location.href),I=c.startsWith("//")?new URL(A.protocol+c):new URL(c),x=da(I.pathname,f);I.origin===A.origin&&x!=null?c=x+I.search+I.hash:g=!0}catch{}let v=pm(c,{relative:s}),y=$m(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:s});function _(A){r&&r(A),A.defaultPrevented||y(A)}return m.createElement("a",co({},d,{href:p||v,onClick:g||i?r:_,ref:n,target:l}))});var ql;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(ql||(ql={}));var Hl;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Hl||(Hl={}));function $m(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o}=e===void 0?{}:e,a=Us(),l=In(),c=Xu(t,{relative:o});return m.useCallback(u=>{if(Pm(u,n)){u.preventDefault();let d=r!==void 0?r:us(l)===us(c);a(t,{replace:d,state:s,preventScrollReset:i,relative:o})}},[l,a,c,r,s,n,t,i,o])}const Fm="/assets/reeltalent-logo-bfbca5c1.svg";const Mn=48,Um=({color:t="currentColor",direction:e="left",distance:n="md",duration:r=.4,easing:s="cubic-bezier(0, 0, 0, 1)",hideOutline:i=!0,label:o,lines:a=3,onToggle:l,render:c,rounded:u=!1,size:d=32,toggle:f,toggled:p})=>{const[g,v]=m.useState(!1),y=Math.max(12,Math.min(Mn,d)),_=Math.round((Mn-y)/2),A=y/12,I=Math.round(A),q=y/(a*((n==="lg"?.25:n==="sm"?.75:.5)+(a===3?1:1.25))),W=Math.round(q),Ce=I*a+W*(a-1),le=Math.round((Mn-Ce)/2),Ye=a===3?n==="lg"?4.0425:n==="sm"?5.1625:4.6325:n==="lg"?6.7875:n==="sm"?8.4875:7.6675,ce=(A-I+(q-W))/(a===3?1:2),Be=parseFloat((y/Ye-ce/(4/3)).toFixed(2)),ue=Math.max(0,r),ke={cursor:"pointer",height:`${Mn}px`,position:"relative",transition:`${ue}s ${s}`,userSelect:"none",width:`${Mn}px`},xe={background:t,height:`${I}px`,left:`${_}px`,position:"absolute"};i&&(ke.outline="none"),u&&(xe.borderRadius="9em");const Qt=f||v,Pn=p!==void 0?p:g;return c({barHeight:I,barStyles:xe,burgerStyles:ke,easing:s,handler:()=>{Qt(!Pn),typeof l=="function"&&l(!Pn)},isLeft:e==="left",isToggled:Pn,label:o,margin:W,move:Be,time:ue,topOffset:le,width:y})};function uo(){return uo=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uo.apply(this,arguments)}const Bm=t=>Y.createElement(Um,uo({},t,{render:e=>Y.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:n=>n.key==="Enter"&&e.handler(),role:"button",style:e.burgerStyles,tabIndex:0},Y.createElement("div",{style:{transition:`${e.time/2}s ${e.easing} ${e.isToggled?"0s":`${e.time/2}s`}`,transform:`${e.isToggled?`translateY(${e.barHeight+e.margin}px)`:"none"}`}},Y.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time/2}s ${e.easing} ${e.isToggled?`${e.time/2}s`:"0s"}`,transform:`${e.isToggled?"rotate(45deg)":"none"}`}})),Y.createElement("div",{style:{transition:`${e.time/2}s ${e.easing}`,opacity:`${e.isToggled?"0":"1"}`}},Y.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time/2}s ${e.easing}`}})),Y.createElement("div",{style:{transition:`${e.time/2}s ${e.easing} ${e.isToggled?"0s":`${e.time/2}s`}`,transform:`${e.isToggled?`translateY(-${e.barHeight+e.margin}px)`:"none"}`}},Y.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight*2+e.margin*2}px`,transition:`${e.time/2}s ${e.easing} ${e.isToggled?`${e.time/2}s`:"0s"}`,transform:`${e.isToggled?"rotate(-45deg)":"none"}`}})))})),Vm="/assets/reeltalent-logo-transparent-2c1d3138.svg",qm=()=>{const t=m.useRef(null),e=Us(),[n,r]=m.useState("#222"),[s,i]=m.useState(!1),[o,a]=m.useState(!1),l=c=>{i(c),c?(t.current.classList.add("navbar__show__mobile"),r("#fff")):(a(!1),t.current.classList.add("navbar__hide__mobile"),setTimeout(()=>{t.current.classList.remove("navbar__show__mobile"),t.current.classList.remove("navbar__hide__mobile")},300),r("#222"))};return h.jsxs("div",{className:"mobile__main",children:[h.jsx("div",{className:"mobile__container",children:h.jsx(Bm,{color:n,label:"Show menu",duration:.4,size:24,toggled:o,toggle:a,onToggle:l})}),h.jsxs("d",{className:"navbar__mobile",ref:t,children:[h.jsx("span",{className:"line-separator"}),h.jsxs("span",{className:"navbar__mobile__logo",children:[" ",h.jsx("img",{onClick:()=>{l(!s)},src:Vm,className:"logo__mobile",alt:"Logo"})]}),h.jsx("li",{onClick:()=>{l(!s)},children:h.jsx(X,{to:"/solutions",onClick:()=>l(!s),children:"Solutions"})}),h.jsx("li",{onClick:()=>{l(!s)},children:h.jsx(X,{to:"/blog",onClick:()=>l(!s),children:"Blog"})}),h.jsx("li",{onClick:()=>{l(!s)},children:h.jsx(X,{to:"/about",onClick:()=>l(!s),children:"About us"})}),h.jsx("li",{children:h.jsx("button",{className:"btn1 btn1__nav__mobile",onClick:()=>{l(!s),e("/demo")},children:"Request a demo"})})]})]})},it=()=>h.jsx("nav",{children:h.jsxs("section",{className:"nav__container",children:[h.jsxs("div",{className:"logo__container",children:[h.jsx(X,{to:"/",children:h.jsx("img",{src:Fm,className:"logo",alt:"Logo",width:"50",height:"50"})}),h.jsx(X,{to:"/",children:h.jsxs("h3",{className:"nav__title",children:[h.jsx("span",{className:"nav__subtitleReel",children:"Reel"})," ",h.jsx("span",{className:"nav__subtitleTalent",children:"Talent"})]})})]}),h.jsxs("ul",{className:"nav__link__group",children:[h.jsx("li",{className:"nav__links",children:h.jsx(X,{to:"/solutions",children:"Solutions"})}),h.jsx("li",{className:"nav__links",children:h.jsx(X,{to:"/blog",children:"Blog"})}),h.jsx("li",{className:"nav__links",children:h.jsx(X,{to:"/about",children:"About us"})})]}),h.jsxs("div",{className:"nav__btn__desktop",children:[" ",h.jsx(X,{to:"/demo",children:h.jsx("button",{className:"btn1",children:"Request a demo"})})]}),h.jsx(qm,{})]})});var pa=Cr(),M=t=>Ir(t,pa),ma=Cr();M.write=t=>Ir(t,ma);var Bs=Cr();M.onStart=t=>Ir(t,Bs);var ga=Cr();M.onFrame=t=>Ir(t,ga);var ya=Cr();M.onFinish=t=>Ir(t,ya);var en=[];M.setTimeout=(t,e)=>{let n=M.now()+e,r=()=>{let i=en.findIndex(o=>o.cancel==r);~i&&en.splice(i,1),ut-=~i?1:0},s={time:n,handler:t,cancel:r};return en.splice(Zu(n),0,s),ut+=1,eh(),s};var Zu=t=>~(~en.findIndex(e=>e.time>t)||~en.length);M.cancel=t=>{Bs.delete(t),ga.delete(t),ya.delete(t),pa.delete(t),ma.delete(t)};M.sync=t=>{ho=!0,M.batchedUpdates(t),ho=!1};M.throttle=t=>{let e;function n(){try{t(...e)}finally{e=null}}function r(...s){e=s,M.onStart(n)}return r.handler=t,r.cancel=()=>{Bs.delete(n),e=null},r};var va=typeof window<"u"?window.requestAnimationFrame:()=>{};M.use=t=>va=t;M.now=typeof performance<"u"?()=>performance.now():Date.now;M.batchedUpdates=t=>t();M.catch=console.error;M.frameLoop="always";M.advance=()=>{M.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):nh()};var ct=-1,ut=0,ho=!1;function Ir(t,e){ho?(e.delete(t),t(0)):(e.add(t),eh())}function eh(){ct<0&&(ct=0,M.frameLoop!=="demand"&&va(th))}function Hm(){ct=-1}function th(){~ct&&(va(th),M.batchedUpdates(nh))}function nh(){let t=ct;ct=M.now();let e=Zu(ct);if(e&&(rh(en.splice(0,e),n=>n.handler()),ut-=e),!ut){Hm();return}Bs.flush(),pa.flush(t?Math.min(64,ct-t):16.667),ga.flush(),ma.flush(),ya.flush()}function Cr(){let t=new Set,e=t;return{add(n){ut+=e==t&&!t.has(n)?1:0,t.add(n)},delete(n){return ut-=e==t&&t.has(n)?1:0,t.delete(n)},flush(n){e.size&&(t=new Set,ut-=e.size,rh(e,r=>r(n)&&t.add(r)),ut+=t.size,e=t)}}}function rh(t,e){t.forEach(n=>{try{e(n)}catch(r){M.catch(r)}})}var zm=Object.defineProperty,Gm=(t,e)=>{for(var n in e)zm(t,n,{get:e[n],enumerable:!0})},$e={};Gm($e,{assign:()=>Wm,colors:()=>pt,createStringInterpolator:()=>ba,skipAnimation:()=>ih,to:()=>sh,willAdvance:()=>Ea});function fo(){}var Qm=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),b={arr:Array.isArray,obj:t=>!!t&&t.constructor.name==="Object",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",und:t=>t===void 0};function Je(t,e){if(b.arr(t)){if(!b.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}var j=(t,e)=>t.forEach(e);function We(t,e,n){if(b.arr(t)){for(let r=0;r<t.length;r++)e.call(n,t[r],`${r}`);return}for(let r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r)}var Se=t=>b.und(t)?[]:b.arr(t)?t:[t];function Qn(t,e){if(t.size){let n=Array.from(t);t.clear(),j(n,e)}}var Vn=(t,...e)=>Qn(t,n=>n(...e)),wa=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),ba,sh,pt=null,ih=!1,Ea=fo,Wm=t=>{t.to&&(sh=t.to),t.now&&(M.now=t.now),t.colors!==void 0&&(pt=t.colors),t.skipAnimation!=null&&(ih=t.skipAnimation),t.createStringInterpolator&&(ba=t.createStringInterpolator),t.requestAnimationFrame&&M.use(t.requestAnimationFrame),t.batchedUpdates&&(M.batchedUpdates=t.batchedUpdates),t.willAdvance&&(Ea=t.willAdvance),t.frameLoop&&(M.frameLoop=t.frameLoop)},Wn=new Set,Pe=[],Ii=[],ds=0,Vs={get idle(){return!Wn.size&&!Pe.length},start(t){ds>t.priority?(Wn.add(t),M.onStart(Km)):(oh(t),M(po))},advance:po,sort(t){if(ds)M.onFrame(()=>Vs.sort(t));else{let e=Pe.indexOf(t);~e&&(Pe.splice(e,1),ah(t))}},clear(){Pe=[],Wn.clear()}};function Km(){Wn.forEach(oh),Wn.clear(),M(po)}function oh(t){Pe.includes(t)||ah(t)}function ah(t){Pe.splice(Ym(Pe,e=>e.priority>t.priority),0,t)}function po(t){let e=Ii;for(let n=0;n<Pe.length;n++){let r=Pe[n];ds=r.priority,r.idle||(Ea(r),r.advance(t),r.idle||e.push(r))}return ds=0,Ii=Pe,Ii.length=0,Pe=e,Pe.length>0}function Ym(t,e){let n=t.findIndex(e);return n<0?t.length:n}var Xm=(t,e,n)=>Math.min(Math.max(n,t),e),Jm={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},je="[-+]?\\d*\\.?\\d+",fs=je+"%";function qs(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var Zm=new RegExp("rgb"+qs(je,je,je)),eg=new RegExp("rgba"+qs(je,je,je,je)),tg=new RegExp("hsl"+qs(je,fs,fs)),ng=new RegExp("hsla"+qs(je,fs,fs,je)),rg=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,sg=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ig=/^#([0-9a-fA-F]{6})$/,og=/^#([0-9a-fA-F]{8})$/;function ag(t){let e;return typeof t=="number"?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=ig.exec(t))?parseInt(e[1]+"ff",16)>>>0:pt&&pt[t]!==void 0?pt[t]:(e=Zm.exec(t))?(Wt(e[1])<<24|Wt(e[2])<<16|Wt(e[3])<<8|255)>>>0:(e=eg.exec(t))?(Wt(e[1])<<24|Wt(e[2])<<16|Wt(e[3])<<8|Ql(e[4]))>>>0:(e=rg.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=og.exec(t))?parseInt(e[1],16)>>>0:(e=sg.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=tg.exec(t))?(zl(Gl(e[1]),zr(e[2]),zr(e[3]))|255)>>>0:(e=ng.exec(t))?(zl(Gl(e[1]),zr(e[2]),zr(e[3]))|Ql(e[4]))>>>0:null}function Ci(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function zl(t,e,n){let r=n<.5?n*(1+e):n+e-n*e,s=2*n-r,i=Ci(s,r,t+1/3),o=Ci(s,r,t),a=Ci(s,r,t-1/3);return Math.round(i*255)<<24|Math.round(o*255)<<16|Math.round(a*255)<<8}function Wt(t){let e=parseInt(t,10);return e<0?0:e>255?255:e}function Gl(t){return(parseFloat(t)%360+360)%360/360}function Ql(t){let e=parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function zr(t){let e=parseFloat(t);return e<0?0:e>100?1:e/100}function Wl(t){let e=ag(t);if(e===null)return t;e=e||0;let n=(e&4278190080)>>>24,r=(e&16711680)>>>16,s=(e&65280)>>>8,i=(e&255)/255;return`rgba(${n}, ${r}, ${s}, ${i})`}var sr=(t,e,n)=>{if(b.fun(t))return t;if(b.arr(t))return sr({range:t,output:e,extrapolate:n});if(b.str(t.output[0]))return ba(t);let r=t,s=r.output,i=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",a=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(c=>c);return c=>{let u=cg(c,i);return lg(c,i[u],i[u+1],s[u],s[u+1],l,o,a,r.map)}};function lg(t,e,n,r,s,i,o,a,l){let c=l?l(t):t;if(c<e){if(o==="identity")return c;o==="clamp"&&(c=e)}if(c>n){if(a==="identity")return c;a==="clamp"&&(c=n)}return r===s?r:e===n?t<=e?r:s:(e===-1/0?c=-c:n===1/0?c=c-e:c=(c-e)/(n-e),c=i(c),r===-1/0?c=-c:s===1/0?c=c+r:c=c*(s-r)+r,c)}function cg(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}var ug=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);let r=n*t,s=e==="end"?Math.floor(r):Math.ceil(r);return Xm(0,1,s/t)},ps=1.70158,Gr=ps*1.525,Kl=ps+1,Yl=2*Math.PI/3,Xl=2*Math.PI/4.5,Qr=t=>t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,hg={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInExpo:t=>t===0?0:Math.pow(2,10*t-10),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>Kl*t*t*t-ps*t*t,easeOutBack:t=>1+Kl*Math.pow(t-1,3)+ps*Math.pow(t-1,2),easeInOutBack:t=>t<.5?Math.pow(2*t,2)*((Gr+1)*2*t-Gr)/2:(Math.pow(2*t-2,2)*((Gr+1)*(t*2-2)+Gr)+2)/2,easeInElastic:t=>t===0?0:t===1?1:-Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*Yl),easeOutElastic:t=>t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-.75)*Yl)+1,easeInOutElastic:t=>t===0?0:t===1?1:t<.5?-(Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*Xl))/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*Xl)/2+1,easeInBounce:t=>1-Qr(1-t),easeOutBounce:Qr,easeInOutBounce:t=>t<.5?(1-Qr(1-2*t))/2:(1+Qr(2*t-1))/2,steps:ug},hn=Symbol.for("FluidValue.get"),Lt=Symbol.for("FluidValue.observers"),Re=t=>!!(t&&t[hn]),Te=t=>t&&t[hn]?t[hn]():t,Jl=t=>t[Lt]||null;function dg(t,e){t.eventObserved?t.eventObserved(e):t(e)}function ir(t,e){let n=t[Lt];n&&n.forEach(r=>{dg(r,e)})}var iT,oT,Bu,lh=(Bu=class{constructor(e){C(this,iT);C(this,oT);if(!e&&!(e=this.get))throw Error("Unknown getter");fg(this,e)}},iT=hn,oT=Lt,Bu),fg=(t,e)=>ch(t,hn,e);function Cn(t,e){if(t[hn]){let n=t[Lt];n||ch(t,Lt,n=new Set),n.has(e)||(n.add(e),t.observerAdded&&t.observerAdded(n.size,e))}return e}function or(t,e){let n=t[Lt];if(n&&n.has(e)){let r=n.size-1;r?n.delete(e):t[Lt]=null,t.observerRemoved&&t.observerRemoved(r,e)}}var ch=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),ss=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,pg=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Zl=new RegExp(`(${ss.source})(%|[a-z]+)`,"i"),mg=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Hs=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,uh=t=>{let[e,n]=gg(t);if(!e||wa())return t;let r=window.getComputedStyle(document.documentElement).getPropertyValue(e);return r?r.trim():n&&n.startsWith("--")?window.getComputedStyle(document.documentElement).getPropertyValue(n)||t:n&&Hs.test(n)?uh(n):n||t},gg=t=>{let e=Hs.exec(t);if(!e)return[,];let[,n,r]=e;return[n,r]},xi,yg=(t,e,n,r,s)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${s})`,hh=t=>{xi||(xi=pt?new RegExp(`(${Object.keys(pt).join("|")})(?!\\w)`,"g"):/^\b$/);let e=t.output.map(s=>Te(s).replace(Hs,uh).replace(pg,Wl).replace(xi,Wl)),n=e.map(s=>s.match(ss).map(Number)),r=n[0].map((s,i)=>n.map(o=>{if(!(i in o))throw Error('The arity of each "output" value must be equal');return o[i]})).map(s=>sr({...t,output:s}));return s=>{var a;let i=!Zl.test(e[0])&&((a=e.find(l=>Zl.test(l)))==null?void 0:a.replace(ss,"")),o=0;return e[0].replace(ss,()=>`${r[o++](s)}${i||""}`).replace(mg,yg)}},_a="react-spring: ",dh=t=>{let e=t,n=!1;if(typeof e!="function")throw new TypeError(`${_a}once requires a function parameter`);return(...r)=>{n||(e(...r),n=!0)}},vg=dh(console.warn);function wg(){vg(`${_a}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var bg=dh(console.warn);function Eg(){bg(`${_a}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function zs(t){return b.str(t)&&(t[0]=="#"||/\d/.test(t)||!wa()&&Hs.test(t)||t in(pt||{}))}var Aa=wa()?m.useEffect:m.useLayoutEffect,_g=()=>{let t=m.useRef(!1);return Aa(()=>(t.current=!0,()=>{t.current=!1}),[]),t};function fh(){let t=m.useState()[1],e=_g();return()=>{e.current&&t(Math.random())}}function Ag(t,e){let[n]=m.useState(()=>({inputs:e,result:t()})),r=m.useRef(),s=r.current,i=s;return i?e&&i.inputs&&Tg(e,i.inputs)||(i={inputs:e,result:t()}):i=n,m.useEffect(()=>{r.current=i,s==n&&(n.inputs=n.result=void 0)},[i]),i.result}function Tg(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}var ph=t=>m.useEffect(t,Ig),Ig=[];function ec(t){let e=m.useRef();return m.useEffect(()=>{e.current=t}),e.current}var ar=Symbol.for("Animated:node"),Cg=t=>!!t&&t[ar]===t,qe=t=>t&&t[ar],Ta=(t,e)=>Qm(t,ar,e),Gs=t=>t&&t[ar]&&t[ar].getPayload(),mh=class{constructor(){C(this,"payload");Ta(this,this)}getPayload(){return this.payload||[]}},xr=class extends mh{constructor(n){super();C(this,"done",!0);C(this,"elapsedTime");C(this,"lastPosition");C(this,"lastVelocity");C(this,"v0");C(this,"durationProgress",0);this._value=n,b.num(this._value)&&(this.lastPosition=this._value)}static create(n){return new xr(n)}getPayload(){return[this]}getValue(){return this._value}setValue(n,r){return b.num(n)&&(this.lastPosition=n,r&&(n=Math.round(n/r)*r,this.done&&(this.lastPosition=n))),this._value===n?!1:(this._value=n,!0)}reset(){let{done:n}=this;this.done=!1,b.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,n&&(this.lastVelocity=null),this.v0=null)}},lr=class extends xr{constructor(e){super(0);C(this,"_string",null);C(this,"_toString");this._toString=sr({output:[e,e]})}static create(e){return new lr(e)}getValue(){return this._string??(this._string=this._toString(this._value))}setValue(e){if(b.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=sr({output:[this.getValue(),e]})),this._value=0,super.reset()}},ms={dependencies:null},Qs=class extends mh{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){let e={};return We(this.source,(n,r)=>{Cg(n)?e[r]=n.getValue(t):Re(n)?e[r]=Te(n):t||(e[r]=n)}),e}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&j(this.payload,t=>t.reset())}_makePayload(t){if(t){let e=new Set;return We(t,this._addToPayload,e),Array.from(e)}}_addToPayload(t){ms.dependencies&&Re(t)&&ms.dependencies.add(t);let e=Gs(t);e&&j(e,n=>this.add(n))}},gh=class extends Qs{constructor(e){super(e)}static create(e){return new gh(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){let n=this.getPayload();return e.length==n.length?n.map((r,s)=>r.setValue(e[s])).some(Boolean):(super.setValue(e.map(xg)),!0)}};function xg(t){return(zs(t)?lr:xr).create(t)}function mo(t){let e=qe(t);return e?e.constructor:b.arr(t)?gh:zs(t)?lr:xr}var tc=(t,e)=>{let n=!b.fun(t)||t.prototype&&t.prototype.isReactComponent;return m.forwardRef((r,s)=>{let i=m.useRef(null),o=n&&m.useCallback(g=>{i.current=Dg(s,g)},[s]),[a,l]=Ng(r,e),c=fh(),u=()=>{let g=i.current;n&&!g||(g?e.applyAnimatedValues(g,a.getValue(!0)):!1)===!1&&c()},d=new Sg(u,l),f=m.useRef();Aa(()=>(f.current=d,j(l,g=>Cn(g,d)),()=>{f.current&&(j(f.current.deps,g=>or(g,f.current)),M.cancel(f.current.update))})),m.useEffect(u,[]),ph(()=>()=>{let g=f.current;j(g.deps,v=>or(v,g))});let p=e.getComponentProps(a.getValue());return m.createElement(t,{...p,ref:o})})},Sg=class{constructor(e,n){this.update=e,this.deps=n}eventObserved(e){e.type=="change"&&M.write(this.update)}};function Ng(t,e){let n=new Set;return ms.dependencies=n,t.style&&(t={...t,style:e.createAnimatedStyle(t.style)}),t=new Qs(t),ms.dependencies=null,[t,n]}function Dg(t,e){return t&&(b.fun(t)?t(e):t.current=e),e}var nc=Symbol.for("AnimatedComponent"),kg=(t,{applyAnimatedValues:e=()=>!1,createAnimatedStyle:n=s=>new Qs(s),getComponentProps:r=s=>s}={})=>{let s={applyAnimatedValues:e,createAnimatedStyle:n,getComponentProps:r},i=o=>{let a=rc(o)||"Anonymous";return b.str(o)?o=i[o]||(i[o]=tc(o,s)):o=o[nc]||(o[nc]=tc(o,s)),o.displayName=`Animated(${a})`,o};return We(t,(o,a)=>{b.arr(t)&&(a=rc(o)),i[a]=i(o)}),{animated:i}},rc=t=>b.str(t)?t:t&&b.str(t.displayName)?t.displayName:b.fun(t)&&t.name||null;function St(t,...e){return b.fun(t)?t(...e):t}var Kn=(t,e)=>t===!0||!!(e&&t&&(b.fun(t)?t(e):Se(t).includes(e))),yh=(t,e)=>b.obj(t)?e&&t[e]:t,vh=(t,e)=>t.default===!0?t[e]:t.default?t.default[e]:void 0,Rg=t=>t,Ia=(t,e=Rg)=>{let n=Pg;t.default&&t.default!==!0&&(t=t.default,n=Object.keys(t));let r={};for(let s of n){let i=e(t[s],s);b.und(i)||(r[s]=i)}return r},Pg=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Mg={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Og(t){let e={},n=0;if(We(t,(r,s)=>{Mg[s]||(e[s]=r,n++)}),n)return e}function wh(t){let e=Og(t);if(e){let n={to:e};return We(t,(r,s)=>s in e||(n[s]=r)),n}return{...t}}function cr(t){return t=Te(t),b.arr(t)?t.map(cr):zs(t)?$e.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function jg(t){for(let e in t)return!0;return!1}function go(t){return b.fun(t)||b.arr(t)&&b.obj(t[0])}function Lg(t,e){var n;(n=t.ref)==null||n.delete(t),e==null||e.delete(t)}function $g(t,e){var n;e&&t.ref!==e&&((n=t.ref)==null||n.delete(t),e.add(t),t.ref=e)}var Fg={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},yo={...Fg.default,mass:1,damping:1,easing:hg.linear,clamp:!1},Ug=class{constructor(){C(this,"tension");C(this,"friction");C(this,"frequency");C(this,"damping");C(this,"mass");C(this,"velocity",0);C(this,"restVelocity");C(this,"precision");C(this,"progress");C(this,"duration");C(this,"easing");C(this,"clamp");C(this,"bounce");C(this,"decay");C(this,"round");Object.assign(this,yo)}};function Bg(t,e,n){n&&(n={...n},sc(n,e),e={...n,...e}),sc(t,e),Object.assign(t,e);for(let o in yo)t[o]==null&&(t[o]=yo[o]);let{frequency:r,damping:s}=t,{mass:i}=t;return b.und(r)||(r<.01&&(r=.01),s<0&&(s=0),t.tension=Math.pow(2*Math.PI/r,2)*i,t.friction=4*Math.PI*s*i/r),t}function sc(t,e){if(!b.und(e.decay))t.duration=void 0;else{let n=!b.und(e.tension)||!b.und(e.friction);(n||!b.und(e.frequency)||!b.und(e.damping)||!b.und(e.mass))&&(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0)}}var ic=[],Vg=class{constructor(){C(this,"changed",!1);C(this,"values",ic);C(this,"toValues",null);C(this,"fromValues",ic);C(this,"to");C(this,"from");C(this,"config",new Ug);C(this,"immediate",!1)}};function bh(t,{key:e,props:n,defaultProps:r,state:s,actions:i}){return new Promise((o,a)=>{let l,c,u=Kn(n.cancel??(r==null?void 0:r.cancel),e);if(u)p();else{b.und(n.pause)||(s.paused=Kn(n.pause,e));let g=r==null?void 0:r.pause;g!==!0&&(g=s.paused||Kn(g,e)),l=St(n.delay||0,e),g?(s.resumeQueue.add(f),i.pause()):(i.resume(),f())}function d(){s.resumeQueue.add(f),s.timeouts.delete(c),c.cancel(),l=c.time-M.now()}function f(){l>0&&!$e.skipAnimation?(s.delayed=!0,c=M.setTimeout(p,l),s.pauseQueue.add(d),s.timeouts.add(c)):p()}function p(){s.delayed&&(s.delayed=!1),s.pauseQueue.delete(d),s.timeouts.delete(c),t<=(s.cancelId||0)&&(u=!0);try{i.start({...n,callId:t,cancel:u},o)}catch(g){a(g)}}})}var Ca=(t,e)=>e.length==1?e[0]:e.some(n=>n.cancelled)?tn(t.get()):e.every(n=>n.noop)?Eh(t.get()):Oe(t.get(),e.every(n=>n.finished)),Eh=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),Oe=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),tn=t=>({value:t,cancelled:!0,finished:!1});function _h(t,e,n,r){let{callId:s,parentId:i,onRest:o}=e,{asyncTo:a,promise:l}=n;return!i&&t===a&&!e.reset?l:n.promise=(async()=>{n.asyncId=s,n.asyncTo=t;let c=Ia(e,(y,_)=>_==="onRest"?void 0:y),u,d,f=new Promise((y,_)=>(u=y,d=_)),p=y=>{let _=s<=(n.cancelId||0)&&tn(r)||s!==n.asyncId&&Oe(r,!1);if(_)throw y.result=_,d(y),y},g=(y,_)=>{let A=new oc,I=new ac;return(async()=>{if($e.skipAnimation)throw ur(n),I.result=Oe(r,!1),d(I),I;p(A);let x=b.obj(y)?{...y}:{..._,to:y};x.parentId=s,We(c,(W,Ce)=>{b.und(x[Ce])&&(x[Ce]=W)});let q=await r.start(x);return p(A),n.paused&&await new Promise(W=>{n.resumeQueue.add(W)}),q})()},v;if($e.skipAnimation)return ur(n),Oe(r,!1);try{let y;b.arr(t)?y=(async _=>{for(let A of _)await g(A)})(t):y=Promise.resolve(t(g,r.stop.bind(r))),await Promise.all([y.then(u),f]),v=Oe(r.get(),!0,!1)}catch(y){if(y instanceof oc)v=y.result;else if(y instanceof ac)v=y.result;else throw y}finally{s==n.asyncId&&(n.asyncId=i,n.asyncTo=i?a:void 0,n.promise=i?l:void 0)}return b.fun(o)&&M.batchedUpdates(()=>{o(v,r,r.item)}),v})()}function ur(t,e){Qn(t.timeouts,n=>n.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}var oc=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");C(this,"result")}},ac=class extends Error{constructor(){super("SkipAnimationSignal");C(this,"result")}},vo=t=>t instanceof xa,qg=1,xa=class extends lh{constructor(){super(...arguments);C(this,"id",qg++);C(this,"_priority",0)}get priority(){return this._priority}set priority(n){this._priority!=n&&(this._priority=n,this._onPriorityChange(n))}get(){let n=qe(this);return n&&n.getValue()}to(...n){return $e.to(this,n)}interpolate(...n){return wg(),$e.to(this,n)}toJSON(){return this.get()}observerAdded(n){n==1&&this._attach()}observerRemoved(n){n==0&&this._detach()}_attach(){}_detach(){}_onChange(n,r=!1){ir(this,{type:"change",parent:this,value:n,idle:r})}_onPriorityChange(n){this.idle||Vs.sort(this),ir(this,{type:"priority",parent:this,priority:n})}},$t=Symbol.for("SpringPhase"),Ah=1,wo=2,bo=4,Si=t=>(t[$t]&Ah)>0,at=t=>(t[$t]&wo)>0,On=t=>(t[$t]&bo)>0,lc=(t,e)=>e?t[$t]|=wo|Ah:t[$t]&=~wo,cc=(t,e)=>e?t[$t]|=bo:t[$t]&=~bo,Hg=class extends xa{constructor(e,n){super();C(this,"key");C(this,"animation",new Vg);C(this,"queue");C(this,"defaultProps",{});C(this,"_state",{paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});C(this,"_pendingCalls",new Set);C(this,"_lastCallId",0);C(this,"_lastToId",0);C(this,"_memoizedDuration",0);if(!b.und(e)||!b.und(n)){let r=b.obj(e)?{...e}:{...n,from:e};b.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(at(this)||this._state.asyncTo)||On(this)}get goal(){return Te(this.animation.to)}get velocity(){let e=qe(this);return e instanceof xr?e.lastVelocity||0:e.getPayload().map(n=>n.lastVelocity||0)}get hasAnimated(){return Si(this)}get isAnimating(){return at(this)}get isPaused(){return On(this)}get isDelayed(){return this._state.delayed}advance(e){let n=!0,r=!1,s=this.animation,{toValues:i}=s,{config:o}=s,a=Gs(s.to);!a&&Re(s.to)&&(i=Se(Te(s.to))),s.values.forEach((u,d)=>{if(u.done)return;let f=u.constructor==lr?1:a?a[d].lastPosition:i[d],p=s.immediate,g=f;if(!p){if(g=u.lastPosition,o.tension<=0){u.done=!0;return}let v=u.elapsedTime+=e,y=s.fromValues[d],_=u.v0!=null?u.v0:u.v0=b.arr(o.velocity)?o.velocity[d]:o.velocity,A,I=o.precision||(y==f?.005:Math.min(1,Math.abs(f-y)*.001));if(b.und(o.duration))if(o.decay){let x=o.decay===!0?.998:o.decay,q=Math.exp(-(1-x)*v);g=y+_/(1-x)*(1-q),p=Math.abs(u.lastPosition-g)<=I,A=_*q}else{A=u.lastVelocity==null?_:u.lastVelocity;let x=o.restVelocity||I/10,q=o.clamp?0:o.bounce,W=!b.und(q),Ce=y==f?u.v0>0:y<f,le,Ye=!1,ce=1,Be=Math.ceil(e/ce);for(let ue=0;ue<Be&&(le=Math.abs(A)>x,!(!le&&(p=Math.abs(f-g)<=I,p)));++ue){W&&(Ye=g==f||g>f==Ce,Ye&&(A=-A*q,g=f));let ke=-o.tension*1e-6*(g-f),xe=-o.friction*.001*A,Qt=(ke+xe)/o.mass;A=A+Qt*ce,g=g+A*ce}}else{let x=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,u.durationProgress>0&&(u.elapsedTime=o.duration*u.durationProgress,v=u.elapsedTime+=e)),x=(o.progress||0)+v/this._memoizedDuration,x=x>1?1:x<0?0:x,u.durationProgress=x),g=y+o.easing(x)*(f-y),A=(g-u.lastPosition)/e,p=x==1}u.lastVelocity=A,Number.isNaN(g)&&(console.warn("Got NaN while animating:",this),p=!0)}a&&!a[d].done&&(p=!1),p?u.done=!0:n=!1,u.setValue(g,o.round)&&(r=!0)});let l=qe(this),c=l.getValue();if(n){let u=Te(s.to);(c!==u||r)&&!o.decay?(l.setValue(u),this._onChange(u)):r&&o.decay&&this._onChange(c),this._stop()}else r&&this._onChange(c)}set(e){return M.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(at(this)){let{to:e,config:n}=this.animation;M.batchedUpdates(()=>{this._onStart(),n.decay||this._set(e,!1),this._stop()})}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,n){let r;return b.und(e)?(r=this.queue||[],this.queue=[]):r=[b.obj(e)?e:{...n,to:e}],Promise.all(r.map(s=>this._update(s))).then(s=>Ca(this,s))}stop(e){let{to:n}=this.animation;return this._focus(this.get()),ur(this._state,e&&this._lastCallId),M.batchedUpdates(()=>this._stop(n,e)),this}reset(){this._update({reset:!0})}eventObserved(e){e.type=="change"?this._start():e.type=="priority"&&(this.priority=e.priority+1)}_prepareNode(e){let n=this.key||"",{to:r,from:s}=e;r=b.obj(r)?r[n]:r,(r==null||go(r))&&(r=void 0),s=b.obj(s)?s[n]:s,s==null&&(s=void 0);let i={to:r,from:s};return Si(this)||(e.reverse&&([r,s]=[s,r]),s=Te(s),b.und(s)?qe(this)||this._set(r):this._set(s)),i}_update({...e},n){let{key:r,defaultProps:s}=this;e.default&&Object.assign(s,Ia(e,(a,l)=>/^on/.test(l)?yh(a,r):a)),hc(this,e,"onProps"),Ln(this,"onProps",e,this);let i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let o=this._state;return bh(++this._lastCallId,{key:r,props:e,defaultProps:s,state:o,actions:{pause:()=>{On(this)||(cc(this,!0),Vn(o.pauseQueue),Ln(this,"onPause",Oe(this,jn(this,this.animation.to)),this))},resume:()=>{On(this)&&(cc(this,!1),at(this)&&this._resume(),Vn(o.resumeQueue),Ln(this,"onResume",Oe(this,jn(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then(a=>{if(e.loop&&a.finished&&!(n&&a.noop)){let l=Th(e);if(l)return this._update(l,!0)}return a})}_merge(e,n,r){if(n.cancel)return this.stop(!0),r(tn(this));let s=!b.und(e.to),i=!b.und(e.from);if(s||i)if(n.callId>this._lastToId)this._lastToId=n.callId;else return r(tn(this));let{key:o,defaultProps:a,animation:l}=this,{to:c,from:u}=l,{to:d=c,from:f=u}=e;i&&!s&&(!n.default||b.und(d))&&(d=f),n.reverse&&([d,f]=[f,d]);let p=!Je(f,u);p&&(l.from=f),f=Te(f);let g=!Je(d,c);g&&this._focus(d);let v=go(n.to),{config:y}=l,{decay:_,velocity:A}=y;(s||i)&&(y.velocity=0),n.config&&!v&&Bg(y,St(n.config,o),n.config!==a.config?St(a.config,o):void 0);let I=qe(this);if(!I||b.und(d))return r(Oe(this,!0));let x=b.und(n.reset)?i&&!n.default:!b.und(f)&&Kn(n.reset,o),q=x?f:this.get(),W=cr(d),Ce=b.num(W)||b.arr(W)||zs(W),le=!v&&(!Ce||Kn(a.immediate||n.immediate,o));if(g){let ue=mo(d);if(ue!==I.constructor)if(le)I=this._set(W);else throw Error(`Cannot animate between ${I.constructor.name} and ${ue.name}, as the "to" prop suggests`)}let Ye=I.constructor,ce=Re(d),Be=!1;if(!ce){let ue=x||!Si(this)&&p;(g||ue)&&(Be=Je(cr(q),W),ce=!Be),(!Je(l.immediate,le)&&!le||!Je(y.decay,_)||!Je(y.velocity,A))&&(ce=!0)}if(Be&&at(this)&&(l.changed&&!x?ce=!0:ce||this._stop(c)),!v&&((ce||Re(c))&&(l.values=I.getPayload(),l.toValues=Re(d)?null:Ye==lr?[1]:Se(W)),l.immediate!=le&&(l.immediate=le,!le&&!x&&this._set(c)),ce)){let{onRest:ue}=l;j(Gg,xe=>hc(this,n,xe));let ke=Oe(this,jn(this,c));Vn(this._pendingCalls,ke),this._pendingCalls.add(r),l.changed&&M.batchedUpdates(()=>{var xe;l.changed=!x,ue==null||ue(ke,this),x?St(a.onRest,ke):(xe=l.onStart)==null||xe.call(l,ke,this)})}x&&this._set(q),v?r(_h(n.to,n,this._state,this)):ce?this._start():at(this)&&!g?this._pendingCalls.add(r):r(Eh(q))}_focus(e){let n=this.animation;e!==n.to&&(Jl(this)&&this._detach(),n.to=e,Jl(this)&&this._attach())}_attach(){let e=0,{to:n}=this.animation;Re(n)&&(Cn(n,this),vo(n)&&(e=n.priority+1)),this.priority=e}_detach(){let{to:e}=this.animation;Re(e)&&or(e,this)}_set(e,n=!0){let r=Te(e);if(!b.und(r)){let s=qe(this);if(!s||!Je(r,s.getValue())){let i=mo(r);!s||s.constructor!=i?Ta(this,i.create(r)):s.setValue(r),s&&M.batchedUpdates(()=>{this._onChange(r,n)})}}return qe(this)}_onStart(){let e=this.animation;e.changed||(e.changed=!0,Ln(this,"onStart",Oe(this,jn(this,e.to)),this))}_onChange(e,n){n||(this._onStart(),St(this.animation.onChange,e,this)),St(this.defaultProps.onChange,e,this),super._onChange(e,n)}_start(){let e=this.animation;qe(this).reset(Te(e.to)),e.immediate||(e.fromValues=e.values.map(n=>n.lastPosition)),at(this)||(lc(this,!0),On(this)||this._resume())}_resume(){$e.skipAnimation?this.finish():Vs.start(this)}_stop(e,n){if(at(this)){lc(this,!1);let r=this.animation;j(r.values,i=>{i.done=!0}),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),ir(this,{type:"idle",parent:this});let s=n?tn(this.get()):Oe(this.get(),jn(this,e??r.to));Vn(this._pendingCalls,s),r.changed&&(r.changed=!1,Ln(this,"onRest",s,this))}}};function jn(t,e){let n=cr(e),r=cr(t.get());return Je(r,n)}function Th(t,e=t.loop,n=t.to){let r=St(e);if(r){let s=r!==!0&&wh(r),i=(s||t).reverse,o=!s||s.reset;return hr({...t,loop:e,default:!1,pause:void 0,to:!i||go(n)?n:void 0,from:o?t.from:void 0,reset:o,...s})}}function hr(t){let{to:e,from:n}=t=wh(t),r=new Set;return b.obj(e)&&uc(e,r),b.obj(n)&&uc(n,r),t.keys=r.size?Array.from(r):null,t}function zg(t){let e=hr(t);return b.und(e.default)&&(e.default=Ia(e)),e}function uc(t,e){We(t,(n,r)=>n!=null&&e.add(r))}var Gg=["onStart","onRest","onChange","onPause","onResume"];function hc(t,e,n){t.animation[n]=e[n]!==vh(e,n)?yh(e[n],t.key):void 0}function Ln(t,e,...n){var r,s,i,o;(s=(r=t.animation)[e])==null||s.call(r,...n),(o=(i=t.defaultProps)[e])==null||o.call(i,...n)}var Qg=["onStart","onChange","onRest"],Wg=1,Kg=class{constructor(t,e){C(this,"id",Wg++);C(this,"springs",{});C(this,"queue",[]);C(this,"ref");C(this,"_flush");C(this,"_initialProps");C(this,"_lastAsyncId",0);C(this,"_active",new Set);C(this,"_changed",new Set);C(this,"_started",!1);C(this,"_item");C(this,"_state",{paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});C(this,"_events",{onStart:new Map,onChange:new Map,onRest:new Map});this._onFrame=this._onFrame.bind(this),e&&(this._flush=e),t&&this.start({default:!0,...t})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(t=>t.idle&&!t.isDelayed&&!t.isPaused)}get item(){return this._item}set item(t){this._item=t}get(){let t={};return this.each((e,n)=>t[n]=e.get()),t}set(t){for(let e in t){let n=t[e];b.und(n)||this.springs[e].set(n)}}update(t){return t&&this.queue.push(hr(t)),this}start(t){let{queue:e}=this;return t?e=Se(t).map(hr):this.queue=[],this._flush?this._flush(this,e):(Nh(this,e),Eo(this,e))}stop(t,e){if(t!==!!t&&(e=t),e){let n=this.springs;j(Se(e),r=>n[r].stop(!!t))}else ur(this._state,this._lastAsyncId),this.each(n=>n.stop(!!t));return this}pause(t){if(b.und(t))this.start({pause:!0});else{let e=this.springs;j(Se(t),n=>e[n].pause())}return this}resume(t){if(b.und(t))this.start({pause:!1});else{let e=this.springs;j(Se(t),n=>e[n].resume())}return this}each(t){We(this.springs,t)}_onFrame(){let{onStart:t,onChange:e,onRest:n}=this._events,r=this._active.size>0,s=this._changed.size>0;(r&&!this._started||s&&!this._started)&&(this._started=!0,Qn(t,([a,l])=>{l.value=this.get(),a(l,this,this._item)}));let i=!r&&this._started,o=s||i&&n.size?this.get():null;s&&e.size&&Qn(e,([a,l])=>{l.value=o,a(l,this,this._item)}),i&&(this._started=!1,Qn(n,([a,l])=>{l.value=o,a(l,this,this._item)}))}eventObserved(t){if(t.type=="change")this._changed.add(t.parent),t.idle||this._active.add(t.parent);else if(t.type=="idle")this._active.delete(t.parent);else return;M.onFrame(this._onFrame)}};function Eo(t,e){return Promise.all(e.map(n=>Ih(t,n))).then(n=>Ca(t,n))}async function Ih(t,e,n){let{keys:r,to:s,from:i,loop:o,onRest:a,onResolve:l}=e,c=b.obj(e.default)&&e.default;o&&(e.loop=!1),s===!1&&(e.to=null),i===!1&&(e.from=null);let u=b.arr(s)||b.fun(s)?s:void 0;u?(e.to=void 0,e.onRest=void 0,c&&(c.onRest=void 0)):j(Qg,v=>{let y=e[v];if(b.fun(y)){let _=t._events[v];e[v]=({finished:A,cancelled:I})=>{let x=_.get(y);x?(A||(x.finished=!1),I&&(x.cancelled=!0)):_.set(y,{value:null,finished:A||!1,cancelled:I||!1})},c&&(c[v]=e[v])}});let d=t._state;e.pause===!d.paused?(d.paused=e.pause,Vn(e.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(e.pause=!0);let f=(r||Object.keys(t.springs)).map(v=>t.springs[v].start(e)),p=e.cancel===!0||vh(e,"cancel")===!0;(u||p&&d.asyncId)&&f.push(bh(++t._lastAsyncId,{props:e,state:d,actions:{pause:fo,resume:fo,start(v,y){p?(ur(d,t._lastAsyncId),y(tn(t))):(v.onRest=a,y(_h(u,v,d,t)))}}})),d.paused&&await new Promise(v=>{d.resumeQueue.add(v)});let g=Ca(t,await Promise.all(f));if(o&&g.finished&&!(n&&g.noop)){let v=Th(e,o,s);if(v)return Nh(t,[v]),Ih(t,v,!0)}return l&&M.batchedUpdates(()=>l(g,t,t.item)),g}function dc(t,e){let n={...t.springs};return e&&j(Se(e),r=>{b.und(r.keys)&&(r=hr(r)),b.obj(r.to)||(r={...r,to:void 0}),Sh(n,r,s=>xh(s))}),Ch(t,n),n}function Ch(t,e){We(e,(n,r)=>{t.springs[r]||(t.springs[r]=n,Cn(n,t))})}function xh(t,e){let n=new Hg;return n.key=t,e&&Cn(n,e),n}function Sh(t,e,n){e.keys&&j(e.keys,r=>{(t[r]||(t[r]=n(r)))._prepareNode(e)})}function Nh(t,e){j(e,n=>{Sh(t.springs,n,r=>xh(r,t))})}var Ws=({children:t,...e})=>{let n=m.useContext(gs),r=e.pause||!!n.pause,s=e.immediate||!!n.immediate;e=Ag(()=>({pause:r,immediate:s}),[r,s]);let{Provider:i}=gs;return m.createElement(i,{value:e},t)},gs=Yg(Ws,{});Ws.Provider=gs.Provider;Ws.Consumer=gs.Consumer;function Yg(t,e){return Object.assign(t,m.createContext(e)),t.Provider._context=t,t.Consumer._context=t,t}var Xg=()=>{let t=[],e=function(r){Eg();let s=[];return j(t,(i,o)=>{if(b.und(r))s.push(i.start());else{let a=n(r,i,o);a&&s.push(i.start(a))}}),s};e.current=t,e.add=function(r){t.includes(r)||t.push(r)},e.delete=function(r){let s=t.indexOf(r);~s&&t.splice(s,1)},e.pause=function(){return j(t,r=>r.pause(...arguments)),this},e.resume=function(){return j(t,r=>r.resume(...arguments)),this},e.set=function(r){j(t,(s,i)=>{let o=b.fun(r)?r(i,s):r;o&&s.set(o)})},e.start=function(r){let s=[];return j(t,(i,o)=>{if(b.und(r))s.push(i.start());else{let a=this._getProps(r,i,o);a&&s.push(i.start(a))}}),s},e.stop=function(){return j(t,r=>r.stop(...arguments)),this},e.update=function(r){return j(t,(s,i)=>s.update(this._getProps(r,s,i))),this};let n=function(r,s,i){return b.fun(r)?r(i,s):r};return e._getProps=n,e};function Jg(t,e,n){let r=b.fun(e)&&e;r&&!n&&(n=[]);let s=m.useMemo(()=>r||arguments.length==3?Xg():void 0,[]),i=m.useRef(0),o=fh(),a=m.useMemo(()=>({ctrls:[],queue:[],flush(_,A){let I=dc(_,A);return i.current>0&&!a.queue.length&&!Object.keys(I).some(x=>!_.springs[x])?Eo(_,A):new Promise(x=>{Ch(_,I),a.queue.push(()=>{x(Eo(_,A))}),o()})}}),[]),l=m.useRef([...a.ctrls]),c=[],u=ec(t)||0;m.useMemo(()=>{j(l.current.slice(t,u),_=>{Lg(_,s),_.stop(!0)}),l.current.length=t,d(u,t)},[t]),m.useMemo(()=>{d(0,Math.min(u,t))},n);function d(_,A){for(let I=_;I<A;I++){let x=l.current[I]||(l.current[I]=new Kg(null,a.flush)),q=r?r(I,x):e[I];q&&(c[I]=zg(q))}}let f=l.current.map((_,A)=>dc(_,c[A])),p=m.useContext(Ws),g=ec(p),v=p!==g&&jg(p);Aa(()=>{i.current++,a.ctrls=l.current;let{queue:_}=a;_.length&&(a.queue=[],j(_,A=>A())),j(l.current,(A,I)=>{s==null||s.add(A),v&&A.start({default:p});let x=c[I];x&&($g(A,x.ref),A.ref?A.queue.push(x):A.start(x))})}),ph(()=>()=>{j(a.ctrls,_=>_.stop(!0))});let y=f.map(_=>({..._}));return s?[y,s]:y}function Ni(t,e){let n=b.fun(t),[[r],s]=Jg(1,n?t:[t],n?e||[]:e);return n||arguments.length==2?[r,s]:r}var Zg=class extends xa{constructor(n,r){super();C(this,"key");C(this,"idle",!0);C(this,"calc");C(this,"_active",new Set);this.source=n,this.calc=sr(...r);let s=this._get(),i=mo(s);Ta(this,i.create(s))}advance(n){let r=this._get(),s=this.get();Je(r,s)||(qe(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&fc(this._active)&&Di(this)}_get(){let n=b.arr(this.source)?this.source.map(Te):Se(Te(this.source));return this.calc(...n)}_start(){this.idle&&!fc(this._active)&&(this.idle=!1,j(Gs(this),n=>{n.done=!1}),$e.skipAnimation?(M.batchedUpdates(()=>this.advance()),Di(this)):Vs.start(this))}_attach(){let n=1;j(Se(this.source),r=>{Re(r)&&Cn(r,this),vo(r)&&(r.idle||this._active.add(r),n=Math.max(n,r.priority+1))}),this.priority=n,this._start()}_detach(){j(Se(this.source),n=>{Re(n)&&or(n,this)}),this._active.clear(),Di(this)}eventObserved(n){n.type=="change"?n.idle?this.advance():(this._active.add(n.parent),this._start()):n.type=="idle"?this._active.delete(n.parent):n.type=="priority"&&(this.priority=Se(this.source).reduce((r,s)=>Math.max(r,(vo(s)?s.priority:0)+1),0))}};function ey(t){return t.idle!==!1}function fc(t){return!t.size||Array.from(t).every(ey)}function Di(t){t.idle||(t.idle=!0,j(Gs(t),e=>{e.done=!0}),ir(t,{type:"idle",parent:t}))}$e.assign({createStringInterpolator:hh,to:(t,e)=>new Zg(t,e)});var Dh=/^--/;function ty(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!Dh.test(t)&&!(Yn.hasOwnProperty(t)&&Yn[t])?e+"px":(""+e).trim()}var pc={};function ny(t,e){if(!t.nodeType||!t.setAttribute)return!1;let n=t.nodeName==="filter"||t.parentNode&&t.parentNode.nodeName==="filter",{style:r,children:s,scrollTop:i,scrollLeft:o,viewBox:a,...l}=e,c=Object.values(l),u=Object.keys(l).map(d=>n||t.hasAttribute(d)?d:pc[d]||(pc[d]=d.replace(/([A-Z])/g,f=>"-"+f.toLowerCase())));s!==void 0&&(t.textContent=s);for(let d in r)if(r.hasOwnProperty(d)){let f=ty(d,r[d]);Dh.test(d)?t.style.setProperty(d,f):t.style[d]=f}u.forEach((d,f)=>{t.setAttribute(d,c[f])}),i!==void 0&&(t.scrollTop=i),o!==void 0&&(t.scrollLeft=o),a!==void 0&&t.setAttribute("viewBox",a)}var Yn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ry=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1),sy=["Webkit","Ms","Moz","O"];Yn=Object.keys(Yn).reduce((t,e)=>(sy.forEach(n=>t[ry(n,e)]=t[e]),t),Yn);var iy=/^(matrix|translate|scale|rotate|skew)/,oy=/^(translate)/,ay=/^(rotate|skew)/,ki=(t,e)=>b.num(t)&&t!==0?t+e:t,is=(t,e)=>b.arr(t)?t.every(n=>is(n,e)):b.num(t)?t===e:parseFloat(t)===e,ly=class extends Qs{constructor({x:t,y:e,z:n,...r}){let s=[],i=[];(t||e||n)&&(s.push([t||0,e||0,n||0]),i.push(o=>[`translate3d(${o.map(a=>ki(a,"px")).join(",")})`,is(o,0)])),We(r,(o,a)=>{if(a==="transform")s.push([o||""]),i.push(l=>[l,l===""]);else if(iy.test(a)){if(delete r[a],b.und(o))return;let l=oy.test(a)?"px":ay.test(a)?"deg":"";s.push(Se(o)),i.push(a==="rotate3d"?([c,u,d,f])=>[`rotate3d(${c},${u},${d},${ki(f,l)})`,is(f,0)]:c=>[`${a}(${c.map(u=>ki(u,l)).join(",")})`,is(c,a.startsWith("scale")?1:0)])}}),s.length&&(r.transform=new cy(s,i)),super(r)}},cy=class extends lh{constructor(n,r){super();C(this,"_value",null);this.inputs=n,this.transforms=r}get(){return this._value||(this._value=this._get())}_get(){let n="",r=!0;return j(this.inputs,(s,i)=>{let o=Te(s[0]),[a,l]=this.transforms[i](b.arr(o)?o:s.map(Te));n+=" "+a,r=r&&l}),r?"none":n}observerAdded(n){n==1&&j(this.inputs,r=>j(r,s=>Re(s)&&Cn(s,this)))}observerRemoved(n){n==0&&j(this.inputs,r=>j(r,s=>Re(s)&&or(s,this)))}eventObserved(n){n.type=="change"&&(this._value=null),ir(this,n)}},uy=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];$e.assign({batchedUpdates:ua.unstable_batchedUpdates,createStringInterpolator:hh,colors:Jm});var hy=kg(uy,{applyAnimatedValues:ny,createAnimatedStyle:t=>new ly(t),getComponentProps:({scrollTop:t,scrollLeft:e,...n})=>n}),Ri=hy.animated;const dy="/assets/group-working-2c2d324b.webp",fy="/assets/girl-smiling-bb136652.webp",py="/assets/man-on-phone-08124045.webp",my=()=>{const[t,e]=Ni(()=>({y:0})),[n,r]=Ni(()=>({y:0})),[s,i]=Ni(()=>({y:0})),o=()=>e({y:-10}),a=()=>e({y:0}),l=()=>r({y:-10}),c=()=>r({y:0}),u=()=>i({y:-10}),d=()=>i({y:0});return h.jsx("div",{children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col text-section",children:[h.jsx("h1",{className:"landing-page-headings",children:"Better hiring starts with Reel Talent"}),h.jsx("p",{className:"landing-page-pg",children:"Hiring good people is important for the success of any business. They bring new ideas, energy, and skill to the table, and help drive the company forward. At Reel Talent, we understand the importance of finding the right candidates for your organization, and we strive to make the hiring process as easy and effective as possible."})]}),h.jsx("div",{className:"col image-section",children:h.jsx(Ri.img,{src:dy,alt:"First Image",className:"aspect-ratio-3-4",style:{transform:t.y.interpolate(f=>`translateY(${f}px)`)},onMouseEnter:o,onMouseLeave:a})})]}),h.jsxs("div",{className:"row",children:[h.jsx("div",{className:"col image-section image__girl",children:h.jsx(Ri.img,{loading:"lazy",src:fy,alt:"Second Image",className:"aspect-ratio-3-4",style:{transform:n.y.interpolate(f=>`translateY(${f}px)`)},onMouseEnter:l,onMouseLeave:c})}),h.jsxs("div",{className:"col text-section",children:[h.jsx("h1",{className:"landing-page-headings",children:"The Benefits of Good Hiring Practices"}),h.jsx("p",{className:"landing-page-pg",children:"Another important aspect of hiring good people is that they help to create a positive and productive work environment. This in turn leads to higher employee satisfaction and retention, which is good for both the company and the employees."})]})]}),h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col text-section",children:[h.jsx("h1",{className:"landing-page-headings",children:"How Reel Talent Can Help You Hire the Right People"}),h.jsx("p",{className:"landing-page-pg",children:"At Reel Talent, we are dedicated to providing our clients with the best possible service and support. Whether you're a small startup or a large corporation, we have the resources and expertise to help you find the talent you need to achieve your goals."})]}),h.jsx("div",{className:"col image-section",children:h.jsx(Ri.img,{loading:"lazy",src:py,alt:"Second Image",className:"aspect-ratio-3-4",style:{transform:s.y.interpolate(f=>`translateY(${f}px)`)},onMouseEnter:u,onMouseLeave:d})})]})]})})};const gy="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCADIAMgDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAIGAwUHBAEI/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAECAwQFBv/aAAwDAQACEAMQAAAB/TA2agAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4fURJ8+gAAAAAAAAADz56/lnW1/Q6z1c9YtfBeu8id8ONQAAAAAAAAD5p9ziyTxrzdSq3ps9f6NrLpz0xxdcAAAAABjhTdhuNXrodSc+g20dtUZ+HB2ott+4vk0LfoX7SLv5SAwQAAAAAMUqxqske5bDDLDNOKM43mra3beDsMeSc7W+dn45d+Q6APLYQAAAAHl9WO00mGaHbvhx58eScMM0LzV/J7/AD9a0JzmvCxaTfarpY8fqAAAAAAVzV3OsdG/gh6Ibl/PHP8ALzWvJYdJ0ssJzyWvj3up2Wu6UPJ6AAAAAACMhqvDY2e1YjaV5q3hu6887x9IZr85l0RFtfsDn4ArUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//xAArEAAABgEBBwMFAQAAAAAAAAAAAQIDBBEFMBASExQVIEAGISQWIiU0cDP/2gAIAQEAAQUC/hdi/HccJtMnKKSX1OpCoHqBiYrxcmr7Mm4bjyUBKBhZKpMLxJzXEbnM7spKAlAwTRtw/EMhMxbcolYaQg4uFWakpJCdZa0tpeytBWRfMLkvrEqRkWS61OBZqcQjep5jR47NR8h4DzqWUSJCpC+ySzwpFCgXsMFmTka+Qe4rvbkS+RQoUEWhWNl87E1HFbjZ7D7J/wDvQoUKHpp6ndSV+vsPsme8ihQoUMH7ZHUWnfQZVtPbKL5FChQoYUvyGrNZ3HBWyhQmIp6hQoUMP+/qrQTiXo6mVUKFChLZ30UKFChj1cOZrGRKJyAkwcFwhyTo5J0ck6HcQtYPESSHTZBDp8gdPkCK84pH8c//xAAdEQACAgIDAQAAAAAAAAAAAAAAAREwAiESE1AQ/9oACAEDAQE/AfOgeMWYwZtRCqgi2CDJargga1QvqIGtUyzkzm0drO5j35f/xAAqEQABBAECAwcFAAAAAAAAAAABAAIDERIEMBAUIQUiMUFQUXETICNCkf/aAAgBAgEBPwH02NubqUOjhwt4Wu0jYRnH4bbHYm1DrI3NAJpa3Ute3BuxFCZPhNhjb5JmLP1C+lCReI/in0EEo6CipoXQPwdsMGIrjGe4Fa7RjEkWXmPvb0KCHBp7oVrUH8TvjYhlsUVatRvtqtTdY3DZEzwuZehqpG+C5+T2XPP9k42b9L//xAAyEAABAgIFCQgDAQAAAAAAAAABAAIDERIgMDFBISIyM0JRYXGBBBATIzRAUqFicLGR/9oACAEBAAY/Av1GSbkXUvDYFmtMQfkgwzhPPyu9s0Khst7xSyubmk+1yXhO45e8k7Tp+2+LsCtCkN4KnFzW7sUAMgFvNxkF5bZ8StOXILXvbyKLmdriPb9r1UT/AFepevMoxhxEiqIPhxfg72Bc5TddgKr24VB2eOfM2XfK3o7La3SoCDIjFMibVzudq524V+lWLCwIpWr+Vd1VnEG1c3eK7qsPr/Lalg6tzqw+v8tqJuWW7fVmLxVhHjK3kcoWaZLArR+1o/a0PtTDaJWhPqtUVqnLVOQEWG5r9+/9O//EACcQAQEAAQMBCAMBAQAAAAAAAAEAESExQXEQMEBRYYGhsXCR8MHx/9oACAEBAAE/IfwaZ8MweBvYQOZzHuZWMxU6MG4+jHhHaQDsuW179D17VU3l5HONvCO0uTUuZkJpiO1dELMOm3hc95btiwcHlKFYS3LlRB4WAOO/UFPlhSf2+J/h8gjHVedk3O47IkNZ/e5hHr/3BYdH7no8+AVrQ487JL4JMzMRGgcnSKUqEcJslqh8/wCD69+qh4ffmZmZt35mIQqQysg4YdN4BwN+99cBtSskJJmOfbilIRmXRDqaf78d8WJISSWIdAH1EIUr6UfHe+sgSpHckkhJYvgfqKUpf0X2d9p05veSYkxmRfIMUhSnHS+zvn45ViQy9vNMY9ipFnh8yIUpRb0Pu0/3v3ACcNqPTupbcdBn/nX9xf2Eu+5TDbCekdiyoCCbIw4afh1//9oADAMBAAIAAwAAABAMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMc8sMMMMMMMMMMen0MMMMMMMMMNX3QMMMMMMNs5Nm6AMMMMMMWritu/wCDDDDDDECECzOBDDDDDDDX3rALHDDDDDDDTDTBRSCDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD//EAB4RAQEBAAEFAQEAAAAAAAAAAAEAETAQITFBUFFh/9oACAEDAQE/EPmkJZBvGMn5cveHDl3RAkzgCCDoJ5XBkEEQne8C3tZZHSJsw/OELpHiQfov5khaGfL/AP/EACURAQACAAQFBQEAAAAAAAAAAAEAESFBUdEwMWFxoSBQgZGx8P/aAAgBAgEBPxD22secpLN5f2MGZyk04aGcpawGuEuXeOLlwGbcIMoL3xlwbDRDaAQqejaKO9HL65RIOPhNT1grRBM5QYT6GMUjq/Ge/wAetUrrFFBlXaIzdfq/OARc4hBBH0wjNiMx/OBymG3fedA87xy6f3zDNHneL5PO8BgVeXtf/8QAKRABAAECBAUEAwEBAAAAAAAAAREAITFBUWEQMHGBoZHB0fAgQLFw4f/aAAgBAQABPxD/AApQpBQWiX6rYqHrZVYwlKhhu67HmoYeboHostJ/6XHRDn1CcqUn6josiLgzg/7REoEUYLJnsIetYNqhi1I7fYvEKd4QnNH9QzSKWADMz+7UsSBGpAPka2a2aJRAnUBL1H9RuUBpHMykcgupp6U5Nm0Q9lHxTaqSFsZLHWaP+QdADA5+Mmx4KtxOqHYX8lKkGgR5FqIFtEnZE8UVC5cA62LnSOlJ+j+UJCJoD0SgHQQxbQh3GnHgYwK9LwdqAOfA0whisg3ptBGA2fnfjYqQyNxyoh7K6IkO0xwoqRs4UQjkjT8AELuDxTBz64866Skhg5nt2oRRoTRrFQ2DEPqnt+HwXlOwgyI606kR+4k2TZObqUT2JqTDKsq4vEMSjQvUFsHlra/C1FEFuAko6g5oLHrps4VmrXAb8K6SPg+/H9qtqmIWFuk325psfMkUAEJCOXBj4M9N9Pd1/hW1+FUL6c7GW6uzOd8fXi2XwLlLE29Et7VtVt8aGZaROcRih3HUphIlst8HbhaPBbquokwxzK2fwqQqwS5QeeWWYISNOrn9xxPNNQbqZ/YpTg+u9M9vv60/U+9IWS7CJ0mnmE19+lSoezD70P4D5pgQEwQPmpBAjPetg/47/9k=",At=()=>h.jsxs("footer",{children:[h.jsxs("ul",{className:"footer__container",children:[h.jsx("li",{className:"footer__links",children:h.jsx(X,{to:"/",children:"About Us"})}),h.jsx("li",{className:"footer__links",children:h.jsx(X,{to:"/",children:"Our Services"})}),h.jsx("li",{className:"footer__links",children:h.jsx(X,{to:"/legal",children:"Terms and Conditions"})}),h.jsx("li",{className:"footer__links",children:h.jsx(X,{to:"/legal#privacy",children:"Privacy Policy"})})]}),h.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," Reel Talent. All rights reserved.",h.jsxs("div",{className:"powered-by",children:["Powered by"," ",h.jsxs("a",{className:"teamAiLink",href:"https://www.team.ai/talent-delivery-services",target:"_blank",rel:"noopener noreferrer",children:[h.jsx("img",{src:gy,className:"teamAiLogo",alt:"Team AI",width:35}),h.jsx("p",{className:"teamAiTitle",children:" Team AI"})]})," "]})]})]}),yy=()=>h.jsxs("div",{children:[h.jsx(it,{}),h.jsx(my,{}),h.jsx(At,{})]});/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var _o=function(t,e){return _o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var s in r)r.hasOwnProperty(s)&&(n[s]=r[s])},_o(t,e)};function Sr(t,e){_o(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var dr=function(){return dr=Object.assign||function(e){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},dr.apply(this,arguments)};function vy(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var wy=`/*
  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css
*/

.calendly-inline-widget,
.calendly-inline-widget *,
.calendly-badge-widget,
.calendly-badge-widget *,
.calendly-overlay,
.calendly-overlay * {
    font-size:16px;
    line-height:1.2em
}

.calendly-inline-widget iframe,
.calendly-badge-widget iframe,
.calendly-overlay iframe {
    display:inline;
    width:100%;
    height:100%
}

.calendly-popup-content {
    position:relative
}

.calendly-popup-content.calendly-mobile {
    -webkit-overflow-scrolling:touch;
    overflow-y:auto
}

.calendly-overlay {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    overflow:hidden;
    z-index:9999;
    background-color:#a5a5a5;
    background-color:rgba(31,31,31,0.4)
}

.calendly-overlay .calendly-close-overlay {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0
}

.calendly-overlay .calendly-popup {
    box-sizing:border-box;
    position:absolute;
    top:50%;
    left:50%;
    -webkit-transform:translateY(-50%) translateX(-50%);
    transform:translateY(-50%) translateX(-50%);
    width:80%;
    min-width:900px;
    max-width:1000px;
    height:90%;
    max-height:680px
}

@media (max-width: 975px) {
    .calendly-overlay .calendly-popup {
        position:fixed;
        top:50px;
        left:0;
        right:0;
        bottom:0;
        -webkit-transform:none;
        transform:none;
        width:100%;
        height:auto;
        min-width:0;
        max-height:none
    }
}

.calendly-overlay .calendly-popup .calendly-popup-content {
    height:100%;
}

.calendly-overlay .calendly-popup-close {
    position:absolute;
    top:25px;
    right:25px;
    color:#fff;
    width:19px;
    height:19px;
    cursor:pointer;
    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;
    background-size:contain
}

@media (max-width: 975px) {
    .calendly-overlay .calendly-popup-close {
        top:15px;
        right:15px
    }
}

.calendly-badge-widget {
    position:fixed;
    right:20px;
    bottom:15px;
    z-index:9998
}

.calendly-badge-widget .calendly-badge-content {
    display:table-cell;
    width:auto;
    height:45px;
    padding:0 30px;
    border-radius:25px;
    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;
    font-family:sans-serif;
    text-align:center;
    vertical-align:middle;
    font-weight:bold;
    font-size:14px;
    color:#fff;
    cursor:pointer
}

.calendly-badge-widget .calendly-badge-content.calendly-white {
    color:#666a73
}

.calendly-badge-widget .calendly-badge-content span {
    display:block;
    font-size:12px
}

.calendly-spinner {
    position:absolute;
    top:50%;
    left:0;
    right:0;
    -webkit-transform:translateY(-50%);
    transform:translateY(-50%);
    text-align:center;
    z-index:-1
}

.calendly-spinner>div {
    display:inline-block;
    width:18px;
    height:18px;
    background-color:#e1e1e1;
    border-radius:50%;
    vertical-align:middle;
    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;
    animation:calendly-bouncedelay 1.4s infinite ease-in-out;
    -webkit-animation-fill-mode:both;
    animation-fill-mode:both
}

.calendly-spinner .calendly-bounce1 {
    -webkit-animation-delay:-0.32s;
    animation-delay:-0.32s
}

.calendly-spinner .calendly-bounce2 {
    -webkit-animation-delay:-0.16s;
    animation-delay:-0.16s
}

@-webkit-keyframes calendly-bouncedelay {
    0%,80%,100% {
        -webkit-transform:scale(0);
        transform:scale(0)
    } 
    
    40%{
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}

@keyframes calendly-bouncedelay{ 
    0%,80%,100% {
        -webkit-transform:scale(0);
        transform:scale(0)
    }
    
    40% {
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}`;vy(wy);function Pi(t){return t.charAt(0)==="#"?t.slice(1):t}function by(t){return t!=null&&t.primaryColor&&(t.primaryColor=Pi(t.primaryColor)),t!=null&&t.textColor&&(t.textColor=Pi(t.textColor)),t!=null&&t.backgroundColor&&(t.backgroundColor=Pi(t.backgroundColor)),t}var mc;(function(t){t.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",t.EVENT_TYPE_VIEWED="calendly.event_type_viewed",t.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",t.EVENT_SCHEDULED="calendly.event_scheduled"})(mc||(mc={}));var kh=function(t){var e=t.url,n=t.prefill,r=n===void 0?{}:n,s=t.pageSettings,i=s===void 0?{}:s,o=t.utm,a=o===void 0?{}:o,l=t.embedType,c=by(i),u=c.backgroundColor,d=c.hideEventTypeDetails,f=c.hideLandingPageDetails,p=c.primaryColor,g=c.textColor,v=c.hideGdprBanner,y=r.customAnswers,_=r.date,A=r.email,I=r.firstName,x=r.guests,q=r.lastName,W=r.location,Ce=r.name,le=a.utmCampaign,Ye=a.utmContent,ce=a.utmMedium,Be=a.utmSource,ue=a.utmTerm,ke=a.salesforce_uuid,xe=e.indexOf("?"),Qt=xe>-1,Pn=e.slice(xe+1),jl=Qt?e.slice(0,xe):e,Mp=[Qt?Pn:null,u?"background_color="+u:null,d?"hide_event_type_details=1":null,f?"hide_landing_page_details=1":null,p?"primary_color="+p:null,g?"text_color="+g:null,v?"hide_gdpr_banner=1":null,Ce?"name="+encodeURIComponent(Ce):null,W?"location="+encodeURIComponent(W):null,I?"first_name="+encodeURIComponent(I):null,q?"last_name="+encodeURIComponent(q):null,x?"guests="+x.map(encodeURIComponent).join(","):null,A?"email="+encodeURIComponent(A):null,_&&_ instanceof Date?"date="+Ey(_):null,le?"utm_campaign="+encodeURIComponent(le):null,Ye?"utm_content="+encodeURIComponent(Ye):null,ce?"utm_medium="+encodeURIComponent(ce):null,Be?"utm_source="+encodeURIComponent(Be):null,ue?"utm_term="+encodeURIComponent(ue):null,ke?"salesforce_uuid="+encodeURIComponent(ke):null,l?"embed_type="+l:null,"embed_domain=1"].concat(y?Ay(y):[]).filter(function(Op){return Op!==null}).join("&");return jl+"?"+Mp},Ey=function(t){var e=t.getMonth()+1,n=t.getDate(),r=t.getFullYear();return[r,e<10?"0"+e:e,n<10?"0"+n:n].join("-")},_y=/^a\d{1,2}$/,Ay=function(t){var e=Object.keys(t).filter(function(n){return n.match(_y)});return e.length?e.map(function(n){return n+"="+encodeURIComponent(t[n])}):[]},Rh=function(t){Sr(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.render=function(){return m.createElement("div",{className:"calendly-spinner"},m.createElement("div",{className:"calendly-bounce1"}),m.createElement("div",{className:"calendly-bounce2"}),m.createElement("div",{className:"calendly-bounce3"}))},e}(m.Component),Ty={minWidth:"320px",height:"630px"},Iy=function(t){Sr(e,t);function e(n){var r=t.call(this,n)||this;return r.state={isLoading:!0},r.onLoad=r.onLoad.bind(r),r}return e.prototype.onLoad=function(){this.setState({isLoading:!1})},e.prototype.render=function(){var n=kh({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"});return m.createElement("div",{className:"calendly-inline-widget",style:this.props.styles||Ty},this.state.isLoading&&m.createElement(Rh,null),m.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:n}))},e}(m.Component),Cy=function(t){Sr(e,t);function e(n){var r=t.call(this,n)||this;return r.state={isLoading:!0},r.onLoad=r.onLoad.bind(r),r}return e.prototype.onLoad=function(){this.setState({isLoading:!1})},e.prototype.render=function(){var n=kh({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"PopupWidget"});return m.createElement(m.Fragment,null,this.state.isLoading&&m.createElement(Rh,null),m.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:n}))},e}(m.Component),Ph=function(t){if(!t.open)return null;if(!t.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return ua.createPortal(m.createElement("div",{className:"calendly-overlay"},m.createElement("div",{onClick:t.onModalClose,className:"calendly-close-overlay"}),m.createElement("div",{className:"calendly-popup"},m.createElement("div",{className:"calendly-popup-content"},m.createElement(Cy,dr({},t)))),m.createElement("button",{className:"calendly-popup-close",onClick:t.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),t.rootElement)};(function(t){Sr(e,t);function e(n){var r=t.call(this,n)||this;return r.state={isOpen:!1},r.onClick=r.onClick.bind(r),r.onClose=r.onClose.bind(r),r}return e.prototype.onClick=function(n){n.preventDefault(),this.setState({isOpen:!0})},e.prototype.onClose=function(n){n.stopPropagation(),this.setState({isOpen:!1})},e.prototype.render=function(){return m.createElement(m.Fragment,null,m.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),m.createElement(Ph,dr({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},e})(m.Component);(function(t){Sr(e,t);function e(n){var r=t.call(this,n)||this;return r.state={isOpen:!1},r.onClick=r.onClick.bind(r),r.onClose=r.onClose.bind(r),r}return e.prototype.onClick=function(){this.setState({isOpen:!0})},e.prototype.onClose=function(n){n.stopPropagation(),this.setState({isOpen:!1})},e.prototype.render=function(){return m.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},m.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&m.createElement("span",null,"powered by Calendly")),m.createElement(Ph,dr({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},e})(m.Component);const xy=()=>h.jsxs("div",{className:"calendly__main",children:[h.jsxs("div",{className:"calendly__title",children:[h.jsx("h2",{className:"calendly__heading",children:"Book a Demo with Reel Talent"}),h.jsx("p",{className:"calendly__pg",children:"Experience the power of Reel Talent in simplifying your recruitment process. Schedule a free, live 1:1 tour with us to see how we can elevate your workforce. Let us know your recruitment challenges and we'll show you how Reel Talent can supercharge your hiring."})]}),h.jsx(Iy,{pageSettings:{backgroundColor:"fff",hideEventTypeDetails:!1,hideLandingPageDetails:!1,primaryColor:"00a2ff",textColor:"4d5055"},url:"https://calendly.com/reeltalent-247/30min"})]});const fr={_origin:"https://api.emailjs.com"},Sy=(t,e="https://api.emailjs.com")=>{fr._userID=t,fr._origin=e},Mh=(t,e,n)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class gc{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const Oh=(t,e,n={})=>new Promise((r,s)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:o})=>{const a=new gc(o);a.status===200||a.text==="OK"?r(a):s(a)}),i.addEventListener("error",({target:o})=>{s(new gc(o))}),i.open("POST",fr._origin+t,!0),Object.keys(n).forEach(o=>{i.setRequestHeader(o,n[o])}),i.send(e)}),Ny=(t,e,n,r)=>{const s=r||fr._userID;return Mh(s,t,e),Oh("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},Dy=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},ky=(t,e,n,r)=>{const s=r||fr._userID,i=Dy(n);Mh(s,t,e);const o=new FormData(i);return o.append("lib_version","3.11.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",s),Oh("/api/v1.0/email/send-form",o)},Ry={init:Sy,send:Ny,sendForm:ky};var jh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yc=Y.createContext&&Y.createContext(jh),mt=globalThis&&globalThis.__assign||function(){return mt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},mt.apply(this,arguments)},Py=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n};function Lh(t){return t&&t.map(function(e,n){return Y.createElement(e.tag,mt({key:n},e.attr),Lh(e.child))})}function Nr(t){return function(e){return Y.createElement(My,mt({attr:mt({},t.attr)},e),Lh(t.child))}}function My(t){var e=function(n){var r=t.attr,s=t.size,i=t.title,o=Py(t,["attr","size","title"]),a=s||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Y.createElement("svg",mt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:mt(mt({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&Y.createElement("title",null,i),t.children)};return yc!==void 0?Y.createElement(yc.Consumer,null,function(n){return e(n)}):e(jh)}function Oy(t){return Nr({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}}]})(t)}function jy(t){return Nr({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}}]})(t)}const Ly="/assets/dog-waiting-2701046f.jpg",$y=()=>{const t=m.useRef(),[e,n]=m.useState(!1),r=s=>{s.preventDefault(),Ry.sendForm("service_i6ytsvs","template_ra8vv2k",t.current,"vvgAiHNMFcWHykmQ2").then(i=>{console.log(i.text),n(!0)},i=>{console.log(i.text),n(!0)})};return e?h.jsxs("div",{className:"thank-you",children:[h.jsx("img",{src:Ly,className:"thank-you-img",alt:"dog looking at a computer screen"}),h.jsx("h1",{className:"thank-you-header",children:"Thank you for reaching out!"}),h.jsxs("p",{children:["We will get back to you soon. In the meantime, check out our"," ",h.jsx(X,{className:"thank-you-blog",to:"/blog",children:"blog"}),"."]})]}):h.jsxs("form",{ref:t,onSubmit:r,children:[h.jsxs("div",{className:"form-section",children:[h.jsxs("div",{className:"form-row",children:[h.jsx("label",{children:"Name"}),h.jsx("input",{type:"text",name:"user_name"})]}),h.jsxs("div",{className:"form-row",children:[h.jsx("label",{children:"Work email address"}),h.jsx("input",{type:"email",name:"user_email"})]})]}),h.jsxs("div",{className:"form-section",children:[h.jsxs("div",{className:"form-row",children:[h.jsx("label",{children:"Company name"}),h.jsx("input",{type:"text",name:"company_name"})]}),h.jsxs("div",{className:"form-row",children:[h.jsx("label",{children:"Company size"}),h.jsxs("select",{name:"company_size",children:[h.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select size"}),h.jsx("option",{value:"1-10",children:"1-10"}),h.jsx("option",{value:"11-50",children:"11-50"}),h.jsx("option",{value:"51-100",children:"51-100"}),h.jsx("option",{value:"100+",children:"100+"})]})]})]}),h.jsxs("div",{className:"form-text-container",children:[h.jsx("label",{children:"Message"}),h.jsx("textarea",{className:"form-textarea",name:"message"})]}),h.jsx("input",{className:"contact-btn",type:"submit",value:"Send"})]})},Fy=()=>h.jsxs("div",{children:[h.jsx(it,{})," ",h.jsxs("main",{className:"demo__main",children:[h.jsxs("div",{className:"demo__container",children:[h.jsx("h2",{className:"demo__title",children:"See how Reel Talent can improve your hiring"}),h.jsx("p",{className:"demo__pg",children:"From recruiting candidates to onboarding new team members, Reel Talent gives your company everything you need to be great at hiring."}),h.jsx("h4",{className:"demo__booking",children:"Book a session with us to:"}),h.jsxs("ul",{className:"demo__list",children:[h.jsx("li",{className:"",children:"Get an overview of the Reel Talent platform"}),h.jsx("li",{className:"",children:"Discuss your goals with a product expert"}),h.jsx("li",{className:"",children:"Receieve pricing details based on your needs"})]}),h.jsxs("p",{className:"demo__pg",children:[" ","Once you complete the request form, a Reel Talent team member will reach out within 24 business hours."]})]}),h.jsxs("div",{className:"calendly__container",children:[" ",h.jsx(xy,{})]})]}),h.jsx("section",{className:"contact__main",children:h.jsxs("div",{className:"contact__container",children:[" ",h.jsx("h2",{className:"contact__heading",children:"Find Your Perfect Fit, Connect with Us Today 👋"})]})}),h.jsx($y,{}),h.jsx(At,{})]});const Ks=()=>(Us(),h.jsxs("div",{children:[h.jsx(it,{}),h.jsxs("div",{className:"error-container",children:[h.jsx("h1",{className:"error__heading",children:"Oops! Something went wrong."}),h.jsx("p",{className:"error__pg",children:"The page you are looking for cannot be found or is unavailable."}),h.jsx(X,{to:"/",children:h.jsx("button",{className:"btn1",children:"Return Home"})})]}),h.jsx(At,{})]}));const Uy="/assets/loading-bar-c873dc4b.svg",$h=()=>h.jsxs(h.Fragment,{children:[h.jsx(it,{}),h.jsx("div",{className:"loading__screen",children:h.jsx("img",{src:Uy,className:"loading__img",alt:"loading data"})})]});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},By=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Uh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(n[u],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):By(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||d==null)throw new Vy;const f=i<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),d!==64){const g=c<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qy=function(t){const e=Fh(t);return Uh.encodeByteArray(e,!0)},ys=function(t){return qy(t).replace(/\./g,"")},Hy=function(t){try{return Uh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=()=>zy().__FIREBASE_DEFAULTS__,Qy=()=>{if(typeof process>"u"||typeof{MANPATH:"/opt/homebrew/share/man::",TERM_PROGRAM:"vscode",NODE:"/usr/local/bin/node",INIT_CWD:"/Users/bobby./Desktop/reel-talent",TERM:"xterm-256color",SHELL:"/bin/zsh",npm_config_metrics_registry:"https://registry.npmjs.org/",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/y1/v3c69tkn579_mmhrg349bx440000gn/T/",npm_config_global_prefix:"/usr/local",TERM_PROGRAM_VERSION:"1.77.3",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/bobby./Desktop/reel-talent",USER:"bobby.",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/usr/local/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.g1L65Vwl7v/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_execpath:"/usr/local/lib/node_modules/npm/bin/npm-cli.js",PATH:"/Users/bobby./Desktop/reel-talent/node_modules/.bin:/Users/bobby./Desktop/node_modules/.bin:/Users/bobby./node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin",npm_package_json:"/Users/bobby./Desktop/reel-talent/package.json",_:"/Users/bobby./Desktop/reel-talent/node_modules/.bin/vite",npm_config_userconfig:"/Users/bobby./.npmrc",npm_config_init_module:"/Users/bobby./.npm-init.js",__CFBundleIdentifier:"com.microsoft.VSCode",npm_command:"run-script",PWD:"/Users/bobby./Desktop/reel-talent",npm_lifecycle_event:"build",EDITOR:"vi",npm_package_name:"reel-talent",LANG:"en_US.UTF-8",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",XPC_FLAGS:"0x0",npm_config_node_gyp:"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"1.0.0",XPC_SERVICE_NAME:"application.com.microsoft.VSCode.45844650.45844656",SHLVL:"1",HOME:"/Users/bobby.",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/bobby./.npm",LOGNAME:"bobby.",npm_lifecycle_script:"vite build",VSCODE_GIT_IPC_HANDLE:"/var/folders/y1/v3c69tkn579_mmhrg349bx440000gn/T/vscode-git-d5d8c343f6.sock",npm_config_user_agent:"npm/9.5.0 node/v18.14.2 darwin arm64 workspaces/false",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",npm_node_execpath:"/usr/local/bin/node",npm_config_prefix:"/usr/local",COLORTERM:"truecolor",NODE_ENV:"production"}>"u")return;const t={MANPATH:"/opt/homebrew/share/man::",TERM_PROGRAM:"vscode",NODE:"/usr/local/bin/node",INIT_CWD:"/Users/bobby./Desktop/reel-talent",TERM:"xterm-256color",SHELL:"/bin/zsh",npm_config_metrics_registry:"https://registry.npmjs.org/",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/y1/v3c69tkn579_mmhrg349bx440000gn/T/",npm_config_global_prefix:"/usr/local",TERM_PROGRAM_VERSION:"1.77.3",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/bobby./Desktop/reel-talent",USER:"bobby.",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/usr/local/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.g1L65Vwl7v/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_execpath:"/usr/local/lib/node_modules/npm/bin/npm-cli.js",PATH:"/Users/bobby./Desktop/reel-talent/node_modules/.bin:/Users/bobby./Desktop/node_modules/.bin:/Users/bobby./node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin",npm_package_json:"/Users/bobby./Desktop/reel-talent/package.json",_:"/Users/bobby./Desktop/reel-talent/node_modules/.bin/vite",npm_config_userconfig:"/Users/bobby./.npmrc",npm_config_init_module:"/Users/bobby./.npm-init.js",__CFBundleIdentifier:"com.microsoft.VSCode",npm_command:"run-script",PWD:"/Users/bobby./Desktop/reel-talent",npm_lifecycle_event:"build",EDITOR:"vi",npm_package_name:"reel-talent",LANG:"en_US.UTF-8",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",XPC_FLAGS:"0x0",npm_config_node_gyp:"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"1.0.0",XPC_SERVICE_NAME:"application.com.microsoft.VSCode.45844650.45844656",SHLVL:"1",HOME:"/Users/bobby.",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/bobby./.npm",LOGNAME:"bobby.",npm_lifecycle_script:"vite build",VSCODE_GIT_IPC_HANDLE:"/var/folders/y1/v3c69tkn579_mmhrg349bx440000gn/T/vscode-git-d5d8c343f6.sock",npm_config_user_agent:"npm/9.5.0 node/v18.14.2 darwin arm64 workspaces/false",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",npm_node_execpath:"/usr/local/bin/node",npm_config_prefix:"/usr/local",COLORTERM:"truecolor",NODE_ENV:"production"}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hy(t[1]);return e&&JSON.parse(e)},Bh=()=>{try{return Gy()||Qy()||Wy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ky=t=>{var e,n;return(n=(e=Bh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yy=t=>{const e=Ky(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Xy=()=>{var t;return(t=Bh())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ys(JSON.stringify(n)),ys(JSON.stringify(o)),a].join(".")}function ev(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vh(){try{return typeof indexedDB=="object"}catch{return!1}}function qh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function tv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nv,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?rv(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Tt(s,a,r)}}function rv(t,e){return t.replace(sv,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const sv=/\{\$([^}]+)}/g;function vs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(vc(i)&&vc(o)){if(!vs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function vc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=1e3,ov=2,av=4*60*60*1e3,lv=.5;function wc(t,e=iv,n=ov){const r=e*Math.pow(n,t),s=Math.round(lv*r*(Math.random()-.5)*2);return Math.min(av,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t){return t&&t._delegate?t._delegate:t}class tt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hv(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uv(t){return t===xt?void 0:t}function hv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(U||(U={}));const fv={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},pv=U.INFO,mv={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},gv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=mv[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sa{constructor(e){this.name=e,this._logLevel=pv,this._logHandler=gv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const yv=(t,e)=>e.some(n=>t instanceof n);let bc,Ec;function vv(){return bc||(bc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wv(){return Ec||(Ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hh=new WeakMap,Ao=new WeakMap,zh=new WeakMap,Mi=new WeakMap,Na=new WeakMap;function bv(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hh.set(n,t)}).catch(()=>{}),Na.set(e,t),e}function Ev(t){if(Ao.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ao.set(t,e)}let To={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ao.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _v(t){To=t(To)}function Av(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oi(this),e,...n);return zh.set(r,e.sort?e.sort():[e]),gt(r)}:wv().includes(t)?function(...e){return t.apply(Oi(this),e),gt(Hh.get(this))}:function(...e){return gt(t.apply(Oi(this),e))}}function Tv(t){return typeof t=="function"?Av(t):(t instanceof IDBTransaction&&Ev(t),yv(t,vv())?new Proxy(t,To):t)}function gt(t){if(t instanceof IDBRequest)return bv(t);if(Mi.has(t))return Mi.get(t);const e=Tv(t);return e!==t&&(Mi.set(t,e),Na.set(e,t)),e}const Oi=t=>Na.get(t);function Iv(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=gt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(gt(o.result),l.oldVersion,l.newVersion,gt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Cv=["get","getKey","getAll","getAllKeys","count"],xv=["put","add","delete","clear"],ji=new Map;function _c(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ji.get(e))return ji.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Cv.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return ji.set(e,i),i}_v(t=>({...t,get:(e,n,r)=>_c(e,n)||t.get(e,n,r),has:(e,n)=>!!_c(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Io="@firebase/app",Ac="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Sa("@firebase/app"),Dv="@firebase/app-compat",kv="@firebase/analytics-compat",Rv="@firebase/analytics",Pv="@firebase/app-check-compat",Mv="@firebase/app-check",Ov="@firebase/auth",jv="@firebase/auth-compat",Lv="@firebase/database",$v="@firebase/database-compat",Fv="@firebase/functions",Uv="@firebase/functions-compat",Bv="@firebase/installations",Vv="@firebase/installations-compat",qv="@firebase/messaging",Hv="@firebase/messaging-compat",zv="@firebase/performance",Gv="@firebase/performance-compat",Qv="@firebase/remote-config",Wv="@firebase/remote-config-compat",Kv="@firebase/storage",Yv="@firebase/storage-compat",Xv="@firebase/firestore",Jv="@firebase/firestore-compat",Zv="firebase",e0="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="[DEFAULT]",t0={[Io]:"fire-core",[Dv]:"fire-core-compat",[Rv]:"fire-analytics",[kv]:"fire-analytics-compat",[Mv]:"fire-app-check",[Pv]:"fire-app-check-compat",[Ov]:"fire-auth",[jv]:"fire-auth-compat",[Lv]:"fire-rtdb",[$v]:"fire-rtdb-compat",[Fv]:"fire-fn",[Uv]:"fire-fn-compat",[Bv]:"fire-iid",[Vv]:"fire-iid-compat",[qv]:"fire-fcm",[Hv]:"fire-fcm-compat",[zv]:"fire-perf",[Gv]:"fire-perf-compat",[Qv]:"fire-rc",[Wv]:"fire-rc-compat",[Kv]:"fire-gcs",[Yv]:"fire-gcs-compat",[Xv]:"fire-fst",[Jv]:"fire-fst-compat","fire-js":"fire-js",[Zv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Map,xo=new Map;function n0(t,e){try{t.container.addComponent(e)}catch(n){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wt(t){const e=t.name;if(xo.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;xo.set(e,t);for(const n of ws.values())n0(n,t);return!0}function Dr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yt=new Ys("app","Firebase",r0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=e0;function Gh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Co,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw yt.create("bad-app-name",{appName:String(s)});if(n||(n=Xy()),!n)throw yt.create("no-options");const i=ws.get(s);if(i){if(vs(n,i.options)&&vs(r,i.config))return i;throw yt.create("duplicate-app",{appName:s})}const o=new dv(s);for(const l of xo.values())o.addComponent(l);const a=new s0(n,r,o);return ws.set(s,a),a}function Qh(t=Co){const e=ws.get(t);if(!e&&t===Co)return Gh();if(!e)throw yt.create("no-app",{appName:t});return e}function Qe(t,e,n){var r;let s=(r=t0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(a.join(" "));return}wt(new tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="firebase-heartbeat-database",a0=1,pr="firebase-heartbeat-store";let Li=null;function Wh(){return Li||(Li=Iv(o0,a0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pr)}}}).catch(t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})})),Li}async function l0(t){try{return(await Wh()).transaction(pr).objectStore(pr).get(Kh(t))}catch(e){if(e instanceof Tt)Ft.warn(e.message);else{const n=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(n.message)}}}async function Tc(t,e){try{const r=(await Wh()).transaction(pr,"readwrite");return await r.objectStore(pr).put(e,Kh(t)),r.done}catch(n){if(n instanceof Tt)Ft.warn(n.message);else{const r=yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ft.warn(r.message)}}}function Kh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=1024,u0=30*24*60*60*1e3;class h0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new f0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ic();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=u0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ic(),{heartbeatsToSend:n,unsentEntries:r}=d0(this._heartbeatsCache.heartbeats),s=ys(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ic(){return new Date().toISOString().substring(0,10)}function d0(t,e=c0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Cc(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Cc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class f0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vh()?qh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await l0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Cc(t){return ys(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){wt(new tt("platform-logger",e=>new Sv(e),"PRIVATE")),wt(new tt("heartbeat",e=>new h0(e),"PRIVATE")),Qe(Io,Ac,t),Qe(Io,Ac,"esm2017"),Qe("fire-js","")}p0("");var m0="firebase",g0="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(m0,g0,"app");const y0=(t,e)=>e.some(n=>t instanceof n);let xc,Sc;function v0(){return xc||(xc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function w0(){return Sc||(Sc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yh=new WeakMap,So=new WeakMap,Xh=new WeakMap,$i=new WeakMap,Da=new WeakMap;function b0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yh.set(n,t)}).catch(()=>{}),Da.set(e,t),e}function E0(t){if(So.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});So.set(t,e)}let No={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return So.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _0(t){No=t(No)}function A0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fi(this),e,...n);return Xh.set(r,e.sort?e.sort():[e]),vt(r)}:w0().includes(t)?function(...e){return t.apply(Fi(this),e),vt(Yh.get(this))}:function(...e){return vt(t.apply(Fi(this),e))}}function T0(t){return typeof t=="function"?A0(t):(t instanceof IDBTransaction&&E0(t),y0(t,v0())?new Proxy(t,No):t)}function vt(t){if(t instanceof IDBRequest)return b0(t);if($i.has(t))return $i.get(t);const e=T0(t);return e!==t&&($i.set(t,e),Da.set(e,t)),e}const Fi=t=>Da.get(t);function I0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=vt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(vt(o.result),l.oldVersion,l.newVersion,vt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const C0=["get","getKey","getAll","getAllKeys","count"],x0=["put","add","delete","clear"],Ui=new Map;function Nc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ui.get(e))return Ui.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=x0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||C0.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Ui.set(e,i),i}_0(t=>({...t,get:(e,n,r)=>Nc(e,n)||t.get(e,n,r),has:(e,n)=>!!Nc(e,n)||t.has(e,n)}));const Jh="@firebase/installations",ka="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=1e4,ed=`w:${ka}`,td="FIS_v2",S0="https://firebaseinstallations.googleapis.com/v1",N0=60*60*1e3,D0="installations",k0="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ut=new Ys(D0,k0,R0);function nd(t){return t instanceof Tt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd({projectId:t}){return`${S0}/projects/${t}/installations`}function sd(t){return{token:t.token,requestStatus:2,expiresIn:M0(t.expiresIn),creationTime:Date.now()}}async function id(t,e){const r=(await e.json()).error;return Ut.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function od({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function P0(t,{refreshToken:e}){const n=od(t);return n.append("Authorization",O0(e)),n}async function ad(t){const e=await t();return e.status>=500&&e.status<600?t():e}function M0(t){return Number(t.replace("s","000"))}function O0(t){return`${td} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j0({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=rd(t),s=od(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:td,appId:t.appId,sdkVersion:ed},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await ad(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:sd(c.authToken)}}else throw await id("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=/^[cdef][\w-]{21}$/,Do="";function F0(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=U0(t);return $0.test(n)?n:Do}catch{return Do}}function U0(t){return L0(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=new Map;function ud(t,e){const n=Xs(t);hd(n,e),B0(n,e)}function hd(t,e){const n=cd.get(t);if(n)for(const r of n)r(e)}function B0(t,e){const n=V0();n&&n.postMessage({key:t,fid:e}),q0()}let Nt=null;function V0(){return!Nt&&"BroadcastChannel"in self&&(Nt=new BroadcastChannel("[Firebase] FID Change"),Nt.onmessage=t=>{hd(t.data.key,t.data.fid)}),Nt}function q0(){cd.size===0&&Nt&&(Nt.close(),Nt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="firebase-installations-database",z0=1,Bt="firebase-installations-store";let Bi=null;function Ra(){return Bi||(Bi=I0(H0,z0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bt)}}})),Bi}async function bs(t,e){const n=Xs(t),s=(await Ra()).transaction(Bt,"readwrite"),i=s.objectStore(Bt),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&ud(t,e.fid),e}async function dd(t){const e=Xs(t),r=(await Ra()).transaction(Bt,"readwrite");await r.objectStore(Bt).delete(e),await r.done}async function Js(t,e){const n=Xs(t),s=(await Ra()).transaction(Bt,"readwrite"),i=s.objectStore(Bt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&ud(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(t){let e;const n=await Js(t.appConfig,r=>{const s=G0(r),i=Q0(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Do?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function G0(t){const e=t||{fid:F0(),registrationStatus:0};return fd(e)}function Q0(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ut.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=W0(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:K0(t)}:{installationEntry:e}}async function W0(t,e){try{const n=await j0(t,e);return bs(t.appConfig,n)}catch(n){throw nd(n)&&n.customData.serverCode===409?await dd(t.appConfig):await bs(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function K0(t){let e=await Dc(t.appConfig);for(;e.registrationStatus===1;)await ld(100),e=await Dc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Pa(t);return r||n}return e}function Dc(t){return Js(t,e=>{if(!e)throw Ut.create("installation-not-found");return fd(e)})}function fd(t){return Y0(t)?{fid:t.fid,registrationStatus:0}:t}function Y0(t){return t.registrationStatus===1&&t.registrationTime+Zh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0({appConfig:t,heartbeatServiceProvider:e},n){const r=J0(t,n),s=P0(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:ed,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await ad(()=>fetch(r,a));if(l.ok){const c=await l.json();return sd(c)}else throw await id("Generate Auth Token",l)}function J0(t,{fid:e}){return`${rd(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ma(t,e=!1){let n;const r=await Js(t.appConfig,i=>{if(!pd(i))throw Ut.create("not-registered");const o=i.authToken;if(!e&&t1(o))return i;if(o.requestStatus===1)return n=Z0(t,e),i;{if(!navigator.onLine)throw Ut.create("app-offline");const a=r1(i);return n=e1(t,a),a}});return n?await n:r.authToken}async function Z0(t,e){let n=await kc(t.appConfig);for(;n.authToken.requestStatus===1;)await ld(100),n=await kc(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ma(t,e):r}function kc(t){return Js(t,e=>{if(!pd(e))throw Ut.create("not-registered");const n=e.authToken;return s1(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function e1(t,e){try{const n=await X0(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await bs(t.appConfig,r),n}catch(n){if(nd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await dd(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await bs(t.appConfig,r)}throw n}}function pd(t){return t!==void 0&&t.registrationStatus===2}function t1(t){return t.requestStatus===2&&!n1(t)}function n1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+N0}function r1(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function s1(t){return t.requestStatus===1&&t.requestTime+Zh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(t){const e=t,{installationEntry:n,registrationPromise:r}=await Pa(e);return r?r.catch(console.error):Ma(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(t,e=!1){const n=t;return await a1(n),(await Ma(n,e)).token}async function a1(t){const{registrationPromise:e}=await Pa(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t){if(!t||!t.options)throw Vi("App Configuration");if(!t.name)throw Vi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Vi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Vi(t){return Ut.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="installations",c1="installations-internal",u1=t=>{const e=t.getProvider("app").getImmediate(),n=l1(e),r=Dr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},h1=t=>{const e=t.getProvider("app").getImmediate(),n=Dr(e,md).getImmediate();return{getId:()=>i1(n),getToken:s=>o1(n,s)}};function d1(){wt(new tt(md,u1,"PUBLIC")),wt(new tt(c1,h1,"PRIVATE"))}d1();Qe(Jh,ka);Qe(Jh,ka,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="analytics",f1="firebase_id",p1="origin",m1=60*1e3,g1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Oa="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new Sa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ne=new Ys("analytics","Analytics",y1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(t){if(!t.startsWith(Oa)){const e=Ne.create("invalid-gtag-resource",{gtagURL:t});return Ie.warn(e.message),""}return t}function gd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function w1(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function b1(t,e){const n=w1("firebase-js-sdk-policy",{createScriptURL:v1}),r=document.createElement("script"),s=`${Oa}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function E1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function _1(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await gd(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){Ie.error(a)}t("config",s,i)}async function A1(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await gd(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ie.error(i)}}function T1(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,l]=o;await A1(t,e,n,a,l)}else if(i==="config"){const[a,l]=o;await _1(t,e,n,r,a,l)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Ie.error(a)}}return s}function I1(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=T1(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function C1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Oa)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=30,S1=1e3;class N1{constructor(e={},n=S1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const yd=new N1;function D1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function k1(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:D1(r)},i=g1.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Ne.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function R1(t,e=yd,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ne.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ne.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new O1;return setTimeout(async()=>{a.abort()},n!==void 0?n:m1),vd({appId:r,apiKey:s,measurementId:i},o,a,e)}async function vd(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=yd){var i;const{appId:o,measurementId:a}=t;try{await P1(r,e)}catch(l){if(a)return Ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await k1(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!M1(c)){if(s.deleteThrottleMetadata(o),a)return Ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((i=c==null?void 0:c.customData)===null||i===void 0?void 0:i.httpStatus)===503?wc(n,s.intervalMillis,x1):wc(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,d),Ie.debug(`Calling attemptFetch again in ${u} millis`),vd(t,d,r,s)}}function P1(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ne.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function M1(t){if(!(t instanceof Tt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class O1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function j1(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(){if(Vh())try{await qh()}catch(t){return Ie.warn(Ne.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ie.warn(Ne.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $1(t,e,n,r,s,i,o){var a;const l=R1(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ie.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ie.error(p)),e.push(l);const c=L1().then(p=>{if(p)return r.getId()}),[u,d]=await Promise.all([l,c]);C1(i)||b1(i,u.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[p1]="firebase",f.update=!0,d!=null&&(f[f1]=d),s("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.app=e}_delete(){return delete Xn[this.app.options.appId],Promise.resolve()}}let Xn={},Rc=[];const Pc={};let qi="dataLayer",U1="gtag",Mc,wd,Oc=!1;function B1(){const t=[];if(ev()&&t.push("This is a browser extension environment."),tv()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ne.create("invalid-analytics-context",{errorInfo:e});Ie.warn(n.message)}}function V1(t,e,n){B1();const r=t.options.appId;if(!r)throw Ne.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ne.create("no-api-key");if(Xn[r]!=null)throw Ne.create("already-exists",{id:r});if(!Oc){E1(qi);const{wrappedGtag:i,gtagCore:o}=I1(Xn,Rc,Pc,qi,U1);wd=i,Mc=o,Oc=!0}return Xn[r]=$1(t,Rc,Pc,e,Mc,qi,n),new F1(t)}function q1(t=Qh()){t=dn(t);const e=Dr(t,Es);return e.isInitialized()?e.getImmediate():H1(t)}function H1(t,e={}){const n=Dr(t,Es);if(n.isInitialized()){const s=n.getImmediate();if(vs(e,n.getOptions()))return s;throw Ne.create("already-initialized")}return n.initialize({options:e})}function z1(t,e,n,r){t=dn(t),j1(wd,Xn[t.app.options.appId],e,n,r).catch(s=>Ie.error(s))}const jc="@firebase/analytics",Lc="0.10.0";function G1(){wt(new tt(Es,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return V1(r,s,n)},"PUBLIC")),wt(new tt("analytics-internal",t,"PRIVATE")),Qe(jc,Lc),Qe(jc,Lc,"esm2017");function t(e){try{const n=e.getProvider(Es).getImmediate();return{logEvent:(r,s,i)=>z1(n,r,s,i)}}catch(n){throw Ne.create("interop-component-reg-failed",{reason:n})}}}G1();var Q1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,ja=ja||{},k=Q1||self;function _s(){}function Zs(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function kr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function W1(t){return Object.prototype.hasOwnProperty.call(t,Hi)&&t[Hi]||(t[Hi]=++K1)}var Hi="closure_uid_"+(1e9*Math.random()>>>0),K1=0;function Y1(t,e,n){return t.call.apply(t.bind,arguments)}function X1(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ye=Y1:ye=X1,ye.apply(null,arguments)}function Wr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ae(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function It(){this.s=this.s,this.o=this.o}var J1=0;It.prototype.s=!1;It.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),J1!=0)&&W1(this)};It.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function La(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function $c(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Zs(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ve(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var Z1=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{k.addEventListener("test",_s,e),k.removeEventListener("test",_s,e)}catch{}return t}();function As(t){return/^[\s\xa0]*$/.test(t)}var Fc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function zi(t,e){return t<e?-1:t>e?1:0}function ei(){var t=k.navigator;return t&&(t=t.userAgent)?t:""}function He(t){return ei().indexOf(t)!=-1}function $a(t){return $a[" "](t),t}$a[" "]=_s;function Ed(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var ew=He("Opera"),fn=He("Trident")||He("MSIE"),_d=He("Edge"),ko=_d||fn,Ad=He("Gecko")&&!(ei().toLowerCase().indexOf("webkit")!=-1&&!He("Edge"))&&!(He("Trident")||He("MSIE"))&&!He("Edge"),tw=ei().toLowerCase().indexOf("webkit")!=-1&&!He("Edge");function Td(){var t=k.document;return t?t.documentMode:void 0}var Ts;e:{var Gi="",Qi=function(){var t=ei();if(Ad)return/rv:([^\);]+)(\)|;)/.exec(t);if(_d)return/Edge\/([\d\.]+)/.exec(t);if(fn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(tw)return/WebKit\/(\S+)/.exec(t);if(ew)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qi&&(Gi=Qi?Qi[1]:""),fn){var Wi=Td();if(Wi!=null&&Wi>parseFloat(Gi)){Ts=String(Wi);break e}}Ts=Gi}var nw={};function rw(){return Ed(nw,9,function(){let t=0;const e=Fc(String(Ts)).split("."),n=Fc("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=zi(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||zi(s[2].length==0,i[2].length==0)||zi(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Ro;if(k.document&&fn){var Uc=Td();Ro=Uc||parseInt(Ts,10)||void 0}else Ro=void 0;var sw=Ro;function mr(t,e){if(ve.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ad){e:{try{$a(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:iw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&mr.$.h.call(this)}}ae(mr,ve);var iw={2:"touch",3:"pen",4:"mouse"};mr.prototype.h=function(){mr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Rr="closure_listenable_"+(1e6*Math.random()|0),ow=0;function aw(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++ow,this.fa=this.ia=!1}function ti(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Fa(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Id(t){const e={};for(const n in t)e[n]=t[n];return e}const Bc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cd(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Bc.length;i++)n=Bc[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ni(t){this.src=t,this.g={},this.h=0}ni.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Mo(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new aw(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Po(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=bd(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ti(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Mo(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Ua="closure_lm_"+(1e6*Math.random()|0),Ki={};function xd(t,e,n,r,s){if(r&&r.once)return Nd(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)xd(t,e[i],n,r,s);return null}return n=qa(n),t&&t[Rr]?t.O(e,n,kr(r)?!!r.capture:!!r,s):Sd(t,e,n,!1,r,s)}function Sd(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=kr(s)?!!s.capture:!!s,a=Va(t);if(a||(t[Ua]=a=new ni(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=lw(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Z1||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(kd(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function lw(){function t(n){return e.call(t.src,t.listener,n)}const e=cw;return t}function Nd(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Nd(t,e[i],n,r,s);return null}return n=qa(n),t&&t[Rr]?t.P(e,n,kr(r)?!!r.capture:!!r,s):Sd(t,e,n,!0,r,s)}function Dd(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Dd(t,e[i],n,r,s);else r=kr(r)?!!r.capture:!!r,n=qa(n),t&&t[Rr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Mo(i,n,r,s),-1<n&&(ti(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Va(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Mo(e,n,r,s)),(n=-1<t?e[t]:null)&&Ba(n))}function Ba(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Rr])Po(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(kd(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Va(e))?(Po(n,t),n.h==0&&(n.src=null,e[Ua]=null)):ti(t)}}}function kd(t){return t in Ki?Ki[t]:Ki[t]="on"+t}function cw(t,e){if(t.fa)t=!0;else{e=new mr(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ba(t),t=n.call(r,e)}return t}function Va(t){return t=t[Ua],t instanceof ni?t:null}var Yi="__closure_events_fn_"+(1e9*Math.random()>>>0);function qa(t){return typeof t=="function"?t:(t[Yi]||(t[Yi]=function(e){return t.handleEvent(e)}),t[Yi])}function oe(){It.call(this),this.i=new ni(this),this.S=this,this.J=null}ae(oe,It);oe.prototype[Rr]=!0;oe.prototype.removeEventListener=function(t,e,n,r){Dd(this,t,e,n,r)};function fe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ve(e,t);else if(e instanceof ve)e.target=e.target||t;else{var s=e;e=new ve(r,t),Cd(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Kr(o,r,!0,e)&&s}if(o=e.g=t,s=Kr(o,r,!0,e)&&s,s=Kr(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Kr(o,r,!1,e)&&s}oe.prototype.N=function(){if(oe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ti(n[r]);delete t.g[e],t.h--}}this.J=null};oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};oe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Kr(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Po(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ha=k.JSON.stringify;function uw(){var t=Md;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class hw{constructor(){this.h=this.g=null}add(e,n){const r=Rd.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Rd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new dw,t=>t.reset());class dw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function fw(t){k.setTimeout(()=>{throw t},0)}function Pd(t,e){Oo||pw(),jo||(Oo(),jo=!0),Md.add(t,e)}var Oo;function pw(){var t=k.Promise.resolve(void 0);Oo=function(){t.then(mw)}}var jo=!1,Md=new hw;function mw(){for(var t;t=uw();){try{t.h.call(t.g)}catch(n){fw(n)}var e=Rd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jo=!1}function ri(t,e){oe.call(this),this.h=t||1,this.g=e||k,this.j=ye(this.qb,this),this.l=Date.now()}ae(ri,oe);T=ri.prototype;T.ga=!1;T.T=null;T.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),fe(this,"tick"),this.ga&&(za(this),this.start()))}};T.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function za(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}T.N=function(){ri.$.N.call(this),za(this),delete this.g};function Ga(t,e,n){if(typeof t=="function")n&&(t=ye(t,n));else if(t&&typeof t.handleEvent=="function")t=ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:k.setTimeout(t,e||0)}function Od(t){t.g=Ga(()=>{t.g=null,t.i&&(t.i=!1,Od(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class gw extends It{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Od(this)}N(){super.N(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gr(t){It.call(this),this.h=t,this.g={}}ae(gr,It);var Vc=[];function jd(t,e,n,r){Array.isArray(n)||(n&&(Vc[0]=n.toString()),n=Vc);for(var s=0;s<n.length;s++){var i=xd(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ld(t){Fa(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ba(e)},t),t.g={}}gr.prototype.N=function(){gr.$.N.call(this),Ld(this)};gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function si(){this.g=!0}si.prototype.Ea=function(){this.g=!1};function yw(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function vw(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Zt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+bw(t,n)+(r?" "+r:"")})}function ww(t,e){t.info(function(){return"TIMEOUT: "+e})}si.prototype.info=function(){};function bw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ha(n)}catch{return e}}var zt={},qc=null;function ii(){return qc=qc||new oe}zt.Ta="serverreachability";function $d(t){ve.call(this,zt.Ta,t)}ae($d,ve);function yr(t){const e=ii();fe(e,new $d(e))}zt.STAT_EVENT="statevent";function Fd(t,e){ve.call(this,zt.STAT_EVENT,t),this.stat=e}ae(Fd,ve);function _e(t){const e=ii();fe(e,new Fd(e,t))}zt.Ua="timingevent";function Ud(t,e){ve.call(this,zt.Ua,t),this.size=e}ae(Ud,ve);function Pr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){t()},e)}var oi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Bd={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qa(){}Qa.prototype.h=null;function Hc(t){return t.h||(t.h=t.i())}function Vd(){}var Mr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wa(){ve.call(this,"d")}ae(Wa,ve);function Ka(){ve.call(this,"c")}ae(Ka,ve);var Lo;function ai(){}ae(ai,Qa);ai.prototype.g=function(){return new XMLHttpRequest};ai.prototype.i=function(){return{}};Lo=new ai;function Or(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new gr(this),this.P=Ew,t=ko?125:void 0,this.V=new ri(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new qd}function qd(){this.i=null,this.g="",this.h=!1}var Ew=45e3,$o={},Is={};T=Or.prototype;T.setTimeout=function(t){this.P=t};function Fo(t,e,n){t.L=1,t.v=ci(nt(e)),t.s=n,t.S=!0,Hd(t,null)}function Hd(t,e){t.G=Date.now(),jr(t),t.A=nt(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Jd(n.i,"t",r),t.C=0,n=t.l.I,t.h=new qd,t.g=bf(t.l,n?e:null,!t.s),0<t.O&&(t.M=new gw(ye(t.Pa,t,t.g),t.O)),jd(t.U,t.g,"readystatechange",t.nb),e=t.I?Id(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),yr(),yw(t.j,t.u,t.A,t.m,t.W,t.s)}T.nb=function(t){t=t.target;const e=this.M;e&&Ze(t)==3?e.l():this.Pa(t)};T.Pa=function(t){try{if(t==this.g)e:{const u=Ze(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||ko||this.g&&(this.h.h||this.g.ja()||Wc(this.g)))){this.J||u!=4||e==7||(e==8||0>=d?yr(3):yr(2)),li(this);var n=this.g.da();this.aa=n;t:if(zd(this)){var r=Wc(this.g);t="";var s=r.length,i=Ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dt(this),Jn(this);var o="";break t}this.h.i=new k.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,vw(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!As(a)){var c=a;break t}}c=null}if(n=c)Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Uo(this,n);else{this.i=!1,this.o=3,_e(12),Dt(this),Jn(this);break e}}this.S?(Gd(this,u,o),ko&&this.i&&u==3&&(jd(this.U,this.V,"tick",this.mb),this.V.start())):(Zt(this.j,this.m,o,null),Uo(this,o)),u==4&&Dt(this),this.i&&!this.J&&(u==4?gf(this.l,this):(this.i=!1,jr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,_e(12)):(this.o=0,_e(13)),Dt(this),Jn(this)}}}catch{}finally{}};function zd(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Gd(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=_w(t,n),s==Is){e==4&&(t.o=4,_e(14),r=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==$o){t.o=4,_e(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Zt(t.j,t.m,s,null),Uo(t,s);zd(t)&&s!=Is&&s!=$o&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,_e(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),nl(e),e.L=!0,_e(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Dt(t),Jn(t))}T.mb=function(){if(this.g){var t=Ze(this.g),e=this.g.ja();this.C<e.length&&(li(this),Gd(this,t,e),this.i&&t!=4&&jr(this))}};function _w(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Is:(n=Number(e.substring(n,r)),isNaN(n)?$o:(r+=1,r+n>e.length?Is:(e=e.substr(r,n),t.C=r+n,e)))}T.cancel=function(){this.J=!0,Dt(this)};function jr(t){t.Y=Date.now()+t.P,Qd(t,t.P)}function Qd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Pr(ye(t.lb,t),e)}function li(t){t.B&&(k.clearTimeout(t.B),t.B=null)}T.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ww(this.j,this.A),this.L!=2&&(yr(),_e(17)),Dt(this),this.o=2,Jn(this)):Qd(this,this.Y-t)};function Jn(t){t.l.H==0||t.J||gf(t.l,t)}function Dt(t){li(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,za(t.V),Ld(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Uo(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Bo(n.h,t))){if(!t.K&&Bo(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ss(n),di(n);else break e;tl(n),_e(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&n.A==0&&!n.v&&(n.v=Pr(ye(n.ib,n),6e3));if(1>=tf(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else kt(n,11)}else if((t.K||n.g==t)&&Ss(n),!As(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const u=c[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const d=c[4];d!=null&&(n.Ga=d,n.j.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ya(i,i.h),i.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,G(r.G,r.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=wf(r,r.I?r.oa:null,r.Y),o.K){nf(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(li(a),jr(a)),r.g=o}else pf(r);0<n.i.length&&fi(n)}else c[0]!="stop"&&c[0]!="close"||kt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?kt(n,7):el(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}yr(4)}catch{}}function Aw(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zs(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Tw(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Zs(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Wd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zs(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Tw(t),r=Aw(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Kd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Iw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Pt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pt){this.h=e!==void 0?e:t.h,Cs(this,t.j),this.s=t.s,this.g=t.g,xs(this,t.m),this.l=t.l,e=t.i;var n=new vr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),zc(this,n),this.o=t.o}else t&&(n=String(t).match(Kd))?(this.h=!!e,Cs(this,n[1]||"",!0),this.s=qn(n[2]||""),this.g=qn(n[3]||"",!0),xs(this,n[4]),this.l=qn(n[5]||"",!0),zc(this,n[6]||"",!0),this.o=qn(n[7]||"")):(this.h=!!e,this.i=new vr(null,this.h))}Pt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Hn(e,Gc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Hn(e,Gc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Hn(n,n.charAt(0)=="/"?Sw:xw,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Hn(n,Dw)),t.join("")};function nt(t){return new Pt(t)}function Cs(t,e,n){t.j=n?qn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zc(t,e,n){e instanceof vr?(t.i=e,kw(t.i,t.h)):(n||(e=Hn(e,Nw)),t.i=new vr(e,t.h))}function G(t,e,n){t.i.set(e,n)}function ci(t){return G(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Hn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Cw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Cw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gc=/[#\/\?@]/g,xw=/[#\?:]/g,Sw=/[#\?]/g,Nw=/[#\?@]/g,Dw=/#/g;function vr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ct(t){t.g||(t.g=new Map,t.h=0,t.i&&Iw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}T=vr.prototype;T.add=function(t,e){Ct(this),this.i=null,t=xn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Yd(t,e){Ct(t),e=xn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Xd(t,e){return Ct(t),e=xn(t,e),t.g.has(e)}T.forEach=function(t,e){Ct(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};T.sa=function(){Ct(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};T.Z=function(t){Ct(this);let e=[];if(typeof t=="string")Xd(this,t)&&(e=e.concat(this.g.get(xn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};T.set=function(t,e){return Ct(this),this.i=null,t=xn(this,t),Xd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};T.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Jd(t,e,n){Yd(t,e),0<n.length&&(t.i=null,t.g.set(xn(t,e),La(n)),t.h+=n.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function xn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function kw(t,e){e&&!t.j&&(Ct(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Yd(this,r),Jd(this,s,n))},t)),t.j=e}var Rw=class{constructor(t,e){this.h=t,this.g=e}};function Zd(t){this.l=t||Pw,k.PerformanceNavigationTiming?(t=k.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(k.g&&k.g.Ka&&k.g.Ka()&&k.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Pw=10;function ef(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function tf(t){return t.h?1:t.g?t.g.size:0}function Bo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ya(t,e){t.g?t.g.add(e):t.h=e}function nf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Zd.prototype.cancel=function(){if(this.i=rf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rf(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return La(t.i)}function Xa(){}Xa.prototype.stringify=function(t){return k.JSON.stringify(t,void 0)};Xa.prototype.parse=function(t){return k.JSON.parse(t,void 0)};function Mw(){this.g=new Xa}function Ow(t,e,n){const r=n||"";try{Wd(t,function(s,i){let o=s;kr(s)&&(o=Ha(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function jw(t,e){const n=new si;if(k.Image){const r=new Image;r.onload=Wr(Yr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Wr(Yr,n,r,"TestLoadImage: error",!1,e),r.onabort=Wr(Yr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Wr(Yr,n,r,"TestLoadImage: timeout",!1,e),k.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Yr(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Lr(t){this.l=t.fc||null,this.j=t.ob||!1}ae(Lr,Qa);Lr.prototype.g=function(){return new ui(this.l,this.j)};Lr.prototype.i=function(t){return function(){return t}}({});function ui(t,e){oe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ja,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ae(ui,oe);var Ja=0;T=ui.prototype;T.open=function(t,e){if(this.readyState!=Ja)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wr(this)};T.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||k).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$r(this)),this.readyState=Ja};T.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wr(this)),this.g&&(this.readyState=3,wr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof k.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sf(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function sf(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}T.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$r(this):wr(this),this.readyState==3&&sf(this)}};T.Za=function(t){this.g&&(this.response=this.responseText=t,$r(this))};T.Ya=function(t){this.g&&(this.response=t,$r(this))};T.ka=function(){this.g&&$r(this)};function $r(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wr(t)}T.setRequestHeader=function(t,e){this.v.append(t,e)};T.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Lw=k.JSON.parse;function K(t){oe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=of,this.L=this.M=!1}ae(K,oe);var of="",$w=/^https?$/i,Fw=["POST","PUT"];T=K.prototype;T.Oa=function(t){this.M=t};T.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Lo.g(),this.C=this.u?Hc(this.u):Hc(Lo),this.g.onreadystatechange=ye(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Qc(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=k.FormData&&t instanceof k.FormData,!(0<=bd(Fw,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{cf(this),0<this.B&&((this.L=Uw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ye(this.ua,this)):this.A=Ga(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Qc(this,i)}};function Uw(t){return fn&&rw()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}T.ua=function(){typeof ja<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fe(this,"timeout"),this.abort(8))};function Qc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,af(t),hi(t)}function af(t){t.F||(t.F=!0,fe(t,"complete"),fe(t,"error"))}T.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,fe(this,"complete"),fe(this,"abort"),hi(this))};T.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hi(this,!0)),K.$.N.call(this)};T.La=function(){this.s||(this.G||this.v||this.l?lf(this):this.kb())};T.kb=function(){lf(this)};function lf(t){if(t.h&&typeof ja<"u"&&(!t.C[1]||Ze(t)!=4||t.da()!=2)){if(t.v&&Ze(t)==4)Ga(t.La,0,t);else if(fe(t,"readystatechange"),Ze(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.I).match(Kd)[1]||null;if(!s&&k.self&&k.self.location){var i=k.self.location.protocol;s=i.substr(0,i.length-1)}r=!$w.test(s?s.toLowerCase():"")}n=r}if(n)fe(t,"complete"),fe(t,"success");else{t.m=6;try{var o=2<Ze(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",af(t)}}finally{hi(t)}}}}function hi(t,e){if(t.g){cf(t);const n=t.g,r=t.C[0]?_s:null;t.g=null,t.C=null,e||fe(t,"ready");try{n.onreadystatechange=r}catch{}}}function cf(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(k.clearTimeout(t.A),t.A=null)}function Ze(t){return t.g?t.g.readyState:0}T.da=function(){try{return 2<Ze(this)?this.g.status:-1}catch{return-1}};T.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Lw(e)}};function Wc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case of:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}T.Ia=function(){return this.m};T.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function uf(t){let e="";return Fa(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Za(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=uf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):G(t,e,n))}function $n(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hf(t){this.Ga=0,this.i=[],this.j=new si,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$n("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$n("baseRetryDelayMs",5e3,t),this.hb=$n("retryDelaySeedMs",1e4,t),this.eb=$n("forwardChannelMaxRetries",2,t),this.xa=$n("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new Zd(t&&t.concurrentRequestLimit),this.Ja=new Mw,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}T=hf.prototype;T.qa=8;T.H=1;function el(t){if(df(t),t.H==3){var e=t.W++,n=nt(t.G);G(n,"SID",t.J),G(n,"RID",e),G(n,"TYPE","terminate"),Fr(t,n),e=new Or(t,t.j,e,void 0),e.L=2,e.v=ci(nt(n)),n=!1,k.navigator&&k.navigator.sendBeacon&&(n=k.navigator.sendBeacon(e.v.toString(),"")),!n&&k.Image&&(new Image().src=e.v,n=!0),n||(e.g=bf(e.l,null),e.g.ha(e.v)),e.G=Date.now(),jr(e)}vf(t)}function di(t){t.g&&(nl(t),t.g.cancel(),t.g=null)}function df(t){di(t),t.u&&(k.clearTimeout(t.u),t.u=null),Ss(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&k.clearTimeout(t.m),t.m=null)}function fi(t){ef(t.h)||t.m||(t.m=!0,Pd(t.Na,t),t.C=0)}function Bw(t,e){return tf(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Pr(ye(t.Na,t,e),yf(t,t.C)),t.C++,!0)}T.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Or(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=Id(i),Cd(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ff(this,s,e),n=nt(this.G),G(n,"RID",t),G(n,"CVER",22),this.F&&G(n,"X-HTTP-Session-Id",this.F),Fr(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(uf(i)))+"&"+e:this.o&&Za(n,this.o,i)),Ya(this.h,s),this.bb&&G(n,"TYPE","init"),this.P?(G(n,"$req",e),G(n,"SID","null"),s.ba=!0,Fo(s,n,null)):Fo(s,n,e),this.H=2}}else this.H==3&&(t?Kc(this,t):this.i.length==0||ef(this.h)||Kc(this))};function Kc(t,e){var n;e?n=e.m:n=t.W++;const r=nt(t.G);G(r,"SID",t.J),G(r,"RID",n),G(r,"AID",t.V),Fr(t,r),t.o&&t.s&&Za(r,t.o,t.s),n=new Or(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=ff(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ya(t.h,n),Fo(n,r,e)}function Fr(t,e){t.ma&&Fa(t.ma,function(n,r){G(e,r,n)}),t.l&&Wd({},function(n,r){G(e,r,n)})}function ff(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ye(t.l.Va,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=i,0>c)i=Math.max(0,s[l].h-100),a=!1;else try{Ow(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function pf(t){t.g||t.u||(t.ba=1,Pd(t.Ma,t),t.A=0)}function tl(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Pr(ye(t.Ma,t),yf(t,t.A)),t.A++,!0)}T.Ma=function(){if(this.u=null,mf(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Pr(ye(this.jb,this),t)}};T.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,_e(10),di(this),mf(this))};function nl(t){t.B!=null&&(k.clearTimeout(t.B),t.B=null)}function mf(t){t.g=new Or(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=nt(t.wa);G(e,"RID","rpc"),G(e,"SID",t.J),G(e,"CI",t.M?"0":"1"),G(e,"AID",t.V),G(e,"TYPE","xmlhttp"),Fr(t,e),t.o&&t.s&&Za(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=ci(nt(e)),n.s=null,n.S=!0,Hd(n,t)}T.ib=function(){this.v!=null&&(this.v=null,di(this),tl(this),_e(19))};function Ss(t){t.v!=null&&(k.clearTimeout(t.v),t.v=null)}function gf(t,e){var n=null;if(t.g==e){Ss(t),nl(t),t.g=null;var r=2}else if(Bo(t.h,e))n=e.F,nf(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=ii(),fe(r,new Ud(r,n)),fi(t)}else pf(t);else if(s=e.o,s==3||s==0&&0<t.ta||!(r==1&&Bw(t,e)||r==2&&tl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:kt(t,5);break;case 4:kt(t,10);break;case 3:kt(t,6);break;default:kt(t,2)}}}function yf(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function kt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ye(t.pb,t);n||(n=new Pt("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||Cs(n,"https"),ci(n)),jw(n.toString(),r)}else _e(2);t.H=0,t.l&&t.l.za(e),vf(t),df(t)}T.pb=function(t){t?(this.j.info("Successfully pinged google.com"),_e(2)):(this.j.info("Failed to ping google.com"),_e(1))};function vf(t){if(t.H=0,t.pa=[],t.l){const e=rf(t.h);(e.length!=0||t.i.length!=0)&&($c(t.pa,e),$c(t.pa,t.i),t.h.i.length=0,La(t.i),t.i.length=0),t.l.ya()}}function wf(t,e,n){var r=n instanceof Pt?nt(n):new Pt(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),xs(r,r.m);else{var s=k.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Pt(null,void 0);r&&Cs(i,r),e&&(i.g=e),s&&xs(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&G(r,n,e),G(r,"VER",t.qa),Fr(t,r),r}function bf(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new K(new Lr({ob:!0})):new K(t.va),e.Oa(t.I),e}function Ef(){}T=Ef.prototype;T.Ba=function(){};T.Aa=function(){};T.za=function(){};T.ya=function(){};T.Va=function(){};function Ns(){if(fn&&!(10<=Number(sw)))throw Error("Environmental error: no available transport.")}Ns.prototype.g=function(t,e){return new De(t,e)};function De(t,e){oe.call(this),this.g=new hf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!As(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!As(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sn(this)}ae(De,oe);De.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;_e(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=wf(t,null,t.Y),fi(t)};De.prototype.close=function(){el(this.g)};De.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ha(t),t=n);e.i.push(new Rw(e.fb++,t)),e.H==3&&fi(e)};De.prototype.N=function(){this.g.l=null,delete this.j,el(this.g),delete this.g,De.$.N.call(this)};function _f(t){Wa.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ae(_f,Wa);function Af(){Ka.call(this),this.status=1}ae(Af,Ka);function Sn(t){this.g=t}ae(Sn,Ef);Sn.prototype.Ba=function(){fe(this.g,"a")};Sn.prototype.Aa=function(t){fe(this.g,new _f(t))};Sn.prototype.za=function(t){fe(this.g,new Af)};Sn.prototype.ya=function(){fe(this.g,"b")};function Vw(){this.blockSize=-1}function Fe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ae(Fe,Vw);Fe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Xi(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Fe.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Xi(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Xi(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Xi(this,r),s=0;break}}this.h=s,this.i+=e};Fe.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function V(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var qw={};function rl(t){return-128<=t&&128>t?Ed(qw,t,function(e){return new V([e|0],0>e?-1:0)}):new V([t|0],0>t?-1:0)}function Ge(t){if(isNaN(t)||!isFinite(t))return nn;if(0>t)return de(Ge(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Vo;return new V(e,0)}function Tf(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return de(Tf(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ge(Math.pow(e,8)),r=nn,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Ge(Math.pow(e,i)),r=r.R(i).add(Ge(o))):(r=r.R(n),r=r.add(Ge(o)))}return r}var Vo=4294967296,nn=rl(0),qo=rl(1),Yc=rl(16777216);T=V.prototype;T.ea=function(){if(Me(this))return-de(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Vo+r)*e,e*=Vo}return t};T.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(et(this))return"0";if(Me(this))return"-"+de(this).toString(t);for(var e=Ge(Math.pow(t,6)),n=this,r="";;){var s=ks(n,e).g;n=Ds(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,et(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};T.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function et(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Me(t){return t.h==-1}T.X=function(t){return t=Ds(this,t),Me(t)?-1:et(t)?0:1};function de(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new V(n,~t.h).add(qo)}T.abs=function(){return Me(this)?de(this):this};T.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new V(n,n[n.length-1]&-2147483648?-1:0)};function Ds(t,e){return t.add(de(e))}T.R=function(t){if(et(this)||et(t))return nn;if(Me(this))return Me(t)?de(this).R(de(t)):de(de(this).R(t));if(Me(t))return de(this.R(de(t)));if(0>this.X(Yc)&&0>t.X(Yc))return Ge(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Xr(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Xr(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Xr(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Xr(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new V(n,0)};function Xr(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Fn(t,e){this.g=t,this.h=e}function ks(t,e){if(et(e))throw Error("division by zero");if(et(t))return new Fn(nn,nn);if(Me(t))return e=ks(de(t),e),new Fn(de(e.g),de(e.h));if(Me(e))return e=ks(t,de(e)),new Fn(de(e.g),e.h);if(30<t.g.length){if(Me(t)||Me(e))throw Error("slowDivide_ only works with positive integers.");for(var n=qo,r=e;0>=r.X(t);)n=Xc(n),r=Xc(r);var s=Kt(n,1),i=Kt(r,1);for(r=Kt(r,2),n=Kt(n,2);!et(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Kt(r,1),n=Kt(n,1)}return e=Ds(t,s.R(e)),new Fn(s,e)}for(s=nn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Ge(n),o=i.R(e);Me(o)||0<o.X(t);)n-=r,i=Ge(n),o=i.R(e);et(i)&&(i=qo),s=s.add(i),t=Ds(t,o)}return new Fn(s,t)}T.gb=function(t){return ks(this,t).h};T.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new V(n,this.h&t.h)};T.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new V(n,this.h|t.h)};T.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new V(n,this.h^t.h)};function Xc(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new V(n,t.h)}function Kt(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new V(s,t.h)}Ns.prototype.createWebChannel=Ns.prototype.g;De.prototype.send=De.prototype.u;De.prototype.open=De.prototype.m;De.prototype.close=De.prototype.close;oi.NO_ERROR=0;oi.TIMEOUT=8;oi.HTTP_ERROR=6;Bd.COMPLETE="complete";Vd.EventType=Mr;Mr.OPEN="a";Mr.CLOSE="b";Mr.ERROR="c";Mr.MESSAGE="d";oe.prototype.listen=oe.prototype.O;K.prototype.listenOnce=K.prototype.P;K.prototype.getLastError=K.prototype.Sa;K.prototype.getLastErrorCode=K.prototype.Ia;K.prototype.getStatus=K.prototype.da;K.prototype.getResponseJson=K.prototype.Wa;K.prototype.getResponseText=K.prototype.ja;K.prototype.send=K.prototype.ha;K.prototype.setWithCredentials=K.prototype.Oa;Fe.prototype.digest=Fe.prototype.l;Fe.prototype.reset=Fe.prototype.reset;Fe.prototype.update=Fe.prototype.j;V.prototype.add=V.prototype.add;V.prototype.multiply=V.prototype.R;V.prototype.modulo=V.prototype.gb;V.prototype.compare=V.prototype.X;V.prototype.toNumber=V.prototype.ea;V.prototype.toString=V.prototype.toString;V.prototype.getBits=V.prototype.D;V.fromNumber=Ge;V.fromString=Tf;var Hw=function(){return new Ns},zw=function(){return ii()},Ji=oi,Gw=Bd,Qw=zt,Jc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ww=Lr,Jr=Vd,Kw=K,Yw=Fe,rn=V;const Zc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new Sa("@firebase/firestore");function eu(){return Vt.logLevel}function N(t,...e){if(Vt.logLevel<=U.DEBUG){const n=e.map(sl);Vt.debug(`Firestore (${Nn}): ${t}`,...n)}}function rt(t,...e){if(Vt.logLevel<=U.ERROR){const n=e.map(sl);Vt.error(`Firestore (${Nn}): ${t}`,...n)}}function pn(t,...e){if(Vt.logLevel<=U.WARN){const n=e.map(sl);Vt.warn(`Firestore (${Nn}): ${t}`,...n)}}function sl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t="Unexpected state"){const e=`FIRESTORE (${Nn}) INTERNAL ASSERTION FAILED: `+t;throw rt(e),new Error(e)}function re(t,e){t||O()}function F(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends Tt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(me.UNAUTHENTICATED))}shutdown(){}}class Jw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zw{constructor(e){this.t=e,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Mt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new If(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new me(e)}}class eb{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=me.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class tb{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new eb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rb{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.T=n.token,new nb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=sb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function B(t,e){return t<e?-1:t>e?1:0}function mn(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new S(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new S(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new S(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new S(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ie(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new ie(0,0))}static max(){return new P(new ie(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,r){n===void 0?n=0:n>e.length&&O(),r===void 0?r=e.length-n:r>e.length-n&&O(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return br.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof br?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Q extends br{construct(e,n,r){return new Q(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new S(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Q(n)}static emptyPath(){return new Q([])}}const ob=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends br{construct(e,n,r){return new Ee(e,n,r)}static isValidIdentifier(e){return ob.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ee(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new S(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new S(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new S(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new S(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(n)}static emptyPath(){return new Ee([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(Q.fromString(e))}static fromName(e){return new D(Q.fromString(e).popFirst(5))}static empty(){return new D(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Q.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new Q(e.slice()))}}function ab(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=P.fromTimestamp(r===1e9?new ie(n+1,0):new ie(n,r));return new bt(s,D.empty(),e)}function lb(t){return new bt(t.readTime,t.key,-1)}class bt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new bt(P.min(),D.empty(),-1)}static max(){return new bt(P.max(),D.empty(),-1)}}function cb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:B(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==ub)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(s=>s?w.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new w((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new w((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ur(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}ol.ct=-1;function pi(t){return t==null}function Rs(t){return t===0&&1/t==-1/0}function db(t){return typeof t=="number"&&Number.isInteger(t)&&!Rs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n){this.comparator=e,this.root=n||he.EMPTY}insert(e,n){return new Z(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,he.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,he.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zr(this.root,e,this.comparator,!0)}}class Zr{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class he{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??he.RED,this.left=s??he.EMPTY,this.right=i??he.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new he(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return he.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,r,s){return this}insert(t,e,n){return new he(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.comparator=e,this.data=new Z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nu(this.data.getIterator())}getIteratorFrom(e){return new nu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new we(this.comparator);return n.data=e,n}}class nu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new ht([])}unionWith(e){let n=new we(Ee.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mn(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new xf("Invalid base64 string: "+s):s}}(e);return new be(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const fb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(t){if(re(!!t),typeof t=="string"){let e=0;const n=fb.exec(t);if(re(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:te(t.seconds),nanos:te(t.nanos)}}function te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qt(t){return typeof t=="string"?be.fromBase64String(t):be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ll(t){const e=t.mapValue.fields.__previous_value__;return al(e)?ll(e):e}function Er(t){const e=Et(t.mapValue.fields.__local_write_time__.timestampValue);return new ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class _r{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _r("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _r&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ht(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?al(t)?4:mb(t)?9007199254740991:10:O()}function Ke(t,e){if(t===e)return!0;const n=Ht(t);if(n!==Ht(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Er(t).isEqual(Er(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Et(r.timestampValue),o=Et(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return qt(r.bytesValue).isEqual(qt(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return te(r.geoPointValue.latitude)===te(s.geoPointValue.latitude)&&te(r.geoPointValue.longitude)===te(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return te(r.integerValue)===te(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=te(r.doubleValue),o=te(s.doubleValue);return i===o?Rs(i)===Rs(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return mn(t.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(tu(i)!==tu(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ke(i[a],o[a])))return!1;return!0}(t,e);default:return O()}}function Ar(t,e){return(t.values||[]).find(n=>Ke(n,e))!==void 0}function gn(t,e){if(t===e)return 0;const n=Ht(t),r=Ht(e);if(n!==r)return B(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return B(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=te(s.integerValue||s.doubleValue),a=te(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ru(t.timestampValue,e.timestampValue);case 4:return ru(Er(t),Er(e));case 5:return B(t.stringValue,e.stringValue);case 6:return function(s,i){const o=qt(s),a=qt(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=B(o[l],a[l]);if(c!==0)return c}return B(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=B(te(s.latitude),te(i.latitude));return o!==0?o:B(te(s.longitude),te(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=gn(o[l],a[l]);if(c)return c}return B(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===es.mapValue&&i===es.mapValue)return 0;if(s===es.mapValue)return 1;if(i===es.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const d=B(a[u],c[u]);if(d!==0)return d;const f=gn(o[a[u]],l[c[u]]);if(f!==0)return f}return B(a.length,c.length)}(t.mapValue,e.mapValue);default:throw O()}}function ru(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return B(t,e);const n=Et(t),r=Et(e),s=B(n.seconds,r.seconds);return s!==0?s:B(n.nanos,r.nanos)}function yn(t){return Ho(t)}function Ho(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Et(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?qt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,D.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Ho(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Ho(r.fields[a])}`;return i+"}"}(t.mapValue):O();var e,n}function su(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zo(t){return!!t&&"integerValue"in t}function cl(t){return!!t&&"arrayValue"in t}function iu(t){return!!t&&"nullValue"in t}function ou(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zi(t){return!!t&&"mapValue"in t}function Zn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zn(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zn(n)}setAll(e){let n=Ee.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Zn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Zi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Zi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ze(Zn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ge(e,0,P.min(),P.min(),P.min(),ze.empty(),0)}static newFoundDocument(e,n,r,s){return new ge(e,1,n,P.min(),r,s,0)}static newNoDocument(e,n){return new ge(e,2,n,P.min(),P.min(),ze.empty(),0)}static newUnknownDocument(e,n){return new ge(e,3,n,P.min(),P.min(),ze.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this.position=e,this.inclusive=n}}function au(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),n.key):r=gn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function lu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ke(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n="asc"){this.field=e,this.dir=n}}function gb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{}class ne extends Sf{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vb(e,n,r):n==="array-contains"?new Eb(e,r):n==="in"?new _b(e,r):n==="not-in"?new Ab(e,r):n==="array-contains-any"?new Tb(e,r):new ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wb(e,r):new bb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gn(n,this.value)):n!==null&&Ht(this.value)===Ht(n)&&this.matchesComparison(gn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ue extends Sf{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ue(e,n)}matches(e){return Nf(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Nf(t){return t.op==="and"}function Df(t){return yb(t)&&Nf(t)}function yb(t){for(const e of t.filters)if(e instanceof Ue)return!1;return!0}function Go(t){if(t instanceof ne)return t.field.canonicalString()+t.op.toString()+yn(t.value);if(Df(t))return t.filters.map(e=>Go(e)).join(",");{const e=t.filters.map(n=>Go(n)).join(",");return`${t.op}(${e})`}}function kf(t,e){return t instanceof ne?function(n,r){return r instanceof ne&&n.op===r.op&&n.field.isEqual(r.field)&&Ke(n.value,r.value)}(t,e):t instanceof Ue?function(n,r){return r instanceof Ue&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&kf(i,r.filters[o]),!0):!1}(t,e):void O()}function Rf(t){return t instanceof ne?function(e){return`${e.field.canonicalString()} ${e.op} ${yn(e.value)}`}(t):t instanceof Ue?function(e){return e.op.toString()+" {"+e.getFilters().map(Rf).join(" ,")+"}"}(t):"Filter"}class vb extends ne{constructor(e,n,r){super(e,n,r),this.key=D.fromName(r.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.matchesComparison(n)}}class wb extends ne{constructor(e,n){super(e,"in",n),this.keys=Pf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bb extends ne{constructor(e,n){super(e,"not-in",n),this.keys=Pf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Pf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>D.fromName(r.referenceValue))}class Eb extends ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cl(n)&&Ar(n.arrayValue,this.value)}}class _b extends ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ar(this.value.arrayValue,n)}}class Ab extends ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ar(this.value.arrayValue,n)}}class Tb extends ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ar(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function cu(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Ib(t,e,n,r,s,i,o)}function ul(t){const e=F(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Go(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),pi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yn(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yn(r)).join(",")),e.ft=n}return e.ft}function hl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!gb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kf(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lu(t.startAt,e.startAt)&&lu(t.endAt,e.endAt)}function Qo(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function Cb(t,e,n,r,s,i,o,a){return new Dn(t,e,n,r,s,i,o,a)}function Mf(t){return new Dn(t)}function uu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function mi(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Of(t){return t.collectionGroup!==null}function on(t){const e=F(t);if(e.dt===null){e.dt=[];const n=mi(e),r=dl(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new sn(n)),e.dt.push(new sn(Ee.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new sn(Ee.keyField(),i))}}}return e.dt}function st(t){const e=F(t);if(!e._t)if(e.limitType==="F")e._t=cu(e.path,e.collectionGroup,on(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of on(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new sn(i.field,o))}const r=e.endAt?new Ps(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ps(e.startAt.position,e.startAt.inclusive):null;e._t=cu(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function Wo(t,e){e.getFirstInequalityField(),mi(t);const n=t.filters.concat([e]);return new Dn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ko(t,e,n){return new Dn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gi(t,e){return hl(st(t),st(e))&&t.limitType===e.limitType}function jf(t){return`${ul(st(t))}|lt:${t.limitType}`}function Yo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Rf(r)).join(", ")}]`),pi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yn(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yn(r)).join(",")),`Target(${n})`}(st(t))}; limitType=${t.limitType})`}function yi(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):D.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of on(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=au(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,on(n),r)||n.endAt&&!function(s,i,o){const a=au(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,on(n),r))}(t,e)}function xb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Lf(t){return(e,n)=>{let r=!1;for(const s of on(t)){const i=Sb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Sb(t,e,n){const r=t.field.isKeyField()?D.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),l=o.data.field(s);return a!==null&&l!==null?gn(a,l):O()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Cf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=new Z(D.comparator);function _t(){return Nb}const $f=new Z(D.comparator);function zn(...t){let e=$f;for(const n of t)e=e.insert(n.key,n);return e}function Db(t){let e=$f;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Rt(){return er()}function Ff(){return er()}function er(){return new kn(t=>t.toString(),(t,e)=>t.isEqual(e))}const kb=new we(D.comparator);function $(...t){let e=kb;for(const n of t)e=e.add(n);return e}const Rb=new we(B);function Pb(){return Rb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rs(e)?"-0":e}}function Bf(t){return{integerValue:""+t}}function Mb(t,e){return db(e)?Bf(e):Uf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this._=void 0}}function Ob(t,e,n){return t instanceof Xo?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&al(s)&&(s=ll(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ms?Vf(t,e):t instanceof Os?qf(t,e):function(r,s){const i=Lb(r,s),o=hu(i)+hu(r.wt);return zo(i)&&zo(r.wt)?Bf(o):Uf(r.serializer,o)}(t,e)}function jb(t,e,n){return t instanceof Ms?Vf(t,e):t instanceof Os?qf(t,e):n}function Lb(t,e){return t instanceof Jo?zo(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Xo extends vi{}class Ms extends vi{constructor(e){super(),this.elements=e}}function Vf(t,e){const n=Hf(e);for(const r of t.elements)n.some(s=>Ke(s,r))||n.push(r);return{arrayValue:{values:n}}}class Os extends vi{constructor(e){super(),this.elements=e}}function qf(t,e){let n=Hf(e);for(const r of t.elements)n=n.filter(s=>!Ke(s,r));return{arrayValue:{values:n}}}class Jo extends vi{constructor(e,n){super(),this.serializer=e,this.wt=n}}function hu(t){return te(t.integerValue||t.doubleValue)}function Hf(t){return cl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $b(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ms&&r instanceof Ms||n instanceof Os&&r instanceof Os?mn(n.elements,r.elements,Ke):n instanceof Jo&&r instanceof Jo?Ke(n.wt,r.wt):n instanceof Xo&&r instanceof Xo}(t.transform,e.transform)}class Ot{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ot}static exists(e){return new Ot(void 0,e)}static updateTime(e){return new Ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function os(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fl{}function zf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ub(t.key,Ot.none()):new pl(t.key,t.data,Ot.none());{const n=t.data,r=ze.empty();let s=new we(Ee.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new wi(t.key,r,new ht(s.toArray()),Ot.none())}}function Fb(t,e,n){t instanceof pl?function(r,s,i){const o=r.value.clone(),a=fu(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof wi?function(r,s,i){if(!os(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=fu(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Gf(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function tr(t,e,n,r){return t instanceof pl?function(s,i,o,a){if(!os(s.precondition,i))return o;const l=s.value.clone(),c=pu(s.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof wi?function(s,i,o,a){if(!os(s.precondition,i))return o;const l=pu(s.fieldTransforms,a,i),c=i.data;return c.setAll(Gf(s)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return os(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function du(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&mn(n,r,(s,i)=>$b(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pl extends fl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class wi extends fl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Gf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function fu(t,e,n){const r=new Map;re(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,jb(o,a,n[s]))}return r}function pu(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Ob(i,o,e))}return r}class Ub extends fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Fb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=tr(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=tr(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ff();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=zf(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),$())}isEqual(e){return this.batchId===e.batchId&&mn(this.mutations,e.mutations,(n,r)=>du(n,r))&&mn(this.baseMutations,e.baseMutations,(n,r)=>du(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee,L;function Qf(t){if(t===void 0)return rt("GRPC error has no .code"),E.UNKNOWN;switch(t){case ee.OK:return E.OK;case ee.CANCELLED:return E.CANCELLED;case ee.UNKNOWN:return E.UNKNOWN;case ee.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case ee.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case ee.INTERNAL:return E.INTERNAL;case ee.UNAVAILABLE:return E.UNAVAILABLE;case ee.UNAUTHENTICATED:return E.UNAUTHENTICATED;case ee.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case ee.NOT_FOUND:return E.NOT_FOUND;case ee.ALREADY_EXISTS:return E.ALREADY_EXISTS;case ee.PERMISSION_DENIED:return E.PERMISSION_DENIED;case ee.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case ee.ABORTED:return E.ABORTED;case ee.OUT_OF_RANGE:return E.OUT_OF_RANGE;case ee.UNIMPLEMENTED:return E.UNIMPLEMENTED;case ee.DATA_LOSS:return E.DATA_LOSS;default:return O()}}(L=ee||(ee={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ts}static getOrCreateInstance(){return ts===null&&(ts=new ml),ts}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ts=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=new rn([4294967295,4294967295],0);function mu(t){const e=Hb().encode(t),n=new Yw;return n.update(e),new Uint8Array(n.digest())}function gu(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new rn([n,r],0),new rn([s,i],0)]}class gl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Gn(`Invalid padding: ${n}`);if(r<0)throw new Gn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gn(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Gn(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=rn.fromNumber(this.yt)}Tt(e,n,r){let s=e.add(n.multiply(rn.fromNumber(r)));return s.compare(zb)===1&&(s=new rn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=mu(e),[r,s]=gu(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(r,s,i);if(!this.Et(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=mu(e),[r,s]=gu(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(r,s,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Gn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Vr.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new bi(P.min(),s,new Z(B),_t(),$())}}class Vr{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Vr(r,n,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n,r,s){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=s}}class Wf{constructor(e,n){this.targetId=e,this.bt=n}}class Kf{constructor(e,n,r=be.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class yu{constructor(){this.Vt=0,this.St=wu(),this.Dt=be.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=$(),n=$(),r=$();return this.St.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:O()}}),new Vr(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=wu()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class Gb{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=_t(),this.jt=vu(),this.zt=new Z(B)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:O()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,s)=>{this.Zt(s)&&n(s)})}ee(e){var n;const r=e.targetId,s=e.bt.count,i=this.ne(r);if(i){const o=i.target;if(Qo(o))if(s===0){const a=new D(o.path);this.Jt(r,a,ge.newNoDocument(a,P.min()))}else re(s===1);else{const a=this.se(r);if(a!==s){const l=this.ie(e,a);if(l!==0){this.te(r);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,c)}(n=ml.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,d){var f,p,g,v,y,_;const A={localCacheCount:u,existenceFilterCount:d.count},I=d.unchangedNames;return I&&(A.bloomFilter={applied:c===0,hashCount:(f=I==null?void 0:I.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(v=(g=(p=I==null?void 0:I.bits)===null||p===void 0?void 0:p.bitmap)===null||g===void 0?void 0:g.length)!==null&&v!==void 0?v:0,padding:(_=(y=I==null?void 0:I.bits)===null||y===void 0?void 0:y.padding)!==null&&_!==void 0?_:0}),A}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:s}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let l,c;try{l=qt(i).toUint8Array()}catch(u){if(u instanceof xf)return pn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new gl(l,o,a)}catch(u){return pn(u instanceof Gn?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.yt===0?1:s!==n-this.re(e.targetId,c)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.At(a)||(this.Jt(e,i,null),s++)}),s}ue(e){const n=new Map;this.Gt.forEach((i,o)=>{const a=this.ne(o);if(a){if(i.current&&Qo(a.target)){const l=new D(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,ge.newNoDocument(l,e))}i.kt&&(n.set(o,i.Ot()),i.$t())}});let r=$();this.jt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.ne(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Qt.forEach((i,o)=>o.setReadTime(e));const s=new bi(e,n,this.zt,this.Qt,r);return this.Qt=_t(),this.jt=vu(),this.zt=new Z(B),s}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const s=this.Xt(e);this.ce(e,n)?s.Ft(n,1):s.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new yu,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new we(B),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new yu),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function vu(){return new Z(D.comparator)}function wu(){return new Z(D.comparator)}const Qb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Wb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Kb=(()=>({and:"AND",or:"OR"}))();class Yb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zo(t,e){return t.useProto3Json||pi(e)?e:{value:e}}function ea(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yf(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function an(t){return re(!!t),P.fromTimestamp(function(e){const n=Et(e);return new ie(n.seconds,n.nanos)}(t))}function Xf(t,e){return function(n){return new Q(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Jf(t){const e=Q.fromString(t);return re(np(e)),e}function eo(t,e){const n=Jf(e);if(n.get(1)!==t.databaseId.projectId)throw new S(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new S(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(Zf(n))}function ta(t,e){return Xf(t.databaseId,e)}function Xb(t){const e=Jf(t);return e.length===4?Q.emptyPath():Zf(e)}function bu(t){return new Q(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zf(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Jb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,c){return l.useProto3Json?(re(c===void 0||typeof c=="string"),be.fromBase64String(c||"")):(re(c===void 0||c instanceof Uint8Array),be.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?E.UNKNOWN:Qf(l.code);return new S(c,l.message||"")}(o);n=new Kf(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=eo(t,r.document.name),i=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):P.min(),a=new ze({mapValue:{fields:r.document.fields}}),l=ge.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new as(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=eo(t,r.document),i=r.readTime?an(r.readTime):P.min(),o=ge.newNoDocument(s,i),a=r.removedTargetIds||[];n=new as([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=eo(t,r.document),i=r.removedTargetIds||[];n=new as([],i,s,null)}else{if(!("filter"in e))return O();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new qb(s,i),a=r.targetId;n=new Wf(a,o)}}return n}function Zb(t,e){return{documents:[ta(t,e.path)]}}function eE(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ta(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ta(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return tp(Ue.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Xt(u.field),direction:rE(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Zo(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function tE(t){let e=Xb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){re(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const d=ep(u);return d instanceof Ue&&Df(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new sn(Jt(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,pi(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(u){const d=!!u.before,f=u.values||[];return new Ps(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const d=!u.before,f=u.values||[];return new Ps(f,d)}(n.endAt)),Cb(e,s,o,i,a,"F",l,c)}function nE(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ep(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Jt(e.unaryFilter.field);return ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Jt(e.unaryFilter.field);return ne.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Jt(e.unaryFilter.field);return ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Jt(e.unaryFilter.field);return ne.create(i,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t):t.fieldFilter!==void 0?function(e){return ne.create(Jt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ue.create(e.compositeFilter.filters.map(n=>ep(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(t):O()}function rE(t){return Qb[t]}function sE(t){return Wb[t]}function iE(t){return Kb[t]}function Xt(t){return{fieldPath:t.canonicalString()}}function Jt(t){return Ee.fromServerFormat(t.fieldPath)}function tp(t){return t instanceof ne?function(e){if(e.op==="=="){if(ou(e.value))return{unaryFilter:{field:Xt(e.field),op:"IS_NAN"}};if(iu(e.value))return{unaryFilter:{field:Xt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ou(e.value))return{unaryFilter:{field:Xt(e.field),op:"IS_NOT_NAN"}};if(iu(e.value))return{unaryFilter:{field:Xt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xt(e.field),op:sE(e.op),value:e.value}}}(t):t instanceof Ue?function(e){const n=e.getFilters().map(r=>tp(r));return n.length===1?n[0]:{compositeFilter:{op:iE(e.op),filters:n}}}(t):O()}function np(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r,s,i=P.min(),o=P.min(),a=be.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new dt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.le=e}}function aE(t){const e=tE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ko(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.sn=new cE}addToCollectionParentIndex(e,n){return this.sn.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(bt.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(bt.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class cE{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new we(Q.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new we(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new vn(0)}static kn(){return new vn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.changes=new kn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&tr(r.mutation,s,ht.empty(),ie.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,$()).next(()=>r))}getLocalViewOfDocuments(e,n,r=$()){const s=Rt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=zn();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Rt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,$()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=_t();const o=er(),a=er();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof wi)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),tr(u.mutation,c,u.mutation.getFieldMask(),ie.now())):o.set(c.key,ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new hE(u,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=er();let s=new Z((o,a)=>o-a),i=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||ht.empty();u=a.applyToLocalView(c,u),r.set(l,u);const d=(s.get(a.batchId)||$()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=Ff();u.forEach(f=>{if(!i.has(f)){const p=zf(n.get(f),r.get(f));p!==null&&d.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return D.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Of(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):w.resolve(Rt());let a=-1,l=i;return o.next(c=>w.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(u)?w.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,$())).next(u=>({batchId:a,changes:Db(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(r=>{let s=zn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=zn();return this.indexManager.getCollectionParents(e,s).next(o=>w.forEach(o,a=>{const l=function(c,u){return new Dn(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,d)=>{i=i.insert(u,d)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,ge.newInvalidDocument(c)))});let o=zn();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&tr(c.mutation,l,ht.empty(),ie.now()),yi(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return w.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:an(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:aE(r.bundledQuery),readTime:an(r.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.overlays=new Z(D.comparator),this.hs=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Rt();return w.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.de(e,n,i)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hs.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hs.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const s=Rt(),i=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return w.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Z((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Rt(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Rt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return w.resolve(a)}de(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hs.get(s.largestBatchId).delete(r.key);this.hs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Vb(n,r));let i=this.hs.get(n);i===void 0&&(i=$(),this.hs.set(n,i)),this.hs.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.ls=new we(se.fs),this.ds=new we(se._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new se(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new se(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new D(new Q([])),r=new se(n,e),s=new se(n,e+1),i=[];return this.ds.forEachInRange([r,s],o=>{this.gs(o),i.push(o.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new D(new Q([])),r=new se(n,e),s=new se(n,e+1);let i=$();return this.ds.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new se(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class se{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return D.comparator(e.key,n.key)||B(e.Es,n.Es)}static _s(e,n){return B(e.Es,n.Es)||D.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new we(se.fs)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bb(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new se(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Ps(r),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new se(n,0),s=new se(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,s],o=>{const a=this.vs(o.Es);i.push(a)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(B);return n.forEach(s=>{const i=new se(s,0),o=new se(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{r=r.add(a.Es)})}),w.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;D.isDocumentKey(i)||(i=i.child(""));const o=new se(new D(i),0);let a=new we(B);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.Es)),!0)},o),w.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const s=this.vs(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){re(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return w.forEach(n.mutations,s=>{const i=new se(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new se(n,0),s=this.Rs.firstAfterOrEqual(r);return w.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.Ss=e,this.docs=new Z(D.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():ge.newInvalidDocument(n))}getEntries(e,n){let r=_t();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ge.newInvalidDocument(s))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=_t();const o=n.path,a=new D(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||cb(lb(u),r)<=0||(s.has(u.key)||yi(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(e,n,r,s){O()}Ds(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yE(this)}getSize(e){return w.resolve(this.size)}}class yE extends uE{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.rs.addEntry(e,s)):this.rs.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.persistence=e,this.Cs=new kn(n=>ul(n),hl),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.xs=0,this.Ns=new yl,this.targetCount=0,this.ks=vn.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,s)=>n(s)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),w.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new vn(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.$n(n),w.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),w.waitFor(i).next(()=>s)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),w.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n){this.Ms={},this.overlays={},this.Os=new ol(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new vE(this),this.indexManager=new lE,this.remoteDocumentCache=function(r){return new gE(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new oE(n),this.Ls=new fE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pE,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new mE(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const s=new bE(this.Os.next());return this.referenceDelegate.qs(),r(s).next(i=>this.referenceDelegate.Us(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ks(e,n){return w.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class bE extends hb{constructor(e){super(),this.currentSequenceNumber=e}}class vl{constructor(e){this.persistence=e,this.Gs=new yl,this.Qs=null}static js(e){return new vl(e)}get zs(){if(this.Qs)return this.Qs;throw O()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),w.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(s=>this.zs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.zs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.zs,r=>{const s=D.fromPath(r);return this.Ws(e,s).next(i=>{i||n.removeEntry(s,P.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return w.or([()=>w.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=s}static Bi(e,n){let r=$(),s=$();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ui(e,n).next(i=>i||this.Ki(e,n,s,r)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(uu(n))return w.resolve(null);let r=st(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ko(n,null,"F"),r=st(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=$(...i);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Qi(n,a);return this.ji(n,c,o,l.readTime)?this.Ui(e,Ko(n,null,"F")):this.zi(e,c,n,l)}))})))}Ki(e,n,r,s){return uu(n)||s.isEqual(P.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(i=>{const o=this.Qi(n,i);return this.ji(n,o,r,s)?this.Gi(e,n):(eu()<=U.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yo(n)),this.zi(e,o,n,ab(s,-1)))})}Qi(e,n){let r=new we(Lf(e));return n.forEach((s,i)=>{yi(e,i)&&(r=r.add(i))}),r}ji(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Gi(e,n){return eu()<=U.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Yo(n)),this.qi.getDocumentsMatchingQuery(e,n,bt.min())}zi(e,n,r,s){return this.qi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,r,s){this.persistence=e,this.Wi=n,this.serializer=s,this.Hi=new Z(B),this.Ji=new kn(i=>ul(i),hl),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dE(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function AE(t,e,n,r){return new _E(t,e,n,r)}async function rp(t,e){const n=F(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=$();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function sp(t){const e=F(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function TE(t,e){const n=F(t),r=e.snapshotVersion;let s=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Hi;const a=[];e.targetChanges.forEach((u,d)=>{const f=s.get(d);if(!f)return;a.push(n.Fs.removeMatchingKeys(i,u.removedDocuments,d).next(()=>n.Fs.addMatchingKeys(i,u.addedDocuments,d)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?p=p.withResumeToken(be.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(d,p),function(g,v,y){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,p,u)&&a.push(n.Fs.updateTargetData(i,p))});let l=_t(),c=$();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(IE(i,o,e.documentUpdates).next(u=>{l=u.er,c=u.nr})),!r.isEqual(P.min())){const u=n.Fs.getLastRemoteSnapshotVersion(i).next(d=>n.Fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return w.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Hi=s,i))}function IE(t,e,n){let r=$(),s=$();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=_t();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(P.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{er:o,nr:s}})}function CE(t,e){const n=F(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Fs.getTargetData(r,e).next(i=>i?(s=i,w.resolve(s)):n.Fs.allocateTargetId(r).next(o=>(s=new dt(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Hi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function na(t,e,n){const r=F(t),s=r.Hi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ur(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(s.target)}function Eu(t,e,n){const r=F(t);let s=P.min(),i=$();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=F(a),d=u.Ji.get(c);return d!==void 0?w.resolve(u.Hi.get(d)):u.Fs.getTargetData(l,c)}(r,o,st(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?s:P.min(),n?i:$())).next(a=>(xE(r,xb(e),a),{documents:a,sr:i})))}function xE(t,e,n){let r=t.Yi.get(e)||P.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Yi.set(e,r)}class _u{constructor(){this.activeTargetIds=Pb()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SE{constructor(){this.Wr=new _u,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new _u,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns=null;function to(){return ns===null?ns=268435456+Math.round(2147483648*Math.random()):ns++,"0x"+ns.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="WebChannelConnection";class RE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,s,i){const o=to(),a=this.Io(e,n);N("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,s,i),this.Eo(e,a,l,r).then(c=>(N("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw pn("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}Ao(e,n,r,s,i,o){return this.po(e,n,r,s,i)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Nn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Io(e,n){const r=DE[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,s){const i=to();return new Promise((o,a)=>{const l=new Kw;l.setWithCredentials(!0),l.listenOnce(Gw.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ji.NO_ERROR:const u=l.getResponseJson();N(pe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ji.TIMEOUT:N(pe,`RPC '${e}' ${i} timed out`),a(new S(E.DEADLINE_EXCEEDED,"Request time out"));break;case Ji.HTTP_ERROR:const d=l.getStatus();if(N(pe,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const g=function(v){const y=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(y)>=0?y:E.UNKNOWN}(p.status);a(new S(g,p.message))}else a(new S(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new S(E.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{N(pe,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);N(pe,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Ro(e,n,r){const s=to(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Hw(),a=zw(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new Ww({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");N(pe,`Creating RPC '${e}' stream ${s}: ${c}`,l);const u=o.createWebChannel(c,l);let d=!1,f=!1;const p=new kE({io:v=>{f?N(pe,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(N(pe,`Opening RPC '${e}' stream ${s} transport.`),u.open(),d=!0),N(pe,`RPC '${e}' stream ${s} sending:`,v),u.send(v))},ro:()=>u.close()}),g=(v,y,_)=>{v.listen(y,A=>{try{_(A)}catch(I){setTimeout(()=>{throw I},0)}})};return g(u,Jr.EventType.OPEN,()=>{f||N(pe,`RPC '${e}' stream ${s} transport opened.`)}),g(u,Jr.EventType.CLOSE,()=>{f||(f=!0,N(pe,`RPC '${e}' stream ${s} transport closed`),p.fo())}),g(u,Jr.EventType.ERROR,v=>{f||(f=!0,pn(pe,`RPC '${e}' stream ${s} transport errored:`,v),p.fo(new S(E.UNAVAILABLE,"The operation could not be completed")))}),g(u,Jr.EventType.MESSAGE,v=>{var y;if(!f){const _=v.data[0];re(!!_);const A=_,I=A.error||((y=A[0])===null||y===void 0?void 0:y.error);if(I){N(pe,`RPC '${e}' stream ${s} received error:`,I);const x=I.status;let q=function(Ce){const le=ee[Ce];if(le!==void 0)return Qf(le)}(x),W=I.message;q===void 0&&(q=E.INTERNAL,W="Unknown error status: "+x+" with message "+I.message),f=!0,p.fo(new S(q,W)),u.close()}else N(pe,`RPC '${e}' stream ${s} received:`,_),p._o(_)}}),g(a,Qw.STAT_EVENT,v=>{v.stat===Jc.PROXY?N(pe,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Jc.NOPROXY&&N(pe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.lo()},0),p}}function no(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){return new Yb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=s,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),s=Math.max(0,n-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,n,r,s,i,o,a,l){this.si=e,this.Mo=r,this.Oo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new ip(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(rt(n.toString()),rt("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.$o===n&&this.Xo(r,s)},r=>{e(()=>{const s=new S(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(s)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(s=>{r(()=>this.Zo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ME extends PE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=Jb(this.serializer,e),r=function(s){if(!("targetChange"in s))return P.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?P.min():i.readTime?an(i.readTime):P.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=bu(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;if(o=Qo(a)?{documents:Zb(s,a)}:{query:eE(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Yf(s,i.resumeToken);const l=Zo(s,i.expectedCount);l!==null&&(o.expectedCount=l)}else if(i.snapshotVersion.compareTo(P.min())>0){o.readTime=ea(s,i.snapshotVersion.toTimestamp());const l=Zo(s,i.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=nE(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=bu(this.serializer),n.removeTarget=e,this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.hu=!1}lu(){if(this.hu)throw new S(E.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.po(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new S(E.UNKNOWN,s.toString())})}Ao(e,n,r,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ao(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(E.UNKNOWN,i.toString())})}terminate(){this.hu=!0}}class jE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(rt(n),this.wu=!1):N("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{Hr(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=F(a);l.Au.add(4),await qr(l),l.Pu.set("Unknown"),l.Au.delete(4),await _i(l)}(this))})}),this.Pu=new jE(r,s)}}async function _i(t){if(Hr(t))for(const e of t.Ru)await e(!0)}async function qr(t){for(const e of t.Ru)await e(!1)}function op(t,e){const n=F(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),_l(n)?El(n):Rn(n).Uo()&&bl(n,e))}function ap(t,e){const n=F(t),r=Rn(n);n.Eu.delete(e),r.Uo()&&lp(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():Hr(n)&&n.Pu.set("Unknown"))}function bl(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(P.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rn(t).nu(e)}function lp(t,e){t.bu.Lt(e),Rn(t).su(e)}function El(t){t.bu=new Gb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Rn(t).start(),t.Pu.mu()}function _l(t){return Hr(t)&&!Rn(t).qo()&&t.Eu.size>0}function Hr(t){return F(t).Au.size===0}function cp(t){t.bu=void 0}async function $E(t){t.Eu.forEach((e,n)=>{bl(t,e)})}async function FE(t,e){cp(t),_l(t)?(t.Pu.pu(e),El(t)):t.Pu.set("Unknown")}async function UE(t,e,n){if(t.Pu.set("Online"),e instanceof Kf&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tu(t,r)}else if(e instanceof as?t.bu.Wt(e):e instanceof Wf?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(P.min()))try{const r=await sp(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.bu.ue(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.Eu.get(l);c&&s.Eu.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,l)=>{const c=s.Eu.get(a);if(!c)return;s.Eu.set(a,c.withResumeToken(be.EMPTY_BYTE_STRING,c.snapshotVersion)),lp(s,a);const u=new dt(c.target,a,l,c.sequenceNumber);bl(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await Tu(t,r)}}async function Tu(t,e,n){if(!Ur(e))throw e;t.Au.add(1),await qr(t),t.Pu.set("Offline"),n||(n=()=>sp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await _i(t)})}async function Iu(t,e){const n=F(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=Hr(n);n.Au.add(3),await qr(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await _i(n)}async function BE(t,e){const n=F(t);e?(n.Au.delete(2),await _i(n)):e||(n.Au.add(2),await qr(n),n.Pu.set("Unknown"))}function Rn(t){return t.Vu||(t.Vu=function(e,n,r){const s=F(e);return s.lu(),new ME(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{oo:$E.bind(null,t),co:FE.bind(null,t),eu:UE.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),_l(t)?El(t):t.Pu.set("Unknown")):(await t.Vu.stop(),cp(t))})),t.Vu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Al(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function up(t,e){if(rt("AsyncQueue",`${e}: ${t}`),Ur(t))return new S(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.comparator=e?(n,r)=>e(n,r)||D.comparator(n.key,r.key):(n,r)=>D.comparator(n.key,r.key),this.keyedMap=zn(),this.sortedSet=new Z(this.comparator)}static emptySet(e){return new ln(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ln)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ln;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.Du=new Z(D.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):O():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class wn{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new wn(e,n,ln.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(){this.xu=void 0,this.listeners=[]}}class qE{constructor(){this.queries=new kn(e=>jf(e),gi),this.onlineState="Unknown",this.Nu=new Set}}async function HE(t,e){const n=F(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new VE),s)try{i.xu=await n.onListen(r)}catch(o){const a=up(o,`Initialization of query '${Yo(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.ku(n.onlineState),i.xu&&e.Mu(i.xu)&&Tl(n)}async function zE(t,e){const n=F(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function GE(t,e){const n=F(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Mu(s)&&(r=!0);o.xu=s}}r&&Tl(n)}function QE(t,e,n){const r=F(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Tl(t){t.Nu.forEach(e=>{e.next()})}class WE{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new wn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=wn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.key=e}}class dp{constructor(e){this.key=e}}class KE{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=$(),this.mutatedKeys=$(),this.Zu=Lf(e),this.tc=new ln(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new Cu,s=n?n.tc:this.tc;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,d)=>{const f=s.get(u),p=yi(this.query,d)?d:null,g=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let y=!1;f&&p?f.data.isEqual(p.data)?g!==v&&(r.track({type:3,doc:p}),y=!0):this.ic(f,p)||(r.track({type:2,doc:p}),y=!0,(l&&this.Zu(p,l)>0||c&&this.Zu(p,c)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),y=!0):f&&!p&&(r.track({type:1,doc:f}),y=!0,(l||c)&&(a=!0)),y&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{tc:o,sc:r,ji:a,mutatedKeys:i}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort((c,u)=>function(d,f){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return p(d)-p(f)}(c.type,u.type)||this.Zu(c.doc,u.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,i.length!==0||l?{snapshot:new wn(this.query,e.tc,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Cu,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=$(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new dp(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new hp(r))}),n}ac(e){this.Ju=e.sr,this.Xu=$();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return wn.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class YE{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XE{constructor(e){this.key=e,this.lc=!1}}class JE{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new kn(a=>jf(a),gi),this._c=new Map,this.wc=new Set,this.mc=new Z(D.comparator),this.gc=new Map,this.yc=new yl,this.Ic={},this.Tc=new Map,this.Ec=vn.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function ZE(t,e){const n=o_(t);let r,s;const i=n.dc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.hc();else{const o=await CE(n.localStore,st(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await e_(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&op(n.remoteStore,o)}return s}async function e_(t,e,n,r,s){t.Rc=(d,f,p)=>async function(g,v,y,_){let A=v.view.nc(y);A.ji&&(A=await Eu(g.localStore,v.query,!1).then(({documents:q})=>v.view.nc(q,A)));const I=_&&_.targetChanges.get(v.targetId),x=v.view.applyChanges(A,g.isPrimaryClient,I);return Su(g,v.targetId,x.uc),x.snapshot}(t,d,f,p);const i=await Eu(t.localStore,e,!0),o=new KE(e,i.sr),a=o.nc(i.documents),l=Vr.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Su(t,n,c.uc);const u=new YE(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function t_(t,e){const n=F(t),r=n.dc.get(e),s=n._c.get(r.targetId);if(s.length>1)return n._c.set(r.targetId,s.filter(i=>!gi(i,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await na(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ap(n.remoteStore,r.targetId),ra(n,r.targetId)}).catch(il)):(ra(n,r.targetId),await na(n.localStore,r.targetId,!0))}async function fp(t,e){const n=F(t);try{const r=await TE(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.gc.get(i);o&&(re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.lc=!0:s.modifiedDocuments.size>0?re(o.lc):s.removedDocuments.size>0&&(re(o.lc),o.lc=!1))}),await mp(n,r,e)}catch(r){await il(r)}}function xu(t,e,n){const r=F(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.dc.forEach((i,o)=>{const a=o.view.ku(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=F(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const d of u.listeners)d.ku(o)&&(l=!0)}),l&&Tl(a)}(r.eventManager,e),s.length&&r.fc.eu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function n_(t,e,n){const r=F(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.gc.get(e),i=s&&s.key;if(i){let o=new Z(D.comparator);o=o.insert(i,ge.newNoDocument(i,P.min()));const a=$().add(i),l=new bi(P.min(),new Map,new Z(B),o,a);await fp(r,l),r.mc=r.mc.remove(i),r.gc.delete(e),Il(r)}else await na(r.localStore,e,!1).then(()=>ra(r,e,n)).catch(il)}function ra(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||pp(t,r)})}function pp(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(ap(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Il(t))}function Su(t,e,n){for(const r of n)r instanceof hp?(t.yc.addReference(r.key,e),r_(t,r)):r instanceof dp?(N("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||pp(t,r.key)):O()}function r_(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(N("SyncEngine","New document in limbo: "+n),t.wc.add(r),Il(t))}function Il(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new D(Q.fromString(e)),r=t.Ec.next();t.gc.set(r,new XE(n)),t.mc=t.mc.insert(n,r),op(t.remoteStore,new dt(st(Mf(n.path)),r,"TargetPurposeLimboResolution",ol.ct))}}async function mp(t,e,n){const r=F(t),s=[],i=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=wl.Bi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fc.eu(s),await async function(a,l){const c=F(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>w.forEach(l,d=>w.forEach(d.$i,f=>c.persistence.referenceDelegate.addReference(u,d.targetId,f)).next(()=>w.forEach(d.Fi,f=>c.persistence.referenceDelegate.removeReference(u,d.targetId,f)))))}catch(u){if(!Ur(u))throw u;N("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const f=c.Hi.get(d),p=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(p);c.Hi=c.Hi.insert(d,g)}}}(r.localStore,i))}async function s_(t,e){const n=F(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await rp(n.localStore,e);n.currentUser=e,function(s,i){s.Tc.forEach(o=>{o.forEach(a=>{a.reject(new S(E.CANCELLED,i))})}),s.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mp(n,r.tr)}}function i_(t,e){const n=F(t),r=n.gc.get(e);if(r&&r.lc)return $().add(r.key);{let s=$();const i=n._c.get(e);if(!i)return s;for(const o of i){const a=n.dc.get(o);s=s.unionWith(a.view.ec)}return s}}function o_(t){const e=F(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=i_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=n_.bind(null,e),e.fc.eu=GE.bind(null,e.eventManager),e.fc.vc=QE.bind(null,e.eventManager),e}class Nu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ei(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return AE(this.persistence,new EE,e.initialUser,this.serializer)}createPersistence(e){return new wE(vl.js,this.serializer)}createSharedClientState(e){return new SE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class a_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=s_.bind(null,this.syncEngine),await BE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qE}createDatastore(e){const n=Ei(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new RE(s));var s;return function(i,o,a,l){return new OE(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>xu(this.syncEngine,a,0),o=Au.D()?new Au:new NE,new LE(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,l,c){const u=new JE(r,s,i,o,a,l);return c&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=F(e);N("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await qr(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):rt("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=me.UNAUTHENTICATED,this.clientId=ib.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{N("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(N("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=up(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ro(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await rp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Du(t,e){t.asyncQueue.verifyOperationInProgress();const n=await h_(t);N("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Iu(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Iu(e.remoteStore,i)),t._onlineComponents=e}function u_(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function h_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await ro(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!u_(n))throw n;pn("Error using user provided cache. Falling back to memory cache: "+n),await ro(t,new Nu)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await ro(t,new Nu);return t._offlineComponents}async function d_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Du(t,t._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Du(t,new a_))),t._onlineComponents}async function f_(t){const e=await d_(t),n=e.eventManager;return n.onListen=ZE.bind(null,e.syncEngine),n.onUnlisten=t_.bind(null,e.syncEngine),n}function p_(t,e,n={}){const r=new Mt;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,l){const c=new l_({next:d=>{i.enqueueAndForget(()=>zE(s,u)),d.fromCache&&a.source==="server"?l.reject(new S(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new WE(o,c,{includeMetadataChanges:!0,Uu:!0});return HE(s,u)}(await f_(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t,e,n){if(!n)throw new S(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function g_(t,e,n,r){if(e===!0&&r===!0)throw new S(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ru(t){if(D.isDocumentKey(t))throw new S(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ai(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":O()}function sa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new S(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ai(t);throw new S(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new S(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new S(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}g_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new S(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Xw;switch(n.type){case"firstParty":return new tb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new S(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ku.get(e);n&&(N("ComponentProvider","Removing Datastore"),ku.delete(e),n.terminate())}(this),Promise.resolve()}}function y_(t,e,n,r={}){var s;const i=(t=sa(t,Cl))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&pn("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=me.MOCK_USER;else{o=Zy(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new S(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new me(l)}t._authCredentials=new Jw(new If(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class Gt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gt(this.firestore,e,this._query)}}class cn extends Gt{constructor(e,n,r){super(e,n,Mf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new D(e))}withConverter(e){return new cn(this.firestore,e,this._path)}}function v_(t,e,...n){if(t=dn(t),m_("collection","path",e),t instanceof Cl){const r=Q.fromString(e,...n);return Ru(r),new cn(t,null,r)}{if(!(t instanceof ot||t instanceof cn))throw new S(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Q.fromString(e,...n));return Ru(r),new cn(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new ip(this,"async_queue_retry"),this.Yc=()=>{const n=no();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=no();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=no();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Mt;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Ur(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw rt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const s=Al.createAndSchedule(this,e,n,r,i=>this.ea(i));return this.jc.push(s),s}Xc(){this.zc&&O()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class gp extends Cl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new w_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yp(this),this._firestoreClient.terminate()}}function b_(t,e){const n=typeof t=="object"?t:Qh(),r=typeof t=="string"?t:e||"(default)",s=Dr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Yy("firestore");i&&y_(s,...i)}return s}function E_(t){return t._firestoreClient||yp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yp(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,l,c){return new pb(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new c_(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bn(be.fromBase64String(e))}catch(n){throw new S(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bn(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new S(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new S(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new S(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=/^__.*__$/;function bp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Sl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Sl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ca({path:r,ha:!1});return s.la(e),s}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ca({path:r,ha:!1});return s.oa(),s}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return ia(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(bp(this.ua)&&__.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class A_{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ei(e)}ga(e,n,r,s=!1){return new Sl({ua:e,methodName:n,ma:r,path:Ee.emptyPath(),ha:!1,wa:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function T_(t){const e=t._freezeSettings(),n=Ei(t._databaseId);return new A_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function I_(t,e,n,r=!1){return Nl(n,t.ga(r?4:3,e))}function Nl(t,e){if(Ep(t=dn(t)))return x_("Unsupported field value:",e,t),C_(t,e);if(t instanceof wp)return function(n,r){if(!bp(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Nl(o,r.da(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=dn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Mb(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ie.fromDate(n);return{timestampValue:ea(r.serializer,s)}}if(n instanceof ie){const s=new ie(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ea(r.serializer,s)}}if(n instanceof xl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof bn)return{bytesValue:Yf(r.serializer,n._byteString)};if(n instanceof ot){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Xf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Ai(n)}`)}(t,e)}function C_(t,e){const n={};return Cf(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,(r,s)=>{const i=Nl(s,e.aa(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ep(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ie||t instanceof xl||t instanceof bn||t instanceof ot||t instanceof wp)}function x_(t,e,n){if(!Ep(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ai(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}const S_=new RegExp("[~\\*/\\[\\]]");function N_(t,e,n){if(e.search(S_)>=0)throw ia(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vp(...e.split("."))._internalPath}catch{throw ia(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ia(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new S(E.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new D_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Dl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class D_ extends _p{data(){return super.data()}}function Dl(t,e){return typeof e=="string"?N_(t,e):e instanceof vp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new S(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kl{}class Ap extends kl{}function R_(t,e,...n){let r=[];e instanceof kl&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof Pl).length,o=s.filter(a=>a instanceof Rl).length;if(i>1||i>0&&o>0)throw new S(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Rl extends Ap{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Rl(e,n,r)}_apply(e){const n=this._parse(e);return Tp(e._query,n),new Gt(e.firestore,e.converter,Wo(e._query,n))}_parse(e){const n=T_(e.firestore);return function(s,i,o,a,l,c,u){let d;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new S(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Ou(u,c);const f=[];for(const p of u)f.push(Mu(a,s,p));d={arrayValue:{values:f}}}else d=Mu(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Ou(u,c),d=I_(o,i,u,c==="in"||c==="not-in");return ne.create(l,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Pl extends kl{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pl(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ue.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)Tp(i,a),i=Wo(i,a)}(e._query,n),new Gt(e.firestore,e.converter,Wo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ml extends Ap{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ml(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new S(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new S(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new sn(s,i);return function(a,l){if(dl(a)===null){const c=mi(a);c!==null&&Ip(a,c,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new Gt(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Dn(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function P_(t,e="asc"){const n=e,r=Dl("orderBy",t);return Ml._create(r,n)}function Mu(t,e,n){if(typeof(n=dn(n))=="string"){if(n==="")throw new S(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Of(e)&&n.indexOf("/")!==-1)throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Q.fromString(n));if(!D.isDocumentKey(r))throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return su(t,new D(r))}if(n instanceof ot)return su(t,n._key);throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ai(n)}.`)}function Ou(t,e){if(!Array.isArray(t)||t.length===0)throw new S(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tp(t,e){if(e.isInequality()){const r=mi(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new S(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=dl(t);i!==null&&Ip(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new S(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new S(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Ip(t,e,n){if(!n.isEqual(e))throw new S(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class M_{convertValue(e,n="none"){switch(Ht(e)){case 0:return null;case 1:return e.booleanValue;case 2:return te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw O()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new xl(te(e.latitude),te(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ll(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Er(e));default:return null}}convertTimestamp(e){const n=Et(e);return new ie(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Q.fromString(e);re(np(r));const s=new _r(r.get(1),r.get(3)),i=new D(r.popFirst(5));return s.isEqual(n)||rt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class O_ extends _p{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ls(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Dl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ls extends O_{data(e={}){return super.data(e)}}class j_{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new rs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ls(this._firestore,this._userDataWriter,r.key,r,new rs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new S(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new ls(r._firestore,r._userDataWriter,o.doc.key,o.doc,new rs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new ls(r._firestore,r._userDataWriter,o.doc.key,o.doc,new rs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:L_(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function L_(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class $_ extends M_{constructor(e){super(),this.firestore=e}convertBytes(e){return new bn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function F_(t){t=sa(t,Gt);const e=sa(t.firestore,gp),n=E_(e),r=new $_(e);return k_(t._query),p_(n,t._query).then(s=>new j_(e,r,t,s))}(function(t,e=!0){(function(n){Nn=n})(i0),wt(new tt("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new gp(new Zw(n.getProvider("auth-internal")),new rb(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new S(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _r(a.options.projectId,l)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Qe(Zc,"3.11.0",t),Qe(Zc,"3.11.0","esm2017")})();const U_={apiKey:"AIzaSyDnXUnucMzBtgYnSPBKUv4S2acxyCi8Tkk",authDomain:"reel-talent-5ef72.firebaseapp.com",projectId:"reel-talent-5ef72",storageBucket:"reel-talent-5ef72.appspot.com",messagingSenderId:"80043393311",appId:"1:80043393311:web:43f2be04b4bbe841a0702a",measurementId:"G-3RJ1S1E46Q"},Ol=Gh(U_),B_=q1(Ol),V_=b_(Ol),q_="/assets/paint_strokes-bb4cea45.svg",H_=()=>{const[t,e]=m.useState([]),n=m.useMemo(()=>v_(V_,"posts"),[]),[r,s]=m.useState(!1),[i,o]=m.useState(!0);return m.useEffect(()=>{(async()=>{try{const l=R_(n,P_("published_date","desc")),c=await F_(l);e(c.docs),o(!1)}catch(l){console.error(l),s(!0),o(!1)}})()},[n]),i?h.jsx($h,{}):r?h.jsx(Ks,{}):h.jsxs("div",{children:[h.jsx(it,{}),h.jsxs("section",{className:"blog__main",children:[h.jsxs("div",{className:"blog__header",children:[" ",h.jsx("h3",{className:"blog__heading3",children:"the reel blog"}),h.jsxs("div",{className:"blog__heading-container",children:[h.jsx("h2",{className:"blog__heading2",children:"Writings from our team"}),h.jsx("img",{src:q_,className:"paint__strokes",height:30,alt:""})]}),h.jsx("h4",{className:"blog__heading4",children:"Stay informed with Reel Talent blog's latest industry news, including best hiring practices."})]}),h.jsx("div",{className:"card card__main",children:t.map(a=>h.jsxs("div",{className:"row mb-3 blog__cardContainer",children:[h.jsx("div",{className:"col-md-8 col-sm-12 listing__description",children:h.jsxs("div",{className:"card-body",children:[h.jsxs(X,{to:`/blog/${a.data().title}`,state:{post:a.data()},children:[h.jsxs("div",{className:"d-flex justify-content-between",children:[h.jsxs("span",{className:"card-text",children:[a.data().author," • "]}),h.jsx("span",{className:"card-text",children:new Date(a.data().published_date.toDate()).toLocaleDateString("default",{month:"short",day:"numeric",year:"numeric"})})]}),h.jsx("h5",{className:"card-title post__title",children:a.data().title})]}),h.jsx("p",{className:"card-text post__summary",children:a.data().summary})]})}),h.jsx("div",{className:"col-md-4 col-sm-12 align-self-center ",children:h.jsx(X,{to:`/blog/${a.data().title}`,state:{post:a.data()},children:h.jsx("img",{src:a.data().image_url,className:"card-img-top ",alt:"..."})})})]},a.id))})]}),h.jsx(At,{})]})};const z_=()=>{const e=In().state.post,[n,r]=m.useState(!0),[s,i]=m.useState(!1);if(m.useEffect(()=>{e.hasOwnProperty("body")?r(!1):(r(!1),i(!0))},[e]),n)return h.jsx(h.Fragment,{children:h.jsx($h,{})});if(s)return h.jsx(Ks,{});const a=e.body.join(" ").split(" ").length,c=Math.ceil(a/250);return h.jsxs("div",{children:[h.jsx(it,{}),h.jsx("section",{className:"blogPost__main",children:h.jsxs("div",{className:"blogPost_wrapper",children:[h.jsxs(X,{className:"blogPost__back",to:"/blog",children:[h.jsx(Oy,{})," blog"]}),h.jsxs("div",{className:"blogPost__header",children:[h.jsx("h1",{children:e.title}),h.jsx("img",{className:"blogPost__image",src:e.image_url,alt:e.title}),h.jsx("div",{className:"blogPost__pg blogPost__readTime",children:h.jsxs("p",{children:[`${c} ${c===1?"min":"mins"}`," ","read time"]})}),h.jsx("div",{style:{backgroundColor:"forestgreen",height:"1px",width:"50%",margin:"auto"}})]}),h.jsxs("div",{className:"blogPost__body",children:[e.body.map((u,d)=>h.jsx("p",{className:"blogPost__pg",children:u},d)),h.jsxs("div",{className:"author__container",children:[h.jsx(X,{to:e.linkedin_link,children:h.jsx("img",{className:"blogPost__authorImg",src:e.author_image,alt:"author"})}),h.jsx("span",{children:h.jsxs(X,{to:e.linkedin_link,className:"blogPost__pg",children:[h.jsxs("p",{children:[" ",e.author]}),h.jsx("p",{children:new Date(e.published_date.seconds*1e3).toLocaleDateString("default",{month:"short",day:"numeric",year:"numeric"})}),h.jsx(jy,{className:"author__social"})]})})]})]})]})}),h.jsx(At,{})]})};const G_="/assets/legal-graphic-8ff34930.svg",Q_=()=>h.jsxs(h.Fragment,{children:[h.jsx(it,{}),h.jsxs("figure",{className:"legal__img__container",children:[h.jsx("img",{src:G_,alt:"graphic of man sitting on legal documents",className:"legal__img"})," ",h.jsx("figcaption",{className:"legal__img__text",children:"Legal"})]}),h.jsxs("section",{id:"terms__conditions",className:"legal__container",children:[h.jsx("h2",{className:"terms__title",children:"Terms and Conditions"}),h.jsx("p",{className:"legal__pg",children:`The following terms and conditions (collectively, these "Terms and Conditions") apply to your use of Reel Talent's website, including any content, functionality, and services offered (the "Website"). By using the Website, you accept and agree to be bound by these Terms and Conditions. These Terms and Conditions are effective as of September 12, 2022 and may be updated without notice to you. or through any such web sites or services.`}),h.jsx("p",{className:"legal__pg",children:"You are solely responsible for your conduct on the Website and must comply with all applicable laws and regulations. You may not post or distribute any content that is illegal, threatening, abusive, or violates the rights of others. We do not endorse any user-generated content and have the right to remove it if it does not comply with these Terms and Conditions."}),h.jsx("p",{className:"legal__pg",children:"The content on the Website is protected by copyrights, trademarks, and other proprietary rights, and is the property of Reel Talent. You may only use the content with written permission from Reel Talent or the specific content provider."}),h.jsx("p",{className:"legal__pg",children:"Reel Talent its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements."}),h.jsx("p",{className:"legal__pg",children:"The Website may link to other sites not under Reel Talent's control, and Reel Talent is not responsible for the content or accuracy of those sites. Your use of the Website is at your own risk and Reel Talent disclaims all warranties and limitations of liability. You agree to indemnify and hold Reel Talent harmless from any claims arising from your use of the Website."})]}),h.jsxs("section",{id:"privacy",className:"privacy__container",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"terms__title",children:"Privacy Policy"}),h.jsx("p",{className:"legal__pg",children:"Reel Talent is committed to protecting the privacy and security of personal data collected from our website visitors and job applicants. This Privacy Policy governs the collection, use, and disclosure of personal data by Reel Talent."})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"terms__title",children:"Data Collection "})," ",h.jsx("p",{className:"legal__pg",children:"Reel Talent collects personal data from visitors to our website who fill out forms requesting sales information. The personal data we collect may include but is not limited to your name, email address, telephone number, and resume information."})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"terms__title",children:"Cookie Notice"}),h.jsx("p",{className:"legal__pg",children:"Reel Talent uses cookies and similar technology to gather data from visitors to our website. This information helps us to improve the user experience and understand how our website is being used."})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"terms__title",children:"Personal Data"}),h.jsx("p",{className:"legal__pg",children:"Reel Talent will not sell, trade or otherwise disclose personal data collected from our website to third parties except as necessary to provide services requested by visitors or to comply with legal requirements."})]})]}),h.jsx(At,{})]});const W_="/assets/Bobby_profile-1a2811f7.jpg",K_="/assets/Nick_profile-aad508a4.jpg",Y_=()=>{const t=[{text:"I had the pleasure of working with Nick previously, and we partnered together to help scale the company over the last year. Nick is a very passionate individual who brings a unique perspective to recruiting! His empathy, expertise, and strong dedication to creating a seamless and unforgettable candidate experience is like no other. Nick would make an incredible addition to any organization!",author:"Fatima Vejzović"},{text:"I met Nick when I did a project for the company he was working at. After finishing that project, I asked him to help guide me through the phases of the job recruitment process. Nick went above and beyond during this process to help me. In addition to helping me find a job, Nick was a constant mentor to me. He never hesitated to share his insights with me and was a calming voice of reason many times. Along the way, I got to know Nick -- he's an amazing human being who cares about the people he is trying help. It was always extremely easy to connect with Nick. I never felt like I was talking to a recruiter; I always felt like I was talking to a friend. This all speaks to the fact that he has years of experience in his industry. He knows what he's talking about and he excels at connecting with people. I'm glad to call Nick a friend and can't speak highly enough about him.",author:"Shivaen Ahuja"}],e="Bobby is a multi-talented professional who combines his technical expertise with strong people skills. As the Head Engineer and Talent Manager, Bobby is passionate about building high-performing teams and fostering a culture of innovation. He is dedicated to creating a supportive environment where team members can thrive and achieve their full potential";return h.jsxs(h.Fragment,{children:[h.jsx("h2",{className:"meetTeamHeader",children:"Meet the Team"}),h.jsxs("div",{className:"team",children:[h.jsxs("div",{className:"team-member",children:[h.jsx("img",{src:K_,alt:"Nick Starkey",className:"team-member__image"}),h.jsx("h3",{children:"Nick Starkey"}),h.jsx("p",{className:"team-member__role",children:"Our Head Recruiter"}),h.jsxs("p",{className:"team-member__quote",children:[t[0].text," ",h.jsx("br",{}),h.jsxs("span",{className:"team-memeber__author",children:["- ",t[0].author]})]}),h.jsxs("p",{className:"team-member__quote",children:[t[1].text," ",h.jsx("br",{}),h.jsxs("span",{className:"team-memeber__author",children:["- ",t[1].author]})]})]}),h.jsxs("div",{className:"team-member",children:[h.jsx("img",{src:W_,alt:"Bobby Woody",className:"team-member__image"}),h.jsx("h3",{children:"Bobby Woody"}),h.jsx("p",{className:"team-member__role",children:"Our Head Engineer"}),h.jsx("p",{className:"team-member__description",children:e})]})]})]})},X_="/assets/pexels-mizuno-k-12903281-f290a531.jpg",J_="/assets/pexels-fauxels-3184300-b80243d6.jpg",Z_="/assets/pexels-fauxels-3183172-c765aa9d.jpg",eA=()=>h.jsxs(h.Fragment,{children:[h.jsx(it,{}),h.jsxs("section",{className:"about__page",children:[h.jsxs("section",{className:"about__section",children:[h.jsx("h1",{className:"about__title",children:"Expertly Connecting Talent with Opportunities"}),h.jsx("p",{className:"about__description",children:"Reel Talent is a recruiting company that aims to make hiring easy for businesses. We believe in transparency and strive to put it at the forefront of everything we do. Our goal is to provide a seamless and efficient hiring process that helps companies find the best talent for their needs. With Reel Talent, you can rest assured that you'll find the right fit for your organization."})]}),h.jsx(Y_,{}),h.jsxs("section",{className:"card__section",children:[h.jsxs("div",{className:"about__card",children:[h.jsx("img",{src:X_,alt:"Transparency",className:"about__img"}),h.jsx("h2",{className:"card__title ",children:"Transparency"}),h.jsx("p",{className:"card__text  about__description",children:"We believe in being transparent in all our dealings with our clients and job seekers."})]}),h.jsxs("div",{className:"about__card",children:[h.jsx("img",{src:J_,alt:"Efficiency",className:"about__img"}),h.jsx("h2",{className:"card__title ",children:"Efficiency"}),h.jsx("p",{className:"card__text  about__description",children:"Our goal is to provide a seamless and efficient hiring process for businesses."})]}),h.jsxs("div",{className:"about__card ",children:[h.jsx("img",{src:Z_,alt:"Finding the Right Fit",className:"about__img"}),h.jsx("h2",{className:"card__title ",children:"Finding the Right Fit"}),h.jsx("p",{className:"card__text about__description",children:"We strive to help businesses find the best talent for their needs, ensuring a good fit for both the company and the job seeker."})]})]})]}),h.jsx(At,{})]});function tA(t){return Nr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"}}]})(t)}function nA(t){return Nr({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"}}]})(t)}function rA(t){return Nr({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"}}]})(t)}const sA="/assets/AI-CTA-05e6e95d.svg",iA=()=>h.jsxs(h.Fragment,{children:[h.jsx(it,{}),h.jsxs("section",{className:"solutions",children:[h.jsx("section",{className:"solutions__intro",children:h.jsxs("div",{class:"tagline-container",children:[h.jsx("h1",{class:"tagline",children:"AI-Powered Solutions for Extraordinary Outcomes"}),h.jsxs("p",{className:"tagline__pg",children:[" ","Real Talent partners with Team AI to provide cutting-edge tools and technologies that enhance our recruitment process, ensuring the best match between candidates and employers."]})]})}),h.jsxs("section",{className:"solutions__features-container",children:[h.jsxs("div",{className:"solutions__feature-card",children:[h.jsx("div",{className:"solutions__feature-icon",children:h.jsx(rA,{})}),h.jsx("h4",{className:"solutions__feature-title",children:"Expert Talent Matching"}),h.jsx("p",{className:"solutions__feature-description",children:"Our AI-powered system matches the best candidates with your company culture and job requirements."})]}),h.jsxs("div",{className:"solutions__feature-card",children:[h.jsx("div",{className:"solutions__feature-icon",children:h.jsx(tA,{})}),h.jsx("h4",{className:"solutions__feature-title",children:"Data-Driven Decisions"}),h.jsx("p",{className:"solutions__feature-description",children:"Our analytics help you make informed decisions about your recruitment process."})]}),h.jsxs("div",{className:"solutions__feature-card",children:[h.jsx("div",{className:"solutions__feature-icon",children:h.jsx(nA,{})}),h.jsx("h4",{className:"solutions__feature-title",children:"Innovative Technology"}),h.jsx("p",{className:"solutions__feature-description",children:"Our technology provides cutting-edge solutions for your talent acquisition needs."})]})]}),h.jsx("section",{className:"cta",children:h.jsxs("div",{className:"cta__container",children:[h.jsxs("div",{className:"cta__link",children:[h.jsx("h3",{className:"cta__tagline",children:"Discover the Future of Hiring with Our AI-Powered Platform"}),h.jsx(X,{to:"/demo",children:h.jsx("button",{className:"cta__button",children:"Contact Us"})})]}),h.jsx("img",{className:"cta__logo",src:sA,alt:"",width:500})]})})]}),h.jsx(At,{})]}),oA=[{path:"/",element:h.jsx(Ve,{path:"/",element:h.jsx(yy,{})})},{path:"/demo",element:h.jsx(Ve,{path:"/demo",element:h.jsx(Fy,{})})},{path:"/",element:h.jsx(Ve,{path:"/about",element:h.jsx(eA,{})})},{path:"/legal",element:h.jsx(Ve,{path:"/legal",element:h.jsx(Q_,{})})},{path:"/blog",element:h.jsx(Ve,{path:"/blog",element:h.jsx(H_,{})})},{path:"/blog/:title",element:h.jsx(Ve,{path:"/blog/:title",element:h.jsx(z_,{})})},{path:"/solutions",element:h.jsx(Ve,{path:"/solutions",element:h.jsx(iA,{})})},{path:"404",element:h.jsx(Ve,{path:"404",element:h.jsx(Ks,{})})},{path:"*",element:h.jsx(Ve,{path:"*",element:h.jsx(Sm,{to:"404"})})}];var Cp={exports:{}},aA="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",lA=aA,cA=lA;function xp(){}function Sp(){}Sp.resetWarningCache=xp;var uA=function(){function t(r,s,i,o,a,l){if(l!==cA){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Sp,resetWarningCache:xp};return n.PropTypes=n,n};Cp.exports=uA();var hA=Cp.exports;const H=Ls(hA);function dA(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Np=m,fA=dA(Np);function ju(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pA(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var mA=!!(typeof window<"u"&&window.document&&window.document.createElement);function gA(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(s){return s.displayName||s.name||"Component"}return function(i){if(typeof i!="function")throw new Error("Expected WrappedComponent to be a React component.");var o=[],a;function l(){a=t(o.map(function(u){return u.props})),c.canUseDOM?e(a):n&&(a=n(a))}var c=function(u){pA(d,u);function d(){return u.apply(this,arguments)||this}d.peek=function(){return a},d.rewind=function(){if(d.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var g=a;return a=void 0,o=[],g};var f=d.prototype;return f.UNSAFE_componentWillMount=function(){o.push(this),l()},f.componentDidUpdate=function(){l()},f.componentWillUnmount=function(){var g=o.indexOf(this);o.splice(g,1),l()},f.render=function(){return fA.createElement(i,this.props)},d}(Np.PureComponent);return ju(c,"displayName","SideEffect("+r(i)+")"),ju(c,"canUseDOM",mA),c}}var yA=gA;const vA=Ls(yA);var wA=typeof Element<"u",bA=typeof Map=="function",EA=typeof Set=="function",_A=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function cs(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,s;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!cs(t[r],e[r]))return!1;return!0}var i;if(bA&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!cs(r.value[1],e.get(r.value[0])))return!1;return!0}if(EA&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(_A&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(s=Object.keys(t),n=s.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,s[r]))return!1;if(wA&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((s[r]==="_owner"||s[r]==="__v"||s[r]==="__o")&&t.$$typeof)&&!cs(t[s[r]],e[s[r]]))return!1;return!0}return t!==t&&e!==e}var AA=function(e,n){try{return cs(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const TA=Ls(AA);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Lu=Object.getOwnPropertySymbols,IA=Object.prototype.hasOwnProperty,CA=Object.prototype.propertyIsEnumerable;function xA(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function SA(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(i){return e[i]});if(r.join("")!=="0123456789")return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach(function(i){s[i]=i}),Object.keys(Object.assign({},s)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var NA=SA()?Object.assign:function(t,e){for(var n,r=xA(t),s,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var o in n)IA.call(n,o)&&(r[o]=n[o]);if(Lu){s=Lu(n);for(var a=0;a<s.length;a++)CA.call(n,s[a])&&(r[s[a]]=n[s[a]])}}return r};const DA=Ls(NA);var jt={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},R={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(R).map(function(t){return R[t]});var z={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},js={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Tr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},kA=Object.keys(js).reduce(function(t,e){return t[js[e]]=e,t},{}),RA=[R.NOSCRIPT,R.SCRIPT,R.STYLE],Le="data-react-helmet",PA=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},MA=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},OA=function(){function t(e,n){for(var r=0;r<n.length;r++){var s=n[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Ae=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jA=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},$u=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},LA=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},oa=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$A=function(e){var n=un(e,R.TITLE),r=un(e,Tr.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var s=un(e,Tr.DEFAULT_TITLE);return n||s||void 0},FA=function(e){return un(e,Tr.ON_CHANGE_CLIENT_STATE)||function(){}},so=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,s){return Ae({},r,s)},{})},UA=function(e,n){return n.filter(function(r){return typeof r[R.BASE]<"u"}).map(function(r){return r[R.BASE]}).reverse().reduce(function(r,s){if(!r.length)for(var i=Object.keys(s),o=0;o<i.length;o++){var a=i[o],l=a.toLowerCase();if(e.indexOf(l)!==-1&&s[l])return r.concat(s)}return r},[])},Un=function(e,n,r){var s={};return r.filter(function(i){return Array.isArray(i[e])?!0:(typeof i[e]<"u"&&HA("Helmet: "+e+' should be of type "Array". Instead found type "'+PA(i[e])+'"'),!1)}).map(function(i){return i[e]}).reverse().reduce(function(i,o){var a={};o.filter(function(f){for(var p=void 0,g=Object.keys(f),v=0;v<g.length;v++){var y=g[v],_=y.toLowerCase();n.indexOf(_)!==-1&&!(p===z.REL&&f[p].toLowerCase()==="canonical")&&!(_===z.REL&&f[_].toLowerCase()==="stylesheet")&&(p=_),n.indexOf(y)!==-1&&(y===z.INNER_HTML||y===z.CSS_TEXT||y===z.ITEM_PROP)&&(p=y)}if(!p||!f[p])return!1;var A=f[p].toLowerCase();return s[p]||(s[p]={}),a[p]||(a[p]={}),s[p][A]?!1:(a[p][A]=!0,!0)}).reverse().forEach(function(f){return i.push(f)});for(var l=Object.keys(a),c=0;c<l.length;c++){var u=l[c],d=DA({},s[u],a[u]);s[u]=d}return i},[]).reverse()},un=function(e,n){for(var r=e.length-1;r>=0;r--){var s=e[r];if(s.hasOwnProperty(n))return s[n]}return null},BA=function(e){return{baseTag:UA([z.HREF,z.TARGET],e),bodyAttributes:so(jt.BODY,e),defer:un(e,Tr.DEFER),encode:un(e,Tr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:so(jt.HTML,e),linkTags:Un(R.LINK,[z.REL,z.HREF],e),metaTags:Un(R.META,[z.NAME,z.CHARSET,z.HTTPEQUIV,z.PROPERTY,z.ITEM_PROP],e),noscriptTags:Un(R.NOSCRIPT,[z.INNER_HTML],e),onChangeClientState:FA(e),scriptTags:Un(R.SCRIPT,[z.SRC,z.INNER_HTML],e),styleTags:Un(R.STYLE,[z.CSS_TEXT],e),title:$A(e),titleAttributes:so(jt.TITLE,e)}},aa=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){aa(e)},0)}}(),Fu=function(e){return clearTimeout(e)},VA=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||aa:global.requestAnimationFrame||aa,qA=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Fu:global.cancelAnimationFrame||Fu,HA=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},Bn=null,zA=function(e){Bn&&qA(Bn),e.defer?Bn=VA(function(){Uu(e,function(){Bn=null})}):(Uu(e),Bn=null)},Uu=function(e,n){var r=e.baseTag,s=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;la(R.BODY,s),la(R.HTML,i),GA(f,p);var g={baseTag:Yt(R.BASE,r),linkTags:Yt(R.LINK,o),metaTags:Yt(R.META,a),noscriptTags:Yt(R.NOSCRIPT,l),scriptTags:Yt(R.SCRIPT,u),styleTags:Yt(R.STYLE,d)},v={},y={};Object.keys(g).forEach(function(_){var A=g[_],I=A.newTags,x=A.oldTags;I.length&&(v[_]=I),x.length&&(y[_]=g[_].oldTags)}),n&&n(),c(e,v,y)},Dp=function(e){return Array.isArray(e)?e.join(""):e},GA=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=Dp(e)),la(R.TITLE,n)},la=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var s=r.getAttribute(Le),i=s?s.split(","):[],o=[].concat(i),a=Object.keys(n),l=0;l<a.length;l++){var c=a[l],u=n[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),i.indexOf(c)===-1&&i.push(c);var d=o.indexOf(c);d!==-1&&o.splice(d,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);i.length===o.length?r.removeAttribute(Le):r.getAttribute(Le)!==a.join(",")&&r.setAttribute(Le,a.join(","))}},Yt=function(e,n){var r=document.head||document.querySelector(R.HEAD),s=r.querySelectorAll(e+"["+Le+"]"),i=Array.prototype.slice.call(s),o=[],a=void 0;return n&&n.length&&n.forEach(function(l){var c=document.createElement(e);for(var u in l)if(l.hasOwnProperty(u))if(u===z.INNER_HTML)c.innerHTML=l.innerHTML;else if(u===z.CSS_TEXT)c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText));else{var d=typeof l[u]>"u"?"":l[u];c.setAttribute(u,d)}c.setAttribute(Le,"true"),i.some(function(f,p){return a=p,c.isEqualNode(f)})?i.splice(a,1):o.push(c)}),i.forEach(function(l){return l.parentNode.removeChild(l)}),o.forEach(function(l){return r.appendChild(l)}),{oldTags:i,newTags:o}},kp=function(e){return Object.keys(e).reduce(function(n,r){var s=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+s:s},"")},QA=function(e,n,r,s){var i=kp(r),o=Dp(n);return i?"<"+e+" "+Le+'="true" '+i+">"+oa(o,s)+"</"+e+">":"<"+e+" "+Le+'="true">'+oa(o,s)+"</"+e+">"},WA=function(e,n,r){return n.reduce(function(s,i){var o=Object.keys(i).filter(function(c){return!(c===z.INNER_HTML||c===z.CSS_TEXT)}).reduce(function(c,u){var d=typeof i[u]>"u"?u:u+'="'+oa(i[u],r)+'"';return c?c+" "+d:d},""),a=i.innerHTML||i.cssText||"",l=RA.indexOf(e)===-1;return s+"<"+e+" "+Le+'="true" '+o+(l?"/>":">"+a+"</"+e+">")},"")},Rp=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,s){return r[js[s]||s]=e[s],r},n)},KA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,s){return r[kA[s]||s]=e[s],r},n)},YA=function(e,n,r){var s,i=(s={key:n},s[Le]=!0,s),o=Rp(r,i);return[Y.createElement(R.TITLE,o,n)]},XA=function(e,n){return n.map(function(r,s){var i,o=(i={key:s},i[Le]=!0,i);return Object.keys(r).forEach(function(a){var l=js[a]||a;if(l===z.INNER_HTML||l===z.CSS_TEXT){var c=r.innerHTML||r.cssText;o.dangerouslySetInnerHTML={__html:c}}else o[l]=r[a]}),Y.createElement(e,o)})},Xe=function(e,n,r){switch(e){case R.TITLE:return{toComponent:function(){return YA(e,n.title,n.titleAttributes)},toString:function(){return QA(e,n.title,n.titleAttributes,r)}};case jt.BODY:case jt.HTML:return{toComponent:function(){return Rp(n)},toString:function(){return kp(n)}};default:return{toComponent:function(){return XA(e,n)},toString:function(){return WA(e,n,r)}}}},Pp=function(e){var n=e.baseTag,r=e.bodyAttributes,s=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.scriptTags,u=e.styleTags,d=e.title,f=d===void 0?"":d,p=e.titleAttributes;return{base:Xe(R.BASE,n,s),bodyAttributes:Xe(jt.BODY,r,s),htmlAttributes:Xe(jt.HTML,i,s),link:Xe(R.LINK,o,s),meta:Xe(R.META,a,s),noscript:Xe(R.NOSCRIPT,l,s),script:Xe(R.SCRIPT,c,s),style:Xe(R.STYLE,u,s),title:Xe(R.TITLE,{title:f,titleAttributes:p},s)}},JA=function(e){var n,r;return r=n=function(s){jA(i,s);function i(){return MA(this,i),LA(this,s.apply(this,arguments))}return i.prototype.shouldComponentUpdate=function(a){return!TA(this.props,a)},i.prototype.mapNestedChildrenToProps=function(a,l){if(!l)return null;switch(a.type){case R.SCRIPT:case R.NOSCRIPT:return{innerHTML:l};case R.STYLE:return{cssText:l}}throw new Error("<"+a.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},i.prototype.flattenArrayTypeChildren=function(a){var l,c=a.child,u=a.arrayTypeChildren,d=a.newChildProps,f=a.nestedChildren;return Ae({},u,(l={},l[c.type]=[].concat(u[c.type]||[],[Ae({},d,this.mapNestedChildrenToProps(c,f))]),l))},i.prototype.mapObjectTypeChildren=function(a){var l,c,u=a.child,d=a.newProps,f=a.newChildProps,p=a.nestedChildren;switch(u.type){case R.TITLE:return Ae({},d,(l={},l[u.type]=p,l.titleAttributes=Ae({},f),l));case R.BODY:return Ae({},d,{bodyAttributes:Ae({},f)});case R.HTML:return Ae({},d,{htmlAttributes:Ae({},f)})}return Ae({},d,(c={},c[u.type]=Ae({},f),c))},i.prototype.mapArrayTypeChildrenToProps=function(a,l){var c=Ae({},l);return Object.keys(a).forEach(function(u){var d;c=Ae({},c,(d={},d[u]=a[u],d))}),c},i.prototype.warnOnInvalidChildren=function(a,l){return!0},i.prototype.mapChildrenToProps=function(a,l){var c=this,u={};return Y.Children.forEach(a,function(d){if(!(!d||!d.props)){var f=d.props,p=f.children,g=$u(f,["children"]),v=KA(g);switch(c.warnOnInvalidChildren(d,p),d.type){case R.LINK:case R.META:case R.NOSCRIPT:case R.SCRIPT:case R.STYLE:u=c.flattenArrayTypeChildren({child:d,arrayTypeChildren:u,newChildProps:v,nestedChildren:p});break;default:l=c.mapObjectTypeChildren({child:d,newProps:l,newChildProps:v,nestedChildren:p});break}}}),l=this.mapArrayTypeChildrenToProps(u,l),l},i.prototype.render=function(){var a=this.props,l=a.children,c=$u(a,["children"]),u=Ae({},c);return l&&(u=this.mapChildrenToProps(l,u)),Y.createElement(e,u)},OA(i,null,[{key:"canUseDOM",set:function(a){e.canUseDOM=a}}]),i}(Y.Component),n.propTypes={base:H.object,bodyAttributes:H.object,children:H.oneOfType([H.arrayOf(H.node),H.node]),defaultTitle:H.string,defer:H.bool,encodeSpecialCharacters:H.bool,htmlAttributes:H.object,link:H.arrayOf(H.object),meta:H.arrayOf(H.object),noscript:H.arrayOf(H.object),onChangeClientState:H.func,script:H.arrayOf(H.object),style:H.arrayOf(H.object),title:H.string,titleAttributes:H.object,titleTemplate:H.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var s=e.rewind();return s||(s=Pp({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),s},r},ZA=function(){return null},eT=vA(BA,zA,Pp)(ZA),ca=JA(eT);ca.renderStatic=ca.rewind;const tT=()=>h.jsxs(ca,{children:[h.jsx("title",{children:"Reel Talent: Your Expert Recruiting Partner"}),h.jsx("meta",{name:"description",content:"Reel Talent provides comprehensive external recruiting services to help businesses fill job roles with top talent. Partner with us today!"}),h.jsx("meta",{name:"keywords",content:"recruiting, external recruiting, job placement, talent acquisition, Reel Talent"})]}),nT=()=>{const{pathname:t}=In();return m.useEffect(()=>{document.documentElement.scrollTo({top:0,left:0,behavior:"instant"})},[t]),null};class rT extends m.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}render(){return this.state.hasError?h.jsx(Ks,{}):this.props.children}}const sT=()=>h.jsxs(rT,{children:[h.jsx(tT,{}),h.jsx("div",{children:h.jsx(Dm,{children:oA.map(t=>t.element)})}),h.jsx(nT,{})]});io.createRoot(document.getElementById("root")).render(h.jsx(Y.StrictMode,{children:h.jsx(Om,{children:h.jsx(sT,{firebase:Ol,analytics:B_})})}));
