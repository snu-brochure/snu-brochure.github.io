const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.G-j9RwOl.js","../chunks/disclose-version.BV6qmQUR.js","../chunks/index-client.zLGMmVjA.js","../chunks/store.DIQIfH4Y.js","../chunks/index.DETpihin.js","../chunks/index.B0sogCPn.js","../chunks/legacy.XJ7mxm8N.js","../chunks/invertHeader.HPwvqnZC.js","../chunks/lifecycle.Rq2atv29.js","../chunks/Logo.svg.Bn_sMmjp.js","../chunks/client.Y77YRMBo.js","../chunks/entry.BaMNTsor.js","../assets/0.GTitiFAp.css","../nodes/1.BckuYNca.js","../nodes/2.D_QAEMaO.js","../chunks/index.CGzjmkl7.js","../chunks/Footer.CQURkw0e.js","../assets/Footer.DxVVvQog.css","../chunks/this.Bqqg-ICj.js","../chunks/viewport.BgZbigCj.js","../chunks/props.BItJ3oib.js","../assets/viewport.B78ZYNJR.css","../chunks/NextPage.oLc_1DCV.js","../assets/NextPage.CWf46ukT.css","../assets/index.BT4MX60f.css","../nodes/3.DsIiymrf.js","../chunks/information.CBh605KQ.js","../chunks/H1.DgFKRSj0.js","../assets/H1.6MRLSdba.css","../assets/information.BOk96I0A.css","../nodes/4.D6V8rwjG.js","../chunks/initiatives.BhDv44uC.js","../assets/initiatives.C1uxTXrx.css","../nodes/5.BziBYggz.js","../chunks/visionary-path.BdI46hfw.js","../assets/visionary-path.7fzxAx95.css","../nodes/6.DsIiymrf.js","../nodes/7.D6V8rwjG.js","../nodes/8.BziBYggz.js","../nodes/9.D_QAEMaO.js"])))=>i.map(i=>d[i]);
var Y=r=>{throw TypeError(r)};var G=(r,t,s)=>t.has(r)||Y("Cannot "+s);var l=(r,t,s)=>(G(r,t,"read from private field"),s?s.call(r):t.get(r)),x=(r,t,s)=>t.has(r)?Y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,s),V=(r,t,s,n)=>(G(r,t,"write to private field"),n?n.call(r,s):t.set(r,s),s);import{_ as N,$ as K,Z as Q,a0 as X,a6 as M,a8 as $,a7 as tt,g,V as et,C as T,ag as rt,ah as st,Y as at,p as nt,u as ot,b as it,x as ct,ai as lt,f as L,a as ut,aj as D,s as mt,c as dt,r as ft,t as _t,k as I}from"../chunks/index-client.zLGMmVjA.js";import{h as ht,m as vt,u as gt,a as k,t as Z,c as C,b as Et,s as yt}from"../chunks/disclose-version.BV6qmQUR.js";import{i as S}from"../chunks/store.DIQIfH4Y.js";import{p as j,a as bt}from"../chunks/props.BItJ3oib.js";import{b as B}from"../chunks/this.Bqqg-ICj.js";function q(r,t,s){N&&K();var n=r,o,c;Q(()=>{o!==(o=t())&&(c&&(tt(c),c=null),o&&(c=M(()=>s(n,o))))},X),N&&(n=$)}function Pt(r){return class extends Rt{constructor(t){super({component:r,...t})}}}var E,m;class Rt{constructor(t){x(this,E);x(this,m);var c;var s=new Map,n=(a,e)=>{var d=at(e);return s.set(a,d),d};const o=new Proxy({...t.props||{},$$events:{}},{get(a,e){return g(s.get(e)??n(e,Reflect.get(a,e)))},has(a,e){return e===et?!0:(g(s.get(e)??n(e,Reflect.get(a,e))),Reflect.has(a,e))},set(a,e,d){return T(s.get(e)??n(e,d),d),Reflect.set(a,e,d)}});V(this,m,(t.hydrate?ht:vt)(t.component,{target:t.target,anchor:t.anchor,props:o,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((c=t==null?void 0:t.props)!=null&&c.$$host)||t.sync===!1)&&rt(),V(this,E,o.$$events);for(const a of Object.keys(l(this,m)))a==="$set"||a==="$destroy"||a==="$on"||st(this,a,{get(){return l(this,m)[a]},set(e){l(this,m)[a]=e},enumerable:!0});l(this,m).$set=a=>{Object.assign(o,a)},l(this,m).$destroy=()=>{gt(l(this,m))}}$set(t){l(this,m).$set(t)}$on(t,s){l(this,E)[t]=l(this,E)[t]||[];const n=(...o)=>s.call(this,...o);return l(this,E)[t].push(n),()=>{l(this,E)[t]=l(this,E)[t].filter(o=>o!==n)}}$destroy(){l(this,m).$destroy()}}E=new WeakMap,m=new WeakMap;const kt="modulepreload",pt=function(r,t){return new URL(r,t).href},W={},h=function(t,s,n){let o=Promise.resolve();if(s&&s.length>0){const a=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),d=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));o=Promise.allSettled(s.map(u=>{if(u=pt(u,n),u in W)return;W[u]=!0;const y=u.endsWith(".css"),w=y?'[rel="stylesheet"]':"";if(!!n)for(let b=a.length-1;b>=0;b--){const i=a[b];if(i.href===u&&(!y||i.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${w}`))return;const _=document.createElement("link");if(_.rel=y?"stylesheet":kt,y||(_.as="script"),_.crossOrigin="",_.href=u,d&&_.setAttribute("nonce",d),document.head.appendChild(_),y)return new Promise((b,i)=>{_.addEventListener("load",b),_.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${u}`)))})}))}function c(a){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=a,window.dispatchEvent(e),!e.defaultPrevented)throw a}return o.then(a=>{for(const e of a||[])e.status==="rejected"&&c(e.reason);return t().catch(c)})},Bt={};var Ot=Z('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),At=Z("<!> <!>",1);function Lt(r,t){nt(t,!0);let s=j(t,"components",23,()=>[]),n=j(t,"data_0",3,null),o=j(t,"data_1",3,null);ot(()=>t.stores.page.set(t.page)),it(()=>{t.stores,t.page,t.constructors,s(),t.form,n(),o(),t.stores.page.notify()});let c=D(!1),a=D(!1),e=D(null);ct(()=>{const i=t.stores.page.subscribe(()=>{g(c)&&(T(a,!0),lt().then(()=>{T(e,bt(document.title||"untitled page"))}))});return T(c,!0),i});const d=I(()=>t.constructors[1]);var u=At(),y=L(u);{var w=i=>{var v=C();const p=I(()=>t.constructors[0]);var O=L(v);q(O,()=>g(p),(P,R)=>{B(R(P,{get data(){return n()},get form(){return t.form},children:(f,xt)=>{var U=C(),z=L(U);q(z,()=>g(d),(H,J)=>{B(J(H,{get data(){return o()},get form(){return t.form}}),A=>s()[1]=A,()=>{var A;return(A=s())==null?void 0:A[1]})}),k(f,U)},$$slots:{default:!0}}),f=>s()[0]=f,()=>{var f;return(f=s())==null?void 0:f[0]})}),k(i,v)},F=i=>{var v=C();const p=I(()=>t.constructors[0]);var O=L(v);q(O,()=>g(p),(P,R)=>{B(R(P,{get data(){return n()},get form(){return t.form}}),f=>s()[0]=f,()=>{var f;return(f=s())==null?void 0:f[0]})}),k(i,v)};S(y,i=>{t.constructors[1]?i(w):i(F,!1)})}var _=mt(y,2);{var b=i=>{var v=Ot(),p=dt(v);{var O=P=>{var R=Et();_t(()=>yt(R,g(e))),k(P,R)};S(p,P=>{g(a)&&P(O)})}ft(v),k(i,v)};S(_,i=>{g(c)&&i(b)})}k(r,u),ut()}const qt=Pt(Lt),Ft=[()=>h(()=>import("../nodes/0.G-j9RwOl.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url),()=>h(()=>import("../nodes/1.BckuYNca.js"),__vite__mapDeps([13,1,2,6,8,10,11,5]),import.meta.url),()=>h(()=>import("../nodes/2.D_QAEMaO.js"),__vite__mapDeps([14,1,2,6,15,16,4,5,17,18,8,3,19,7,20,21,22,23,24]),import.meta.url),()=>h(()=>import("../nodes/3.DsIiymrf.js"),__vite__mapDeps([25,1,2,6,26,3,4,5,16,17,27,18,28,8,9,29]),import.meta.url),()=>h(()=>import("../nodes/4.D6V8rwjG.js"),__vite__mapDeps([30,1,2,6,31,3,16,4,5,17,27,18,28,22,23,20,32]),import.meta.url),()=>h(()=>import("../nodes/5.BziBYggz.js"),__vite__mapDeps([33,1,2,6,34,3,7,22,4,5,18,16,17,23,27,28,8,20,19,21,35]),import.meta.url),()=>h(()=>import("../nodes/6.DsIiymrf.js"),__vite__mapDeps([36,1,2,6,26,3,4,5,16,17,27,18,28,8,9,29]),import.meta.url),()=>h(()=>import("../nodes/7.D6V8rwjG.js"),__vite__mapDeps([37,1,2,6,31,3,16,4,5,17,27,18,28,22,23,20,32]),import.meta.url),()=>h(()=>import("../nodes/8.BziBYggz.js"),__vite__mapDeps([38,1,2,6,34,3,7,22,4,5,18,16,17,23,27,28,8,20,19,21,35]),import.meta.url),()=>h(()=>import("../nodes/9.D_QAEMaO.js"),__vite__mapDeps([39,1,2,6,15,16,4,5,17,18,8,3,19,7,20,21,22,23,24]),import.meta.url)],Ut=[],Yt={"/":[2],"/en/information.html":[3],"/en/initiatives.html":[4],"/en/visionary-path.html":[5],"/ko.html":[9],"/ko/information.html":[6],"/ko/initiatives.html":[7],"/ko/visionary-path.html":[8]},Tt={handleError:({error:r})=>{console.error(r)},reroute:()=>{},transport:{}},wt=Object.fromEntries(Object.entries(Tt.transport).map(([r,t])=>[r,t.decode])),Gt=(r,t)=>wt[r](t);export{Gt as decode,wt as decoders,Yt as dictionary,Tt as hooks,Bt as matchers,Ft as nodes,qt as root,Ut as server_loads};