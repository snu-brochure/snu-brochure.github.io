import{y,E as d,z as m,n as L,A as w,B as r,C as A,D as _,F as p,G as T,L as k,H as I,I as E,J as S}from"./index-client.CwCldB1f.js";import{d as c,w as o}from"./index.BV3p4jmb.js";function F(s,e,...t){var a=s,n=L,i;y(()=>{n!==(n=e())&&(i&&(w(i),i=null),i=m(()=>n(a,...t)))},d),r&&(a=A)}function C(s,e,t,a){var n=s.__attributes??(s.__attributes={});r&&(n[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||n[e]!==(n[e]=t)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[k]=t),t==null?s.removeAttribute(e):typeof t!="string"&&g(s).includes(e)?s[e]=t:s.setAttribute(e,t))}function j(s,e,t){var a=E,n=S;_(null),p(null);try{(l.has(s.nodeName)||customElements.get(s.tagName.toLowerCase())?g(s).includes(e):t&&typeof t=="object")?s[e]=t:C(s,e,t==null?t:String(t))}finally{_(a),p(n)}}var l=new Map;function g(s){var e=l.get(s.nodeName);if(e)return e;l.set(s.nodeName,e=[]);for(var t,a=s,n=Element.prototype;n!==a;){t=I(a);for(var i in t)t[i].set&&e.push(i);a=T(a)}return e}function q(s,e){var t=s.__className,a=O(e);r&&s.className===a?s.__className=a:(t!==a||r&&s.className!==a)&&(e==null?s.removeAttribute("class"):s.className=a,s.__className=a)}function O(s){return s??""}function G(s,e,t){if(t){if(s.classList.contains(e))return;s.classList.add(e)}else{if(!s.classList.contains(e))return;s.classList.remove(e)}}const u="en",H=o(0),v=o(""),f=o(u),M=c([v,f],([s,e])=>t=>t==="/"?s+"/"+e+"/":s+"/"+e+t+"/"),U=o(""),P=o(""),z=o("/intro/symbol.png"),J=o(1e3),K=o(1e3),R=c([f],([s])=>s==="ko"?"서울대학교":"Seoul National University"),W=c([P,R],([s,e])=>(s?s+" — ":"")+e),Y=c([f],([s])=>s==="ko"?"배움 다음을 생각하고 가능성 너머를 열어갑니다.":"Thinking beyond learning, opening new possibilities."),Q=s=>{const e=s.replace(/^\//,"").split("/");v.set(b(e)),f.set(x(e))},b=s=>{const e=s.length;if(e<=1)return s[0]===""?".":"..";let t="../";for(let a=0;a<e-1;a++)t+="../";return t.replace(/\/$/,"")},x=s=>s[0]||u,N=o(!1),h=o(!1);function V(s=!1){N.set(!0),setTimeout(()=>{h.set(!0)},s?100:void 0)}function X(){h.set(!1),setTimeout(()=>{N.set(!1)},200)}function Z(s){const e=s.querySelectorAll("img"),t=Array.from(e).map(a=>new Promise((n,i)=>{a.complete?n():(a.onload=()=>{n()},a.onerror=i)}));return new Promise((a,n)=>{Promise.all(t).then(a).catch(n)})}const $=o(!1);export{F as a,q as b,v as c,$ as d,X as e,h as f,N as g,M as h,U as i,W as j,Y as k,f as l,R as m,H as n,V as o,P as p,z as q,J as r,C as s,G as t,K as u,Q as v,Z as w,j as x};
