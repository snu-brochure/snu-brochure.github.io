var Ht=t=>{throw TypeError(t)};var Oe=(t,e,n)=>e.has(t)||Ht("Cannot "+n);var b=(t,e,n)=>(Oe(t,e,"read from private field"),n?n.call(t):e.get(t)),x=(t,e,n)=>e.has(t)?Ht("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{n as K,l as Ne,av as je,ar as P,g as C,s as O,aq as $e}from"./runtime.BGQiY3Km.js";import{s as De,o as Kt}from"./index-client.rMe-b4Hz.js";new URL("sveltekit-internal://");function Be(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Fe(t){return t.split("%25").map(decodeURI).join("%25")}function Ve(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function It({href:t}){return t.split("#")[0]}const qe=["href","pathname","search","toString","toJSON"];function Ge(t,e,n){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(n(s),a[o](s));e();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of qe)Object.defineProperty(r,a,{get(){return e(),t[a]},enumerable:!0,configurable:!0});return r}const Me="/__data.json",ze=".html__data.json";function He(t){return t.endsWith(".html")?t.replace(/\.html$/,ze):t.replace(/\/$/,"")+Me}function Ke(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function We(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const ce=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&W.delete(Ot(t)),ce(t,e));const W=new Map;function Ye(t,e){const n=Ot(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&W.set(n,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=We(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,e)}function Je(t,e,n){if(W.size>0){const r=Ot(t,n),a=W.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);W.delete(r)}}return window.fetch(e,n)}function Ot(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${Ke(...a)}"]`}return r}const Xe=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ze(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${tn(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return e.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Ut(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Ut(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=Xe.exec(c),[,h,m,u,p]=d;return e.push({name:u,matcher:p,optional:!!h,rest:!!m,chained:m?l===1&&i[0]==="":!1}),m?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return Ut(c)}).join("")}).join("")}/?$`),params:e}}function Qe(t){return!/^\([^)]+\)$/.test(t)}function tn(t){return t.slice(1).split("/").filter(Qe)}function en(t,e,n){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<e.length;s+=1){const c=e[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=e[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Ut(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function nn({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([s,[c,l,d]])=>{const{pattern:h,params:m}=Ze(s),u={id:s,exec:p=>{const f=h.exec(p);if(f)return en(f,m,r)},errors:[1,...d||[]].map(p=>t[p]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function le(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function Wt(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}const F=[];function rn(t,e){return{subscribe:vt(t,e).subscribe}}function vt(t,e=K){let n=null;const r=new Set;function a(s){if(je(t,s)&&(t=s,n)){const c=!F.length;for(const l of r)l[1](),F.push(l,t);if(c){for(let l=0;l<F.length;l+=2)F[l][0](F[l+1]);F.length=0}}}function o(s){a(s(t))}function i(s,c=K){const l=[s,c];return r.add(l),r.size===1&&(n=e(a,o)||K),s(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:i}}function Fn(t,e,n){const r=!Array.isArray(t),a=r?[t]:t;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const o=e.length<2;return rn(n,(i,s)=>{let c=!1;const l=[];let d=0,h=K;const m=()=>{if(d)return;h();const p=e(r?l[0]:l,i,s);o?i(p):h=typeof p=="function"?p:K},u=a.map((p,f)=>De(p,g=>{l[f]=g,d&=~(1<<f),c&&m()},()=>{d|=1<<f}));return c=!0,m(),function(){Ne(u),h(),c=!1}})}var re;const L=((re=globalThis.__sveltekit_p567jz)==null?void 0:re.base)??"";var ae;const an=((ae=globalThis.__sveltekit_p567jz)==null?void 0:ae.assets)??L,on="1734531353911",fe="sveltekit:snapshot",ue="sveltekit:scroll",de="sveltekit:states",sn="sveltekit:pageurl",G="sveltekit:history",J="sveltekit:navigation",dt={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ft=location.origin;function he(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Nt(){return{x:pageXOffset,y:pageYOffset}}function V(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Yt={...dt,"":dt.hover};function pe(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function ge(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=pe(t)}}function xt(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!n||!!r||bt(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(n==null?void 0:n.origin)===ft&&t.hasAttribute("download");return{url:n,external:a,target:r,download:o}}function ht(t){let e=null,n=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=V(s,"preload-code")),a===null&&(a=V(s,"preload-data")),e===null&&(e=V(s,"keepfocus")),n===null&&(n=V(s,"noscroll")),o===null&&(o=V(s,"reload")),i===null&&(i=V(s,"replacestate")),s=pe(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Yt[r??"off"],preload_data:Yt[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(o),replace_state:c(i)}}function Jt(t){const e=vt(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function o(i){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const me={v:()=>{}};function cn(){const{set:t,subscribe:e}=vt(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${an}/assets/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==on;return i&&(t(!0),me.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function bt(t,e){return t.origin!==ft||!t.pathname.startsWith(e)}function Xt(t){const e=fn(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const ln="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function fn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=ln.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const un=-1,dn=-2,hn=-3,pn=-4,gn=-5,mn=-6;function yn(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(o,i=!1){if(o===un)return;if(o===hn)return NaN;if(o===pn)return 1/0;if(o===gn)return-1/0;if(o===mn)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=n[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=e==null?void 0:e[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const m=Object.create(null);r[o]=m;for(let u=1;u<s.length;u+=2)m[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],p=s[1],f=Xt(p),g=new u(f);r[o]=g;break}case"ArrayBuffer":{const u=s[1],p=Xt(u);r[o]=p;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==dn&&(c[l]=a(d))}}else{const c={};r[o]=c;for(const l in s){const d=s[l];c[l]=a(d)}}return r[o]}return a(0)}const ye=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ye];const _n=new Set([...ye]);[..._n];function wn(t){return t.filter(e=>e!=null)}class At{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class _e{constructor(e,n){this.status=e,this.location=n}}class jt extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const vn="x-sveltekit-invalidated",bn="x-sveltekit-trailing-slash";function pt(t){return t instanceof At||t instanceof jt?t.status:500}function An(t){return t instanceof jt?t.text:"Internal Error"}let A,X,Tt;const kn=Kt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Kt.toString());var tt,et,nt,rt,at,ot,st,it,oe,ct,se,lt,ie;kn?(A={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},X={current:null},Tt={current:!1}):(A=new(oe=class{constructor(){x(this,tt,P({}));x(this,et,P(null));x(this,nt,P(null));x(this,rt,P({}));x(this,at,P({id:null}));x(this,ot,P({}));x(this,st,P(-1));x(this,it,P(new URL("https://example.com")))}get data(){return C(b(this,tt))}set data(e){O(b(this,tt),e)}get form(){return C(b(this,et))}set form(e){O(b(this,et),e)}get error(){return C(b(this,nt))}set error(e){O(b(this,nt),e)}get params(){return C(b(this,rt))}set params(e){O(b(this,rt),e)}get route(){return C(b(this,at))}set route(e){O(b(this,at),e)}get state(){return C(b(this,ot))}set state(e){O(b(this,ot),e)}get status(){return C(b(this,st))}set status(e){O(b(this,st),e)}get url(){return C(b(this,it))}set url(e){O(b(this,it),e)}},tt=new WeakMap,et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,oe),X=new(se=class{constructor(){x(this,ct,P(null))}get current(){return C(b(this,ct))}set current(e){O(b(this,ct),e)}},ct=new WeakMap,se),Tt=new(ie=class{constructor(){x(this,lt,P(!1))}get current(){return C(b(this,lt))}set current(e){O(b(this,lt),e)}},lt=new WeakMap,ie),me.v=()=>Tt.current=!0);function Sn(t){Object.assign(A,t)}const En=new Set(["icon","shortcut icon","apple-touch-icon"]),D=le(ue)??{},Z=le(fe)??{},j={url:Jt({}),page:Jt({}),navigating:vt(null),updated:cn()};function $t(t){D[t]=Nt()}function Rn(t,e){let n=t+1;for(;D[n];)delete D[n],n+=1;for(n=e+1;Z[n];)delete Z[n],n+=1}function z(t){return location.href=t.href,new Promise(()=>{})}async function we(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(L||"/");t&&await t.update()}}function Zt(){}let kt,Pt,gt,N,Ct,B;const ve=[],mt=[];let U=null;const be=[],In=[];let q=[],_={branch:[],error:null,url:null},Dt=!1,yt=!1,Qt=!0,Q=!1,H=!1,Ae=!1,Bt=!1,Ft,I,T,_t;const Y=new Set;async function Mn(t,e,n){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),B=t,await((o=(a=t.hooks).init)==null?void 0:o.call(a)),kt=nn(t),N=document.documentElement,Ct=e,Pt=t.nodes[0],gt=t.nodes[1],Pt(),gt(),I=(i=history.state)==null?void 0:i[G],T=(s=history.state)==null?void 0:s[J],I||(I=T=Date.now(),history.replaceState({...history.state,[G]:I,[J]:T},""));const r=D[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Nn(Ct,n):Cn(location.href,{replaceState:!0}),On()}function Un(){ve.length=0,Bt=!1}function ke(t){mt.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=mt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Se(t){var e;(e=Z[t])==null||e.forEach((n,r)=>{var a,o;(o=(a=mt[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function te(){$t(I),Wt(ue,D),ke(T),Wt(fe,Z)}async function Ee(t,e,n,r){return ut({type:"goto",url:he(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Bt=!0)}})}async function Tn(t){if(t.id!==(U==null?void 0:U.id)){const e={};Y.add(e),U={id:t.id,token:e,promise:Ie({...t,preload:e}).then(n=>(Y.delete(e),n.type==="loaded"&&n.state.error&&(U=null),n))}}return U.promise}async function Lt(t){const e=kt.find(n=>n.exec(Ue(t)));e&&await Promise.all([...e.layouts,e.leaf].map(n=>n==null?void 0:n[1]()))}function Re(t,e,n){var o;_=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(A,t.props.page),Ft=new B.root({target:e,props:{...t.props,stores:j,components:mt},hydrate:n,sync:!1}),Se(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};q.forEach(i=>i(a)),yt=!0}function wt({url:t,params:e,branch:n,status:r,error:a,route:o,form:i}){let s="never";if(L&&(t.pathname===L||t.pathname===L+"/"))s="always";else for(const u of n)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=Be(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:o},props:{constructors:wn(n).map(u=>u.node.component),page:A}};i!==void 0&&(c.props.form=i);let l={},d=!A,h=0;for(let u=0;u<Math.max(n.length,_.branch.length);u+=1){const p=n[u],f=_.branch[u];(p==null?void 0:p.data)!==(f==null?void 0:f.data)&&(d=!0),p&&(l={...l,...p.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!_.url||t.href!==_.url.href||_.error!==a||i!==void 0&&i!==A.form||d)&&(c.props.page={error:a,params:e,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:d?l:A.data}),c}async function Vt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:o}){var d,h,m;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const g of f){const{href:k}=new URL(g,n);c.dependencies.add(k)}};const p={route:new Proxy(a,{get:(f,g)=>(s&&(c.route=!0),f[g])}),params:new Proxy(r,{get:(f,g)=>(s&&c.params.add(g),f[g])}),data:(o==null?void 0:o.data)??null,url:Ge(n,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,g){let k;f instanceof Request?(k=f.url,g={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...g}):k=f;const E=new URL(k,n);return s&&u(E.href),E.origin===n.origin&&(k=E.href.slice(n.origin.length)),yt?Je(k,E.href,g):Ye(k,g)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),e()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,p)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((m=l.universal)==null?void 0:m.trailingSlash)??(o==null?void 0:o.slash)}}function ee(t,e,n,r,a,o){if(Bt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(ve.some(s=>s(new URL(i))))return!0;return!1}function qt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function Ln(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),o=e.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&n.delete(r)}return n}function ne({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:A,constructors:[]}}}async function Ie({id:t,invalidating:e,url:n,params:r,route:a,preload:o}){if((U==null?void 0:U.id)===t)return Y.delete(U.token),U.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(y=>y==null?void 0:y().catch(()=>{})),l.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let d=null;const h=_.url?t!==_.url.pathname+_.url.search:!1,m=_.route?a.id!==_.route.id:!1,u=Ln(_.url,n);let p=!1;const f=l.map((y,v)=>{var $;const S=_.branch[v],R=!!(y!=null&&y[0])&&((S==null?void 0:S.loader)!==y[1]||ee(p,m,h,u,($=S.server)==null?void 0:$.uses,r));return R&&(p=!0),R});if(f.some(Boolean)){try{d=await xe(n,f)}catch(y){const v=await M(y,{url:n,params:r,route:{id:t}});return Y.has(o)?ne({error:v,url:n,params:r,route:a}):St({status:pt(y),error:v,url:n,route:a})}if(d.type==="redirect")return d}const g=d==null?void 0:d.nodes;let k=!1;const E=l.map(async(y,v)=>{var Et;if(!y)return;const S=_.branch[v],R=g==null?void 0:g[v];if((!R||R.type==="skip")&&y[1]===(S==null?void 0:S.loader)&&!ee(k,m,h,u,(Et=S.universal)==null?void 0:Et.uses,r))return S;if(k=!0,(R==null?void 0:R.type)==="error")throw R;return Vt({loader:y[1],url:n,params:r,route:a,parent:async()=>{var zt;const Mt={};for(let Rt=0;Rt<v;Rt+=1)Object.assign(Mt,(zt=await E[Rt])==null?void 0:zt.data);return Mt},server_data_node:qt(R===void 0&&y[0]?{type:"skip"}:R??null,y[0]?S==null?void 0:S.server:void 0)})});for(const y of E)y.catch(()=>{});const w=[];for(let y=0;y<l.length;y+=1)if(l[y])try{w.push(await E[y])}catch(v){if(v instanceof _e)return{type:"redirect",location:v.location};if(Y.has(o))return ne({error:await M(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let S=pt(v),R;if(g!=null&&g.includes(v))S=v.status??S,R=v.error;else if(v instanceof At)R=v.body;else{if(await j.updated.check())return await we(),await z(n);R=await M(v,{params:r,url:n,route:{id:a.id}})}const $=await xn(y,w,i);return $?wt({url:n,params:r,branch:w.slice(0,$.idx).concat($.node),status:S,error:R,route:a}):await Le(n,{id:a.id},R,S)}else w.push(void 0);return wt({url:n,params:r,branch:w,status:200,error:null,route:a,form:e?void 0:null})}async function xn(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function St({status:t,error:e,url:n,route:r}){const a={};let o=null;if(B.server_loads[0]===0)try{const l=await xe(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==ft||n.pathname!==location.pathname||Dt)&&await z(n)}const s=await Vt({loader:Pt,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:qt(o)}),c={node:await gt(),loader:gt,universal:null,server:null,data:null};return wt({url:n,params:a,branch:[s,c],status:t,error:e,route:null})}function Gt(t,e){if(!t||bt(t,L))return;let n;try{n=B.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=Ue(n);for(const a of kt){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:e,route:a,params:Ve(o),url:t}}}function Ue(t){return Fe(t.slice(L.length)||"/")}function Te({url:t,type:e,intent:n,delta:r}){let a=!1;const o=Ce(_,n,t,e);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Q||be.forEach(s=>s(i)),a?null:o}async function ut({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Zt,block:d=Zt}){const h=Gt(e,!1),m=Te({url:e,type:t,delta:n==null?void 0:n.delta,intent:h});if(!m){d();return}const u=I,p=T;l(),Q=!0,yt&&j.navigating.set(X.current=m.navigation),_t=c;let f=h&&await Ie(h);if(!f){if(bt(e,L))return await z(e);f=await Le(e,{id:null},await M(new jt(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(h==null?void 0:h.url)||e,_t!==c)return m.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await St({status:500,error:await M(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return Ee(new URL(f.location,e).href,{},s+1,c),!1;else f.props.page.status>=400&&await j.updated.check()&&(await we(),await z(e));if(Un(),$t(u),ke(p),f.props.page.url.pathname!==e.pathname&&(e.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const w=o?0:1,y={[G]:I+=w,[J]:T+=w,[de]:i};(o?history.replaceState:history.pushState).call(history,y,"",e),o||Rn(I,T)}if(U=null,f.props.page.state=i,yt){_=f.state,f.props.page&&(f.props.page.url=e);const w=(await Promise.all(In.map(y=>y(m.navigation)))).filter(y=>typeof y=="function");if(w.length>0){let y=function(){q=q.filter(v=>!w.includes(v))};w.push(y),q.push(...w)}Ft.$set(f.props),Sn(f.props.page),Ae=!0}else Re(f,Ct,!1);const{activeElement:g}=document;await $e();const k=n?n.scroll:a?Nt():null;if(Qt){const w=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));k?scrollTo(k.x,k.y):w?w.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==g&&document.activeElement!==document.body;!r&&!E&&jn(),Qt=!0,f.props.page&&Object.assign(A,f.props.page),Q=!1,t==="popstate"&&Se(T),m.fulfil(void 0),q.forEach(w=>w(m.navigation)),j.navigating.set(X.current=null)}async function Le(t,e,n,r){return t.origin===ft&&t.pathname===location.pathname&&!Dt?await St({status:r,error:n,url:t,route:e}):await z(t)}function Pn(){let t;N.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function e(o){o.defaultPrevented||r(o.composedPath()[0],1)}N.addEventListener("mousedown",e),N.addEventListener("touchstart",e,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(Lt(i.target.href),n.unobserve(i.target))},{threshold:0});function r(o,i){const s=ge(o,N);if(!s)return;const{url:c,external:l,download:d}=xt(s,L);if(l||d)return;const h=ht(s),m=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!m)if(i<=h.preload_data){const u=Gt(c,!1);u&&Tn(u)}else i<=h.preload_code&&Lt(c.pathname)}function a(){n.disconnect();for(const o of N.querySelectorAll("a")){const{url:i,external:s,download:c}=xt(o,L);if(s||c)continue;const l=ht(o);l.reload||(l.preload_code===dt.viewport&&n.observe(o),l.preload_code===dt.eager&&Lt(i.pathname))}}q.push(a),a()}function M(t,e){if(t instanceof At)return t.body;const n=pt(t),r=An(t);return B.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function Cn(t,e={}){return t=he(t),t.origin!==ft?Promise.reject(new Error("goto: invalid URL")):Ee(t,e,0)}function On(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(te(),!Q){const a=Ce(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};be.forEach(i=>i(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&te()}),(e=navigator.connection)!=null&&e.saveData||Pn(),N.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=ge(n.composedPath()[0],N);if(!r)return;const{url:a,external:o,target:i,download:s}=xt(r,L);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ht(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=a.href.split("#"),m=d===It(location);if(o||c.reload&&(!m||!h)){Te({url:a,type:"link"})?Q=!0:n.preventDefault();return}if(h!==void 0&&m){const[,u]=_.url.href.split("#");if(u===h){if(n.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const p=r.ownerDocument.getElementById(decodeURIComponent(h));p&&(p.scrollIntoView(),p.focus())}return}if(H=!0,$t(I),t(a),!c.replace_state)return;H=!1}n.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),ut({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),N.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(bt(s,L))return;const c=n.target,l=ht(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),ut({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[G]){const a=n.state[G];if(_t={},a===I)return;const o=D[a],i=n.state[de]??{},s=new URL(n.state[sn]??location.href),c=n.state[J],l=It(location)===It(_.url);if(c===T&&(Ae||l)){t(s),D[I]=Nt(),o&&scrollTo(o.x,o.y),i!==A.state&&(A.state=i,Ft.$set({page:A})),I=a;return}const h=a-I;await ut({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{I=a,T=c},block:()=>{history.go(-h)},nav_token:_t})}else if(!H){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{H&&(H=!1,history.replaceState({...history.state,[G]:++I,[J]:T},"",location.href))});for(const n of document.querySelectorAll("link"))En.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&j.navigating.set(X.current=null)});function t(n){_.url=A.url=n,j.page.set({data:A.data,error:A.error,form:A.form,params:A.params,route:A.route,state:A.state,status:A.status,url:n}),j.page.notify()}}async function Nn(t,{status:e=200,error:n,node_ids:r,params:a,route:o,data:i,form:s}){Dt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Gt(c,!1)||{});let l,d=!0;try{const h=r.map(async(p,f)=>{const g=i[f];return g!=null&&g.uses&&(g.uses=Pe(g.uses)),Vt({loader:B.nodes[p],url:c,params:a,route:o,parent:async()=>{const k={};for(let E=0;E<f;E+=1)Object.assign(k,(await h[E]).data);return k},server_data_node:qt(g)})}),m=await Promise.all(h),u=kt.find(({id:p})=>p===o.id);if(u){const p=u.layouts;for(let f=0;f<p.length;f++)p[f]||m.splice(f,0,void 0)}l=wt({url:c,params:a,branch:m,status:e,error:n,form:s,route:u??null})}catch(h){if(h instanceof _e){await z(new URL(h.location,location.href));return}l=await St({status:pt(h),error:await M(h,{url:c,params:a,route:o}),url:c,route:o}),t.textContent="",d=!1}l.props.page&&(l.props.page.state={}),Re(l,t,d)}async function xe(t,e){var a;const n=new URL(t);n.pathname=He(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(bn,"1"),n.searchParams.append(vn,e.map(o=>o?"1":"0").join(""));const r=await ce(n.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new At(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(m){return yn(m,{...B.decoders,Promise:u=>new Promise((p,f)=>{i.set(u,{fulfil:p,reject:f})})})}let d="";for(;;){const{done:m,value:u}=await s.read();if(m&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const p=d.indexOf(`
`);if(p===-1)break;const f=JSON.parse(d.slice(0,p));if(d=d.slice(p+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(g=>{(g==null?void 0:g.type)==="data"&&(g.uses=Pe(g.uses),g.data=l(g.data))}),o(f);else if(f.type==="chunk"){const{id:g,data:k,error:E}=f,w=i.get(g);i.delete(g),E?w.reject(l(E)):w.fulfil(l(k))}}}})}function Pe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function jn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function Ce(t,e,n,r){var c,l;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:o}}export{Mn as a,Fn as d,A as p,j as s,Tt as u,vt as w};
