import{w as V,x as O,y as A,z as k,A as C,B as I,C as E,D as Y,H as j,E as B,F as T,G as g,I as D,J as $,K as v,L as q,M as z,N as F,O as G,P as J,Q as K,R as Q,S as W,p as U,T as b,b as X,j as Z}from"./runtime.BGQiY3Km.js";import{c as x}from"./disclose-version.Du2PjQob.js";const rr=["touchstart","touchmove"];function er(r){return rr.includes(r)}const L=new Set,S=new Set;function sr(r){for(var e=0;e<r.length;e++)L.add(r[e]);for(var a of S)a(r)}function m(r){var R;var e=this,a=e.ownerDocument,c=r.type,i=((R=r.composedPath)==null?void 0:R.call(r))||[],t=i[0]||r.target,d=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var h=i.indexOf(e);if(h===-1)return;u<=h&&(d=u)}if(t=i[d]||r.target,t!==e){V(r,"currentTarget",{configurable:!0,get(){return t||a}});var w=C,o=I;O(null),A(null);try{for(var n,s=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!==void 0&&!t.disabled)if(k(l)){var[M,...P]=l;M.apply(t,[r,...P])}else l.call(t,r)}catch(y){n?s.push(y):n=y}if(r.cancelBubble||f===e||f===null)break;t=f}if(n){for(let y of s)queueMicrotask(()=>{throw y});throw n}}finally{r.__root=e,delete r.currentTarget,O(w),A(o)}}}function or(r,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a==null?"":a+"")}function tr(r,e){return H(r,e)}function ir(r,e){E(),e.intro=e.intro??!1;const a=e.target,c=b,i=v;try{for(var t=Y(a);t&&(t.nodeType!==8||t.data!==j);)t=B(t);if(!t)throw T;g(!0),D(t),$();const d=H(r,{...e,anchor:t});if(v===null||v.nodeType!==8||v.data!==q)throw z(),T;return g(!1),d}catch(d){if(d===T)return e.recover===!1&&F(),E(),G(a),g(!1),tr(r,e);throw d}finally{g(c),D(i)}}const p=new Map;function H(r,{target:e,anchor:a,props:c={},events:i,context:t,intro:d=!0}){E();var _=new Set,u=o=>{for(var n=0;n<o.length;n++){var s=o[n];if(!_.has(s)){_.add(s);var f=er(s);e.addEventListener(s,m,{passive:f});var l=p.get(s);l===void 0?(document.addEventListener(s,m,{passive:f}),p.set(s,1)):p.set(s,l+1)}}};u(J(L)),S.add(u);var h=void 0,w=K(()=>{var o=a??e.appendChild(Q());return W(()=>{if(t){U({});var n=Z;n.c=t}i&&(c.$$events=i),b&&x(o,null),h=r(o,c)||{},b&&(I.nodes_end=v),t&&X()}),()=>{var f;for(var n of _){e.removeEventListener(n,m);var s=p.get(n);--s===0?(document.removeEventListener(n,m),p.delete(n)):p.set(n,s)}S.delete(u),o!==a&&((f=o.parentNode)==null||f.removeChild(o))}});return N.set(h,w),h}let N=new WeakMap;function fr(r,e){const a=N.get(r);return a?(N.delete(r),a(e)):Promise.resolve()}export{sr as d,ir as h,tr as m,or as s,fr as u};