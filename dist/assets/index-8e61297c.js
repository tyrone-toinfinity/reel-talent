var Pf=Object.defineProperty;var Mf=(t,e,n)=>e in t?Pf(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var I=(t,e,n)=>(Mf(t,typeof e!="symbol"?e+"":e,n),n);import{r as m,a as la,R as Y,g as Ms}from"./react-c38fdf14.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Vu={exports:{}},Ls={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf=m,jf=Symbol.for("react.element"),Ff=Symbol.for("react.fragment"),Uf=Object.prototype.hasOwnProperty,Vf=Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bf={key:!0,ref:!0,__self:!0,__source:!0};function Bu(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Uf.call(e,r)&&!Bf.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:jf,type:t,key:i,ref:o,props:s,_owner:Vf.current}}Ls.Fragment=Ff;Ls.jsx=Bu;Ls.jsxs=Bu;Vu.exports=Ls;var h=Vu.exports;var ro={},Ml=la;ro.createRoot=Ml.createRoot,ro.hydrateRoot=Ml.hydrateRoot;/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function er(){return er=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},er.apply(this,arguments)}var at;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(at||(at={}));const Ll="popstate";function $f(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return so("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:ls(s)}return Gf(e,n,null,t)}function J(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ca(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Hf(){return Math.random().toString(36).substr(2,8)}function jl(t,e){return{usr:t.state,key:t.key,idx:e}}function so(t,e,n,r){return n===void 0&&(n=null),er({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_n(e):e,{state:n,key:e&&e.key||r||Hf()})}function ls(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _n(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Gf(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=at.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(er({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=at.Pop;let y=u(),w=y==null?null:y-c;c=y,l&&l({action:a,location:v.location,delta:w})}function p(y,w){a=at.Push;let A=so(v.location,y,w);n&&n(A,y),c=u()+1;let S=jl(A,c),C=v.createHref(A);try{o.pushState(S,"",C)}catch{s.location.assign(C)}i&&l&&l({action:a,location:v.location,delta:1})}function f(y,w){a=at.Replace;let A=so(v.location,y,w);n&&n(A,y),c=u();let S=jl(A,c),C=v.createHref(A);o.replaceState(S,"",C),i&&l&&l({action:a,location:v.location,delta:0})}function g(y){let w=s.location.origin!=="null"?s.location.origin:s.location.href,A=typeof y=="string"?y:ls(y);return J(w,"No window.location.(origin|href) available to create URL for href: "+A),new URL(A,w)}let v={get action(){return a},get location(){return t(s,o)},listen(y){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(Ll,d),l=y,()=>{s.removeEventListener(Ll,d),l=null}},createHref(y){return e(s,y)},createURL:g,encodeLocation(y){let w=g(y);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:p,replace:f,go(y){return o.go(y)}};return v}var Fl;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Fl||(Fl={}));function qf(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?_n(e):e,s=ua(r.pathname||"/",n);if(s==null)return null;let i=$u(t);zf(i);let o=null;for(let a=0;o==null&&a<i.length;++a)o=tm(i[a],sm(s));return o}function $u(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(J(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=dt([r,l.relativePath]),u=n.concat(l);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$u(i.children,e,u,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:Zf(c,i.index),routesMeta:u})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of Hu(i.path))s(i,o,l)}),e}function Hu(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=Hu(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function zf(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:em(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Kf=/^:\w+$/,Wf=3,Qf=2,Yf=1,Xf=10,Jf=-2,Ul=t=>t==="*";function Zf(t,e){let n=t.split("/"),r=n.length;return n.some(Ul)&&(r+=Jf),e&&(r+=Qf),n.filter(s=>!Ul(s)).reduce((s,i)=>s+(Kf.test(i)?Wf:i===""?Yf:Xf),r)}function em(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function tm(t,e){let{routesMeta:n}=t,r={},s="/",i=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=s==="/"?e:e.slice(s.length)||"/",u=nm({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let d=a.route;i.push({params:r,pathname:dt([s,u.pathname]),pathnameBase:lm(dt([s,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(s=dt([s,u.pathnameBase]))}return i}function nm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=rm(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((c,u,d)=>{if(u==="*"){let p=a[d]||"";o=i.slice(0,i.length-p.length).replace(/(.)\/+$/,"$1")}return c[u]=im(a[d]||"",u),c},{}),pathname:i,pathnameBase:o,pattern:t}}function rm(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ca(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function sm(t){try{return decodeURI(t)}catch(e){return ca(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function im(t,e){try{return decodeURIComponent(t)}catch(n){return ca(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ua(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function om(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?_n(t):t;return{pathname:n?n.startsWith("/")?n:am(n,e):e,search:cm(r),hash:um(s)}}function am(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function wi(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gu(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function qu(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=_n(t):(s=er({},t),J(!s.pathname||!s.pathname.includes("?"),wi("?","pathname","search",s)),J(!s.pathname||!s.pathname.includes("#"),wi("#","pathname","hash",s)),J(!s.search||!s.search.includes("#"),wi("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;s.pathname=p.join("/")}a=d>=0?e[d]:"/"}let l=om(s,a),c=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const dt=t=>t.join("/").replace(/\/\/+/g,"/"),lm=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cm=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,um=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function hm(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cs(){return cs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cs.apply(this,arguments)}const ha=m.createContext(null),zu=m.createContext(null),bn=m.createContext(null),js=m.createContext(null),En=m.createContext({outlet:null,matches:[]}),Ku=m.createContext(null);function dm(t,e){let{relative:n}=e===void 0?{}:e;wn()||J(!1);let{basename:r,navigator:s}=m.useContext(bn),{hash:i,pathname:o,search:a}=Qu(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:dt([r,o])),s.createHref({pathname:l,search:a,hash:i})}function wn(){return m.useContext(js)!=null}function An(){return wn()||J(!1),m.useContext(js).location}function Wu(t){m.useContext(bn).static||m.useLayoutEffect(t)}function Fs(){return m.useContext(ha)!=null?Sm():pm()}function pm(){wn()||J(!1);let{basename:t,navigator:e}=m.useContext(bn),{matches:n}=m.useContext(En),{pathname:r}=An(),s=JSON.stringify(Gu(n).map(a=>a.pathnameBase)),i=m.useRef(!1);return Wu(()=>{i.current=!0}),m.useCallback(function(a,l){if(l===void 0&&(l={}),!i.current)return;if(typeof a=="number"){e.go(a);return}let c=qu(a,JSON.parse(s),r,l.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:dt([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state,l)},[t,e,s,r])}function Qu(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=m.useContext(En),{pathname:s}=An(),i=JSON.stringify(Gu(r).map(o=>o.pathnameBase));return m.useMemo(()=>qu(t,JSON.parse(i),s,n==="path"),[t,i,s,n])}function fm(t,e){return mm(t,e)}function mm(t,e,n){wn()||J(!1);let{navigator:r}=m.useContext(bn),{matches:s}=m.useContext(En),i=s[s.length-1],o=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let l=An(),c;if(e){var u;let v=typeof e=="string"?_n(e):e;a==="/"||(u=v.pathname)!=null&&u.startsWith(a)||J(!1),c=v}else c=l;let d=c.pathname||"/",p=a==="/"?d:d.slice(a.length)||"/",f=qf(t,{pathname:p}),g=bm(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:dt([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:dt([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n);return e&&g?m.createElement(js.Provider,{value:{location:cs({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:at.Pop}},g):g}function gm(){let t=Tm(),e=hm(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},e),n?m.createElement("pre",{style:s},n):null,i)}const ym=m.createElement(gm,null);class vm extends m.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?m.createElement(En.Provider,{value:this.props.routeContext},m.createElement(Ku.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _m(t){let{routeContext:e,match:n,children:r}=t,s=m.useContext(ha);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(En.Provider,{value:e},r)}function bm(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let i=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=i.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||J(!1),i=i.slice(0,Math.min(i.length,a+1))}return i.reduceRight((a,l,c)=>{let u=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||ym);let p=e.concat(i.slice(0,c+1)),f=()=>{let g;return u?g=d:l.route.element?g=l.route.element:g=a,m.createElement(_m,{match:l,routeContext:{outlet:a,matches:p},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?m.createElement(vm,{location:n.location,revalidation:n.revalidation,component:d,error:u,children:f(),routeContext:{outlet:null,matches:p}}):f()},null)}var io;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(io||(io={}));var tr;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(tr||(tr={}));function Em(t){let e=m.useContext(ha);return e||J(!1),e}function wm(t){let e=m.useContext(zu);return e||J(!1),e}function Am(t){let e=m.useContext(En);return e||J(!1),e}function Yu(t){let e=Am(),n=e.matches[e.matches.length-1];return n.route.id||J(!1),n.route.id}function Tm(){var t;let e=m.useContext(Ku),n=wm(tr.UseRouteError),r=Yu(tr.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Sm(){let{router:t}=Em(io.UseNavigateStable),e=Yu(tr.UseNavigateStable),n=m.useRef(!1);return Wu(()=>{n.current=!0}),m.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,cs({fromRouteId:e},i)))},[t,e])}function Im(t){let{to:e,replace:n,state:r,relative:s}=t;wn()||J(!1);let i=m.useContext(zu),o=Fs();return m.useEffect(()=>{i&&i.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:s})}),null}function $e(t){J(!1)}function Cm(t){let{basename:e="/",children:n=null,location:r,navigationType:s=at.Pop,navigator:i,static:o=!1}=t;wn()&&J(!1);let a=e.replace(/^\/*/,"/"),l=m.useMemo(()=>({basename:a,navigator:i,static:o}),[a,i,o]);typeof r=="string"&&(r=_n(r));let{pathname:c="/",search:u="",hash:d="",state:p=null,key:f="default"}=r,g=m.useMemo(()=>{let v=ua(c,a);return v==null?null:{location:{pathname:v,search:u,hash:d,state:p,key:f},navigationType:s}},[a,c,u,d,p,f,s]);return g==null?null:m.createElement(bn.Provider,{value:l},m.createElement(js.Provider,{children:n,value:g}))}function xm(t){let{children:e,location:n}=t;return fm(oo(e),n)}var Vl;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Vl||(Vl={}));new Promise(()=>{});function oo(t,e){e===void 0&&(e=[]);let n=[];return m.Children.forEach(t,(r,s)=>{if(!m.isValidElement(r))return;let i=[...e,s];if(r.type===m.Fragment){n.push.apply(n,oo(r.props.children,i));return}r.type!==$e&&J(!1),!r.props.index||!r.props.children||J(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=oo(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ao.apply(this,arguments)}function Rm(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function Dm(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Nm(t,e){return t.button===0&&(!e||e==="_self")&&!Dm(t)}const km=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Om(t){let{basename:e,children:n,window:r}=t,s=m.useRef();s.current==null&&(s.current=$f({window:r,v5Compat:!0}));let i=s.current,[o,a]=m.useState({action:i.action,location:i.location});return m.useLayoutEffect(()=>i.listen(a),[i]),m.createElement(Cm,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:i})}const Pm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Mm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,X=m.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:l,to:c,preventScrollReset:u}=e,d=Rm(e,km),{basename:p}=m.useContext(bn),f,g=!1;if(typeof c=="string"&&Mm.test(c)&&(f=c,Pm))try{let A=new URL(window.location.href),S=c.startsWith("//")?new URL(A.protocol+c):new URL(c),C=ua(S.pathname,p);S.origin===A.origin&&C!=null?c=C+S.search+S.hash:g=!0}catch{}let v=dm(c,{relative:s}),y=Lm(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:s});function w(A){r&&r(A),A.defaultPrevented||y(A)}return m.createElement("a",ao({},d,{href:f||v,onClick:g||i?r:w,ref:n,target:l}))});var Bl;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Bl||(Bl={}));var $l;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})($l||($l={}));function Lm(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o}=e===void 0?{}:e,a=Fs(),l=An(),c=Qu(t,{relative:o});return m.useCallback(u=>{if(Nm(u,n)){u.preventDefault();let d=r!==void 0?r:ls(l)===ls(c);a(t,{replace:d,state:s,preventScrollReset:i,relative:o})}},[l,a,c,r,s,n,t,i,o])}var da=Tr(),P=t=>Ar(t,da),pa=Tr();P.write=t=>Ar(t,pa);var Us=Tr();P.onStart=t=>Ar(t,Us);var fa=Tr();P.onFrame=t=>Ar(t,fa);var ma=Tr();P.onFinish=t=>Ar(t,ma);var Jt=[];P.setTimeout=(t,e)=>{let n=P.now()+e,r=()=>{let i=Jt.findIndex(o=>o.cancel==r);~i&&Jt.splice(i,1),ct-=~i?1:0},s={time:n,handler:t,cancel:r};return Jt.splice(Xu(n),0,s),ct+=1,Ju(),s};var Xu=t=>~(~Jt.findIndex(e=>e.time>t)||~Jt.length);P.cancel=t=>{Us.delete(t),fa.delete(t),ma.delete(t),da.delete(t),pa.delete(t)};P.sync=t=>{lo=!0,P.batchedUpdates(t),lo=!1};P.throttle=t=>{let e;function n(){try{t(...e)}finally{e=null}}function r(...s){e=s,P.onStart(n)}return r.handler=t,r.cancel=()=>{Us.delete(n),e=null},r};var ga=typeof window<"u"?window.requestAnimationFrame:()=>{};P.use=t=>ga=t;P.now=typeof performance<"u"?()=>performance.now():Date.now;P.batchedUpdates=t=>t();P.catch=console.error;P.frameLoop="always";P.advance=()=>{P.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):eh()};var lt=-1,ct=0,lo=!1;function Ar(t,e){lo?(e.delete(t),t(0)):(e.add(t),Ju())}function Ju(){lt<0&&(lt=0,P.frameLoop!=="demand"&&ga(Zu))}function jm(){lt=-1}function Zu(){~lt&&(ga(Zu),P.batchedUpdates(eh))}function eh(){let t=lt;lt=P.now();let e=Xu(lt);if(e&&(th(Jt.splice(0,e),n=>n.handler()),ct-=e),!ct){jm();return}Us.flush(),da.flush(t?Math.min(64,lt-t):16.667),fa.flush(),pa.flush(),ma.flush()}function Tr(){let t=new Set,e=t;return{add(n){ct+=e==t&&!t.has(n)?1:0,t.add(n)},delete(n){return ct-=e==t&&t.has(n)?1:0,t.delete(n)},flush(n){e.size&&(t=new Set,ct-=e.size,th(e,r=>r(n)&&t.add(r)),ct+=t.size,e=t)}}}function th(t,e){t.forEach(n=>{try{e(n)}catch(r){P.catch(r)}})}var Fm=Object.defineProperty,Um=(t,e)=>{for(var n in e)Fm(t,n,{get:e[n],enumerable:!0})},Fe={};Um(Fe,{assign:()=>Bm,colors:()=>pt,createStringInterpolator:()=>va,skipAnimation:()=>rh,to:()=>nh,willAdvance:()=>_a});function co(){}var Vm=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),b={arr:Array.isArray,obj:t=>!!t&&t.constructor.name==="Object",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",und:t=>t===void 0};function Je(t,e){if(b.arr(t)){if(!b.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}var L=(t,e)=>t.forEach(e);function We(t,e,n){if(b.arr(t)){for(let r=0;r<t.length;r++)e.call(n,t[r],`${r}`);return}for(let r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r)}var xe=t=>b.und(t)?[]:b.arr(t)?t:[t];function qn(t,e){if(t.size){let n=Array.from(t);t.clear(),L(n,e)}}var Vn=(t,...e)=>qn(t,n=>n(...e)),ya=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),va,nh,pt=null,rh=!1,_a=co,Bm=t=>{t.to&&(nh=t.to),t.now&&(P.now=t.now),t.colors!==void 0&&(pt=t.colors),t.skipAnimation!=null&&(rh=t.skipAnimation),t.createStringInterpolator&&(va=t.createStringInterpolator),t.requestAnimationFrame&&P.use(t.requestAnimationFrame),t.batchedUpdates&&(P.batchedUpdates=t.batchedUpdates),t.willAdvance&&(_a=t.willAdvance),t.frameLoop&&(P.frameLoop=t.frameLoop)},zn=new Set,Oe=[],Ai=[],us=0,Vs={get idle(){return!zn.size&&!Oe.length},start(t){us>t.priority?(zn.add(t),P.onStart($m)):(sh(t),P(uo))},advance:uo,sort(t){if(us)P.onFrame(()=>Vs.sort(t));else{let e=Oe.indexOf(t);~e&&(Oe.splice(e,1),ih(t))}},clear(){Oe=[],zn.clear()}};function $m(){zn.forEach(sh),zn.clear(),P(uo)}function sh(t){Oe.includes(t)||ih(t)}function ih(t){Oe.splice(Hm(Oe,e=>e.priority>t.priority),0,t)}function uo(t){let e=Ai;for(let n=0;n<Oe.length;n++){let r=Oe[n];us=r.priority,r.idle||(_a(r),r.advance(t),r.idle||e.push(r))}return us=0,Ai=Oe,Ai.length=0,Oe=e,Oe.length>0}function Hm(t,e){let n=t.findIndex(e);return n<0?t.length:n}var Gm=(t,e,n)=>Math.min(Math.max(n,t),e),qm={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Le="[-+]?\\d*\\.?\\d+",hs=Le+"%";function Bs(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var zm=new RegExp("rgb"+Bs(Le,Le,Le)),Km=new RegExp("rgba"+Bs(Le,Le,Le,Le)),Wm=new RegExp("hsl"+Bs(Le,hs,hs)),Qm=new RegExp("hsla"+Bs(Le,hs,hs,Le)),Ym=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Xm=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Jm=/^#([0-9a-fA-F]{6})$/,Zm=/^#([0-9a-fA-F]{8})$/;function eg(t){let e;return typeof t=="number"?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=Jm.exec(t))?parseInt(e[1]+"ff",16)>>>0:pt&&pt[t]!==void 0?pt[t]:(e=zm.exec(t))?(zt(e[1])<<24|zt(e[2])<<16|zt(e[3])<<8|255)>>>0:(e=Km.exec(t))?(zt(e[1])<<24|zt(e[2])<<16|zt(e[3])<<8|ql(e[4]))>>>0:(e=Ym.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=Zm.exec(t))?parseInt(e[1],16)>>>0:(e=Xm.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=Wm.exec(t))?(Hl(Gl(e[1]),Hr(e[2]),Hr(e[3]))|255)>>>0:(e=Qm.exec(t))?(Hl(Gl(e[1]),Hr(e[2]),Hr(e[3]))|ql(e[4]))>>>0:null}function Ti(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Hl(t,e,n){let r=n<.5?n*(1+e):n+e-n*e,s=2*n-r,i=Ti(s,r,t+1/3),o=Ti(s,r,t),a=Ti(s,r,t-1/3);return Math.round(i*255)<<24|Math.round(o*255)<<16|Math.round(a*255)<<8}function zt(t){let e=parseInt(t,10);return e<0?0:e>255?255:e}function Gl(t){return(parseFloat(t)%360+360)%360/360}function ql(t){let e=parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function Hr(t){let e=parseFloat(t);return e<0?0:e>100?1:e/100}function zl(t){let e=eg(t);if(e===null)return t;e=e||0;let n=(e&4278190080)>>>24,r=(e&16711680)>>>16,s=(e&65280)>>>8,i=(e&255)/255;return`rgba(${n}, ${r}, ${s}, ${i})`}var nr=(t,e,n)=>{if(b.fun(t))return t;if(b.arr(t))return nr({range:t,output:e,extrapolate:n});if(b.str(t.output[0]))return va(t);let r=t,s=r.output,i=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",a=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(c=>c);return c=>{let u=ng(c,i);return tg(c,i[u],i[u+1],s[u],s[u+1],l,o,a,r.map)}};function tg(t,e,n,r,s,i,o,a,l){let c=l?l(t):t;if(c<e){if(o==="identity")return c;o==="clamp"&&(c=e)}if(c>n){if(a==="identity")return c;a==="clamp"&&(c=n)}return r===s?r:e===n?t<=e?r:s:(e===-1/0?c=-c:n===1/0?c=c-e:c=(c-e)/(n-e),c=i(c),r===-1/0?c=-c:s===1/0?c=c+r:c=c*(s-r)+r,c)}function ng(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}var rg=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);let r=n*t,s=e==="end"?Math.floor(r):Math.ceil(r);return Gm(0,1,s/t)},ds=1.70158,Gr=ds*1.525,Kl=ds+1,Wl=2*Math.PI/3,Ql=2*Math.PI/4.5,qr=t=>t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,sg={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInExpo:t=>t===0?0:Math.pow(2,10*t-10),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>Kl*t*t*t-ds*t*t,easeOutBack:t=>1+Kl*Math.pow(t-1,3)+ds*Math.pow(t-1,2),easeInOutBack:t=>t<.5?Math.pow(2*t,2)*((Gr+1)*2*t-Gr)/2:(Math.pow(2*t-2,2)*((Gr+1)*(t*2-2)+Gr)+2)/2,easeInElastic:t=>t===0?0:t===1?1:-Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*Wl),easeOutElastic:t=>t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-.75)*Wl)+1,easeInOutElastic:t=>t===0?0:t===1?1:t<.5?-(Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*Ql))/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*Ql)/2+1,easeInBounce:t=>1-qr(1-t),easeOutBounce:qr,easeInOutBounce:t=>t<.5?(1-qr(1-2*t))/2:(1+qr(2*t-1))/2,steps:rg},cn=Symbol.for("FluidValue.get"),Mt=Symbol.for("FluidValue.observers"),ke=t=>!!(t&&t[cn]),Te=t=>t&&t[cn]?t[cn]():t,Yl=t=>t[Mt]||null;function ig(t,e){t.eventObserved?t.eventObserved(e):t(e)}function rr(t,e){let n=t[Mt];n&&n.forEach(r=>{ig(r,e)})}var iT,oT,Uu,oh=(Uu=class{constructor(e){I(this,iT);I(this,oT);if(!e&&!(e=this.get))throw Error("Unknown getter");og(this,e)}},iT=cn,oT=Mt,Uu),og=(t,e)=>ah(t,cn,e);function Tn(t,e){if(t[cn]){let n=t[Mt];n||ah(t,Mt,n=new Set),n.has(e)||(n.add(e),t.observerAdded&&t.observerAdded(n.size,e))}return e}function sr(t,e){let n=t[Mt];if(n&&n.has(e)){let r=n.size-1;r?n.delete(e):t[Mt]=null,t.observerRemoved&&t.observerRemoved(r,e)}}var ah=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),ns=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ag=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Xl=new RegExp(`(${ns.source})(%|[a-z]+)`,"i"),lg=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,$s=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,lh=t=>{let[e,n]=cg(t);if(!e||ya())return t;let r=window.getComputedStyle(document.documentElement).getPropertyValue(e);return r?r.trim():n&&n.startsWith("--")?window.getComputedStyle(document.documentElement).getPropertyValue(n)||t:n&&$s.test(n)?lh(n):n||t},cg=t=>{let e=$s.exec(t);if(!e)return[,];let[,n,r]=e;return[n,r]},Si,ug=(t,e,n,r,s)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${s})`,ch=t=>{Si||(Si=pt?new RegExp(`(${Object.keys(pt).join("|")})(?!\\w)`,"g"):/^\b$/);let e=t.output.map(s=>Te(s).replace($s,lh).replace(ag,zl).replace(Si,zl)),n=e.map(s=>s.match(ns).map(Number)),r=n[0].map((s,i)=>n.map(o=>{if(!(i in o))throw Error('The arity of each "output" value must be equal');return o[i]})).map(s=>nr({...t,output:s}));return s=>{var a;let i=!Xl.test(e[0])&&((a=e.find(l=>Xl.test(l)))==null?void 0:a.replace(ns,"")),o=0;return e[0].replace(ns,()=>`${r[o++](s)}${i||""}`).replace(lg,ug)}},ba="react-spring: ",uh=t=>{let e=t,n=!1;if(typeof e!="function")throw new TypeError(`${ba}once requires a function parameter`);return(...r)=>{n||(e(...r),n=!0)}},hg=uh(console.warn);function dg(){hg(`${ba}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var pg=uh(console.warn);function fg(){pg(`${ba}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function Hs(t){return b.str(t)&&(t[0]=="#"||/\d/.test(t)||!ya()&&$s.test(t)||t in(pt||{}))}var Ea=ya()?m.useEffect:m.useLayoutEffect,mg=()=>{let t=m.useRef(!1);return Ea(()=>(t.current=!0,()=>{t.current=!1}),[]),t};function hh(){let t=m.useState()[1],e=mg();return()=>{e.current&&t(Math.random())}}function gg(t,e){let[n]=m.useState(()=>({inputs:e,result:t()})),r=m.useRef(),s=r.current,i=s;return i?e&&i.inputs&&yg(e,i.inputs)||(i={inputs:e,result:t()}):i=n,m.useEffect(()=>{r.current=i,s==n&&(n.inputs=n.result=void 0)},[i]),i.result}function yg(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}var dh=t=>m.useEffect(t,vg),vg=[];function Jl(t){let e=m.useRef();return m.useEffect(()=>{e.current=t}),e.current}var ir=Symbol.for("Animated:node"),_g=t=>!!t&&t[ir]===t,He=t=>t&&t[ir],wa=(t,e)=>Vm(t,ir,e),Gs=t=>t&&t[ir]&&t[ir].getPayload(),ph=class{constructor(){I(this,"payload");wa(this,this)}getPayload(){return this.payload||[]}},Sr=class extends ph{constructor(n){super();I(this,"done",!0);I(this,"elapsedTime");I(this,"lastPosition");I(this,"lastVelocity");I(this,"v0");I(this,"durationProgress",0);this._value=n,b.num(this._value)&&(this.lastPosition=this._value)}static create(n){return new Sr(n)}getPayload(){return[this]}getValue(){return this._value}setValue(n,r){return b.num(n)&&(this.lastPosition=n,r&&(n=Math.round(n/r)*r,this.done&&(this.lastPosition=n))),this._value===n?!1:(this._value=n,!0)}reset(){let{done:n}=this;this.done=!1,b.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,n&&(this.lastVelocity=null),this.v0=null)}},or=class extends Sr{constructor(e){super(0);I(this,"_string",null);I(this,"_toString");this._toString=nr({output:[e,e]})}static create(e){return new or(e)}getValue(){return this._string??(this._string=this._toString(this._value))}setValue(e){if(b.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=nr({output:[this.getValue(),e]})),this._value=0,super.reset()}},ps={dependencies:null},qs=class extends ph{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){let e={};return We(this.source,(n,r)=>{_g(n)?e[r]=n.getValue(t):ke(n)?e[r]=Te(n):t||(e[r]=n)}),e}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&L(this.payload,t=>t.reset())}_makePayload(t){if(t){let e=new Set;return We(t,this._addToPayload,e),Array.from(e)}}_addToPayload(t){ps.dependencies&&ke(t)&&ps.dependencies.add(t);let e=Gs(t);e&&L(e,n=>this.add(n))}},fh=class extends qs{constructor(e){super(e)}static create(e){return new fh(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){let n=this.getPayload();return e.length==n.length?n.map((r,s)=>r.setValue(e[s])).some(Boolean):(super.setValue(e.map(bg)),!0)}};function bg(t){return(Hs(t)?or:Sr).create(t)}function ho(t){let e=He(t);return e?e.constructor:b.arr(t)?fh:Hs(t)?or:Sr}var Zl=(t,e)=>{let n=!b.fun(t)||t.prototype&&t.prototype.isReactComponent;return m.forwardRef((r,s)=>{let i=m.useRef(null),o=n&&m.useCallback(g=>{i.current=Ag(s,g)},[s]),[a,l]=wg(r,e),c=hh(),u=()=>{let g=i.current;n&&!g||(g?e.applyAnimatedValues(g,a.getValue(!0)):!1)===!1&&c()},d=new Eg(u,l),p=m.useRef();Ea(()=>(p.current=d,L(l,g=>Tn(g,d)),()=>{p.current&&(L(p.current.deps,g=>sr(g,p.current)),P.cancel(p.current.update))})),m.useEffect(u,[]),dh(()=>()=>{let g=p.current;L(g.deps,v=>sr(v,g))});let f=e.getComponentProps(a.getValue());return m.createElement(t,{...f,ref:o})})},Eg=class{constructor(e,n){this.update=e,this.deps=n}eventObserved(e){e.type=="change"&&P.write(this.update)}};function wg(t,e){let n=new Set;return ps.dependencies=n,t.style&&(t={...t,style:e.createAnimatedStyle(t.style)}),t=new qs(t),ps.dependencies=null,[t,n]}function Ag(t,e){return t&&(b.fun(t)?t(e):t.current=e),e}var ec=Symbol.for("AnimatedComponent"),Tg=(t,{applyAnimatedValues:e=()=>!1,createAnimatedStyle:n=s=>new qs(s),getComponentProps:r=s=>s}={})=>{let s={applyAnimatedValues:e,createAnimatedStyle:n,getComponentProps:r},i=o=>{let a=tc(o)||"Anonymous";return b.str(o)?o=i[o]||(i[o]=Zl(o,s)):o=o[ec]||(o[ec]=Zl(o,s)),o.displayName=`Animated(${a})`,o};return We(t,(o,a)=>{b.arr(t)&&(a=tc(o)),i[a]=i(o)}),{animated:i}},tc=t=>b.str(t)?t:t&&b.str(t.displayName)?t.displayName:b.fun(t)&&t.name||null;function It(t,...e){return b.fun(t)?t(...e):t}var Kn=(t,e)=>t===!0||!!(e&&t&&(b.fun(t)?t(e):xe(t).includes(e))),mh=(t,e)=>b.obj(t)?e&&t[e]:t,gh=(t,e)=>t.default===!0?t[e]:t.default?t.default[e]:void 0,Sg=t=>t,Aa=(t,e=Sg)=>{let n=Ig;t.default&&t.default!==!0&&(t=t.default,n=Object.keys(t));let r={};for(let s of n){let i=e(t[s],s);b.und(i)||(r[s]=i)}return r},Ig=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Cg={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function xg(t){let e={},n=0;if(We(t,(r,s)=>{Cg[s]||(e[s]=r,n++)}),n)return e}function yh(t){let e=xg(t);if(e){let n={to:e};return We(t,(r,s)=>s in e||(n[s]=r)),n}return{...t}}function ar(t){return t=Te(t),b.arr(t)?t.map(ar):Hs(t)?Fe.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function Rg(t){for(let e in t)return!0;return!1}function po(t){return b.fun(t)||b.arr(t)&&b.obj(t[0])}function Dg(t,e){var n;(n=t.ref)==null||n.delete(t),e==null||e.delete(t)}function Ng(t,e){var n;e&&t.ref!==e&&((n=t.ref)==null||n.delete(t),e.add(t),t.ref=e)}var kg={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},fo={...kg.default,mass:1,damping:1,easing:sg.linear,clamp:!1},Og=class{constructor(){I(this,"tension");I(this,"friction");I(this,"frequency");I(this,"damping");I(this,"mass");I(this,"velocity",0);I(this,"restVelocity");I(this,"precision");I(this,"progress");I(this,"duration");I(this,"easing");I(this,"clamp");I(this,"bounce");I(this,"decay");I(this,"round");Object.assign(this,fo)}};function Pg(t,e,n){n&&(n={...n},nc(n,e),e={...n,...e}),nc(t,e),Object.assign(t,e);for(let o in fo)t[o]==null&&(t[o]=fo[o]);let{frequency:r,damping:s}=t,{mass:i}=t;return b.und(r)||(r<.01&&(r=.01),s<0&&(s=0),t.tension=Math.pow(2*Math.PI/r,2)*i,t.friction=4*Math.PI*s*i/r),t}function nc(t,e){if(!b.und(e.decay))t.duration=void 0;else{let n=!b.und(e.tension)||!b.und(e.friction);(n||!b.und(e.frequency)||!b.und(e.damping)||!b.und(e.mass))&&(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0)}}var rc=[],Mg=class{constructor(){I(this,"changed",!1);I(this,"values",rc);I(this,"toValues",null);I(this,"fromValues",rc);I(this,"to");I(this,"from");I(this,"config",new Og);I(this,"immediate",!1)}};function vh(t,{key:e,props:n,defaultProps:r,state:s,actions:i}){return new Promise((o,a)=>{let l,c,u=Kn(n.cancel??(r==null?void 0:r.cancel),e);if(u)f();else{b.und(n.pause)||(s.paused=Kn(n.pause,e));let g=r==null?void 0:r.pause;g!==!0&&(g=s.paused||Kn(g,e)),l=It(n.delay||0,e),g?(s.resumeQueue.add(p),i.pause()):(i.resume(),p())}function d(){s.resumeQueue.add(p),s.timeouts.delete(c),c.cancel(),l=c.time-P.now()}function p(){l>0&&!Fe.skipAnimation?(s.delayed=!0,c=P.setTimeout(f,l),s.pauseQueue.add(d),s.timeouts.add(c)):f()}function f(){s.delayed&&(s.delayed=!1),s.pauseQueue.delete(d),s.timeouts.delete(c),t<=(s.cancelId||0)&&(u=!0);try{i.start({...n,callId:t,cancel:u},o)}catch(g){a(g)}}})}var Ta=(t,e)=>e.length==1?e[0]:e.some(n=>n.cancelled)?Zt(t.get()):e.every(n=>n.noop)?_h(t.get()):Me(t.get(),e.every(n=>n.finished)),_h=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),Me=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),Zt=t=>({value:t,cancelled:!0,finished:!1});function bh(t,e,n,r){let{callId:s,parentId:i,onRest:o}=e,{asyncTo:a,promise:l}=n;return!i&&t===a&&!e.reset?l:n.promise=(async()=>{n.asyncId=s,n.asyncTo=t;let c=Aa(e,(y,w)=>w==="onRest"?void 0:y),u,d,p=new Promise((y,w)=>(u=y,d=w)),f=y=>{let w=s<=(n.cancelId||0)&&Zt(r)||s!==n.asyncId&&Me(r,!1);if(w)throw y.result=w,d(y),y},g=(y,w)=>{let A=new sc,S=new ic;return(async()=>{if(Fe.skipAnimation)throw lr(n),S.result=Me(r,!1),d(S),S;f(A);let C=b.obj(y)?{...y}:{...w,to:y};C.parentId=s,We(c,(W,Ie)=>{b.und(C[Ie])&&(C[Ie]=W)});let H=await r.start(C);return f(A),n.paused&&await new Promise(W=>{n.resumeQueue.add(W)}),H})()},v;if(Fe.skipAnimation)return lr(n),Me(r,!1);try{let y;b.arr(t)?y=(async w=>{for(let A of w)await g(A)})(t):y=Promise.resolve(t(g,r.stop.bind(r))),await Promise.all([y.then(u),p]),v=Me(r.get(),!0,!1)}catch(y){if(y instanceof sc)v=y.result;else if(y instanceof ic)v=y.result;else throw y}finally{s==n.asyncId&&(n.asyncId=i,n.asyncTo=i?a:void 0,n.promise=i?l:void 0)}return b.fun(o)&&P.batchedUpdates(()=>{o(v,r,r.item)}),v})()}function lr(t,e){qn(t.timeouts,n=>n.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}var sc=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");I(this,"result")}},ic=class extends Error{constructor(){super("SkipAnimationSignal");I(this,"result")}},mo=t=>t instanceof Sa,Lg=1,Sa=class extends oh{constructor(){super(...arguments);I(this,"id",Lg++);I(this,"_priority",0)}get priority(){return this._priority}set priority(n){this._priority!=n&&(this._priority=n,this._onPriorityChange(n))}get(){let n=He(this);return n&&n.getValue()}to(...n){return Fe.to(this,n)}interpolate(...n){return dg(),Fe.to(this,n)}toJSON(){return this.get()}observerAdded(n){n==1&&this._attach()}observerRemoved(n){n==0&&this._detach()}_attach(){}_detach(){}_onChange(n,r=!1){rr(this,{type:"change",parent:this,value:n,idle:r})}_onPriorityChange(n){this.idle||Vs.sort(this),rr(this,{type:"priority",parent:this,priority:n})}},Lt=Symbol.for("SpringPhase"),Eh=1,go=2,yo=4,Ii=t=>(t[Lt]&Eh)>0,ot=t=>(t[Lt]&go)>0,kn=t=>(t[Lt]&yo)>0,oc=(t,e)=>e?t[Lt]|=go|Eh:t[Lt]&=~go,ac=(t,e)=>e?t[Lt]|=yo:t[Lt]&=~yo,jg=class extends Sa{constructor(e,n){super();I(this,"key");I(this,"animation",new Mg);I(this,"queue");I(this,"defaultProps",{});I(this,"_state",{paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});I(this,"_pendingCalls",new Set);I(this,"_lastCallId",0);I(this,"_lastToId",0);I(this,"_memoizedDuration",0);if(!b.und(e)||!b.und(n)){let r=b.obj(e)?{...e}:{...n,from:e};b.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(ot(this)||this._state.asyncTo)||kn(this)}get goal(){return Te(this.animation.to)}get velocity(){let e=He(this);return e instanceof Sr?e.lastVelocity||0:e.getPayload().map(n=>n.lastVelocity||0)}get hasAnimated(){return Ii(this)}get isAnimating(){return ot(this)}get isPaused(){return kn(this)}get isDelayed(){return this._state.delayed}advance(e){let n=!0,r=!1,s=this.animation,{toValues:i}=s,{config:o}=s,a=Gs(s.to);!a&&ke(s.to)&&(i=xe(Te(s.to))),s.values.forEach((u,d)=>{if(u.done)return;let p=u.constructor==or?1:a?a[d].lastPosition:i[d],f=s.immediate,g=p;if(!f){if(g=u.lastPosition,o.tension<=0){u.done=!0;return}let v=u.elapsedTime+=e,y=s.fromValues[d],w=u.v0!=null?u.v0:u.v0=b.arr(o.velocity)?o.velocity[d]:o.velocity,A,S=o.precision||(y==p?.005:Math.min(1,Math.abs(p-y)*.001));if(b.und(o.duration))if(o.decay){let C=o.decay===!0?.998:o.decay,H=Math.exp(-(1-C)*v);g=y+w/(1-C)*(1-H),f=Math.abs(u.lastPosition-g)<=S,A=w*H}else{A=u.lastVelocity==null?w:u.lastVelocity;let C=o.restVelocity||S/10,H=o.clamp?0:o.bounce,W=!b.und(H),Ie=y==p?u.v0>0:y<p,le,Ye=!1,ce=1,Be=Math.ceil(e/ce);for(let ue=0;ue<Be&&(le=Math.abs(A)>C,!(!le&&(f=Math.abs(p-g)<=S,f)));++ue){W&&(Ye=g==p||g>p==Ie,Ye&&(A=-A*H,g=p));let Ne=-o.tension*1e-6*(g-p),Ce=-o.friction*.001*A,qt=(Ne+Ce)/o.mass;A=A+qt*ce,g=g+A*ce}}else{let C=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,u.durationProgress>0&&(u.elapsedTime=o.duration*u.durationProgress,v=u.elapsedTime+=e)),C=(o.progress||0)+v/this._memoizedDuration,C=C>1?1:C<0?0:C,u.durationProgress=C),g=y+o.easing(C)*(p-y),A=(g-u.lastPosition)/e,f=C==1}u.lastVelocity=A,Number.isNaN(g)&&(console.warn("Got NaN while animating:",this),f=!0)}a&&!a[d].done&&(f=!1),f?u.done=!0:n=!1,u.setValue(g,o.round)&&(r=!0)});let l=He(this),c=l.getValue();if(n){let u=Te(s.to);(c!==u||r)&&!o.decay?(l.setValue(u),this._onChange(u)):r&&o.decay&&this._onChange(c),this._stop()}else r&&this._onChange(c)}set(e){return P.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ot(this)){let{to:e,config:n}=this.animation;P.batchedUpdates(()=>{this._onStart(),n.decay||this._set(e,!1),this._stop()})}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,n){let r;return b.und(e)?(r=this.queue||[],this.queue=[]):r=[b.obj(e)?e:{...n,to:e}],Promise.all(r.map(s=>this._update(s))).then(s=>Ta(this,s))}stop(e){let{to:n}=this.animation;return this._focus(this.get()),lr(this._state,e&&this._lastCallId),P.batchedUpdates(()=>this._stop(n,e)),this}reset(){this._update({reset:!0})}eventObserved(e){e.type=="change"?this._start():e.type=="priority"&&(this.priority=e.priority+1)}_prepareNode(e){let n=this.key||"",{to:r,from:s}=e;r=b.obj(r)?r[n]:r,(r==null||po(r))&&(r=void 0),s=b.obj(s)?s[n]:s,s==null&&(s=void 0);let i={to:r,from:s};return Ii(this)||(e.reverse&&([r,s]=[s,r]),s=Te(s),b.und(s)?He(this)||this._set(r):this._set(s)),i}_update({...e},n){let{key:r,defaultProps:s}=this;e.default&&Object.assign(s,Aa(e,(a,l)=>/^on/.test(l)?mh(a,r):a)),cc(this,e,"onProps"),Pn(this,"onProps",e,this);let i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let o=this._state;return vh(++this._lastCallId,{key:r,props:e,defaultProps:s,state:o,actions:{pause:()=>{kn(this)||(ac(this,!0),Vn(o.pauseQueue),Pn(this,"onPause",Me(this,On(this,this.animation.to)),this))},resume:()=>{kn(this)&&(ac(this,!1),ot(this)&&this._resume(),Vn(o.resumeQueue),Pn(this,"onResume",Me(this,On(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then(a=>{if(e.loop&&a.finished&&!(n&&a.noop)){let l=wh(e);if(l)return this._update(l,!0)}return a})}_merge(e,n,r){if(n.cancel)return this.stop(!0),r(Zt(this));let s=!b.und(e.to),i=!b.und(e.from);if(s||i)if(n.callId>this._lastToId)this._lastToId=n.callId;else return r(Zt(this));let{key:o,defaultProps:a,animation:l}=this,{to:c,from:u}=l,{to:d=c,from:p=u}=e;i&&!s&&(!n.default||b.und(d))&&(d=p),n.reverse&&([d,p]=[p,d]);let f=!Je(p,u);f&&(l.from=p),p=Te(p);let g=!Je(d,c);g&&this._focus(d);let v=po(n.to),{config:y}=l,{decay:w,velocity:A}=y;(s||i)&&(y.velocity=0),n.config&&!v&&Pg(y,It(n.config,o),n.config!==a.config?It(a.config,o):void 0);let S=He(this);if(!S||b.und(d))return r(Me(this,!0));let C=b.und(n.reset)?i&&!n.default:!b.und(p)&&Kn(n.reset,o),H=C?p:this.get(),W=ar(d),Ie=b.num(W)||b.arr(W)||Hs(W),le=!v&&(!Ie||Kn(a.immediate||n.immediate,o));if(g){let ue=ho(d);if(ue!==S.constructor)if(le)S=this._set(W);else throw Error(`Cannot animate between ${S.constructor.name} and ${ue.name}, as the "to" prop suggests`)}let Ye=S.constructor,ce=ke(d),Be=!1;if(!ce){let ue=C||!Ii(this)&&f;(g||ue)&&(Be=Je(ar(H),W),ce=!Be),(!Je(l.immediate,le)&&!le||!Je(y.decay,w)||!Je(y.velocity,A))&&(ce=!0)}if(Be&&ot(this)&&(l.changed&&!C?ce=!0:ce||this._stop(c)),!v&&((ce||ke(c))&&(l.values=S.getPayload(),l.toValues=ke(d)?null:Ye==or?[1]:xe(W)),l.immediate!=le&&(l.immediate=le,!le&&!C&&this._set(c)),ce)){let{onRest:ue}=l;L(Ug,Ce=>cc(this,n,Ce));let Ne=Me(this,On(this,c));Vn(this._pendingCalls,Ne),this._pendingCalls.add(r),l.changed&&P.batchedUpdates(()=>{var Ce;l.changed=!C,ue==null||ue(Ne,this),C?It(a.onRest,Ne):(Ce=l.onStart)==null||Ce.call(l,Ne,this)})}C&&this._set(H),v?r(bh(n.to,n,this._state,this)):ce?this._start():ot(this)&&!g?this._pendingCalls.add(r):r(_h(H))}_focus(e){let n=this.animation;e!==n.to&&(Yl(this)&&this._detach(),n.to=e,Yl(this)&&this._attach())}_attach(){let e=0,{to:n}=this.animation;ke(n)&&(Tn(n,this),mo(n)&&(e=n.priority+1)),this.priority=e}_detach(){let{to:e}=this.animation;ke(e)&&sr(e,this)}_set(e,n=!0){let r=Te(e);if(!b.und(r)){let s=He(this);if(!s||!Je(r,s.getValue())){let i=ho(r);!s||s.constructor!=i?wa(this,i.create(r)):s.setValue(r),s&&P.batchedUpdates(()=>{this._onChange(r,n)})}}return He(this)}_onStart(){let e=this.animation;e.changed||(e.changed=!0,Pn(this,"onStart",Me(this,On(this,e.to)),this))}_onChange(e,n){n||(this._onStart(),It(this.animation.onChange,e,this)),It(this.defaultProps.onChange,e,this),super._onChange(e,n)}_start(){let e=this.animation;He(this).reset(Te(e.to)),e.immediate||(e.fromValues=e.values.map(n=>n.lastPosition)),ot(this)||(oc(this,!0),kn(this)||this._resume())}_resume(){Fe.skipAnimation?this.finish():Vs.start(this)}_stop(e,n){if(ot(this)){oc(this,!1);let r=this.animation;L(r.values,i=>{i.done=!0}),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),rr(this,{type:"idle",parent:this});let s=n?Zt(this.get()):Me(this.get(),On(this,e??r.to));Vn(this._pendingCalls,s),r.changed&&(r.changed=!1,Pn(this,"onRest",s,this))}}};function On(t,e){let n=ar(e),r=ar(t.get());return Je(r,n)}function wh(t,e=t.loop,n=t.to){let r=It(e);if(r){let s=r!==!0&&yh(r),i=(s||t).reverse,o=!s||s.reset;return cr({...t,loop:e,default:!1,pause:void 0,to:!i||po(n)?n:void 0,from:o?t.from:void 0,reset:o,...s})}}function cr(t){let{to:e,from:n}=t=yh(t),r=new Set;return b.obj(e)&&lc(e,r),b.obj(n)&&lc(n,r),t.keys=r.size?Array.from(r):null,t}function Fg(t){let e=cr(t);return b.und(e.default)&&(e.default=Aa(e)),e}function lc(t,e){We(t,(n,r)=>n!=null&&e.add(r))}var Ug=["onStart","onRest","onChange","onPause","onResume"];function cc(t,e,n){t.animation[n]=e[n]!==gh(e,n)?mh(e[n],t.key):void 0}function Pn(t,e,...n){var r,s,i,o;(s=(r=t.animation)[e])==null||s.call(r,...n),(o=(i=t.defaultProps)[e])==null||o.call(i,...n)}var Vg=["onStart","onChange","onRest"],Bg=1,$g=class{constructor(t,e){I(this,"id",Bg++);I(this,"springs",{});I(this,"queue",[]);I(this,"ref");I(this,"_flush");I(this,"_initialProps");I(this,"_lastAsyncId",0);I(this,"_active",new Set);I(this,"_changed",new Set);I(this,"_started",!1);I(this,"_item");I(this,"_state",{paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});I(this,"_events",{onStart:new Map,onChange:new Map,onRest:new Map});this._onFrame=this._onFrame.bind(this),e&&(this._flush=e),t&&this.start({default:!0,...t})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(t=>t.idle&&!t.isDelayed&&!t.isPaused)}get item(){return this._item}set item(t){this._item=t}get(){let t={};return this.each((e,n)=>t[n]=e.get()),t}set(t){for(let e in t){let n=t[e];b.und(n)||this.springs[e].set(n)}}update(t){return t&&this.queue.push(cr(t)),this}start(t){let{queue:e}=this;return t?e=xe(t).map(cr):this.queue=[],this._flush?this._flush(this,e):(Ch(this,e),vo(this,e))}stop(t,e){if(t!==!!t&&(e=t),e){let n=this.springs;L(xe(e),r=>n[r].stop(!!t))}else lr(this._state,this._lastAsyncId),this.each(n=>n.stop(!!t));return this}pause(t){if(b.und(t))this.start({pause:!0});else{let e=this.springs;L(xe(t),n=>e[n].pause())}return this}resume(t){if(b.und(t))this.start({pause:!1});else{let e=this.springs;L(xe(t),n=>e[n].resume())}return this}each(t){We(this.springs,t)}_onFrame(){let{onStart:t,onChange:e,onRest:n}=this._events,r=this._active.size>0,s=this._changed.size>0;(r&&!this._started||s&&!this._started)&&(this._started=!0,qn(t,([a,l])=>{l.value=this.get(),a(l,this,this._item)}));let i=!r&&this._started,o=s||i&&n.size?this.get():null;s&&e.size&&qn(e,([a,l])=>{l.value=o,a(l,this,this._item)}),i&&(this._started=!1,qn(n,([a,l])=>{l.value=o,a(l,this,this._item)}))}eventObserved(t){if(t.type=="change")this._changed.add(t.parent),t.idle||this._active.add(t.parent);else if(t.type=="idle")this._active.delete(t.parent);else return;P.onFrame(this._onFrame)}};function vo(t,e){return Promise.all(e.map(n=>Ah(t,n))).then(n=>Ta(t,n))}async function Ah(t,e,n){let{keys:r,to:s,from:i,loop:o,onRest:a,onResolve:l}=e,c=b.obj(e.default)&&e.default;o&&(e.loop=!1),s===!1&&(e.to=null),i===!1&&(e.from=null);let u=b.arr(s)||b.fun(s)?s:void 0;u?(e.to=void 0,e.onRest=void 0,c&&(c.onRest=void 0)):L(Vg,v=>{let y=e[v];if(b.fun(y)){let w=t._events[v];e[v]=({finished:A,cancelled:S})=>{let C=w.get(y);C?(A||(C.finished=!1),S&&(C.cancelled=!0)):w.set(y,{value:null,finished:A||!1,cancelled:S||!1})},c&&(c[v]=e[v])}});let d=t._state;e.pause===!d.paused?(d.paused=e.pause,Vn(e.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(e.pause=!0);let p=(r||Object.keys(t.springs)).map(v=>t.springs[v].start(e)),f=e.cancel===!0||gh(e,"cancel")===!0;(u||f&&d.asyncId)&&p.push(vh(++t._lastAsyncId,{props:e,state:d,actions:{pause:co,resume:co,start(v,y){f?(lr(d,t._lastAsyncId),y(Zt(t))):(v.onRest=a,y(bh(u,v,d,t)))}}})),d.paused&&await new Promise(v=>{d.resumeQueue.add(v)});let g=Ta(t,await Promise.all(p));if(o&&g.finished&&!(n&&g.noop)){let v=wh(e,o,s);if(v)return Ch(t,[v]),Ah(t,v,!0)}return l&&P.batchedUpdates(()=>l(g,t,t.item)),g}function uc(t,e){let n={...t.springs};return e&&L(xe(e),r=>{b.und(r.keys)&&(r=cr(r)),b.obj(r.to)||(r={...r,to:void 0}),Ih(n,r,s=>Sh(s))}),Th(t,n),n}function Th(t,e){We(e,(n,r)=>{t.springs[r]||(t.springs[r]=n,Tn(n,t))})}function Sh(t,e){let n=new jg;return n.key=t,e&&Tn(n,e),n}function Ih(t,e,n){e.keys&&L(e.keys,r=>{(t[r]||(t[r]=n(r)))._prepareNode(e)})}function Ch(t,e){L(e,n=>{Ih(t.springs,n,r=>Sh(r,t))})}var zs=({children:t,...e})=>{let n=m.useContext(fs),r=e.pause||!!n.pause,s=e.immediate||!!n.immediate;e=gg(()=>({pause:r,immediate:s}),[r,s]);let{Provider:i}=fs;return m.createElement(i,{value:e},t)},fs=Hg(zs,{});zs.Provider=fs.Provider;zs.Consumer=fs.Consumer;function Hg(t,e){return Object.assign(t,m.createContext(e)),t.Provider._context=t,t.Consumer._context=t,t}var Gg=()=>{let t=[],e=function(r){fg();let s=[];return L(t,(i,o)=>{if(b.und(r))s.push(i.start());else{let a=n(r,i,o);a&&s.push(i.start(a))}}),s};e.current=t,e.add=function(r){t.includes(r)||t.push(r)},e.delete=function(r){let s=t.indexOf(r);~s&&t.splice(s,1)},e.pause=function(){return L(t,r=>r.pause(...arguments)),this},e.resume=function(){return L(t,r=>r.resume(...arguments)),this},e.set=function(r){L(t,(s,i)=>{let o=b.fun(r)?r(i,s):r;o&&s.set(o)})},e.start=function(r){let s=[];return L(t,(i,o)=>{if(b.und(r))s.push(i.start());else{let a=this._getProps(r,i,o);a&&s.push(i.start(a))}}),s},e.stop=function(){return L(t,r=>r.stop(...arguments)),this},e.update=function(r){return L(t,(s,i)=>s.update(this._getProps(r,s,i))),this};let n=function(r,s,i){return b.fun(r)?r(i,s):r};return e._getProps=n,e};function qg(t,e,n){let r=b.fun(e)&&e;r&&!n&&(n=[]);let s=m.useMemo(()=>r||arguments.length==3?Gg():void 0,[]),i=m.useRef(0),o=hh(),a=m.useMemo(()=>({ctrls:[],queue:[],flush(w,A){let S=uc(w,A);return i.current>0&&!a.queue.length&&!Object.keys(S).some(C=>!w.springs[C])?vo(w,A):new Promise(C=>{Th(w,S),a.queue.push(()=>{C(vo(w,A))}),o()})}}),[]),l=m.useRef([...a.ctrls]),c=[],u=Jl(t)||0;m.useMemo(()=>{L(l.current.slice(t,u),w=>{Dg(w,s),w.stop(!0)}),l.current.length=t,d(u,t)},[t]),m.useMemo(()=>{d(0,Math.min(u,t))},n);function d(w,A){for(let S=w;S<A;S++){let C=l.current[S]||(l.current[S]=new $g(null,a.flush)),H=r?r(S,C):e[S];H&&(c[S]=Fg(H))}}let p=l.current.map((w,A)=>uc(w,c[A])),f=m.useContext(zs),g=Jl(f),v=f!==g&&Rg(f);Ea(()=>{i.current++,a.ctrls=l.current;let{queue:w}=a;w.length&&(a.queue=[],L(w,A=>A())),L(l.current,(A,S)=>{s==null||s.add(A),v&&A.start({default:f});let C=c[S];C&&(Ng(A,C.ref),A.ref?A.queue.push(C):A.start(C))})}),dh(()=>()=>{L(a.ctrls,w=>w.stop(!0))});let y=p.map(w=>({...w}));return s?[y,s]:y}function Ci(t,e){let n=b.fun(t),[[r],s]=qg(1,n?t:[t],n?e||[]:e);return n||arguments.length==2?[r,s]:r}var zg=class extends Sa{constructor(n,r){super();I(this,"key");I(this,"idle",!0);I(this,"calc");I(this,"_active",new Set);this.source=n,this.calc=nr(...r);let s=this._get(),i=ho(s);wa(this,i.create(s))}advance(n){let r=this._get(),s=this.get();Je(r,s)||(He(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&hc(this._active)&&xi(this)}_get(){let n=b.arr(this.source)?this.source.map(Te):xe(Te(this.source));return this.calc(...n)}_start(){this.idle&&!hc(this._active)&&(this.idle=!1,L(Gs(this),n=>{n.done=!1}),Fe.skipAnimation?(P.batchedUpdates(()=>this.advance()),xi(this)):Vs.start(this))}_attach(){let n=1;L(xe(this.source),r=>{ke(r)&&Tn(r,this),mo(r)&&(r.idle||this._active.add(r),n=Math.max(n,r.priority+1))}),this.priority=n,this._start()}_detach(){L(xe(this.source),n=>{ke(n)&&sr(n,this)}),this._active.clear(),xi(this)}eventObserved(n){n.type=="change"?n.idle?this.advance():(this._active.add(n.parent),this._start()):n.type=="idle"?this._active.delete(n.parent):n.type=="priority"&&(this.priority=xe(this.source).reduce((r,s)=>Math.max(r,(mo(s)?s.priority:0)+1),0))}};function Kg(t){return t.idle!==!1}function hc(t){return!t.size||Array.from(t).every(Kg)}function xi(t){t.idle||(t.idle=!0,L(Gs(t),e=>{e.done=!0}),rr(t,{type:"idle",parent:t}))}Fe.assign({createStringInterpolator:ch,to:(t,e)=>new zg(t,e)});var xh=/^--/;function Wg(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!xh.test(t)&&!(Wn.hasOwnProperty(t)&&Wn[t])?e+"px":(""+e).trim()}var dc={};function Qg(t,e){if(!t.nodeType||!t.setAttribute)return!1;let n=t.nodeName==="filter"||t.parentNode&&t.parentNode.nodeName==="filter",{style:r,children:s,scrollTop:i,scrollLeft:o,viewBox:a,...l}=e,c=Object.values(l),u=Object.keys(l).map(d=>n||t.hasAttribute(d)?d:dc[d]||(dc[d]=d.replace(/([A-Z])/g,p=>"-"+p.toLowerCase())));s!==void 0&&(t.textContent=s);for(let d in r)if(r.hasOwnProperty(d)){let p=Wg(d,r[d]);xh.test(d)?t.style.setProperty(d,p):t.style[d]=p}u.forEach((d,p)=>{t.setAttribute(d,c[p])}),i!==void 0&&(t.scrollTop=i),o!==void 0&&(t.scrollLeft=o),a!==void 0&&t.setAttribute("viewBox",a)}var Wn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yg=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1),Xg=["Webkit","Ms","Moz","O"];Wn=Object.keys(Wn).reduce((t,e)=>(Xg.forEach(n=>t[Yg(n,e)]=t[e]),t),Wn);var Jg=/^(matrix|translate|scale|rotate|skew)/,Zg=/^(translate)/,ey=/^(rotate|skew)/,Ri=(t,e)=>b.num(t)&&t!==0?t+e:t,rs=(t,e)=>b.arr(t)?t.every(n=>rs(n,e)):b.num(t)?t===e:parseFloat(t)===e,ty=class extends qs{constructor({x:t,y:e,z:n,...r}){let s=[],i=[];(t||e||n)&&(s.push([t||0,e||0,n||0]),i.push(o=>[`translate3d(${o.map(a=>Ri(a,"px")).join(",")})`,rs(o,0)])),We(r,(o,a)=>{if(a==="transform")s.push([o||""]),i.push(l=>[l,l===""]);else if(Jg.test(a)){if(delete r[a],b.und(o))return;let l=Zg.test(a)?"px":ey.test(a)?"deg":"";s.push(xe(o)),i.push(a==="rotate3d"?([c,u,d,p])=>[`rotate3d(${c},${u},${d},${Ri(p,l)})`,rs(p,0)]:c=>[`${a}(${c.map(u=>Ri(u,l)).join(",")})`,rs(c,a.startsWith("scale")?1:0)])}}),s.length&&(r.transform=new ny(s,i)),super(r)}},ny=class extends oh{constructor(n,r){super();I(this,"_value",null);this.inputs=n,this.transforms=r}get(){return this._value||(this._value=this._get())}_get(){let n="",r=!0;return L(this.inputs,(s,i)=>{let o=Te(s[0]),[a,l]=this.transforms[i](b.arr(o)?o:s.map(Te));n+=" "+a,r=r&&l}),r?"none":n}observerAdded(n){n==1&&L(this.inputs,r=>L(r,s=>ke(s)&&Tn(s,this)))}observerRemoved(n){n==0&&L(this.inputs,r=>L(r,s=>ke(s)&&sr(s,this)))}eventObserved(n){n.type=="change"&&(this._value=null),rr(this,n)}},ry=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];Fe.assign({batchedUpdates:la.unstable_batchedUpdates,createStringInterpolator:ch,colors:qm});var sy=Tg(ry,{applyAnimatedValues:Qg,createAnimatedStyle:t=>new ty(t),getComponentProps:({scrollTop:t,scrollLeft:e,...n})=>n}),Di=sy.animated;const iy="/assets/group-working-2c2d324b.webp",oy="/assets/girl-smiling-bb136652.webp",ay="/assets/man-on-phone-08124045.webp",ly=()=>{const[t,e]=Ci(()=>({y:0})),[n,r]=Ci(()=>({y:0})),[s,i]=Ci(()=>({y:0})),o=()=>e({y:-10}),a=()=>e({y:0}),l=()=>r({y:-10}),c=()=>r({y:0}),u=()=>i({y:-10}),d=()=>i({y:0});return h.jsx("div",{children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col text-section",children:[h.jsx("h1",{className:"landing-page-headings",children:"Better hiring starts with Reel Talent"}),h.jsx("p",{className:"landing-page-pg",children:"Hiring good people is important for the success of any business. They bring new ideas, energy, and skill to the table, and help drive the company forward. At Reel Talent, we understand the importance of finding the right candidates for your organization, and we strive to make the hiring process as easy and effective as possible."})]}),h.jsx("div",{className:"col image-section",children:h.jsx(Di.img,{src:iy,alt:"First Image",className:"aspect-ratio-3-4",style:{transform:t.y.interpolate(p=>`translateY(${p}px)`)},onMouseEnter:o,onMouseLeave:a})})]}),h.jsxs("div",{className:"row",children:[h.jsx("div",{className:"col image-section image__girl",children:h.jsx(Di.img,{loading:"lazy",src:oy,alt:"Second Image",className:"aspect-ratio-3-4",style:{transform:n.y.interpolate(p=>`translateY(${p}px)`)},onMouseEnter:l,onMouseLeave:c})}),h.jsxs("div",{className:"col text-section",children:[h.jsx("h1",{className:"landing-page-headings",children:"The Benefits of Good Hiring Practices"}),h.jsx("p",{className:"landing-page-pg",children:"Another important aspect of hiring good people is that they help to create a positive and productive work environment. This in turn leads to higher employee satisfaction and retention, which is good for both the company and the employees."})]})]}),h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col text-section",children:[h.jsx("h1",{className:"landing-page-headings",children:"How Reel Talent Can Help You Hire the Right People"}),h.jsx("p",{className:"landing-page-pg",children:"At Reel Talent, we are dedicated to providing our clients with the best possible service and support. Whether you're a small startup or a large corporation, we have the resources and expertise to help you find the talent you need to achieve your goals."})]}),h.jsx("div",{className:"col image-section",children:h.jsx(Di.img,{loading:"lazy",src:ay,alt:"Second Image",className:"aspect-ratio-3-4",style:{transform:s.y.interpolate(p=>`translateY(${p}px)`)},onMouseEnter:u,onMouseLeave:d})})]})]})})},cy=()=>h.jsx("div",{children:h.jsx(ly,{})});/*! *****************************************************************************
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
***************************************************************************** */var _o=function(t,e){return _o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var s in r)r.hasOwnProperty(s)&&(n[s]=r[s])},_o(t,e)};function Ir(t,e){_o(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var ur=function(){return ur=Object.assign||function(e){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ur.apply(this,arguments)};function uy(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var hy=`/*
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
}`;uy(hy);function Ni(t){return t.charAt(0)==="#"?t.slice(1):t}function dy(t){return t!=null&&t.primaryColor&&(t.primaryColor=Ni(t.primaryColor)),t!=null&&t.textColor&&(t.textColor=Ni(t.textColor)),t!=null&&t.backgroundColor&&(t.backgroundColor=Ni(t.backgroundColor)),t}var pc;(function(t){t.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",t.EVENT_TYPE_VIEWED="calendly.event_type_viewed",t.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",t.EVENT_SCHEDULED="calendly.event_scheduled"})(pc||(pc={}));var Rh=function(t){var e=t.url,n=t.prefill,r=n===void 0?{}:n,s=t.pageSettings,i=s===void 0?{}:s,o=t.utm,a=o===void 0?{}:o,l=t.embedType,c=dy(i),u=c.backgroundColor,d=c.hideEventTypeDetails,p=c.hideLandingPageDetails,f=c.primaryColor,g=c.textColor,v=c.hideGdprBanner,y=r.customAnswers,w=r.date,A=r.email,S=r.firstName,C=r.guests,H=r.lastName,W=r.location,Ie=r.name,le=a.utmCampaign,Ye=a.utmContent,ce=a.utmMedium,Be=a.utmSource,ue=a.utmTerm,Ne=a.salesforce_uuid,Ce=e.indexOf("?"),qt=Ce>-1,Nn=e.slice(Ce+1),Pl=qt?e.slice(0,Ce):e,kf=[qt?Nn:null,u?"background_color="+u:null,d?"hide_event_type_details=1":null,p?"hide_landing_page_details=1":null,f?"primary_color="+f:null,g?"text_color="+g:null,v?"hide_gdpr_banner=1":null,Ie?"name="+encodeURIComponent(Ie):null,W?"location="+encodeURIComponent(W):null,S?"first_name="+encodeURIComponent(S):null,H?"last_name="+encodeURIComponent(H):null,C?"guests="+C.map(encodeURIComponent).join(","):null,A?"email="+encodeURIComponent(A):null,w&&w instanceof Date?"date="+py(w):null,le?"utm_campaign="+encodeURIComponent(le):null,Ye?"utm_content="+encodeURIComponent(Ye):null,ce?"utm_medium="+encodeURIComponent(ce):null,Be?"utm_source="+encodeURIComponent(Be):null,ue?"utm_term="+encodeURIComponent(ue):null,Ne?"salesforce_uuid="+encodeURIComponent(Ne):null,l?"embed_type="+l:null,"embed_domain=1"].concat(y?my(y):[]).filter(function(Of){return Of!==null}).join("&");return Pl+"?"+kf},py=function(t){var e=t.getMonth()+1,n=t.getDate(),r=t.getFullYear();return[r,e<10?"0"+e:e,n<10?"0"+n:n].join("-")},fy=/^a\d{1,2}$/,my=function(t){var e=Object.keys(t).filter(function(n){return n.match(fy)});return e.length?e.map(function(n){return n+"="+encodeURIComponent(t[n])}):[]},Dh=function(t){Ir(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.render=function(){return m.createElement("div",{className:"calendly-spinner"},m.createElement("div",{className:"calendly-bounce1"}),m.createElement("div",{className:"calendly-bounce2"}),m.createElement("div",{className:"calendly-bounce3"}))},e}(m.Component),gy={minWidth:"320px",height:"630px"},yy=function(t){Ir(e,t);function e(n){var r=t.call(this,n)||this;return r.state={isLoading:!0},r.onLoad=r.onLoad.bind(r),r}return e.prototype.onLoad=function(){this.setState({isLoading:!1})},e.prototype.render=function(){var n=Rh({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"});return m.createElement("div",{className:"calendly-inline-widget",style:this.props.styles||gy},this.state.isLoading&&m.createElement(Dh,null),m.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:n}))},e}(m.Component),vy=function(t){Ir(e,t);function e(n){var r=t.call(this,n)||this;return r.state={isLoading:!0},r.onLoad=r.onLoad.bind(r),r}return e.prototype.onLoad=function(){this.setState({isLoading:!1})},e.prototype.render=function(){var n=Rh({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"PopupWidget"});return m.createElement(m.Fragment,null,this.state.isLoading&&m.createElement(Dh,null),m.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:n}))},e}(m.Component),Nh=function(t){if(!t.open)return null;if(!t.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return la.createPortal(m.createElement("div",{className:"calendly-overlay"},m.createElement("div",{onClick:t.onModalClose,className:"calendly-close-overlay"}),m.createElement("div",{className:"calendly-popup"},m.createElement("div",{className:"calendly-popup-content"},m.createElement(vy,ur({},t)))),m.createElement("button",{className:"calendly-popup-close",onClick:t.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),t.rootElement)};(function(t){Ir(e,t);function e(n){var r=t.call(this,n)||this;return r.state={isOpen:!1},r.onClick=r.onClick.bind(r),r.onClose=r.onClose.bind(r),r}return e.prototype.onClick=function(n){n.preventDefault(),this.setState({isOpen:!0})},e.prototype.onClose=function(n){n.stopPropagation(),this.setState({isOpen:!1})},e.prototype.render=function(){return m.createElement(m.Fragment,null,m.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),m.createElement(Nh,ur({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},e})(m.Component);(function(t){Ir(e,t);function e(n){var r=t.call(this,n)||this;return r.state={isOpen:!1},r.onClick=r.onClick.bind(r),r.onClose=r.onClose.bind(r),r}return e.prototype.onClick=function(){this.setState({isOpen:!0})},e.prototype.onClose=function(n){n.stopPropagation(),this.setState({isOpen:!1})},e.prototype.render=function(){return m.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},m.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&m.createElement("span",null,"powered by Calendly")),m.createElement(Nh,ur({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},e})(m.Component);const _y=()=>h.jsxs("div",{className:"calendly__main",children:[h.jsxs("div",{className:"calendly__title",children:[h.jsx("h2",{className:"calendly__heading",children:"Book a Demo with Reel Talent"}),h.jsx("p",{className:"calendly__pg",children:"Experience the power of Reel Talent in simplifying your recruitment process. Schedule a free, live 1:1 tour with us to see how we can elevate your workforce. Let us know your recruitment challenges and we'll show you how Reel Talent can supercharge your hiring."})]}),h.jsx(yy,{pageSettings:{backgroundColor:"fff",hideEventTypeDetails:!1,hideLandingPageDetails:!1,primaryColor:"00a2ff",textColor:"4d5055"},url:"https://calendly.com/reeltalent-247/30min"})]});const hr={_origin:"https://api.emailjs.com"},by=(t,e="https://api.emailjs.com")=>{hr._userID=t,hr._origin=e},kh=(t,e,n)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class fc{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const Oh=(t,e,n={})=>new Promise((r,s)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:o})=>{const a=new fc(o);a.status===200||a.text==="OK"?r(a):s(a)}),i.addEventListener("error",({target:o})=>{s(new fc(o))}),i.open("POST",hr._origin+t,!0),Object.keys(n).forEach(o=>{i.setRequestHeader(o,n[o])}),i.send(e)}),Ey=(t,e,n,r)=>{const s=r||hr._userID;return kh(s,t,e),Oh("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},wy=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},Ay=(t,e,n,r)=>{const s=r||hr._userID,i=wy(n);kh(s,t,e);const o=new FormData(i);return o.append("lib_version","3.11.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",s),Oh("/api/v1.0/email/send-form",o)},Ty={init:by,send:Ey,sendForm:Ay};var Ph={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},mc=Y.createContext&&Y.createContext(Ph),ft=globalThis&&globalThis.__assign||function(){return ft=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},ft.apply(this,arguments)},Sy=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n};function Mh(t){return t&&t.map(function(e,n){return Y.createElement(e.tag,ft({key:n},e.attr),Mh(e.child))})}function Cr(t){return function(e){return Y.createElement(Iy,ft({attr:ft({},t.attr)},e),Mh(t.child))}}function Iy(t){var e=function(n){var r=t.attr,s=t.size,i=t.title,o=Sy(t,["attr","size","title"]),a=s||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Y.createElement("svg",ft({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:ft(ft({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&Y.createElement("title",null,i),t.children)};return mc!==void 0?Y.createElement(mc.Consumer,null,function(n){return e(n)}):e(Ph)}function Cy(t){return Cr({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}}]})(t)}function xy(t){return Cr({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}}]})(t)}const Ry="/assets/dog-waiting-2701046f.jpg",Dy=()=>{const t=m.useRef(),[e,n]=m.useState(!1),r=s=>{s.preventDefault(),Ty.sendForm("service_i6ytsvs","template_ra8vv2k",t.current,"vvgAiHNMFcWHykmQ2").then(i=>{console.log(i.text),n(!0)},i=>{console.log(i.text),n(!0)})};return e?h.jsxs("div",{className:"thank-you",children:[h.jsx("img",{src:Ry,className:"thank-you-img",alt:"dog looking at a computer screen"}),h.jsx("h1",{className:"thank-you-header",children:"Thank you for reaching out!"}),h.jsxs("p",{children:["We will get back to you soon. In the meantime, check out our"," ",h.jsx(X,{className:"thank-you-blog",to:"/blog",children:"blog"}),"."]})]}):h.jsxs("form",{ref:t,onSubmit:r,children:[h.jsxs("div",{className:"form-section",children:[h.jsxs("div",{className:"form-row",children:[h.jsx("label",{children:"Name"}),h.jsx("input",{type:"text",name:"user_name"})]}),h.jsxs("div",{className:"form-row",children:[h.jsx("label",{children:"Work email address"}),h.jsx("input",{type:"email",name:"user_email"})]})]}),h.jsxs("div",{className:"form-section",children:[h.jsxs("div",{className:"form-row",children:[h.jsx("label",{children:"Company name"}),h.jsx("input",{type:"text",name:"company_name"})]}),h.jsxs("div",{className:"form-row",children:[h.jsx("label",{children:"Company size"}),h.jsxs("select",{name:"company_size",children:[h.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select size"}),h.jsx("option",{value:"1-10",children:"1-10"}),h.jsx("option",{value:"11-50",children:"11-50"}),h.jsx("option",{value:"51-100",children:"51-100"}),h.jsx("option",{value:"100+",children:"100+"})]})]})]}),h.jsxs("div",{className:"form-text-container",children:[h.jsx("label",{children:"Message"}),h.jsx("textarea",{className:"form-textarea",name:"message"})]}),h.jsx("input",{className:"contact-btn",type:"submit",value:"Send"})]})},Ny=()=>h.jsxs("div",{children:[h.jsxs("main",{className:"demo__main",children:[h.jsxs("div",{className:"demo__container",children:[h.jsx("h2",{className:"demo__title",children:"See how Reel Talent can improve your hiring"}),h.jsx("p",{className:"demo__pg",children:"From recruiting candidates to onboarding new team members, Reel Talent gives your company everything you need to be great at hiring."}),h.jsx("h4",{className:"demo__booking",children:"Book a session with us to:"}),h.jsxs("ul",{className:"demo__list",children:[h.jsx("li",{className:"",children:"Get an overview of the Reel Talent platform"}),h.jsx("li",{className:"",children:"Discuss your goals with a product expert"}),h.jsx("li",{className:"",children:"Receieve pricing details based on your needs"})]}),h.jsxs("p",{className:"demo__pg",children:[" ","Once you complete the request form, a Reel Talent team member will reach out within 24 business hours."]})]}),h.jsxs("div",{className:"calendly__container",children:[" ",h.jsx(_y,{})]})]}),h.jsx("section",{className:"contact__main",children:h.jsxs("div",{className:"contact__container",children:[" ",h.jsx("h2",{className:"contact__heading",children:"Find Your Perfect Fit, Connect with Us Today 👋"})]})}),h.jsx(Dy,{})]});const Ks=()=>(Fs(),h.jsx("div",{children:h.jsxs("div",{className:"error-container",children:[h.jsx("h1",{className:"error__heading",children:"Oops! Something went wrong."}),h.jsx("p",{className:"error__pg",children:"The page you are looking for cannot be found or is unavailable."}),h.jsx(X,{to:"/",children:h.jsx("button",{className:"btn1",children:"Return Home"})})]})}));const ky="/assets/loading-bar-c873dc4b.svg",Lh=()=>h.jsx(h.Fragment,{children:h.jsx("div",{className:"loading__screen",children:h.jsx("img",{src:ky,className:"loading__img",alt:"loading data"})})});/**
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
 */const jh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Oy=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Fh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(p=64)),r.push(n[u],n[d],n[p],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Oy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||d==null)throw new Py;const p=i<<2|a>>4;if(r.push(p),c!==64){const f=a<<4&240|c>>2;if(r.push(f),d!==64){const g=c<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Py extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const My=function(t){const e=jh(t);return Fh.encodeByteArray(e,!0)},ms=function(t){return My(t).replace(/\./g,"")},Ly=function(t){try{return Fh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fy=()=>jy().__FIREBASE_DEFAULTS__,Uy=()=>{if(typeof process>"u"||typeof{MANPATH:"/opt/homebrew/share/man::",TERM_PROGRAM:"vscode",NODE:"/usr/local/bin/node",INIT_CWD:"/Users/bobby./Desktop/reel-talent",TERM:"xterm-256color",SHELL:"/bin/zsh",npm_config_metrics_registry:"https://registry.npmjs.org/",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/y1/v3c69tkn579_mmhrg349bx440000gn/T/",npm_config_global_prefix:"/usr/local",TERM_PROGRAM_VERSION:"1.77.3",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/bobby./Desktop/reel-talent",USER:"bobby.",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/usr/local/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.g1L65Vwl7v/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_execpath:"/usr/local/lib/node_modules/npm/bin/npm-cli.js",PATH:"/Users/bobby./Desktop/reel-talent/node_modules/.bin:/Users/bobby./Desktop/node_modules/.bin:/Users/bobby./node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin",npm_package_json:"/Users/bobby./Desktop/reel-talent/package.json",_:"/Users/bobby./Desktop/reel-talent/node_modules/.bin/vite",npm_config_userconfig:"/Users/bobby./.npmrc",npm_config_init_module:"/Users/bobby./.npm-init.js",__CFBundleIdentifier:"com.microsoft.VSCode",npm_command:"run-script",PWD:"/Users/bobby./Desktop/reel-talent",npm_lifecycle_event:"build",EDITOR:"vi",npm_package_name:"reel-talent",LANG:"en_US.UTF-8",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",XPC_FLAGS:"0x0",npm_config_node_gyp:"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"1.0.0",XPC_SERVICE_NAME:"application.com.microsoft.VSCode.45844650.45844656",SHLVL:"1",HOME:"/Users/bobby.",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/bobby./.npm",LOGNAME:"bobby.",npm_lifecycle_script:"vite build",VSCODE_GIT_IPC_HANDLE:"/var/folders/y1/v3c69tkn579_mmhrg349bx440000gn/T/vscode-git-d5d8c343f6.sock",npm_config_user_agent:"npm/9.6.4 node/v20.0.0 darwin arm64 workspaces/false",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",npm_node_execpath:"/usr/local/bin/node",npm_config_prefix:"/usr/local",COLORTERM:"truecolor",NODE_ENV:"production",VITE_FIREBASE_API_KEY:"AIzaSyDnXUnucMzBtgYnSPBKUv4S2acxyCi8Tkk",VITE_FIREBASE_AUTH_DOMAIN:"reel-talent-5ef72.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"reel-talent-5ef72",VITE_FIREBASE_STORAGE_BUCKET:"reel-talent-5ef72.appspot.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"80043393311",VITE_FIREBASE_APP_ID:"1:80043393311:web:43f2be04b4bbe841a0702a",VITE_FIREBASE_MEASUREMENT_ID:"G-3RJ1S1E46Q"}>"u")return;const t={MANPATH:"/opt/homebrew/share/man::",TERM_PROGRAM:"vscode",NODE:"/usr/local/bin/node",INIT_CWD:"/Users/bobby./Desktop/reel-talent",TERM:"xterm-256color",SHELL:"/bin/zsh",npm_config_metrics_registry:"https://registry.npmjs.org/",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/y1/v3c69tkn579_mmhrg349bx440000gn/T/",npm_config_global_prefix:"/usr/local",TERM_PROGRAM_VERSION:"1.77.3",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/bobby./Desktop/reel-talent",USER:"bobby.",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/usr/local/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.g1L65Vwl7v/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_execpath:"/usr/local/lib/node_modules/npm/bin/npm-cli.js",PATH:"/Users/bobby./Desktop/reel-talent/node_modules/.bin:/Users/bobby./Desktop/node_modules/.bin:/Users/bobby./node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin",npm_package_json:"/Users/bobby./Desktop/reel-talent/package.json",_:"/Users/bobby./Desktop/reel-talent/node_modules/.bin/vite",npm_config_userconfig:"/Users/bobby./.npmrc",npm_config_init_module:"/Users/bobby./.npm-init.js",__CFBundleIdentifier:"com.microsoft.VSCode",npm_command:"run-script",PWD:"/Users/bobby./Desktop/reel-talent",npm_lifecycle_event:"build",EDITOR:"vi",npm_package_name:"reel-talent",LANG:"en_US.UTF-8",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",XPC_FLAGS:"0x0",npm_config_node_gyp:"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"1.0.0",XPC_SERVICE_NAME:"application.com.microsoft.VSCode.45844650.45844656",SHLVL:"1",HOME:"/Users/bobby.",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/bobby./.npm",LOGNAME:"bobby.",npm_lifecycle_script:"vite build",VSCODE_GIT_IPC_HANDLE:"/var/folders/y1/v3c69tkn579_mmhrg349bx440000gn/T/vscode-git-d5d8c343f6.sock",npm_config_user_agent:"npm/9.6.4 node/v20.0.0 darwin arm64 workspaces/false",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",npm_node_execpath:"/usr/local/bin/node",npm_config_prefix:"/usr/local",COLORTERM:"truecolor",NODE_ENV:"production",VITE_FIREBASE_API_KEY:"AIzaSyDnXUnucMzBtgYnSPBKUv4S2acxyCi8Tkk",VITE_FIREBASE_AUTH_DOMAIN:"reel-talent-5ef72.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"reel-talent-5ef72",VITE_FIREBASE_STORAGE_BUCKET:"reel-talent-5ef72.appspot.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"80043393311",VITE_FIREBASE_APP_ID:"1:80043393311:web:43f2be04b4bbe841a0702a",VITE_FIREBASE_MEASUREMENT_ID:"G-3RJ1S1E46Q"}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Vy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ly(t[1]);return e&&JSON.parse(e)},Uh=()=>{try{return Fy()||Uy()||Vy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},By=t=>{var e,n;return(n=(e=Uh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$y=t=>{const e=By(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Hy=()=>{var t;return(t=Uh())===null||t===void 0?void 0:t.config};/**
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
 */class Gy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function qy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ms(JSON.stringify(n)),ms(JSON.stringify(o)),a].join(".")}function zy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vh(){try{return typeof indexedDB=="object"}catch{return!1}}function Bh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Ky(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Wy="FirebaseError";class wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Wy,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ws.prototype.create)}}class Ws{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Qy(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wt(s,a,r)}}function Qy(t,e){return t.replace(Yy,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Yy=/\{\$([^}]+)}/g;function gs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(gc(i)&&gc(o)){if(!gs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gc(t){return t!==null&&typeof t=="object"}/**
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
 */const Xy=1e3,Jy=2,Zy=4*60*60*1e3,ev=.5;function yc(t,e=Xy,n=Jy){const r=e*Math.pow(n,t),s=Math.round(ev*r*(Math.random()-.5)*2);return Math.min(Zy,r+s)}/**
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
 */function un(t){return t&&t._delegate?t._delegate:t}class tt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const St="[DEFAULT]";/**
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
 */class tv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Gy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rv(e))try{this.getOrInitializeService({instanceIdentifier:St})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=St){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=St){return this.instances.has(e)}getOptions(e=St){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=St){return this.component?this.component.multipleInstances?e:St:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nv(t){return t===St?void 0:t}function rv(t){return t.instantiationMode==="EAGER"}/**
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
 */class sv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const iv={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},ov=V.INFO,av={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},lv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=av[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ia{constructor(e){this.name=e,this._logLevel=ov,this._logHandler=lv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const cv=(t,e)=>e.some(n=>t instanceof n);let vc,_c;function uv(){return vc||(vc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hv(){return _c||(_c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $h=new WeakMap,bo=new WeakMap,Hh=new WeakMap,ki=new WeakMap,Ca=new WeakMap;function dv(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(mt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$h.set(n,t)}).catch(()=>{}),Ca.set(e,t),e}function pv(t){if(bo.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bo.set(t,e)}let Eo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fv(t){Eo=t(Eo)}function mv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oi(this),e,...n);return Hh.set(r,e.sort?e.sort():[e]),mt(r)}:hv().includes(t)?function(...e){return t.apply(Oi(this),e),mt($h.get(this))}:function(...e){return mt(t.apply(Oi(this),e))}}function gv(t){return typeof t=="function"?mv(t):(t instanceof IDBTransaction&&pv(t),cv(t,uv())?new Proxy(t,Eo):t)}function mt(t){if(t instanceof IDBRequest)return dv(t);if(ki.has(t))return ki.get(t);const e=gv(t);return e!==t&&(ki.set(t,e),Ca.set(e,t)),e}const Oi=t=>Ca.get(t);function yv(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=mt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(mt(o.result),l.oldVersion,l.newVersion,mt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const vv=["get","getKey","getAll","getAllKeys","count"],_v=["put","add","delete","clear"],Pi=new Map;function bc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pi.get(e))return Pi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=_v.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vv.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Pi.set(e,i),i}fv(t=>({...t,get:(e,n,r)=>bc(e,n)||t.get(e,n,r),has:(e,n)=>!!bc(e,n)||t.has(e,n)}));/**
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
 */class bv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ev(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ev(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wo="@firebase/app",Ec="0.9.9";/**
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
 */const jt=new Ia("@firebase/app"),wv="@firebase/app-compat",Av="@firebase/analytics-compat",Tv="@firebase/analytics",Sv="@firebase/app-check-compat",Iv="@firebase/app-check",Cv="@firebase/auth",xv="@firebase/auth-compat",Rv="@firebase/database",Dv="@firebase/database-compat",Nv="@firebase/functions",kv="@firebase/functions-compat",Ov="@firebase/installations",Pv="@firebase/installations-compat",Mv="@firebase/messaging",Lv="@firebase/messaging-compat",jv="@firebase/performance",Fv="@firebase/performance-compat",Uv="@firebase/remote-config",Vv="@firebase/remote-config-compat",Bv="@firebase/storage",$v="@firebase/storage-compat",Hv="@firebase/firestore",Gv="@firebase/firestore-compat",qv="firebase",zv="9.21.0";/**
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
 */const Ao="[DEFAULT]",Kv={[wo]:"fire-core",[wv]:"fire-core-compat",[Tv]:"fire-analytics",[Av]:"fire-analytics-compat",[Iv]:"fire-app-check",[Sv]:"fire-app-check-compat",[Cv]:"fire-auth",[xv]:"fire-auth-compat",[Rv]:"fire-rtdb",[Dv]:"fire-rtdb-compat",[Nv]:"fire-fn",[kv]:"fire-fn-compat",[Ov]:"fire-iid",[Pv]:"fire-iid-compat",[Mv]:"fire-fcm",[Lv]:"fire-fcm-compat",[jv]:"fire-perf",[Fv]:"fire-perf-compat",[Uv]:"fire-rc",[Vv]:"fire-rc-compat",[Bv]:"fire-gcs",[$v]:"fire-gcs-compat",[Hv]:"fire-fst",[Gv]:"fire-fst-compat","fire-js":"fire-js",[qv]:"fire-js-all"};/**
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
 */const ys=new Map,To=new Map;function Wv(t,e){try{t.container.addComponent(e)}catch(n){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vt(t){const e=t.name;if(To.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;To.set(e,t);for(const n of ys.values())Wv(n,t);return!0}function xr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Qv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new Ws("app","Firebase",Qv);/**
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
 */class Yv{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
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
 */const Xv=zv;function Gh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ao,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw gt.create("bad-app-name",{appName:String(s)});if(n||(n=Hy()),!n)throw gt.create("no-options");const i=ys.get(s);if(i){if(gs(n,i.options)&&gs(r,i.config))return i;throw gt.create("duplicate-app",{appName:s})}const o=new sv(s);for(const l of To.values())o.addComponent(l);const a=new Yv(n,r,o);return ys.set(s,a),a}function qh(t=Ao){const e=ys.get(t);if(!e&&t===Ao)return Gh();if(!e)throw gt.create("no-app",{appName:t});return e}function Ke(t,e,n){var r;let s=(r=Kv[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(a.join(" "));return}vt(new tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Jv="firebase-heartbeat-database",Zv=1,dr="firebase-heartbeat-store";let Mi=null;function zh(){return Mi||(Mi=yv(Jv,Zv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dr)}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),Mi}async function e_(t){try{return(await zh()).transaction(dr).objectStore(dr).get(Kh(t))}catch(e){if(e instanceof wt)jt.warn(e.message);else{const n=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jt.warn(n.message)}}}async function wc(t,e){try{const r=(await zh()).transaction(dr,"readwrite");return await r.objectStore(dr).put(e,Kh(t)),r.done}catch(n){if(n instanceof wt)jt.warn(n.message);else{const r=gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jt.warn(r.message)}}}function Kh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const t_=1024,n_=30*24*60*60*1e3;class r_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new i_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ac();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=n_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ac(),{heartbeatsToSend:n,unsentEntries:r}=s_(this._heartbeatsCache.heartbeats),s=ms(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ac(){return new Date().toISOString().substring(0,10)}function s_(t,e=t_){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Tc(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Tc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class i_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vh()?Bh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await e_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Tc(t){return ms(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function o_(t){vt(new tt("platform-logger",e=>new bv(e),"PRIVATE")),vt(new tt("heartbeat",e=>new r_(e),"PRIVATE")),Ke(wo,Ec,t),Ke(wo,Ec,"esm2017"),Ke("fire-js","")}o_("");var a_="firebase",l_="9.21.0";/**
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
 */Ke(a_,l_,"app");const c_=(t,e)=>e.some(n=>t instanceof n);let Sc,Ic;function u_(){return Sc||(Sc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h_(){return Ic||(Ic=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wh=new WeakMap,So=new WeakMap,Qh=new WeakMap,Li=new WeakMap,xa=new WeakMap;function d_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wh.set(n,t)}).catch(()=>{}),xa.set(e,t),e}function p_(t){if(So.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});So.set(t,e)}let Io={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return So.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function f_(t){Io=t(Io)}function m_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ji(this),e,...n);return Qh.set(r,e.sort?e.sort():[e]),yt(r)}:h_().includes(t)?function(...e){return t.apply(ji(this),e),yt(Wh.get(this))}:function(...e){return yt(t.apply(ji(this),e))}}function g_(t){return typeof t=="function"?m_(t):(t instanceof IDBTransaction&&p_(t),c_(t,u_())?new Proxy(t,Io):t)}function yt(t){if(t instanceof IDBRequest)return d_(t);if(Li.has(t))return Li.get(t);const e=g_(t);return e!==t&&(Li.set(t,e),xa.set(e,t)),e}const ji=t=>xa.get(t);function y_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=yt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yt(o.result),l.oldVersion,l.newVersion,yt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const v_=["get","getKey","getAll","getAllKeys","count"],__=["put","add","delete","clear"],Fi=new Map;function Cc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fi.get(e))return Fi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=__.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||v_.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Fi.set(e,i),i}f_(t=>({...t,get:(e,n,r)=>Cc(e,n)||t.get(e,n,r),has:(e,n)=>!!Cc(e,n)||t.has(e,n)}));const Yh="@firebase/installations",Ra="0.6.4";/**
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
 */const Xh=1e4,Jh=`w:${Ra}`,Zh="FIS_v2",b_="https://firebaseinstallations.googleapis.com/v1",E_=60*60*1e3,w_="installations",A_="Installations";/**
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
 */const T_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ft=new Ws(w_,A_,T_);function ed(t){return t instanceof wt&&t.code.includes("request-failed")}/**
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
 */function td({projectId:t}){return`${b_}/projects/${t}/installations`}function nd(t){return{token:t.token,requestStatus:2,expiresIn:I_(t.expiresIn),creationTime:Date.now()}}async function rd(t,e){const r=(await e.json()).error;return Ft.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function sd({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function S_(t,{refreshToken:e}){const n=sd(t);return n.append("Authorization",C_(e)),n}async function id(t){const e=await t();return e.status>=500&&e.status<600?t():e}function I_(t){return Number(t.replace("s","000"))}function C_(t){return`${Zh} ${t}`}/**
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
 */async function x_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=td(t),s=sd(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:Zh,appId:t.appId,sdkVersion:Jh},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await id(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:nd(c.authToken)}}else throw await rd("Create Installation",l)}/**
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
 */function od(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function R_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const D_=/^[cdef][\w-]{21}$/,Co="";function N_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=k_(t);return D_.test(n)?n:Co}catch{return Co}}function k_(t){return R_(t).substr(0,22)}/**
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
 */function Qs(t){return`${t.appName}!${t.appId}`}/**
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
 */const ad=new Map;function ld(t,e){const n=Qs(t);cd(n,e),O_(n,e)}function cd(t,e){const n=ad.get(t);if(n)for(const r of n)r(e)}function O_(t,e){const n=P_();n&&n.postMessage({key:t,fid:e}),M_()}let Ct=null;function P_(){return!Ct&&"BroadcastChannel"in self&&(Ct=new BroadcastChannel("[Firebase] FID Change"),Ct.onmessage=t=>{cd(t.data.key,t.data.fid)}),Ct}function M_(){ad.size===0&&Ct&&(Ct.close(),Ct=null)}/**
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
 */const L_="firebase-installations-database",j_=1,Ut="firebase-installations-store";let Ui=null;function Da(){return Ui||(Ui=y_(L_,j_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ut)}}})),Ui}async function vs(t,e){const n=Qs(t),s=(await Da()).transaction(Ut,"readwrite"),i=s.objectStore(Ut),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&ld(t,e.fid),e}async function ud(t){const e=Qs(t),r=(await Da()).transaction(Ut,"readwrite");await r.objectStore(Ut).delete(e),await r.done}async function Ys(t,e){const n=Qs(t),s=(await Da()).transaction(Ut,"readwrite"),i=s.objectStore(Ut),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&ld(t,a.fid),a}/**
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
 */async function Na(t){let e;const n=await Ys(t.appConfig,r=>{const s=F_(r),i=U_(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Co?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function F_(t){const e=t||{fid:N_(),registrationStatus:0};return hd(e)}function U_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ft.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=V_(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:B_(t)}:{installationEntry:e}}async function V_(t,e){try{const n=await x_(t,e);return vs(t.appConfig,n)}catch(n){throw ed(n)&&n.customData.serverCode===409?await ud(t.appConfig):await vs(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function B_(t){let e=await xc(t.appConfig);for(;e.registrationStatus===1;)await od(100),e=await xc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Na(t);return r||n}return e}function xc(t){return Ys(t,e=>{if(!e)throw Ft.create("installation-not-found");return hd(e)})}function hd(t){return $_(t)?{fid:t.fid,registrationStatus:0}:t}function $_(t){return t.registrationStatus===1&&t.registrationTime+Xh<Date.now()}/**
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
 */async function H_({appConfig:t,heartbeatServiceProvider:e},n){const r=G_(t,n),s=S_(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Jh,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await id(()=>fetch(r,a));if(l.ok){const c=await l.json();return nd(c)}else throw await rd("Generate Auth Token",l)}function G_(t,{fid:e}){return`${td(t)}/${e}/authTokens:generate`}/**
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
 */async function ka(t,e=!1){let n;const r=await Ys(t.appConfig,i=>{if(!dd(i))throw Ft.create("not-registered");const o=i.authToken;if(!e&&K_(o))return i;if(o.requestStatus===1)return n=q_(t,e),i;{if(!navigator.onLine)throw Ft.create("app-offline");const a=Q_(i);return n=z_(t,a),a}});return n?await n:r.authToken}async function q_(t,e){let n=await Rc(t.appConfig);for(;n.authToken.requestStatus===1;)await od(100),n=await Rc(t.appConfig);const r=n.authToken;return r.requestStatus===0?ka(t,e):r}function Rc(t){return Ys(t,e=>{if(!dd(e))throw Ft.create("not-registered");const n=e.authToken;return Y_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function z_(t,e){try{const n=await H_(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await vs(t.appConfig,r),n}catch(n){if(ed(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ud(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await vs(t.appConfig,r)}throw n}}function dd(t){return t!==void 0&&t.registrationStatus===2}function K_(t){return t.requestStatus===2&&!W_(t)}function W_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+E_}function Q_(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Y_(t){return t.requestStatus===1&&t.requestTime+Xh<Date.now()}/**
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
 */async function X_(t){const e=t,{installationEntry:n,registrationPromise:r}=await Na(e);return r?r.catch(console.error):ka(e).catch(console.error),n.fid}/**
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
 */async function J_(t,e=!1){const n=t;return await Z_(n),(await ka(n,e)).token}async function Z_(t){const{registrationPromise:e}=await Na(t);e&&await e}/**
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
 */function e0(t){if(!t||!t.options)throw Vi("App Configuration");if(!t.name)throw Vi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Vi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Vi(t){return Ft.create("missing-app-config-values",{valueName:t})}/**
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
 */const pd="installations",t0="installations-internal",n0=t=>{const e=t.getProvider("app").getImmediate(),n=e0(e),r=xr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},r0=t=>{const e=t.getProvider("app").getImmediate(),n=xr(e,pd).getImmediate();return{getId:()=>X_(n),getToken:s=>J_(n,s)}};function s0(){vt(new tt(pd,n0,"PUBLIC")),vt(new tt(t0,r0,"PRIVATE"))}s0();Ke(Yh,Ra);Ke(Yh,Ra,"esm2017");/**
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
 */const _s="analytics",i0="firebase_id",o0="origin",a0=60*1e3,l0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Oa="https://www.googletagmanager.com/gtag/js";/**
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
 */const Se=new Ia("@firebase/analytics");/**
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
 */const c0={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Re=new Ws("analytics","Analytics",c0);/**
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
 */function u0(t){if(!t.startsWith(Oa)){const e=Re.create("invalid-gtag-resource",{gtagURL:t});return Se.warn(e.message),""}return t}function fd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function h0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function d0(t,e){const n=h0("firebase-js-sdk-policy",{createScriptURL:u0}),r=document.createElement("script"),s=`${Oa}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function p0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function f0(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await fd(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){Se.error(a)}t("config",s,i)}async function m0(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await fd(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Se.error(i)}}function g0(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,l]=o;await m0(t,e,n,a,l)}else if(i==="config"){const[a,l]=o;await f0(t,e,n,r,a,l)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Se.error(a)}}return s}function y0(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=g0(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function v0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Oa)&&n.src.includes(t))return n;return null}/**
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
 */const _0=30,b0=1e3;class E0{constructor(e={},n=b0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const md=new E0;function w0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function A0(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:w0(r)},i=l0.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Re.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function T0(t,e=md,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Re.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Re.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new C0;return setTimeout(async()=>{a.abort()},n!==void 0?n:a0),gd({appId:r,apiKey:s,measurementId:i},o,a,e)}async function gd(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=md){var i;const{appId:o,measurementId:a}=t;try{await S0(r,e)}catch(l){if(a)return Se.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await A0(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!I0(c)){if(s.deleteThrottleMetadata(o),a)return Se.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((i=c==null?void 0:c.customData)===null||i===void 0?void 0:i.httpStatus)===503?yc(n,s.intervalMillis,_0):yc(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,d),Se.debug(`Calling attemptFetch again in ${u} millis`),gd(t,d,r,s)}}function S0(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Re.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function I0(t){if(!(t instanceof wt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class C0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function x0(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function R0(){if(Vh())try{await Bh()}catch(t){return Se.warn(Re.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Se.warn(Re.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function D0(t,e,n,r,s,i,o){var a;const l=T0(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Se.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Se.error(f)),e.push(l);const c=R0().then(f=>{if(f)return r.getId()}),[u,d]=await Promise.all([l,c]);v0(i)||d0(i,u.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[o0]="firebase",p.update=!0,d!=null&&(p[i0]=d),s("config",u.measurementId,p),u.measurementId}/**
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
 */class N0{constructor(e){this.app=e}_delete(){return delete Qn[this.app.options.appId],Promise.resolve()}}let Qn={},Dc=[];const Nc={};let Bi="dataLayer",k0="gtag",kc,yd,Oc=!1;function O0(){const t=[];if(zy()&&t.push("This is a browser extension environment."),Ky()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Re.create("invalid-analytics-context",{errorInfo:e});Se.warn(n.message)}}function P0(t,e,n){O0();const r=t.options.appId;if(!r)throw Re.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Se.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Re.create("no-api-key");if(Qn[r]!=null)throw Re.create("already-exists",{id:r});if(!Oc){p0(Bi);const{wrappedGtag:i,gtagCore:o}=y0(Qn,Dc,Nc,Bi,k0);yd=i,kc=o,Oc=!0}return Qn[r]=D0(t,Dc,Nc,e,kc,Bi,n),new N0(t)}function M0(t=qh()){t=un(t);const e=xr(t,_s);return e.isInitialized()?e.getImmediate():L0(t)}function L0(t,e={}){const n=xr(t,_s);if(n.isInitialized()){const s=n.getImmediate();if(gs(e,n.getOptions()))return s;throw Re.create("already-initialized")}return n.initialize({options:e})}function j0(t,e,n,r){t=un(t),x0(yd,Qn[t.app.options.appId],e,n,r).catch(s=>Se.error(s))}const Pc="@firebase/analytics",Mc="0.10.0";function F0(){vt(new tt(_s,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return P0(r,s,n)},"PUBLIC")),vt(new tt("analytics-internal",t,"PRIVATE")),Ke(Pc,Mc),Ke(Pc,Mc,"esm2017");function t(e){try{const n=e.getProvider(_s).getImmediate();return{logEvent:(r,s,i)=>j0(n,r,s,i)}}catch(n){throw Re.create("interop-component-reg-failed",{reason:n})}}}F0();var U0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,Pa=Pa||{},N=U0||self;function bs(){}function Xs(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Rr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function V0(t){return Object.prototype.hasOwnProperty.call(t,$i)&&t[$i]||(t[$i]=++B0)}var $i="closure_uid_"+(1e9*Math.random()>>>0),B0=0;function $0(t,e,n){return t.call.apply(t.bind,arguments)}function H0(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ye=$0:ye=H0,ye.apply(null,arguments)}function zr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ae(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function At(){this.s=this.s,this.o=this.o}var G0=0;At.prototype.s=!1;At.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),G0!=0)&&V0(this)};At.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ma(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Lc(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Xs(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ve(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var q0=function(){if(!N.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{N.addEventListener("test",bs,e),N.removeEventListener("test",bs,e)}catch{}return t}();function Es(t){return/^[\s\xa0]*$/.test(t)}var jc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Hi(t,e){return t<e?-1:t>e?1:0}function Js(){var t=N.navigator;return t&&(t=t.userAgent)?t:""}function Ge(t){return Js().indexOf(t)!=-1}function La(t){return La[" "](t),t}La[" "]=bs;function _d(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var z0=Ge("Opera"),hn=Ge("Trident")||Ge("MSIE"),bd=Ge("Edge"),xo=bd||hn,Ed=Ge("Gecko")&&!(Js().toLowerCase().indexOf("webkit")!=-1&&!Ge("Edge"))&&!(Ge("Trident")||Ge("MSIE"))&&!Ge("Edge"),K0=Js().toLowerCase().indexOf("webkit")!=-1&&!Ge("Edge");function wd(){var t=N.document;return t?t.documentMode:void 0}var ws;e:{var Gi="",qi=function(){var t=Js();if(Ed)return/rv:([^\);]+)(\)|;)/.exec(t);if(bd)return/Edge\/([\d\.]+)/.exec(t);if(hn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(K0)return/WebKit\/(\S+)/.exec(t);if(z0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qi&&(Gi=qi?qi[1]:""),hn){var zi=wd();if(zi!=null&&zi>parseFloat(Gi)){ws=String(zi);break e}}ws=Gi}var W0={};function Q0(){return _d(W0,9,function(){let t=0;const e=jc(String(ws)).split("."),n=jc("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Hi(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Hi(s[2].length==0,i[2].length==0)||Hi(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Ro;if(N.document&&hn){var Fc=wd();Ro=Fc||parseInt(ws,10)||void 0}else Ro=void 0;var Y0=Ro;function pr(t,e){if(ve.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ed){e:{try{La(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:X0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&pr.$.h.call(this)}}ae(pr,ve);var X0={2:"touch",3:"pen",4:"mouse"};pr.prototype.h=function(){pr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Dr="closure_listenable_"+(1e6*Math.random()|0),J0=0;function Z0(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++J0,this.fa=this.ia=!1}function Zs(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ja(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ad(t){const e={};for(const n in t)e[n]=t[n];return e}const Uc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Td(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Uc.length;i++)n=Uc[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ei(t){this.src=t,this.g={},this.h=0}ei.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=No(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Z0(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Do(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=vd(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Zs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function No(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Fa="closure_lm_"+(1e6*Math.random()|0),Ki={};function Sd(t,e,n,r,s){if(r&&r.once)return Cd(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Sd(t,e[i],n,r,s);return null}return n=Ba(n),t&&t[Dr]?t.O(e,n,Rr(r)?!!r.capture:!!r,s):Id(t,e,n,!1,r,s)}function Id(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Rr(s)?!!s.capture:!!s,a=Va(t);if(a||(t[Fa]=a=new ei(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=eb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)q0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Rd(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eb(){function t(n){return e.call(t.src,t.listener,n)}const e=tb;return t}function Cd(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Cd(t,e[i],n,r,s);return null}return n=Ba(n),t&&t[Dr]?t.P(e,n,Rr(r)?!!r.capture:!!r,s):Id(t,e,n,!0,r,s)}function xd(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)xd(t,e[i],n,r,s);else r=Rr(r)?!!r.capture:!!r,n=Ba(n),t&&t[Dr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=No(i,n,r,s),-1<n&&(Zs(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Va(t))&&(e=t.g[e.toString()],t=-1,e&&(t=No(e,n,r,s)),(n=-1<t?e[t]:null)&&Ua(n))}function Ua(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Dr])Do(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Rd(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Va(e))?(Do(n,t),n.h==0&&(n.src=null,e[Fa]=null)):Zs(t)}}}function Rd(t){return t in Ki?Ki[t]:Ki[t]="on"+t}function tb(t,e){if(t.fa)t=!0;else{e=new pr(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ua(t),t=n.call(r,e)}return t}function Va(t){return t=t[Fa],t instanceof ei?t:null}var Wi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ba(t){return typeof t=="function"?t:(t[Wi]||(t[Wi]=function(e){return t.handleEvent(e)}),t[Wi])}function oe(){At.call(this),this.i=new ei(this),this.S=this,this.J=null}ae(oe,At);oe.prototype[Dr]=!0;oe.prototype.removeEventListener=function(t,e,n,r){xd(this,t,e,n,r)};function pe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ve(e,t);else if(e instanceof ve)e.target=e.target||t;else{var s=e;e=new ve(r,t),Td(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Kr(o,r,!0,e)&&s}if(o=e.g=t,s=Kr(o,r,!0,e)&&s,s=Kr(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Kr(o,r,!1,e)&&s}oe.prototype.N=function(){if(oe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Zs(n[r]);delete t.g[e],t.h--}}this.J=null};oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};oe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Kr(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Do(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var $a=N.JSON.stringify;function nb(){var t=kd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class rb{constructor(){this.h=this.g=null}add(e,n){const r=Dd.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Dd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new sb,t=>t.reset());class sb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ib(t){N.setTimeout(()=>{throw t},0)}function Nd(t,e){ko||ob(),Oo||(ko(),Oo=!0),kd.add(t,e)}var ko;function ob(){var t=N.Promise.resolve(void 0);ko=function(){t.then(ab)}}var Oo=!1,kd=new rb;function ab(){for(var t;t=nb();){try{t.h.call(t.g)}catch(n){ib(n)}var e=Dd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Oo=!1}function ti(t,e){oe.call(this),this.h=t||1,this.g=e||N,this.j=ye(this.qb,this),this.l=Date.now()}ae(ti,oe);T=ti.prototype;T.ga=!1;T.T=null;T.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),pe(this,"tick"),this.ga&&(Ha(this),this.start()))}};T.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ha(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}T.N=function(){ti.$.N.call(this),Ha(this),delete this.g};function Ga(t,e,n){if(typeof t=="function")n&&(t=ye(t,n));else if(t&&typeof t.handleEvent=="function")t=ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:N.setTimeout(t,e||0)}function Od(t){t.g=Ga(()=>{t.g=null,t.i&&(t.i=!1,Od(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class lb extends At{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Od(this)}N(){super.N(),this.g&&(N.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fr(t){At.call(this),this.h=t,this.g={}}ae(fr,At);var Vc=[];function Pd(t,e,n,r){Array.isArray(n)||(n&&(Vc[0]=n.toString()),n=Vc);for(var s=0;s<n.length;s++){var i=Sd(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Md(t){ja(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ua(e)},t),t.g={}}fr.prototype.N=function(){fr.$.N.call(this),Md(this)};fr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ni(){this.g=!0}ni.prototype.Ea=function(){this.g=!1};function cb(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function ub(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Xt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+db(t,n)+(r?" "+r:"")})}function hb(t,e){t.info(function(){return"TIMEOUT: "+e})}ni.prototype.info=function(){};function db(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return $a(n)}catch{return e}}var Ht={},Bc=null;function ri(){return Bc=Bc||new oe}Ht.Ta="serverreachability";function Ld(t){ve.call(this,Ht.Ta,t)}ae(Ld,ve);function mr(t){const e=ri();pe(e,new Ld(e))}Ht.STAT_EVENT="statevent";function jd(t,e){ve.call(this,Ht.STAT_EVENT,t),this.stat=e}ae(jd,ve);function we(t){const e=ri();pe(e,new jd(e,t))}Ht.Ua="timingevent";function Fd(t,e){ve.call(this,Ht.Ua,t),this.size=e}ae(Fd,ve);function Nr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return N.setTimeout(function(){t()},e)}var si={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ud={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function qa(){}qa.prototype.h=null;function $c(t){return t.h||(t.h=t.i())}function Vd(){}var kr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function za(){ve.call(this,"d")}ae(za,ve);function Ka(){ve.call(this,"c")}ae(Ka,ve);var Po;function ii(){}ae(ii,qa);ii.prototype.g=function(){return new XMLHttpRequest};ii.prototype.i=function(){return{}};Po=new ii;function Or(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new fr(this),this.P=pb,t=xo?125:void 0,this.V=new ti(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Bd}function Bd(){this.i=null,this.g="",this.h=!1}var pb=45e3,Mo={},As={};T=Or.prototype;T.setTimeout=function(t){this.P=t};function Lo(t,e,n){t.L=1,t.v=ai(nt(e)),t.s=n,t.S=!0,$d(t,null)}function $d(t,e){t.G=Date.now(),Pr(t),t.A=nt(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Yd(n.i,"t",r),t.C=0,n=t.l.I,t.h=new Bd,t.g=yp(t.l,n?e:null,!t.s),0<t.O&&(t.M=new lb(ye(t.Pa,t,t.g),t.O)),Pd(t.U,t.g,"readystatechange",t.nb),e=t.I?Ad(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),mr(),cb(t.j,t.u,t.A,t.m,t.W,t.s)}T.nb=function(t){t=t.target;const e=this.M;e&&Ze(t)==3?e.l():this.Pa(t)};T.Pa=function(t){try{if(t==this.g)e:{const u=Ze(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||xo||this.g&&(this.h.h||this.g.ja()||zc(this.g)))){this.J||u!=4||e==7||(e==8||0>=d?mr(3):mr(2)),oi(this);var n=this.g.da();this.aa=n;t:if(Hd(this)){var r=zc(this.g);t="";var s=r.length,i=Ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xt(this),Yn(this);var o="";break t}this.h.i=new N.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ub(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Es(a)){var c=a;break t}}c=null}if(n=c)Xt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jo(this,n);else{this.i=!1,this.o=3,we(12),xt(this),Yn(this);break e}}this.S?(Gd(this,u,o),xo&&this.i&&u==3&&(Pd(this.U,this.V,"tick",this.mb),this.V.start())):(Xt(this.j,this.m,o,null),jo(this,o)),u==4&&xt(this),this.i&&!this.J&&(u==4?pp(this.l,this):(this.i=!1,Pr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,we(12)):(this.o=0,we(13)),xt(this),Yn(this)}}}catch{}finally{}};function Hd(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Gd(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=fb(t,n),s==As){e==4&&(t.o=4,we(14),r=!1),Xt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Mo){t.o=4,we(15),Xt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Xt(t.j,t.m,s,null),jo(t,s);Hd(t)&&s!=As&&s!=Mo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,we(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),el(e),e.L=!0,we(11))):(Xt(t.j,t.m,n,"[Invalid Chunked Response]"),xt(t),Yn(t))}T.mb=function(){if(this.g){var t=Ze(this.g),e=this.g.ja();this.C<e.length&&(oi(this),Gd(this,t,e),this.i&&t!=4&&Pr(this))}};function fb(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?As:(n=Number(e.substring(n,r)),isNaN(n)?Mo:(r+=1,r+n>e.length?As:(e=e.substr(r,n),t.C=r+n,e)))}T.cancel=function(){this.J=!0,xt(this)};function Pr(t){t.Y=Date.now()+t.P,qd(t,t.P)}function qd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Nr(ye(t.lb,t),e)}function oi(t){t.B&&(N.clearTimeout(t.B),t.B=null)}T.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(hb(this.j,this.A),this.L!=2&&(mr(),we(17)),xt(this),this.o=2,Yn(this)):qd(this,this.Y-t)};function Yn(t){t.l.H==0||t.J||pp(t.l,t)}function xt(t){oi(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Ha(t.V),Md(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function jo(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Fo(n.h,t))){if(!t.K&&Fo(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Is(n),ui(n);else break e;Za(n),we(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&n.A==0&&!n.v&&(n.v=Nr(ye(n.ib,n),6e3));if(1>=Zd(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Rt(n,11)}else if((t.K||n.g==t)&&Is(n),!Es(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const u=c[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const d=c[4];d!=null&&(n.Ga=d,n.j.info("SVER="+n.Ga));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Wa(i,i.h),i.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,z(r.G,r.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=gp(r,r.I?r.oa:null,r.Y),o.K){ep(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(oi(a),Pr(a)),r.g=o}else hp(r);0<n.i.length&&hi(n)}else c[0]!="stop"&&c[0]!="close"||Rt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Rt(n,7):Ja(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}mr(4)}catch{}}function mb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Xs(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function gb(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Xs(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function zd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xs(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=gb(t),r=mb(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Kd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Nt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Nt){this.h=e!==void 0?e:t.h,Ts(this,t.j),this.s=t.s,this.g=t.g,Ss(this,t.m),this.l=t.l,e=t.i;var n=new gr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Hc(this,n),this.o=t.o}else t&&(n=String(t).match(Kd))?(this.h=!!e,Ts(this,n[1]||"",!0),this.s=Bn(n[2]||""),this.g=Bn(n[3]||"",!0),Ss(this,n[4]),this.l=Bn(n[5]||"",!0),Hc(this,n[6]||"",!0),this.o=Bn(n[7]||"")):(this.h=!!e,this.i=new gr(null,this.h))}Nt.prototype.toString=function(){var t=[],e=this.j;e&&t.push($n(e,Gc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($n(e,Gc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push($n(n,n.charAt(0)=="/"?bb:_b,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$n(n,wb)),t.join("")};function nt(t){return new Nt(t)}function Ts(t,e,n){t.j=n?Bn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ss(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hc(t,e,n){e instanceof gr?(t.i=e,Ab(t.i,t.h)):(n||(e=$n(e,Eb)),t.i=new gr(e,t.h))}function z(t,e,n){t.i.set(e,n)}function ai(t){return z(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $n(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,vb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gc=/[#\/\?@]/g,_b=/[#\?:]/g,bb=/[#\?]/g,Eb=/[#\?@]/g,wb=/#/g;function gr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tt(t){t.g||(t.g=new Map,t.h=0,t.i&&yb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}T=gr.prototype;T.add=function(t,e){Tt(this),this.i=null,t=Sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wd(t,e){Tt(t),e=Sn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Qd(t,e){return Tt(t),e=Sn(t,e),t.g.has(e)}T.forEach=function(t,e){Tt(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};T.sa=function(){Tt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};T.Z=function(t){Tt(this);let e=[];if(typeof t=="string")Qd(this,t)&&(e=e.concat(this.g.get(Sn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};T.set=function(t,e){return Tt(this),this.i=null,t=Sn(this,t),Qd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};T.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Yd(t,e,n){Wd(t,e),0<n.length&&(t.i=null,t.g.set(Sn(t,e),Ma(n)),t.h+=n.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ab(t,e){e&&!t.j&&(Tt(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Wd(this,r),Yd(this,s,n))},t)),t.j=e}var Tb=class{constructor(t,e){this.h=t,this.g=e}};function Xd(t){this.l=t||Sb,N.PerformanceNavigationTiming?(t=N.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(N.g&&N.g.Ka&&N.g.Ka()&&N.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Sb=10;function Jd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Zd(t){return t.h?1:t.g?t.g.size:0}function Fo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wa(t,e){t.g?t.g.add(e):t.h=e}function ep(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Xd.prototype.cancel=function(){if(this.i=tp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function tp(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ma(t.i)}function Qa(){}Qa.prototype.stringify=function(t){return N.JSON.stringify(t,void 0)};Qa.prototype.parse=function(t){return N.JSON.parse(t,void 0)};function Ib(){this.g=new Qa}function Cb(t,e,n){const r=n||"";try{zd(t,function(s,i){let o=s;Rr(s)&&(o=$a(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function xb(t,e){const n=new ni;if(N.Image){const r=new Image;r.onload=zr(Wr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=zr(Wr,n,r,"TestLoadImage: error",!1,e),r.onabort=zr(Wr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=zr(Wr,n,r,"TestLoadImage: timeout",!1,e),N.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Wr(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Mr(t){this.l=t.fc||null,this.j=t.ob||!1}ae(Mr,qa);Mr.prototype.g=function(){return new li(this.l,this.j)};Mr.prototype.i=function(t){return function(){return t}}({});function li(t,e){oe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ya,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ae(li,oe);var Ya=0;T=li.prototype;T.open=function(t,e){if(this.readyState!=Ya)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yr(this)};T.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||N).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lr(this)),this.readyState=Ya};T.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof N.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;np(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function np(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}T.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Lr(this):yr(this),this.readyState==3&&np(this)}};T.Za=function(t){this.g&&(this.response=this.responseText=t,Lr(this))};T.Ya=function(t){this.g&&(this.response=t,Lr(this))};T.ka=function(){this.g&&Lr(this)};function Lr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yr(t)}T.setRequestHeader=function(t,e){this.v.append(t,e)};T.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Rb=N.JSON.parse;function Q(t){oe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=rp,this.L=this.M=!1}ae(Q,oe);var rp="",Db=/^https?$/i,Nb=["POST","PUT"];T=Q.prototype;T.Oa=function(t){this.M=t};T.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Po.g(),this.C=this.u?$c(this.u):$c(Po),this.g.onreadystatechange=ye(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){qc(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=N.FormData&&t instanceof N.FormData,!(0<=vd(Nb,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{op(this),0<this.B&&((this.L=kb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ye(this.ua,this)):this.A=Ga(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){qc(this,i)}};function kb(t){return hn&&Q0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}T.ua=function(){typeof Pa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pe(this,"timeout"),this.abort(8))};function qc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sp(t),ci(t)}function sp(t){t.F||(t.F=!0,pe(t,"complete"),pe(t,"error"))}T.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,pe(this,"complete"),pe(this,"abort"),ci(this))};T.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ci(this,!0)),Q.$.N.call(this)};T.La=function(){this.s||(this.G||this.v||this.l?ip(this):this.kb())};T.kb=function(){ip(this)};function ip(t){if(t.h&&typeof Pa<"u"&&(!t.C[1]||Ze(t)!=4||t.da()!=2)){if(t.v&&Ze(t)==4)Ga(t.La,0,t);else if(pe(t,"readystatechange"),Ze(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.I).match(Kd)[1]||null;if(!s&&N.self&&N.self.location){var i=N.self.location.protocol;s=i.substr(0,i.length-1)}r=!Db.test(s?s.toLowerCase():"")}n=r}if(n)pe(t,"complete"),pe(t,"success");else{t.m=6;try{var o=2<Ze(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",sp(t)}}finally{ci(t)}}}}function ci(t,e){if(t.g){op(t);const n=t.g,r=t.C[0]?bs:null;t.g=null,t.C=null,e||pe(t,"ready");try{n.onreadystatechange=r}catch{}}}function op(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(N.clearTimeout(t.A),t.A=null)}function Ze(t){return t.g?t.g.readyState:0}T.da=function(){try{return 2<Ze(this)?this.g.status:-1}catch{return-1}};T.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Rb(e)}};function zc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case rp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}T.Ia=function(){return this.m};T.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ap(t){let e="";return ja(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Xa(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ap(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):z(t,e,n))}function Mn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function lp(t){this.Ga=0,this.i=[],this.j=new ni,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Mn("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Mn("baseRetryDelayMs",5e3,t),this.hb=Mn("retryDelaySeedMs",1e4,t),this.eb=Mn("forwardChannelMaxRetries",2,t),this.xa=Mn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new Xd(t&&t.concurrentRequestLimit),this.Ja=new Ib,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}T=lp.prototype;T.qa=8;T.H=1;function Ja(t){if(cp(t),t.H==3){var e=t.W++,n=nt(t.G);z(n,"SID",t.J),z(n,"RID",e),z(n,"TYPE","terminate"),jr(t,n),e=new Or(t,t.j,e,void 0),e.L=2,e.v=ai(nt(n)),n=!1,N.navigator&&N.navigator.sendBeacon&&(n=N.navigator.sendBeacon(e.v.toString(),"")),!n&&N.Image&&(new Image().src=e.v,n=!0),n||(e.g=yp(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Pr(e)}mp(t)}function ui(t){t.g&&(el(t),t.g.cancel(),t.g=null)}function cp(t){ui(t),t.u&&(N.clearTimeout(t.u),t.u=null),Is(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&N.clearTimeout(t.m),t.m=null)}function hi(t){Jd(t.h)||t.m||(t.m=!0,Nd(t.Na,t),t.C=0)}function Ob(t,e){return Zd(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Nr(ye(t.Na,t,e),fp(t,t.C)),t.C++,!0)}T.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Or(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=Ad(i),Td(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=up(this,s,e),n=nt(this.G),z(n,"RID",t),z(n,"CVER",22),this.F&&z(n,"X-HTTP-Session-Id",this.F),jr(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(ap(i)))+"&"+e:this.o&&Xa(n,this.o,i)),Wa(this.h,s),this.bb&&z(n,"TYPE","init"),this.P?(z(n,"$req",e),z(n,"SID","null"),s.ba=!0,Lo(s,n,null)):Lo(s,n,e),this.H=2}}else this.H==3&&(t?Kc(this,t):this.i.length==0||Jd(this.h)||Kc(this))};function Kc(t,e){var n;e?n=e.m:n=t.W++;const r=nt(t.G);z(r,"SID",t.J),z(r,"RID",n),z(r,"AID",t.V),jr(t,r),t.o&&t.s&&Xa(r,t.o,t.s),n=new Or(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=up(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Wa(t.h,n),Lo(n,r,e)}function jr(t,e){t.ma&&ja(t.ma,function(n,r){z(e,r,n)}),t.l&&zd({},function(n,r){z(e,r,n)})}function up(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ye(t.l.Va,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=i,0>c)i=Math.max(0,s[l].h-100),a=!1;else try{Cb(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function hp(t){t.g||t.u||(t.ba=1,Nd(t.Ma,t),t.A=0)}function Za(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Nr(ye(t.Ma,t),fp(t,t.A)),t.A++,!0)}T.Ma=function(){if(this.u=null,dp(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Nr(ye(this.jb,this),t)}};T.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,we(10),ui(this),dp(this))};function el(t){t.B!=null&&(N.clearTimeout(t.B),t.B=null)}function dp(t){t.g=new Or(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=nt(t.wa);z(e,"RID","rpc"),z(e,"SID",t.J),z(e,"CI",t.M?"0":"1"),z(e,"AID",t.V),z(e,"TYPE","xmlhttp"),jr(t,e),t.o&&t.s&&Xa(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=ai(nt(e)),n.s=null,n.S=!0,$d(n,t)}T.ib=function(){this.v!=null&&(this.v=null,ui(this),Za(this),we(19))};function Is(t){t.v!=null&&(N.clearTimeout(t.v),t.v=null)}function pp(t,e){var n=null;if(t.g==e){Is(t),el(t),t.g=null;var r=2}else if(Fo(t.h,e))n=e.F,ep(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=ri(),pe(r,new Fd(r,n)),hi(t)}else hp(t);else if(s=e.o,s==3||s==0&&0<t.ta||!(r==1&&Ob(t,e)||r==2&&Za(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Rt(t,5);break;case 4:Rt(t,10);break;case 3:Rt(t,6);break;default:Rt(t,2)}}}function fp(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Rt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ye(t.pb,t);n||(n=new Nt("//www.google.com/images/cleardot.gif"),N.location&&N.location.protocol=="http"||Ts(n,"https"),ai(n)),xb(n.toString(),r)}else we(2);t.H=0,t.l&&t.l.za(e),mp(t),cp(t)}T.pb=function(t){t?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function mp(t){if(t.H=0,t.pa=[],t.l){const e=tp(t.h);(e.length!=0||t.i.length!=0)&&(Lc(t.pa,e),Lc(t.pa,t.i),t.h.i.length=0,Ma(t.i),t.i.length=0),t.l.ya()}}function gp(t,e,n){var r=n instanceof Nt?nt(n):new Nt(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ss(r,r.m);else{var s=N.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Nt(null,void 0);r&&Ts(i,r),e&&(i.g=e),s&&Ss(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&z(r,n,e),z(r,"VER",t.qa),jr(t,r),r}function yp(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Q(new Mr({ob:!0})):new Q(t.va),e.Oa(t.I),e}function vp(){}T=vp.prototype;T.Ba=function(){};T.Aa=function(){};T.za=function(){};T.ya=function(){};T.Va=function(){};function Cs(){if(hn&&!(10<=Number(Y0)))throw Error("Environmental error: no available transport.")}Cs.prototype.g=function(t,e){return new De(t,e)};function De(t,e){oe.call(this),this.g=new lp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Es(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Es(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new In(this)}ae(De,oe);De.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;we(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=gp(t,null,t.Y),hi(t)};De.prototype.close=function(){Ja(this.g)};De.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=$a(t),t=n);e.i.push(new Tb(e.fb++,t)),e.H==3&&hi(e)};De.prototype.N=function(){this.g.l=null,delete this.j,Ja(this.g),delete this.g,De.$.N.call(this)};function _p(t){za.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ae(_p,za);function bp(){Ka.call(this),this.status=1}ae(bp,Ka);function In(t){this.g=t}ae(In,vp);In.prototype.Ba=function(){pe(this.g,"a")};In.prototype.Aa=function(t){pe(this.g,new _p(t))};In.prototype.za=function(t){pe(this.g,new bp)};In.prototype.ya=function(){pe(this.g,"b")};function Pb(){this.blockSize=-1}function Ue(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ae(Ue,Pb);Ue.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Qi(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Ue.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Qi(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Qi(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Qi(this,r),s=0;break}}this.h=s,this.i+=e};Ue.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function $(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Mb={};function tl(t){return-128<=t&&128>t?_d(Mb,t,function(e){return new $([e|0],0>e?-1:0)}):new $([t|0],0>t?-1:0)}function ze(t){if(isNaN(t)||!isFinite(t))return en;if(0>t)return de(ze(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Uo;return new $(e,0)}function Ep(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return de(Ep(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ze(Math.pow(e,8)),r=en,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=ze(Math.pow(e,i)),r=r.R(i).add(ze(o))):(r=r.R(n),r=r.add(ze(o)))}return r}var Uo=4294967296,en=tl(0),Vo=tl(1),Wc=tl(16777216);T=$.prototype;T.ea=function(){if(Pe(this))return-de(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Uo+r)*e,e*=Uo}return t};T.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(et(this))return"0";if(Pe(this))return"-"+de(this).toString(t);for(var e=ze(Math.pow(t,6)),n=this,r="";;){var s=Rs(n,e).g;n=xs(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,et(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};T.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function et(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Pe(t){return t.h==-1}T.X=function(t){return t=xs(this,t),Pe(t)?-1:et(t)?0:1};function de(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new $(n,~t.h).add(Vo)}T.abs=function(){return Pe(this)?de(this):this};T.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new $(n,n[n.length-1]&-2147483648?-1:0)};function xs(t,e){return t.add(de(e))}T.R=function(t){if(et(this)||et(t))return en;if(Pe(this))return Pe(t)?de(this).R(de(t)):de(de(this).R(t));if(Pe(t))return de(this.R(de(t)));if(0>this.X(Wc)&&0>t.X(Wc))return ze(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Qr(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Qr(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Qr(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Qr(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new $(n,0)};function Qr(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ln(t,e){this.g=t,this.h=e}function Rs(t,e){if(et(e))throw Error("division by zero");if(et(t))return new Ln(en,en);if(Pe(t))return e=Rs(de(t),e),new Ln(de(e.g),de(e.h));if(Pe(e))return e=Rs(t,de(e)),new Ln(de(e.g),e.h);if(30<t.g.length){if(Pe(t)||Pe(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Vo,r=e;0>=r.X(t);)n=Qc(n),r=Qc(r);var s=Kt(n,1),i=Kt(r,1);for(r=Kt(r,2),n=Kt(n,2);!et(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Kt(r,1),n=Kt(n,1)}return e=xs(t,s.R(e)),new Ln(s,e)}for(s=en;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=ze(n),o=i.R(e);Pe(o)||0<o.X(t);)n-=r,i=ze(n),o=i.R(e);et(i)&&(i=Vo),s=s.add(i),t=xs(t,o)}return new Ln(s,t)}T.gb=function(t){return Rs(this,t).h};T.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new $(n,this.h&t.h)};T.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new $(n,this.h|t.h)};T.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new $(n,this.h^t.h)};function Qc(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new $(n,t.h)}function Kt(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new $(s,t.h)}Cs.prototype.createWebChannel=Cs.prototype.g;De.prototype.send=De.prototype.u;De.prototype.open=De.prototype.m;De.prototype.close=De.prototype.close;si.NO_ERROR=0;si.TIMEOUT=8;si.HTTP_ERROR=6;Ud.COMPLETE="complete";Vd.EventType=kr;kr.OPEN="a";kr.CLOSE="b";kr.ERROR="c";kr.MESSAGE="d";oe.prototype.listen=oe.prototype.O;Q.prototype.listenOnce=Q.prototype.P;Q.prototype.getLastError=Q.prototype.Sa;Q.prototype.getLastErrorCode=Q.prototype.Ia;Q.prototype.getStatus=Q.prototype.da;Q.prototype.getResponseJson=Q.prototype.Wa;Q.prototype.getResponseText=Q.prototype.ja;Q.prototype.send=Q.prototype.ha;Q.prototype.setWithCredentials=Q.prototype.Oa;Ue.prototype.digest=Ue.prototype.l;Ue.prototype.reset=Ue.prototype.reset;Ue.prototype.update=Ue.prototype.j;$.prototype.add=$.prototype.add;$.prototype.multiply=$.prototype.R;$.prototype.modulo=$.prototype.gb;$.prototype.compare=$.prototype.X;$.prototype.toNumber=$.prototype.ea;$.prototype.toString=$.prototype.toString;$.prototype.getBits=$.prototype.D;$.fromNumber=ze;$.fromString=Ep;var Lb=function(){return new Cs},jb=function(){return ri()},Yi=si,Fb=Ud,Ub=Ht,Yc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Vb=Mr,Yr=Vd,Bb=Q,$b=Ue,tn=$;const Xc="@firebase/firestore";/**
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
 */let Cn="9.21.0";/**
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
 */const Vt=new Ia("@firebase/firestore");function Jc(){return Vt.logLevel}function R(t,...e){if(Vt.logLevel<=V.DEBUG){const n=e.map(nl);Vt.debug(`Firestore (${Cn}): ${t}`,...n)}}function rt(t,...e){if(Vt.logLevel<=V.ERROR){const n=e.map(nl);Vt.error(`Firestore (${Cn}): ${t}`,...n)}}function dn(t,...e){if(Vt.logLevel<=V.WARN){const n=e.map(nl);Vt.warn(`Firestore (${Cn}): ${t}`,...n)}}function nl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function M(t="Unexpected state"){const e=`FIRESTORE (${Cn}) INTERNAL ASSERTION FAILED: `+t;throw rt(e),new Error(e)}function re(t,e){t||M()}function U(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends wt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class wp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(me.UNAUTHENTICATED))}shutdown(){}}class Gb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qb{constructor(e){this.t=e,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new kt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new wp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new me(e)}}class zb{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=me.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Kb{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new zb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qb{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.T=n.token,new Wb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Yb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Xb{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Yb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function B(t,e){return t<e?-1:t>e?1:0}function pn(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ie{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ie(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class O{constructor(e){this.timestamp=e}static fromTimestamp(e){return new O(e)}static min(){return new O(new ie(0,0))}static max(){return new O(new ie(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vr{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class K extends vr{construct(e,n,r){return new K(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new K(n)}static emptyPath(){return new K([])}}const Jb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends vr{construct(e,n,r){return new Ee(e,n,r)}static isValidIdentifier(e){return Jb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ee(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new x(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new x(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new x(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(n)}static emptyPath(){return new Ee([])}}/**
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
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(K.fromString(e))}static fromName(e){return new D(K.fromString(e).popFirst(5))}static empty(){return new D(K.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&K.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return K.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new K(e.slice()))}}function Zb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=O.fromTimestamp(r===1e9?new ie(n+1,0):new ie(n,r));return new _t(s,D.empty(),e)}function eE(t){return new _t(t.readTime,t.key,-1)}class _t{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _t(O.min(),D.empty(),-1)}static max(){return new _t(O.max(),D.empty(),-1)}}function tE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:B(t.largestBatchId,e.largestBatchId))}/**
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
 */const nE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function rl(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==nE)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(s=>s?_.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new _((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new _((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Fr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}sl.ct=-1;function di(t){return t==null}function Ds(t){return t===0&&1/t==-1/0}function sE(t){return typeof t=="number"&&Number.isInteger(t)&&!Ds(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Zc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ap(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Z{constructor(e,n){this.comparator=e,this.root=n||he.EMPTY}insert(e,n){return new Z(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,he.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,he.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xr(this.root,e,this.comparator,!0)}}class Xr{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class he{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??he.RED,this.left=s??he.EMPTY,this.right=i??he.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new he(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return he.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,r,s){return this}insert(t,e,n){return new he(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new Z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new eu(this.data.getIterator())}getIteratorFrom(e){return new eu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class eu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ut{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new ut([])}unionWith(e){let n=new _e(Ee.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return pn(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Tp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Tp("Invalid base64 string: "+s):s}}(e);return new be(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const iE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(t){if(re(!!t),typeof t=="string"){let e=0;const n=iE.exec(t);if(re(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:te(t.seconds),nanos:te(t.nanos)}}function te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bt(t){return typeof t=="string"?be.fromBase64String(t):be.fromUint8Array(t)}/**
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
 */function il(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ol(t){const e=t.mapValue.fields.__previous_value__;return il(e)?ol(e):e}function _r(t){const e=bt(t.mapValue.fields.__local_write_time__.timestampValue);return new ie(e.seconds,e.nanos)}/**
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
 */class oE{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class br{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new br("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof br&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Jr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $t(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?il(t)?4:aE(t)?9007199254740991:10:M()}function Qe(t,e){if(t===e)return!0;const n=$t(t);if(n!==$t(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _r(t).isEqual(_r(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=bt(r.timestampValue),o=bt(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Bt(r.bytesValue).isEqual(Bt(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return te(r.geoPointValue.latitude)===te(s.geoPointValue.latitude)&&te(r.geoPointValue.longitude)===te(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return te(r.integerValue)===te(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=te(r.doubleValue),o=te(s.doubleValue);return i===o?Ds(i)===Ds(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return pn(t.arrayValue.values||[],e.arrayValue.values||[],Qe);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Zc(i)!==Zc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Qe(i[a],o[a])))return!1;return!0}(t,e);default:return M()}}function Er(t,e){return(t.values||[]).find(n=>Qe(n,e))!==void 0}function fn(t,e){if(t===e)return 0;const n=$t(t),r=$t(e);if(n!==r)return B(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return B(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=te(s.integerValue||s.doubleValue),a=te(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return tu(t.timestampValue,e.timestampValue);case 4:return tu(_r(t),_r(e));case 5:return B(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Bt(s),a=Bt(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=B(o[l],a[l]);if(c!==0)return c}return B(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=B(te(s.latitude),te(i.latitude));return o!==0?o:B(te(s.longitude),te(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=fn(o[l],a[l]);if(c)return c}return B(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Jr.mapValue&&i===Jr.mapValue)return 0;if(s===Jr.mapValue)return 1;if(i===Jr.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const d=B(a[u],c[u]);if(d!==0)return d;const p=fn(o[a[u]],l[c[u]]);if(p!==0)return p}return B(a.length,c.length)}(t.mapValue,e.mapValue);default:throw M()}}function tu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return B(t,e);const n=bt(t),r=bt(e),s=B(n.seconds,r.seconds);return s!==0?s:B(n.nanos,r.nanos)}function mn(t){return Bo(t)}function Bo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=bt(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Bt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,D.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Bo(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Bo(r.fields[a])}`;return i+"}"}(t.mapValue):M();var e,n}function nu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function $o(t){return!!t&&"integerValue"in t}function al(t){return!!t&&"arrayValue"in t}function ru(t){return!!t&&"nullValue"in t}function su(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xi(t){return!!t&&"mapValue"in t}function Xn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ur(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xn(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function aE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xn(n)}setAll(e){let n=Ee.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Xn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Xi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Xi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ur(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new qe(Xn(this.value))}}/**
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
 */class ge{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ge(e,0,O.min(),O.min(),O.min(),qe.empty(),0)}static newFoundDocument(e,n,r,s){return new ge(e,1,n,O.min(),r,s,0)}static newNoDocument(e,n){return new ge(e,2,n,O.min(),O.min(),qe.empty(),0)}static newUnknownDocument(e,n){return new ge(e,3,n,O.min(),O.min(),qe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ns{constructor(e,n){this.position=e,this.inclusive=n}}function iu(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),n.key):r=fn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ou(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qe(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class nn{constructor(e,n="asc"){this.field=e,this.dir=n}}function lE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Sp{}class ne extends Sp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uE(e,n,r):n==="array-contains"?new pE(e,r):n==="in"?new fE(e,r):n==="not-in"?new mE(e,r):n==="array-contains-any"?new gE(e,r):new ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hE(e,r):new dE(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fn(n,this.value)):n!==null&&$t(this.value)===$t(n)&&this.matchesComparison(fn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ve extends Sp{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ve(e,n)}matches(e){return Ip(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Ip(t){return t.op==="and"}function Cp(t){return cE(t)&&Ip(t)}function cE(t){for(const e of t.filters)if(e instanceof Ve)return!1;return!0}function Ho(t){if(t instanceof ne)return t.field.canonicalString()+t.op.toString()+mn(t.value);if(Cp(t))return t.filters.map(e=>Ho(e)).join(",");{const e=t.filters.map(n=>Ho(n)).join(",");return`${t.op}(${e})`}}function xp(t,e){return t instanceof ne?function(n,r){return r instanceof ne&&n.op===r.op&&n.field.isEqual(r.field)&&Qe(n.value,r.value)}(t,e):t instanceof Ve?function(n,r){return r instanceof Ve&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&xp(i,r.filters[o]),!0):!1}(t,e):void M()}function Rp(t){return t instanceof ne?function(e){return`${e.field.canonicalString()} ${e.op} ${mn(e.value)}`}(t):t instanceof Ve?function(e){return e.op.toString()+" {"+e.getFilters().map(Rp).join(" ,")+"}"}(t):"Filter"}class uE extends ne{constructor(e,n,r){super(e,n,r),this.key=D.fromName(r.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.matchesComparison(n)}}class hE extends ne{constructor(e,n){super(e,"in",n),this.keys=Dp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dE extends ne{constructor(e,n){super(e,"not-in",n),this.keys=Dp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Dp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>D.fromName(r.referenceValue))}class pE extends ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return al(n)&&Er(n.arrayValue,this.value)}}class fE extends ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Er(this.value.arrayValue,n)}}class mE extends ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Er(this.value.arrayValue,n)}}class gE extends ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!al(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Er(this.value.arrayValue,r))}}/**
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
 */class yE{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function au(t,e=null,n=[],r=[],s=null,i=null,o=null){return new yE(t,e,n,r,s,i,o)}function ll(t){const e=U(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ho(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),di(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mn(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mn(r)).join(",")),e.ft=n}return e.ft}function cl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ou(t.startAt,e.startAt)&&ou(t.endAt,e.endAt)}function Go(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class xn{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function vE(t,e,n,r,s,i,o,a){return new xn(t,e,n,r,s,i,o,a)}function Np(t){return new xn(t)}function lu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ul(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function pi(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function kp(t){return t.collectionGroup!==null}function rn(t){const e=U(t);if(e.dt===null){e.dt=[];const n=pi(e),r=ul(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new nn(n)),e.dt.push(new nn(Ee.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new nn(Ee.keyField(),i))}}}return e.dt}function st(t){const e=U(t);if(!e._t)if(e.limitType==="F")e._t=au(e.path,e.collectionGroup,rn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of rn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new nn(i.field,o))}const r=e.endAt?new Ns(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ns(e.startAt.position,e.startAt.inclusive):null;e._t=au(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function qo(t,e){e.getFirstInequalityField(),pi(t);const n=t.filters.concat([e]);return new xn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function zo(t,e,n){return new xn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fi(t,e){return cl(st(t),st(e))&&t.limitType===e.limitType}function Op(t){return`${ll(st(t))}|lt:${t.limitType}`}function Ko(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Rp(r)).join(", ")}]`),di(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mn(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mn(r)).join(",")),`Target(${n})`}(st(t))}; limitType=${t.limitType})`}function mi(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):D.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of rn(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=iu(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,rn(n),r)||n.endAt&&!function(s,i,o){const a=iu(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,rn(n),r))}(t,e)}function _E(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Pp(t){return(e,n)=>{let r=!1;for(const s of rn(t)){const i=bE(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function bE(t,e,n){const r=t.field.isKeyField()?D.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),l=o.data.field(s);return a!==null&&l!==null?fn(a,l):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
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
 */class Rn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ur(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ap(this.inner)}size(){return this.innerSize}}/**
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
 */const EE=new Z(D.comparator);function Et(){return EE}const Mp=new Z(D.comparator);function Hn(...t){let e=Mp;for(const n of t)e=e.insert(n.key,n);return e}function wE(t){let e=Mp;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dt(){return Jn()}function Lp(){return Jn()}function Jn(){return new Rn(t=>t.toString(),(t,e)=>t.isEqual(e))}const AE=new _e(D.comparator);function F(...t){let e=AE;for(const n of t)e=e.add(n);return e}const TE=new _e(B);function SE(){return TE}/**
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
 */function jp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ds(e)?"-0":e}}function Fp(t){return{integerValue:""+t}}function IE(t,e){return sE(e)?Fp(e):jp(t,e)}/**
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
 */class gi{constructor(){this._=void 0}}function CE(t,e,n){return t instanceof Wo?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&il(s)&&(s=ol(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof ks?Up(t,e):t instanceof Os?Vp(t,e):function(r,s){const i=RE(r,s),o=cu(i)+cu(r.wt);return $o(i)&&$o(r.wt)?Fp(o):jp(r.serializer,o)}(t,e)}function xE(t,e,n){return t instanceof ks?Up(t,e):t instanceof Os?Vp(t,e):n}function RE(t,e){return t instanceof Qo?$o(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Wo extends gi{}class ks extends gi{constructor(e){super(),this.elements=e}}function Up(t,e){const n=Bp(e);for(const r of t.elements)n.some(s=>Qe(s,r))||n.push(r);return{arrayValue:{values:n}}}class Os extends gi{constructor(e){super(),this.elements=e}}function Vp(t,e){let n=Bp(e);for(const r of t.elements)n=n.filter(s=>!Qe(s,r));return{arrayValue:{values:n}}}class Qo extends gi{constructor(e,n){super(),this.serializer=e,this.wt=n}}function cu(t){return te(t.integerValue||t.doubleValue)}function Bp(t){return al(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function DE(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ks&&r instanceof ks||n instanceof Os&&r instanceof Os?pn(n.elements,r.elements,Qe):n instanceof Qo&&r instanceof Qo?Qe(n.wt,r.wt):n instanceof Wo&&r instanceof Wo}(t.transform,e.transform)}class Ot{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ot}static exists(e){return new Ot(void 0,e)}static updateTime(e){return new Ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ss(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hl{}function $p(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kE(t.key,Ot.none()):new dl(t.key,t.data,Ot.none());{const n=t.data,r=qe.empty();let s=new _e(Ee.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new yi(t.key,r,new ut(s.toArray()),Ot.none())}}function NE(t,e,n){t instanceof dl?function(r,s,i){const o=r.value.clone(),a=hu(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof yi?function(r,s,i){if(!ss(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=hu(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Hp(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Zn(t,e,n,r){return t instanceof dl?function(s,i,o,a){if(!ss(s.precondition,i))return o;const l=s.value.clone(),c=du(s.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof yi?function(s,i,o,a){if(!ss(s.precondition,i))return o;const l=du(s.fieldTransforms,a,i),c=i.data;return c.setAll(Hp(s)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return ss(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function uu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&pn(n,r,(s,i)=>DE(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class dl extends hl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yi extends hl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Hp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hu(t,e,n){const r=new Map;re(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,xE(o,a,n[s]))}return r}function du(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,CE(i,o,e))}return r}class kE extends hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class OE{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&NE(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zn(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zn(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Lp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=$p(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(O.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),F())}isEqual(e){return this.batchId===e.batchId&&pn(this.mutations,e.mutations,(n,r)=>uu(n,r))&&pn(this.baseMutations,e.baseMutations,(n,r)=>uu(n,r))}}/**
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
 */class PE{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ME{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ee,j;function Gp(t){if(t===void 0)return rt("GRPC error has no .code"),E.UNKNOWN;switch(t){case ee.OK:return E.OK;case ee.CANCELLED:return E.CANCELLED;case ee.UNKNOWN:return E.UNKNOWN;case ee.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case ee.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case ee.INTERNAL:return E.INTERNAL;case ee.UNAVAILABLE:return E.UNAVAILABLE;case ee.UNAUTHENTICATED:return E.UNAUTHENTICATED;case ee.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case ee.NOT_FOUND:return E.NOT_FOUND;case ee.ALREADY_EXISTS:return E.ALREADY_EXISTS;case ee.PERMISSION_DENIED:return E.PERMISSION_DENIED;case ee.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case ee.ABORTED:return E.ABORTED;case ee.OUT_OF_RANGE:return E.OUT_OF_RANGE;case ee.UNIMPLEMENTED:return E.UNIMPLEMENTED;case ee.DATA_LOSS:return E.DATA_LOSS;default:return M()}}(j=ee||(ee={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class pl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Zr}static getOrCreateInstance(){return Zr===null&&(Zr=new pl),Zr}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Zr=null;/**
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
 */function LE(){return new TextEncoder}/**
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
 */const jE=new tn([4294967295,4294967295],0);function pu(t){const e=LE().encode(t),n=new $b;return n.update(e),new Uint8Array(n.digest())}function fu(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new tn([n,r],0),new tn([s,i],0)]}class fl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Gn(`Invalid padding: ${n}`);if(r<0)throw new Gn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gn(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Gn(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=tn.fromNumber(this.yt)}Tt(e,n,r){let s=e.add(n.multiply(tn.fromNumber(r)));return s.compare(jE)===1&&(s=new tn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=pu(e),[r,s]=fu(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(r,s,i);if(!this.Et(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=pu(e),[r,s]=fu(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(r,s,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Gn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vi{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Vr.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new vi(O.min(),s,new Z(B),Et(),F())}}class Vr{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Vr(r,n,F(),F(),F())}}/**
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
 */class is{constructor(e,n,r,s){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=s}}class qp{constructor(e,n){this.targetId=e,this.bt=n}}class zp{constructor(e,n,r=be.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class mu{constructor(){this.Vt=0,this.St=yu(),this.Dt=be.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=F(),n=F(),r=F();return this.St.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:M()}}),new Vr(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=yu()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class FE{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Et(),this.jt=gu(),this.zt=new Z(B)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,s)=>{this.Zt(s)&&n(s)})}ee(e){var n;const r=e.targetId,s=e.bt.count,i=this.ne(r);if(i){const o=i.target;if(Go(o))if(s===0){const a=new D(o.path);this.Jt(r,a,ge.newNoDocument(a,O.min()))}else re(s===1);else{const a=this.se(r);if(a!==s){const l=this.ie(e,a);if(l!==0){this.te(r);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,c)}(n=pl.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,d){var p,f,g,v,y,w;const A={localCacheCount:u,existenceFilterCount:d.count},S=d.unchangedNames;return S&&(A.bloomFilter={applied:c===0,hashCount:(p=S==null?void 0:S.hashCount)!==null&&p!==void 0?p:0,bitmapLength:(v=(g=(f=S==null?void 0:S.bits)===null||f===void 0?void 0:f.bitmap)===null||g===void 0?void 0:g.length)!==null&&v!==void 0?v:0,padding:(w=(y=S==null?void 0:S.bits)===null||y===void 0?void 0:y.padding)!==null&&w!==void 0?w:0}),A}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:s}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let l,c;try{l=Bt(i).toUint8Array()}catch(u){if(u instanceof Tp)return dn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new fl(l,o,a)}catch(u){return dn(u instanceof Gn?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.yt===0?1:s!==n-this.re(e.targetId,c)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.At(a)||(this.Jt(e,i,null),s++)}),s}ue(e){const n=new Map;this.Gt.forEach((i,o)=>{const a=this.ne(o);if(a){if(i.current&&Go(a.target)){const l=new D(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,ge.newNoDocument(l,e))}i.kt&&(n.set(o,i.Ot()),i.$t())}});let r=F();this.jt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.ne(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Qt.forEach((i,o)=>o.setReadTime(e));const s=new vi(e,n,this.zt,this.Qt,r);return this.Qt=Et(),this.jt=gu(),this.zt=new Z(B),s}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const s=this.Xt(e);this.ce(e,n)?s.Ft(n,1):s.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new mu,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new _e(B),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new mu),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function gu(){return new Z(D.comparator)}function yu(){return new Z(D.comparator)}const UE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),VE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),BE=(()=>({and:"AND",or:"OR"}))();class $E{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yo(t,e){return t.useProto3Json||di(e)?e:{value:e}}function Xo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kp(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sn(t){return re(!!t),O.fromTimestamp(function(e){const n=bt(e);return new ie(n.seconds,n.nanos)}(t))}function Wp(t,e){return function(n){return new K(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Qp(t){const e=K.fromString(t);return re(Zp(e)),e}function Ji(t,e){const n=Qp(e);if(n.get(1)!==t.databaseId.projectId)throw new x(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(Yp(n))}function Jo(t,e){return Wp(t.databaseId,e)}function HE(t){const e=Qp(t);return e.length===4?K.emptyPath():Yp(e)}function vu(t){return new K(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yp(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function GE(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,c){return l.useProto3Json?(re(c===void 0||typeof c=="string"),be.fromBase64String(c||"")):(re(c===void 0||c instanceof Uint8Array),be.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?E.UNKNOWN:Gp(l.code);return new x(c,l.message||"")}(o);n=new zp(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ji(t,r.document.name),i=sn(r.document.updateTime),o=r.document.createTime?sn(r.document.createTime):O.min(),a=new qe({mapValue:{fields:r.document.fields}}),l=ge.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new is(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ji(t,r.document),i=r.readTime?sn(r.readTime):O.min(),o=ge.newNoDocument(s,i),a=r.removedTargetIds||[];n=new is([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ji(t,r.document),i=r.removedTargetIds||[];n=new is([],i,s,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ME(s,i),a=r.targetId;n=new qp(a,o)}}return n}function qE(t,e){return{documents:[Jo(t,e.path)]}}function zE(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Jo(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jo(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return Jp(Ve.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Qt(u.field),direction:QE(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Yo(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function KE(t){let e=HE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){re(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const d=Xp(u);return d instanceof Ve&&Cp(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new nn(Yt(d.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,di(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(u){const d=!!u.before,p=u.values||[];return new Ns(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const d=!u.before,p=u.values||[];return new Ns(p,d)}(n.endAt)),vE(e,s,o,i,a,"F",l,c)}function WE(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xp(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Yt(e.unaryFilter.field);return ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Yt(e.unaryFilter.field);return ne.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yt(e.unaryFilter.field);return ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Yt(e.unaryFilter.field);return ne.create(i,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):t.fieldFilter!==void 0?function(e){return ne.create(Yt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ve.create(e.compositeFilter.filters.map(n=>Xp(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(t):M()}function QE(t){return UE[t]}function YE(t){return VE[t]}function XE(t){return BE[t]}function Qt(t){return{fieldPath:t.canonicalString()}}function Yt(t){return Ee.fromServerFormat(t.fieldPath)}function Jp(t){return t instanceof ne?function(e){if(e.op==="=="){if(su(e.value))return{unaryFilter:{field:Qt(e.field),op:"IS_NAN"}};if(ru(e.value))return{unaryFilter:{field:Qt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(su(e.value))return{unaryFilter:{field:Qt(e.field),op:"IS_NOT_NAN"}};if(ru(e.value))return{unaryFilter:{field:Qt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qt(e.field),op:YE(e.op),value:e.value}}}(t):t instanceof Ve?function(e){const n=e.getFilters().map(r=>Jp(r));return n.length===1?n[0]:{compositeFilter:{op:XE(e.op),filters:n}}}(t):M()}function Zp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ht{constructor(e,n,r,s,i=O.min(),o=O.min(),a=be.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class JE{constructor(e){this.le=e}}function ZE(t){const e=KE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zo(e,e.limit,"L"):e}/**
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
 */class e1{constructor(){this.sn=new t1}addToCollectionParentIndex(e,n){return this.sn.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(_t.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(_t.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class t1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new _e(K.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _e(K.comparator)).toArray()}}/**
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
 */class gn{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new gn(0)}static kn(){return new gn(-1)}}/**
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
 */class n1{constructor(){this.changes=new Rn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class r1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class s1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Zn(r.mutation,s,ut.empty(),ie.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,F()).next(()=>r))}getLocalViewOfDocuments(e,n,r=F()){const s=Dt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Hn();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,F()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Et();const o=Jn(),a=Jn();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof yi)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Zn(u.mutation,c,u.mutation.getFieldMask(),ie.now())):o.set(c.key,ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new r1(u,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Jn();let s=new Z((o,a)=>o-a),i=F();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||ut.empty();u=a.applyToLocalView(c,u),r.set(l,u);const d=(s.get(a.batchId)||F()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=Lp();u.forEach(p=>{if(!i.has(p)){const f=$p(n.get(p),r.get(p));f!==null&&d.set(p,f),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return D.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):_.resolve(Dt());let a=-1,l=i;return o.next(c=>_.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(u)?_.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{l=l.insert(u,p)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,F())).next(u=>({batchId:a,changes:wE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(r=>{let s=Hn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Hn();return this.indexManager.getCollectionParents(e,s).next(o=>_.forEach(o,a=>{const l=function(c,u){return new xn(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,d)=>{i=i.insert(u,d)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,ge.newInvalidDocument(c)))});let o=Hn();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Zn(c.mutation,l,ut.empty(),ie.now()),mi(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class i1{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return _.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:sn(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:ZE(r.bundledQuery),readTime:sn(r.readTime)}}(n)),_.resolve()}}/**
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
 */class o1{constructor(){this.overlays=new Z(D.comparator),this.hs=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dt();return _.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.de(e,n,i)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hs.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hs.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const s=Dt(),i=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return _.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Z((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Dt(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Dt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return _.resolve(a)}de(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hs.get(s.largestBatchId).delete(r.key);this.hs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new PE(n,r));let i=this.hs.get(n);i===void 0&&(i=F(),this.hs.set(n,i)),this.hs.set(n,i.add(r.key))}}/**
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
 */class ml{constructor(){this.ls=new _e(se.fs),this.ds=new _e(se._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new se(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new se(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new D(new K([])),r=new se(n,e),s=new se(n,e+1),i=[];return this.ds.forEachInRange([r,s],o=>{this.gs(o),i.push(o.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new D(new K([])),r=new se(n,e),s=new se(n,e+1);let i=F();return this.ds.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new se(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class se{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return D.comparator(e.key,n.key)||B(e.Es,n.Es)}static _s(e,n){return B(e.Es,n.Es)||D.comparator(e.key,n.key)}}/**
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
 */class a1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new _e(se.fs)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OE(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new se(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Ps(r),i=s<0?0:s;return _.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new se(n,0),s=new se(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,s],o=>{const a=this.vs(o.Es);i.push(a)}),_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(B);return n.forEach(s=>{const i=new se(s,0),o=new se(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{r=r.add(a.Es)})}),_.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;D.isDocumentKey(i)||(i=i.child(""));const o=new se(new D(i),0);let a=new _e(B);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.Es)),!0)},o),_.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const s=this.vs(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){re(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return _.forEach(n.mutations,s=>{const i=new se(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new se(n,0),s=this.Rs.firstAfterOrEqual(r);return _.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class l1{constructor(e){this.Ss=e,this.docs=new Z(D.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():ge.newInvalidDocument(n))}getEntries(e,n){let r=Et();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ge.newInvalidDocument(s))}),_.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Et();const o=n.path,a=new D(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||tE(eE(u),r)<=0||(s.has(u.key)||mi(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,n,r,s){M()}Ds(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new c1(this)}getSize(e){return _.resolve(this.size)}}class c1 extends n1{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.rs.addEntry(e,s)):this.rs.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class u1{constructor(e){this.persistence=e,this.Cs=new Rn(n=>ll(n),cl),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.xs=0,this.Ns=new ml,this.targetCount=0,this.ks=gn.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,s)=>n(s)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),_.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new gn(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.$n(n),_.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),_.waitFor(i).next(()=>s)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),_.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.Ns.containsKey(n))}}/**
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
 */class h1{constructor(e,n){this.Ms={},this.overlays={},this.Os=new sl(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new u1(this),this.indexManager=new e1,this.remoteDocumentCache=function(r){return new l1(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new JE(n),this.Ls=new i1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new o1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new a1(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const s=new d1(this.Os.next());return this.referenceDelegate.qs(),r(s).next(i=>this.referenceDelegate.Us(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ks(e,n){return _.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class d1 extends rE{constructor(e){super(),this.currentSequenceNumber=e}}class gl{constructor(e){this.persistence=e,this.Gs=new ml,this.Qs=null}static js(e){return new gl(e)}get zs(){if(this.Qs)return this.Qs;throw M()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),_.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(s=>this.zs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.zs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.zs,r=>{const s=D.fromPath(r);return this.Ws(e,s).next(i=>{i||n.removeEntry(s,O.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return _.or([()=>_.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class yl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=s}static Bi(e,n){let r=F(),s=F();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yl(e,n.fromCache,r,s)}}/**
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
 */class p1{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ui(e,n).next(i=>i||this.Ki(e,n,s,r)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(lu(n))return _.resolve(null);let r=st(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=zo(n,null,"F"),r=st(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=F(...i);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Qi(n,a);return this.ji(n,c,o,l.readTime)?this.Ui(e,zo(n,null,"F")):this.zi(e,c,n,l)}))})))}Ki(e,n,r,s){return lu(n)||s.isEqual(O.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(i=>{const o=this.Qi(n,i);return this.ji(n,o,r,s)?this.Gi(e,n):(Jc()<=V.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ko(n)),this.zi(e,o,n,Zb(s,-1)))})}Qi(e,n){let r=new _e(Pp(e));return n.forEach((s,i)=>{mi(e,i)&&(r=r.add(i))}),r}ji(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Gi(e,n){return Jc()<=V.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",Ko(n)),this.qi.getDocumentsMatchingQuery(e,n,_t.min())}zi(e,n,r,s){return this.qi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class f1{constructor(e,n,r,s){this.persistence=e,this.Wi=n,this.serializer=s,this.Hi=new Z(B),this.Ji=new Rn(i=>ll(i),cl),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new s1(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function m1(t,e,n,r){return new f1(t,e,n,r)}async function ef(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=F();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function tf(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function g1(t,e){const n=U(t),r=e.snapshotVersion;let s=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Hi;const a=[];e.targetChanges.forEach((u,d)=>{const p=s.get(d);if(!p)return;a.push(n.Fs.removeMatchingKeys(i,u.removedDocuments,d).next(()=>n.Fs.addMatchingKeys(i,u.addedDocuments,d)));let f=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?f=f.withResumeToken(be.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(d,f),function(g,v,y){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(p,f,u)&&a.push(n.Fs.updateTargetData(i,f))});let l=Et(),c=F();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(y1(i,o,e.documentUpdates).next(u=>{l=u.er,c=u.nr})),!r.isEqual(O.min())){const u=n.Fs.getLastRemoteSnapshotVersion(i).next(d=>n.Fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return _.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Hi=s,i))}function y1(t,e,n){let r=F(),s=F();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Et();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(O.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{er:o,nr:s}})}function v1(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Fs.getTargetData(r,e).next(i=>i?(s=i,_.resolve(s)):n.Fs.allocateTargetId(r).next(o=>(s=new ht(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Hi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function Zo(t,e,n){const r=U(t),s=r.Hi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fr(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(s.target)}function _u(t,e,n){const r=U(t);let s=O.min(),i=F();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=U(a),d=u.Ji.get(c);return d!==void 0?_.resolve(u.Hi.get(d)):u.Fs.getTargetData(l,c)}(r,o,st(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?s:O.min(),n?i:F())).next(a=>(_1(r,_E(e),a),{documents:a,sr:i})))}function _1(t,e,n){let r=t.Yi.get(e)||O.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Yi.set(e,r)}class bu{constructor(){this.activeTargetIds=SE()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class b1{constructor(){this.Wr=new bu,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new bu,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class E1{Jr(e){}shutdown(){}}/**
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
 */class Eu{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let es=null;function Zi(){return es===null?es=268435456+Math.round(2147483648*Math.random()):es++,"0x"+es.toString(16)}/**
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
 */const w1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class A1{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const fe="WebChannelConnection";class T1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,s,i){const o=Zi(),a=this.Io(e,n);R("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,s,i),this.Eo(e,a,l,r).then(c=>(R("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw dn("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}Ao(e,n,r,s,i,o){return this.po(e,n,r,s,i)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Cn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Io(e,n){const r=w1[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,s){const i=Zi();return new Promise((o,a)=>{const l=new Bb;l.setWithCredentials(!0),l.listenOnce(Fb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Yi.NO_ERROR:const u=l.getResponseJson();R(fe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Yi.TIMEOUT:R(fe,`RPC '${e}' ${i} timed out`),a(new x(E.DEADLINE_EXCEEDED,"Request time out"));break;case Yi.HTTP_ERROR:const d=l.getStatus();if(R(fe,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const f=p==null?void 0:p.error;if(f&&f.status&&f.message){const g=function(v){const y=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(y)>=0?y:E.UNKNOWN}(f.status);a(new x(g,f.message))}else a(new x(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new x(E.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{R(fe,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);R(fe,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Ro(e,n,r){const s=Zi(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Lb(),a=jb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new Vb({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");R(fe,`Creating RPC '${e}' stream ${s}: ${c}`,l);const u=o.createWebChannel(c,l);let d=!1,p=!1;const f=new A1({io:v=>{p?R(fe,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(R(fe,`Opening RPC '${e}' stream ${s} transport.`),u.open(),d=!0),R(fe,`RPC '${e}' stream ${s} sending:`,v),u.send(v))},ro:()=>u.close()}),g=(v,y,w)=>{v.listen(y,A=>{try{w(A)}catch(S){setTimeout(()=>{throw S},0)}})};return g(u,Yr.EventType.OPEN,()=>{p||R(fe,`RPC '${e}' stream ${s} transport opened.`)}),g(u,Yr.EventType.CLOSE,()=>{p||(p=!0,R(fe,`RPC '${e}' stream ${s} transport closed`),f.fo())}),g(u,Yr.EventType.ERROR,v=>{p||(p=!0,dn(fe,`RPC '${e}' stream ${s} transport errored:`,v),f.fo(new x(E.UNAVAILABLE,"The operation could not be completed")))}),g(u,Yr.EventType.MESSAGE,v=>{var y;if(!p){const w=v.data[0];re(!!w);const A=w,S=A.error||((y=A[0])===null||y===void 0?void 0:y.error);if(S){R(fe,`RPC '${e}' stream ${s} received error:`,S);const C=S.status;let H=function(Ie){const le=ee[Ie];if(le!==void 0)return Gp(le)}(C),W=S.message;H===void 0&&(H=E.INTERNAL,W="Unknown error status: "+C+" with message "+S.message),p=!0,f.fo(new x(H,W)),u.close()}else R(fe,`RPC '${e}' stream ${s} received:`,w),f._o(w)}}),g(a,Ub.STAT_EVENT,v=>{v.stat===Yc.PROXY?R(fe,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Yc.NOPROXY&&R(fe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{f.lo()},0),f}}function eo(){return typeof document<"u"?document:null}/**
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
 */function _i(t){return new $E(t,!0)}/**
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
 */class nf{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=s,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),s=Math.max(0,n-r);s>0&&R("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class S1{constructor(e,n,r,s,i,o,a,l){this.si=e,this.Mo=r,this.Oo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new nf(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(rt(n.toString()),rt("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.$o===n&&this.Xo(r,s)},r=>{e(()=>{const s=new x(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(s)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(s=>{r(()=>this.Zo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class I1 extends S1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=GE(this.serializer,e),r=function(s){if(!("targetChange"in s))return O.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?O.min():i.readTime?sn(i.readTime):O.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=vu(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;if(o=Go(a)?{documents:qE(s,a)}:{query:zE(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Kp(s,i.resumeToken);const l=Yo(s,i.expectedCount);l!==null&&(o.expectedCount=l)}else if(i.snapshotVersion.compareTo(O.min())>0){o.readTime=Xo(s,i.snapshotVersion.toTimestamp());const l=Yo(s,i.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=WE(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=vu(this.serializer),n.removeTarget=e,this.zo(n)}}/**
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
 */class C1 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.hu=!1}lu(){if(this.hu)throw new x(E.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.po(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(E.UNKNOWN,s.toString())})}Ao(e,n,r,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ao(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(E.UNKNOWN,i.toString())})}terminate(){this.hu=!0}}class x1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(rt(n),this.wu=!1):R("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class R1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{$r(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=U(a);l.Au.add(4),await Br(l),l.Pu.set("Unknown"),l.Au.delete(4),await bi(l)}(this))})}),this.Pu=new x1(r,s)}}async function bi(t){if($r(t))for(const e of t.Ru)await e(!0)}async function Br(t){for(const e of t.Ru)await e(!1)}function rf(t,e){const n=U(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),bl(n)?_l(n):Dn(n).Uo()&&vl(n,e))}function sf(t,e){const n=U(t),r=Dn(n);n.Eu.delete(e),r.Uo()&&of(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():$r(n)&&n.Pu.set("Unknown"))}function vl(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(O.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Dn(t).nu(e)}function of(t,e){t.bu.Lt(e),Dn(t).su(e)}function _l(t){t.bu=new FE({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Dn(t).start(),t.Pu.mu()}function bl(t){return $r(t)&&!Dn(t).qo()&&t.Eu.size>0}function $r(t){return U(t).Au.size===0}function af(t){t.bu=void 0}async function D1(t){t.Eu.forEach((e,n)=>{vl(t,e)})}async function N1(t,e){af(t),bl(t)?(t.Pu.pu(e),_l(t)):t.Pu.set("Unknown")}async function k1(t,e,n){if(t.Pu.set("Online"),e instanceof zp&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wu(t,r)}else if(e instanceof is?t.bu.Wt(e):e instanceof qp?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(O.min()))try{const r=await tf(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.bu.ue(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.Eu.get(l);c&&s.Eu.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,l)=>{const c=s.Eu.get(a);if(!c)return;s.Eu.set(a,c.withResumeToken(be.EMPTY_BYTE_STRING,c.snapshotVersion)),of(s,a);const u=new ht(c.target,a,l,c.sequenceNumber);vl(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await wu(t,r)}}async function wu(t,e,n){if(!Fr(e))throw e;t.Au.add(1),await Br(t),t.Pu.set("Offline"),n||(n=()=>tf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await bi(t)})}async function Au(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=$r(n);n.Au.add(3),await Br(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await bi(n)}async function O1(t,e){const n=U(t);e?(n.Au.delete(2),await bi(n)):e||(n.Au.add(2),await Br(n),n.Pu.set("Unknown"))}function Dn(t){return t.Vu||(t.Vu=function(e,n,r){const s=U(e);return s.lu(),new I1(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{oo:D1.bind(null,t),co:N1.bind(null,t),eu:k1.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),bl(t)?_l(t):t.Pu.set("Unknown")):(await t.Vu.stop(),af(t))})),t.Vu}/**
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
 */class El{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new El(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lf(t,e){if(rt("AsyncQueue",`${e}: ${t}`),Fr(t))return new x(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class on{constructor(e){this.comparator=e?(n,r)=>e(n,r)||D.comparator(n.key,r.key):(n,r)=>D.comparator(n.key,r.key),this.keyedMap=Hn(),this.sortedSet=new Z(this.comparator)}static emptySet(e){return new on(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof on)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new on;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Tu{constructor(){this.Du=new Z(D.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):M():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class yn{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new yn(e,n,on.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class P1{constructor(){this.xu=void 0,this.listeners=[]}}class M1{constructor(){this.queries=new Rn(e=>Op(e),fi),this.onlineState="Unknown",this.Nu=new Set}}async function L1(t,e){const n=U(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new P1),s)try{i.xu=await n.onListen(r)}catch(o){const a=lf(o,`Initialization of query '${Ko(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.ku(n.onlineState),i.xu&&e.Mu(i.xu)&&wl(n)}async function j1(t,e){const n=U(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function F1(t,e){const n=U(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Mu(s)&&(r=!0);o.xu=s}}r&&wl(n)}function U1(t,e,n){const r=U(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function wl(t){t.Nu.forEach(e=>{e.next()})}class V1{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new yn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=yn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class cf{constructor(e){this.key=e}}class uf{constructor(e){this.key=e}}class B1{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=F(),this.mutatedKeys=F(),this.Zu=Pp(e),this.tc=new on(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new Tu,s=n?n.tc:this.tc;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,d)=>{const p=s.get(u),f=mi(this.query,d)?d:null,g=!!p&&this.mutatedKeys.has(p.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;p&&f?p.data.isEqual(f.data)?g!==v&&(r.track({type:3,doc:f}),y=!0):this.ic(p,f)||(r.track({type:2,doc:f}),y=!0,(l&&this.Zu(f,l)>0||c&&this.Zu(f,c)<0)&&(a=!0)):!p&&f?(r.track({type:0,doc:f}),y=!0):p&&!f&&(r.track({type:1,doc:p}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{tc:o,sc:r,ji:a,mutatedKeys:i}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort((c,u)=>function(d,p){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return f(d)-f(p)}(c.type,u.type)||this.Zu(c.doc,u.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,i.length!==0||l?{snapshot:new yn(this.query,e.tc,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Tu,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=F(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new uf(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new cf(r))}),n}ac(e){this.Ju=e.sr,this.Xu=F();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return yn.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class $1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class H1{constructor(e){this.key=e,this.lc=!1}}class G1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Rn(a=>Op(a),fi),this._c=new Map,this.wc=new Set,this.mc=new Z(D.comparator),this.gc=new Map,this.yc=new ml,this.Ic={},this.Tc=new Map,this.Ec=gn.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function q1(t,e){const n=J1(t);let r,s;const i=n.dc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.hc();else{const o=await v1(n.localStore,st(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await z1(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&rf(n.remoteStore,o)}return s}async function z1(t,e,n,r,s){t.Rc=(d,p,f)=>async function(g,v,y,w){let A=v.view.nc(y);A.ji&&(A=await _u(g.localStore,v.query,!1).then(({documents:H})=>v.view.nc(H,A)));const S=w&&w.targetChanges.get(v.targetId),C=v.view.applyChanges(A,g.isPrimaryClient,S);return Iu(g,v.targetId,C.uc),C.snapshot}(t,d,p,f);const i=await _u(t.localStore,e,!0),o=new B1(e,i.sr),a=o.nc(i.documents),l=Vr.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Iu(t,n,c.uc);const u=new $1(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function K1(t,e){const n=U(t),r=n.dc.get(e),s=n._c.get(r.targetId);if(s.length>1)return n._c.set(r.targetId,s.filter(i=>!fi(i,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Zo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),sf(n.remoteStore,r.targetId),ea(n,r.targetId)}).catch(rl)):(ea(n,r.targetId),await Zo(n.localStore,r.targetId,!0))}async function hf(t,e){const n=U(t);try{const r=await g1(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.gc.get(i);o&&(re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.lc=!0:s.modifiedDocuments.size>0?re(o.lc):s.removedDocuments.size>0&&(re(o.lc),o.lc=!1))}),await pf(n,r,e)}catch(r){await rl(r)}}function Su(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.dc.forEach((i,o)=>{const a=o.view.ku(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=U(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const d of u.listeners)d.ku(o)&&(l=!0)}),l&&wl(a)}(r.eventManager,e),s.length&&r.fc.eu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function W1(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.gc.get(e),i=s&&s.key;if(i){let o=new Z(D.comparator);o=o.insert(i,ge.newNoDocument(i,O.min()));const a=F().add(i),l=new vi(O.min(),new Map,new Z(B),o,a);await hf(r,l),r.mc=r.mc.remove(i),r.gc.delete(e),Al(r)}else await Zo(r.localStore,e,!1).then(()=>ea(r,e,n)).catch(rl)}function ea(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||df(t,r)})}function df(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(sf(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Al(t))}function Iu(t,e,n){for(const r of n)r instanceof cf?(t.yc.addReference(r.key,e),Q1(t,r)):r instanceof uf?(R("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||df(t,r.key)):M()}function Q1(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(R("SyncEngine","New document in limbo: "+n),t.wc.add(r),Al(t))}function Al(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new D(K.fromString(e)),r=t.Ec.next();t.gc.set(r,new H1(n)),t.mc=t.mc.insert(n,r),rf(t.remoteStore,new ht(st(Np(n.path)),r,"TargetPurposeLimboResolution",sl.ct))}}async function pf(t,e,n){const r=U(t),s=[],i=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=yl.Bi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fc.eu(s),await async function(a,l){const c=U(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(l,d=>_.forEach(d.$i,p=>c.persistence.referenceDelegate.addReference(u,d.targetId,p)).next(()=>_.forEach(d.Fi,p=>c.persistence.referenceDelegate.removeReference(u,d.targetId,p)))))}catch(u){if(!Fr(u))throw u;R("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const p=c.Hi.get(d),f=p.snapshotVersion,g=p.withLastLimboFreeSnapshotVersion(f);c.Hi=c.Hi.insert(d,g)}}}(r.localStore,i))}async function Y1(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await ef(n.localStore,e);n.currentUser=e,function(s,i){s.Tc.forEach(o=>{o.forEach(a=>{a.reject(new x(E.CANCELLED,i))})}),s.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pf(n,r.tr)}}function X1(t,e){const n=U(t),r=n.gc.get(e);if(r&&r.lc)return F().add(r.key);{let s=F();const i=n._c.get(e);if(!i)return s;for(const o of i){const a=n.dc.get(o);s=s.unionWith(a.view.ec)}return s}}function J1(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=X1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=W1.bind(null,e),e.fc.eu=F1.bind(null,e.eventManager),e.fc.vc=U1.bind(null,e.eventManager),e}class Cu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=_i(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return m1(this.persistence,new p1,e.initialUser,this.serializer)}createPersistence(e){return new h1(gl.js,this.serializer)}createSharedClientState(e){return new b1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Z1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Su(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Y1.bind(null,this.syncEngine),await O1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new M1}createDatastore(e){const n=_i(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new T1(s));var s;return function(i,o,a,l){return new C1(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Su(this.syncEngine,a,0),o=Eu.D()?new Eu:new E1,new R1(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,l,c){const u=new G1(r,s,i,o,a,l);return c&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);R("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Br(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class ew{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):rt("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class tw{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=me.UNAUTHENTICATED,this.clientId=Xb.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{R("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(R("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function to(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ef(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function xu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rw(t);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Au(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Au(e.remoteStore,i)),t._onlineComponents=e}function nw(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function rw(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await to(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!nw(n))throw n;dn("Error using user provided cache. Falling back to memory cache: "+n),await to(t,new Cu)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await to(t,new Cu);return t._offlineComponents}async function sw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await xu(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await xu(t,new Z1))),t._onlineComponents}async function iw(t){const e=await sw(t),n=e.eventManager;return n.onListen=q1.bind(null,e.syncEngine),n.onUnlisten=K1.bind(null,e.syncEngine),n}function ow(t,e,n={}){const r=new kt;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,l){const c=new ew({next:d=>{i.enqueueAndForget(()=>j1(s,u)),d.fromCache&&a.source==="server"?l.reject(new x(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new V1(o,c,{includeMetadataChanges:!0,Uu:!0});return L1(s,u)}(await iw(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const Ru=new Map;/**
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
 */function aw(t,e,n){if(!n)throw new x(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lw(t,e,n,r){if(e===!0&&r===!0)throw new x(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Du(t){if(D.isDocumentKey(t))throw new x(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ei(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function ta(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ei(t);throw new x(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Nu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Tl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Hb;switch(n.type){case"firstParty":return new Kb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ru.get(e);n&&(R("ComponentProvider","Removing Datastore"),Ru.delete(e),n.terminate())}(this),Promise.resolve()}}function cw(t,e,n,r={}){var s;const i=(t=ta(t,Tl))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&dn("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=me.MOCK_USER;else{o=qy(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new x(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new me(l)}t._authCredentials=new Gb(new wp(o,a))}}/**
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
 */class it{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class Gt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gt(this.firestore,e,this._query)}}class an extends Gt{constructor(e,n,r){super(e,n,Np(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new D(e))}withConverter(e){return new an(this.firestore,e,this._path)}}function uw(t,e,...n){if(t=un(t),aw("collection","path",e),t instanceof Tl){const r=K.fromString(e,...n);return Du(r),new an(t,null,r)}{if(!(t instanceof it||t instanceof an))throw new x(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(K.fromString(e,...n));return Du(r),new an(t.firestore,null,r)}}/**
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
 */class hw{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new nf(this,"async_queue_retry"),this.Yc=()=>{const n=eo();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=eo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=eo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new kt;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Fr(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw rt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const s=El.createAndSchedule(this,e,n,r,i=>this.ea(i));return this.jc.push(s),s}Xc(){this.zc&&M()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class ff extends Tl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new hw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mf(this),this._firestoreClient.terminate()}}function dw(t,e){const n=typeof t=="object"?t:qh(),r=typeof t=="string"?t:e||"(default)",s=xr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=$y("firestore");i&&cw(s,...i)}return s}function pw(t){return t._firestoreClient||mf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mf(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,l,c){return new oE(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new tw(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
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
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(be.fromBase64String(e))}catch(n){throw new x(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vn(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yf{constructor(e){this._methodName=e}}/**
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
 */class Sl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}}/**
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
 */const fw=/^__.*__$/;function vf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Il{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Il(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ca({path:r,ha:!1});return s.la(e),s}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ca({path:r,ha:!1});return s.oa(),s}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return na(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(vf(this.ua)&&fw.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class mw{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_i(e)}ga(e,n,r,s=!1){return new Il({ua:e,methodName:n,ma:r,path:Ee.emptyPath(),ha:!1,wa:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gw(t){const e=t._freezeSettings(),n=_i(t._databaseId);return new mw(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yw(t,e,n,r=!1){return Cl(n,t.ga(r?4:3,e))}function Cl(t,e){if(_f(t=un(t)))return _w("Unsupported field value:",e,t),vw(t,e);if(t instanceof yf)return function(n,r){if(!vf(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Cl(o,r.da(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=un(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return IE(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ie.fromDate(n);return{timestampValue:Xo(r.serializer,s)}}if(n instanceof ie){const s=new ie(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Xo(r.serializer,s)}}if(n instanceof Sl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof vn)return{bytesValue:Kp(r.serializer,n._byteString)};if(n instanceof it){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Wp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Ei(n)}`)}(t,e)}function vw(t,e){const n={};return Ap(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ur(t,(r,s)=>{const i=Cl(s,e.aa(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function _f(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ie||t instanceof Sl||t instanceof vn||t instanceof it||t instanceof yf)}function _w(t,e,n){if(!_f(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ei(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}const bw=new RegExp("[~\\*/\\[\\]]");function Ew(t,e,n){if(e.search(bw)>=0)throw na(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gf(...e.split("."))._internalPath}catch{throw na(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function na(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new x(E.INVALID_ARGUMENT,a+t+l)}/**
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
 */class bf{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ww(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ww extends bf{data(){return super.data()}}function xl(t,e){return typeof e=="string"?Ew(t,e):e instanceof gf?e._internalPath:e._delegate._internalPath}/**
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
 */function Aw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rl{}class Ef extends Rl{}function Tw(t,e,...n){let r=[];e instanceof Rl&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof Nl).length,o=s.filter(a=>a instanceof Dl).length;if(i>1||i>0&&o>0)throw new x(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Dl extends Ef{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Dl(e,n,r)}_apply(e){const n=this._parse(e);return wf(e._query,n),new Gt(e.firestore,e.converter,qo(e._query,n))}_parse(e){const n=gw(e.firestore);return function(s,i,o,a,l,c,u){let d;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new x(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Ou(u,c);const p=[];for(const f of u)p.push(ku(a,s,f));d={arrayValue:{values:p}}}else d=ku(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Ou(u,c),d=yw(o,i,u,c==="in"||c==="not-in");return ne.create(l,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Nl extends Rl{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Nl(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ve.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)wf(i,a),i=qo(i,a)}(e._query,n),new Gt(e.firestore,e.converter,qo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kl extends Ef{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new kl(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new x(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new x(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new nn(s,i);return function(a,l){if(ul(a)===null){const c=pi(a);c!==null&&Af(a,c,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new Gt(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new xn(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Sw(t,e="asc"){const n=e,r=xl("orderBy",t);return kl._create(r,n)}function ku(t,e,n){if(typeof(n=un(n))=="string"){if(n==="")throw new x(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kp(e)&&n.indexOf("/")!==-1)throw new x(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(K.fromString(n));if(!D.isDocumentKey(r))throw new x(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return nu(t,new D(r))}if(n instanceof it)return nu(t,n._key);throw new x(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ei(n)}.`)}function Ou(t,e){if(!Array.isArray(t)||t.length===0)throw new x(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wf(t,e){if(e.isInequality()){const r=pi(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new x(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=ul(t);i!==null&&Af(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Af(t,e,n){if(!n.isEqual(e))throw new x(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Iw{convertValue(e,n="none"){switch($t(e)){case 0:return null;case 1:return e.booleanValue;case 2:return te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ur(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Sl(te(e.latitude),te(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ol(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_r(e));default:return null}}convertTimestamp(e){const n=bt(e);return new ie(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=K.fromString(e);re(Zp(r));const s=new br(r.get(1),r.get(3)),i=new D(r.popFirst(5));return s.isEqual(n)||rt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class ts{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cw extends bf{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new os(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class os extends Cw{data(e={}){return super.data(e)}}class xw{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ts(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new os(this._firestore,this._userDataWriter,r.key,r,new ts(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new os(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ts(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new os(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ts(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:Rw(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Rw(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class Dw extends Iw{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function Nw(t){t=ta(t,Gt);const e=ta(t.firestore,ff),n=pw(e),r=new Dw(e);return Aw(t._query),ow(n,t._query).then(s=>new xw(e,r,t,s))}(function(t,e=!0){(function(n){Cn=n})(Xv),vt(new tt("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new ff(new qb(n.getProvider("auth-internal")),new Qb(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new br(a.options.projectId,l)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Ke(Xc,"3.11.0",t),Ke(Xc,"3.11.0","esm2017")})();const kw={apiKey:"AIzaSyDnXUnucMzBtgYnSPBKUv4S2acxyCi8Tkk",authDomain:"reel-talent-5ef72.firebaseapp.com",projectId:"reel-talent-5ef72",storageBucket:"reel-talent-5ef72.appspot.com",messagingSenderId:"80043393311",appId:"1:80043393311:web:43f2be04b4bbe841a0702a",measurementId:"G-3RJ1S1E46Q"},Ol=Gh(kw),Ow=M0(Ol),Pw=dw(Ol),Mw="/assets/paint_strokes-bb4cea45.svg",Lw=()=>{const[t,e]=m.useState([]),n=m.useMemo(()=>uw(Pw,"posts"),[]),[r,s]=m.useState(!1),[i,o]=m.useState(!0);return m.useEffect(()=>{(async()=>{try{const l=Tw(n,Sw("published_date","desc")),c=await Nw(l);e(c.docs),o(!1)}catch(l){console.error(l),s(!0),o(!1)}})()},[n]),i?h.jsx(Lh,{}):r?h.jsx(Ks,{}):h.jsx("div",{children:h.jsxs("section",{className:"blog__main",children:[h.jsxs("div",{className:"blog__header",children:[" ",h.jsx("h3",{className:"blog__heading3",children:"the reel blog"}),h.jsxs("div",{className:"blog__heading-container",children:[h.jsx("h2",{className:"blog__heading2",children:"Writings from our team"}),h.jsx("img",{src:Mw,className:"paint__strokes",height:30,alt:""})]}),h.jsx("h4",{className:"blog__heading4",children:"Stay informed with Reel Talent blog's latest industry news, including best hiring practices."})]}),h.jsx("div",{className:"card card__main",children:t.map(a=>h.jsxs("div",{className:"row mb-3 blog__cardContainer",children:[h.jsx("div",{className:"col-md-8 col-sm-12 listing__description",children:h.jsxs("div",{className:"card-body",children:[h.jsxs(X,{to:`/blog/${a.data().title}`,state:{post:a.data()},children:[h.jsxs("div",{className:"d-flex justify-content-between",children:[h.jsxs("span",{className:"card-text",children:[a.data().author," • "]}),h.jsx("span",{className:"card-text",children:new Date(a.data().published_date.toDate()).toLocaleDateString("default",{month:"short",day:"numeric",year:"numeric"})})]}),h.jsx("h5",{className:"card-title post__title",children:a.data().title})]}),h.jsx("p",{className:"card-text post__summary",children:a.data().summary})]})}),h.jsx("div",{className:"col-md-4 col-sm-12 align-self-center ",children:h.jsx(X,{to:`/blog/${a.data().title}`,state:{post:a.data()},children:h.jsx("img",{src:a.data().image_url,className:"card-img-top ",alt:"..."})})})]},a.id))})]})})};const jw=()=>{const e=An().state.post,[n,r]=m.useState(!0),[s,i]=m.useState(!1);if(m.useEffect(()=>{e.hasOwnProperty("body")?r(!1):(r(!1),i(!0))},[e]),n)return h.jsx(h.Fragment,{children:h.jsx(Lh,{})});if(s)return h.jsx(Ks,{});const a=e.body.join(" ").split(" ").length,c=Math.ceil(a/250);return h.jsx("div",{children:h.jsx("section",{className:"blogPost__main",children:h.jsxs("div",{className:"blogPost_wrapper",children:[h.jsxs(X,{className:"blogPost__back",to:"/blog",children:[h.jsx(Cy,{})," blog"]}),h.jsxs("div",{className:"blogPost__header",children:[h.jsx("h1",{children:e.title}),h.jsx("img",{className:"blogPost__image",src:e.image_url,alt:e.title}),h.jsx("div",{className:"blogPost__pg blogPost__readTime",children:h.jsxs("p",{children:[`${c} ${c===1?"min":"mins"}`," ","read time"]})}),h.jsx("div",{style:{backgroundColor:"forestgreen",height:"1px",width:"50%",margin:"auto"}})]}),h.jsxs("div",{className:"blogPost__body",children:[e.body.map((u,d)=>h.jsx("p",{className:"blogPost__pg",children:u},d)),h.jsxs("div",{className:"author__container",children:[h.jsx(X,{to:e.linkedin_link,children:h.jsx("img",{className:"blogPost__authorImg",src:e.author_image,alt:"author"})}),h.jsx("span",{children:h.jsxs(X,{to:e.linkedin_link,className:"blogPost__pg",children:[h.jsxs("p",{children:[" ",e.author]}),h.jsx("p",{children:new Date(e.published_date.seconds*1e3).toLocaleDateString("default",{month:"short",day:"numeric",year:"numeric"})}),h.jsx(xy,{className:"author__social"})]})})]})]})]})})})};const Fw="/assets/legal-graphic-8ff34930.svg",Uw=()=>h.jsxs(h.Fragment,{children:[h.jsxs("figure",{className:"legal__img__container",children:[h.jsx("img",{src:Fw,alt:"graphic of man sitting on legal documents",className:"legal__img"})," ",h.jsx("figcaption",{className:"legal__img__text",children:"Legal"})]}),h.jsxs("section",{id:"terms__conditions",className:"legal__container",children:[h.jsx("h2",{className:"terms__title",children:"Terms and Conditions"}),h.jsx("p",{className:"legal__pg",children:`The following terms and conditions (collectively, these "Terms and Conditions") apply to your use of Reel Talent's website, including any content, functionality, and services offered (the "Website"). By using the Website, you accept and agree to be bound by these Terms and Conditions. These Terms and Conditions are effective as of September 12, 2022 and may be updated without notice to you. or through any such web sites or services.`}),h.jsx("p",{className:"legal__pg",children:"You are solely responsible for your conduct on the Website and must comply with all applicable laws and regulations. You may not post or distribute any content that is illegal, threatening, abusive, or violates the rights of others. We do not endorse any user-generated content and have the right to remove it if it does not comply with these Terms and Conditions."}),h.jsx("p",{className:"legal__pg",children:"The content on the Website is protected by copyrights, trademarks, and other proprietary rights, and is the property of Reel Talent. You may only use the content with written permission from Reel Talent or the specific content provider."}),h.jsx("p",{className:"legal__pg",children:"Reel Talent its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements."}),h.jsx("p",{className:"legal__pg",children:"The Website may link to other sites not under Reel Talent's control, and Reel Talent is not responsible for the content or accuracy of those sites. Your use of the Website is at your own risk and Reel Talent disclaims all warranties and limitations of liability. You agree to indemnify and hold Reel Talent harmless from any claims arising from your use of the Website."})]}),h.jsxs("section",{id:"privacy",className:"privacy__container",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"terms__title",children:"Privacy Policy"}),h.jsx("p",{className:"legal__pg",children:"Reel Talent is committed to protecting the privacy and security of personal data collected from our website visitors and job applicants. This Privacy Policy governs the collection, use, and disclosure of personal data by Reel Talent."})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"terms__title",children:"Data Collection "})," ",h.jsx("p",{className:"legal__pg",children:"Reel Talent collects personal data from visitors to our website who fill out forms requesting sales information. The personal data we collect may include but is not limited to your name, email address, telephone number, and resume information."})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"terms__title",children:"Cookie Notice"}),h.jsx("p",{className:"legal__pg",children:"Reel Talent uses cookies and similar technology to gather data from visitors to our website. This information helps us to improve the user experience and understand how our website is being used."})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"terms__title",children:"Personal Data"}),h.jsx("p",{className:"legal__pg",children:"Reel Talent will not sell, trade or otherwise disclose personal data collected from our website to third parties except as necessary to provide services requested by visitors or to comply with legal requirements."})]})]})]});const Vw="/assets/Bobby_profile-1a2811f7.jpg",Bw="/assets/Nick_profile-aad508a4.jpg",$w=()=>{const t=[{text:"I had the pleasure of working with Nick previously, and we partnered together to help scale the company over the last year. Nick is a very passionate individual who brings a unique perspective to recruiting! His empathy, expertise, and strong dedication to creating a seamless and unforgettable candidate experience is like no other. Nick would make an incredible addition to any organization!",author:"Fatima Vejzović"},{text:"I met Nick when I did a project for the company he was working at. After finishing that project, I asked him to help guide me through the phases of the job recruitment process. Nick went above and beyond during this process to help me. In addition to helping me find a job, Nick was a constant mentor to me. He never hesitated to share his insights with me and was a calming voice of reason many times. Along the way, I got to know Nick -- he's an amazing human being who cares about the people he is trying help. It was always extremely easy to connect with Nick. I never felt like I was talking to a recruiter; I always felt like I was talking to a friend. This all speaks to the fact that he has years of experience in his industry. He knows what he's talking about and he excels at connecting with people. I'm glad to call Nick a friend and can't speak highly enough about him.",author:"Shivaen Ahuja"}],e="Bobby is a multi-talented professional who combines his technical expertise with strong people skills. As the Head Engineer and Talent Manager, Bobby is passionate about building high-performing teams and fostering a culture of innovation. He is dedicated to creating a supportive environment where team members can thrive and achieve their full potential";return h.jsxs(h.Fragment,{children:[h.jsx("h2",{className:"meetTeamHeader",children:"Meet the Team"}),h.jsxs("div",{className:"team",children:[h.jsxs("div",{className:"team-member",children:[h.jsx("img",{src:Bw,alt:"Nick Starkey",className:"team-member__image"}),h.jsx("h3",{children:"Nick Starkey"}),h.jsx("p",{className:"team-member__role",children:"Our Head Recruiter"}),h.jsxs("p",{className:"team-member__quote",children:[t[0].text," ",h.jsx("br",{}),h.jsxs("span",{className:"team-memeber__author",children:["- ",t[0].author]})]}),h.jsxs("p",{className:"team-member__quote",children:[t[1].text," ",h.jsx("br",{}),h.jsxs("span",{className:"team-memeber__author",children:["- ",t[1].author]})]})]}),h.jsxs("div",{className:"team-member",children:[h.jsx("img",{src:Vw,alt:"Bobby Woody",className:"team-member__image"}),h.jsx("h3",{children:"Bobby Woody"}),h.jsx("p",{className:"team-member__role",children:"Our Head Engineer"}),h.jsx("p",{className:"team-member__description",children:e})]})]})]})},Hw="/assets/pexels-mizuno-k-12903281-f290a531.jpg",Gw="/assets/pexels-fauxels-3184300-b80243d6.jpg",qw="/assets/pexels-fauxels-3183172-c765aa9d.jpg",zw=()=>h.jsx(h.Fragment,{children:h.jsxs("section",{className:"about__page",children:[h.jsxs("section",{className:"about__section",children:[h.jsx("h1",{className:"about__title",children:"Expertly Connecting Talent with Opportunities"}),h.jsx("p",{className:"about__description",children:"Reel Talent is a recruiting company that aims to make hiring easy for businesses. We believe in transparency and strive to put it at the forefront of everything we do. Our goal is to provide a seamless and efficient hiring process that helps companies find the best talent for their needs. With Reel Talent, you can rest assured that you'll find the right fit for your organization."})]}),h.jsx($w,{}),h.jsxs("section",{className:"card__section",children:[h.jsxs("div",{className:"about__card",children:[h.jsx("img",{src:Hw,alt:"Transparency",className:"about__img"}),h.jsx("h2",{className:"card__title ",children:"Transparency"}),h.jsx("p",{className:"card__text  about__description",children:"We believe in being transparent in all our dealings with our clients and job seekers."})]}),h.jsxs("div",{className:"about__card",children:[h.jsx("img",{src:Gw,alt:"Efficiency",className:"about__img"}),h.jsx("h2",{className:"card__title ",children:"Efficiency"}),h.jsx("p",{className:"card__text  about__description",children:"Our goal is to provide a seamless and efficient hiring process for businesses."})]}),h.jsxs("div",{className:"about__card ",children:[h.jsx("img",{src:qw,alt:"Finding the Right Fit",className:"about__img"}),h.jsx("h2",{className:"card__title ",children:"Finding the Right Fit"}),h.jsx("p",{className:"card__text about__description",children:"We strive to help businesses find the best talent for their needs, ensuring a good fit for both the company and the job seeker."})]})]})]})});function Kw(t){return Cr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"}}]})(t)}function Ww(t){return Cr({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"}}]})(t)}function Qw(t){return Cr({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"}}]})(t)}const Yw="/assets/AI-CTA-05e6e95d.svg",Xw=()=>h.jsx(h.Fragment,{children:h.jsxs("section",{className:"solutions",children:[h.jsx("section",{className:"solutions__intro",children:h.jsxs("div",{class:"tagline-container",children:[h.jsx("h1",{class:"tagline",children:"AI-Powered Solutions for Extraordinary Outcomes"}),h.jsxs("p",{className:"tagline__pg",children:[" ","Real Talent partners with Team AI to provide cutting-edge tools and technologies that enhance our recruitment process, ensuring the best match between candidates and employers."]})]})}),h.jsxs("section",{className:"solutions__features-container",children:[h.jsxs("div",{className:"solutions__feature-card",children:[h.jsx("div",{className:"solutions__feature-icon",children:h.jsx(Qw,{})}),h.jsx("h4",{className:"solutions__feature-title",children:"Expert Talent Matching"}),h.jsx("p",{className:"solutions__feature-description",children:"Our AI-powered system matches the best candidates with your company culture and job requirements."})]}),h.jsxs("div",{className:"solutions__feature-card",children:[h.jsx("div",{className:"solutions__feature-icon",children:h.jsx(Kw,{})}),h.jsx("h4",{className:"solutions__feature-title",children:"Data-Driven Decisions"}),h.jsx("p",{className:"solutions__feature-description",children:"Our analytics help you make informed decisions about your recruitment process."})]}),h.jsxs("div",{className:"solutions__feature-card",children:[h.jsx("div",{className:"solutions__feature-icon",children:h.jsx(Ww,{})}),h.jsx("h4",{className:"solutions__feature-title",children:"Innovative Technology"}),h.jsx("p",{className:"solutions__feature-description",children:"Our technology provides cutting-edge solutions for your talent acquisition needs."})]})]}),h.jsx("section",{className:"cta",children:h.jsxs("div",{className:"cta__container",children:[h.jsxs("div",{className:"cta__link",children:[h.jsx("h3",{className:"cta__tagline",children:"Discover the Future of Hiring with Our AI-Powered Platform"}),h.jsx(X,{to:"/demo",children:h.jsx("button",{className:"cta__button",children:"Contact Us"})})]}),h.jsx("img",{className:"cta__logo",src:Yw,alt:"",width:500})]})})]})}),Jw=[{path:"/",element:h.jsx($e,{path:"/",element:h.jsx(cy,{})})},{path:"/demo",element:h.jsx($e,{path:"/demo",element:h.jsx(Ny,{})})},{path:"/",element:h.jsx($e,{path:"/about",element:h.jsx(zw,{})})},{path:"/legal",element:h.jsx($e,{path:"/legal",element:h.jsx(Uw,{})})},{path:"/blog",element:h.jsx($e,{path:"/blog",element:h.jsx(Lw,{})})},{path:"/blog/:title",element:h.jsx($e,{path:"/blog/:title",element:h.jsx(jw,{})})},{path:"/solutions",element:h.jsx($e,{path:"/solutions",element:h.jsx(Xw,{})})},{path:"404",element:h.jsx($e,{path:"404",element:h.jsx(Ks,{})})},{path:"*",element:h.jsx($e,{path:"*",element:h.jsx(Im,{to:"404"})})}];var Tf={exports:{}},Zw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",eA=Zw,tA=eA;function Sf(){}function If(){}If.resetWarningCache=Sf;var nA=function(){function t(r,s,i,o,a,l){if(l!==tA){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:If,resetWarningCache:Sf};return n.PropTypes=n,n};Tf.exports=nA();var rA=Tf.exports;const G=Ms(rA);function sA(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Cf=m,iA=sA(Cf);function Pu(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function oA(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var aA=!!(typeof window<"u"&&window.document&&window.document.createElement);function lA(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(s){return s.displayName||s.name||"Component"}return function(i){if(typeof i!="function")throw new Error("Expected WrappedComponent to be a React component.");var o=[],a;function l(){a=t(o.map(function(u){return u.props})),c.canUseDOM?e(a):n&&(a=n(a))}var c=function(u){oA(d,u);function d(){return u.apply(this,arguments)||this}d.peek=function(){return a},d.rewind=function(){if(d.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var g=a;return a=void 0,o=[],g};var p=d.prototype;return p.UNSAFE_componentWillMount=function(){o.push(this),l()},p.componentDidUpdate=function(){l()},p.componentWillUnmount=function(){var g=o.indexOf(this);o.splice(g,1),l()},p.render=function(){return iA.createElement(i,this.props)},d}(Cf.PureComponent);return Pu(c,"displayName","SideEffect("+r(i)+")"),Pu(c,"canUseDOM",aA),c}}var cA=lA;const uA=Ms(cA);var hA=typeof Element<"u",dA=typeof Map=="function",pA=typeof Set=="function",fA=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function as(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,s;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!as(t[r],e[r]))return!1;return!0}var i;if(dA&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!as(r.value[1],e.get(r.value[0])))return!1;return!0}if(pA&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(fA&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(s=Object.keys(t),n=s.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,s[r]))return!1;if(hA&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((s[r]==="_owner"||s[r]==="__v"||s[r]==="__o")&&t.$$typeof)&&!as(t[s[r]],e[s[r]]))return!1;return!0}return t!==t&&e!==e}var mA=function(e,n){try{return as(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const gA=Ms(mA);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Mu=Object.getOwnPropertySymbols,yA=Object.prototype.hasOwnProperty,vA=Object.prototype.propertyIsEnumerable;function _A(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function bA(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(i){return e[i]});if(r.join("")!=="0123456789")return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach(function(i){s[i]=i}),Object.keys(Object.assign({},s)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var EA=bA()?Object.assign:function(t,e){for(var n,r=_A(t),s,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var o in n)yA.call(n,o)&&(r[o]=n[o]);if(Mu){s=Mu(n);for(var a=0;a<s.length;a++)vA.call(n,s[a])&&(r[s[a]]=n[s[a]])}}return r};const wA=Ms(EA);var Pt={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},k={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(k).map(function(t){return k[t]});var q={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Ps={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},wr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},AA=Object.keys(Ps).reduce(function(t,e){return t[Ps[e]]=e,t},{}),TA=[k.NOSCRIPT,k.SCRIPT,k.STYLE],je="data-react-helmet",SA=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},IA=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},CA=function(){function t(e,n){for(var r=0;r<n.length;r++){var s=n[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Ae=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xA=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Lu=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},RA=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},ra=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},DA=function(e){var n=ln(e,k.TITLE),r=ln(e,wr.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var s=ln(e,wr.DEFAULT_TITLE);return n||s||void 0},NA=function(e){return ln(e,wr.ON_CHANGE_CLIENT_STATE)||function(){}},no=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,s){return Ae({},r,s)},{})},kA=function(e,n){return n.filter(function(r){return typeof r[k.BASE]<"u"}).map(function(r){return r[k.BASE]}).reverse().reduce(function(r,s){if(!r.length)for(var i=Object.keys(s),o=0;o<i.length;o++){var a=i[o],l=a.toLowerCase();if(e.indexOf(l)!==-1&&s[l])return r.concat(s)}return r},[])},jn=function(e,n,r){var s={};return r.filter(function(i){return Array.isArray(i[e])?!0:(typeof i[e]<"u"&&LA("Helmet: "+e+' should be of type "Array". Instead found type "'+SA(i[e])+'"'),!1)}).map(function(i){return i[e]}).reverse().reduce(function(i,o){var a={};o.filter(function(p){for(var f=void 0,g=Object.keys(p),v=0;v<g.length;v++){var y=g[v],w=y.toLowerCase();n.indexOf(w)!==-1&&!(f===q.REL&&p[f].toLowerCase()==="canonical")&&!(w===q.REL&&p[w].toLowerCase()==="stylesheet")&&(f=w),n.indexOf(y)!==-1&&(y===q.INNER_HTML||y===q.CSS_TEXT||y===q.ITEM_PROP)&&(f=y)}if(!f||!p[f])return!1;var A=p[f].toLowerCase();return s[f]||(s[f]={}),a[f]||(a[f]={}),s[f][A]?!1:(a[f][A]=!0,!0)}).reverse().forEach(function(p){return i.push(p)});for(var l=Object.keys(a),c=0;c<l.length;c++){var u=l[c],d=wA({},s[u],a[u]);s[u]=d}return i},[]).reverse()},ln=function(e,n){for(var r=e.length-1;r>=0;r--){var s=e[r];if(s.hasOwnProperty(n))return s[n]}return null},OA=function(e){return{baseTag:kA([q.HREF,q.TARGET],e),bodyAttributes:no(Pt.BODY,e),defer:ln(e,wr.DEFER),encode:ln(e,wr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:no(Pt.HTML,e),linkTags:jn(k.LINK,[q.REL,q.HREF],e),metaTags:jn(k.META,[q.NAME,q.CHARSET,q.HTTPEQUIV,q.PROPERTY,q.ITEM_PROP],e),noscriptTags:jn(k.NOSCRIPT,[q.INNER_HTML],e),onChangeClientState:NA(e),scriptTags:jn(k.SCRIPT,[q.SRC,q.INNER_HTML],e),styleTags:jn(k.STYLE,[q.CSS_TEXT],e),title:DA(e),titleAttributes:no(Pt.TITLE,e)}},sa=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){sa(e)},0)}}(),ju=function(e){return clearTimeout(e)},PA=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||sa:global.requestAnimationFrame||sa,MA=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ju:global.cancelAnimationFrame||ju,LA=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},Fn=null,jA=function(e){Fn&&MA(Fn),e.defer?Fn=PA(function(){Fu(e,function(){Fn=null})}):(Fu(e),Fn=null)},Fu=function(e,n){var r=e.baseTag,s=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,p=e.title,f=e.titleAttributes;ia(k.BODY,s),ia(k.HTML,i),FA(p,f);var g={baseTag:Wt(k.BASE,r),linkTags:Wt(k.LINK,o),metaTags:Wt(k.META,a),noscriptTags:Wt(k.NOSCRIPT,l),scriptTags:Wt(k.SCRIPT,u),styleTags:Wt(k.STYLE,d)},v={},y={};Object.keys(g).forEach(function(w){var A=g[w],S=A.newTags,C=A.oldTags;S.length&&(v[w]=S),C.length&&(y[w]=g[w].oldTags)}),n&&n(),c(e,v,y)},xf=function(e){return Array.isArray(e)?e.join(""):e},FA=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=xf(e)),ia(k.TITLE,n)},ia=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var s=r.getAttribute(je),i=s?s.split(","):[],o=[].concat(i),a=Object.keys(n),l=0;l<a.length;l++){var c=a[l],u=n[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),i.indexOf(c)===-1&&i.push(c);var d=o.indexOf(c);d!==-1&&o.splice(d,1)}for(var p=o.length-1;p>=0;p--)r.removeAttribute(o[p]);i.length===o.length?r.removeAttribute(je):r.getAttribute(je)!==a.join(",")&&r.setAttribute(je,a.join(","))}},Wt=function(e,n){var r=document.head||document.querySelector(k.HEAD),s=r.querySelectorAll(e+"["+je+"]"),i=Array.prototype.slice.call(s),o=[],a=void 0;return n&&n.length&&n.forEach(function(l){var c=document.createElement(e);for(var u in l)if(l.hasOwnProperty(u))if(u===q.INNER_HTML)c.innerHTML=l.innerHTML;else if(u===q.CSS_TEXT)c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText));else{var d=typeof l[u]>"u"?"":l[u];c.setAttribute(u,d)}c.setAttribute(je,"true"),i.some(function(p,f){return a=f,c.isEqualNode(p)})?i.splice(a,1):o.push(c)}),i.forEach(function(l){return l.parentNode.removeChild(l)}),o.forEach(function(l){return r.appendChild(l)}),{oldTags:i,newTags:o}},Rf=function(e){return Object.keys(e).reduce(function(n,r){var s=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+s:s},"")},UA=function(e,n,r,s){var i=Rf(r),o=xf(n);return i?"<"+e+" "+je+'="true" '+i+">"+ra(o,s)+"</"+e+">":"<"+e+" "+je+'="true">'+ra(o,s)+"</"+e+">"},VA=function(e,n,r){return n.reduce(function(s,i){var o=Object.keys(i).filter(function(c){return!(c===q.INNER_HTML||c===q.CSS_TEXT)}).reduce(function(c,u){var d=typeof i[u]>"u"?u:u+'="'+ra(i[u],r)+'"';return c?c+" "+d:d},""),a=i.innerHTML||i.cssText||"",l=TA.indexOf(e)===-1;return s+"<"+e+" "+je+'="true" '+o+(l?"/>":">"+a+"</"+e+">")},"")},Df=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,s){return r[Ps[s]||s]=e[s],r},n)},BA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,s){return r[AA[s]||s]=e[s],r},n)},$A=function(e,n,r){var s,i=(s={key:n},s[je]=!0,s),o=Df(r,i);return[Y.createElement(k.TITLE,o,n)]},HA=function(e,n){return n.map(function(r,s){var i,o=(i={key:s},i[je]=!0,i);return Object.keys(r).forEach(function(a){var l=Ps[a]||a;if(l===q.INNER_HTML||l===q.CSS_TEXT){var c=r.innerHTML||r.cssText;o.dangerouslySetInnerHTML={__html:c}}else o[l]=r[a]}),Y.createElement(e,o)})},Xe=function(e,n,r){switch(e){case k.TITLE:return{toComponent:function(){return $A(e,n.title,n.titleAttributes)},toString:function(){return UA(e,n.title,n.titleAttributes,r)}};case Pt.BODY:case Pt.HTML:return{toComponent:function(){return Df(n)},toString:function(){return Rf(n)}};default:return{toComponent:function(){return HA(e,n)},toString:function(){return VA(e,n,r)}}}},Nf=function(e){var n=e.baseTag,r=e.bodyAttributes,s=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.scriptTags,u=e.styleTags,d=e.title,p=d===void 0?"":d,f=e.titleAttributes;return{base:Xe(k.BASE,n,s),bodyAttributes:Xe(Pt.BODY,r,s),htmlAttributes:Xe(Pt.HTML,i,s),link:Xe(k.LINK,o,s),meta:Xe(k.META,a,s),noscript:Xe(k.NOSCRIPT,l,s),script:Xe(k.SCRIPT,c,s),style:Xe(k.STYLE,u,s),title:Xe(k.TITLE,{title:p,titleAttributes:f},s)}},GA=function(e){var n,r;return r=n=function(s){xA(i,s);function i(){return IA(this,i),RA(this,s.apply(this,arguments))}return i.prototype.shouldComponentUpdate=function(a){return!gA(this.props,a)},i.prototype.mapNestedChildrenToProps=function(a,l){if(!l)return null;switch(a.type){case k.SCRIPT:case k.NOSCRIPT:return{innerHTML:l};case k.STYLE:return{cssText:l}}throw new Error("<"+a.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},i.prototype.flattenArrayTypeChildren=function(a){var l,c=a.child,u=a.arrayTypeChildren,d=a.newChildProps,p=a.nestedChildren;return Ae({},u,(l={},l[c.type]=[].concat(u[c.type]||[],[Ae({},d,this.mapNestedChildrenToProps(c,p))]),l))},i.prototype.mapObjectTypeChildren=function(a){var l,c,u=a.child,d=a.newProps,p=a.newChildProps,f=a.nestedChildren;switch(u.type){case k.TITLE:return Ae({},d,(l={},l[u.type]=f,l.titleAttributes=Ae({},p),l));case k.BODY:return Ae({},d,{bodyAttributes:Ae({},p)});case k.HTML:return Ae({},d,{htmlAttributes:Ae({},p)})}return Ae({},d,(c={},c[u.type]=Ae({},p),c))},i.prototype.mapArrayTypeChildrenToProps=function(a,l){var c=Ae({},l);return Object.keys(a).forEach(function(u){var d;c=Ae({},c,(d={},d[u]=a[u],d))}),c},i.prototype.warnOnInvalidChildren=function(a,l){return!0},i.prototype.mapChildrenToProps=function(a,l){var c=this,u={};return Y.Children.forEach(a,function(d){if(!(!d||!d.props)){var p=d.props,f=p.children,g=Lu(p,["children"]),v=BA(g);switch(c.warnOnInvalidChildren(d,f),d.type){case k.LINK:case k.META:case k.NOSCRIPT:case k.SCRIPT:case k.STYLE:u=c.flattenArrayTypeChildren({child:d,arrayTypeChildren:u,newChildProps:v,nestedChildren:f});break;default:l=c.mapObjectTypeChildren({child:d,newProps:l,newChildProps:v,nestedChildren:f});break}}}),l=this.mapArrayTypeChildrenToProps(u,l),l},i.prototype.render=function(){var a=this.props,l=a.children,c=Lu(a,["children"]),u=Ae({},c);return l&&(u=this.mapChildrenToProps(l,u)),Y.createElement(e,u)},CA(i,null,[{key:"canUseDOM",set:function(a){e.canUseDOM=a}}]),i}(Y.Component),n.propTypes={base:G.object,bodyAttributes:G.object,children:G.oneOfType([G.arrayOf(G.node),G.node]),defaultTitle:G.string,defer:G.bool,encodeSpecialCharacters:G.bool,htmlAttributes:G.object,link:G.arrayOf(G.object),meta:G.arrayOf(G.object),noscript:G.arrayOf(G.object),onChangeClientState:G.func,script:G.arrayOf(G.object),style:G.arrayOf(G.object),title:G.string,titleAttributes:G.object,titleTemplate:G.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var s=e.rewind();return s||(s=Nf({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),s},r},qA=function(){return null},zA=uA(OA,jA,Nf)(qA),oa=GA(zA);oa.renderStatic=oa.rewind;const KA=()=>h.jsxs(oa,{children:[h.jsx("title",{children:"Reel Talent: Your Expert Recruiting Partner"}),h.jsx("meta",{name:"description",content:"Reel Talent provides comprehensive external recruiting services to help businesses fill job roles with top talent. Partner with us today."}),h.jsx("meta",{name:"keywords",content:"recruiting, external recruiting, job placement, talent acquisition, Reel Talent"})]}),WA=()=>{const{pathname:t}=An();return m.useEffect(()=>{document.documentElement.scrollTo({top:0,left:0,behavior:"instant"})},[t]),null};class QA extends m.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}render(){return this.state.hasError?h.jsx(Ks,{}):this.props.children}}const YA="/assets/reeltalent-logo-bfbca5c1.svg";const Un=48,XA=({color:t="currentColor",direction:e="left",distance:n="md",duration:r=.4,easing:s="cubic-bezier(0, 0, 0, 1)",hideOutline:i=!0,label:o,lines:a=3,onToggle:l,render:c,rounded:u=!1,size:d=32,toggle:p,toggled:f})=>{const[g,v]=m.useState(!1),y=Math.max(12,Math.min(Un,d)),w=Math.round((Un-y)/2),A=y/12,S=Math.round(A),H=y/(a*((n==="lg"?.25:n==="sm"?.75:.5)+(a===3?1:1.25))),W=Math.round(H),Ie=S*a+W*(a-1),le=Math.round((Un-Ie)/2),Ye=a===3?n==="lg"?4.0425:n==="sm"?5.1625:4.6325:n==="lg"?6.7875:n==="sm"?8.4875:7.6675,ce=(A-S+(H-W))/(a===3?1:2),Be=parseFloat((y/Ye-ce/(4/3)).toFixed(2)),ue=Math.max(0,r),Ne={cursor:"pointer",height:`${Un}px`,position:"relative",transition:`${ue}s ${s}`,userSelect:"none",width:`${Un}px`},Ce={background:t,height:`${S}px`,left:`${w}px`,position:"absolute"};i&&(Ne.outline="none"),u&&(Ce.borderRadius="9em");const qt=p||v,Nn=f!==void 0?f:g;return c({barHeight:S,barStyles:Ce,burgerStyles:Ne,easing:s,handler:()=>{qt(!Nn),typeof l=="function"&&l(!Nn)},isLeft:e==="left",isToggled:Nn,label:o,margin:W,move:Be,time:ue,topOffset:le,width:y})};function aa(){return aa=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},aa.apply(this,arguments)}const JA=t=>Y.createElement(XA,aa({},t,{render:e=>Y.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:n=>n.key==="Enter"&&e.handler(),role:"button",style:e.burgerStyles,tabIndex:0},Y.createElement("div",{style:{transition:`${e.time/2}s ${e.easing} ${e.isToggled?"0s":`${e.time/2}s`}`,transform:`${e.isToggled?`translateY(${e.barHeight+e.margin}px)`:"none"}`}},Y.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time/2}s ${e.easing} ${e.isToggled?`${e.time/2}s`:"0s"}`,transform:`${e.isToggled?"rotate(45deg)":"none"}`}})),Y.createElement("div",{style:{transition:`${e.time/2}s ${e.easing}`,opacity:`${e.isToggled?"0":"1"}`}},Y.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time/2}s ${e.easing}`}})),Y.createElement("div",{style:{transition:`${e.time/2}s ${e.easing} ${e.isToggled?"0s":`${e.time/2}s`}`,transform:`${e.isToggled?`translateY(-${e.barHeight+e.margin}px)`:"none"}`}},Y.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight*2+e.margin*2}px`,transition:`${e.time/2}s ${e.easing} ${e.isToggled?`${e.time/2}s`:"0s"}`,transform:`${e.isToggled?"rotate(-45deg)":"none"}`}})))})),ZA="/assets/reeltalent-logo-transparent-2c1d3138.svg",eT=()=>{const t=m.useRef(null),e=Fs(),[n,r]=m.useState("#222"),[s,i]=m.useState(!1),[o,a]=m.useState(!1),l=c=>{i(c),c?(t.current.classList.add("navbar__show__mobile"),r("#fff")):(a(!1),t.current.classList.add("navbar__hide__mobile"),setTimeout(()=>{t.current.classList.remove("navbar__show__mobile"),t.current.classList.remove("navbar__hide__mobile")},300),r("#222"))};return h.jsxs("div",{className:"mobile__main",children:[h.jsx("div",{className:"mobile__container",children:h.jsx(JA,{color:n,label:"Show menu",duration:.4,size:24,toggled:o,toggle:a,onToggle:l})}),h.jsxs("d",{className:"navbar__mobile",ref:t,children:[h.jsx("span",{className:"line-separator"}),h.jsxs("span",{className:"navbar__mobile__logo",children:[" ",h.jsx("img",{onClick:()=>{l(!s)},src:ZA,className:"logo__mobile",alt:"Logo"})]}),h.jsx("li",{onClick:()=>{l(!s)},children:h.jsx(X,{to:"/solutions",onClick:()=>l(!s),children:"Solutions"})}),h.jsx("li",{onClick:()=>{l(!s)},children:h.jsx(X,{to:"/blog",onClick:()=>l(!s),children:"Blog"})}),h.jsx("li",{onClick:()=>{l(!s)},children:h.jsx(X,{to:"/about",onClick:()=>l(!s),children:"About us"})}),h.jsx("li",{children:h.jsx("button",{className:"btn1 btn1__nav__mobile",onClick:()=>{l(!s),e("/demo")},children:"Request a demo"})})]})]})},tT=()=>h.jsx("nav",{children:h.jsxs("section",{className:"nav__container",children:[h.jsxs("div",{className:"logo__container",children:[h.jsx(X,{to:"/",children:h.jsx("img",{src:YA,className:"logo",alt:"Logo",width:"50",height:"50"})}),h.jsx(X,{to:"/",children:h.jsxs("h3",{className:"nav__title",children:[h.jsx("span",{className:"nav__subtitleReel",children:"Reel"})," ",h.jsx("span",{className:"nav__subtitleTalent",children:"Talent"})]})})]}),h.jsxs("ul",{className:"nav__link__group",children:[h.jsx("li",{className:"nav__links",children:h.jsx(X,{to:"/solutions",children:"Solutions"})}),h.jsx("li",{className:"nav__links",children:h.jsx(X,{to:"/blog",children:"Blog"})}),h.jsx("li",{className:"nav__links",children:h.jsx(X,{to:"/about",children:"About us"})})]}),h.jsxs("div",{className:"nav__btn__desktop",children:[" ",h.jsx(X,{to:"/demo",children:h.jsx("button",{className:"btn1",children:"Request a demo"})})]}),h.jsx(eT,{})]})});const nT="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCADIAMgDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAIGAwUHBAEI/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAECAwQFBv/aAAwDAQACEAMQAAAB/TA2agAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4fURJ8+gAAAAAAAAADz56/lnW1/Q6z1c9YtfBeu8id8ONQAAAAAAAAD5p9ziyTxrzdSq3ps9f6NrLpz0xxdcAAAAABjhTdhuNXrodSc+g20dtUZ+HB2ott+4vk0LfoX7SLv5SAwQAAAAAMUqxqske5bDDLDNOKM43mra3beDsMeSc7W+dn45d+Q6APLYQAAAAHl9WO00mGaHbvhx58eScMM0LzV/J7/AD9a0JzmvCxaTfarpY8fqAAAAAAVzV3OsdG/gh6Ibl/PHP8ALzWvJYdJ0ssJzyWvj3up2Wu6UPJ6AAAAAACMhqvDY2e1YjaV5q3hu6887x9IZr85l0RFtfsDn4ArUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//xAArEAAABgEBBwMFAQAAAAAAAAAAAQIDBBEFMBASExQVIEAGISQWIiU0cDP/2gAIAQEAAQUC/hdi/HccJtMnKKSX1OpCoHqBiYrxcmr7Mm4bjyUBKBhZKpMLxJzXEbnM7spKAlAwTRtw/EMhMxbcolYaQg4uFWakpJCdZa0tpeytBWRfMLkvrEqRkWS61OBZqcQjep5jR47NR8h4DzqWUSJCpC+ySzwpFCgXsMFmTka+Qe4rvbkS+RQoUEWhWNl87E1HFbjZ7D7J/wDvQoUKHpp6ndSV+vsPsme8ihQoUMH7ZHUWnfQZVtPbKL5FChQoYUvyGrNZ3HBWyhQmIp6hQoUMP+/qrQTiXo6mVUKFChLZ30UKFChj1cOZrGRKJyAkwcFwhyTo5J0ck6HcQtYPESSHTZBDp8gdPkCK84pH8c//xAAdEQACAgIDAQAAAAAAAAAAAAAAAREwAiESE1AQ/9oACAEDAQE/AfOgeMWYwZtRCqgi2CDJargga1QvqIGtUyzkzm0drO5j35f/xAAqEQABBAECAwcFAAAAAAAAAAABAAIDERIEMBAUIQUiMUFQUXETICNCkf/aAAgBAgEBPwH02NubqUOjhwt4Wu0jYRnH4bbHYm1DrI3NAJpa3Ute3BuxFCZPhNhjb5JmLP1C+lCReI/in0EEo6CipoXQPwdsMGIrjGe4Fa7RjEkWXmPvb0KCHBp7oVrUH8TvjYhlsUVatRvtqtTdY3DZEzwuZehqpG+C5+T2XPP9k42b9L//xAAyEAABAgIFCQgDAQAAAAAAAAABAAIDERIgMDFBISIyM0JRYXGBBBATIzRAUqFicLGR/9oACAEBAAY/Av1GSbkXUvDYFmtMQfkgwzhPPyu9s0Khst7xSyubmk+1yXhO45e8k7Tp+2+LsCtCkN4KnFzW7sUAMgFvNxkF5bZ8StOXILXvbyKLmdriPb9r1UT/AFepevMoxhxEiqIPhxfg72Bc5TddgKr24VB2eOfM2XfK3o7La3SoCDIjFMibVzudq524V+lWLCwIpWr+Vd1VnEG1c3eK7qsPr/Lalg6tzqw+v8tqJuWW7fVmLxVhHjK3kcoWaZLArR+1o/a0PtTDaJWhPqtUVqnLVOQEWG5r9+/9O//EACcQAQEAAQMBCAMBAQAAAAAAAAEAESExQXEQMEBRYYGhsXCR8MHx/9oACAEBAAE/IfwaZ8MweBvYQOZzHuZWMxU6MG4+jHhHaQDsuW179D17VU3l5HONvCO0uTUuZkJpiO1dELMOm3hc95btiwcHlKFYS3LlRB4WAOO/UFPlhSf2+J/h8gjHVedk3O47IkNZ/e5hHr/3BYdH7no8+AVrQ487JL4JMzMRGgcnSKUqEcJslqh8/wCD69+qh4ffmZmZt35mIQqQysg4YdN4BwN+99cBtSskJJmOfbilIRmXRDqaf78d8WJISSWIdAH1EIUr6UfHe+sgSpHckkhJYvgfqKUpf0X2d9p05veSYkxmRfIMUhSnHS+zvn45ViQy9vNMY9ipFnh8yIUpRb0Pu0/3v3ACcNqPTupbcdBn/nX9xf2Eu+5TDbCekdiyoCCbIw4afh1//9oADAMBAAIAAwAAABAMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMc8sMMMMMMMMMMen0MMMMMMMMMNX3QMMMMMMNs5Nm6AMMMMMMWritu/wCDDDDDDECECzOBDDDDDDDX3rALHDDDDDDDTDTBRSCDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD//EAB4RAQEBAAEFAQEAAAAAAAAAAAEAETAQITFBUFFh/9oACAEDAQE/EPmkJZBvGMn5cveHDl3RAkzgCCDoJ5XBkEEQne8C3tZZHSJsw/OELpHiQfov5khaGfL/AP/EACURAQACAAQFBQEAAAAAAAAAAAEAESFBUdEwMWFxoSBQgZGx8P/aAAgBAgEBPxD22secpLN5f2MGZyk04aGcpawGuEuXeOLlwGbcIMoL3xlwbDRDaAQqejaKO9HL65RIOPhNT1grRBM5QYT6GMUjq/Ge/wAetUrrFFBlXaIzdfq/OARc4hBBH0wjNiMx/OBymG3fedA87xy6f3zDNHneL5PO8BgVeXtf/8QAKRABAAECBAUEAwEBAAAAAAAAAREAITFBUWEQMHGBoZHB0fAgQLFw4f/aAAgBAQABPxD/AApQpBQWiX6rYqHrZVYwlKhhu67HmoYeboHostJ/6XHRDn1CcqUn6josiLgzg/7REoEUYLJnsIetYNqhi1I7fYvEKd4QnNH9QzSKWADMz+7UsSBGpAPka2a2aJRAnUBL1H9RuUBpHMykcgupp6U5Nm0Q9lHxTaqSFsZLHWaP+QdADA5+Mmx4KtxOqHYX8lKkGgR5FqIFtEnZE8UVC5cA62LnSOlJ+j+UJCJoD0SgHQQxbQh3GnHgYwK9LwdqAOfA0whisg3ptBGA2fnfjYqQyNxyoh7K6IkO0xwoqRs4UQjkjT8AELuDxTBz64866Skhg5nt2oRRoTRrFQ2DEPqnt+HwXlOwgyI606kR+4k2TZObqUT2JqTDKsq4vEMSjQvUFsHlra/C1FEFuAko6g5oLHrps4VmrXAb8K6SPg+/H9qtqmIWFuk325psfMkUAEJCOXBj4M9N9Pd1/hW1+FUL6c7GW6uzOd8fXi2XwLlLE29Et7VtVt8aGZaROcRih3HUphIlst8HbhaPBbquokwxzK2fwqQqwS5QeeWWYISNOrn9xxPNNQbqZ/YpTg+u9M9vv60/U+9IWS7CJ0mnmE19+lSoezD70P4D5pgQEwQPmpBAjPetg/47/9k=",rT=()=>h.jsxs("footer",{children:[h.jsxs("ul",{className:"footer__container",children:[h.jsx("li",{className:"footer__links",children:h.jsx(X,{to:"/",children:"About Us"})}),h.jsx("li",{className:"footer__links",children:h.jsx(X,{to:"/",children:"Our Services"})}),h.jsx("li",{className:"footer__links",children:h.jsx(X,{to:"/legal",children:"Terms and Conditions"})}),h.jsx("li",{className:"footer__links",children:h.jsx(X,{to:"/legal#privacy",children:"Privacy Policy"})})]}),h.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," Reel Talent. All rights reserved.",h.jsxs("div",{className:"powered-by",children:["Powered by"," ",h.jsxs("a",{className:"teamAiLink",href:"https://www.team.ai/talent-delivery-services",target:"_blank",rel:"noopener noreferrer",children:[h.jsx("img",{src:nT,className:"teamAiLogo",alt:"Team AI",width:35}),h.jsx("p",{className:"teamAiTitle",children:" Team AI"})]})," "]})]})]}),sT=()=>h.jsxs(QA,{children:[h.jsx(KA,{}),h.jsxs("main",{children:[h.jsx(tT,{}),h.jsx(xm,{children:Jw.map(t=>t.element)}),h.jsx(rT,{})]}),h.jsx(WA,{})]});ro.createRoot(document.getElementById("root")).render(h.jsx(Y.StrictMode,{children:h.jsx(Om,{children:h.jsx(sT,{firebase:Ol,analytics:Ow})})}));
