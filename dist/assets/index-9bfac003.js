var Of=Object.defineProperty;var Pf=(t,e,n)=>e in t?Of(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var I=(t,e,n)=>(Pf(t,typeof e!="symbol"?e+"":e,n),n);import{r as m,a as oa,R as kl,b as Y,g as ks}from"./react-7b82c02c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Vu={exports:{}},js={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf=m,kf=Symbol.for("react.element"),jf=Symbol.for("react.fragment"),Lf=Object.prototype.hasOwnProperty,Ff=Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uf={key:!0,ref:!0,__self:!0,__source:!0};function $u(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Lf.call(e,r)&&!Uf.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:kf,type:t,key:i,ref:o,props:s,_owner:Ff.current}}js.Fragment=jf;js.jsx=$u;js.jsxs=$u;Vu.exports=js;var h=Vu.exports;var no={},jl=oa;no.createRoot=jl.createRoot,no.hydrateRoot=jl.hydrateRoot;/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function er(){return er=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},er.apply(this,arguments)}var at;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(at||(at={}));const Ll="popstate";function Bf(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return ro("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:hs(s)}return $f(e,n,null,t)}function J(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function aa(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Vf(){return Math.random().toString(36).substr(2,8)}function Fl(t,e){return{usr:t.state,key:t.key,idx:e}}function ro(t,e,n,r){return n===void 0&&(n=null),er({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?En(e):e,{state:n,key:e&&e.key||r||Vf()})}function hs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function En(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function $f(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=at.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(er({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=at.Pop;let g=u(),A=g==null?null:g-c;c=g,l&&l({action:a,location:v.location,delta:A})}function p(g,A){a=at.Push;let w=ro(v.location,g,A);n&&n(w,g),c=u()+1;let C=Fl(w,c),S=v.createHref(w);try{o.pushState(C,"",S)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;s.location.assign(S)}i&&l&&l({action:a,location:v.location,delta:1})}function f(g,A){a=at.Replace;let w=ro(v.location,g,A);n&&n(w,g),c=u();let C=Fl(w,c),S=v.createHref(w);o.replaceState(C,"",S),i&&l&&l({action:a,location:v.location,delta:0})}function y(g){let A=s.location.origin!=="null"?s.location.origin:s.location.href,w=typeof g=="string"?g:hs(g);return J(A,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,A)}let v={get action(){return a},get location(){return t(s,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(Ll,d),l=g,()=>{s.removeEventListener(Ll,d),l=null}},createHref(g){return e(s,g)},createURL:y,encodeLocation(g){let A=y(g);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:p,replace:f,go(g){return o.go(g)}};return v}var Ul;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ul||(Ul={}));function Hf(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?En(e):e,s=la(r.pathname||"/",n);if(s==null)return null;let i=Hu(t);qf(i);let o=null;for(let a=0;o==null&&a<i.length;++a)o=Zf(i[a],nm(s));return o}function Hu(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(J(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=dt([r,l.relativePath]),u=n.concat(l);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Hu(i.children,e,u,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:Xf(c,i.index),routesMeta:u})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of qu(i.path))s(i,o,l)}),e}function qu(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=qu(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function qf(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Jf(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gf=/^:\w+$/,zf=3,Kf=2,Wf=1,Qf=10,Yf=-2,Bl=t=>t==="*";function Xf(t,e){let n=t.split("/"),r=n.length;return n.some(Bl)&&(r+=Yf),e&&(r+=Kf),n.filter(s=>!Bl(s)).reduce((s,i)=>s+(Gf.test(i)?zf:i===""?Wf:Qf),r)}function Jf(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function Zf(t,e){let{routesMeta:n}=t,r={},s="/",i=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=s==="/"?e:e.slice(s.length)||"/",u=em({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let d=a.route;i.push({params:r,pathname:dt([s,u.pathname]),pathnameBase:om(dt([s,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(s=dt([s,u.pathnameBase]))}return i}function em(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=tm(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((c,u,d)=>{if(u==="*"){let p=a[d]||"";o=i.slice(0,i.length-p.length).replace(/(.)\/+$/,"$1")}return c[u]=rm(a[d]||"",u),c},{}),pathname:i,pathnameBase:o,pattern:t}}function tm(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),aa(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function nm(t){try{return decodeURI(t)}catch(e){return aa(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function rm(t,e){try{return decodeURIComponent(t)}catch(n){return aa(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function la(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function sm(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?En(t):t;return{pathname:n?n.startsWith("/")?n:im(n,e):e,search:am(r),hash:lm(s)}}function im(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function wi(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ca(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ua(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=En(t):(s=er({},t),J(!s.pathname||!s.pathname.includes("?"),wi("?","pathname","search",s)),J(!s.pathname||!s.pathname.includes("#"),wi("#","pathname","hash",s)),J(!s.search||!s.search.includes("#"),wi("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;s.pathname=p.join("/")}a=d>=0?e[d]:"/"}let l=sm(s,a),c=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const dt=t=>t.join("/").replace(/\/\/+/g,"/"),om=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),am=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,lm=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function cm(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ds(){return ds=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ds.apply(this,arguments)}const ha=m.createContext(null),um=m.createContext(null),wn=m.createContext(null),Ls=m.createContext(null),wt=m.createContext({outlet:null,matches:[],isDataRoute:!1}),Gu=m.createContext(null);function hm(t,e){let{relative:n}=e===void 0?{}:e;An()||J(!1);let{basename:r,navigator:s}=m.useContext(wn),{hash:i,pathname:o,search:a}=Ku(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:dt([r,o])),s.createHref({pathname:l,search:a,hash:i})}function An(){return m.useContext(Ls)!=null}function At(){return An()||J(!1),m.useContext(Ls).location}function zu(t){m.useContext(wn).static||m.useLayoutEffect(t)}function Fs(){let{isDataRoute:t}=m.useContext(wt);return t?Tm():dm()}function dm(){An()||J(!1);let t=m.useContext(ha),{basename:e,navigator:n}=m.useContext(wn),{matches:r}=m.useContext(wt),{pathname:s}=At(),i=JSON.stringify(ca(r).map(l=>l.pathnameBase)),o=m.useRef(!1);return zu(()=>{o.current=!0}),m.useCallback(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let u=ua(l,JSON.parse(i),s,c.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:dt([e,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[e,n,i,s,t])}function Ku(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=m.useContext(wt),{pathname:s}=At(),i=JSON.stringify(ca(r).map(o=>o.pathnameBase));return m.useMemo(()=>ua(t,JSON.parse(i),s,n==="path"),[t,i,s,n])}function pm(t,e){return fm(t,e)}function fm(t,e,n){An()||J(!1);let{navigator:r}=m.useContext(wn),{matches:s}=m.useContext(wt),i=s[s.length-1],o=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let l=At(),c;if(e){var u;let v=typeof e=="string"?En(e):e;a==="/"||(u=v.pathname)!=null&&u.startsWith(a)||J(!1),c=v}else c=l;let d=c.pathname||"/",p=a==="/"?d:d.slice(a.length)||"/",f=Hf(t,{pathname:p}),y=_m(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:dt([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:dt([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n);return e&&y?m.createElement(Ls.Provider,{value:{location:ds({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:at.Pop}},y):y}function mm(){let t=Am(),e=cm(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},e),n?m.createElement("pre",{style:s},n):null,i)}const gm=m.createElement(mm,null);class ym extends m.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?m.createElement(wt.Provider,{value:this.props.routeContext},m.createElement(Gu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vm(t){let{routeContext:e,match:n,children:r}=t,s=m.useContext(ha);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(wt.Provider,{value:e},r)}function _m(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let i=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=i.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||J(!1),i=i.slice(0,Math.min(i.length,a+1))}return i.reduceRight((a,l,c)=>{let u=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||gm);let p=e.concat(i.slice(0,c+1)),f=()=>{let y;return u?y=d:l.route.Component?y=m.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,m.createElement(vm,{match:l,routeContext:{outlet:a,matches:p,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?m.createElement(ym,{location:n.location,revalidation:n.revalidation,component:d,error:u,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var so;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(so||(so={}));var tr;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(tr||(tr={}));function bm(t){let e=m.useContext(ha);return e||J(!1),e}function Em(t){let e=m.useContext(um);return e||J(!1),e}function wm(t){let e=m.useContext(wt);return e||J(!1),e}function Wu(t){let e=wm(),n=e.matches[e.matches.length-1];return n.route.id||J(!1),n.route.id}function Am(){var t;let e=m.useContext(Gu),n=Em(tr.UseRouteError),r=Wu(tr.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Tm(){let{router:t}=bm(so.UseNavigateStable),e=Wu(tr.UseNavigateStable),n=m.useRef(!1);return zu(()=>{n.current=!0}),m.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,ds({fromRouteId:e},i)))},[t,e])}function Sm(t){let{to:e,replace:n,state:r,relative:s}=t;An()||J(!1);let{matches:i}=m.useContext(wt),{pathname:o}=At(),a=Fs(),l=ua(e,ca(i).map(u=>u.pathnameBase),o,s==="path"),c=JSON.stringify(l);return m.useEffect(()=>a(JSON.parse(c),{replace:n,state:r,relative:s}),[a,c,s,n,r]),null}function He(t){J(!1)}function Im(t){let{basename:e="/",children:n=null,location:r,navigationType:s=at.Pop,navigator:i,static:o=!1}=t;An()&&J(!1);let a=e.replace(/^\/*/,"/"),l=m.useMemo(()=>({basename:a,navigator:i,static:o}),[a,i,o]);typeof r=="string"&&(r=En(r));let{pathname:c="/",search:u="",hash:d="",state:p=null,key:f="default"}=r,y=m.useMemo(()=>{let v=la(c,a);return v==null?null:{location:{pathname:v,search:u,hash:d,state:p,key:f},navigationType:s}},[a,c,u,d,p,f,s]);return y==null?null:m.createElement(wn.Provider,{value:l},m.createElement(Ls.Provider,{children:n,value:y}))}function Cm(t){let{children:e,location:n}=t;return pm(io(e),n)}var Vl;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Vl||(Vl={}));new Promise(()=>{});function io(t,e){e===void 0&&(e=[]);let n=[];return m.Children.forEach(t,(r,s)=>{if(!m.isValidElement(r))return;let i=[...e,s];if(r.type===m.Fragment){n.push.apply(n,io(r.props.children,i));return}r.type!==He&&J(!1),!r.props.index||!r.props.children||J(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=io(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oo.apply(this,arguments)}function xm(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function Rm(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Nm(t,e){return t.button===0&&(!e||e==="_self")&&!Rm(t)}const Dm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],$l="startTransition";function Om(t){let{basename:e,children:n,window:r}=t,s=m.useRef();s.current==null&&(s.current=Bf({window:r,v5Compat:!0}));let i=s.current,[o,a]=m.useState({action:i.action,location:i.location}),l=m.useCallback(c=>{$l in kl?kl[$l](()=>a(c)):a(c)},[a]);return m.useLayoutEffect(()=>i.listen(l),[i,l]),m.createElement(Im,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:i})}const Pm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Mm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,X=m.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:l,to:c,preventScrollReset:u}=e,d=xm(e,Dm),{basename:p}=m.useContext(wn),f,y=!1;if(typeof c=="string"&&Mm.test(c)&&(f=c,Pm))try{let w=new URL(window.location.href),C=c.startsWith("//")?new URL(w.protocol+c):new URL(c),S=la(C.pathname,p);C.origin===w.origin&&S!=null?c=S+C.search+C.hash:y=!0}catch{}let v=hm(c,{relative:s}),g=km(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:s});function A(w){r&&r(w),w.defaultPrevented||g(w)}return m.createElement("a",oo({},d,{href:f||v,onClick:y||i?r:A,ref:n,target:l}))});var Hl;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Hl||(Hl={}));var ql;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ql||(ql={}));function km(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o}=e===void 0?{}:e,a=Fs(),l=At(),c=Ku(t,{relative:o});return m.useCallback(u=>{if(Nm(u,n)){u.preventDefault();let d=r!==void 0?r:hs(l)===hs(c);a(t,{replace:d,state:s,preventScrollReset:i,relative:o})}},[l,a,c,r,s,n,t,i,o])}var da=Cr(),M=t=>Ir(t,da),pa=Cr();M.write=t=>Ir(t,pa);var Us=Cr();M.onStart=t=>Ir(t,Us);var fa=Cr();M.onFrame=t=>Ir(t,fa);var ma=Cr();M.onFinish=t=>Ir(t,ma);var en=[];M.setTimeout=(t,e)=>{let n=M.now()+e,r=()=>{let i=en.findIndex(o=>o.cancel==r);~i&&en.splice(i,1),ct-=~i?1:0},s={time:n,handler:t,cancel:r};return en.splice(Qu(n),0,s),ct+=1,Yu(),s};var Qu=t=>~(~en.findIndex(e=>e.time>t)||~en.length);M.cancel=t=>{Us.delete(t),fa.delete(t),ma.delete(t),da.delete(t),pa.delete(t)};M.sync=t=>{ao=!0,M.batchedUpdates(t),ao=!1};M.throttle=t=>{let e;function n(){try{t(...e)}finally{e=null}}function r(...s){e=s,M.onStart(n)}return r.handler=t,r.cancel=()=>{Us.delete(n),e=null},r};var ga=typeof window<"u"?window.requestAnimationFrame:()=>{};M.use=t=>ga=t;M.now=typeof performance<"u"?()=>performance.now():Date.now;M.batchedUpdates=t=>t();M.catch=console.error;M.frameLoop="always";M.advance=()=>{M.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ju()};var lt=-1,ct=0,ao=!1;function Ir(t,e){ao?(e.delete(t),t(0)):(e.add(t),Yu())}function Yu(){lt<0&&(lt=0,M.frameLoop!=="demand"&&ga(Xu))}function jm(){lt=-1}function Xu(){~lt&&(ga(Xu),M.batchedUpdates(Ju))}function Ju(){let t=lt;lt=M.now();let e=Qu(lt);if(e&&(Zu(en.splice(0,e),n=>n.handler()),ct-=e),!ct){jm();return}Us.flush(),da.flush(t?Math.min(64,lt-t):16.667),fa.flush(),pa.flush(),ma.flush()}function Cr(){let t=new Set,e=t;return{add(n){ct+=e==t&&!t.has(n)?1:0,t.add(n)},delete(n){return ct-=e==t&&t.has(n)?1:0,t.delete(n)},flush(n){e.size&&(t=new Set,ct-=e.size,Zu(e,r=>r(n)&&t.add(r)),ct+=t.size,e=t)}}}function Zu(t,e){t.forEach(n=>{try{e(n)}catch(r){M.catch(r)}})}var Lm=Object.defineProperty,Fm=(t,e)=>{for(var n in e)Lm(t,n,{get:e[n],enumerable:!0})},Ue={};Fm(Ue,{assign:()=>Bm,colors:()=>pt,createStringInterpolator:()=>va,skipAnimation:()=>th,to:()=>eh,willAdvance:()=>_a});function lo(){}var Um=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),E={arr:Array.isArray,obj:t=>!!t&&t.constructor.name==="Object",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",und:t=>t===void 0};function Ze(t,e){if(E.arr(t)){if(!E.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}var j=(t,e)=>t.forEach(e);function Ye(t,e,n){if(E.arr(t)){for(let r=0;r<t.length;r++)e.call(n,t[r],`${r}`);return}for(let r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r)}var xe=t=>E.und(t)?[]:E.arr(t)?t:[t];function Gn(t,e){if(t.size){let n=Array.from(t);t.clear(),j(n,e)}}var Bn=(t,...e)=>Gn(t,n=>n(...e)),ya=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),va,eh,pt=null,th=!1,_a=lo,Bm=t=>{t.to&&(eh=t.to),t.now&&(M.now=t.now),t.colors!==void 0&&(pt=t.colors),t.skipAnimation!=null&&(th=t.skipAnimation),t.createStringInterpolator&&(va=t.createStringInterpolator),t.requestAnimationFrame&&M.use(t.requestAnimationFrame),t.batchedUpdates&&(M.batchedUpdates=t.batchedUpdates),t.willAdvance&&(_a=t.willAdvance),t.frameLoop&&(M.frameLoop=t.frameLoop)},zn=new Set,Me=[],Ai=[],ps=0,Bs={get idle(){return!zn.size&&!Me.length},start(t){ps>t.priority?(zn.add(t),M.onStart(Vm)):(nh(t),M(co))},advance:co,sort(t){if(ps)M.onFrame(()=>Bs.sort(t));else{let e=Me.indexOf(t);~e&&(Me.splice(e,1),rh(t))}},clear(){Me=[],zn.clear()}};function Vm(){zn.forEach(nh),zn.clear(),M(co)}function nh(t){Me.includes(t)||rh(t)}function rh(t){Me.splice($m(Me,e=>e.priority>t.priority),0,t)}function co(t){let e=Ai;for(let n=0;n<Me.length;n++){let r=Me[n];ps=r.priority,r.idle||(_a(r),r.advance(t),r.idle||e.push(r))}return ps=0,Ai=Me,Ai.length=0,Me=e,Me.length>0}function $m(t,e){let n=t.findIndex(e);return n<0?t.length:n}var Hm=(t,e,n)=>Math.min(Math.max(n,t),e),qm={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Le="[-+]?\\d*\\.?\\d+",fs=Le+"%";function Vs(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var Gm=new RegExp("rgb"+Vs(Le,Le,Le)),zm=new RegExp("rgba"+Vs(Le,Le,Le,Le)),Km=new RegExp("hsl"+Vs(Le,fs,fs)),Wm=new RegExp("hsla"+Vs(Le,fs,fs,Le)),Qm=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ym=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Xm=/^#([0-9a-fA-F]{6})$/,Jm=/^#([0-9a-fA-F]{8})$/;function Zm(t){let e;return typeof t=="number"?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=Xm.exec(t))?parseInt(e[1]+"ff",16)>>>0:pt&&pt[t]!==void 0?pt[t]:(e=Gm.exec(t))?(Wt(e[1])<<24|Wt(e[2])<<16|Wt(e[3])<<8|255)>>>0:(e=zm.exec(t))?(Wt(e[1])<<24|Wt(e[2])<<16|Wt(e[3])<<8|Kl(e[4]))>>>0:(e=Qm.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=Jm.exec(t))?parseInt(e[1],16)>>>0:(e=Ym.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=Km.exec(t))?(Gl(zl(e[1]),zr(e[2]),zr(e[3]))|255)>>>0:(e=Wm.exec(t))?(Gl(zl(e[1]),zr(e[2]),zr(e[3]))|Kl(e[4]))>>>0:null}function Ti(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Gl(t,e,n){let r=n<.5?n*(1+e):n+e-n*e,s=2*n-r,i=Ti(s,r,t+1/3),o=Ti(s,r,t),a=Ti(s,r,t-1/3);return Math.round(i*255)<<24|Math.round(o*255)<<16|Math.round(a*255)<<8}function Wt(t){let e=parseInt(t,10);return e<0?0:e>255?255:e}function zl(t){return(parseFloat(t)%360+360)%360/360}function Kl(t){let e=parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function zr(t){let e=parseFloat(t);return e<0?0:e>100?1:e/100}function Wl(t){let e=Zm(t);if(e===null)return t;e=e||0;let n=(e&4278190080)>>>24,r=(e&16711680)>>>16,s=(e&65280)>>>8,i=(e&255)/255;return`rgba(${n}, ${r}, ${s}, ${i})`}var nr=(t,e,n)=>{if(E.fun(t))return t;if(E.arr(t))return nr({range:t,output:e,extrapolate:n});if(E.str(t.output[0]))return va(t);let r=t,s=r.output,i=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",a=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(c=>c);return c=>{let u=tg(c,i);return eg(c,i[u],i[u+1],s[u],s[u+1],l,o,a,r.map)}};function eg(t,e,n,r,s,i,o,a,l){let c=l?l(t):t;if(c<e){if(o==="identity")return c;o==="clamp"&&(c=e)}if(c>n){if(a==="identity")return c;a==="clamp"&&(c=n)}return r===s?r:e===n?t<=e?r:s:(e===-1/0?c=-c:n===1/0?c=c-e:c=(c-e)/(n-e),c=i(c),r===-1/0?c=-c:s===1/0?c=c+r:c=c*(s-r)+r,c)}function tg(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}var ng=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);let r=n*t,s=e==="end"?Math.floor(r):Math.ceil(r);return Hm(0,1,s/t)},ms=1.70158,Kr=ms*1.525,Ql=ms+1,Yl=2*Math.PI/3,Xl=2*Math.PI/4.5,Wr=t=>t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,rg={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInExpo:t=>t===0?0:Math.pow(2,10*t-10),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>Ql*t*t*t-ms*t*t,easeOutBack:t=>1+Ql*Math.pow(t-1,3)+ms*Math.pow(t-1,2),easeInOutBack:t=>t<.5?Math.pow(2*t,2)*((Kr+1)*2*t-Kr)/2:(Math.pow(2*t-2,2)*((Kr+1)*(t*2-2)+Kr)+2)/2,easeInElastic:t=>t===0?0:t===1?1:-Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*Yl),easeOutElastic:t=>t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-.75)*Yl)+1,easeInOutElastic:t=>t===0?0:t===1?1:t<.5?-(Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*Xl))/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*Xl)/2+1,easeInBounce:t=>1-Wr(1-t),easeOutBounce:Wr,easeInOutBounce:t=>t<.5?(1-Wr(1-2*t))/2:(1+Wr(2*t-1))/2,steps:ng},hn=Symbol.for("FluidValue.get"),Lt=Symbol.for("FluidValue.observers"),Pe=t=>!!(t&&t[hn]),Se=t=>t&&t[hn]?t[hn]():t,Jl=t=>t[Lt]||null;function sg(t,e){t.eventObserved?t.eventObserved(e):t(e)}function rr(t,e){let n=t[Lt];n&&n.forEach(r=>{sg(r,e)})}var rT,sT,Bu,sh=(Bu=class{constructor(e){I(this,rT);I(this,sT);if(!e&&!(e=this.get))throw Error("Unknown getter");ig(this,e)}},rT=hn,sT=Lt,Bu),ig=(t,e)=>ih(t,hn,e);function Tn(t,e){if(t[hn]){let n=t[Lt];n||ih(t,Lt,n=new Set),n.has(e)||(n.add(e),t.observerAdded&&t.observerAdded(n.size,e))}return e}function sr(t,e){let n=t[Lt];if(n&&n.has(e)){let r=n.size-1;r?n.delete(e):t[Lt]=null,t.observerRemoved&&t.observerRemoved(r,e)}}var ih=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),is=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,og=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Zl=new RegExp(`(${is.source})(%|[a-z]+)`,"i"),ag=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,$s=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,oh=t=>{let[e,n]=lg(t);if(!e||ya())return t;let r=window.getComputedStyle(document.documentElement).getPropertyValue(e);return r?r.trim():n&&n.startsWith("--")?window.getComputedStyle(document.documentElement).getPropertyValue(n)||t:n&&$s.test(n)?oh(n):n||t},lg=t=>{let e=$s.exec(t);if(!e)return[,];let[,n,r]=e;return[n,r]},Si,cg=(t,e,n,r,s)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${s})`,ah=t=>{Si||(Si=pt?new RegExp(`(${Object.keys(pt).join("|")})(?!\\w)`,"g"):/^\b$/);let e=t.output.map(s=>Se(s).replace($s,oh).replace(og,Wl).replace(Si,Wl)),n=e.map(s=>s.match(is).map(Number)),r=n[0].map((s,i)=>n.map(o=>{if(!(i in o))throw Error('The arity of each "output" value must be equal');return o[i]})).map(s=>nr({...t,output:s}));return s=>{var a;let i=!Zl.test(e[0])&&((a=e.find(l=>Zl.test(l)))==null?void 0:a.replace(is,"")),o=0;return e[0].replace(is,()=>`${r[o++](s)}${i||""}`).replace(ag,cg)}},ba="react-spring: ",lh=t=>{let e=t,n=!1;if(typeof e!="function")throw new TypeError(`${ba}once requires a function parameter`);return(...r)=>{n||(e(...r),n=!0)}},ug=lh(console.warn);function hg(){ug(`${ba}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var dg=lh(console.warn);function pg(){dg(`${ba}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function Hs(t){return E.str(t)&&(t[0]=="#"||/\d/.test(t)||!ya()&&$s.test(t)||t in(pt||{}))}var Ea=ya()?m.useEffect:m.useLayoutEffect,fg=()=>{let t=m.useRef(!1);return Ea(()=>(t.current=!0,()=>{t.current=!1}),[]),t};function ch(){let t=m.useState()[1],e=fg();return()=>{e.current&&t(Math.random())}}function mg(t,e){let[n]=m.useState(()=>({inputs:e,result:t()})),r=m.useRef(),s=r.current,i=s;return i?e&&i.inputs&&gg(e,i.inputs)||(i={inputs:e,result:t()}):i=n,m.useEffect(()=>{r.current=i,s==n&&(n.inputs=n.result=void 0)},[i]),i.result}function gg(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}var uh=t=>m.useEffect(t,yg),yg=[];function ec(t){let e=m.useRef();return m.useEffect(()=>{e.current=t}),e.current}var ir=Symbol.for("Animated:node"),vg=t=>!!t&&t[ir]===t,qe=t=>t&&t[ir],wa=(t,e)=>Um(t,ir,e),qs=t=>t&&t[ir]&&t[ir].getPayload(),hh=class{constructor(){I(this,"payload");wa(this,this)}getPayload(){return this.payload||[]}},xr=class extends hh{constructor(n){super();I(this,"done",!0);I(this,"elapsedTime");I(this,"lastPosition");I(this,"lastVelocity");I(this,"v0");I(this,"durationProgress",0);this._value=n,E.num(this._value)&&(this.lastPosition=this._value)}static create(n){return new xr(n)}getPayload(){return[this]}getValue(){return this._value}setValue(n,r){return E.num(n)&&(this.lastPosition=n,r&&(n=Math.round(n/r)*r,this.done&&(this.lastPosition=n))),this._value===n?!1:(this._value=n,!0)}reset(){let{done:n}=this;this.done=!1,E.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,n&&(this.lastVelocity=null),this.v0=null)}},or=class extends xr{constructor(e){super(0);I(this,"_string",null);I(this,"_toString");this._toString=nr({output:[e,e]})}static create(e){return new or(e)}getValue(){return this._string??(this._string=this._toString(this._value))}setValue(e){if(E.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=nr({output:[this.getValue(),e]})),this._value=0,super.reset()}},gs={dependencies:null},Gs=class extends hh{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){let e={};return Ye(this.source,(n,r)=>{vg(n)?e[r]=n.getValue(t):Pe(n)?e[r]=Se(n):t||(e[r]=n)}),e}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&j(this.payload,t=>t.reset())}_makePayload(t){if(t){let e=new Set;return Ye(t,this._addToPayload,e),Array.from(e)}}_addToPayload(t){gs.dependencies&&Pe(t)&&gs.dependencies.add(t);let e=qs(t);e&&j(e,n=>this.add(n))}},dh=class extends Gs{constructor(e){super(e)}static create(e){return new dh(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){let n=this.getPayload();return e.length==n.length?n.map((r,s)=>r.setValue(e[s])).some(Boolean):(super.setValue(e.map(_g)),!0)}};function _g(t){return(Hs(t)?or:xr).create(t)}function uo(t){let e=qe(t);return e?e.constructor:E.arr(t)?dh:Hs(t)?or:xr}var tc=(t,e)=>{let n=!E.fun(t)||t.prototype&&t.prototype.isReactComponent;return m.forwardRef((r,s)=>{let i=m.useRef(null),o=n&&m.useCallback(y=>{i.current=wg(s,y)},[s]),[a,l]=Eg(r,e),c=ch(),u=()=>{let y=i.current;n&&!y||(y?e.applyAnimatedValues(y,a.getValue(!0)):!1)===!1&&c()},d=new bg(u,l),p=m.useRef();Ea(()=>(p.current=d,j(l,y=>Tn(y,d)),()=>{p.current&&(j(p.current.deps,y=>sr(y,p.current)),M.cancel(p.current.update))})),m.useEffect(u,[]),uh(()=>()=>{let y=p.current;j(y.deps,v=>sr(v,y))});let f=e.getComponentProps(a.getValue());return m.createElement(t,{...f,ref:o})})},bg=class{constructor(e,n){this.update=e,this.deps=n}eventObserved(e){e.type=="change"&&M.write(this.update)}};function Eg(t,e){let n=new Set;return gs.dependencies=n,t.style&&(t={...t,style:e.createAnimatedStyle(t.style)}),t=new Gs(t),gs.dependencies=null,[t,n]}function wg(t,e){return t&&(E.fun(t)?t(e):t.current=e),e}var nc=Symbol.for("AnimatedComponent"),Ag=(t,{applyAnimatedValues:e=()=>!1,createAnimatedStyle:n=s=>new Gs(s),getComponentProps:r=s=>s}={})=>{let s={applyAnimatedValues:e,createAnimatedStyle:n,getComponentProps:r},i=o=>{let a=rc(o)||"Anonymous";return E.str(o)?o=i[o]||(i[o]=tc(o,s)):o=o[nc]||(o[nc]=tc(o,s)),o.displayName=`Animated(${a})`,o};return Ye(t,(o,a)=>{E.arr(t)&&(a=rc(o)),i[a]=i(o)}),{animated:i}},rc=t=>E.str(t)?t:t&&E.str(t.displayName)?t.displayName:E.fun(t)&&t.name||null;function xt(t,...e){return E.fun(t)?t(...e):t}var Kn=(t,e)=>t===!0||!!(e&&t&&(E.fun(t)?t(e):xe(t).includes(e))),ph=(t,e)=>E.obj(t)?e&&t[e]:t,fh=(t,e)=>t.default===!0?t[e]:t.default?t.default[e]:void 0,Tg=t=>t,Aa=(t,e=Tg)=>{let n=Sg;t.default&&t.default!==!0&&(t=t.default,n=Object.keys(t));let r={};for(let s of n){let i=e(t[s],s);E.und(i)||(r[s]=i)}return r},Sg=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ig={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Cg(t){let e={},n=0;if(Ye(t,(r,s)=>{Ig[s]||(e[s]=r,n++)}),n)return e}function mh(t){let e=Cg(t);if(e){let n={to:e};return Ye(t,(r,s)=>s in e||(n[s]=r)),n}return{...t}}function ar(t){return t=Se(t),E.arr(t)?t.map(ar):Hs(t)?Ue.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function xg(t){for(let e in t)return!0;return!1}function ho(t){return E.fun(t)||E.arr(t)&&E.obj(t[0])}function Rg(t,e){var n;(n=t.ref)==null||n.delete(t),e==null||e.delete(t)}function Ng(t,e){var n;e&&t.ref!==e&&((n=t.ref)==null||n.delete(t),e.add(t),t.ref=e)}var Dg={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},po={...Dg.default,mass:1,damping:1,easing:rg.linear,clamp:!1},Og=class{constructor(){I(this,"tension");I(this,"friction");I(this,"frequency");I(this,"damping");I(this,"mass");I(this,"velocity",0);I(this,"restVelocity");I(this,"precision");I(this,"progress");I(this,"duration");I(this,"easing");I(this,"clamp");I(this,"bounce");I(this,"decay");I(this,"round");Object.assign(this,po)}};function Pg(t,e,n){n&&(n={...n},sc(n,e),e={...n,...e}),sc(t,e),Object.assign(t,e);for(let o in po)t[o]==null&&(t[o]=po[o]);let{frequency:r,damping:s}=t,{mass:i}=t;return E.und(r)||(r<.01&&(r=.01),s<0&&(s=0),t.tension=Math.pow(2*Math.PI/r,2)*i,t.friction=4*Math.PI*s*i/r),t}function sc(t,e){if(!E.und(e.decay))t.duration=void 0;else{let n=!E.und(e.tension)||!E.und(e.friction);(n||!E.und(e.frequency)||!E.und(e.damping)||!E.und(e.mass))&&(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0)}}var ic=[],Mg=class{constructor(){I(this,"changed",!1);I(this,"values",ic);I(this,"toValues",null);I(this,"fromValues",ic);I(this,"to");I(this,"from");I(this,"config",new Og);I(this,"immediate",!1)}};function gh(t,{key:e,props:n,defaultProps:r,state:s,actions:i}){return new Promise((o,a)=>{let l,c,u=Kn(n.cancel??(r==null?void 0:r.cancel),e);if(u)f();else{E.und(n.pause)||(s.paused=Kn(n.pause,e));let y=r==null?void 0:r.pause;y!==!0&&(y=s.paused||Kn(y,e)),l=xt(n.delay||0,e),y?(s.resumeQueue.add(p),i.pause()):(i.resume(),p())}function d(){s.resumeQueue.add(p),s.timeouts.delete(c),c.cancel(),l=c.time-M.now()}function p(){l>0&&!Ue.skipAnimation?(s.delayed=!0,c=M.setTimeout(f,l),s.pauseQueue.add(d),s.timeouts.add(c)):f()}function f(){s.delayed&&(s.delayed=!1),s.pauseQueue.delete(d),s.timeouts.delete(c),t<=(s.cancelId||0)&&(u=!0);try{i.start({...n,callId:t,cancel:u},o)}catch(y){a(y)}}})}var Ta=(t,e)=>e.length==1?e[0]:e.some(n=>n.cancelled)?tn(t.get()):e.every(n=>n.noop)?yh(t.get()):je(t.get(),e.every(n=>n.finished)),yh=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),je=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),tn=t=>({value:t,cancelled:!0,finished:!1});function vh(t,e,n,r){let{callId:s,parentId:i,onRest:o}=e,{asyncTo:a,promise:l}=n;return!i&&t===a&&!e.reset?l:n.promise=(async()=>{n.asyncId=s,n.asyncTo=t;let c=Aa(e,(g,A)=>A==="onRest"?void 0:g),u,d,p=new Promise((g,A)=>(u=g,d=A)),f=g=>{let A=s<=(n.cancelId||0)&&tn(r)||s!==n.asyncId&&je(r,!1);if(A)throw g.result=A,d(g),g},y=(g,A)=>{let w=new oc,C=new ac;return(async()=>{if(Ue.skipAnimation)throw lr(n),C.result=je(r,!1),d(C),C;f(w);let S=E.obj(g)?{...g}:{...A,to:g};S.parentId=s,Ye(c,(K,Ae)=>{E.und(S[Ae])&&(S[Ae]=K)});let $=await r.start(S);return f(w),n.paused&&await new Promise(K=>{n.resumeQueue.add(K)}),$})()},v;if(Ue.skipAnimation)return lr(n),je(r,!1);try{let g;E.arr(t)?g=(async A=>{for(let w of A)await y(w)})(t):g=Promise.resolve(t(y,r.stop.bind(r))),await Promise.all([g.then(u),p]),v=je(r.get(),!0,!1)}catch(g){if(g instanceof oc)v=g.result;else if(g instanceof ac)v=g.result;else throw g}finally{s==n.asyncId&&(n.asyncId=i,n.asyncTo=i?a:void 0,n.promise=i?l:void 0)}return E.fun(o)&&M.batchedUpdates(()=>{o(v,r,r.item)}),v})()}function lr(t,e){Gn(t.timeouts,n=>n.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}var oc=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");I(this,"result")}},ac=class extends Error{constructor(){super("SkipAnimationSignal");I(this,"result")}},fo=t=>t instanceof Sa,kg=1,Sa=class extends sh{constructor(){super(...arguments);I(this,"id",kg++);I(this,"_priority",0)}get priority(){return this._priority}set priority(n){this._priority!=n&&(this._priority=n,this._onPriorityChange(n))}get(){let n=qe(this);return n&&n.getValue()}to(...n){return Ue.to(this,n)}interpolate(...n){return hg(),Ue.to(this,n)}toJSON(){return this.get()}observerAdded(n){n==1&&this._attach()}observerRemoved(n){n==0&&this._detach()}_attach(){}_detach(){}_onChange(n,r=!1){rr(this,{type:"change",parent:this,value:n,idle:r})}_onPriorityChange(n){this.idle||Bs.sort(this),rr(this,{type:"priority",parent:this,priority:n})}},Ft=Symbol.for("SpringPhase"),_h=1,mo=2,go=4,Ii=t=>(t[Ft]&_h)>0,ot=t=>(t[Ft]&mo)>0,On=t=>(t[Ft]&go)>0,lc=(t,e)=>e?t[Ft]|=mo|_h:t[Ft]&=~mo,cc=(t,e)=>e?t[Ft]|=go:t[Ft]&=~go,jg=class extends Sa{constructor(e,n){super();I(this,"key");I(this,"animation",new Mg);I(this,"queue");I(this,"defaultProps",{});I(this,"_state",{paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});I(this,"_pendingCalls",new Set);I(this,"_lastCallId",0);I(this,"_lastToId",0);I(this,"_memoizedDuration",0);if(!E.und(e)||!E.und(n)){let r=E.obj(e)?{...e}:{...n,from:e};E.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(ot(this)||this._state.asyncTo)||On(this)}get goal(){return Se(this.animation.to)}get velocity(){let e=qe(this);return e instanceof xr?e.lastVelocity||0:e.getPayload().map(n=>n.lastVelocity||0)}get hasAnimated(){return Ii(this)}get isAnimating(){return ot(this)}get isPaused(){return On(this)}get isDelayed(){return this._state.delayed}advance(e){let n=!0,r=!1,s=this.animation,{toValues:i}=s,{config:o}=s,a=qs(s.to);!a&&Pe(s.to)&&(i=xe(Se(s.to))),s.values.forEach((u,d)=>{if(u.done)return;let p=u.constructor==or?1:a?a[d].lastPosition:i[d],f=s.immediate,y=p;if(!f){if(y=u.lastPosition,o.tension<=0){u.done=!0;return}let v=u.elapsedTime+=e,g=s.fromValues[d],A=u.v0!=null?u.v0:u.v0=E.arr(o.velocity)?o.velocity[d]:o.velocity,w,C=o.precision||(g==p?.005:Math.min(1,Math.abs(p-g)*.001));if(E.und(o.duration))if(o.decay){let S=o.decay===!0?.998:o.decay,$=Math.exp(-(1-S)*v);y=g+A/(1-S)*(1-$),f=Math.abs(u.lastPosition-y)<=C,w=A*$}else{w=u.lastVelocity==null?A:u.lastVelocity;let S=o.restVelocity||C/10,$=o.clamp?0:o.bounce,K=!E.und($),Ae=g==p?u.v0>0:g<p,pe,De=!1,le=1,$e=Math.ceil(e/le);for(let ce=0;ce<$e&&(pe=Math.abs(w)>S,!(!pe&&(f=Math.abs(p-y)<=C,f)));++ce){K&&(De=y==p||y>p==Ae,De&&(w=-w*$,y=p));let Oe=-o.tension*1e-6*(y-p),Ce=-o.friction*.001*w,Kt=(Oe+Ce)/o.mass;w=w+Kt*le,y=y+w*le}}else{let S=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,u.durationProgress>0&&(u.elapsedTime=o.duration*u.durationProgress,v=u.elapsedTime+=e)),S=(o.progress||0)+v/this._memoizedDuration,S=S>1?1:S<0?0:S,u.durationProgress=S),y=g+o.easing(S)*(p-g),w=(y-u.lastPosition)/e,f=S==1}u.lastVelocity=w,Number.isNaN(y)&&(console.warn("Got NaN while animating:",this),f=!0)}a&&!a[d].done&&(f=!1),f?u.done=!0:n=!1,u.setValue(y,o.round)&&(r=!0)});let l=qe(this),c=l.getValue();if(n){let u=Se(s.to);(c!==u||r)&&!o.decay?(l.setValue(u),this._onChange(u)):r&&o.decay&&this._onChange(c),this._stop()}else r&&this._onChange(c)}set(e){return M.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ot(this)){let{to:e,config:n}=this.animation;M.batchedUpdates(()=>{this._onStart(),n.decay||this._set(e,!1),this._stop()})}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,n){let r;return E.und(e)?(r=this.queue||[],this.queue=[]):r=[E.obj(e)?e:{...n,to:e}],Promise.all(r.map(s=>this._update(s))).then(s=>Ta(this,s))}stop(e){let{to:n}=this.animation;return this._focus(this.get()),lr(this._state,e&&this._lastCallId),M.batchedUpdates(()=>this._stop(n,e)),this}reset(){this._update({reset:!0})}eventObserved(e){e.type=="change"?this._start():e.type=="priority"&&(this.priority=e.priority+1)}_prepareNode(e){let n=this.key||"",{to:r,from:s}=e;r=E.obj(r)?r[n]:r,(r==null||ho(r))&&(r=void 0),s=E.obj(s)?s[n]:s,s==null&&(s=void 0);let i={to:r,from:s};return Ii(this)||(e.reverse&&([r,s]=[s,r]),s=Se(s),E.und(s)?qe(this)||this._set(r):this._set(s)),i}_update({...e},n){let{key:r,defaultProps:s}=this;e.default&&Object.assign(s,Aa(e,(a,l)=>/^on/.test(l)?ph(a,r):a)),hc(this,e,"onProps"),Mn(this,"onProps",e,this);let i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let o=this._state;return gh(++this._lastCallId,{key:r,props:e,defaultProps:s,state:o,actions:{pause:()=>{On(this)||(cc(this,!0),Bn(o.pauseQueue),Mn(this,"onPause",je(this,Pn(this,this.animation.to)),this))},resume:()=>{On(this)&&(cc(this,!1),ot(this)&&this._resume(),Bn(o.resumeQueue),Mn(this,"onResume",je(this,Pn(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then(a=>{if(e.loop&&a.finished&&!(n&&a.noop)){let l=bh(e);if(l)return this._update(l,!0)}return a})}_merge(e,n,r){if(n.cancel)return this.stop(!0),r(tn(this));let s=!E.und(e.to),i=!E.und(e.from);if(s||i)if(n.callId>this._lastToId)this._lastToId=n.callId;else return r(tn(this));let{key:o,defaultProps:a,animation:l}=this,{to:c,from:u}=l,{to:d=c,from:p=u}=e;i&&!s&&(!n.default||E.und(d))&&(d=p),n.reverse&&([d,p]=[p,d]);let f=!Ze(p,u);f&&(l.from=p),p=Se(p);let y=!Ze(d,c);y&&this._focus(d);let v=ho(n.to),{config:g}=l,{decay:A,velocity:w}=g;(s||i)&&(g.velocity=0),n.config&&!v&&Pg(g,xt(n.config,o),n.config!==a.config?xt(a.config,o):void 0);let C=qe(this);if(!C||E.und(d))return r(je(this,!0));let S=E.und(n.reset)?i&&!n.default:!E.und(p)&&Kn(n.reset,o),$=S?p:this.get(),K=ar(d),Ae=E.num(K)||E.arr(K)||Hs(K),pe=!v&&(!Ae||Kn(a.immediate||n.immediate,o));if(y){let ce=uo(d);if(ce!==C.constructor)if(pe)C=this._set(K);else throw Error(`Cannot animate between ${C.constructor.name} and ${ce.name}, as the "to" prop suggests`)}let De=C.constructor,le=Pe(d),$e=!1;if(!le){let ce=S||!Ii(this)&&f;(y||ce)&&($e=Ze(ar($),K),le=!$e),(!Ze(l.immediate,pe)&&!pe||!Ze(g.decay,A)||!Ze(g.velocity,w))&&(le=!0)}if($e&&ot(this)&&(l.changed&&!S?le=!0:le||this._stop(c)),!v&&((le||Pe(c))&&(l.values=C.getPayload(),l.toValues=Pe(d)?null:De==or?[1]:xe(K)),l.immediate!=pe&&(l.immediate=pe,!pe&&!S&&this._set(c)),le)){let{onRest:ce}=l;j(Fg,Ce=>hc(this,n,Ce));let Oe=je(this,Pn(this,c));Bn(this._pendingCalls,Oe),this._pendingCalls.add(r),l.changed&&M.batchedUpdates(()=>{var Ce;l.changed=!S,ce==null||ce(Oe,this),S?xt(a.onRest,Oe):(Ce=l.onStart)==null||Ce.call(l,Oe,this)})}S&&this._set($),v?r(vh(n.to,n,this._state,this)):le?this._start():ot(this)&&!y?this._pendingCalls.add(r):r(yh($))}_focus(e){let n=this.animation;e!==n.to&&(Jl(this)&&this._detach(),n.to=e,Jl(this)&&this._attach())}_attach(){let e=0,{to:n}=this.animation;Pe(n)&&(Tn(n,this),fo(n)&&(e=n.priority+1)),this.priority=e}_detach(){let{to:e}=this.animation;Pe(e)&&sr(e,this)}_set(e,n=!0){let r=Se(e);if(!E.und(r)){let s=qe(this);if(!s||!Ze(r,s.getValue())){let i=uo(r);!s||s.constructor!=i?wa(this,i.create(r)):s.setValue(r),s&&M.batchedUpdates(()=>{this._onChange(r,n)})}}return qe(this)}_onStart(){let e=this.animation;e.changed||(e.changed=!0,Mn(this,"onStart",je(this,Pn(this,e.to)),this))}_onChange(e,n){n||(this._onStart(),xt(this.animation.onChange,e,this)),xt(this.defaultProps.onChange,e,this),super._onChange(e,n)}_start(){let e=this.animation;qe(this).reset(Se(e.to)),e.immediate||(e.fromValues=e.values.map(n=>n.lastPosition)),ot(this)||(lc(this,!0),On(this)||this._resume())}_resume(){Ue.skipAnimation?this.finish():Bs.start(this)}_stop(e,n){if(ot(this)){lc(this,!1);let r=this.animation;j(r.values,i=>{i.done=!0}),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),rr(this,{type:"idle",parent:this});let s=n?tn(this.get()):je(this.get(),Pn(this,e??r.to));Bn(this._pendingCalls,s),r.changed&&(r.changed=!1,Mn(this,"onRest",s,this))}}};function Pn(t,e){let n=ar(e),r=ar(t.get());return Ze(r,n)}function bh(t,e=t.loop,n=t.to){let r=xt(e);if(r){let s=r!==!0&&mh(r),i=(s||t).reverse,o=!s||s.reset;return cr({...t,loop:e,default:!1,pause:void 0,to:!i||ho(n)?n:void 0,from:o?t.from:void 0,reset:o,...s})}}function cr(t){let{to:e,from:n}=t=mh(t),r=new Set;return E.obj(e)&&uc(e,r),E.obj(n)&&uc(n,r),t.keys=r.size?Array.from(r):null,t}function Lg(t){let e=cr(t);return E.und(e.default)&&(e.default=Aa(e)),e}function uc(t,e){Ye(t,(n,r)=>n!=null&&e.add(r))}var Fg=["onStart","onRest","onChange","onPause","onResume"];function hc(t,e,n){t.animation[n]=e[n]!==fh(e,n)?ph(e[n],t.key):void 0}function Mn(t,e,...n){var r,s,i,o;(s=(r=t.animation)[e])==null||s.call(r,...n),(o=(i=t.defaultProps)[e])==null||o.call(i,...n)}var Ug=["onStart","onChange","onRest"],Bg=1,Vg=class{constructor(t,e){I(this,"id",Bg++);I(this,"springs",{});I(this,"queue",[]);I(this,"ref");I(this,"_flush");I(this,"_initialProps");I(this,"_lastAsyncId",0);I(this,"_active",new Set);I(this,"_changed",new Set);I(this,"_started",!1);I(this,"_item");I(this,"_state",{paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set});I(this,"_events",{onStart:new Map,onChange:new Map,onRest:new Map});this._onFrame=this._onFrame.bind(this),e&&(this._flush=e),t&&this.start({default:!0,...t})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(t=>t.idle&&!t.isDelayed&&!t.isPaused)}get item(){return this._item}set item(t){this._item=t}get(){let t={};return this.each((e,n)=>t[n]=e.get()),t}set(t){for(let e in t){let n=t[e];E.und(n)||this.springs[e].set(n)}}update(t){return t&&this.queue.push(cr(t)),this}start(t){let{queue:e}=this;return t?e=xe(t).map(cr):this.queue=[],this._flush?this._flush(this,e):(Sh(this,e),yo(this,e))}stop(t,e){if(t!==!!t&&(e=t),e){let n=this.springs;j(xe(e),r=>n[r].stop(!!t))}else lr(this._state,this._lastAsyncId),this.each(n=>n.stop(!!t));return this}pause(t){if(E.und(t))this.start({pause:!0});else{let e=this.springs;j(xe(t),n=>e[n].pause())}return this}resume(t){if(E.und(t))this.start({pause:!1});else{let e=this.springs;j(xe(t),n=>e[n].resume())}return this}each(t){Ye(this.springs,t)}_onFrame(){let{onStart:t,onChange:e,onRest:n}=this._events,r=this._active.size>0,s=this._changed.size>0;(r&&!this._started||s&&!this._started)&&(this._started=!0,Gn(t,([a,l])=>{l.value=this.get(),a(l,this,this._item)}));let i=!r&&this._started,o=s||i&&n.size?this.get():null;s&&e.size&&Gn(e,([a,l])=>{l.value=o,a(l,this,this._item)}),i&&(this._started=!1,Gn(n,([a,l])=>{l.value=o,a(l,this,this._item)}))}eventObserved(t){if(t.type=="change")this._changed.add(t.parent),t.idle||this._active.add(t.parent);else if(t.type=="idle")this._active.delete(t.parent);else return;M.onFrame(this._onFrame)}};function yo(t,e){return Promise.all(e.map(n=>Eh(t,n))).then(n=>Ta(t,n))}async function Eh(t,e,n){let{keys:r,to:s,from:i,loop:o,onRest:a,onResolve:l}=e,c=E.obj(e.default)&&e.default;o&&(e.loop=!1),s===!1&&(e.to=null),i===!1&&(e.from=null);let u=E.arr(s)||E.fun(s)?s:void 0;u?(e.to=void 0,e.onRest=void 0,c&&(c.onRest=void 0)):j(Ug,v=>{let g=e[v];if(E.fun(g)){let A=t._events[v];e[v]=({finished:w,cancelled:C})=>{let S=A.get(g);S?(w||(S.finished=!1),C&&(S.cancelled=!0)):A.set(g,{value:null,finished:w||!1,cancelled:C||!1})},c&&(c[v]=e[v])}});let d=t._state;e.pause===!d.paused?(d.paused=e.pause,Bn(e.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(e.pause=!0);let p=(r||Object.keys(t.springs)).map(v=>t.springs[v].start(e)),f=e.cancel===!0||fh(e,"cancel")===!0;(u||f&&d.asyncId)&&p.push(gh(++t._lastAsyncId,{props:e,state:d,actions:{pause:lo,resume:lo,start(v,g){f?(lr(d,t._lastAsyncId),g(tn(t))):(v.onRest=a,g(vh(u,v,d,t)))}}})),d.paused&&await new Promise(v=>{d.resumeQueue.add(v)});let y=Ta(t,await Promise.all(p));if(o&&y.finished&&!(n&&y.noop)){let v=bh(e,o,s);if(v)return Sh(t,[v]),Eh(t,v,!0)}return l&&M.batchedUpdates(()=>l(y,t,t.item)),y}function dc(t,e){let n={...t.springs};return e&&j(xe(e),r=>{E.und(r.keys)&&(r=cr(r)),E.obj(r.to)||(r={...r,to:void 0}),Th(n,r,s=>Ah(s))}),wh(t,n),n}function wh(t,e){Ye(e,(n,r)=>{t.springs[r]||(t.springs[r]=n,Tn(n,t))})}function Ah(t,e){let n=new jg;return n.key=t,e&&Tn(n,e),n}function Th(t,e,n){e.keys&&j(e.keys,r=>{(t[r]||(t[r]=n(r)))._prepareNode(e)})}function Sh(t,e){j(e,n=>{Th(t.springs,n,r=>Ah(r,t))})}var zs=({children:t,...e})=>{let n=m.useContext(ys),r=e.pause||!!n.pause,s=e.immediate||!!n.immediate;e=mg(()=>({pause:r,immediate:s}),[r,s]);let{Provider:i}=ys;return m.createElement(i,{value:e},t)},ys=$g(zs,{});zs.Provider=ys.Provider;zs.Consumer=ys.Consumer;function $g(t,e){return Object.assign(t,m.createContext(e)),t.Provider._context=t,t.Consumer._context=t,t}var Hg=()=>{let t=[],e=function(r){pg();let s=[];return j(t,(i,o)=>{if(E.und(r))s.push(i.start());else{let a=n(r,i,o);a&&s.push(i.start(a))}}),s};e.current=t,e.add=function(r){t.includes(r)||t.push(r)},e.delete=function(r){let s=t.indexOf(r);~s&&t.splice(s,1)},e.pause=function(){return j(t,r=>r.pause(...arguments)),this},e.resume=function(){return j(t,r=>r.resume(...arguments)),this},e.set=function(r){j(t,(s,i)=>{let o=E.fun(r)?r(i,s):r;o&&s.set(o)})},e.start=function(r){let s=[];return j(t,(i,o)=>{if(E.und(r))s.push(i.start());else{let a=this._getProps(r,i,o);a&&s.push(i.start(a))}}),s},e.stop=function(){return j(t,r=>r.stop(...arguments)),this},e.update=function(r){return j(t,(s,i)=>s.update(this._getProps(r,s,i))),this};let n=function(r,s,i){return E.fun(r)?r(i,s):r};return e._getProps=n,e};function qg(t,e,n){let r=E.fun(e)&&e;r&&!n&&(n=[]);let s=m.useMemo(()=>r||arguments.length==3?Hg():void 0,[]),i=m.useRef(0),o=ch(),a=m.useMemo(()=>({ctrls:[],queue:[],flush(A,w){let C=dc(A,w);return i.current>0&&!a.queue.length&&!Object.keys(C).some(S=>!A.springs[S])?yo(A,w):new Promise(S=>{wh(A,C),a.queue.push(()=>{S(yo(A,w))}),o()})}}),[]),l=m.useRef([...a.ctrls]),c=[],u=ec(t)||0;m.useMemo(()=>{j(l.current.slice(t,u),A=>{Rg(A,s),A.stop(!0)}),l.current.length=t,d(u,t)},[t]),m.useMemo(()=>{d(0,Math.min(u,t))},n);function d(A,w){for(let C=A;C<w;C++){let S=l.current[C]||(l.current[C]=new Vg(null,a.flush)),$=r?r(C,S):e[C];$&&(c[C]=Lg($))}}let p=l.current.map((A,w)=>dc(A,c[w])),f=m.useContext(zs),y=ec(f),v=f!==y&&xg(f);Ea(()=>{i.current++,a.ctrls=l.current;let{queue:A}=a;A.length&&(a.queue=[],j(A,w=>w())),j(l.current,(w,C)=>{s==null||s.add(w),v&&w.start({default:f});let S=c[C];S&&(Ng(w,S.ref),w.ref?w.queue.push(S):w.start(S))})}),uh(()=>()=>{j(a.ctrls,A=>A.stop(!0))});let g=p.map(A=>({...A}));return s?[g,s]:g}function Ci(t,e){let n=E.fun(t),[[r],s]=qg(1,n?t:[t],n?e||[]:e);return n||arguments.length==2?[r,s]:r}var Gg=class extends Sa{constructor(n,r){super();I(this,"key");I(this,"idle",!0);I(this,"calc");I(this,"_active",new Set);this.source=n,this.calc=nr(...r);let s=this._get(),i=uo(s);wa(this,i.create(s))}advance(n){let r=this._get(),s=this.get();Ze(r,s)||(qe(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&pc(this._active)&&xi(this)}_get(){let n=E.arr(this.source)?this.source.map(Se):xe(Se(this.source));return this.calc(...n)}_start(){this.idle&&!pc(this._active)&&(this.idle=!1,j(qs(this),n=>{n.done=!1}),Ue.skipAnimation?(M.batchedUpdates(()=>this.advance()),xi(this)):Bs.start(this))}_attach(){let n=1;j(xe(this.source),r=>{Pe(r)&&Tn(r,this),fo(r)&&(r.idle||this._active.add(r),n=Math.max(n,r.priority+1))}),this.priority=n,this._start()}_detach(){j(xe(this.source),n=>{Pe(n)&&sr(n,this)}),this._active.clear(),xi(this)}eventObserved(n){n.type=="change"?n.idle?this.advance():(this._active.add(n.parent),this._start()):n.type=="idle"?this._active.delete(n.parent):n.type=="priority"&&(this.priority=xe(this.source).reduce((r,s)=>Math.max(r,(fo(s)?s.priority:0)+1),0))}};function zg(t){return t.idle!==!1}function pc(t){return!t.size||Array.from(t).every(zg)}function xi(t){t.idle||(t.idle=!0,j(qs(t),e=>{e.done=!0}),rr(t,{type:"idle",parent:t}))}Ue.assign({createStringInterpolator:ah,to:(t,e)=>new Gg(t,e)});var Ih=/^--/;function Kg(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!Ih.test(t)&&!(Wn.hasOwnProperty(t)&&Wn[t])?e+"px":(""+e).trim()}var fc={};function Wg(t,e){if(!t.nodeType||!t.setAttribute)return!1;let n=t.nodeName==="filter"||t.parentNode&&t.parentNode.nodeName==="filter",{style:r,children:s,scrollTop:i,scrollLeft:o,viewBox:a,...l}=e,c=Object.values(l),u=Object.keys(l).map(d=>n||t.hasAttribute(d)?d:fc[d]||(fc[d]=d.replace(/([A-Z])/g,p=>"-"+p.toLowerCase())));s!==void 0&&(t.textContent=s);for(let d in r)if(r.hasOwnProperty(d)){let p=Kg(d,r[d]);Ih.test(d)?t.style.setProperty(d,p):t.style[d]=p}u.forEach((d,p)=>{t.setAttribute(d,c[p])}),i!==void 0&&(t.scrollTop=i),o!==void 0&&(t.scrollLeft=o),a!==void 0&&t.setAttribute("viewBox",a)}var Wn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qg=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1),Yg=["Webkit","Ms","Moz","O"];Wn=Object.keys(Wn).reduce((t,e)=>(Yg.forEach(n=>t[Qg(n,e)]=t[e]),t),Wn);var Xg=/^(matrix|translate|scale|rotate|skew)/,Jg=/^(translate)/,Zg=/^(rotate|skew)/,Ri=(t,e)=>E.num(t)&&t!==0?t+e:t,os=(t,e)=>E.arr(t)?t.every(n=>os(n,e)):E.num(t)?t===e:parseFloat(t)===e,ey=class extends Gs{constructor({x:t,y:e,z:n,...r}){let s=[],i=[];(t||e||n)&&(s.push([t||0,e||0,n||0]),i.push(o=>[`translate3d(${o.map(a=>Ri(a,"px")).join(",")})`,os(o,0)])),Ye(r,(o,a)=>{if(a==="transform")s.push([o||""]),i.push(l=>[l,l===""]);else if(Xg.test(a)){if(delete r[a],E.und(o))return;let l=Jg.test(a)?"px":Zg.test(a)?"deg":"";s.push(xe(o)),i.push(a==="rotate3d"?([c,u,d,p])=>[`rotate3d(${c},${u},${d},${Ri(p,l)})`,os(p,0)]:c=>[`${a}(${c.map(u=>Ri(u,l)).join(",")})`,os(c,a.startsWith("scale")?1:0)])}}),s.length&&(r.transform=new ty(s,i)),super(r)}},ty=class extends sh{constructor(n,r){super();I(this,"_value",null);this.inputs=n,this.transforms=r}get(){return this._value||(this._value=this._get())}_get(){let n="",r=!0;return j(this.inputs,(s,i)=>{let o=Se(s[0]),[a,l]=this.transforms[i](E.arr(o)?o:s.map(Se));n+=" "+a,r=r&&l}),r?"none":n}observerAdded(n){n==1&&j(this.inputs,r=>j(r,s=>Pe(s)&&Tn(s,this)))}observerRemoved(n){n==0&&j(this.inputs,r=>j(r,s=>Pe(s)&&sr(s,this)))}eventObserved(n){n.type=="change"&&(this._value=null),rr(this,n)}},ny=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];Ue.assign({batchedUpdates:oa.unstable_batchedUpdates,createStringInterpolator:ah,colors:qm});var ry=Ag(ny,{applyAnimatedValues:Wg,createAnimatedStyle:t=>new ey(t),getComponentProps:({scrollTop:t,scrollLeft:e,...n})=>n}),Ni=ry.animated;const sy="/assets/group-working-2c2d324b.webp",iy="/assets/girl-smiling-bb136652.webp",oy="/assets/man-on-phone-08124045.webp",ay=()=>{const[t,e]=Ci(()=>({y:0})),[n,r]=Ci(()=>({y:0})),[s,i]=Ci(()=>({y:0})),o=()=>e({y:-10}),a=()=>e({y:0}),l=()=>r({y:-10}),c=()=>r({y:0}),u=()=>i({y:-10}),d=()=>i({y:0});return h.jsx("div",{children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col text-section",children:[h.jsx("h1",{className:"landing-page-headings",children:"Better hiring starts with Reel Talent"}),h.jsx("p",{className:"landing-page-pg",children:"Hiring good people is important for the success of any business. They bring new ideas, energy, and skill to the table, and help drive the company forward. At Reel Talent, we understand the importance of finding the right candidates for your organization, and we strive to make the hiring process as easy and effective as possible."})]}),h.jsx("div",{className:"col image-section",children:h.jsx(Ni.img,{src:sy,alt:"First Image",className:"aspect-ratio-3-4",style:{transform:t.y.interpolate(p=>`translateY(${p}px)`)},onMouseEnter:o,onMouseLeave:a})})]}),h.jsxs("div",{className:"row",children:[h.jsx("div",{className:"col image-section image__girl",children:h.jsx(Ni.img,{loading:"lazy",src:iy,alt:"Second Image",className:"aspect-ratio-3-4",style:{transform:n.y.interpolate(p=>`translateY(${p}px)`)},onMouseEnter:l,onMouseLeave:c})}),h.jsxs("div",{className:"col text-section",children:[h.jsx("h1",{className:"landing-page-headings",children:"The Benefits of Good Hiring Practices"}),h.jsx("p",{className:"landing-page-pg",children:"Another important aspect of hiring good people is that they help to create a positive and productive work environment. This in turn leads to higher employee satisfaction and retention, which is good for both the company and the employees."})]})]}),h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col text-section",children:[h.jsx("h1",{className:"landing-page-headings",children:"How Reel Talent Can Help You Hire the Right People"}),h.jsx("p",{className:"landing-page-pg",children:"At Reel Talent, we are dedicated to providing our clients with the best possible service and support. Whether you're a small startup or a large corporation, we have the resources and expertise to help you find the talent you need to achieve your goals."})]}),h.jsx("div",{className:"col image-section",children:h.jsx(Ni.img,{loading:"lazy",src:oy,alt:"Second Image",className:"aspect-ratio-3-4",style:{transform:s.y.interpolate(p=>`translateY(${p}px)`)},onMouseEnter:u,onMouseLeave:d})})]})]})})},ly=()=>h.jsx("div",{children:h.jsx(ay,{})});/*! *****************************************************************************
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
***************************************************************************** */var vo=function(t,e){return vo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var s in r)r.hasOwnProperty(s)&&(n[s]=r[s])},vo(t,e)};function Rr(t,e){vo(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var ur=function(){return ur=Object.assign||function(e){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ur.apply(this,arguments)};function cy(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var uy=`/*
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
}`;cy(uy);function Di(t){return t.charAt(0)==="#"?t.slice(1):t}function hy(t){return t!=null&&t.primaryColor&&(t.primaryColor=Di(t.primaryColor)),t!=null&&t.textColor&&(t.textColor=Di(t.textColor)),t!=null&&t.backgroundColor&&(t.backgroundColor=Di(t.backgroundColor)),t}var mc;(function(t){t.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",t.EVENT_TYPE_VIEWED="calendly.event_type_viewed",t.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",t.EVENT_SCHEDULED="calendly.event_scheduled"})(mc||(mc={}));var Ch=function(t){var e=t.url,n=t.prefill,r=n===void 0?{}:n,s=t.pageSettings,i=s===void 0?{}:s,o=t.utm,a=o===void 0?{}:o,l=t.embedType,c=hy(i),u=c.backgroundColor,d=c.hideEventTypeDetails,p=c.hideLandingPageDetails,f=c.primaryColor,y=c.textColor,v=c.hideGdprBanner,g=r.customAnswers,A=r.date,w=r.email,C=r.firstName,S=r.guests,$=r.lastName,K=r.location,Ae=r.name,pe=a.utmCampaign,De=a.utmContent,le=a.utmMedium,$e=a.utmSource,ce=a.utmTerm,Oe=a.salesforce_uuid,Ce=e.indexOf("?"),Kt=Ce>-1,Dn=e.slice(Ce+1),Ml=Kt?e.slice(0,Ce):e,Nf=[Kt?Dn:null,u?"background_color="+u:null,d?"hide_event_type_details=1":null,p?"hide_landing_page_details=1":null,f?"primary_color="+f:null,y?"text_color="+y:null,v?"hide_gdpr_banner=1":null,Ae?"name="+encodeURIComponent(Ae):null,K?"location="+encodeURIComponent(K):null,C?"first_name="+encodeURIComponent(C):null,$?"last_name="+encodeURIComponent($):null,S?"guests="+S.map(encodeURIComponent).join(","):null,w?"email="+encodeURIComponent(w):null,A&&A instanceof Date?"date="+dy(A):null,pe?"utm_campaign="+encodeURIComponent(pe):null,De?"utm_content="+encodeURIComponent(De):null,le?"utm_medium="+encodeURIComponent(le):null,$e?"utm_source="+encodeURIComponent($e):null,ce?"utm_term="+encodeURIComponent(ce):null,Oe?"salesforce_uuid="+encodeURIComponent(Oe):null,l?"embed_type="+l:null,"embed_domain=1"].concat(g?fy(g):[]).filter(function(Df){return Df!==null}).join("&");return Ml+"?"+Nf},dy=function(t){var e=t.getMonth()+1,n=t.getDate(),r=t.getFullYear();return[r,e<10?"0"+e:e,n<10?"0"+n:n].join("-")},py=/^a\d{1,2}$/,fy=function(t){var e=Object.keys(t).filter(function(n){return n.match(py)});return e.length?e.map(function(n){return n+"="+encodeURIComponent(t[n])}):[]},xh=function(t){Rr(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.render=function(){return m.createElement("div",{className:"calendly-spinner"},m.createElement("div",{className:"calendly-bounce1"}),m.createElement("div",{className:"calendly-bounce2"}),m.createElement("div",{className:"calendly-bounce3"}))},e}(m.Component),my={minWidth:"320px",height:"630px"},gy=function(t){Rr(e,t);function e(n){var r=t.call(this,n)||this;return r.state={isLoading:!0},r.onLoad=r.onLoad.bind(r),r}return e.prototype.onLoad=function(){this.setState({isLoading:!1})},e.prototype.render=function(){var n=Ch({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"});return m.createElement("div",{className:"calendly-inline-widget",style:this.props.styles||my},this.state.isLoading&&m.createElement(xh,null),m.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:n}))},e}(m.Component),yy=function(t){Rr(e,t);function e(n){var r=t.call(this,n)||this;return r.state={isLoading:!0},r.onLoad=r.onLoad.bind(r),r}return e.prototype.onLoad=function(){this.setState({isLoading:!1})},e.prototype.render=function(){var n=Ch({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"PopupWidget"});return m.createElement(m.Fragment,null,this.state.isLoading&&m.createElement(xh,null),m.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:n}))},e}(m.Component),Rh=function(t){if(!t.open)return null;if(!t.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return oa.createPortal(m.createElement("div",{className:"calendly-overlay"},m.createElement("div",{onClick:t.onModalClose,className:"calendly-close-overlay"}),m.createElement("div",{className:"calendly-popup"},m.createElement("div",{className:"calendly-popup-content"},m.createElement(yy,ur({},t)))),m.createElement("button",{className:"calendly-popup-close",onClick:t.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),t.rootElement)};(function(t){Rr(e,t);function e(n){var r=t.call(this,n)||this;return r.state={isOpen:!1},r.onClick=r.onClick.bind(r),r.onClose=r.onClose.bind(r),r}return e.prototype.onClick=function(n){n.preventDefault(),this.setState({isOpen:!0})},e.prototype.onClose=function(n){n.stopPropagation(),this.setState({isOpen:!1})},e.prototype.render=function(){return m.createElement(m.Fragment,null,m.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),m.createElement(Rh,ur({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},e})(m.Component);(function(t){Rr(e,t);function e(n){var r=t.call(this,n)||this;return r.state={isOpen:!1},r.onClick=r.onClick.bind(r),r.onClose=r.onClose.bind(r),r}return e.prototype.onClick=function(){this.setState({isOpen:!0})},e.prototype.onClose=function(n){n.stopPropagation(),this.setState({isOpen:!1})},e.prototype.render=function(){return m.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},m.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&m.createElement("span",null,"powered by Calendly")),m.createElement(Rh,ur({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},e})(m.Component);const vy=()=>h.jsxs("div",{className:"calendly__main",children:[h.jsxs("div",{className:"calendly__title",children:[h.jsx("h2",{className:"calendly__heading",children:"Book a Demo with Reel Talent"}),h.jsx("p",{className:"calendly__pg",children:"Experience the power of Reel Talent in simplifying your recruitment process. Schedule a free, live 1:1 tour with us to see how we can elevate your workforce. Let us know your recruitment challenges and we'll show you how Reel Talent can supercharge your hiring."})]}),h.jsx(gy,{pageSettings:{backgroundColor:"fff",hideEventTypeDetails:!1,hideLandingPageDetails:!1,primaryColor:"00a2ff",textColor:"4d5055"},url:"https://calendly.com/reeltalent-247/30min"})]});const hr={_origin:"https://api.emailjs.com"},_y=(t,e="https://api.emailjs.com")=>{hr._userID=t,hr._origin=e},Nh=(t,e,n)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class gc{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const Dh=(t,e,n={})=>new Promise((r,s)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:o})=>{const a=new gc(o);a.status===200||a.text==="OK"?r(a):s(a)}),i.addEventListener("error",({target:o})=>{s(new gc(o))}),i.open("POST",hr._origin+t,!0),Object.keys(n).forEach(o=>{i.setRequestHeader(o,n[o])}),i.send(e)}),by=(t,e,n,r)=>{const s=r||hr._userID;return Nh(s,t,e),Dh("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},Ey=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},wy=(t,e,n,r)=>{const s=r||hr._userID,i=Ey(n);Nh(s,t,e);const o=new FormData(i);return o.append("lib_version","3.11.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",s),Dh("/api/v1.0/email/send-form",o)},Ay={init:_y,send:by,sendForm:wy},Ty="/assets/dog-waiting-2701046f.jpg",Sy=()=>{const t=m.useRef(),[e,n]=m.useState(!1),r=s=>{s.preventDefault(),Ay.sendForm("service_i6ytsvs","template_ra8vv2k",t.current,"vvgAiHNMFcWHykmQ2").then(i=>{n(!0)},i=>{n(!0)})};return e?h.jsxs("div",{className:"thank-you",children:[h.jsx("img",{src:Ty,className:"thank-you-img",alt:"dog looking at a computer screen"}),h.jsx("h1",{className:"thank-you-header",children:"Thank you for reaching out!"}),h.jsxs("p",{children:["We will get back to you soon. In the meantime, check out our"," ",h.jsx(X,{className:"thank-you-blog",to:"/blog",children:"blog"}),"."]})]}):h.jsxs("form",{ref:t,onSubmit:r,children:[h.jsxs("div",{className:"form-section",children:[h.jsxs("div",{className:"form-row",children:[h.jsx("label",{children:"Name"}),h.jsx("input",{type:"text",name:"user_name"})]}),h.jsxs("div",{className:"form-row",children:[h.jsx("label",{children:"Work email address"}),h.jsx("input",{type:"email",name:"user_email"})]})]}),h.jsxs("div",{className:"form-section",children:[h.jsxs("div",{className:"form-row",children:[h.jsx("label",{children:"Company name"}),h.jsx("input",{type:"text",name:"company_name"})]}),h.jsxs("div",{className:"form-row",children:[h.jsx("label",{children:"Company size"}),h.jsxs("select",{name:"company_size",children:[h.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select size"}),h.jsx("option",{value:"1-10",children:"1-10"}),h.jsx("option",{value:"11-50",children:"11-50"}),h.jsx("option",{value:"51-100",children:"51-100"}),h.jsx("option",{value:"100+",children:"100+"})]})]})]}),h.jsxs("div",{className:"form-text-container",children:[h.jsx("label",{children:"Message"}),h.jsx("textarea",{className:"form-textarea",name:"message"})]}),h.jsx("input",{className:"contact-btn",type:"submit",value:"Send"})]})},Iy=()=>h.jsxs("div",{children:[h.jsxs("main",{className:"demo__main",children:[h.jsxs("div",{className:"demo__container",children:[h.jsx("h2",{className:"demo__title",children:"See how Reel Talent can improve your hiring"}),h.jsx("p",{className:"demo__pg",children:"From recruiting candidates to onboarding new team members, Reel Talent gives your company everything you need to be great at hiring."}),h.jsx("h4",{className:"demo__booking",children:"Book a session with us to:"}),h.jsxs("ul",{className:"demo__list",children:[h.jsx("li",{className:"",children:"Get an overview of the Reel Talent platform"}),h.jsx("li",{className:"",children:"Discuss your goals with a product expert"}),h.jsx("li",{className:"",children:"Receieve pricing details based on your needs"})]}),h.jsxs("p",{className:"demo__pg",children:[" ","Once you complete the request form, a Reel Talent team member will reach out within 24 business hours."]})]}),h.jsxs("div",{className:"calendly__container",children:[" ",h.jsx(vy,{})]})]}),h.jsx("section",{className:"contact__main",children:h.jsxs("div",{className:"contact__container",children:[" ",h.jsx("h2",{className:"contact__heading",children:"Find Your Perfect Fit, Connect with Us Today 👋"})]})}),h.jsx(Sy,{})]});const Ks=()=>(Fs(),h.jsx("div",{children:h.jsxs("div",{className:"error-container",children:[h.jsx("h1",{className:"error__heading",children:"Oops! Something went wrong."}),h.jsx("p",{className:"error__pg",children:"The page you are looking for cannot be found or is unavailable."}),h.jsx(X,{to:"/",children:h.jsx("button",{className:"btn1",children:"Return Home"})})]})}));const Cy="/assets/loading-bar-c873dc4b.svg",Oh=()=>h.jsx(h.Fragment,{children:h.jsx("div",{className:"loading__screen",children:h.jsx("img",{src:Cy,className:"loading__img",alt:"loading data"})})});/**
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
 */const Ph=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xy=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(p=64)),r.push(n[u],n[d],n[p],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ph(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||d==null)throw new Ry;const p=i<<2|a>>4;if(r.push(p),c!==64){const f=a<<4&240|c>>2;if(r.push(f),d!==64){const y=c<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ry extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ny=function(t){const e=Ph(t);return Mh.encodeByteArray(e,!0)},vs=function(t){return Ny(t).replace(/\./g,"")},Dy=function(t){try{return Mh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Oy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Py=()=>Oy().__FIREBASE_DEFAULTS__,My=()=>{if(typeof process>"u"||typeof{MANPATH:"/opt/homebrew/share/man::",TERM_PROGRAM:"vscode",NODE:"/usr/local/bin/node",INIT_CWD:"/Users/bobby./code-projects/reel-talent",TERM:"xterm-256color",SHELL:"/bin/zsh",npm_config_metrics_registry:"https://registry.npmjs.org/",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/y1/v3c69tkn579_mmhrg349bx440000gn/T/",npm_config_global_prefix:"/usr/local",TERM_PROGRAM_VERSION:"1.79.1",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/bobby./code-projects/reel-talent",USER:"bobby.",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/usr/local/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.4eUKwkhmyi/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_execpath:"/usr/local/lib/node_modules/npm/bin/npm-cli.js",PATH:"/Users/bobby./code-projects/reel-talent/node_modules/.bin:/Users/bobby./code-projects/node_modules/.bin:/Users/bobby./node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin",npm_package_json:"/Users/bobby./code-projects/reel-talent/package.json",_:"/Users/bobby./code-projects/reel-talent/node_modules/.bin/vite",npm_config_userconfig:"/Users/bobby./.npmrc",npm_config_init_module:"/Users/bobby./.npm-init.js",__CFBundleIdentifier:"com.microsoft.VSCode",npm_command:"run-script",PWD:"/Users/bobby./code-projects/reel-talent",npm_lifecycle_event:"build",EDITOR:"vi",npm_package_name:"reel-talent",LANG:"en_US.UTF-8",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",XPC_FLAGS:"0x0",npm_config_node_gyp:"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"1.0.0",XPC_SERVICE_NAME:"application.com.microsoft.VSCode.58121225.58121231",SHLVL:"1",HOME:"/Users/bobby.",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/bobby./.npm",LOGNAME:"bobby.",npm_lifecycle_script:"vite build",VSCODE_GIT_IPC_HANDLE:"/var/folders/y1/v3c69tkn579_mmhrg349bx440000gn/T/vscode-git-5b829ce778.sock",npm_config_user_agent:"npm/9.6.4 node/v20.0.0 darwin arm64 workspaces/false",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",npm_node_execpath:"/usr/local/bin/node",npm_config_prefix:"/usr/local",COLORTERM:"truecolor",NODE_ENV:"production",VITE_FIREBASE_API_KEY:"AIzaSyDnXUnucMzBtgYnSPBKUv4S2acxyCi8Tkk",VITE_FIREBASE_AUTH_DOMAIN:"reel-talent-5ef72.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"reel-talent-5ef72",VITE_FIREBASE_STORAGE_BUCKET:"reel-talent-5ef72.appspot.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"80043393311",VITE_FIREBASE_APP_ID:"1:80043393311:web:43f2be04b4bbe841a0702a",VITE_FIREBASE_MEASUREMENT_ID:"G-3RJ1S1E46Q"}>"u")return;const t={MANPATH:"/opt/homebrew/share/man::",TERM_PROGRAM:"vscode",NODE:"/usr/local/bin/node",INIT_CWD:"/Users/bobby./code-projects/reel-talent",TERM:"xterm-256color",SHELL:"/bin/zsh",npm_config_metrics_registry:"https://registry.npmjs.org/",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/y1/v3c69tkn579_mmhrg349bx440000gn/T/",npm_config_global_prefix:"/usr/local",TERM_PROGRAM_VERSION:"1.79.1",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/bobby./code-projects/reel-talent",USER:"bobby.",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/usr/local/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.4eUKwkhmyi/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_execpath:"/usr/local/lib/node_modules/npm/bin/npm-cli.js",PATH:"/Users/bobby./code-projects/reel-talent/node_modules/.bin:/Users/bobby./code-projects/node_modules/.bin:/Users/bobby./node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin",npm_package_json:"/Users/bobby./code-projects/reel-talent/package.json",_:"/Users/bobby./code-projects/reel-talent/node_modules/.bin/vite",npm_config_userconfig:"/Users/bobby./.npmrc",npm_config_init_module:"/Users/bobby./.npm-init.js",__CFBundleIdentifier:"com.microsoft.VSCode",npm_command:"run-script",PWD:"/Users/bobby./code-projects/reel-talent",npm_lifecycle_event:"build",EDITOR:"vi",npm_package_name:"reel-talent",LANG:"en_US.UTF-8",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",XPC_FLAGS:"0x0",npm_config_node_gyp:"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"1.0.0",XPC_SERVICE_NAME:"application.com.microsoft.VSCode.58121225.58121231",SHLVL:"1",HOME:"/Users/bobby.",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/bobby./.npm",LOGNAME:"bobby.",npm_lifecycle_script:"vite build",VSCODE_GIT_IPC_HANDLE:"/var/folders/y1/v3c69tkn579_mmhrg349bx440000gn/T/vscode-git-5b829ce778.sock",npm_config_user_agent:"npm/9.6.4 node/v20.0.0 darwin arm64 workspaces/false",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",INFOPATH:"/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",npm_node_execpath:"/usr/local/bin/node",npm_config_prefix:"/usr/local",COLORTERM:"truecolor",NODE_ENV:"production",VITE_FIREBASE_API_KEY:"AIzaSyDnXUnucMzBtgYnSPBKUv4S2acxyCi8Tkk",VITE_FIREBASE_AUTH_DOMAIN:"reel-talent-5ef72.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"reel-talent-5ef72",VITE_FIREBASE_STORAGE_BUCKET:"reel-talent-5ef72.appspot.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"80043393311",VITE_FIREBASE_APP_ID:"1:80043393311:web:43f2be04b4bbe841a0702a",VITE_FIREBASE_MEASUREMENT_ID:"G-3RJ1S1E46Q"}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ky=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dy(t[1]);return e&&JSON.parse(e)},kh=()=>{try{return Py()||My()||ky()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jy=t=>{var e,n;return(n=(e=kh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ly=t=>{const e=jy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jh=()=>{var t;return(t=kh())===null||t===void 0?void 0:t.config};/**
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
 */class Fy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Uy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[vs(JSON.stringify(n)),vs(JSON.stringify(o)),a].join(".")}function By(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lh(){try{return typeof indexedDB=="object"}catch{return!1}}function Fh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Vy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const $y="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$y,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ws.prototype.create)}}class Ws{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Hy(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Tt(s,a,r)}}function Hy(t,e){return t.replace(qy,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qy=/\{\$([^}]+)}/g;function _s(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(yc(i)&&yc(o)){if(!_s(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function yc(t){return t!==null&&typeof t=="object"}/**
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
 */const Gy=1e3,zy=2,Ky=4*60*60*1e3,Wy=.5;function vc(t,e=Gy,n=zy){const r=e*Math.pow(n,t),s=Math.round(Wy*r*(Math.random()-.5)*2);return Math.min(Ky,r+s)}/**
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
 */const Ct="[DEFAULT]";/**
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
 */class Qy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xy(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yy(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yy(t){return t===Ct?void 0:t}function Xy(t){return t.instantiationMode==="EAGER"}/**
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
 */class Jy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const Zy={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},ev=B.INFO,tv={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},nv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=tv[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ia{constructor(e){this.name=e,this._logLevel=ev,this._logHandler=nv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const rv=(t,e)=>e.some(n=>t instanceof n);let _c,bc;function sv(){return _c||(_c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iv(){return bc||(bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uh=new WeakMap,_o=new WeakMap,Bh=new WeakMap,Oi=new WeakMap,Ca=new WeakMap;function ov(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ft(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Uh.set(n,t)}).catch(()=>{}),Ca.set(e,t),e}function av(t){if(_o.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_o.set(t,e)}let bo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _o.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lv(t){bo=t(bo)}function cv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pi(this),e,...n);return Bh.set(r,e.sort?e.sort():[e]),ft(r)}:iv().includes(t)?function(...e){return t.apply(Pi(this),e),ft(Uh.get(this))}:function(...e){return ft(t.apply(Pi(this),e))}}function uv(t){return typeof t=="function"?cv(t):(t instanceof IDBTransaction&&av(t),rv(t,sv())?new Proxy(t,bo):t)}function ft(t){if(t instanceof IDBRequest)return ov(t);if(Oi.has(t))return Oi.get(t);const e=uv(t);return e!==t&&(Oi.set(t,e),Ca.set(e,t)),e}const Pi=t=>Ca.get(t);function hv(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ft(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ft(o.result),l.oldVersion,l.newVersion,ft(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const dv=["get","getKey","getAll","getAllKeys","count"],pv=["put","add","delete","clear"],Mi=new Map;function Ec(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mi.get(e))return Mi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=pv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dv.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Mi.set(e,i),i}lv(t=>({...t,get:(e,n,r)=>Ec(e,n)||t.get(e,n,r),has:(e,n)=>!!Ec(e,n)||t.has(e,n)}));/**
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
 */class fv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Eo="@firebase/app",wc="0.9.12";/**
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
 */const Ut=new Ia("@firebase/app"),gv="@firebase/app-compat",yv="@firebase/analytics-compat",vv="@firebase/analytics",_v="@firebase/app-check-compat",bv="@firebase/app-check",Ev="@firebase/auth",wv="@firebase/auth-compat",Av="@firebase/database",Tv="@firebase/database-compat",Sv="@firebase/functions",Iv="@firebase/functions-compat",Cv="@firebase/installations",xv="@firebase/installations-compat",Rv="@firebase/messaging",Nv="@firebase/messaging-compat",Dv="@firebase/performance",Ov="@firebase/performance-compat",Pv="@firebase/remote-config",Mv="@firebase/remote-config-compat",kv="@firebase/storage",jv="@firebase/storage-compat",Lv="@firebase/firestore",Fv="@firebase/firestore-compat",Uv="firebase",Bv="9.22.2";/**
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
 */const wo="[DEFAULT]",Vv={[Eo]:"fire-core",[gv]:"fire-core-compat",[vv]:"fire-analytics",[yv]:"fire-analytics-compat",[bv]:"fire-app-check",[_v]:"fire-app-check-compat",[Ev]:"fire-auth",[wv]:"fire-auth-compat",[Av]:"fire-rtdb",[Tv]:"fire-rtdb-compat",[Sv]:"fire-fn",[Iv]:"fire-fn-compat",[Cv]:"fire-iid",[xv]:"fire-iid-compat",[Rv]:"fire-fcm",[Nv]:"fire-fcm-compat",[Dv]:"fire-perf",[Ov]:"fire-perf-compat",[Pv]:"fire-rc",[Mv]:"fire-rc-compat",[kv]:"fire-gcs",[jv]:"fire-gcs-compat",[Lv]:"fire-fst",[Fv]:"fire-fst-compat","fire-js":"fire-js",[Uv]:"fire-js-all"};/**
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
 */const bs=new Map,Ao=new Map;function $v(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vt(t){const e=t.name;if(Ao.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;Ao.set(e,t);for(const n of bs.values())$v(n,t);return!0}function Nr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Hv={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mt=new Ws("app","Firebase",Hv);/**
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
 */class qv{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
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
 */const Gv=Bv;function Vh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw mt.create("bad-app-name",{appName:String(s)});if(n||(n=jh()),!n)throw mt.create("no-options");const i=bs.get(s);if(i){if(_s(n,i.options)&&_s(r,i.config))return i;throw mt.create("duplicate-app",{appName:s})}const o=new Jy(s);for(const l of Ao.values())o.addComponent(l);const a=new qv(n,r,o);return bs.set(s,a),a}function $h(t=wo){const e=bs.get(t);if(!e&&t===wo&&jh())return Vh();if(!e)throw mt.create("no-app",{appName:t});return e}function Qe(t,e,n){var r;let s=(r=Vv[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(a.join(" "));return}vt(new tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zv="firebase-heartbeat-database",Kv=1,dr="firebase-heartbeat-store";let ki=null;function Hh(){return ki||(ki=hv(zv,Kv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dr)}}}).catch(t=>{throw mt.create("idb-open",{originalErrorMessage:t.message})})),ki}async function Wv(t){try{return await(await Hh()).transaction(dr).objectStore(dr).get(qh(t))}catch(e){if(e instanceof Tt)Ut.warn(e.message);else{const n=mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}async function Ac(t,e){try{const r=(await Hh()).transaction(dr,"readwrite");await r.objectStore(dr).put(e,qh(t)),await r.done}catch(n){if(n instanceof Tt)Ut.warn(n.message);else{const r=mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(r.message)}}}function qh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Qv=1024,Yv=30*24*60*60*1e3;class Xv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Tc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Yv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tc(),{heartbeatsToSend:n,unsentEntries:r}=Jv(this._heartbeatsCache.heartbeats),s=vs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Tc(){return new Date().toISOString().substring(0,10)}function Jv(t,e=Qv){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Sc(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lh()?Fh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Wv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ac(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ac(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sc(t){return vs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function e_(t){vt(new tt("platform-logger",e=>new fv(e),"PRIVATE")),vt(new tt("heartbeat",e=>new Xv(e),"PRIVATE")),Qe(Eo,wc,t),Qe(Eo,wc,"esm2017"),Qe("fire-js","")}e_("");var t_="firebase",n_="9.22.2";/**
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
 */Qe(t_,n_,"app");const r_=(t,e)=>e.some(n=>t instanceof n);let Ic,Cc;function s_(){return Ic||(Ic=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function i_(){return Cc||(Cc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gh=new WeakMap,To=new WeakMap,zh=new WeakMap,ji=new WeakMap,xa=new WeakMap;function o_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gh.set(n,t)}).catch(()=>{}),xa.set(e,t),e}function a_(t){if(To.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});To.set(t,e)}let So={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return To.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function l_(t){So=t(So)}function c_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Li(this),e,...n);return zh.set(r,e.sort?e.sort():[e]),gt(r)}:i_().includes(t)?function(...e){return t.apply(Li(this),e),gt(Gh.get(this))}:function(...e){return gt(t.apply(Li(this),e))}}function u_(t){return typeof t=="function"?c_(t):(t instanceof IDBTransaction&&a_(t),r_(t,s_())?new Proxy(t,So):t)}function gt(t){if(t instanceof IDBRequest)return o_(t);if(ji.has(t))return ji.get(t);const e=u_(t);return e!==t&&(ji.set(t,e),xa.set(e,t)),e}const Li=t=>xa.get(t);function h_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=gt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(gt(o.result),l.oldVersion,l.newVersion,gt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const d_=["get","getKey","getAll","getAllKeys","count"],p_=["put","add","delete","clear"],Fi=new Map;function xc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fi.get(e))return Fi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=p_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||d_.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Fi.set(e,i),i}l_(t=>({...t,get:(e,n,r)=>xc(e,n)||t.get(e,n,r),has:(e,n)=>!!xc(e,n)||t.has(e,n)}));const Kh="@firebase/installations",Ra="0.6.4";/**
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
 */const Wh=1e4,Qh=`w:${Ra}`,Yh="FIS_v2",f_="https://firebaseinstallations.googleapis.com/v1",m_=60*60*1e3,g_="installations",y_="Installations";/**
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
 */const v_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Bt=new Ws(g_,y_,v_);function Xh(t){return t instanceof Tt&&t.code.includes("request-failed")}/**
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
 */function Jh({projectId:t}){return`${f_}/projects/${t}/installations`}function Zh(t){return{token:t.token,requestStatus:2,expiresIn:b_(t.expiresIn),creationTime:Date.now()}}async function ed(t,e){const r=(await e.json()).error;return Bt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function td({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function __(t,{refreshToken:e}){const n=td(t);return n.append("Authorization",E_(e)),n}async function nd(t){const e=await t();return e.status>=500&&e.status<600?t():e}function b_(t){return Number(t.replace("s","000"))}function E_(t){return`${Yh} ${t}`}/**
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
 */async function w_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Jh(t),s=td(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:Yh,appId:t.appId,sdkVersion:Qh},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await nd(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Zh(c.authToken)}}else throw await ed("Create Installation",l)}/**
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
 */function rd(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function A_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const T_=/^[cdef][\w-]{21}$/,Io="";function S_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=I_(t);return T_.test(n)?n:Io}catch{return Io}}function I_(t){return A_(t).substr(0,22)}/**
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
 */const sd=new Map;function id(t,e){const n=Qs(t);od(n,e),C_(n,e)}function od(t,e){const n=sd.get(t);if(n)for(const r of n)r(e)}function C_(t,e){const n=x_();n&&n.postMessage({key:t,fid:e}),R_()}let Rt=null;function x_(){return!Rt&&"BroadcastChannel"in self&&(Rt=new BroadcastChannel("[Firebase] FID Change"),Rt.onmessage=t=>{od(t.data.key,t.data.fid)}),Rt}function R_(){sd.size===0&&Rt&&(Rt.close(),Rt=null)}/**
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
 */const N_="firebase-installations-database",D_=1,Vt="firebase-installations-store";let Ui=null;function Na(){return Ui||(Ui=h_(N_,D_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vt)}}})),Ui}async function Es(t,e){const n=Qs(t),s=(await Na()).transaction(Vt,"readwrite"),i=s.objectStore(Vt),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&id(t,e.fid),e}async function ad(t){const e=Qs(t),r=(await Na()).transaction(Vt,"readwrite");await r.objectStore(Vt).delete(e),await r.done}async function Ys(t,e){const n=Qs(t),s=(await Na()).transaction(Vt,"readwrite"),i=s.objectStore(Vt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&id(t,a.fid),a}/**
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
 */async function Da(t){let e;const n=await Ys(t.appConfig,r=>{const s=O_(r),i=P_(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Io?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function O_(t){const e=t||{fid:S_(),registrationStatus:0};return ld(e)}function P_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Bt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=M_(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:k_(t)}:{installationEntry:e}}async function M_(t,e){try{const n=await w_(t,e);return Es(t.appConfig,n)}catch(n){throw Xh(n)&&n.customData.serverCode===409?await ad(t.appConfig):await Es(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function k_(t){let e=await Rc(t.appConfig);for(;e.registrationStatus===1;)await rd(100),e=await Rc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Da(t);return r||n}return e}function Rc(t){return Ys(t,e=>{if(!e)throw Bt.create("installation-not-found");return ld(e)})}function ld(t){return j_(t)?{fid:t.fid,registrationStatus:0}:t}function j_(t){return t.registrationStatus===1&&t.registrationTime+Wh<Date.now()}/**
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
 */async function L_({appConfig:t,heartbeatServiceProvider:e},n){const r=F_(t,n),s=__(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Qh,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await nd(()=>fetch(r,a));if(l.ok){const c=await l.json();return Zh(c)}else throw await ed("Generate Auth Token",l)}function F_(t,{fid:e}){return`${Jh(t)}/${e}/authTokens:generate`}/**
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
 */async function Oa(t,e=!1){let n;const r=await Ys(t.appConfig,i=>{if(!cd(i))throw Bt.create("not-registered");const o=i.authToken;if(!e&&V_(o))return i;if(o.requestStatus===1)return n=U_(t,e),i;{if(!navigator.onLine)throw Bt.create("app-offline");const a=H_(i);return n=B_(t,a),a}});return n?await n:r.authToken}async function U_(t,e){let n=await Nc(t.appConfig);for(;n.authToken.requestStatus===1;)await rd(100),n=await Nc(t.appConfig);const r=n.authToken;return r.requestStatus===0?Oa(t,e):r}function Nc(t){return Ys(t,e=>{if(!cd(e))throw Bt.create("not-registered");const n=e.authToken;return q_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function B_(t,e){try{const n=await L_(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Es(t.appConfig,r),n}catch(n){if(Xh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ad(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Es(t.appConfig,r)}throw n}}function cd(t){return t!==void 0&&t.registrationStatus===2}function V_(t){return t.requestStatus===2&&!$_(t)}function $_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+m_}function H_(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function q_(t){return t.requestStatus===1&&t.requestTime+Wh<Date.now()}/**
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
 */async function G_(t){const e=t,{installationEntry:n,registrationPromise:r}=await Da(e);return r?r.catch(console.error):Oa(e).catch(console.error),n.fid}/**
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
 */async function z_(t,e=!1){const n=t;return await K_(n),(await Oa(n,e)).token}async function K_(t){const{registrationPromise:e}=await Da(t);e&&await e}/**
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
 */function W_(t){if(!t||!t.options)throw Bi("App Configuration");if(!t.name)throw Bi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Bi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Bi(t){return Bt.create("missing-app-config-values",{valueName:t})}/**
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
 */const ud="installations",Q_="installations-internal",Y_=t=>{const e=t.getProvider("app").getImmediate(),n=W_(e),r=Nr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},X_=t=>{const e=t.getProvider("app").getImmediate(),n=Nr(e,ud).getImmediate();return{getId:()=>G_(n),getToken:s=>z_(n,s)}};function J_(){vt(new tt(ud,Y_,"PUBLIC")),vt(new tt(Q_,X_,"PRIVATE"))}J_();Qe(Kh,Ra);Qe(Kh,Ra,"esm2017");/**
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
 */const ws="analytics",Z_="firebase_id",eb="origin",tb=60*1e3,nb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pa="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ie=new Ia("@firebase/analytics");/**
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
 */const rb={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Re=new Ws("analytics","Analytics",rb);/**
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
 */function sb(t){if(!t.startsWith(Pa)){const e=Re.create("invalid-gtag-resource",{gtagURL:t});return Ie.warn(e.message),""}return t}function hd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ib(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ob(t,e){const n=ib("firebase-js-sdk-policy",{createScriptURL:sb}),r=document.createElement("script"),s=`${Pa}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function ab(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function lb(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await hd(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){Ie.error(a)}t("config",s,i)}async function cb(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await hd(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ie.error(i)}}function ub(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,l]=o;await cb(t,e,n,a,l)}else if(i==="config"){const[a,l]=o;await lb(t,e,n,r,a,l)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Ie.error(a)}}return s}function hb(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=ub(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function db(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Pa)&&n.src.includes(t))return n;return null}/**
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
 */const pb=30,fb=1e3;class mb{constructor(e={},n=fb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const dd=new mb;function gb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function yb(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:gb(r)},i=nb.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Re.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function vb(t,e=dd,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Re.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Re.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Eb;return setTimeout(async()=>{a.abort()},n!==void 0?n:tb),pd({appId:r,apiKey:s,measurementId:i},o,a,e)}async function pd(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=dd){var i;const{appId:o,measurementId:a}=t;try{await _b(r,e)}catch(l){if(a)return Ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await yb(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!bb(c)){if(s.deleteThrottleMetadata(o),a)return Ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((i=c==null?void 0:c.customData)===null||i===void 0?void 0:i.httpStatus)===503?vc(n,s.intervalMillis,pb):vc(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,d),Ie.debug(`Calling attemptFetch again in ${u} millis`),pd(t,d,r,s)}}function _b(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Re.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bb(t){if(!(t instanceof Tt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Eb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function wb(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function Ab(){if(Lh())try{await Fh()}catch(t){return Ie.warn(Re.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ie.warn(Re.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Tb(t,e,n,r,s,i,o){var a;const l=vb(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Ie.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Ie.error(f)),e.push(l);const c=Ab().then(f=>{if(f)return r.getId()}),[u,d]=await Promise.all([l,c]);db(i)||ob(i,u.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[eb]="firebase",p.update=!0,d!=null&&(p[Z_]=d),s("config",u.measurementId,p),u.measurementId}/**
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
 */class Sb{constructor(e){this.app=e}_delete(){return delete Qn[this.app.options.appId],Promise.resolve()}}let Qn={},Dc=[];const Oc={};let Vi="dataLayer",Ib="gtag",Pc,fd,Mc=!1;function Cb(){const t=[];if(By()&&t.push("This is a browser extension environment."),Vy()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Re.create("invalid-analytics-context",{errorInfo:e});Ie.warn(n.message)}}function xb(t,e,n){Cb();const r=t.options.appId;if(!r)throw Re.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Re.create("no-api-key");if(Qn[r]!=null)throw Re.create("already-exists",{id:r});if(!Mc){ab(Vi);const{wrappedGtag:i,gtagCore:o}=hb(Qn,Dc,Oc,Vi,Ib);fd=i,Pc=o,Mc=!0}return Qn[r]=Tb(t,Dc,Oc,e,Pc,Vi,n),new Sb(t)}function Rb(t=$h()){t=dn(t);const e=Nr(t,ws);return e.isInitialized()?e.getImmediate():Nb(t)}function Nb(t,e={}){const n=Nr(t,ws);if(n.isInitialized()){const s=n.getImmediate();if(_s(e,n.getOptions()))return s;throw Re.create("already-initialized")}return n.initialize({options:e})}function Db(t,e,n,r){t=dn(t),wb(fd,Qn[t.app.options.appId],e,n,r).catch(s=>Ie.error(s))}const kc="@firebase/analytics",jc="0.10.0";function Ob(){vt(new tt(ws,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return xb(r,s,n)},"PUBLIC")),vt(new tt("analytics-internal",t,"PRIVATE")),Qe(kc,jc),Qe(kc,jc,"esm2017");function t(e){try{const n=e.getProvider(ws).getImmediate();return{logEvent:(r,s,i)=>Db(n,r,s,i)}}catch(n){throw Re.create("interop-component-reg-failed",{reason:n})}}}Ob();var Pb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,Ma=Ma||{},D=Pb||self;function Xs(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Dr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Mb(t){return Object.prototype.hasOwnProperty.call(t,$i)&&t[$i]||(t[$i]=++kb)}var $i="closure_uid_"+(1e9*Math.random()>>>0),kb=0;function jb(t,e,n){return t.call.apply(t.bind,arguments)}function Lb(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ye=jb:ye=Lb,ye.apply(null,arguments)}function Qr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ae(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function St(){this.s=this.s,this.o=this.o}var Fb=0;St.prototype.s=!1;St.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Fb!=0)&&Mb(this)};St.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const md=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ka(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Lc(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Xs(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ve(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var Ub=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{D.addEventListener("test",()=>{},e),D.removeEventListener("test",()=>{},e)}catch{}return t}();function pr(t){return/^[\s\xa0]*$/.test(t)}function Js(){var t=D.navigator;return t&&(t=t.userAgent)?t:""}function Ge(t){return Js().indexOf(t)!=-1}function ja(t){return ja[" "](t),t}ja[" "]=function(){};function Bb(t,e){var n=O0;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Vb=Ge("Opera"),pn=Ge("Trident")||Ge("MSIE"),gd=Ge("Edge"),Co=gd||pn,yd=Ge("Gecko")&&!(Js().toLowerCase().indexOf("webkit")!=-1&&!Ge("Edge"))&&!(Ge("Trident")||Ge("MSIE"))&&!Ge("Edge"),$b=Js().toLowerCase().indexOf("webkit")!=-1&&!Ge("Edge");function vd(){var t=D.document;return t?t.documentMode:void 0}var xo;e:{var Hi="",qi=function(){var t=Js();if(yd)return/rv:([^\);]+)(\)|;)/.exec(t);if(gd)return/Edge\/([\d\.]+)/.exec(t);if(pn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($b)return/WebKit\/(\S+)/.exec(t);if(Vb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qi&&(Hi=qi?qi[1]:""),pn){var Gi=vd();if(Gi!=null&&Gi>parseFloat(Hi)){xo=String(Gi);break e}}xo=Hi}var Ro;if(D.document&&pn){var Fc=vd();Ro=Fc||parseInt(xo,10)||void 0}else Ro=void 0;var Hb=Ro;function fr(t,e){if(ve.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(yd){e:{try{ja(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:qb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fr.$.h.call(this)}}ae(fr,ve);var qb={2:"touch",3:"pen",4:"mouse"};fr.prototype.h=function(){fr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Or="closure_listenable_"+(1e6*Math.random()|0),Gb=0;function zb(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++Gb,this.fa=this.ia=!1}function Zs(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function La(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Kb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function _d(t){const e={};for(const n in t)e[n]=t[n];return e}const Uc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bd(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Uc.length;i++)n=Uc[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ei(t){this.src=t,this.g={},this.h=0}ei.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Do(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new zb(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function No(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=md(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Zs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Do(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Fa="closure_lm_"+(1e6*Math.random()|0),zi={};function Ed(t,e,n,r,s){if(r&&r.once)return Ad(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ed(t,e[i],n,r,s);return null}return n=Va(n),t&&t[Or]?t.O(e,n,Dr(r)?!!r.capture:!!r,s):wd(t,e,n,!1,r,s)}function wd(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Dr(s)?!!s.capture:!!s,a=Ba(t);if(a||(t[Fa]=a=new ei(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Wb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Ub||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Sd(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Wb(){function t(n){return e.call(t.src,t.listener,n)}const e=Qb;return t}function Ad(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ad(t,e[i],n,r,s);return null}return n=Va(n),t&&t[Or]?t.P(e,n,Dr(r)?!!r.capture:!!r,s):wd(t,e,n,!0,r,s)}function Td(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Td(t,e[i],n,r,s);else r=Dr(r)?!!r.capture:!!r,n=Va(n),t&&t[Or]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Do(i,n,r,s),-1<n&&(Zs(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ba(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Do(e,n,r,s)),(n=-1<t?e[t]:null)&&Ua(n))}function Ua(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Or])No(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Sd(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ba(e))?(No(n,t),n.h==0&&(n.src=null,e[Fa]=null)):Zs(t)}}}function Sd(t){return t in zi?zi[t]:zi[t]="on"+t}function Qb(t,e){if(t.fa)t=!0;else{e=new fr(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ua(t),t=n.call(r,e)}return t}function Ba(t){return t=t[Fa],t instanceof ei?t:null}var Ki="__closure_events_fn_"+(1e9*Math.random()>>>0);function Va(t){return typeof t=="function"?t:(t[Ki]||(t[Ki]=function(e){return t.handleEvent(e)}),t[Ki])}function oe(){St.call(this),this.i=new ei(this),this.S=this,this.J=null}ae(oe,St);oe.prototype[Or]=!0;oe.prototype.removeEventListener=function(t,e,n,r){Td(this,t,e,n,r)};function de(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ve(e,t);else if(e instanceof ve)e.target=e.target||t;else{var s=e;e=new ve(r,t),bd(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Yr(o,r,!0,e)&&s}if(o=e.g=t,s=Yr(o,r,!0,e)&&s,s=Yr(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Yr(o,r,!1,e)&&s}oe.prototype.N=function(){if(oe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Zs(n[r]);delete t.g[e],t.h--}}this.J=null};oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};oe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Yr(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&No(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var $a=D.JSON.stringify;class Yb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Xb(){var t=Ha;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Jb{constructor(){this.h=this.g=null}add(e,n){const r=Id.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Id=new Yb(()=>new Zb,t=>t.reset());class Zb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function e0(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function t0(t){D.setTimeout(()=>{throw t},0)}let mr,gr=!1,Ha=new Jb,Cd=()=>{const t=D.Promise.resolve(void 0);mr=()=>{t.then(n0)}};var n0=()=>{for(var t;t=Xb();){try{t.h.call(t.g)}catch(n){t0(n)}var e=Id;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gr=!1};function ti(t,e){oe.call(this),this.h=t||1,this.g=e||D,this.j=ye(this.qb,this),this.l=Date.now()}ae(ti,oe);T=ti.prototype;T.ga=!1;T.T=null;T.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),de(this,"tick"),this.ga&&(qa(this),this.start()))}};T.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qa(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}T.N=function(){ti.$.N.call(this),qa(this),delete this.g};function Ga(t,e,n){if(typeof t=="function")n&&(t=ye(t,n));else if(t&&typeof t.handleEvent=="function")t=ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:D.setTimeout(t,e||0)}function xd(t){t.g=Ga(()=>{t.g=null,t.i&&(t.i=!1,xd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class r0 extends St{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:xd(this)}N(){super.N(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yr(t){St.call(this),this.h=t,this.g={}}ae(yr,St);var Bc=[];function Rd(t,e,n,r){Array.isArray(n)||(n&&(Bc[0]=n.toString()),n=Bc);for(var s=0;s<n.length;s++){var i=Ed(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Nd(t){La(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ua(e)},t),t.g={}}yr.prototype.N=function(){yr.$.N.call(this),Nd(this)};yr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ni(){this.g=!0}ni.prototype.Ea=function(){this.g=!1};function s0(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function i0(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Zt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+a0(t,n)+(r?" "+r:"")})}function o0(t,e){t.info(function(){return"TIMEOUT: "+e})}ni.prototype.info=function(){};function a0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return $a(n)}catch{return e}}var Gt={},Vc=null;function ri(){return Vc=Vc||new oe}Gt.Ta="serverreachability";function Dd(t){ve.call(this,Gt.Ta,t)}ae(Dd,ve);function vr(t){const e=ri();de(e,new Dd(e))}Gt.STAT_EVENT="statevent";function Od(t,e){ve.call(this,Gt.STAT_EVENT,t),this.stat=e}ae(Od,ve);function we(t){const e=ri();de(e,new Od(e,t))}Gt.Ua="timingevent";function Pd(t,e){ve.call(this,Gt.Ua,t),this.size=e}ae(Pd,ve);function Pr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){t()},e)}var si={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Md={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function za(){}za.prototype.h=null;function $c(t){return t.h||(t.h=t.i())}function kd(){}var Mr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ka(){ve.call(this,"d")}ae(Ka,ve);function Wa(){ve.call(this,"c")}ae(Wa,ve);var Oo;function ii(){}ae(ii,za);ii.prototype.g=function(){return new XMLHttpRequest};ii.prototype.i=function(){return{}};Oo=new ii;function kr(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new yr(this),this.P=l0,t=Co?125:void 0,this.V=new ti(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new jd}function jd(){this.i=null,this.g="",this.h=!1}var l0=45e3,Po={},As={};T=kr.prototype;T.setTimeout=function(t){this.P=t};function Mo(t,e,n){t.L=1,t.v=ai(nt(e)),t.s=n,t.S=!0,Ld(t,null)}function Ld(t,e){t.G=Date.now(),jr(t),t.A=nt(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Gd(n.i,"t",r),t.C=0,n=t.l.J,t.h=new jd,t.g=dp(t.l,n?e:null,!t.s),0<t.O&&(t.M=new r0(ye(t.Pa,t,t.g),t.O)),Rd(t.U,t.g,"readystatechange",t.nb),e=t.I?_d(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),vr(),s0(t.j,t.u,t.A,t.m,t.W,t.s)}T.nb=function(t){t=t.target;const e=this.M;e&&Ke(t)==3?e.l():this.Pa(t)};T.Pa=function(t){try{if(t==this.g)e:{const u=Ke(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||Co||this.g&&(this.h.h||this.g.ja()||zc(this.g)))){this.J||u!=4||e==7||(e==8||0>=d?vr(3):vr(2)),oi(this);var n=this.g.da();this.ca=n;t:if(Fd(this)){var r=zc(this.g);t="";var s=r.length,i=Ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nt(this),Yn(this);var o="";break t}this.h.i=new D.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,i0(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pr(a)){var c=a;break t}}c=null}if(n=c)Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ko(this,n);else{this.i=!1,this.o=3,we(12),Nt(this),Yn(this);break e}}this.S?(Ud(this,u,o),Co&&this.i&&u==3&&(Rd(this.U,this.V,"tick",this.mb),this.V.start())):(Zt(this.j,this.m,o,null),ko(this,o)),u==4&&Nt(this),this.i&&!this.J&&(u==4?lp(this.l,this):(this.i=!1,jr(this)))}else R0(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,we(12)):(this.o=0,we(13)),Nt(this),Yn(this)}}}catch{}finally{}};function Fd(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Ud(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=c0(t,n),s==As){e==4&&(t.o=4,we(14),r=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Po){t.o=4,we(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Zt(t.j,t.m,s,null),ko(t,s);Fd(t)&&s!=As&&s!=Po&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,we(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),el(e),e.M=!0,we(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Nt(t),Yn(t))}T.mb=function(){if(this.g){var t=Ke(this.g),e=this.g.ja();this.C<e.length&&(oi(this),Ud(this,t,e),this.i&&t!=4&&jr(this))}};function c0(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?As:(n=Number(e.substring(n,r)),isNaN(n)?Po:(r+=1,r+n>e.length?As:(e=e.slice(r,r+n),t.C=r+n,e)))}T.cancel=function(){this.J=!0,Nt(this)};function jr(t){t.Y=Date.now()+t.P,Bd(t,t.P)}function Bd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Pr(ye(t.lb,t),e)}function oi(t){t.B&&(D.clearTimeout(t.B),t.B=null)}T.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(o0(this.j,this.A),this.L!=2&&(vr(),we(17)),Nt(this),this.o=2,Yn(this)):Bd(this,this.Y-t)};function Yn(t){t.l.H==0||t.J||lp(t.l,t)}function Nt(t){oi(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,qa(t.V),Nd(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ko(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||jo(n.i,t))){if(!t.K&&jo(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Is(n),ui(n);else break e;Za(n),we(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Pr(ye(n.ib,n),6e3));if(1>=Wd(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Dt(n,11)}else if((t.K||n.g==t)&&Is(n),!pr(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const d=c[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Qa(i,i.h),i.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,q(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=hp(r,r.J?r.pa:null,r.Y),o.K){Qd(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(oi(a),jr(a)),r.g=o}else op(r);0<n.j.length&&hi(n)}else c[0]!="stop"&&c[0]!="close"||Dt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Dt(n,7):Ja(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}vr(4)}catch{}}function u0(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Xs(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function h0(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Xs(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Vd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xs(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=h0(t),r=u0(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var $d=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function d0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Pt(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pt){this.h=t.h,Ts(this,t.j),this.s=t.s,this.g=t.g,Ss(this,t.m),this.l=t.l;var e=t.i,n=new _r;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Hc(this,n),this.o=t.o}else t&&(e=String(t).match($d))?(this.h=!1,Ts(this,e[1]||"",!0),this.s=Vn(e[2]||""),this.g=Vn(e[3]||"",!0),Ss(this,e[4]),this.l=Vn(e[5]||"",!0),Hc(this,e[6]||"",!0),this.o=Vn(e[7]||"")):(this.h=!1,this.i=new _r(null,this.h))}Pt.prototype.toString=function(){var t=[],e=this.j;e&&t.push($n(e,qc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($n(e,qc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push($n(n,n.charAt(0)=="/"?m0:f0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$n(n,y0)),t.join("")};function nt(t){return new Pt(t)}function Ts(t,e,n){t.j=n?Vn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ss(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hc(t,e,n){e instanceof _r?(t.i=e,v0(t.i,t.h)):(n||(e=$n(e,g0)),t.i=new _r(e,t.h))}function q(t,e,n){t.i.set(e,n)}function ai(t){return q(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Vn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $n(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,p0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function p0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var qc=/[#\/\?@]/g,f0=/[#\?:]/g,m0=/[#\?]/g,g0=/[#\?@]/g,y0=/#/g;function _r(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function It(t){t.g||(t.g=new Map,t.h=0,t.i&&d0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}T=_r.prototype;T.add=function(t,e){It(this),this.i=null,t=Sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Hd(t,e){It(t),e=Sn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function qd(t,e){return It(t),e=Sn(t,e),t.g.has(e)}T.forEach=function(t,e){It(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};T.ta=function(){It(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};T.Z=function(t){It(this);let e=[];if(typeof t=="string")qd(this,t)&&(e=e.concat(this.g.get(Sn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};T.set=function(t,e){return It(this),this.i=null,t=Sn(this,t),qd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};T.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Gd(t,e,n){Hd(t,e),0<n.length&&(t.i=null,t.g.set(Sn(t,e),ka(n)),t.h+=n.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function v0(t,e){e&&!t.j&&(It(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Hd(this,r),Gd(this,s,n))},t)),t.j=e}var _0=class{constructor(t,e){this.g=t,this.map=e}};function zd(t){this.l=t||b0,D.PerformanceNavigationTiming?(t=D.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(D.g&&D.g.Ka&&D.g.Ka()&&D.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var b0=10;function Kd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Wd(t){return t.h?1:t.g?t.g.size:0}function jo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Qa(t,e){t.g?t.g.add(e):t.h=e}function Qd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zd.prototype.cancel=function(){if(this.i=Yd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Yd(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ka(t.i)}var E0=class{stringify(t){return D.JSON.stringify(t,void 0)}parse(t){return D.JSON.parse(t,void 0)}};function w0(){this.g=new E0}function A0(t,e,n){const r=n||"";try{Vd(t,function(s,i){let o=s;Dr(s)&&(o=$a(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function T0(t,e){const n=new ni;if(D.Image){const r=new Image;r.onload=Qr(Xr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Qr(Xr,n,r,"TestLoadImage: error",!1,e),r.onabort=Qr(Xr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Qr(Xr,n,r,"TestLoadImage: timeout",!1,e),D.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Xr(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Lr(t){this.l=t.fc||null,this.j=t.ob||!1}ae(Lr,za);Lr.prototype.g=function(){return new li(this.l,this.j)};Lr.prototype.i=function(t){return function(){return t}}({});function li(t,e){oe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ya,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ae(li,oe);var Ya=0;T=li.prototype;T.open=function(t,e){if(this.readyState!=Ya)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,br(this)};T.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||D).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=Ya};T.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,br(this)),this.g&&(this.readyState=3,br(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof D.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xd(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Xd(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}T.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fr(this):br(this),this.readyState==3&&Xd(this)}};T.Za=function(t){this.g&&(this.response=this.responseText=t,Fr(this))};T.Ya=function(t){this.g&&(this.response=t,Fr(this))};T.ka=function(){this.g&&Fr(this)};function Fr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,br(t)}T.setRequestHeader=function(t,e){this.v.append(t,e)};T.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function br(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var S0=D.JSON.parse;function Q(t){oe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Jd,this.L=this.M=!1}ae(Q,oe);var Jd="",I0=/^https?$/i,C0=["POST","PUT"];T=Q.prototype;T.Oa=function(t){this.M=t};T.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Oo.g(),this.C=this.u?$c(this.u):$c(Oo),this.g.onreadystatechange=ye(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Gc(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=D.FormData&&t instanceof D.FormData,!(0<=md(C0,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{tp(this),0<this.B&&((this.L=x0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ye(this.ua,this)):this.A=Ga(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Gc(this,i)}};function x0(t){return pn&&typeof t.timeout=="number"&&t.ontimeout!==void 0}T.ua=function(){typeof Ma<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,de(this,"timeout"),this.abort(8))};function Gc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Zd(t),ci(t)}function Zd(t){t.F||(t.F=!0,de(t,"complete"),de(t,"error"))}T.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,de(this,"complete"),de(this,"abort"),ci(this))};T.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ci(this,!0)),Q.$.N.call(this)};T.La=function(){this.s||(this.G||this.v||this.l?ep(this):this.kb())};T.kb=function(){ep(this)};function ep(t){if(t.h&&typeof Ma<"u"&&(!t.C[1]||Ke(t)!=4||t.da()!=2)){if(t.v&&Ke(t)==4)Ga(t.La,0,t);else if(de(t,"readystatechange"),Ke(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match($d)[1]||null;!s&&D.self&&D.self.location&&(s=D.self.location.protocol.slice(0,-1)),r=!I0.test(s?s.toLowerCase():"")}n=r}if(n)de(t,"complete"),de(t,"success");else{t.m=6;try{var i=2<Ke(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Zd(t)}}finally{ci(t)}}}}function ci(t,e){if(t.g){tp(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||de(t,"ready");try{n.onreadystatechange=r}catch{}}}function tp(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(D.clearTimeout(t.A),t.A=null)}T.isActive=function(){return!!this.g};function Ke(t){return t.g?t.g.readyState:0}T.da=function(){try{return 2<Ke(this)?this.g.status:-1}catch{return-1}};T.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),S0(e)}};function zc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Jd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function R0(t){const e={};t=(t.g&&2<=Ke(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(pr(t[r]))continue;var n=e0(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}Kb(e,function(r){return r.join(", ")})}T.Ia=function(){return this.m};T.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function np(t){let e="";return La(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Xa(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=np(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):q(t,e,n))}function kn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rp(t){this.Ga=0,this.j=[],this.l=new ni,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=kn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=kn("baseRetryDelayMs",5e3,t),this.hb=kn("retryDelaySeedMs",1e4,t),this.eb=kn("forwardChannelMaxRetries",2,t),this.xa=kn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new zd(t&&t.concurrentRequestLimit),this.Ja=new w0,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}T=rp.prototype;T.ra=8;T.H=1;function Ja(t){if(sp(t),t.H==3){var e=t.W++,n=nt(t.I);if(q(n,"SID",t.K),q(n,"RID",e),q(n,"TYPE","terminate"),Ur(t,n),e=new kr(t,t.l,e),e.L=2,e.v=ai(nt(n)),n=!1,D.navigator&&D.navigator.sendBeacon)try{n=D.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&D.Image&&(new Image().src=e.v,n=!0),n||(e.g=dp(e.l,null),e.g.ha(e.v)),e.G=Date.now(),jr(e)}up(t)}function ui(t){t.g&&(el(t),t.g.cancel(),t.g=null)}function sp(t){ui(t),t.u&&(D.clearTimeout(t.u),t.u=null),Is(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&D.clearTimeout(t.m),t.m=null)}function hi(t){if(!Kd(t.i)&&!t.m){t.m=!0;var e=t.Na;mr||Cd(),gr||(mr(),gr=!0),Ha.add(e,t),t.C=0}}function N0(t,e){return Wd(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Pr(ye(t.Na,t,e),cp(t,t.C)),t.C++,!0)}T.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new kr(this,this.l,t);let i=this.s;if(this.U&&(i?(i=_d(i),bd(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ip(this,s,e),n=nt(this.I),q(n,"RID",t),q(n,"CVER",22),this.F&&q(n,"X-HTTP-Session-Id",this.F),Ur(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(np(i)))+"&"+e:this.o&&Xa(n,this.o,i)),Qa(this.i,s),this.bb&&q(n,"TYPE","init"),this.P?(q(n,"$req",e),q(n,"SID","null"),s.aa=!0,Mo(s,n,null)):Mo(s,n,e),this.H=2}}else this.H==3&&(t?Kc(this,t):this.j.length==0||Kd(this.i)||Kc(this))};function Kc(t,e){var n;e?n=e.m:n=t.W++;const r=nt(t.I);q(r,"SID",t.K),q(r,"RID",n),q(r,"AID",t.V),Ur(t,r),t.o&&t.s&&Xa(r,t.o,t.s),n=new kr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ip(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Qa(t.i,n),Mo(n,r,e)}function Ur(t,e){t.na&&La(t.na,function(n,r){q(e,r,n)}),t.h&&Vd({},function(n,r){q(e,r,n)})}function ip(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ye(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{A0(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function op(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;mr||Cd(),gr||(mr(),gr=!0),Ha.add(e,t),t.A=0}}function Za(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Pr(ye(t.Ma,t),cp(t,t.A)),t.A++,!0)}T.Ma=function(){if(this.u=null,ap(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Pr(ye(this.jb,this),t)}};T.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,we(10),ui(this),ap(this))};function el(t){t.B!=null&&(D.clearTimeout(t.B),t.B=null)}function ap(t){t.g=new kr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=nt(t.wa);q(e,"RID","rpc"),q(e,"SID",t.K),q(e,"AID",t.V),q(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&q(e,"TO",t.qa),q(e,"TYPE","xmlhttp"),Ur(t,e),t.o&&t.s&&Xa(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ai(nt(e)),n.s=null,n.S=!0,Ld(n,t)}T.ib=function(){this.v!=null&&(this.v=null,ui(this),Za(this),we(19))};function Is(t){t.v!=null&&(D.clearTimeout(t.v),t.v=null)}function lp(t,e){var n=null;if(t.g==e){Is(t),el(t),t.g=null;var r=2}else if(jo(t.i,e))n=e.F,Qd(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=ri(),de(r,new Pd(r,n)),hi(t)}else op(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&N0(t,e)||r==2&&Za(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Dt(t,5);break;case 4:Dt(t,10);break;case 3:Dt(t,6);break;default:Dt(t,2)}}}function cp(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Dt(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ye(t.pb,t);n||(n=new Pt("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||Ts(n,"https"),ai(n)),T0(n.toString(),r)}else we(2);t.H=0,t.h&&t.h.za(e),up(t),sp(t)}T.pb=function(t){t?(this.l.info("Successfully pinged google.com"),we(2)):(this.l.info("Failed to ping google.com"),we(1))};function up(t){if(t.H=0,t.ma=[],t.h){const e=Yd(t.i);(e.length!=0||t.j.length!=0)&&(Lc(t.ma,e),Lc(t.ma,t.j),t.i.i.length=0,ka(t.j),t.j.length=0),t.h.ya()}}function hp(t,e,n){var r=n instanceof Pt?nt(n):new Pt(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ss(r,r.m);else{var s=D.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Pt(null);r&&Ts(i,r),e&&(i.g=e),s&&Ss(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&q(r,n,e),q(r,"VER",t.ra),Ur(t,r),r}function dp(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Q(new Lr({ob:!0})):new Q(t.va),e.Oa(t.J),e}T.isActive=function(){return!!this.h&&this.h.isActive(this)};function pp(){}T=pp.prototype;T.Ba=function(){};T.Aa=function(){};T.za=function(){};T.ya=function(){};T.isActive=function(){return!0};T.Va=function(){};function Cs(){if(pn&&!(10<=Number(Hb)))throw Error("Environmental error: no available transport.")}Cs.prototype.g=function(t,e){return new Ne(t,e)};function Ne(t,e){oe.call(this),this.g=new rp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!pr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!pr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new In(this)}ae(Ne,oe);Ne.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;we(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=hp(t,null,t.Y),hi(t)};Ne.prototype.close=function(){Ja(this.g)};Ne.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=$a(t),t=n);e.j.push(new _0(e.fb++,t)),e.H==3&&hi(e)};Ne.prototype.N=function(){this.g.h=null,delete this.j,Ja(this.g),delete this.g,Ne.$.N.call(this)};function fp(t){Ka.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ae(fp,Ka);function mp(){Wa.call(this),this.status=1}ae(mp,Wa);function In(t){this.g=t}ae(In,pp);In.prototype.Ba=function(){de(this.g,"a")};In.prototype.Aa=function(t){de(this.g,new fp(t))};In.prototype.za=function(t){de(this.g,new mp)};In.prototype.ya=function(){de(this.g,"b")};function D0(){this.blockSize=-1}function Be(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ae(Be,D0);Be.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Wi(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Be.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Wi(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Wi(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Wi(this,r),s=0;break}}this.h=s,this.i+=e};Be.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function H(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var O0={};function tl(t){return-128<=t&&128>t?Bb(t,function(e){return new H([e|0],0>e?-1:0)}):new H([t|0],0>t?-1:0)}function We(t){if(isNaN(t)||!isFinite(t))return nn;if(0>t)return he(We(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Lo;return new H(e,0)}function gp(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return he(gp(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=We(Math.pow(e,8)),r=nn,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=We(Math.pow(e,i)),r=r.R(i).add(We(o))):(r=r.R(n),r=r.add(We(o)))}return r}var Lo=4294967296,nn=tl(0),Fo=tl(1),Wc=tl(16777216);T=H.prototype;T.ea=function(){if(ke(this))return-he(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Lo+r)*e,e*=Lo}return t};T.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(et(this))return"0";if(ke(this))return"-"+he(this).toString(t);for(var e=We(Math.pow(t,6)),n=this,r="";;){var s=Rs(n,e).g;n=xs(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,et(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};T.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function et(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function ke(t){return t.h==-1}T.X=function(t){return t=xs(this,t),ke(t)?-1:et(t)?0:1};function he(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new H(n,~t.h).add(Fo)}T.abs=function(){return ke(this)?he(this):this};T.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new H(n,n[n.length-1]&-2147483648?-1:0)};function xs(t,e){return t.add(he(e))}T.R=function(t){if(et(this)||et(t))return nn;if(ke(this))return ke(t)?he(this).R(he(t)):he(he(this).R(t));if(ke(t))return he(this.R(he(t)));if(0>this.X(Wc)&&0>t.X(Wc))return We(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Jr(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Jr(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Jr(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Jr(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new H(n,0)};function Jr(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function jn(t,e){this.g=t,this.h=e}function Rs(t,e){if(et(e))throw Error("division by zero");if(et(t))return new jn(nn,nn);if(ke(t))return e=Rs(he(t),e),new jn(he(e.g),he(e.h));if(ke(e))return e=Rs(t,he(e)),new jn(he(e.g),e.h);if(30<t.g.length){if(ke(t)||ke(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Fo,r=e;0>=r.X(t);)n=Qc(n),r=Qc(r);var s=Qt(n,1),i=Qt(r,1);for(r=Qt(r,2),n=Qt(n,2);!et(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Qt(r,1),n=Qt(n,1)}return e=xs(t,s.R(e)),new jn(s,e)}for(s=nn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=We(n),o=i.R(e);ke(o)||0<o.X(t);)n-=r,i=We(n),o=i.R(e);et(i)&&(i=Fo),s=s.add(i),t=xs(t,o)}return new jn(s,t)}T.gb=function(t){return Rs(this,t).h};T.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new H(n,this.h&t.h)};T.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new H(n,this.h|t.h)};T.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new H(n,this.h^t.h)};function Qc(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new H(n,t.h)}function Qt(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new H(s,t.h)}Cs.prototype.createWebChannel=Cs.prototype.g;Ne.prototype.send=Ne.prototype.u;Ne.prototype.open=Ne.prototype.m;Ne.prototype.close=Ne.prototype.close;si.NO_ERROR=0;si.TIMEOUT=8;si.HTTP_ERROR=6;Md.COMPLETE="complete";kd.EventType=Mr;Mr.OPEN="a";Mr.CLOSE="b";Mr.ERROR="c";Mr.MESSAGE="d";oe.prototype.listen=oe.prototype.O;Q.prototype.listenOnce=Q.prototype.P;Q.prototype.getLastError=Q.prototype.Sa;Q.prototype.getLastErrorCode=Q.prototype.Ia;Q.prototype.getStatus=Q.prototype.da;Q.prototype.getResponseJson=Q.prototype.Wa;Q.prototype.getResponseText=Q.prototype.ja;Q.prototype.send=Q.prototype.ha;Q.prototype.setWithCredentials=Q.prototype.Oa;Be.prototype.digest=Be.prototype.l;Be.prototype.reset=Be.prototype.reset;Be.prototype.update=Be.prototype.j;H.prototype.add=H.prototype.add;H.prototype.multiply=H.prototype.R;H.prototype.modulo=H.prototype.gb;H.prototype.compare=H.prototype.X;H.prototype.toNumber=H.prototype.ea;H.prototype.toString=H.prototype.toString;H.prototype.getBits=H.prototype.D;H.fromNumber=We;H.fromString=gp;var P0=function(){return new Cs},M0=function(){return ri()},Qi=si,k0=Md,j0=Gt,Yc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},L0=Lr,Zr=kd,F0=Q,U0=Be,rn=H;const Xc="@firebase/firestore";/**
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
 */let Cn="9.22.2";/**
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
 */const $t=new Ia("@firebase/firestore");function Jc(){return $t.logLevel}function R(t,...e){if($t.logLevel<=B.DEBUG){const n=e.map(nl);$t.debug(`Firestore (${Cn}): ${t}`,...n)}}function rt(t,...e){if($t.logLevel<=B.ERROR){const n=e.map(nl);$t.error(`Firestore (${Cn}): ${t}`,...n)}}function fn(t,...e){if($t.logLevel<=B.WARN){const n=e.map(nl);$t.warn(`Firestore (${Cn}): ${t}`,...n)}}function nl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function k(t="Unexpected state"){const e=`FIRESTORE (${Cn}) INTERNAL ASSERTION FAILED: `+t;throw rt(e),new Error(e)}function re(t,e){t||k()}function U(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Tt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class B0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(me.UNAUTHENTICATED))}shutdown(){}}class V0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $0{constructor(e){this.t=e,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Mt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new yp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new me(e)}}class H0{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=me.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class q0{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new H0(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class G0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z0{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.T=n.token,new G0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function K0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class W0{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=K0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function V(t,e){return t<e?-1:t>e?1:0}function mn(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ie{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ie(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?V(this.nanoseconds,e.nanoseconds):V(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Er{constructor(e,n,r){n===void 0?n=0:n>e.length&&k(),r===void 0?r=e.length-n:r>e.length-n&&k(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Er.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Er?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class W extends Er{construct(e,n,r){return new W(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new W(n)}static emptyPath(){return new W([])}}const Q0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends Er{construct(e,n,r){return new Ee(e,n,r)}static isValidIdentifier(e){return Q0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ee(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new x(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new x(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new x(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(n)}static emptyPath(){return new Ee([])}}/**
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
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(W.fromString(e))}static fromName(e){return new N(W.fromString(e).popFirst(5))}static empty(){return new N(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&W.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return W.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new W(e.slice()))}}function Y0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=P.fromTimestamp(r===1e9?new ie(n+1,0):new ie(n,r));return new _t(s,N.empty(),e)}function X0(t){return new _t(t.readTime,t.key,-1)}class _t{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _t(P.min(),N.empty(),-1)}static max(){return new _t(P.max(),N.empty(),-1)}}function J0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=N.comparator(t.documentKey,e.documentKey),n!==0?n:V(t.largestBatchId,e.largestBatchId))}/**
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
 */const Z0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function rl(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Z0)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&k(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(s=>s?_.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new _((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new _((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Br(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}sl.ct=-1;function di(t){return t==null}function Ns(t){return t===0&&1/t==-1/0}function tE(t){return typeof t=="number"&&Number.isInteger(t)&&!Ns(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Zc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Z{constructor(e,n){this.comparator=e,this.root=n||ue.EMPTY}insert(e,n){return new Z(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ue.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new es(this.root,e,this.comparator,!1)}getReverseIterator(){return new es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new es(this.root,e,this.comparator,!0)}}class es{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ue{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ue.RED,this.left=s??ue.EMPTY,this.right=i??ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ue(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ue.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw k();const e=this.left.check();if(e!==this.right.check())throw k();return e+(this.isRed()?0:1)}}ue.EMPTY=null,ue.RED=!0,ue.BLACK=!1;ue.EMPTY=new class{constructor(){this.size=0}get key(){throw k()}get value(){throw k()}get color(){throw k()}get left(){throw k()}get right(){throw k()}copy(t,e,n,r,s){return this}insert(t,e,n){return new ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new ut([])}unionWith(e){let n=new _e(Ee.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mn(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class _p extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new _p("Invalid base64 string: "+s):s}}(e);return new be(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return V(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const nE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(t){if(re(!!t),typeof t=="string"){let e=0;const n=nE.exec(t);if(re(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:te(t.seconds),nanos:te(t.nanos)}}function te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ht(t){return typeof t=="string"?be.fromBase64String(t):be.fromUint8Array(t)}/**
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
 */function il(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ol(t){const e=t.mapValue.fields.__previous_value__;return il(e)?ol(e):e}function wr(t){const e=bt(t.mapValue.fields.__local_write_time__.timestampValue);return new ie(e.seconds,e.nanos)}/**
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
 */class rE{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ar{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ar("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ar&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ts={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?il(t)?4:sE(t)?9007199254740991:10:k()}function Xe(t,e){if(t===e)return!0;const n=qt(t);if(n!==qt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wr(t).isEqual(wr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=bt(r.timestampValue),o=bt(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Ht(r.bytesValue).isEqual(Ht(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return te(r.geoPointValue.latitude)===te(s.geoPointValue.latitude)&&te(r.geoPointValue.longitude)===te(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return te(r.integerValue)===te(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=te(r.doubleValue),o=te(s.doubleValue);return i===o?Ns(i)===Ns(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return mn(t.arrayValue.values||[],e.arrayValue.values||[],Xe);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Zc(i)!==Zc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Xe(i[a],o[a])))return!1;return!0}(t,e);default:return k()}}function Tr(t,e){return(t.values||[]).find(n=>Xe(n,e))!==void 0}function gn(t,e){if(t===e)return 0;const n=qt(t),r=qt(e);if(n!==r)return V(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return V(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=te(s.integerValue||s.doubleValue),a=te(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return tu(t.timestampValue,e.timestampValue);case 4:return tu(wr(t),wr(e));case 5:return V(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Ht(s),a=Ht(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=V(o[l],a[l]);if(c!==0)return c}return V(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=V(te(s.latitude),te(i.latitude));return o!==0?o:V(te(s.longitude),te(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=gn(o[l],a[l]);if(c)return c}return V(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===ts.mapValue&&i===ts.mapValue)return 0;if(s===ts.mapValue)return 1;if(i===ts.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const d=V(a[u],c[u]);if(d!==0)return d;const p=gn(o[a[u]],l[c[u]]);if(p!==0)return p}return V(a.length,c.length)}(t.mapValue,e.mapValue);default:throw k()}}function tu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return V(t,e);const n=bt(t),r=bt(e),s=V(n.seconds,r.seconds);return s!==0?s:V(n.nanos,r.nanos)}function yn(t){return Uo(t)}function Uo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=bt(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ht(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,N.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Uo(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Uo(r.fields[a])}`;return i+"}"}(t.mapValue):k();var e,n}function nu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bo(t){return!!t&&"integerValue"in t}function al(t){return!!t&&"arrayValue"in t}function ru(t){return!!t&&"nullValue"in t}function su(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yi(t){return!!t&&"mapValue"in t}function Xn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xn(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xn(n)}setAll(e){let n=Ee.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Xn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Yi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Yi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Vr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ze(Xn(this.value))}}/**
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
 */class Ds{constructor(e,n){this.position=e,this.inclusive=n}}function iu(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),n.key):r=gn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ou(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xe(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class sn{constructor(e,n="asc"){this.field=e,this.dir=n}}function iE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bp{}class ne extends bp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new aE(e,n,r):n==="array-contains"?new uE(e,r):n==="in"?new hE(e,r):n==="not-in"?new dE(e,r):n==="array-contains-any"?new pE(e,r):new ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lE(e,r):new cE(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gn(n,this.value)):n!==null&&qt(this.value)===qt(n)&&this.matchesComparison(gn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return k()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ve extends bp{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Ve(e,n)}matches(e){return Ep(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Ep(t){return t.op==="and"}function wp(t){return oE(t)&&Ep(t)}function oE(t){for(const e of t.filters)if(e instanceof Ve)return!1;return!0}function Vo(t){if(t instanceof ne)return t.field.canonicalString()+t.op.toString()+yn(t.value);if(wp(t))return t.filters.map(e=>Vo(e)).join(",");{const e=t.filters.map(n=>Vo(n)).join(",");return`${t.op}(${e})`}}function Ap(t,e){return t instanceof ne?function(n,r){return r instanceof ne&&n.op===r.op&&n.field.isEqual(r.field)&&Xe(n.value,r.value)}(t,e):t instanceof Ve?function(n,r){return r instanceof Ve&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&Ap(i,r.filters[o]),!0):!1}(t,e):void k()}function Tp(t){return t instanceof ne?function(e){return`${e.field.canonicalString()} ${e.op} ${yn(e.value)}`}(t):t instanceof Ve?function(e){return e.op.toString()+" {"+e.getFilters().map(Tp).join(" ,")+"}"}(t):"Filter"}class aE extends ne{constructor(e,n,r){super(e,n,r),this.key=N.fromName(r.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.matchesComparison(n)}}class lE extends ne{constructor(e,n){super(e,"in",n),this.keys=Sp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cE extends ne{constructor(e,n){super(e,"not-in",n),this.keys=Sp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>N.fromName(r.referenceValue))}class uE extends ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return al(n)&&Tr(n.arrayValue,this.value)}}class hE extends ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tr(this.value.arrayValue,n)}}class dE extends ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Tr(this.value.arrayValue,n)}}class pE extends ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!al(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Tr(this.value.arrayValue,r))}}/**
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
 */class fE{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function au(t,e=null,n=[],r=[],s=null,i=null,o=null){return new fE(t,e,n,r,s,i,o)}function ll(t){const e=U(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Vo(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),di(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yn(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yn(r)).join(",")),e.dt=n}return e.dt}function cl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ap(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ou(t.startAt,e.startAt)&&ou(t.endAt,e.endAt)}function $o(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class xn{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function mE(t,e,n,r,s,i,o,a){return new xn(t,e,n,r,s,i,o,a)}function Ip(t){return new xn(t)}function lu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ul(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function pi(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Cp(t){return t.collectionGroup!==null}function on(t){const e=U(t);if(e.wt===null){e.wt=[];const n=pi(e),r=ul(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new sn(n)),e.wt.push(new sn(Ee.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new sn(Ee.keyField(),i))}}}return e.wt}function st(t){const e=U(t);if(!e._t)if(e.limitType==="F")e._t=au(e.path,e.collectionGroup,on(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of on(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new sn(i.field,o))}const r=e.endAt?new Ds(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ds(e.startAt.position,e.startAt.inclusive):null;e._t=au(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function Ho(t,e){e.getFirstInequalityField(),pi(t);const n=t.filters.concat([e]);return new xn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function qo(t,e,n){return new xn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fi(t,e){return cl(st(t),st(e))&&t.limitType===e.limitType}function xp(t){return`${ll(st(t))}|lt:${t.limitType}`}function Go(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Tp(r)).join(", ")}]`),di(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yn(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yn(r)).join(",")),`Target(${n})`}(st(t))}; limitType=${t.limitType})`}function mi(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):N.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of on(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=iu(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,on(n),r)||n.endAt&&!function(s,i,o){const a=iu(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,on(n),r))}(t,e)}function gE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Rp(t){return(e,n)=>{let r=!1;for(const s of on(t)){const i=yE(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yE(t,e,n){const r=t.field.isKeyField()?N.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),l=o.data.field(s);return a!==null&&l!==null?gn(a,l):k()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return k()}}/**
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
 */class Rn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return vp(this.inner)}size(){return this.innerSize}}/**
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
 */const vE=new Z(N.comparator);function Et(){return vE}const Np=new Z(N.comparator);function Hn(...t){let e=Np;for(const n of t)e=e.insert(n.key,n);return e}function _E(t){let e=Np;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ot(){return Jn()}function Dp(){return Jn()}function Jn(){return new Rn(t=>t.toString(),(t,e)=>t.isEqual(e))}const bE=new _e(N.comparator);function F(...t){let e=bE;for(const n of t)e=e.add(n);return e}const EE=new _e(V);function wE(){return EE}/**
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
 */function Op(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ns(e)?"-0":e}}function Pp(t){return{integerValue:""+t}}function AE(t,e){return tE(e)?Pp(e):Op(t,e)}/**
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
 */class gi{constructor(){this._=void 0}}function TE(t,e,n){return t instanceof zo?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&il(s)&&(s=ol(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Os?Mp(t,e):t instanceof Ps?kp(t,e):function(r,s){const i=IE(r,s),o=cu(i)+cu(r.gt);return Bo(i)&&Bo(r.gt)?Pp(o):Op(r.serializer,o)}(t,e)}function SE(t,e,n){return t instanceof Os?Mp(t,e):t instanceof Ps?kp(t,e):n}function IE(t,e){return t instanceof Ko?Bo(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class zo extends gi{}class Os extends gi{constructor(e){super(),this.elements=e}}function Mp(t,e){const n=jp(e);for(const r of t.elements)n.some(s=>Xe(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ps extends gi{constructor(e){super(),this.elements=e}}function kp(t,e){let n=jp(e);for(const r of t.elements)n=n.filter(s=>!Xe(s,r));return{arrayValue:{values:n}}}class Ko extends gi{constructor(e,n){super(),this.serializer=e,this.gt=n}}function cu(t){return te(t.integerValue||t.doubleValue)}function jp(t){return al(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function CE(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Os&&r instanceof Os||n instanceof Ps&&r instanceof Ps?mn(n.elements,r.elements,Xe):n instanceof Ko&&r instanceof Ko?Xe(n.gt,r.gt):n instanceof zo&&r instanceof zo}(t.transform,e.transform)}class kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kt}static exists(e){return new kt(void 0,e)}static updateTime(e){return new kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function as(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hl{}function Lp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new RE(t.key,kt.none()):new dl(t.key,t.data,kt.none());{const n=t.data,r=ze.empty();let s=new _e(Ee.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new yi(t.key,r,new ut(s.toArray()),kt.none())}}function xE(t,e,n){t instanceof dl?function(r,s,i){const o=r.value.clone(),a=hu(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof yi?function(r,s,i){if(!as(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=hu(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Fp(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Zn(t,e,n,r){return t instanceof dl?function(s,i,o,a){if(!as(s.precondition,i))return o;const l=s.value.clone(),c=du(s.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof yi?function(s,i,o,a){if(!as(s.precondition,i))return o;const l=du(s.fieldTransforms,a,i),c=i.data;return c.setAll(Fp(s)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return as(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function uu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&mn(n,r,(s,i)=>CE(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class dl extends hl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yi extends hl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Fp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hu(t,e,n){const r=new Map;re(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,SE(o,a,n[s]))}return r}function du(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,TE(i,o,e))}return r}class RE extends hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class NE{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xE(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zn(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zn(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Dp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Lp(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),F())}isEqual(e){return this.batchId===e.batchId&&mn(this.mutations,e.mutations,(n,r)=>uu(n,r))&&mn(this.baseMutations,e.baseMutations,(n,r)=>uu(n,r))}}/**
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
 */class DE{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class OE{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ee,L;function Up(t){if(t===void 0)return rt("GRPC error has no .code"),b.UNKNOWN;switch(t){case ee.OK:return b.OK;case ee.CANCELLED:return b.CANCELLED;case ee.UNKNOWN:return b.UNKNOWN;case ee.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ee.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ee.INTERNAL:return b.INTERNAL;case ee.UNAVAILABLE:return b.UNAVAILABLE;case ee.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ee.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ee.NOT_FOUND:return b.NOT_FOUND;case ee.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ee.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ee.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ee.ABORTED:return b.ABORTED;case ee.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ee.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ee.DATA_LOSS:return b.DATA_LOSS;default:return k()}}(L=ee||(ee={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class pl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ns}static getOrCreateInstance(){return ns===null&&(ns=new pl),ns}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ns=null;/**
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
 */function PE(){return new TextEncoder}/**
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
 */const ME=new rn([4294967295,4294967295],0);function pu(t){const e=PE().encode(t),n=new U0;return n.update(e),new Uint8Array(n.digest())}function fu(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new rn([n,r],0),new rn([s,i],0)]}class fl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qn(`Invalid padding: ${n}`);if(r<0)throw new qn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qn(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qn(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=rn.fromNumber(this.It)}Et(e,n,r){let s=e.add(n.multiply(rn.fromNumber(r)));return s.compare(ME)===1&&(s=new rn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=pu(e),[r,s]=fu(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);if(!this.At(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=pu(e),[r,s]=fu(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vi{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,$r.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new vi(P.min(),s,new Z(V),Et(),F())}}class $r{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $r(r,n,F(),F(),F())}}/**
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
 */class ls{constructor(e,n,r,s){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=s}}class Bp{constructor(e,n){this.targetId=e,this.Vt=n}}class Vp{constructor(e,n,r=be.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class mu{constructor(){this.St=0,this.Dt=yu(),this.Ct=be.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=F(),n=F(),r=F();return this.Dt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:k()}}),new $r(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=yu()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class kE{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Et(),this.zt=gu(),this.Wt=new Z(V)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:k()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,s)=>{this.te(s)&&n(s)})}ne(e){var n;const r=e.targetId,s=e.Vt.count,i=this.se(r);if(i){const o=i.target;if($o(o))if(s===0){const a=new N(o.path);this.Yt(r,a,ge.newNoDocument(a,P.min()))}else re(s===1);else{const a=this.ie(r);if(a!==s){const l=this.re(e,a);if(l!==0){this.ee(r);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,c)}(n=pl.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,d){var p,f,y,v,g,A;const w={localCacheCount:u,existenceFilterCount:d.count},C=d.unchangedNames;return C&&(w.bloomFilter={applied:c===0,hashCount:(p=C==null?void 0:C.hashCount)!==null&&p!==void 0?p:0,bitmapLength:(v=(y=(f=C==null?void 0:C.bits)===null||f===void 0?void 0:f.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(A=(g=C==null?void 0:C.bits)===null||g===void 0?void 0:g.padding)!==null&&A!==void 0?A:0}),w}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:s}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let l,c;try{l=Ht(i).toUint8Array()}catch(u){if(u instanceof _p)return fn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new fl(l,o,a)}catch(u){return fn(u instanceof qn?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.It===0?1:s!==n-this.oe(e.targetId,c)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),s++)}),s}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&$o(a.target)){const l=new N(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,ge.newNoDocument(l,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let r=F();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.se(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const s=new vi(e,n,this.Wt,this.jt,r);return this.jt=Et(),this.zt=gu(),this.Wt=new Z(V),s}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,n)?s.Bt(n,1):s.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new mu,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new _e(V),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new mu),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function gu(){return new Z(N.comparator)}function yu(){return new Z(N.comparator)}const jE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),LE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),FE=(()=>({and:"AND",or:"OR"}))();class UE{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wo(t,e){return t.useProto3Json||di(e)?e:{value:e}}function Qo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $p(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function an(t){return re(!!t),P.fromTimestamp(function(e){const n=bt(e);return new ie(n.seconds,n.nanos)}(t))}function Hp(t,e){return function(n){return new W(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function qp(t){const e=W.fromString(t);return re(Wp(e)),e}function Xi(t,e){const n=qp(e);if(n.get(1)!==t.databaseId.projectId)throw new x(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(Gp(n))}function Yo(t,e){return Hp(t.databaseId,e)}function BE(t){const e=qp(t);return e.length===4?W.emptyPath():Gp(e)}function vu(t){return new W(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gp(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function VE(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:k()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,c){return l.useProto3Json?(re(c===void 0||typeof c=="string"),be.fromBase64String(c||"")):(re(c===void 0||c instanceof Uint8Array),be.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?b.UNKNOWN:Up(l.code);return new x(c,l.message||"")}(o);n=new Vp(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Xi(t,r.document.name),i=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):P.min(),a=new ze({mapValue:{fields:r.document.fields}}),l=ge.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ls(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Xi(t,r.document),i=r.readTime?an(r.readTime):P.min(),o=ge.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ls([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Xi(t,r.document),i=r.removedTargetIds||[];n=new ls([],i,s,null)}else{if(!("filter"in e))return k();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new OE(s,i),a=r.targetId;n=new Bp(a,o)}}return n}function $E(t,e){return{documents:[Yo(t,e.path)]}}function HE(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Yo(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Yo(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return Kp(Ve.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Xt(u.field),direction:zE(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Wo(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function qE(t){let e=BE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){re(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const d=zp(u);return d instanceof Ve&&wp(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new sn(Jt(d.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,di(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(u){const d=!!u.before,p=u.values||[];return new Ds(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const d=!u.before,p=u.values||[];return new Ds(p,d)}(n.endAt)),mE(e,s,o,i,a,"F",l,c)}function GE(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return k()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function zp(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Jt(e.unaryFilter.field);return ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Jt(e.unaryFilter.field);return ne.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Jt(e.unaryFilter.field);return ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Jt(e.unaryFilter.field);return ne.create(i,"!=",{nullValue:"NULL_VALUE"});default:return k()}}(t):t.fieldFilter!==void 0?function(e){return ne.create(Jt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return k()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ve.create(e.compositeFilter.filters.map(n=>zp(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return k()}}(e.compositeFilter.op))}(t):k()}function zE(t){return jE[t]}function KE(t){return LE[t]}function WE(t){return FE[t]}function Xt(t){return{fieldPath:t.canonicalString()}}function Jt(t){return Ee.fromServerFormat(t.fieldPath)}function Kp(t){return t instanceof ne?function(e){if(e.op==="=="){if(su(e.value))return{unaryFilter:{field:Xt(e.field),op:"IS_NAN"}};if(ru(e.value))return{unaryFilter:{field:Xt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(su(e.value))return{unaryFilter:{field:Xt(e.field),op:"IS_NOT_NAN"}};if(ru(e.value))return{unaryFilter:{field:Xt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xt(e.field),op:KE(e.op),value:e.value}}}(t):t instanceof Ve?function(e){const n=e.getFilters().map(r=>Kp(r));return n.length===1?n[0]:{compositeFilter:{op:WE(e.op),filters:n}}}(t):k()}function Wp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ht{constructor(e,n,r,s,i=P.min(),o=P.min(),a=be.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class QE{constructor(e){this.fe=e}}function YE(t){const e=qE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qo(e,e.limit,"L"):e}/**
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
 */class XE{constructor(){this.rn=new JE}addToCollectionParentIndex(e,n){return this.rn.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(_t.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(_t.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class JE{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new _e(W.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _e(W.comparator)).toArray()}}/**
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
 */class vn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new vn(0)}static Mn(){return new vn(-1)}}/**
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
 */class ZE{constructor(){this.changes=new Rn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class e1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class t1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Zn(r.mutation,s,ut.empty(),ie.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,F()).next(()=>r))}getLocalViewOfDocuments(e,n,r=F()){const s=Ot();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Hn();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ot();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,F()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Et();const o=Jn(),a=Jn();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof yi)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Zn(u.mutation,c,u.mutation.getFieldMask(),ie.now())):o.set(c.key,ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new e1(u,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Jn();let s=new Z((o,a)=>o-a),i=F();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||ut.empty();u=a.applyToLocalView(c,u),r.set(l,u);const d=(s.get(a.batchId)||F()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=Dp();u.forEach(p=>{if(!i.has(p)){const f=Lp(n.get(p),r.get(p));f!==null&&d.set(p,f),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return N.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Cp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):_.resolve(Ot());let a=-1,l=i;return o.next(c=>_.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(u)?_.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{l=l.insert(u,p)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,F())).next(u=>({batchId:a,changes:_E(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new N(n)).next(r=>{let s=Hn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Hn();return this.indexManager.getCollectionParents(e,s).next(o=>_.forEach(o,a=>{const l=function(c,u){return new xn(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,d)=>{i=i.insert(u,d)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,ge.newInvalidDocument(c)))});let o=Hn();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Zn(c.mutation,l,ut.empty(),ie.now()),mi(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class n1{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return _.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:an(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:YE(r.bundledQuery),readTime:an(r.readTime)}}(n)),_.resolve()}}/**
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
 */class r1{constructor(){this.overlays=new Z(N.comparator),this.ls=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ot();return _.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.we(e,n,i)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.ls.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const s=Ot(),i=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return _.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Z((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Ot(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ot(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return _.resolve(a)}we(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(r.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new DE(n,r));let i=this.ls.get(n);i===void 0&&(i=F(),this.ls.set(n,i)),this.ls.set(n,i.add(r.key))}}/**
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
 */class ml{constructor(){this.fs=new _e(se.ds),this.ws=new _e(se._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new se(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new se(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new N(new W([])),r=new se(n,e),s=new se(n,e+1),i=[];return this.ws.forEachInRange([r,s],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new N(new W([])),r=new se(n,e),s=new se(n,e+1);let i=F();return this.ws.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new se(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class se{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return N.comparator(e.key,n.key)||V(e.As,n.As)}static _s(e,n){return V(e.As,n.As)||N.comparator(e.key,n.key)}}/**
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
 */class s1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new _e(se.ds)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new NE(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new se(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.bs(r),i=s<0?0:s;return _.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new se(n,0),s=new se(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,s],o=>{const a=this.Ps(o.As);i.push(a)}),_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(V);return n.forEach(s=>{const i=new se(s,0),o=new se(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{r=r.add(a.As)})}),_.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;N.isDocumentKey(i)||(i=i.child(""));const o=new se(new N(i),0);let a=new _e(V);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.As)),!0)},o),_.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const s=this.Ps(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){re(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return _.forEach(n.mutations,s=>{const i=new se(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new se(n,0),s=this.Rs.firstAfterOrEqual(r);return _.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class i1{constructor(e){this.Ds=e,this.docs=new Z(N.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():ge.newInvalidDocument(n))}getEntries(e,n){let r=Et();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ge.newInvalidDocument(s))}),_.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Et();const o=n.path,a=new N(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||J0(X0(u),r)<=0||(s.has(u.key)||mi(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,n,r,s){k()}Cs(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new o1(this)}getSize(e){return _.resolve(this.size)}}class o1 extends ZE{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.os.addEntry(e,s)):this.os.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class a1{constructor(e){this.persistence=e,this.xs=new Rn(n=>ll(n),cl),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ml,this.targetCount=0,this.Ms=vn.kn()}forEachTarget(e,n){return this.xs.forEach((r,s)=>n(s)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),_.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new vn(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.Fn(n),_.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),_.waitFor(i).next(()=>s)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),_.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.ks.containsKey(n))}}/**
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
 */class l1{constructor(e,n){this.$s={},this.overlays={},this.Os=new sl(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new a1(this),this.indexManager=new XE,this.remoteDocumentCache=function(r){return new i1(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new QE(n),this.qs=new n1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new r1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new s1(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const s=new c1(this.Os.next());return this.referenceDelegate.Us(),r(s).next(i=>this.referenceDelegate.Ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gs(e,n){return _.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class c1 extends eE{constructor(e){super(),this.currentSequenceNumber=e}}class gl{constructor(e){this.persistence=e,this.Qs=new ml,this.js=null}static zs(e){return new gl(e)}get Ws(){if(this.js)return this.js;throw k()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),_.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ws.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Ws,r=>{const s=N.fromPath(r);return this.Hs(e,s).next(i=>{i||n.removeEntry(s,P.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return _.or([()=>_.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class yl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=s}static Li(e,n){let r=F(),s=F();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yl(e,n.fromCache,r,s)}}/**
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
 */class u1{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ki(e,n).next(i=>i||this.Gi(e,n,s,r)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(lu(n))return _.resolve(null);let r=st(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=qo(n,null,"F"),r=st(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=F(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ji(n,a);return this.zi(n,c,o,l.readTime)?this.Ki(e,qo(n,null,"F")):this.Wi(e,c,n,l)}))})))}Gi(e,n,r,s){return lu(n)||s.isEqual(P.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(i=>{const o=this.ji(n,i);return this.zi(n,o,r,s)?this.Qi(e,n):(Jc()<=B.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Go(n)),this.Wi(e,o,n,Y0(s,-1)))})}ji(e,n){let r=new _e(Rp(e));return n.forEach((s,i)=>{mi(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(e,n){return Jc()<=B.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",Go(n)),this.Ui.getDocumentsMatchingQuery(e,n,_t.min())}Wi(e,n,r,s){return this.Ui.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class h1{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new Z(V),this.Yi=new Rn(i=>ll(i),cl),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new t1(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function d1(t,e,n,r){return new h1(t,e,n,r)}async function Qp(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=F();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function Yp(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function p1(t,e){const n=U(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,d)=>{const p=s.get(d);if(!p)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,d).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,d)));let f=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?f=f.withResumeToken(be.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(d,f),function(y,v,g){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(p,f,u)&&a.push(n.Bs.updateTargetData(i,f))});let l=Et(),c=F();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(f1(i,o,e.documentUpdates).next(u=>{l=u.nr,c=u.sr})),!r.isEqual(P.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(d=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return _.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Ji=s,i))}function f1(t,e,n){let r=F(),s=F();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Et();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(P.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{nr:o,sr:s}})}function m1(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Bs.getTargetData(r,e).next(i=>i?(s=i,_.resolve(s)):n.Bs.allocateTargetId(r).next(o=>(s=new ht(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Xo(t,e,n){const r=U(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Br(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function _u(t,e,n){const r=U(t);let s=P.min(),i=F();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=U(a),d=u.Yi.get(c);return d!==void 0?_.resolve(u.Ji.get(d)):u.Bs.getTargetData(l,c)}(r,o,st(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:P.min(),n?i:F())).next(a=>(g1(r,gE(e),a),{documents:a,ir:i})))}function g1(t,e,n){let r=t.Xi.get(e)||P.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Xi.set(e,r)}class bu{constructor(){this.activeTargetIds=wE()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class y1{constructor(){this.Hr=new bu,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new bu,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class v1{Yr(e){}shutdown(){}}/**
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
 */class Eu{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rs=null;function Ji(){return rs===null?rs=268435456+Math.round(2147483648*Math.random()):rs++,"0x"+rs.toString(16)}/**
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
 */const _1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class b1{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const fe="WebChannelConnection";class E1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,s,i){const o=Ji(),a=this.To(e,n);R("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,s,i),this.Ao(e,a,l,r).then(c=>(R("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw fn("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}vo(e,n,r,s,i,o){return this.Io(e,n,r,s,i)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Cn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}To(e,n){const r=_1[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,s){const i=Ji();return new Promise((o,a)=>{const l=new F0;l.setWithCredentials(!0),l.listenOnce(k0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Qi.NO_ERROR:const u=l.getResponseJson();R(fe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Qi.TIMEOUT:R(fe,`RPC '${e}' ${i} timed out`),a(new x(b.DEADLINE_EXCEEDED,"Request time out"));break;case Qi.HTTP_ERROR:const d=l.getStatus();if(R(fe,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const f=p==null?void 0:p.error;if(f&&f.status&&f.message){const y=function(v){const g=v.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(g)>=0?g:b.UNKNOWN}(f.status);a(new x(y,f.message))}else a(new x(b.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new x(b.UNAVAILABLE,"Connection failed."));break;default:k()}}finally{R(fe,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);R(fe,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Ro(e,n,r){const s=Ji(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=P0(),a=M0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new L0({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");R(fe,`Creating RPC '${e}' stream ${s}: ${u}`,l);const d=o.createWebChannel(u,l);let p=!1,f=!1;const y=new b1({ro:g=>{f?R(fe,`Not sending because RPC '${e}' stream ${s} is closed:`,g):(p||(R(fe,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),R(fe,`RPC '${e}' stream ${s} sending:`,g),d.send(g))},oo:()=>d.close()}),v=(g,A,w)=>{g.listen(A,C=>{try{w(C)}catch(S){setTimeout(()=>{throw S},0)}})};return v(d,Zr.EventType.OPEN,()=>{f||R(fe,`RPC '${e}' stream ${s} transport opened.`)}),v(d,Zr.EventType.CLOSE,()=>{f||(f=!0,R(fe,`RPC '${e}' stream ${s} transport closed`),y.wo())}),v(d,Zr.EventType.ERROR,g=>{f||(f=!0,fn(fe,`RPC '${e}' stream ${s} transport errored:`,g),y.wo(new x(b.UNAVAILABLE,"The operation could not be completed")))}),v(d,Zr.EventType.MESSAGE,g=>{var A;if(!f){const w=g.data[0];re(!!w);const C=w,S=C.error||((A=C[0])===null||A===void 0?void 0:A.error);if(S){R(fe,`RPC '${e}' stream ${s} received error:`,S);const $=S.status;let K=function(pe){const De=ee[pe];if(De!==void 0)return Up(De)}($),Ae=S.message;K===void 0&&(K=b.INTERNAL,Ae="Unknown error status: "+$+" with message "+S.message),f=!0,y.wo(new x(K,Ae)),d.close()}else R(fe,`RPC '${e}' stream ${s} received:`,w),y._o(w)}}),v(a,j0.STAT_EVENT,g=>{g.stat===Yc.PROXY?R(fe,`RPC '${e}' stream ${s} detected buffering proxy`):g.stat===Yc.NOPROXY&&R(fe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function Zi(){return typeof document<"u"?document:null}/**
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
 */function _i(t){return new UE(t,!0)}/**
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
 */class Xp{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-r);s>0&&R("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class w1{constructor(e,n,r,s,i,o,a,l){this.ii=e,this.$o=r,this.Oo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Xp(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(rt(n.toString()),rt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Fo===n&&this.Zo(r,s)},r=>{e(()=>{const s=new x(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(s)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{r(()=>this.tu(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class A1 extends w1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=VE(this.serializer,e),r=function(s){if(!("targetChange"in s))return P.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?P.min():i.readTime?an(i.readTime):P.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=vu(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;if(o=$o(a)?{documents:$E(s,a)}:{query:HE(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=$p(s,i.resumeToken);const l=Wo(s,i.expectedCount);l!==null&&(o.expectedCount=l)}else if(i.snapshotVersion.compareTo(P.min())>0){o.readTime=Qo(s,i.snapshotVersion.toTimestamp());const l=Wo(s,i.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=GE(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=vu(this.serializer),n.removeTarget=e,this.Wo(n)}}/**
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
 */class T1 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new x(b.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Io(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(b.UNKNOWN,s.toString())})}vo(e,n,r,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(b.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class S1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(rt(n),this.mu=!1):R("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class I1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{qr(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=U(a);l.vu.add(4),await Hr(l),l.bu.set("Unknown"),l.vu.delete(4),await bi(l)}(this))})}),this.bu=new S1(r,s)}}async function bi(t){if(qr(t))for(const e of t.Ru)await e(!0)}async function Hr(t){for(const e of t.Ru)await e(!1)}function Jp(t,e){const n=U(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),bl(n)?_l(n):Nn(n).Ko()&&vl(n,e))}function Zp(t,e){const n=U(t),r=Nn(n);n.Au.delete(e),r.Ko()&&ef(n,e),n.Au.size===0&&(r.Ko()?r.jo():qr(n)&&n.bu.set("Unknown"))}function vl(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(P.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Nn(t).su(e)}function ef(t,e){t.Vu.qt(e),Nn(t).iu(e)}function _l(t){t.Vu=new kE({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Nn(t).start(),t.bu.gu()}function bl(t){return qr(t)&&!Nn(t).Uo()&&t.Au.size>0}function qr(t){return U(t).vu.size===0}function tf(t){t.Vu=void 0}async function C1(t){t.Au.forEach((e,n)=>{vl(t,e)})}async function x1(t,e){tf(t),bl(t)?(t.bu.Iu(e),_l(t)):t.bu.set("Unknown")}async function R1(t,e,n){if(t.bu.set("Online"),e instanceof Vp&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wu(t,r)}else if(e instanceof ls?t.Vu.Ht(e):e instanceof Bp?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(P.min()))try{const r=await Yp(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Vu.ce(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.Au.get(l);c&&s.Au.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,l)=>{const c=s.Au.get(a);if(!c)return;s.Au.set(a,c.withResumeToken(be.EMPTY_BYTE_STRING,c.snapshotVersion)),ef(s,a);const u=new ht(c.target,a,l,c.sequenceNumber);vl(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await wu(t,r)}}async function wu(t,e,n){if(!Br(e))throw e;t.vu.add(1),await Hr(t),t.bu.set("Offline"),n||(n=()=>Yp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await bi(t)})}async function Au(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=qr(n);n.vu.add(3),await Hr(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await bi(n)}async function N1(t,e){const n=U(t);e?(n.vu.delete(2),await bi(n)):e||(n.vu.add(2),await Hr(n),n.bu.set("Unknown"))}function Nn(t){return t.Su||(t.Su=function(e,n,r){const s=U(e);return s.fu(),new A1(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:C1.bind(null,t),ao:x1.bind(null,t),nu:R1.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),bl(t)?_l(t):t.bu.set("Unknown")):(await t.Su.stop(),tf(t))})),t.Su}/**
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
 */class El{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new El(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nf(t,e){if(rt("AsyncQueue",`${e}: ${t}`),Br(t))return new x(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ln{constructor(e){this.comparator=e?(n,r)=>e(n,r)||N.comparator(n.key,r.key):(n,r)=>N.comparator(n.key,r.key),this.keyedMap=Hn(),this.sortedSet=new Z(this.comparator)}static emptySet(e){return new ln(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ln)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Tu{constructor(){this.Cu=new Z(N.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):k():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class _n{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _n(e,n,ln.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class D1{constructor(){this.Nu=void 0,this.listeners=[]}}class O1{constructor(){this.queries=new Rn(e=>xp(e),fi),this.onlineState="Unknown",this.ku=new Set}}async function P1(t,e){const n=U(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new D1),s)try{i.Nu=await n.onListen(r)}catch(o){const a=nf(o,`Initialization of query '${Go(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&wl(n)}async function M1(t,e){const n=U(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function k1(t,e){const n=U(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(s)&&(r=!0);o.Nu=s}}r&&wl(n)}function j1(t,e,n){const r=U(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function wl(t){t.ku.forEach(e=>{e.next()})}class L1{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _n(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=_n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class rf{constructor(e){this.key=e}}class sf{constructor(e){this.key=e}}class F1{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=F(),this.mutatedKeys=F(),this.tc=Rp(e),this.ec=new ln(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new Tu,s=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,d)=>{const p=s.get(u),f=mi(this.query,d)?d:null,y=!!p&&this.mutatedKeys.has(p.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;p&&f?p.data.isEqual(f.data)?y!==v&&(r.track({type:3,doc:f}),g=!0):this.rc(p,f)||(r.track({type:2,doc:f}),g=!0,(l&&this.tc(f,l)>0||c&&this.tc(f,c)<0)&&(a=!0)):!p&&f?(r.track({type:0,doc:f}),g=!0):p&&!f&&(r.track({type:1,doc:p}),g=!0,(l||c)&&(a=!0)),g&&(f?(o=o.add(f),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ec:o,ic:r,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((c,u)=>function(d,p){const f=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return k()}};return f(d)-f(p)}(c.type,u.type)||this.tc(c.doc,u.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,i.length!==0||l?{snapshot:new _n(this.query,e.ec,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Tu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=F(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new sf(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new rf(r))}),n}hc(e){this.Yu=e.ir,this.Zu=F();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return _n.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class U1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class B1{constructor(e){this.key=e,this.fc=!1}}class V1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Rn(a=>xp(a),fi),this._c=new Map,this.mc=new Set,this.gc=new Z(N.comparator),this.yc=new Map,this.Ic=new ml,this.Tc={},this.Ec=new Map,this.Ac=vn.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function $1(t,e){const n=Q1(t);let r,s;const i=n.wc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.lc();else{const o=await m1(n.localStore,st(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await H1(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Jp(n.remoteStore,o)}return s}async function H1(t,e,n,r,s){t.Rc=(d,p,f)=>async function(y,v,g,A){let w=v.view.sc(g);w.zi&&(w=await _u(y.localStore,v.query,!1).then(({documents:$})=>v.view.sc($,w)));const C=A&&A.targetChanges.get(v.targetId),S=v.view.applyChanges(w,y.isPrimaryClient,C);return Iu(y,v.targetId,S.cc),S.snapshot}(t,d,p,f);const i=await _u(t.localStore,e,!0),o=new F1(e,i.ir),a=o.sc(i.documents),l=$r.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Iu(t,n,c.cc);const u=new U1(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function q1(t,e){const n=U(t),r=n.wc.get(e),s=n._c.get(r.targetId);if(s.length>1)return n._c.set(r.targetId,s.filter(i=>!fi(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Zp(n.remoteStore,r.targetId),Jo(n,r.targetId)}).catch(rl)):(Jo(n,r.targetId),await Xo(n.localStore,r.targetId,!0))}async function of(t,e){const n=U(t);try{const r=await p1(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.yc.get(i);o&&(re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?re(o.fc):s.removedDocuments.size>0&&(re(o.fc),o.fc=!1))}),await lf(n,r,e)}catch(r){await rl(r)}}function Su(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=U(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const d of u.listeners)d.Mu(o)&&(l=!0)}),l&&wl(a)}(r.eventManager,e),s.length&&r.dc.nu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function G1(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.yc.get(e),i=s&&s.key;if(i){let o=new Z(N.comparator);o=o.insert(i,ge.newNoDocument(i,P.min()));const a=F().add(i),l=new vi(P.min(),new Map,new Z(V),o,a);await of(r,l),r.gc=r.gc.remove(i),r.yc.delete(e),Al(r)}else await Xo(r.localStore,e,!1).then(()=>Jo(r,e,n)).catch(rl)}function Jo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||af(t,r)})}function af(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Zp(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Al(t))}function Iu(t,e,n){for(const r of n)r instanceof rf?(t.Ic.addReference(r.key,e),z1(t,r)):r instanceof sf?(R("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||af(t,r.key)):k()}function z1(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(R("SyncEngine","New document in limbo: "+n),t.mc.add(r),Al(t))}function Al(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new N(W.fromString(e)),r=t.Ac.next();t.yc.set(r,new B1(n)),t.gc=t.gc.insert(n,r),Jp(t.remoteStore,new ht(st(Ip(n.path)),r,"TargetPurposeLimboResolution",sl.ct))}}async function lf(t,e,n){const r=U(t),s=[],i=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=yl.Li(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.dc.nu(s),await async function(a,l){const c=U(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(l,d=>_.forEach(d.Fi,p=>c.persistence.referenceDelegate.addReference(u,d.targetId,p)).next(()=>_.forEach(d.Bi,p=>c.persistence.referenceDelegate.removeReference(u,d.targetId,p)))))}catch(u){if(!Br(u))throw u;R("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const p=c.Ji.get(d),f=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(f);c.Ji=c.Ji.insert(d,y)}}}(r.localStore,i))}async function K1(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await Qp(n.localStore,e);n.currentUser=e,function(s,i){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new x(b.CANCELLED,i))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lf(n,r.er)}}function W1(t,e){const n=U(t),r=n.yc.get(e);if(r&&r.fc)return F().add(r.key);{let s=F();const i=n._c.get(e);if(!i)return s;for(const o of i){const a=n.wc.get(o);s=s.unionWith(a.view.nc)}return s}}function Q1(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=of.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=W1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=G1.bind(null,e),e.dc.nu=k1.bind(null,e.eventManager),e.dc.Pc=j1.bind(null,e.eventManager),e}class Cu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=_i(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return d1(this.persistence,new u1,e.initialUser,this.serializer)}createPersistence(e){return new l1(gl.zs,this.serializer)}createSharedClientState(e){return new y1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Y1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Su(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=K1.bind(null,this.syncEngine),await N1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new O1}createDatastore(e){const n=_i(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new E1(s));var s;return function(i,o,a,l){return new T1(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Su(this.syncEngine,a,0),o=Eu.D()?new Eu:new v1,new I1(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,l,c){const u=new V1(r,s,i,o,a,l);return c&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);R("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Hr(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class X1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):rt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class J1{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=me.UNAUTHENTICATED,this.clientId=W0.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{R("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(R("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=nf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function eo(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Qp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function xu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ew(t);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Au(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Au(e.remoteStore,i)),t._onlineComponents=e}function Z1(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ew(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await eo(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Z1(n))throw n;fn("Error using user provided cache. Falling back to memory cache: "+n),await eo(t,new Cu)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await eo(t,new Cu);return t._offlineComponents}async function tw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await xu(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await xu(t,new Y1))),t._onlineComponents}async function nw(t){const e=await tw(t),n=e.eventManager;return n.onListen=$1.bind(null,e.syncEngine),n.onUnlisten=q1.bind(null,e.syncEngine),n}function rw(t,e,n={}){const r=new Mt;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,l){const c=new X1({next:d=>{i.enqueueAndForget(()=>M1(s,u)),d.fromCache&&a.source==="server"?l.reject(new x(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new L1(o,c,{includeMetadataChanges:!0,Ku:!0});return P1(s,u)}(await nw(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function cf(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */function sw(t,e,n){if(!n)throw new x(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iw(t,e,n,r){if(e===!0&&r===!0)throw new x(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nu(t){if(N.isDocumentKey(t))throw new x(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ei(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":k()}function Zo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ei(t);throw new x(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Du{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Tl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Du({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Du(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new B0;switch(n.type){case"firstParty":return new q0(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ru.get(e);n&&(R("ComponentProvider","Removing Datastore"),Ru.delete(e),n.terminate())}(this),Promise.resolve()}}function ow(t,e,n,r={}){var s;const i=(t=Zo(t,Tl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=me.MOCK_USER;else{a=Uy(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new x(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new me(c)}t._authCredentials=new V0(new yp(a,l))}}/**
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
 */class it{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class zt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zt(this.firestore,e,this._query)}}class cn extends zt{constructor(e,n,r){super(e,n,Ip(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new N(e))}withConverter(e){return new cn(this.firestore,e,this._path)}}function aw(t,e,...n){if(t=dn(t),sw("collection","path",e),t instanceof Tl){const r=W.fromString(e,...n);return Nu(r),new cn(t,null,r)}{if(!(t instanceof it||t instanceof cn))throw new x(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(W.fromString(e,...n));return Nu(r),new cn(t.firestore,null,r)}}/**
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
 */class lw{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Xp(this,"async_queue_retry"),this.Xc=()=>{const n=Zi();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Zi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Zi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Mt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Br(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw rt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=El.createAndSchedule(this,e,n,r,i=>this.na(i));return this.zc.push(s),s}Zc(){this.Wc&&k()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class uf extends Tl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new lw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hf(this),this._firestoreClient.terminate()}}function cw(t,e){const n=typeof t=="object"?t:$h(),r=typeof t=="string"?t:e||"(default)",s=Nr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ly("firestore");i&&ow(s,...i)}return s}function uw(t){return t._firestoreClient||hf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hf(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,l,c){return new rE(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,cf(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new J1(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
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
 */class bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bn(be.fromBase64String(e))}catch(n){throw new x(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bn(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class df{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pf{constructor(e){this._methodName=e}}/**
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
 */class Sl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return V(this._lat,e._lat)||V(this._long,e._long)}}/**
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
 */const hw=/^__.*__$/;function ff(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k()}}class Il{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Il(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.fa(e),s}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return ea(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(ff(this.ca)&&hw.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class dw{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_i(e)}ya(e,n,r,s=!1){return new Il({ca:e,methodName:n,ga:r,path:Ee.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pw(t){const e=t._freezeSettings(),n=_i(t._databaseId);return new dw(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fw(t,e,n,r=!1){return Cl(n,t.ya(r?4:3,e))}function Cl(t,e){if(mf(t=dn(t)))return gw("Unsupported field value:",e,t),mw(t,e);if(t instanceof pf)return function(n,r){if(!ff(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Cl(o,r.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=dn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return AE(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ie.fromDate(n);return{timestampValue:Qo(r.serializer,s)}}if(n instanceof ie){const s=new ie(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Qo(r.serializer,s)}}if(n instanceof Sl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof bn)return{bytesValue:$p(r.serializer,n._byteString)};if(n instanceof it){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Hp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Ei(n)}`)}(t,e)}function mw(t,e){const n={};return vp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vr(t,(r,s)=>{const i=Cl(s,e.ha(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function mf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ie||t instanceof Sl||t instanceof bn||t instanceof it||t instanceof pf)}function gw(t,e,n){if(!mf(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ei(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}const yw=new RegExp("[~\\*/\\[\\]]");function vw(t,e,n){if(e.search(yw)>=0)throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new df(...e.split("."))._internalPath}catch{throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ea(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new x(b.INVALID_ARGUMENT,a+t+l)}/**
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
 */class gf{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _w(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _w extends gf{data(){return super.data()}}function xl(t,e){return typeof e=="string"?vw(t,e):e instanceof df?e._internalPath:e._delegate._internalPath}/**
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
 */function bw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rl{}class yf extends Rl{}function Ew(t,e,...n){let r=[];e instanceof Rl&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof Dl).length,o=s.filter(a=>a instanceof Nl).length;if(i>1||i>0&&o>0)throw new x(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Nl extends yf{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Nl(e,n,r)}_apply(e){const n=this._parse(e);return vf(e._query,n),new zt(e.firestore,e.converter,Ho(e._query,n))}_parse(e){const n=pw(e.firestore);return function(s,i,o,a,l,c,u){let d;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new x(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Pu(u,c);const p=[];for(const f of u)p.push(Ou(a,s,f));d={arrayValue:{values:p}}}else d=Ou(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Pu(u,c),d=fw(o,i,u,c==="in"||c==="not-in");return ne.create(l,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Dl extends Rl{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Dl(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ve.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)vf(i,a),i=Ho(i,a)}(e._query,n),new zt(e.firestore,e.converter,Ho(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ol extends yf{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ol(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new x(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new x(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new sn(s,i);return function(a,l){if(ul(a)===null){const c=pi(a);c!==null&&_f(a,c,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new zt(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new xn(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function ww(t,e="asc"){const n=e,r=xl("orderBy",t);return Ol._create(r,n)}function Ou(t,e,n){if(typeof(n=dn(n))=="string"){if(n==="")throw new x(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cp(e)&&n.indexOf("/")!==-1)throw new x(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(W.fromString(n));if(!N.isDocumentKey(r))throw new x(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return nu(t,new N(r))}if(n instanceof it)return nu(t,n._key);throw new x(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ei(n)}.`)}function Pu(t,e){if(!Array.isArray(t)||t.length===0)throw new x(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vf(t,e){if(e.isInequality()){const r=pi(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new x(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=ul(t);i!==null&&_f(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function _f(t,e,n){if(!n.isEqual(e))throw new x(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Aw{convertValue(e,n="none"){switch(qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw k()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Sl(te(e.latitude),te(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ol(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wr(e));default:return null}}convertTimestamp(e){const n=bt(e);return new ie(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=W.fromString(e);re(Wp(r));const s=new Ar(r.get(1),r.get(3)),i=new N(r.popFirst(5));return s.isEqual(n)||rt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class ss{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tw extends gf{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class cs extends Tw{data(e={}){return super.data(e)}}class Sw{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ss(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new cs(this._firestore,this._userDataWriter,r.key,r,new ss(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new cs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ss(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new cs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ss(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:Iw(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Iw(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return k()}}class Cw extends Aw{constructor(e){super(),this.firestore=e}convertBytes(e){return new bn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function xw(t){t=Zo(t,zt);const e=Zo(t.firestore,uf),n=uw(e),r=new Cw(e);return bw(t._query),rw(n,t._query).then(s=>new Sw(e,r,t,s))}(function(t,e=!0){(function(n){Cn=n})(Gv),vt(new tt("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new uf(new $0(n.getProvider("auth-internal")),new z0(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ar(a.options.projectId,l)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Qe(Xc,"3.12.2",t),Qe(Xc,"3.12.2","esm2017")})();const Rw={apiKey:"AIzaSyDnXUnucMzBtgYnSPBKUv4S2acxyCi8Tkk",authDomain:"reel-talent-5ef72.firebaseapp.com",projectId:"reel-talent-5ef72",storageBucket:"reel-talent-5ef72.appspot.com",messagingSenderId:"80043393311",appId:"1:80043393311:web:43f2be04b4bbe841a0702a",measurementId:"G-3RJ1S1E46Q"},Pl=Vh(Rw),Nw=Rb(Pl),Dw=cw(Pl),Ow="/assets/paint_strokes-bb4cea45.svg",Pw=()=>{const[t,e]=m.useState([]),n=m.useMemo(()=>aw(Dw,"posts"),[]),[r,s]=m.useState(!1),[i,o]=m.useState(!0);return m.useEffect(()=>{(async()=>{try{const l=Ew(n,ww("published_date","desc")),c=await xw(l);e(c.docs),o(!1)}catch(l){console.error(l),s(!0),o(!1)}})()},[n]),i?h.jsx(Oh,{}):r?h.jsx(Ks,{}):h.jsx("div",{children:h.jsxs("section",{className:"blog__main",children:[h.jsxs("div",{className:"blog__header",children:[" ",h.jsx("h3",{className:"blog__heading3",children:"the reel blog"}),h.jsxs("div",{className:"blog__heading-container",children:[h.jsx("h2",{className:"blog__heading2",children:"Writings from our team"}),h.jsx("img",{src:Ow,className:"paint__strokes",height:30,alt:""})]}),h.jsx("p",{className:"blog__heading4",children:"Stay informed with Reel Talent blog's latest industry news, including best hiring practices."})]}),h.jsx("div",{className:"card card__main",children:t.map(a=>h.jsxs("div",{className:"row mb-3 blog__cardContainer",children:[h.jsx("div",{className:"col-md-8 col-sm-12 listing__description",children:h.jsxs("div",{className:"card-body",children:[h.jsxs(X,{to:`/blog/${a.data().title}`,state:{post:a.data()},children:[h.jsxs("div",{className:"d-flex justify-content-between",children:[h.jsxs("span",{className:"card-text",children:[a.data().author," • "]}),h.jsx("span",{className:"card-text",children:new Date(a.data().published_date.toDate()).toLocaleDateString("default",{month:"short",day:"numeric",year:"numeric"})})]}),h.jsx("h5",{className:"card-title post__title",children:a.data().title})]}),h.jsx("p",{className:"card-text post__summary",children:a.data().summary})]})}),h.jsx("div",{className:"col-md-4 col-sm-12 align-self-center ",children:h.jsx(X,{to:`/blog/${a.data().title}`,state:{post:a.data()},children:h.jsx("img",{src:a.data().image_url,className:"card-img-top ",alt:"..."})})})]},a.id))})]})})};var bf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Mu=Y.createContext&&Y.createContext(bf),yt=globalThis&&globalThis.__assign||function(){return yt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},yt.apply(this,arguments)},Mw=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n};function Ef(t){return t&&t.map(function(e,n){return Y.createElement(e.tag,yt({key:n},e.attr),Ef(e.child))})}function Gr(t){return function(e){return Y.createElement(kw,yt({attr:yt({},t.attr)},e),Ef(t.child))}}function kw(t){var e=function(n){var r=t.attr,s=t.size,i=t.title,o=Mw(t,["attr","size","title"]),a=s||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Y.createElement("svg",yt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:yt(yt({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&Y.createElement("title",null,i),t.children)};return Mu!==void 0?Y.createElement(Mu.Consumer,null,function(n){return e(n)}):e(bf)}function jw(t){return Gr({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}}]})(t)}function Lw(t){return Gr({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}}]})(t)}const Fw=()=>{const e=At().state.post,[n,r]=m.useState(!0),[s,i]=m.useState(!1);if(m.useEffect(()=>{e.hasOwnProperty("body")?r(!1):(r(!1),i(!0))},[e]),n)return h.jsx(h.Fragment,{children:h.jsx(Oh,{})});if(s)return h.jsx(Ks,{});const a=e.body.join(" ").split(" ").length,c=Math.ceil(a/250);return h.jsx("div",{children:h.jsx("section",{className:"blogPost__main",children:h.jsxs("div",{className:"blogPost_wrapper",children:[h.jsxs(X,{className:"blogPost__back",to:"/blog",children:[h.jsx(jw,{})," blog"]}),h.jsxs("div",{className:"blogPost__header",children:[h.jsx("h1",{children:e.title}),h.jsx("img",{className:"blogPost__image",src:e.image_url,alt:e.title}),h.jsx("div",{className:"blogPost__pg blogPost__readTime",children:h.jsxs("p",{children:[`${c} ${c===1?"min":"mins"}`," ","read time"]})}),h.jsx("div",{style:{backgroundColor:"forestgreen",height:"1px",width:"50%",margin:"auto"}})]}),h.jsxs("div",{className:"blogPost__body",children:[e.body.map((u,d)=>h.jsx("p",{className:"blogPost__pg",children:u},d)),h.jsxs("div",{className:"author__container",children:[h.jsx(X,{to:e.linkedin_link,children:h.jsx("img",{className:"blogPost__authorImg",src:e.author_image,alt:"author"})}),h.jsx("span",{children:h.jsxs(X,{to:e.linkedin_link,className:"blogPost__pg",children:[h.jsxs("p",{children:[" ",e.author]}),h.jsx("p",{children:new Date(e.published_date.seconds*1e3).toLocaleDateString("default",{month:"short",day:"numeric",year:"numeric"})}),h.jsx(Lw,{className:"author__social"})]})})]})]})]})})})};const Uw="/assets/legal-graphic-8ff34930.svg",Bw=()=>h.jsxs(h.Fragment,{children:[h.jsxs("figure",{className:"legal__img__container",children:[h.jsx("img",{src:Uw,alt:"graphic of man sitting on legal documents",className:"legal__img"})," ",h.jsx("figcaption",{className:"legal__img__text",children:"Legal"})]}),h.jsxs("section",{id:"terms__conditions",className:"legal__container",children:[h.jsx("h2",{className:"terms__title",children:"Terms and Conditions"}),h.jsx("p",{className:"legal__pg",children:`The following terms and conditions (collectively, these "Terms and Conditions") apply to your use of Reel Talent's website, including any content, functionality, and services offered (the "Website"). By using the Website, you accept and agree to be bound by these Terms and Conditions. These Terms and Conditions are effective as of September 12, 2022 and may be updated without notice to you. or through any such web sites or services.`}),h.jsx("p",{className:"legal__pg",children:"You are solely responsible for your conduct on the Website and must comply with all applicable laws and regulations. You may not post or distribute any content that is illegal, threatening, abusive, or violates the rights of others. We do not endorse any user-generated content and have the right to remove it if it does not comply with these Terms and Conditions."}),h.jsx("p",{className:"legal__pg",children:"The content on the Website is protected by copyrights, trademarks, and other proprietary rights, and is the property of Reel Talent. You may only use the content with written permission from Reel Talent or the specific content provider."}),h.jsx("p",{className:"legal__pg",children:"Reel Talent its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements."}),h.jsx("p",{className:"legal__pg",children:"The Website may link to other sites not under Reel Talent's control, and Reel Talent is not responsible for the content or accuracy of those sites. Your use of the Website is at your own risk and Reel Talent disclaims all warranties and limitations of liability. You agree to indemnify and hold Reel Talent harmless from any claims arising from your use of the Website."})]}),h.jsxs("section",{id:"privacy",className:"privacy__container",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"terms__title",children:"Privacy Policy"}),h.jsx("p",{className:"legal__pg",children:"Reel Talent is committed to protecting the privacy and security of personal data collected from our website visitors and job applicants. This Privacy Policy governs the collection, use, and disclosure of personal data by Reel Talent."})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"terms__title",children:"Data Collection "})," ",h.jsx("p",{className:"legal__pg",children:"Reel Talent collects personal data from visitors to our website who fill out forms requesting sales information. The personal data we collect may include but is not limited to your name, email address, telephone number, and resume information."})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"terms__title",children:"Cookie Notice"}),h.jsx("p",{className:"legal__pg",children:"Reel Talent uses cookies and similar technology to gather data from visitors to our website. This information helps us to improve the user experience and understand how our website is being used."})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"terms__title",children:"Personal Data"}),h.jsx("p",{className:"legal__pg",children:"Reel Talent will not sell, trade or otherwise disclose personal data collected from our website to third parties except as necessary to provide services requested by visitors or to comply with legal requirements."})]})]})]});const Vw="/assets/Bobby_profile-18b3fbdc.jpg",$w="/assets/shelly_profile-7bc80abc.jpg",Hw=()=>{const t=[{text:"I met Shelly while working on a project for her company. Afterward, I asked her to guide me through the job recruitment process, and she went above and beyond to help me. Shelly was not only a mentor but also a calming voice of reason. She genuinely cares about people and is easy to connect with. Shelly's years of experience and expertise in the industry make her exceptional at what she does. I consider her a friend and highly recommend her.",author:"Shivaen Ahuja"}],e="Bobby is a multi-talented professional who combines his technical expertise with strong people skills. As the Head Engineer and Talent Manager, Bobby is passionate about building high-performing teams and fostering a culture of innovation. He is dedicated to creating a supportive environment where team members can thrive and achieve their full potential";return h.jsxs(h.Fragment,{children:[h.jsx("h2",{className:"meetTeamHeader",children:"Meet the Team"}),h.jsxs("div",{className:"team",children:[h.jsxs("div",{className:"team-member",children:[h.jsx("img",{src:$w,alt:"Shelly Starkey",className:"team-member__image"}),h.jsx("h3",{children:"Shelly Starkey"}),h.jsx("p",{className:"team-member__role",children:"Our Head Recruiter"}),h.jsxs("p",{className:"team-member__quote",children:[t[0].text," ",h.jsx("br",{}),h.jsxs("span",{className:"team-memeber__author",children:["- ",t[0].author]})]})]}),h.jsxs("div",{className:"team-member",children:[h.jsx("img",{src:Vw,alt:"Bobby Woody",className:"team-member__image"}),h.jsx("h3",{children:"Bobby Woody"}),h.jsx("p",{className:"team-member__role",children:"Our Head Engineer"}),h.jsx("p",{className:"team-member__description",children:e})]})]})]})},qw=()=>h.jsx(h.Fragment,{children:h.jsxs("section",{className:"about__page",children:[h.jsxs("section",{className:"about__section",children:[h.jsx("h1",{className:"about__title",children:"Expertly Connecting Talent with Opportunities"}),h.jsx("p",{className:"about__description",children:"Reel Talent is a recruiting company that aims to make hiring easy for businesses. We believe in transparency and strive to put it at the forefront of everything we do. Our goal is to provide a seamless and efficient hiring process that helps companies find the best talent for their needs. With Reel Talent, you can rest assured that you'll find the right fit for your organization."})]}),h.jsx(Hw,{})]})});function Gw(t){return Gr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"}}]})(t)}function zw(t){return Gr({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"}}]})(t)}function Kw(t){return Gr({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"}}]})(t)}const Ww="/assets/AI-CTA-05e6e95d.svg",Qw=()=>h.jsx(h.Fragment,{children:h.jsxs("section",{className:"solutions",children:[h.jsx("section",{className:"solutions__intro",children:h.jsxs("div",{class:"tagline-container",children:[h.jsx("h1",{class:"tagline",children:"AI-Powered Solutions for Extraordinary Outcomes"}),h.jsxs("p",{className:"tagline__pg",children:[" ","Real Talent partners with Team AI to provide cutting-edge tools and technologies that enhance our recruitment process, ensuring the best match between candidates and employers."]})]})}),h.jsxs("section",{className:"solutions__features-container",children:[h.jsxs("div",{className:"solutions__feature-card",children:[h.jsx("div",{className:"solutions__feature-icon",children:h.jsx(Kw,{})}),h.jsx("h4",{className:"solutions__feature-title",children:"Expert Talent Matching"}),h.jsx("p",{className:"solutions__feature-description",children:"Our AI-powered system matches the best candidates with your company culture and job requirements."})]}),h.jsxs("div",{className:"solutions__feature-card",children:[h.jsx("div",{className:"solutions__feature-icon",children:h.jsx(Gw,{})}),h.jsx("h4",{className:"solutions__feature-title",children:"Data-Driven Decisions"}),h.jsx("p",{className:"solutions__feature-description",children:"Our analytics help you make informed decisions about your recruitment process."})]}),h.jsxs("div",{className:"solutions__feature-card",children:[h.jsx("div",{className:"solutions__feature-icon",children:h.jsx(zw,{})}),h.jsx("h4",{className:"solutions__feature-title",children:"Innovative Technology"}),h.jsx("p",{className:"solutions__feature-description",children:"Our technology provides cutting-edge solutions for your talent acquisition needs."})]})]}),h.jsx("section",{className:"cta",children:h.jsxs("div",{className:"cta__container",children:[h.jsxs("div",{className:"cta__link",children:[h.jsx("h3",{className:"cta__tagline",children:"Discover the Future of Hiring with Our AI-Powered Platform"}),h.jsx(X,{to:"/demo",children:h.jsx("button",{className:"cta__button",children:"Contact Us"})})]}),h.jsx("img",{className:"cta__logo",src:Ww,alt:"",width:500})]})})]})}),Yw=[{path:"/",element:h.jsx(He,{path:"/",element:h.jsx(ly,{})})},{path:"/demo",element:h.jsx(He,{path:"/demo",element:h.jsx(Iy,{})})},{path:"/",element:h.jsx(He,{path:"/about",element:h.jsx(qw,{})})},{path:"/legal",element:h.jsx(He,{path:"/legal",element:h.jsx(Bw,{})})},{path:"/blog",element:h.jsx(He,{path:"/blog",element:h.jsx(Pw,{})})},{path:"/blog/:title",element:h.jsx(He,{path:"/blog/:title",element:h.jsx(Fw,{})})},{path:"/solutions",element:h.jsx(He,{path:"/solutions",element:h.jsx(Qw,{})})},{path:"/404",element:h.jsx(He,{path:"404",element:h.jsx(Ks,{})})},{path:"*",element:h.jsx(He,{path:"/*",element:h.jsx(Sm,{to:"/404"})})}];var wf={exports:{}},Xw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Jw=Xw,Zw=Jw;function Af(){}function Tf(){}Tf.resetWarningCache=Af;var eA=function(){function t(r,s,i,o,a,l){if(l!==Zw){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Tf,resetWarningCache:Af};return n.PropTypes=n,n};wf.exports=eA();var tA=wf.exports;const G=ks(tA);function nA(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Sf=m,rA=nA(Sf);function ku(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function sA(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var iA=!!(typeof window<"u"&&window.document&&window.document.createElement);function oA(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(s){return s.displayName||s.name||"Component"}return function(i){if(typeof i!="function")throw new Error("Expected WrappedComponent to be a React component.");var o=[],a;function l(){a=t(o.map(function(u){return u.props})),c.canUseDOM?e(a):n&&(a=n(a))}var c=function(u){sA(d,u);function d(){return u.apply(this,arguments)||this}d.peek=function(){return a},d.rewind=function(){if(d.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var y=a;return a=void 0,o=[],y};var p=d.prototype;return p.UNSAFE_componentWillMount=function(){o.push(this),l()},p.componentDidUpdate=function(){l()},p.componentWillUnmount=function(){var y=o.indexOf(this);o.splice(y,1),l()},p.render=function(){return rA.createElement(i,this.props)},d}(Sf.PureComponent);return ku(c,"displayName","SideEffect("+r(i)+")"),ku(c,"canUseDOM",iA),c}}var aA=oA;const lA=ks(aA);var cA=typeof Element<"u",uA=typeof Map=="function",hA=typeof Set=="function",dA=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function us(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,s;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!us(t[r],e[r]))return!1;return!0}var i;if(uA&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!us(r.value[1],e.get(r.value[0])))return!1;return!0}if(hA&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(dA&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(s=Object.keys(t),n=s.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,s[r]))return!1;if(cA&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((s[r]==="_owner"||s[r]==="__v"||s[r]==="__o")&&t.$$typeof)&&!us(t[s[r]],e[s[r]]))return!1;return!0}return t!==t&&e!==e}var pA=function(e,n){try{return us(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const fA=ks(pA);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ju=Object.getOwnPropertySymbols,mA=Object.prototype.hasOwnProperty,gA=Object.prototype.propertyIsEnumerable;function yA(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function vA(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(i){return e[i]});if(r.join("")!=="0123456789")return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach(function(i){s[i]=i}),Object.keys(Object.assign({},s)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var _A=vA()?Object.assign:function(t,e){for(var n,r=yA(t),s,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var o in n)mA.call(n,o)&&(r[o]=n[o]);if(ju){s=ju(n);for(var a=0;a<s.length;a++)gA.call(n,s[a])&&(r[s[a]]=n[s[a]])}}return r};const bA=ks(_A);var jt={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},O={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(O).map(function(t){return O[t]});var z={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Ms={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Sr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},EA=Object.keys(Ms).reduce(function(t,e){return t[Ms[e]]=e,t},{}),wA=[O.NOSCRIPT,O.SCRIPT,O.STYLE],Fe="data-react-helmet",AA=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},TA=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},SA=function(){function t(e,n){for(var r=0;r<n.length;r++){var s=n[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Te=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},IA=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Lu=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},CA=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},ta=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},xA=function(e){var n=un(e,O.TITLE),r=un(e,Sr.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var s=un(e,Sr.DEFAULT_TITLE);return n||s||void 0},RA=function(e){return un(e,Sr.ON_CHANGE_CLIENT_STATE)||function(){}},to=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,s){return Te({},r,s)},{})},NA=function(e,n){return n.filter(function(r){return typeof r[O.BASE]<"u"}).map(function(r){return r[O.BASE]}).reverse().reduce(function(r,s){if(!r.length)for(var i=Object.keys(s),o=0;o<i.length;o++){var a=i[o],l=a.toLowerCase();if(e.indexOf(l)!==-1&&s[l])return r.concat(s)}return r},[])},Ln=function(e,n,r){var s={};return r.filter(function(i){return Array.isArray(i[e])?!0:(typeof i[e]<"u"&&MA("Helmet: "+e+' should be of type "Array". Instead found type "'+AA(i[e])+'"'),!1)}).map(function(i){return i[e]}).reverse().reduce(function(i,o){var a={};o.filter(function(p){for(var f=void 0,y=Object.keys(p),v=0;v<y.length;v++){var g=y[v],A=g.toLowerCase();n.indexOf(A)!==-1&&!(f===z.REL&&p[f].toLowerCase()==="canonical")&&!(A===z.REL&&p[A].toLowerCase()==="stylesheet")&&(f=A),n.indexOf(g)!==-1&&(g===z.INNER_HTML||g===z.CSS_TEXT||g===z.ITEM_PROP)&&(f=g)}if(!f||!p[f])return!1;var w=p[f].toLowerCase();return s[f]||(s[f]={}),a[f]||(a[f]={}),s[f][w]?!1:(a[f][w]=!0,!0)}).reverse().forEach(function(p){return i.push(p)});for(var l=Object.keys(a),c=0;c<l.length;c++){var u=l[c],d=bA({},s[u],a[u]);s[u]=d}return i},[]).reverse()},un=function(e,n){for(var r=e.length-1;r>=0;r--){var s=e[r];if(s.hasOwnProperty(n))return s[n]}return null},DA=function(e){return{baseTag:NA([z.HREF,z.TARGET],e),bodyAttributes:to(jt.BODY,e),defer:un(e,Sr.DEFER),encode:un(e,Sr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:to(jt.HTML,e),linkTags:Ln(O.LINK,[z.REL,z.HREF],e),metaTags:Ln(O.META,[z.NAME,z.CHARSET,z.HTTPEQUIV,z.PROPERTY,z.ITEM_PROP],e),noscriptTags:Ln(O.NOSCRIPT,[z.INNER_HTML],e),onChangeClientState:RA(e),scriptTags:Ln(O.SCRIPT,[z.SRC,z.INNER_HTML],e),styleTags:Ln(O.STYLE,[z.CSS_TEXT],e),title:xA(e),titleAttributes:to(jt.TITLE,e)}},na=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){na(e)},0)}}(),Fu=function(e){return clearTimeout(e)},OA=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||na:global.requestAnimationFrame||na,PA=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Fu:global.cancelAnimationFrame||Fu,MA=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},Fn=null,kA=function(e){Fn&&PA(Fn),e.defer?Fn=OA(function(){Uu(e,function(){Fn=null})}):(Uu(e),Fn=null)},Uu=function(e,n){var r=e.baseTag,s=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,p=e.title,f=e.titleAttributes;ra(O.BODY,s),ra(O.HTML,i),jA(p,f);var y={baseTag:Yt(O.BASE,r),linkTags:Yt(O.LINK,o),metaTags:Yt(O.META,a),noscriptTags:Yt(O.NOSCRIPT,l),scriptTags:Yt(O.SCRIPT,u),styleTags:Yt(O.STYLE,d)},v={},g={};Object.keys(y).forEach(function(A){var w=y[A],C=w.newTags,S=w.oldTags;C.length&&(v[A]=C),S.length&&(g[A]=y[A].oldTags)}),n&&n(),c(e,v,g)},If=function(e){return Array.isArray(e)?e.join(""):e},jA=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=If(e)),ra(O.TITLE,n)},ra=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var s=r.getAttribute(Fe),i=s?s.split(","):[],o=[].concat(i),a=Object.keys(n),l=0;l<a.length;l++){var c=a[l],u=n[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),i.indexOf(c)===-1&&i.push(c);var d=o.indexOf(c);d!==-1&&o.splice(d,1)}for(var p=o.length-1;p>=0;p--)r.removeAttribute(o[p]);i.length===o.length?r.removeAttribute(Fe):r.getAttribute(Fe)!==a.join(",")&&r.setAttribute(Fe,a.join(","))}},Yt=function(e,n){var r=document.head||document.querySelector(O.HEAD),s=r.querySelectorAll(e+"["+Fe+"]"),i=Array.prototype.slice.call(s),o=[],a=void 0;return n&&n.length&&n.forEach(function(l){var c=document.createElement(e);for(var u in l)if(l.hasOwnProperty(u))if(u===z.INNER_HTML)c.innerHTML=l.innerHTML;else if(u===z.CSS_TEXT)c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText));else{var d=typeof l[u]>"u"?"":l[u];c.setAttribute(u,d)}c.setAttribute(Fe,"true"),i.some(function(p,f){return a=f,c.isEqualNode(p)})?i.splice(a,1):o.push(c)}),i.forEach(function(l){return l.parentNode.removeChild(l)}),o.forEach(function(l){return r.appendChild(l)}),{oldTags:i,newTags:o}},Cf=function(e){return Object.keys(e).reduce(function(n,r){var s=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+s:s},"")},LA=function(e,n,r,s){var i=Cf(r),o=If(n);return i?"<"+e+" "+Fe+'="true" '+i+">"+ta(o,s)+"</"+e+">":"<"+e+" "+Fe+'="true">'+ta(o,s)+"</"+e+">"},FA=function(e,n,r){return n.reduce(function(s,i){var o=Object.keys(i).filter(function(c){return!(c===z.INNER_HTML||c===z.CSS_TEXT)}).reduce(function(c,u){var d=typeof i[u]>"u"?u:u+'="'+ta(i[u],r)+'"';return c?c+" "+d:d},""),a=i.innerHTML||i.cssText||"",l=wA.indexOf(e)===-1;return s+"<"+e+" "+Fe+'="true" '+o+(l?"/>":">"+a+"</"+e+">")},"")},xf=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,s){return r[Ms[s]||s]=e[s],r},n)},UA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,s){return r[EA[s]||s]=e[s],r},n)},BA=function(e,n,r){var s,i=(s={key:n},s[Fe]=!0,s),o=xf(r,i);return[Y.createElement(O.TITLE,o,n)]},VA=function(e,n){return n.map(function(r,s){var i,o=(i={key:s},i[Fe]=!0,i);return Object.keys(r).forEach(function(a){var l=Ms[a]||a;if(l===z.INNER_HTML||l===z.CSS_TEXT){var c=r.innerHTML||r.cssText;o.dangerouslySetInnerHTML={__html:c}}else o[l]=r[a]}),Y.createElement(e,o)})},Je=function(e,n,r){switch(e){case O.TITLE:return{toComponent:function(){return BA(e,n.title,n.titleAttributes)},toString:function(){return LA(e,n.title,n.titleAttributes,r)}};case jt.BODY:case jt.HTML:return{toComponent:function(){return xf(n)},toString:function(){return Cf(n)}};default:return{toComponent:function(){return VA(e,n)},toString:function(){return FA(e,n,r)}}}},Rf=function(e){var n=e.baseTag,r=e.bodyAttributes,s=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.scriptTags,u=e.styleTags,d=e.title,p=d===void 0?"":d,f=e.titleAttributes;return{base:Je(O.BASE,n,s),bodyAttributes:Je(jt.BODY,r,s),htmlAttributes:Je(jt.HTML,i,s),link:Je(O.LINK,o,s),meta:Je(O.META,a,s),noscript:Je(O.NOSCRIPT,l,s),script:Je(O.SCRIPT,c,s),style:Je(O.STYLE,u,s),title:Je(O.TITLE,{title:p,titleAttributes:f},s)}},$A=function(e){var n,r;return r=n=function(s){IA(i,s);function i(){return TA(this,i),CA(this,s.apply(this,arguments))}return i.prototype.shouldComponentUpdate=function(a){return!fA(this.props,a)},i.prototype.mapNestedChildrenToProps=function(a,l){if(!l)return null;switch(a.type){case O.SCRIPT:case O.NOSCRIPT:return{innerHTML:l};case O.STYLE:return{cssText:l}}throw new Error("<"+a.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},i.prototype.flattenArrayTypeChildren=function(a){var l,c=a.child,u=a.arrayTypeChildren,d=a.newChildProps,p=a.nestedChildren;return Te({},u,(l={},l[c.type]=[].concat(u[c.type]||[],[Te({},d,this.mapNestedChildrenToProps(c,p))]),l))},i.prototype.mapObjectTypeChildren=function(a){var l,c,u=a.child,d=a.newProps,p=a.newChildProps,f=a.nestedChildren;switch(u.type){case O.TITLE:return Te({},d,(l={},l[u.type]=f,l.titleAttributes=Te({},p),l));case O.BODY:return Te({},d,{bodyAttributes:Te({},p)});case O.HTML:return Te({},d,{htmlAttributes:Te({},p)})}return Te({},d,(c={},c[u.type]=Te({},p),c))},i.prototype.mapArrayTypeChildrenToProps=function(a,l){var c=Te({},l);return Object.keys(a).forEach(function(u){var d;c=Te({},c,(d={},d[u]=a[u],d))}),c},i.prototype.warnOnInvalidChildren=function(a,l){return!0},i.prototype.mapChildrenToProps=function(a,l){var c=this,u={};return Y.Children.forEach(a,function(d){if(!(!d||!d.props)){var p=d.props,f=p.children,y=Lu(p,["children"]),v=UA(y);switch(c.warnOnInvalidChildren(d,f),d.type){case O.LINK:case O.META:case O.NOSCRIPT:case O.SCRIPT:case O.STYLE:u=c.flattenArrayTypeChildren({child:d,arrayTypeChildren:u,newChildProps:v,nestedChildren:f});break;default:l=c.mapObjectTypeChildren({child:d,newProps:l,newChildProps:v,nestedChildren:f});break}}}),l=this.mapArrayTypeChildrenToProps(u,l),l},i.prototype.render=function(){var a=this.props,l=a.children,c=Lu(a,["children"]),u=Te({},c);return l&&(u=this.mapChildrenToProps(l,u)),Y.createElement(e,u)},SA(i,null,[{key:"canUseDOM",set:function(a){e.canUseDOM=a}}]),i}(Y.Component),n.propTypes={base:G.object,bodyAttributes:G.object,children:G.oneOfType([G.arrayOf(G.node),G.node]),defaultTitle:G.string,defer:G.bool,encodeSpecialCharacters:G.bool,htmlAttributes:G.object,link:G.arrayOf(G.object),meta:G.arrayOf(G.object),noscript:G.arrayOf(G.object),onChangeClientState:G.func,script:G.arrayOf(G.object),style:G.arrayOf(G.object),title:G.string,titleAttributes:G.object,titleTemplate:G.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var s=e.rewind();return s||(s=Rf({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),s},r},HA=function(){return null},qA=lA(DA,kA,Rf)(HA),sa=$A(qA);sa.renderStatic=sa.rewind;const GA=()=>h.jsxs(sa,{children:[h.jsx("meta",{name:"description",content:"Reel Talent provides comprehensive external recruiting services to help businesses fill job roles with top talent. Partner with us today."}),h.jsx("meta",{name:"keywords",content:"recruiting, external recruiting, job placement, talent acquisition, Reel Talent"}),h.jsx("meta",{name:"author",content:"Reel Talent"}),h.jsx("meta",{name:"robots",content:"index,follow"}),h.jsx("meta",{name:"location",content:"Salt Lake City, Utah"}),h.jsx("meta",{name:"industry",content:"Recruiting"}),h.jsx("meta",{name:"services",content:"External Recruiting, Job Placement, Talent Acquisition"}),h.jsx("meta",{property:"og:image",content:"./assets/svg/reeltalent-logo.svg"}),h.jsx("meta",{property:"og:image:width",content:"1200"}),h.jsx("meta",{property:"og:image:height",content:"630"}),h.jsx("meta",{property:"og:image:alt",content:"Alternative text for the image"})]}),zA=()=>{const{pathname:t}=At();return m.useEffect(()=>{document.documentElement.scrollTo({top:0,left:0,behavior:"instant"})},[t]),null};class KA extends m.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}render(){return this.state.hasError?h.jsx(Ks,{}):this.props.children}}const WA="/assets/reeltalent-logo-bfbca5c1.svg";const Un=48,QA=({color:t="currentColor",direction:e="left",distance:n="md",duration:r=.4,easing:s="cubic-bezier(0, 0, 0, 1)",hideOutline:i=!0,label:o,lines:a=3,onToggle:l,render:c,rounded:u=!1,size:d=32,toggle:p,toggled:f})=>{const[y,v]=m.useState(!1),g=Math.max(12,Math.min(Un,d)),A=Math.round((Un-g)/2),w=g/12,C=Math.round(w),$=g/(a*((n==="lg"?.25:n==="sm"?.75:.5)+(a===3?1:1.25))),K=Math.round($),Ae=C*a+K*(a-1),pe=Math.round((Un-Ae)/2),De=a===3?n==="lg"?4.0425:n==="sm"?5.1625:4.6325:n==="lg"?6.7875:n==="sm"?8.4875:7.6675,le=(w-C+($-K))/(a===3?1:2),$e=parseFloat((g/De-le/(4/3)).toFixed(2)),ce=Math.max(0,r),Oe={cursor:"pointer",height:`${Un}px`,position:"relative",transition:`${ce}s ${s}`,userSelect:"none",width:`${Un}px`},Ce={background:t,height:`${C}px`,left:`${A}px`,position:"absolute"};i&&(Oe.outline="none"),u&&(Ce.borderRadius="9em");const Kt=p||v,Dn=f!==void 0?f:y;return c({barHeight:C,barStyles:Ce,burgerStyles:Oe,easing:s,handler:()=>{Kt(!Dn),typeof l=="function"&&l(!Dn)},isLeft:e==="left",isToggled:Dn,label:o,margin:K,move:$e,time:ce,topOffset:pe,width:g})};function ia(){return ia=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ia.apply(this,arguments)}const YA=t=>Y.createElement(QA,ia({},t,{render:e=>Y.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:n=>n.key==="Enter"&&e.handler(),role:"button",style:e.burgerStyles,tabIndex:0},Y.createElement("div",{style:{transition:`${e.time/2}s ${e.easing} ${e.isToggled?"0s":`${e.time/2}s`}`,transform:`${e.isToggled?`translateY(${e.barHeight+e.margin}px)`:"none"}`}},Y.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time/2}s ${e.easing} ${e.isToggled?`${e.time/2}s`:"0s"}`,transform:`${e.isToggled?"rotate(45deg)":"none"}`}})),Y.createElement("div",{style:{transition:`${e.time/2}s ${e.easing}`,opacity:`${e.isToggled?"0":"1"}`}},Y.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time/2}s ${e.easing}`}})),Y.createElement("div",{style:{transition:`${e.time/2}s ${e.easing} ${e.isToggled?"0s":`${e.time/2}s`}`,transform:`${e.isToggled?`translateY(-${e.barHeight+e.margin}px)`:"none"}`}},Y.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight*2+e.margin*2}px`,transition:`${e.time/2}s ${e.easing} ${e.isToggled?`${e.time/2}s`:"0s"}`,transform:`${e.isToggled?"rotate(-45deg)":"none"}`}})))})),XA="/assets/reeltalent-logo-transparent-2c1d3138.svg",JA=()=>{const t=m.useRef(null),e=Fs(),[n,r]=m.useState("#222"),[s,i]=m.useState(!1),[o,a]=m.useState(!1),l=c=>{i(c),c?(t.current.classList.add("navbar__show__mobile"),r("#fff")):(a(!1),t.current.classList.add("navbar__hide__mobile"),setTimeout(()=>{t.current.classList.remove("navbar__show__mobile"),t.current.classList.remove("navbar__hide__mobile")},300),r("#222"))};return h.jsxs("div",{className:"mobile__main",children:[h.jsx("div",{className:"mobile__container",children:h.jsx(YA,{color:n,label:"Show menu",duration:.4,size:24,toggled:o,toggle:a,onToggle:l})}),h.jsxs("d",{className:"navbar__mobile",ref:t,children:[h.jsx("span",{className:"line-separator"}),h.jsxs("span",{className:"navbar__mobile__logo",children:[" ",h.jsx("img",{onClick:()=>{l(!s)},src:XA,className:"logo__mobile",alt:"Logo"})]}),h.jsx("li",{onClick:()=>{l(!s)},children:h.jsx(X,{to:"/solutions",onClick:()=>l(!s),children:"Solutions"})}),h.jsx("li",{onClick:()=>{l(!s)},children:h.jsx(X,{to:"/blog",onClick:()=>l(!s),children:"Blog"})}),h.jsx("li",{onClick:()=>{l(!s)},children:h.jsx(X,{to:"/about",onClick:()=>l(!s),children:"About us"})}),h.jsx("li",{children:h.jsx("button",{className:"btn1 btn1__nav__mobile",onClick:()=>{l(!s),e("/demo")},children:"Request a demo"})})]})]})},ZA=()=>h.jsx("nav",{children:h.jsxs("section",{className:"nav__container",children:[h.jsxs("div",{className:"logo__container",children:[h.jsx(X,{to:"/",children:h.jsx("img",{src:WA,className:"logo",alt:"Logo",width:"50",height:"50"})}),h.jsx(X,{to:"/",children:h.jsxs("h3",{className:"nav__title",children:[h.jsx("span",{className:"nav__subtitleReel",children:"Reel"})," ",h.jsx("span",{className:"nav__subtitleTalent",children:"Talent"})]})})]}),h.jsxs("ul",{className:"nav__link__group",children:[h.jsx("li",{className:"nav__links",children:h.jsx(X,{to:"/solutions",children:"Solutions"})}),h.jsx("li",{className:"nav__links",children:h.jsx(X,{to:"/blog",children:"Blog"})}),h.jsx("li",{className:"nav__links",children:h.jsx(X,{to:"/about",children:"About us"})})]}),h.jsxs("div",{className:"nav__btn__desktop",children:[" ",h.jsx(X,{to:"/demo",children:h.jsx("button",{className:"btn1",children:"Request a demo"})})]}),h.jsx(JA,{})]})});const eT="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCADIAMgDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAIGAwUHBAEI/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAECAwQFBv/aAAwDAQACEAMQAAAB/TA2agAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4fURJ8+gAAAAAAAAADz56/lnW1/Q6z1c9YtfBeu8id8ONQAAAAAAAAD5p9ziyTxrzdSq3ps9f6NrLpz0xxdcAAAAABjhTdhuNXrodSc+g20dtUZ+HB2ott+4vk0LfoX7SLv5SAwQAAAAAMUqxqske5bDDLDNOKM43mra3beDsMeSc7W+dn45d+Q6APLYQAAAAHl9WO00mGaHbvhx58eScMM0LzV/J7/AD9a0JzmvCxaTfarpY8fqAAAAAAVzV3OsdG/gh6Ibl/PHP8ALzWvJYdJ0ssJzyWvj3up2Wu6UPJ6AAAAAACMhqvDY2e1YjaV5q3hu6887x9IZr85l0RFtfsDn4ArUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//xAArEAAABgEBBwMFAQAAAAAAAAAAAQIDBBEFMBASExQVIEAGISQWIiU0cDP/2gAIAQEAAQUC/hdi/HccJtMnKKSX1OpCoHqBiYrxcmr7Mm4bjyUBKBhZKpMLxJzXEbnM7spKAlAwTRtw/EMhMxbcolYaQg4uFWakpJCdZa0tpeytBWRfMLkvrEqRkWS61OBZqcQjep5jR47NR8h4DzqWUSJCpC+ySzwpFCgXsMFmTka+Qe4rvbkS+RQoUEWhWNl87E1HFbjZ7D7J/wDvQoUKHpp6ndSV+vsPsme8ihQoUMH7ZHUWnfQZVtPbKL5FChQoYUvyGrNZ3HBWyhQmIp6hQoUMP+/qrQTiXo6mVUKFChLZ30UKFChj1cOZrGRKJyAkwcFwhyTo5J0ck6HcQtYPESSHTZBDp8gdPkCK84pH8c//xAAdEQACAgIDAQAAAAAAAAAAAAAAAREwAiESE1AQ/9oACAEDAQE/AfOgeMWYwZtRCqgi2CDJargga1QvqIGtUyzkzm0drO5j35f/xAAqEQABBAECAwcFAAAAAAAAAAABAAIDERIEMBAUIQUiMUFQUXETICNCkf/aAAgBAgEBPwH02NubqUOjhwt4Wu0jYRnH4bbHYm1DrI3NAJpa3Ute3BuxFCZPhNhjb5JmLP1C+lCReI/in0EEo6CipoXQPwdsMGIrjGe4Fa7RjEkWXmPvb0KCHBp7oVrUH8TvjYhlsUVatRvtqtTdY3DZEzwuZehqpG+C5+T2XPP9k42b9L//xAAyEAABAgIFCQgDAQAAAAAAAAABAAIDERIgMDFBISIyM0JRYXGBBBATIzRAUqFicLGR/9oACAEBAAY/Av1GSbkXUvDYFmtMQfkgwzhPPyu9s0Khst7xSyubmk+1yXhO45e8k7Tp+2+LsCtCkN4KnFzW7sUAMgFvNxkF5bZ8StOXILXvbyKLmdriPb9r1UT/AFepevMoxhxEiqIPhxfg72Bc5TddgKr24VB2eOfM2XfK3o7La3SoCDIjFMibVzudq524V+lWLCwIpWr+Vd1VnEG1c3eK7qsPr/Lalg6tzqw+v8tqJuWW7fVmLxVhHjK3kcoWaZLArR+1o/a0PtTDaJWhPqtUVqnLVOQEWG5r9+/9O//EACcQAQEAAQMBCAMBAQAAAAAAAAEAESExQXEQMEBRYYGhsXCR8MHx/9oACAEBAAE/IfwaZ8MweBvYQOZzHuZWMxU6MG4+jHhHaQDsuW179D17VU3l5HONvCO0uTUuZkJpiO1dELMOm3hc95btiwcHlKFYS3LlRB4WAOO/UFPlhSf2+J/h8gjHVedk3O47IkNZ/e5hHr/3BYdH7no8+AVrQ487JL4JMzMRGgcnSKUqEcJslqh8/wCD69+qh4ffmZmZt35mIQqQysg4YdN4BwN+99cBtSskJJmOfbilIRmXRDqaf78d8WJISSWIdAH1EIUr6UfHe+sgSpHckkhJYvgfqKUpf0X2d9p05veSYkxmRfIMUhSnHS+zvn45ViQy9vNMY9ipFnh8yIUpRb0Pu0/3v3ACcNqPTupbcdBn/nX9xf2Eu+5TDbCekdiyoCCbIw4afh1//9oADAMBAAIAAwAAABAMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMc8sMMMMMMMMMMen0MMMMMMMMMNX3QMMMMMMNs5Nm6AMMMMMMWritu/wCDDDDDDECECzOBDDDDDDDX3rALHDDDDDDDTDTBRSCDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD//EAB4RAQEBAAEFAQEAAAAAAAAAAAEAETAQITFBUFFh/9oACAEDAQE/EPmkJZBvGMn5cveHDl3RAkzgCCDoJ5XBkEEQne8C3tZZHSJsw/OELpHiQfov5khaGfL/AP/EACURAQACAAQFBQEAAAAAAAAAAAEAESFBUdEwMWFxoSBQgZGx8P/aAAgBAgEBPxD22secpLN5f2MGZyk04aGcpawGuEuXeOLlwGbcIMoL3xlwbDRDaAQqejaKO9HL65RIOPhNT1grRBM5QYT6GMUjq/Ge/wAetUrrFFBlXaIzdfq/OARc4hBBH0wjNiMx/OBymG3fedA87xy6f3zDNHneL5PO8BgVeXtf/8QAKRABAAECBAUEAwEBAAAAAAAAAREAITFBUWEQMHGBoZHB0fAgQLFw4f/aAAgBAQABPxD/AApQpBQWiX6rYqHrZVYwlKhhu67HmoYeboHostJ/6XHRDn1CcqUn6josiLgzg/7REoEUYLJnsIetYNqhi1I7fYvEKd4QnNH9QzSKWADMz+7UsSBGpAPka2a2aJRAnUBL1H9RuUBpHMykcgupp6U5Nm0Q9lHxTaqSFsZLHWaP+QdADA5+Mmx4KtxOqHYX8lKkGgR5FqIFtEnZE8UVC5cA62LnSOlJ+j+UJCJoD0SgHQQxbQh3GnHgYwK9LwdqAOfA0whisg3ptBGA2fnfjYqQyNxyoh7K6IkO0xwoqRs4UQjkjT8AELuDxTBz64866Skhg5nt2oRRoTRrFQ2DEPqnt+HwXlOwgyI606kR+4k2TZObqUT2JqTDKsq4vEMSjQvUFsHlra/C1FEFuAko6g5oLHrps4VmrXAb8K6SPg+/H9qtqmIWFuk325psfMkUAEJCOXBj4M9N9Pd1/hW1+FUL6c7GW6uzOd8fXi2XwLlLE29Et7VtVt8aGZaROcRih3HUphIlst8HbhaPBbquokwxzK2fwqQqwS5QeeWWYISNOrn9xxPNNQbqZ/YpTg+u9M9vv60/U+9IWS7CJ0mnmE19+lSoezD70P4D5pgQEwQPmpBAjPetg/47/9k=",tT=()=>h.jsxs("footer",{children:[h.jsxs("ul",{className:"footer__container",children:[h.jsx("li",{className:"footer__links",children:h.jsx(X,{to:"/",children:"About Us"})}),h.jsx("li",{className:"footer__links",children:h.jsx(X,{to:"/",children:"Our Services"})}),h.jsx("li",{className:"footer__links",children:h.jsx(X,{to:"/legal",children:"Terms and Conditions"})}),h.jsx("li",{className:"footer__links",children:h.jsx(X,{to:"/legal#privacy",children:"Privacy Policy"})})]}),h.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," Reel Talent. All rights reserved.",h.jsxs("div",{className:"powered-by",children:["Powered by"," ",h.jsxs("a",{className:"teamAiLink",href:"https://www.team.ai/talent-delivery-services",target:"_blank",rel:"noopener noreferrer",children:[h.jsx("img",{src:eT,className:"teamAiLogo",alt:"Team AI",width:35}),h.jsx("p",{className:"teamAiTitle",children:" Team AI"})]})," "]})]})]}),nT=()=>{const{pathname:t}=At();return m.useEffect(()=>{let e;switch(t){case"/blog":e="Reel Talent Blog - Insights and Resources for Hiring and Recruitment";break;case"/demo":e="Reel Talent Demo - Try Our Recruiting Solutions Now";break;case"/about":e="About Us - Reel Talent";break;case"/solutions":e="Reel Talent Solutions: Empowering Your Recruitment Strategies";break;case"/legal":e="Legal - Reel Talent";break;case"/404":e="Page Not Found - Reel Talent";break;default:e="Reel Talent: Your Expert Recruiting Partner";break}document.title=e},[t]),h.jsxs(h.Fragment,{children:[h.jsx(ZA,{}),h.jsxs(KA,{children:[h.jsx(GA,{}),h.jsx("main",{children:h.jsx(Cm,{children:Yw.map(e=>e.element)})}),h.jsx(zA,{})]}),h.jsx(tT,{})]})};no.createRoot(document.getElementById("root")).render(h.jsx(Y.StrictMode,{children:h.jsx(Om,{children:h.jsx(nT,{firebase:Pl,analytics:Nw})})}));
