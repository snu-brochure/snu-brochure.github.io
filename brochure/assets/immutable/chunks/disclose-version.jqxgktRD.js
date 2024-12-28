import{aj as N,a4 as L,ak as k,X as E,G as B,F,ag as Y,Z as j,al as w,am as S,an as G,ao as U,h,m as d,g as A,d as C,ap as M,aq as x,ar as X,as as O,i as b,at as Z,au as z,av as J,aw as K,ax as Q,ay as ee,k as re,p as te,a as ae,o as ne}from"./index-client.Cj3G1rKd.js";const ie=["touchstart","touchmove"];function se(e){return ie.includes(e)}function oe(e){var r=k,t=E;N(null),L(null);try{return e()}finally{N(r),L(t)}}const V=new Set,D=new Set;function ue(e,r,t,s){function n(a){if(s.capture||y.call(r,a),!a.cancelBubble)return oe(()=>t.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?F(()=>{r.addEventListener(e,n,s)}):r.addEventListener(e,n,s),n}function ce(e,r,t,s,n){var a={capture:s,passive:n},i=ue(e,r,t,a);(r===document.body||r===window||r===document)&&B(()=>{r.removeEventListener(e,i,a)})}function _e(e){for(var r=0;r<e.length;r++)V.add(e[r]);for(var t of D)t(e)}function y(e){var P;var r=this,t=r.ownerDocument,s=e.type,n=((P=e.composedPath)==null?void 0:P.call(e))||[],a=n[0]||e.target,i=0,l=e.__root;if(l){var f=n.indexOf(l);if(f!==-1&&(r===document||r===window)){e.__root=r;return}var g=n.indexOf(r);if(g===-1)return;f<=g&&(i=f)}if(a=n[i]||e.target,a!==r){Y(e,"currentTarget",{configurable:!0,get(){return a||t}});var R=k,c=E;N(null),L(null);try{for(var o,u=[];a!==null;){var v=a.assignedSlot||a.parentNode||a.host||null;try{var p=a["__"+s];if(p!==void 0&&!a.disabled)if(j(p)){var[H,...q]=p;H.apply(a,[e,...q])}else p.call(a,e)}catch(T){o?u.push(T):o=T}if(e.cancelBubble||v===r||v===null)break;a=v}if(o){for(let T of u)queueMicrotask(()=>{throw T});throw o}}finally{e.__root=r,delete e.currentTarget,N(R),L(c)}}}function W(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function _(e,r){var t=E;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function ve(e,r){var t=(r&G)!==0,s=(r&U)!==0,n,a=!e.startsWith("<!>");return()=>{if(h)return _(d,null),d;n===void 0&&(n=W(a?e:"<!>"+e),t||(n=w(n)));var i=s?document.importNode(n,!0):n.cloneNode(!0);if(t){var l=w(i),f=i.lastChild;_(l,f)}else _(i,i);return i}}function he(e,r,t="svg"){var s=!e.startsWith("<!>"),n=`<${t}>${s?e:"<!>"+e}</${t}>`,a;return()=>{if(h)return _(d,null),d;if(!a){var i=W(n),l=w(i);a=w(l)}var f=a.cloneNode(!0);return _(f,f),f}}function pe(e=""){if(!h){var r=S(e+"");return _(r,r),r}var t=d;return t.nodeType!==3&&(t.before(t=S()),A(t)),_(t,t),t}function ge(){if(h)return _(d,null),d;var e=document.createDocumentFragment(),r=document.createComment(""),t=S();return e.append(r,t),_(r,t),e}function me(e,r){if(h){E.nodes_end=d,C();return}e!==null&&e.before(r)}function ye(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function fe(e,r){return $(e,r)}function we(e,r){M(),r.intro=r.intro??!1;const t=r.target,s=h,n=d;try{for(var a=w(t);a&&(a.nodeType!==8||a.data!==x);)a=X(a);if(!a)throw O;b(!0),A(a),C();const i=$(e,{...r,anchor:a});if(d===null||d.nodeType!==8||d.data!==Z)throw z(),O;return b(!1),i}catch(i){if(i===O)return r.recover===!1&&J(),M(),K(t),b(!1),fe(e,r);throw i}finally{b(s),A(n)}}const m=new Map;function $(e,{target:r,anchor:t,props:s={},events:n,context:a,intro:i=!0}){M();var l=new Set,f=c=>{for(var o=0;o<c.length;o++){var u=c[o];if(!l.has(u)){l.add(u);var v=se(u);r.addEventListener(u,y,{passive:v});var p=m.get(u);p===void 0?(document.addEventListener(u,y,{passive:v}),m.set(u,1)):m.set(u,p+1)}}};f(Q(V)),D.add(f);var g=void 0,R=ee(()=>{var c=t??r.appendChild(S());return re(()=>{if(a){te({});var o=ne;o.c=a}n&&(s.$$events=n),h&&_(c,null),g=e(c,s)||{},h&&(E.nodes_end=d),a&&ae()}),()=>{var v;for(var o of l){r.removeEventListener(o,y);var u=m.get(o);--u===0?(document.removeEventListener(o,y),m.delete(o)):m.set(o,u)}D.delete(f),c!==t&&((v=c.parentNode)==null||v.removeChild(c))}});return I.set(g,R),g}let I=new WeakMap;function Ee(e,r){const t=I.get(e);return t?(I.delete(e),t(r)):Promise.resolve()}const de="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(de);export{me as a,pe as b,ge as c,_e as d,_ as e,W as f,ce as g,we as h,fe as m,he as n,ye as s,ve as t,Ee as u};
