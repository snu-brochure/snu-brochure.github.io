import{a as $,t as O,d as j,s as q,c as V}from"../chunks/disclose-version.D_3l79Q0.js";import{p as T,t as b,c as i,r as v,a as L,s as _,n as I,f as w,a5 as F,o as K}from"../chunks/index-client.CCYLx5zA.js";import{s as k,a as f,i as Y}from"../chunks/store.Ck7WYwAI.js";import{s as N,h as C,c as z,o as B,n as E,d as P,l as H,e as D,b as R,f as G,a as J}from"../chunks/index.CPEBVpSn.js";import{i as M}from"../chunks/legacy.CJEJn-XD.js";import{a as Q,i as W}from"../chunks/invertHeader.BEP-ciiW.js";import{t as x}from"../chunks/class.D6cH1zlD.js";import{L as X}from"../chunks/Logo.svg.DqlKZvnq.js";import{p as S}from"../chunks/client.DCjOhOd2.js";const Z=!0,Na=Object.freeze(Object.defineProperty({__proto__:null,prerender:Z},Symbol.toStringTag,{value:"Module"}));var aa=O('<a class="logo svelte-4umpb4"><span><!></span></a>');function U(c,s){T(s,!1);const t=k(),n=()=>f(C,"$href",t);M();var e=aa();b(()=>N(e,"href",n()("/")));var a=i(e),o=i(a);X(o),v(a),v(e),$(c,e),L()}var ea=O('<button type="button" aria-label="Toggle nav" class="svelte-15hhz6t"><span class="svelte-15hhz6t"><i class="svelte-15hhz6t"></i></span></button>');function ta(c){const s=k(),t=()=>f(E,"$navOpened",s);var n=ea();n.__click=function(...e){var a;(a=t()?z:B)==null||a.apply(this,e)},b(()=>x(n,"-opened",t())),$(c,n)}j(["click"]);var na=O('<button aria-label="Close nav" type="button" class="nav-closer svelte-hig358"></button>');function sa(c){const s=k(),t=()=>f(P,"$navOpening",s),n=()=>f(E,"$navOpened",s);var e=na();e.__click=function(...a){var o;(o=z)==null||o.apply(this,a)},b(()=>{x(e,"-opening",t()),x(e,"-opened",n())}),$(c,e)}j(["click"]);var oa=O('<li class="svelte-9d2wn7"><a class="svelte-9d2wn7"> </a></li>'),ra=O('<nav class="svelte-9d2wn7"><ul class="svelte-9d2wn7"><!> <!> <!></ul></nav>');function la(c,s){T(s,!1);const t=k(),n=()=>f(C,"$href",t),e=()=>f(H,"$lang",t);M();var a=ra(),o=i(a);{const r=(p,u=I,y=I)=>{var h=oa(),d=i(h);b(()=>N(d,"href",n()(u())));var A=i(d,!0);v(d),v(h),b(()=>{N(d,"aria-current",S.route.id==="/"+e()+u()?!0:void 0),q(A,y())}),$(p,h)};var g=i(o);r(g,()=>"/visionary-path.html",()=>"SNU VISIONARY PATH");var l=_(g,2);r(l,()=>"/initiatives.html",()=>"SNU INITIATIVES");var m=_(l,2);r(m,()=>"/information.html",()=>"SNU INFORMATION"),v(o)}v(a),$(c,a),L()}var ia=O('<li class="svelte-ha2esx"><a data-sveltekit-noscroll="" class="svelte-ha2esx"> </a></li>'),va=O('<nav class="lang-nav svelte-ha2esx"><ul class="svelte-ha2esx"><!> <!></ul></nav>');function ca(c,s){T(s,!1);const t=k(),n=()=>f(R,"$base",t),e=()=>f(H,"$lang",t);function a(r){var u;const p=((u=S.route.id)==null?void 0:u.replace(/\/(en|ko)\//,"/"))??"/";return p==="/"||p==="/ko.html"?r===D?n()+"/":n()+"/"+r+".html":n()+"/"+r+p}M();var o=va(),g=i(o);{const r=(p,u=I,y=I)=>{var h=ia(),d=i(h);b(()=>N(d,"href",a(u())));var A=i(d,!0);v(d),v(h),b(()=>{N(d,"aria-current",e()===u()?!0:void 0),q(A,y())}),$(p,h)};var l=i(g);r(l,()=>"en",()=>"EN");var m=_(l,2);r(m,()=>"ko",()=>"KO"),v(g)}v(o),$(c,o),L()}var pa=O('<header id="header" class="svelte-1iavkqb"><!> <!></header> <section class="nav-group svelte-1iavkqb"><section><!> <!></section> <!></section> <!>',1);function ua(c){const s=k(),t=()=>f(P,"$navOpening",s),n=()=>f(E,"$navOpened",s);var e=pa(),a=w(e),o=i(a);U(o,{});var g=_(o,2);ta(g),v(a),Q(a,h=>{var d;return(d=W)==null?void 0:d(h)});var l=_(a,2),m=i(l),r=i(m);U(r,{});var p=_(r,2);la(p,{}),v(m);var u=_(m,2);ca(u,{}),v(l);var y=_(l,2);sa(y),b(()=>{x(l,"-opening",t()),x(l,"-opened",n())}),$(c,e)}var da=O('<!> <main class="svelte-1sug4bv"><!></main>',1);function ya(c,s){T(s,!0);const t=k(),n=()=>f(H,"$lang",t),e=()=>f(R,"$base",t);F(()=>{G(S.route.id??""),document.documentElement.setAttribute("lang",n()),z()}),K(()=>{document.documentElement.classList.remove("loading")});var a=V(),o=w(a);{var g=l=>{var m=da(),r=w(m);ua(r);var p=_(r,2);b(()=>N(p,"data-id",(S.route.id??"").replace(/^\//,"").split("/")[1]));var u=i(p);J(u,()=>s.children??I),v(p),$(l,m)};Y(o,l=>{e()&&l(g)})}$(c,a),L()}export{ya as component,Na as universal};