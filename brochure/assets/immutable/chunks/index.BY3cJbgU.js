import{y as v,E as y,z as m,n as A,A as L,B as c,C as d,D as l,F as _,G as w,H as T,I as E,J as I,L as O}from"./index-client.Bwf6OL1l.js";import{d as P,w as i}from"./index.BLU-fjgK.js";function x(s,e,...t){var a=s,r=A,n;v(()=>{r!==(r=e())&&(n&&(L(n),n=null),n=m(()=>r(a,...t)))},y),c&&(a=d)}function S(s,e,t,a){var r=s.__attributes??(s.__attributes={});c&&(r[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||r[e]!==(r[e]=t)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[O]=t),t==null?s.removeAttribute(e):typeof t!="string"&&p(s).includes(e)?s[e]=t:s.setAttribute(e,t))}function D(s,e,t){var a=E,r=I;l(null),_(null);try{(o.has(s.nodeName)||customElements.get(s.tagName.toLowerCase())?p(s).includes(e):t&&typeof t=="object")?s[e]=t:S(s,e,t==null?t:String(t))}finally{l(a),_(r)}}var o=new Map;function p(s){var e=o.get(s.nodeName);if(e)return e;o.set(s.nodeName,e=[]);for(var t,a=s,r=Element.prototype;r!==a;){t=T(a);for(var n in t)t[n].set&&e.push(n);a=w(a)}return e}function G(s,e){var t=s.__className,a=B(e);c&&s.className===a?s.__className=a:(t!==a||c&&s.className!==a)&&(e==null?s.removeAttribute("class"):s.className=a,s.__className=a)}function B(s){return s??""}function M(s,e,t){if(t){if(s.classList.contains(e))return;s.classList.add(e)}else{if(!s.classList.contains(e))return;s.classList.remove(e)}}const f="en",u=i(""),g=i(f),j=P([u,g],([s,e])=>t=>t==="/"?e===f?s+"/":s+"/"+e+".html":s+"/"+e+t),q=s=>{const e=s.replace(/^\//,"").split("/");u.set(C(e)),g.set(F(e))},C=s=>{const e=s.length;if(e<=1)return".";let t="";for(let a=0;a<e-1;a++)t+="../";return t.replace(/\/$/,"")},F=s=>s[0].replace(/\.html$/,"")||f,h=i(!1),N=i(!1);function z(){h.set(!0),setTimeout(()=>{N.set(!0)})}function H(){N.set(!1),setTimeout(()=>{h.set(!1)},200)}function J(s){const e=s.querySelectorAll("img"),t=Array.from(e).map(a=>new Promise((r,n)=>{a.complete?r():(a.onload=()=>{r()},a.onerror=n)}));return new Promise((a,r)=>{Promise.all(t).then(a).catch(r)})}export{x as a,G as b,u as c,H as d,h as e,f,q as g,j as h,D as i,g as l,N as n,z as o,S as s,M as t,J as w};