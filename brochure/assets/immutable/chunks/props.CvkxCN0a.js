import{S as N,Q as Z,R as $,T as P,V as j,M as g,W as T,U as l,w as b,X as x,Y as z,A as G,Z as K,_ as V,$ as H,a0 as Q,a1 as W,q as C,a2 as X,a3 as J,a4 as M,a5 as k,a6 as p,a7 as ee,a8 as re,a9 as ae,z as U,aa as ne,I as te,ab as ie}from"./index-client.DTSP3rRi.js";import{c as fe}from"./store.BuqE0OmF.js";function S(t,v=null,y){if(typeof t!="object"||t===null||N in t)return t;const o=G(t);if(o!==Z&&o!==$)return t;var f=new Map,c=K(t),m=P(0);c&&f.set("length",P(t.length));var w;return new Proxy(t,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&j();var n=f.get(e);return n===void 0?(n=P(r.value),f.set(e,n)):g(n,S(r.value,w)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,P(l));else{if(c&&typeof e=="string"){var n=f.get("length"),a=Number(e);Number.isInteger(a)&&a<n.v&&g(n,a)}g(r,l),Y(m)}return!0},get(i,e,r){var _;if(e===N)return t;var n=f.get(e),a=e in i;if(n===void 0&&(!a||(_=T(i,e))!=null&&_.writable)&&(n=P(S(a?i[e]:l,w)),f.set(e,n)),n!==void 0){var u=b(n);return u===l?void 0:u}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var n=f.get(e);n&&(r.value=b(n))}else if(r===void 0){var a=f.get(e),u=a==null?void 0:a.v;if(a!==void 0&&u!==l)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(i,e){var u;if(e===N)return!0;var r=f.get(e),n=r!==void 0&&r.v!==l||Reflect.has(i,e);if(r!==void 0||x!==null&&(!n||(u=T(i,e))!=null&&u.writable)){r===void 0&&(r=P(n?S(i[e],w):l),f.set(e,r));var a=b(r);if(a===l)return!1}return n},set(i,e,r,n){var R;var a=f.get(e),u=e in i;if(c&&e==="length")for(var _=r;_<a.v;_+=1){var I=f.get(_+"");I!==void 0?g(I,l):_ in i&&(I=P(l),f.set(_+"",I))}a===void 0?(!u||(R=T(i,e))!=null&&R.writable)&&(a=P(void 0),g(a,S(r,w)),f.set(e,a)):(u=a.v!==l,g(a,S(r,w)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(n,r),!u){if(c&&typeof e=="string"){var E=f.get("length"),O=Number(e);Number.isInteger(O)&&O>=E.v&&g(E,O+1)}Y(m)}return!0},ownKeys(i){b(m);var e=Reflect.ownKeys(i).filter(a=>{var u=f.get(a);return u===void 0||u.v!==l});for(var[r,n]of f)n.v!==l&&!(r in i)&&e.push(r);return e},setPrototypeOf(){z()}})}function Y(t,v=1){g(t,t.v+v)}function F(t){for(var v=x,y=x;v!==null&&!(v.f&(X|J));)v=v.parent;try{return M(v),t()}finally{M(y)}}function ve(t,v,y,o){var B;var f=(y&k)!==0,c=!p||(y&ee)!==0,m=(y&re)!==0,w=(y&ie)!==0,i=!1,e;m?[e,i]=fe(()=>t[v]):e=t[v];var r=N in t||ae in t,n=((B=T(t,v))==null?void 0:B.set)??(r&&m&&v in t?s=>t[v]=s:void 0),a=o,u=!0,_=!1,I=()=>(_=!0,u&&(u=!1,w?a=C(o):a=o),a);e===void 0&&o!==void 0&&(n&&c&&V(),e=I(),n&&n(e));var d;if(c)d=()=>{var s=t[v];return s===void 0?I():(u=!0,_=!1,s)};else{var E=F(()=>(f?U:ne)(()=>t[v]));E.f|=H,d=()=>{var s=b(E);return s!==void 0&&(a=void 0),s===void 0?a:s}}if(!(y&Q))return d;if(n){var O=t.$$legacy;return function(s,h){return arguments.length>0?((!c||!h||O||i)&&n(h?d():s),s):d()}}var R=!1,q=!1,D=te(e),A=F(()=>U(()=>{var s=d(),h=b(D);return R?(R=!1,q=!0,h):(q=!1,D.v=s)}));return f||(A.equals=W),function(s,h){if(arguments.length>0){const L=h?b(A):c&&m?S(s):s;return A.equals(L)||(R=!0,g(D,L),_&&a!==void 0&&(a=L),C(()=>b(A))),s}return b(A)}}export{S as a,ve as p};
