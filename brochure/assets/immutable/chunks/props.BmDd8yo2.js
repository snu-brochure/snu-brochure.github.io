import{S as m,O as K,P as Z,Q as h,R as $,y,T as D,U as d,x as P,V as o,W as j,n as V,X as z,Y as H,Z as Q,G as q,_ as W,$ as X,a0 as J,a1 as k,a2 as p,a3 as ee,a4 as re,a5 as M,a6 as ae,M as te,a7 as ne,a8 as ie,a9 as fe,K as U,aa as se,u as ue,ab as ve}from"./utils.B2AQxnli.js";import{c as le}from"./store.611ht5y3.js";function E(r,s=null,_){if(typeof r!="object"||r===null||m in r)return r;const b=V(r);if(b!==K&&b!==Z)return r;var i=new Map,v=z(r),w=h(0);v&&i.set("length",h(r.length));var I;return new Proxy(r,{defineProperty(f,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&$();var n=i.get(e);return n===void 0?(n=h(a.value),i.set(e,n)):y(n,E(a.value,I)),!0},deleteProperty(f,e){var a=i.get(e);if(a===void 0)e in f&&i.set(e,h(d));else{if(v&&typeof e=="string"){var n=i.get("length"),t=Number(e);Number.isInteger(t)&&t<n.v&&y(n,t)}y(a,d),Y(w)}return!0},get(f,e,a){var c;if(e===m)return r;var n=i.get(e),t=e in f;if(n===void 0&&(!t||(c=D(f,e))!=null&&c.writable)&&(n=h(E(t?f[e]:d,I)),i.set(e,n)),n!==void 0){var u=P(n);return u===d?void 0:u}return Reflect.get(f,e,a)},getOwnPropertyDescriptor(f,e){var a=Reflect.getOwnPropertyDescriptor(f,e);if(a&&"value"in a){var n=i.get(e);n&&(a.value=P(n))}else if(a===void 0){var t=i.get(e),u=t==null?void 0:t.v;if(t!==void 0&&u!==d)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return a},has(f,e){var u;if(e===m)return!0;var a=i.get(e),n=a!==void 0&&a.v!==d||Reflect.has(f,e);if(a!==void 0||o!==null&&(!n||(u=D(f,e))!=null&&u.writable)){a===void 0&&(a=h(n?E(f[e],I):d),i.set(e,a));var t=P(a);if(t===d)return!1}return n},set(f,e,a,n){var O;var t=i.get(e),u=e in f;if(v&&e==="length")for(var c=a;c<t.v;c+=1){var R=i.get(c+"");R!==void 0?y(R,d):c in f&&(R=h(d),i.set(c+"",R))}t===void 0?(!u||(O=D(f,e))!=null&&O.writable)&&(t=h(void 0),y(t,E(a,I)),i.set(e,t)):(u=t.v!==d,y(t,E(a,I)));var g=Reflect.getOwnPropertyDescriptor(f,e);if(g!=null&&g.set&&g.set.call(n,a),!u){if(v&&typeof e=="string"){var A=i.get("length"),N=Number(e);Number.isInteger(N)&&N>=A.v&&y(A,N+1)}Y(w)}return!0},ownKeys(f){P(w);var e=Reflect.ownKeys(f).filter(t=>{var u=i.get(t);return u===void 0||u.v!==d});for(var[a,n]of i)n.v!==d&&!(a in f)&&e.push(a);return e},setPrototypeOf(){j()}})}function Y(r,s=1){y(r,r.v+s)}function F(r,s){return r===s||(r==null?void 0:r[m])===s}function ce(r={},s,_,b){return H(()=>{var i,v;return Q(()=>{i=v,v=[],q(()=>{r!==_(...v)&&(s(r,...v),i&&F(_(...i),r)&&s(null,...i))})}),()=>{W(()=>{v&&F(_(...v),r)&&s(null,...v)})}}),r}function G(r){for(var s=o,_=o;s!==null&&!(s.f&(ee|re));)s=s.parent;try{return M(s),r()}finally{M(_)}}function ge(r,s,_,b){var C;var i=(_&ae)!==0,v=!te||(_&ne)!==0,w=(_&ie)!==0,I=(_&ve)!==0,f=!1,e;w?[e,f]=le(()=>r[s]):e=r[s];var a=m in r||fe in r,n=((C=D(r,s))==null?void 0:C.set)??(a&&w&&s in r?l=>r[s]=l:void 0),t=b,u=!0,c=!1,R=()=>(c=!0,u&&(u=!1,I?t=q(b):t=b),t);e===void 0&&b!==void 0&&(n&&v&&X(),e=R(),n&&n(e));var g;if(v)g=()=>{var l=r[s];return l===void 0?R():(u=!0,c=!1,l)};else{var A=G(()=>(i?U:se)(()=>r[s]));A.f|=J,g=()=>{var l=P(A);return l!==void 0&&(t=void 0),l===void 0?t:l}}if(!(_&k))return g;if(n){var N=r.$$legacy;return function(l,S){return arguments.length>0?((!v||!S||N||f)&&n(S?g():l),l):g()}}var O=!1,B=!1,x=ue(e),T=G(()=>U(()=>{var l=g(),S=P(x);return O?(O=!1,B=!0,S):(B=!1,x.v=l)}));return i||(T.equals=p),function(l,S){if(arguments.length>0){const L=S?P(T):v&&w?E(l):l;return T.equals(L)||(O=!0,y(x,L),c&&t!==void 0&&(t=L),q(()=>P(T))),l}return P(T)}}export{E as a,ce as b,ge as p};