import{a as m,t as b,d as H,s as M}from"../chunks/disclose-version.BMaEm1xm.js";import{p as I,t as h,a as S,c as l,r as i,v as L,s as g,f as P,D as z}from"../chunks/utils.zV2y1udm.js";import{h as R,c as w,o as D,n as A,a as V,l as E,d as F,b as K,s as Y,e as q}from"../chunks/index.DPdVdEWT.js";import{s as N}from"../chunks/attributes.CVi4sOyV.js";import{s as k,a as u}from"../chunks/store.DgM5G1ic.js";import"../chunks/legacy.DzQIlM-Y.js";import{i as U,p as x}from"../chunks/client.CuVem1eO.js";import{L as B}from"../chunks/Logo.svg.4UTgPXBI.js";function j(s,a,n){if(n){if(s.classList.contains(a))return;s.classList.add(a)}else{if(!s.classList.contains(a))return;s.classList.remove(a)}}const G=!0,ma=Object.freeze(Object.defineProperty({__proto__:null,prerender:G},Symbol.toStringTag,{value:"Module"}));var J=b('<a class="logo svelte-1ms058c"><span><!></span></a>');function C(s,a){I(a,!1);const n=k(),o=()=>u(R,"$href",n);U();var e=J();h(()=>N(e,"href",o()("/")));var t=l(e),r=l(t);B(r),i(t),i(e),m(s,e),S()}var Q=b('<button type="button" aria-label="Toggle nav" class="svelte-7wu631"><span class="svelte-7wu631"><i class="svelte-7wu631"></i></span></button>');function W(s){const a=k(),n=()=>u(A,"$navOpened",a);var o=Q();o.__click=function(...e){var t;(t=n()?w:D)==null||t.apply(this,e)},h(()=>j(o,"-opened",n())),m(s,o)}H(["click"]);var X=b('<button aria-label="Close nav" type="button" class="nav-closer svelte-1c7d1w6"></button>');function Z(s){const a=k(),n=()=>u(V,"$navOpening",a),o=()=>u(A,"$navOpened",a);var e=X();e.__click=function(...t){var r;(r=w)==null||r.apply(this,t)},h(()=>{j(e,"-opening",n()),j(e,"-opened",o())}),m(s,e)}H(["click"]);var aa=b('<li class="svelte-1vtb2de"><a class="svelte-1vtb2de"> </a></li>'),ea=b('<nav class="svelte-1vtb2de"><ul class="svelte-1vtb2de"><!> <!> <!></ul></nav>');function ta(s,a){I(a,!1);const n=k(),o=()=>u(R,"$href",n),e=()=>u(E,"$lang",n);U();var t=ea(),r=l(t);{const v=(d,p=L,y=L)=>{var O=aa(),$=l(O);h(()=>N($,"href",o()(p())));var T=l($,!0);i($),i(O),h(()=>{N($,"aria-current",x.route.id==="/"+e()+p()?!0:void 0),M(T,y())}),m(d,O)};var f=l(r);v(f,()=>"/visionary-path.html",()=>"SNU VISIONARY PATH");var c=g(f,2);v(c,()=>"/initiatives.html",()=>"SNU INITIATIVES");var _=g(c,2);v(_,()=>"/information.html",()=>"SNU INFORMATION"),i(r)}i(t),m(s,t),S()}var sa=b('<li class="svelte-1kjxafd"><a data-sveltekit-noscroll="" class="svelte-1kjxafd"> </a></li>'),na=b('<nav class="svelte-1kjxafd"><ul class="svelte-1kjxafd"><!> <!></ul></nav>');function ra(s,a){I(a,!1);const n=k(),o=()=>u(K,"$base",n),e=()=>u(E,"$lang",n);function t(v){var p;const d=((p=x.route.id)==null?void 0:p.replace(/\/(en|ko)\//,"/"))??"/";return d==="/"||d==="/ko.html"?v===F?o()+"/":o()+"/"+v+".html":o()+"/"+v+d}U();var r=na(),f=l(r);{const v=(d,p=L,y=L)=>{var O=sa(),$=l(O);h(()=>N($,"href",t(p())));var T=l($,!0);i($),i(O),h(()=>{N($,"aria-current",e()===p()?!0:void 0),M(T,y())}),m(d,O)};var c=l(f);v(c,()=>"en",()=>"EN");var _=g(c,2);v(_,()=>"ko",()=>"KO"),i(f)}i(r),m(s,r),S()}var oa=b('<header class="svelte-1wjeyl1"><!> <!></header> <section class="nav-group svelte-1wjeyl1"><section><!> <!></section> <!></section> <!>',1);function la(s){const a=k(),n=()=>u(V,"$navOpening",a),o=()=>u(A,"$navOpened",a);var e=oa(),t=P(e),r=l(t);C(r,{});var f=g(r,2);W(f),i(t);var c=g(t,2),_=l(c),v=l(_);C(v,{});var d=g(v,2);ta(d,{}),i(_);var p=g(_,2);ra(p,{}),i(c);var y=g(c,2);Z(y),h(()=>{j(c,"-opening",n()),j(c,"-opened",o())}),m(s,e)}var ia=b('<!> <main class="svelte-bk7va9"><!></main>',1);function ha(s,a){I(a,!0);const n=k(),o=()=>u(E,"$lang",n);z(()=>{q(x.route.id??""),document.documentElement.setAttribute("lang",o()),w()});var e=ia(),t=P(e);la(t);var r=g(t,2);h(()=>N(r,"data-id",(x.route.id??"").replace(/^\//,"").split("/")[1]));var f=l(r);Y(f,()=>a.children??L),i(r),m(s,e),S()}export{ha as component,ma as universal};
