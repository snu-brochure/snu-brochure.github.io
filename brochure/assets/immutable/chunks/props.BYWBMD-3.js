import{a5 as D,a6 as Z,a7 as G,S as h,a8 as K,Z as b,a9 as T,W as d,Y as y,C as o,aa as $,ab as z,m as H,e as V,ac as W,u as q,B as J,ad as Q,ae as X,af as k,ag as p,ah as ee,ai as re,aj as Y,ak as ae,al as te,am as ne,an as ie,ao as fe,a3 as F,ap as se,aq as ue,R as ve}from"./index-client.ssEhF8R7.js";import{c as le}from"./store.Bx9wm7VB.js";function O(r,s=null,_){if(typeof r!="object"||r===null||D in r)return r;const P=z(r);if(P!==Z&&P!==G)return r;var i=new Map,v=H(r),w=h(0);v&&i.set("length",h(r.length));var I;return new Proxy(r,{defineProperty(f,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&K();var n=i.get(e);return n===void 0?(n=h(a.value),i.set(e,n)):b(n,O(a.value,I)),!0},deleteProperty(f,e){var a=i.get(e);if(a===void 0)e in f&&i.set(e,h(d));else{if(v&&typeof e=="string"){var n=i.get("length"),t=Number(e);Number.isInteger(t)&&t<n.v&&b(n,t)}b(a,d),M(w)}return!0},get(f,e,a){var c;if(e===D)return r;var n=i.get(e),t=e in f;if(n===void 0&&(!t||(c=T(f,e))!=null&&c.writable)&&(n=h(O(t?f[e]:d,I)),i.set(e,n)),n!==void 0){var u=y(n);return u===d?void 0:u}return Reflect.get(f,e,a)},getOwnPropertyDescriptor(f,e){var a=Reflect.getOwnPropertyDescriptor(f,e);if(a&&"value"in a){var n=i.get(e);n&&(a.value=y(n))}else if(a===void 0){var t=i.get(e),u=t==null?void 0:t.v;if(t!==void 0&&u!==d)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return a},has(f,e){var u;if(e===D)return!0;var a=i.get(e),n=a!==void 0&&a.v!==d||Reflect.has(f,e);if(a!==void 0||o!==null&&(!n||(u=T(f,e))!=null&&u.writable)){a===void 0&&(a=h(n?O(f[e],I):d),i.set(e,a));var t=y(a);if(t===d)return!1}return n},set(f,e,a,n){var S;var t=i.get(e),u=e in f;if(v&&e==="length")for(var c=a;c<t.v;c+=1){var R=i.get(c+"");R!==void 0?b(R,d):c in f&&(R=h(d),i.set(c+"",R))}t===void 0?(!u||(S=T(f,e))!=null&&S.writable)&&(t=h(void 0),b(t,O(a,I)),i.set(e,t)):(u=t.v!==d,b(t,O(a,I)));var g=Reflect.getOwnPropertyDescriptor(f,e);if(g!=null&&g.set&&g.set.call(n,a),!u){if(v&&typeof e=="string"){var m=i.get("length"),A=Number(e);Number.isInteger(A)&&A>=m.v&&b(m,A+1)}M(w)}return!0},ownKeys(f){y(w);var e=Reflect.ownKeys(f).filter(t=>{var u=i.get(t);return u===void 0||u.v!==d});for(var[a,n]of i)n.v!==d&&!(a in f)&&e.push(a);return e},setPrototypeOf(){$()}})}function M(r,s=1){b(r,r.v+s)}function U(r,s){return r===s||(r==null?void 0:r[D])===s}function ce(r={},s,_,P){return V(()=>{var i,v;return W(()=>{i=v,v=[],q(()=>{r!==_(...v)&&(s(r,...v),i&&U(_(...i),r)&&s(null,...i))})}),()=>{J(()=>{v&&U(_(...v),r)&&s(null,...v)})}}),r}function j(r){for(var s=o,_=o;s!==null&&!(s.f&(ee|re));)s=s.parent;try{return Y(s),r()}finally{Y(_)}}function ge(r,s,_,P){var C;var i=(_&ae)!==0,v=!te||(_&ne)!==0,w=(_&ie)!==0,I=(_&ue)!==0,f=!1,e;w?[e,f]=le(()=>r[s]):e=r[s];var a=D in r||fe in r,n=((C=T(r,s))==null?void 0:C.set)??(a&&w&&s in r?l=>r[s]=l:void 0),t=P,u=!0,c=!1,R=()=>(c=!0,u&&(u=!1,I?t=q(P):t=P),t);e===void 0&&P!==void 0&&(n&&v&&Q(),e=R(),n&&n(e));var g;if(v)g=()=>{var l=r[s];return l===void 0?R():(u=!0,c=!1,l)};else{var m=j(()=>(i?F:se)(()=>r[s]));m.f|=X,g=()=>{var l=y(m);return l!==void 0&&(t=void 0),l===void 0?t:l}}if(!(_&k))return g;if(n){var A=r.$$legacy;return function(l,E){return arguments.length>0?((!v||!E||A||f)&&n(E?g():l),l):g()}}var S=!1,B=!1,L=ve(e),N=j(()=>F(()=>{var l=g(),E=y(L);return S?(S=!1,B=!0,E):(B=!1,L.v=l)}));return i||(N.equals=p),function(l,E){if(arguments.length>0){const x=E?y(N):v&&w?O(l):l;return N.equals(x)||(S=!0,b(L,x),c&&t!==void 0&&(t=x),q(()=>y(N))),l}return y(N)}}export{O as a,ce as b,ge as p};