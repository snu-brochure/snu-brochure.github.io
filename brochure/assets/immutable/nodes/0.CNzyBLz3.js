import{a as m,t as b,d as j,s as q}from"../chunks/disclose-version.C0T-MG5w.js";import{p as T,t as _,a as A,c as r,r as l,J as I,s as h,f as C,n as R}from"../chunks/index-client.gipOxwwM.js";import{h as M,c as w,o as V,n as z,a as P,l as E,d as F,b as J,s as K,e as Y}from"../chunks/index.tiE80S3c.js";import{s as N}from"../chunks/attributes.DH8k8htM.js";import{s as k,a as u}from"../chunks/store.CSZZ2THO.js";import"../chunks/legacy.a8nwY6Kj.js";import{t as x,a as B,i as D}from"../chunks/invertHeader.CxipMkiw.js";import{i as H}from"../chunks/lifecycle.BjEpOvV5.js";import{L as G}from"../chunks/Logo.svg.CxDwrNax.js";import{p as S}from"../chunks/client.BgPuU6PQ.js";const Q=!0,Oa=Object.freeze(Object.defineProperty({__proto__:null,prerender:Q},Symbol.toStringTag,{value:"Module"}));var W=b('<a class="logo svelte-4umpb4"><span><!></span></a>');function U(i,s){T(s,!1);const o=k(),n=()=>u(M,"$href",o);H();var a=W();_(()=>N(a,"href",n()("/")));var e=r(a),t=r(e);G(t),l(e),l(a),m(i,a),A()}var X=b('<button type="button" aria-label="Toggle nav" class="svelte-15hhz6t"><span class="svelte-15hhz6t"><i class="svelte-15hhz6t"></i></span></button>');function Z(i){const s=k(),o=()=>u(z,"$navOpened",s);var n=X();n.__click=function(...a){var e;(e=o()?w:V)==null||e.apply(this,a)},_(()=>x(n,"-opened",o())),m(i,n)}j(["click"]);var aa=b('<button aria-label="Close nav" type="button" class="nav-closer svelte-hig358"></button>');function ea(i){const s=k(),o=()=>u(P,"$navOpening",s),n=()=>u(z,"$navOpened",s);var a=aa();a.__click=function(...e){var t;(t=w)==null||t.apply(this,e)},_(()=>{x(a,"-opening",o()),x(a,"-opened",n())}),m(i,a)}j(["click"]);var ta=b('<li class="svelte-9d2wn7"><a class="svelte-9d2wn7"> </a></li>'),na=b('<nav class="svelte-9d2wn7"><ul class="svelte-9d2wn7"><!> <!> <!></ul></nav>');function sa(i,s){T(s,!1);const o=k(),n=()=>u(M,"$href",o),a=()=>u(E,"$lang",o);H();var e=na(),t=r(e);{const v=($,d=I,y=I)=>{var g=ta(),c=r(g);_(()=>N(c,"href",n()(d())));var L=r(c,!0);l(c),l(g),_(()=>{N(c,"aria-current",S.route.id==="/"+a()+d()?!0:void 0),q(L,y())}),m($,g)};var f=r(t);v(f,()=>"/visionary-path.html",()=>"SNU VISIONARY PATH");var p=h(f,2);v(p,()=>"/initiatives.html",()=>"SNU INITIATIVES");var O=h(p,2);v(O,()=>"/information.html",()=>"SNU INFORMATION"),l(t)}l(e),m(i,e),A()}var oa=b('<li class="svelte-ha2esx"><a data-sveltekit-noscroll="" class="svelte-ha2esx"> </a></li>'),ra=b('<nav class="lang-nav svelte-ha2esx"><ul class="svelte-ha2esx"><!> <!></ul></nav>');function la(i,s){T(s,!1);const o=k(),n=()=>u(J,"$base",o),a=()=>u(E,"$lang",o);function e(v){var d;const $=((d=S.route.id)==null?void 0:d.replace(/\/(en|ko)\//,"/"))??"/";return $==="/"||$==="/ko.html"?v===F?n()+"/":n()+"/"+v+".html":n()+"/"+v+$}H();var t=ra(),f=r(t);{const v=($,d=I,y=I)=>{var g=oa(),c=r(g);_(()=>N(c,"href",e(d())));var L=r(c,!0);l(c),l(g),_(()=>{N(c,"aria-current",a()===d()?!0:void 0),q(L,y())}),m($,g)};var p=r(f);v(p,()=>"en",()=>"EN");var O=h(p,2);v(O,()=>"ko",()=>"KO"),l(f)}l(t),m(i,t),A()}var ia=b('<header id="header" class="svelte-1iavkqb"><!> <!></header> <section class="nav-group svelte-1iavkqb"><section><!> <!></section> <!></section> <!>',1);function va(i){const s=k(),o=()=>u(P,"$navOpening",s),n=()=>u(z,"$navOpened",s);var a=ia(),e=C(a),t=r(e);U(t,{});var f=h(t,2);Z(f),l(e),B(e,g=>{var c;return(c=D)==null?void 0:c(g)});var p=h(e,2),O=r(p),v=r(O);U(v,{});var $=h(v,2);sa($,{}),l(O);var d=h(O,2);la(d,{}),l(p);var y=h(p,2);ea(y),_(()=>{x(p,"-opening",o()),x(p,"-opened",n())}),m(i,a)}var ca=b('<!> <main class="svelte-1sug4bv"><!></main>',1);function ka(i,s){T(s,!0);const o=k(),n=()=>u(E,"$lang",o);R(()=>{Y(S.route.id??""),document.documentElement.setAttribute("lang",n()),w()});var a=ca(),e=C(a);va(e);var t=h(e,2);_(()=>N(t,"data-id",(S.route.id??"").replace(/^\//,"").split("/")[1]));var f=r(t);K(f,()=>s.children??I),l(t),m(i,a),A()}export{ka as component,Oa as universal};