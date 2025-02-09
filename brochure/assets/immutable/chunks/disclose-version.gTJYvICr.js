import{a0 as V,D as S,F as R,I as q,J as N,q as j,B as c,ag as x,T as z,ak as b,y as G,al as J,am as F,an as M,Z as m,Y as L,C as u,ao as E,ap as Z,aq as K,V as H,ar as O,as as D,at as Q,au as X,av as ee,aw as re,ax as te,ay as ae,z as ne,p as ie,a as oe,l as se}from"./index-client.CwCldB1f.js";const ue=["touchstart","touchmove"];function fe(e){return ue.includes(e)}function pe(e,r,t,i=!0){i&&t();for(var n of r)e.addEventListener(n,t);V(()=>{for(var a of r)e.removeEventListener(a,t)})}function de(e){var r=q,t=N;S(null),R(null);try{return e()}finally{S(r),R(t)}}const W=new Set,I=new Set;function ye(e){if(!c)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const r=e.__e;r!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(r)}))}function le(e,r,t,i){function n(a){if(i.capture||T.call(r,a),!a.cancelBubble)return de(()=>t.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?j(()=>{r.addEventListener(e,n,i)}):r.addEventListener(e,n,i),n}function ge(e,r,t,i,n){var a={capture:i,passive:n},o=le(e,r,t,a);(r===document.body||r===window||r===document)&&V(()=>{r.removeEventListener(e,o,a)})}function we(e){for(var r=0;r<e.length;r++)W.add(e[r]);for(var t of I)t(e)}function T(e){var P;var r=this,t=r.ownerDocument,i=e.type,n=((P=e.composedPath)==null?void 0:P.call(e))||[],a=n[0]||e.target,o=0,_=e.__root;if(_){var d=n.indexOf(_);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var g=n.indexOf(r);if(g===-1)return;d<=g&&(o=d)}if(a=n[o]||e.target,a!==r){x(e,"currentTarget",{configurable:!0,get(){return a||t}});var C=q,v=N;S(null),R(null);try{for(var s,f=[];a!==null;){var p=a.assignedSlot||a.parentNode||a.host||null;try{var y=a["__"+i];if(y!==void 0&&!a.disabled)if(z(y)){var[Y,...U]=y;Y.apply(a,[e,...U])}else y.call(a,e)}catch(A){s?f.push(A):s=A}if(e.cancelBubble||p===r||p===null)break;a=p}if(s){for(let A of f)queueMicrotask(()=>{throw A});throw s}}finally{e.__root=r,delete e.currentTarget,S(C),R(v)}}}let l;function ce(){l=void 0}function me(e){let r=null,t=c;var i;if(c){for(r=u,l===void 0&&(l=E(document.head));l!==null&&(l.nodeType!==8||l.data!==F);)l=M(l);l===null?m(!1):l=L(M(l))}c||(i=document.head.appendChild(b()));try{G(()=>e(i),J)}finally{t&&(m(!0),l=u,L(r))}}function $(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function h(e,r){var t=N;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function Ee(e,r){var t=(r&Z)!==0,i=(r&K)!==0,n,a=!e.startsWith("<!>");return()=>{if(c)return h(u,null),u;n===void 0&&(n=$(a?e:"<!>"+e),t||(n=E(n)));var o=i?document.importNode(n,!0):n.cloneNode(!0);if(t){var _=E(o),d=o.lastChild;h(_,d)}else h(o,o);return o}}function Te(e,r,t="svg"){var i=!e.startsWith("<!>"),n=`<${t}>${i?e:"<!>"+e}</${t}>`,a;return()=>{if(c)return h(u,null),u;if(!a){var o=$(n),_=E(o);a=E(_)}var d=a.cloneNode(!0);return h(d,d),d}}function be(e=""){if(!c){var r=b(e+"");return h(r,r),r}var t=u;return t.nodeType!==3&&(t.before(t=b()),L(t)),h(t,t),t}function Le(){if(c)return h(u,null),u;var e=document.createDocumentFragment(),r=document.createComment(""),t=b();return e.append(r,t),h(r,t),e}function Ne(e,r){if(c){N.nodes_end=u,H();return}e!==null&&e.before(r)}function Ae(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function _e(e,r){return B(e,r)}function Se(e,r){O(),r.intro=r.intro??!1;const t=r.target,i=c,n=u;try{for(var a=E(t);a&&(a.nodeType!==8||a.data!==F);)a=M(a);if(!a)throw D;m(!0),L(a),H();const o=B(e,{...r,anchor:a});if(u===null||u.nodeType!==8||u.data!==Q)throw X(),D;return m(!1),o}catch(o){if(o===D)return r.recover===!1&&ee(),O(),re(t),m(!1),_e(e,r);throw o}finally{m(i),L(n),ce()}}const w=new Map;function B(e,{target:r,anchor:t,props:i={},events:n,context:a,intro:o=!0}){O();var _=new Set,d=v=>{for(var s=0;s<v.length;s++){var f=v[s];if(!_.has(f)){_.add(f);var p=fe(f);r.addEventListener(f,T,{passive:p});var y=w.get(f);y===void 0?(document.addEventListener(f,T,{passive:p}),w.set(f,1)):w.set(f,y+1)}}};d(te(W)),I.add(d);var g=void 0,C=ae(()=>{var v=t??r.appendChild(b());return ne(()=>{if(a){ie({});var s=se;s.c=a}n&&(i.$$events=n),c&&h(v,null),g=e(v,i)||{},c&&(N.nodes_end=u),a&&oe()}),()=>{var p;for(var s of _){r.removeEventListener(s,T);var f=w.get(s);--f===0?(document.removeEventListener(s,T),w.delete(s)):w.set(s,f)}I.delete(d),v!==t&&((p=v.parentNode)==null||p.removeChild(v))}});return k.set(g,C),g}let k=new WeakMap;function Re(e,r){const t=k.get(e);return t?(k.delete(e),t(r)):Promise.resolve()}const ve="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ve);export{Ne as a,be as b,Le as c,we as d,ge as e,me as f,h as g,Se as h,$ as i,pe as l,_e as m,Te as n,ye as r,Ae as s,Ee as t,Re as u,de as w};
