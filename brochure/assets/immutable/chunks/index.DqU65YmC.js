import{e as qe,f as Be,d as Se,c as z,g as le,a as p,t as y}from"./disclose-version.CsTQ21i_.js";import"./legacy.9lUsYEDV.js";import{d as Ye,h as ye,b as we,k as ze,m as Ie,ao as Ge,ar as Ke,ap as Ze,g as xe,ai as Xe,N as Je,p as F,D as Qe,x as b,y as U,f as L,a as V,af as G,aw as Ne,c as l,v as ce,r as i,s as _,t as A,K as Te,ax as C}from"./utils.B2AQxnli.js";import{M as We}from"./Footer.WELfRLh8.js";import{i as R}from"./if.CdJ1yFd-.js";import{a as K,s as $e,t as oe,b as Ee}from"./invertHeader.BstUqTEm.js";import{s as k}from"./attributes.D7c_3hwg.js";import{p as E,b as et,a as ne}from"./props.BmDd8yo2.js";import{s as tt,a as ie}from"./store.611ht5y3.js";import{A as Y,N as at}from"./NextPage.CRRcVbC-.js";import{s as de,l as st,h as lt,b as it}from"./index.BCoG1uBV.js";import{o as vt}from"./index-client.Cj8W6vkd.js";function rt(t,e,a,r,s){var h=t,n="",v;Ye(()=>{if(n===(n=e()??"")){ye&&we();return}v!==void 0&&(Je(v),v=void 0),n!==""&&(v=ze(()=>{if(ye){Ie.data;for(var o=we(),g=o;o!==null&&(o.nodeType!==8||o.data!=="");)g=o,o=Ge(o);if(o===null)throw Ke(),Ze;qe(Ie,g),h=xe(o);return}var u=n+"",q=Be(u);qe(Xe(q),q.lastChild),h.before(q)}))})}function ot(t,e,a,r){var s=t.__styles??(t.__styles={});s[e]!==a&&(s[e]=a,a==null?t.style.removeProperty(e):t.style.setProperty(e,a,""))}function ve(t){function e(a){t.contains(a.target)||t.dispatchEvent(new CustomEvent("clickoutside"))}return document.addEventListener("mouseup",e,{passive:!0}),{destroy(){document.removeEventListener("mouseup",e)}}}var nt=y('<button type="button" aria-label="Close" class="svelte-1hy4lvm"></button>'),ct=y('<div><div class="outer svelte-1hy4lvm"><div class="inner svelte-1hy4lvm"><div aria-modal="true" class="svelte-1hy4lvm"><!></div></div></div> <!></div>');function dt(t,e){F(e,!0);let a=E(e,"showModal",15),r=E(e,"closeButton",3,!1),s=E(e,"className",3,""),h=E(e,"disabled",11,!1);const n=255;let v=G(void 0),o=G(!1);function g(){var f,S,I,w;if(!a())return;const d=(f=b(v))==null?void 0:f.querySelector(".ck-body-wrapper");d&&((S=document.querySelector("body"))==null||S.append(d)),(I=b(v))==null||I.remove(),a(!1),(w=e.oncloseend)==null||w.call(e)}const u=()=>new Promise(d=>{var f;h()||((f=e.onclosestart)==null||f.call(e),U(o,!1),setTimeout(()=>{g(),d()},n*2))});async function q(){const d=document.querySelectorAll(".dialog-wrap.-opened");d.length>0&&d[d.length-1]===b(v)&&await(u==null?void 0:u())}async function O(d){d.target.querySelector(".ck-focused")||await q()}async function T(d){if(!b(o))return;const f=d.target;!f.closest(".dialog-root")&&(f.tagName==="DIV"&&f.classList.contains("objet-root")||f.tagName==="UL"&&f.classList.contains("sortable-root"))&&await q()}async function x(d){b(o)&&d.key==="Escape"&&(d.preventDefault(),await q())}Qe(()=>{var d;b(v)&&a()&&((document.getElementById("app")??document.body).append(b(v)),setTimeout(()=>{U(o,!0)},10),(d=e.onopen)==null||d.call(e,{close:u}))});var D=z();le("keyup",Ne,x),le("click",Ne,T);var X=L(D);{var H=d=>{var f=ct(),S=l(f),I=l(S),w=l(I),M=l(w);de(M,()=>e.children??ce,()=>({close:u})),i(w),K(w,N=>ve==null?void 0:ve(N)),i(I),i(S);var j=_(S,2);{var P=N=>{var B=nt();B.__click=u,p(N,B)};R(j,N=>{r()&&N(P)})}i(f),et(f,N=>U(v,N),()=>b(v)),A(()=>{$e(f,`dialog-wrap ${s()??""} svelte-1hy4lvm`),oe(f,"-opened",b(o))}),le("clickoutside",w,O),p(d,f)};R(X,d=>{a()&&d(H)})}p(t,D),V()}Se(["click"]);var ut=y('<div class="dialog-root svelte-z1dhf6"><!></div>');function ft(t,e){F(e,!0);var a=ut(),r=l(a);de(r,()=>e.children??ce),i(a),p(t,a),V()}async function mt(t,e,a){let r="",s="";if(/^https:\/\/vimeo\.com\/[^/]+/i.test(t))r="vimeo",s=`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(t)}&byline=false&title=false&loop=true&playsinline=true`,a?s+="&background=true":e&&(s+="&autoplay=true");else if(/^https:\/\/www\.youtube\.com\/[^/]+/i.test(t)||/^https:\/\/youtu\.be\/[^/]+$/i.test(t))r="youtube",s=`https://www.youtube.com/oembed?url=${encodeURIComponent(t)}`;else if(/^https:\/\/www\.soundcloud\.com\/.+/i.test(t)||/^https:\/\/soundcloud\.com\/.+$/i.test(t))r="soundcloud",s=`https://soundcloud.com/oembed?url=${encodeURIComponent(t)}`;else return;const h=await fetch(s);if(!h.ok)return;const n=await h.json();if(r==="vimeo"){const v=n.thumbnail_url.split("_");v.length>0&&(v[v.length-1]="1280"),n.thumbnail_url=v.join("_")}else if(r==="youtube"){let v="?modestbranding=1&rel=0&showinfo=0&loop=1&playsinline=1";a?v+="&controls=0&autoplay=1&mute=1":e&&(v+="&autoplay=1"),n.html=n.html.replace(/\?feature=oembed/,v)}else r==="soundcloud"&&(n.height=162,n.html=n.html.replace(/visual=true/,"visual=false").replace(/height="400"/,'height="162"'));return n}function ht(t,e){F(e,!0);let a=E(e,"autoplay",3,!1),r=E(e,"background",3,!1),s=G(ne({title:"",provider_name:"",html:"",width:0,height:0,thumbnail_url:"",thumbnail_width:0,thumbnail_height:0}));vt(async()=>{const o=await mt(e.url,a(),r());o&&U(s,ne(o))});var h=z(),n=L(h);{var v=o=>{var g=z(),u=L(g);de(u,()=>e.children??ce,()=>({oembed:b(s)})),p(o,g)};R(n,o=>{b(s).html&&o(v)})}p(t,h),V()}function gt(t,e){const a=Te(()=>e.value);var r=z(),s=L(r);rt(s,()=>b(a)),p(t,r)}let Z;function _t(){Z||(Z=new IntersectionObserver(t=>{t.forEach(e=>{const a=e.isIntersecting?"enterviewport":"exitviewport";e.target.dispatchEvent(new CustomEvent(a))})}))}function pt(t){return _t(),Z.observe(t),{destroy(){Z.unobserve(t)}}}function re(t){function e(){const a=t.parentElement;if(!a)return;const r=t.getBoundingClientRect(),s=a.getBoundingClientRect();r.width<=0||r.height<=0||s.width<0||s.height<0||r.width/r.height>s.width/s.height&&t.classList.add("-wider")}return t.addEventListener("enterViewport",e),pt(t),{destroy(){t.removeEventListener("enterViewport",e)}}}var bt=y('<div class="iframe-view"><!></div>');function qt(t,e){F(e,!0);let a=E(e,"autoplay",3,!1),r=E(e,"background",3,!1),s=E(e,"aspectRatioLimit",19,()=>({width:16,height:9}));function h(n,v){if(!(typeof n!="number"||typeof v!="number"))return s().width>0&&s().height>0&&n/v<s().width/s().height&&(n=s().width,v=s().height),n+" / "+v}ht(t,{get url(){return e.url},get autoplay(){return a()},get background(){return r()},children:(v,o)=>{let g=()=>o==null?void 0:o().oembed;var u=bt();const q=Te(()=>h(g().width,g().height));A(()=>ot(u,"aspect-ratio",b(q)));var O=l(u);gt(O,{get value(){return g().html}}),i(u),K(u,T=>re==null?void 0:re(T)),A(()=>{oe(u,"-background",r()),oe(u,"-relative",g().width==="100%")}),p(v,u)},$$slots:{default:!0}}),V()}var yt=y('<li class="svelte-10v53vq">숫자로 보는 서울대</li> <li class="svelte-10v53vq">역사</li> <li class="svelte-10v53vq">비전과 미션</li> <li class="svelte-10v53vq">핵심 프로젝트</li>',1),wt=y('<li class="svelte-10v53vq">FACTS &amp; FIGURES</li> <li class="svelte-10v53vq">HISTORY</li> <li class="svelte-10v53vq">VISION &amp; MISSION</li> <li class="svelte-10v53vq">ACTIONS FOR THE FUTURE</li>',1),It=y('<li class="svelte-10v53vq">교육</li> <li class="svelte-10v53vq">연구</li> <li class="svelte-10v53vq">사회공헌</li> <li class="svelte-10v53vq">창업</li> <li class="svelte-10v53vq">국제교류</li>',1),Nt=y('<li class="svelte-10v53vq">EDUCATION</li> <li class="svelte-10v53vq">RESEARCH</li> <li class="svelte-10v53vq">SOCIAL CONTRIBUTIONS</li> <li class="svelte-10v53vq">STARTUP</li> <li class="svelte-10v53vq">INTERNATIONAL EXCHANGE</li>',1),Et=y('<li class="svelte-10v53vq">캠퍼스</li> <li class="svelte-10v53vq">교육기관</li> <li class="svelte-10v53vq">학생지원시설</li> <li class="svelte-10v53vq">소통 매체</li>',1),St=y('<li class="svelte-10v53vq">MULTI CAMPUS</li> <li class="svelte-10v53vq">COLLAGE &amp; DEPARTMENT</li> <li class="svelte-10v53vq">STUDENT SUPPORT FACILIRES</li> <li class="svelte-10v53vq">CONTACT</li>',1),Tt=(t,e)=>{t.preventDefault(),t.stopPropagation(),U(e,!0)},kt=y('<div class="container"><!></div>'),At=y('<ul class="menus svelte-10v53vq"><li class="svelte-10v53vq"><a class="visionary-path svelte-10v53vq"><div class="svelte-10v53vq"><div class="title svelte-10v53vq">SNU VISIONARY PATH</div> <div class="go svelte-10v53vq"><ul class="svelte-10v53vq"><!></ul> <span class="svelte-10v53vq"><!></span></div></div> <figure class="svelte-10v53vq"><img alt="SNU VISIONARY PATH" class="svelte-10v53vq"></figure></a></li> <li class="svelte-10v53vq"><a class="initiatives svelte-10v53vq"><div class="svelte-10v53vq"><div class="title svelte-10v53vq">SNU INITIATIVES</div> <div class="go svelte-10v53vq"><ul class="svelte-10v53vq"><!></ul> <span class="svelte-10v53vq"><!></span></div></div> <figure class="svelte-10v53vq"><img alt="SNU INITIATIVES" class="svelte-10v53vq"></figure></a></li> <li class="svelte-10v53vq"><a class="information svelte-10v53vq"><div class="svelte-10v53vq"><div class="title svelte-10v53vq">SNU INFORMATION</div> <div class="go svelte-10v53vq"><ul class="svelte-10v53vq"><!></ul> <span class="svelte-10v53vq"><!></span></div></div> <figure class="svelte-10v53vq"><img alt="SNU INFORMATION" class="svelte-10v53vq"></figure></a></li> <li class="svelte-10v53vq"><a href="https://youtu.be/LcZMk_73fzA" target="_blank" class="official-video svelte-10v53vq"><div class="svelte-10v53vq"><div class="title svelte-10v53vq">SNU OFFICIAL VIDEO</div> <div class="go svelte-10v53vq"><span class="svelte-10v53vq"><!></span></div></div> <figure class="svelte-10v53vq"><img alt="SNU OFFICIAL VIDEO" class="svelte-10v53vq"></figure></a></li></ul> <!>',1);function Rt(t,e){F(e,!0);const a=tt(),r=()=>ie(lt,"$href",a),s=()=>ie(st,"$lang",a),h=()=>ie(it,"$base",a);let n=G(!1);var v=At(),o=L(v),g=l(o),u=l(g);A(()=>k(u,"href",r()("/visionary-path.html")));var q=l(u),O=_(l(q),2),T=l(O),x=l(T);{var D=c=>{var m=yt();C(6),p(c,m)},X=c=>{var m=wt();C(6),p(c,m)};R(x,c=>{s()==="ko"?c(D):c(X,!1)})}i(T);var H=_(T,2),d=l(H);Y(d),i(H),i(O),i(q);var f=_(q,2),S=l(f);i(f),i(u),i(g),K(g,c=>{var m;return(m=Ee)==null?void 0:m(c)});var I=_(g,2),w=l(I);A(()=>k(w,"href",r()("/initiatives.html")));var M=l(w),j=_(l(M),2),P=l(j),N=l(P);{var B=c=>{var m=It();C(8),p(c,m)},ke=c=>{var m=Nt();C(8),p(c,m)};R(N,c=>{s()==="ko"?c(B):c(ke,!1)})}i(P);var ue=_(P,2),Ae=l(ue);Y(Ae),i(ue),i(j),i(M);var fe=_(M,2),Re=l(fe);i(fe),i(w),i(I);var J=_(I,2),Q=l(J);A(()=>k(Q,"href",r()("/information.html")));var W=l(Q),me=_(l(W),2),$=l(me),Oe=l($);{var Ce=c=>{var m=Et();C(6),p(c,m)},Ue=c=>{var m=St();C(6),p(c,m)};R(Oe,c=>{s()==="ko"?c(Ce):c(Ue,!1)})}i($);var he=_($,2),Le=l(he);Y(Le),i(he),i(me),i(W);var ge=_(W,2),Me=l(ge);i(ge),i(Q),i(J);var ee=_(J,2),te=l(ee);te.__click=[Tt,n];var ae=l(te),_e=_(l(ae),2),pe=l(_e),Pe=l(pe);Y(Pe),i(pe),i(_e),i(ae);var be=_(ae,2),Fe=l(be);i(be),i(te),i(ee),K(ee,c=>{var m;return(m=Ee)==null?void 0:m(c)}),i(o);var Ve=_(o,2);{var De=c=>{dt(c,{get showModal(){return b(n)},set showModal(m){U(n,ne(m))},children:(m,Ct)=>{var se=kt(),He=l(se);ft(He,{children:(je,Ut)=>{qt(je,{url:"https://youtu.be/LcZMk_73fzA",autoplay:!0})},$$slots:{default:!0}}),i(se),p(m,se)},$$slots:{default:!0}})};R(Ve,c=>{b(n)&&c(De)})}A(()=>{k(S,"src",h()+"/home/visionary-path/bg.jpg"),k(Re,"src",h()+"/home/initiatives/bg.jpg"),k(Me,"src",h()+"/home/information/bg.jpg"),k(Fe,"src",h()+"/home/official-video/bg.jpg")}),p(t,v),V()}Se(["click"]);var Ot=y("<!> <!>",1);function Kt(t){var e=Ot(),a=L(e);We(a,{children:(s,h)=>{Rt(s,{})},$$slots:{default:!0}});var r=_(a,2);at(r,{path:"/visionary-path.html",label:"SNU VISIONARY PATH"}),p(t,e)}export{Kt as P};
