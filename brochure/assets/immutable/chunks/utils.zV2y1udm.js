var kt=Array.isArray,Nt=Array.from,It=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,$n=Object.getOwnPropertyDescriptors,Pt=Object.prototype,Ct=Array.prototype,Zn=Object.getPrototypeOf;const Wn=()=>{};function Ft(n){return n()}function zn(n){for(var t=0;t<n.length;t++)n[t]()}const E=2,yn=4,j=8,ln=16,m=32,W=64,nn=128,D=256,G=512,h=1024,S=2048,U=4096,N=8192,P=16384,Jn=32768,En=65536,qt=1<<17,Qn=1<<19,wn=1<<20,vn=Symbol("$state"),Lt=Symbol("legacy props"),Yt=Symbol("");function mn(n){return n===this.v}function Xn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Tn(n){return!Xn(n,this.v)}function nt(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function tt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rt(n){throw new Error("https://svelte.dev/e/effect_orphan")}function et(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Mt(){throw new Error("https://svelte.dev/e/hydration_failed")}function jt(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ut(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Bt(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function st(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function lt(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let z=!1;function Ht(){z=!0}const Vt=1,Gt=2,Kt=4,$t=8,Zt=16,Wt=1,zt=2,ut="[",ot="[!",at="]",gn={},Jt=Symbol();function un(n,t){var r={f:0,v:n,reactions:null,equals:mn,version:0};return r}function Qt(n){return it(un(n))}function Xt(n,t=!1){var e;const r=un(n);return t||(r.equals=Tn),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function it(n){return a!==null&&a.f&E&&(w===null?Tt([n]):w.push(n)),n}function nr(n,t){return a!==null&&fn()&&a.f&(E|ln)&&(w===null||!w.includes(n))&&lt(),ft(n,t)}function ft(n,t){return n.equals(t)||(n.v=t,n.version=Un(),An(n,S),fn()&&o!==null&&o.f&h&&!(o.f&m)&&(v!==null&&v.includes(n)?(T(o,S),X(o)):A===null?gt([n]):A.push(n))),t}function An(n,t){var r=n.reactions;if(r!==null)for(var e=fn(),s=r.length,l=0;l<s;l++){var u=r[l],i=u.f;i&S||!e&&u===o||(T(u,t),i&(h|D)&&(i&E?An(u,U):X(u)))}}function Sn(n){console.warn("https://svelte.dev/e/hydration_mismatch")}let I=!1;function tr(n){I=n}let g;function q(n){if(n===null)throw Sn(),gn;return g=n}function rr(){return q(C(g))}function er(n){if(I){if(C(g)!==null)throw Sn(),gn;g=n}}function sr(){for(var n=0,t=g;;){if(t.nodeType===8){var r=t.data;if(r===at){if(n===0)return t;n-=1}else(r===ut||r===ot)&&(n+=1)}var e=C(t);t.remove(),t=e}}var pn,Rn,xn;function lr(){if(pn===void 0){pn=window;var n=Element.prototype,t=Node.prototype;Rn=cn(t,"firstChild").get,xn=cn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function tn(n=""){return document.createTextNode(n)}function rn(n){return Rn.call(n)}function C(n){return xn.call(n)}function ur(n,t){if(!I)return rn(n);var r=rn(g);if(r===null)r=g.appendChild(tn());else if(t&&r.nodeType!==3){var e=tn();return r==null||r.before(e),q(e),e}return q(r),r}function or(n,t){if(!I){var r=rn(n);return r instanceof Comment&&r.data===""?C(r):r}return g}function ar(n,t=1,r=!1){let e=I?g:n;for(var s;t--;)s=e,e=C(e);if(!I)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var u=tn();return e===null?s==null||s.after(u):e.before(u),q(u),u}return q(e),e}function ir(n){n.textContent=""}function _t(n){var t=E|S;o===null?t|=D:o.f|=wn;var r=a!==null&&a.f&E?a:null;const e={children:null,ctx:f,deps:null,equals:mn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??o};return r!==null&&(r.children??(r.children=[])).push(e),e}function fr(n){const t=_t(n);return t.equals=Tn,t}function On(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&E?on(e):O(e)}}}function ct(n){for(var t=n.parent;t!==null;){if(!(t.f&E))return t;t=t.parent}return null}function Dn(n){var t,r=o;Z(ct(n));try{On(n),t=Bn(n)}finally{Z(r)}return t}function bn(n){var t=Dn(n),r=(x||n.f&D)&&n.deps!==null?U:h;T(n,r),n.equals(t)||(n.v=t,n.version=Un())}function on(n){On(n),M(n,0),T(n,P),n.v=n.children=n.deps=n.ctx=n.reactions=null}function kn(n){o===null&&a===null&&rt(),a!==null&&a.f&D&&tt(),an&&nt()}function vt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function F(n,t,r,e=!0){var s=(n&W)!==0,l=o,u={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|S,first:null,fn:t,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=b;try{hn(!0),Q(u),u.f|=Jn}catch(_){throw O(u),_}finally{hn(i)}}else t!==null&&X(u);var p=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&wn)===0;if(!p&&!s&&e&&(l!==null&&vt(u,l),a!==null&&a.f&E)){var d=a;(d.children??(d.children=[])).push(u)}return u}function _r(n){const t=F(j,null,!1);return T(t,h),t.teardown=n,t}function cr(n){kn();var t=o!==null&&(o.f&m)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:o,reaction:a})}else{var e=Nn(n);return e}}function vr(n){return kn(),pt(n)}function pr(n){const t=F(W,n,!0);return(r={})=>new Promise(e=>{r.outro?yt(t,()=>{O(t),e(void 0)}):(O(t),e(void 0))})}function Nn(n){return F(yn,n,!1)}function pt(n){return F(j,n,!0)}function hr(n){return ht(n)}function ht(n,t=0){return F(j|ln|t,n,!0)}function dr(n,t=!0){return F(j|m,n,!0,t)}function In(n){var t=n.teardown;if(t!==null){const r=an,e=a;dn(!0),$(null);try{t.call(null)}finally{dn(r),$(e)}}}function Pn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)on(t[r])}}function Cn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;O(r,t),r=e}}function dt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&m||O(t),t=r}}function O(n,t=!0){var r=!1;if((t||n.f&Qn)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var l=e===s?null:C(e);e.remove(),e=l}r=!0}Cn(n,t&&!r),Pn(n),M(n,0),T(n,P);var u=n.transitions;if(u!==null)for(const p of u)p.stop();In(n);var i=n.parent;i!==null&&i.first!==null&&Fn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Fn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function yt(n,t){var r=[];qn(n,r,!0),Et(r,()=>{O(n),t&&t()})}function Et(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function qn(n,t,r){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const u of n.transitions)(u.is_global||r)&&t.push(u);for(var e=n.first;e!==null;){var s=e.next,l=(e.f&En)!==0||(e.f&m)!==0;qn(e,t,l?r:!1),e=s}}}function yr(n){Ln(n,!0)}function Ln(n,t){if(n.f&N){B(n)&&Q(n),n.f^=N;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&En)!==0||(r.f&m)!==0;Ln(r,s?t:!1),r=e}if(n.transitions!==null)for(const l of n.transitions)(l.is_global||t)&&l.in()}}let K=!1,en=[];function Yn(){K=!1;const n=en.slice();en=[],zn(n)}function Er(n){K||(K=!0,queueMicrotask(Yn)),en.push(n)}function wt(){K&&Yn()}const Mn=0,mt=1;let H=!1,V=Mn,L=!1,Y=null,b=!1,an=!1;function hn(n){b=n}function dn(n){an=n}let R=[],k=0;let a=null;function $(n){a=n}let o=null;function Z(n){o=n}let w=null;function Tt(n){w=n}let v=null,y=0,A=null;function gt(n){A=n}let jn=1,x=!1,f=null;function Un(){return++jn}function fn(){return!z||f!==null&&f.l===null}function B(n){var u,i;var t=n.f;if(t&S)return!0;if(t&U){var r=n.deps,e=(t&D)!==0;if(r!==null){var s;if(t&G){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(n);n.f^=G}for(s=0;s<r.length;s++){var l=r[s];if(B(l)&&bn(l),e&&o!==null&&!x&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(n))&&(l.reactions??(l.reactions=[])).push(n),l.version>n.version)return!0}}(!e||o!==null&&!x)&&T(n,h)}return!1}function At(n,t){for(var r=t;r!==null;){if(r.f&nn)try{r.fn(n);return}catch{r.f^=nn}r=r.parent}throw H=!1,n}function St(n){return(n.f&P)===0&&(n.parent===null||(n.parent.f&nn)===0)}function J(n,t,r,e){if(H){if(r===null&&(H=!1),St(t))throw n;return}r!==null&&(H=!0);{At(n,t);return}}function Bn(n){var _n;var t=v,r=y,e=A,s=a,l=x,u=w,i=f,p=n.f;v=null,y=0,A=null,a=p&(m|W)?null:n,x=!b&&(p&D)!==0,w=null,f=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(M(n,y),_!==null&&y>0)for(_.length=y+v.length,c=0;c<v.length;c++)_[y+c]=v[c];else n.deps=_=v;if(!x)for(c=y;c<_.length;c++)((_n=_[c]).reactions??(_n.reactions=[])).push(n)}else _!==null&&y<_.length&&(M(n,y),_.length=y);return d}finally{v=t,y=r,A=e,a=s,x=l,w=u,f=i}}function Rt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&E&&(v===null||!v.includes(t))&&(T(t,U),t.f&(D|G)||(t.f^=G),M(t,0))}function M(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Rt(n,r[e])}function Q(n){var t=n.f;if(!(t&P)){T(n,h);var r=o,e=f;o=n;try{t&ln?dt(n):Cn(n),Pn(n),In(n);var s=Bn(n);n.teardown=typeof s=="function"?s:null,n.version=jn}catch(l){J(l,n,r,e||n.ctx)}finally{o=r}}}function Hn(){if(k>1e3){k=0;try{et()}catch(n){if(Y!==null)J(n,Y,null);else throw n}}k++}function Vn(n){var t=n.length;if(t!==0){Hn();var r=b;b=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&h||(s.f^=h);var l=[];Gn(s,l),xt(l)}}finally{b=r}}}function xt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(P|N)))try{B(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Fn(e):e.fn=null))}catch(s){J(s,e,null,e.ctx)}}}function Ot(){if(L=!1,k>1001)return;const n=R;R=[],Vn(n),L||(k=0,Y=null)}function X(n){V===Mn&&(L||(L=!0,queueMicrotask(Ot))),Y=n;for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(W|m)){if(!(r&h))return;t.f^=h}}R.push(t)}function Gn(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,l=(s&m)!==0,u=l&&(s&h)!==0,i=r.next;if(!u&&!(s&N))if(s&j){if(l)r.f^=h;else try{B(r)&&Q(r)}catch(c){J(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&yn&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],t.push(p),Gn(p,t)}function Kn(n){var t=V,r=R;try{Hn();const s=[];V=mt,R=s,L=!1,Vn(r);var e=n==null?void 0:n();return wt(),(R.length>0||s.length>0)&&Kn(),k=0,Y=null,e}finally{V=t,R=r}}async function wr(){await Promise.resolve(),Kn()}function mr(n){var _;var t=n.f,r=(t&E)!==0;if(r&&t&P){var e=Dn(n);return on(n),e}if(a!==null){w!==null&&w.includes(n)&&st();var s=a.deps;v===null&&s!==null&&s[y]===n?y++:v===null?v=[n]:v.push(n),A!==null&&o!==null&&o.f&h&&!(o.f&m)&&A.includes(n)&&(T(o,S),X(o))}else if(r&&n.deps===null)for(var l=n,u=l.parent,i=l;u!==null;)if(u.f&E){var p=u;i=p,u=p.parent}else{var d=u;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(l=n,B(l)&&bn(l)),n.v}function Dt(n){const t=a;try{return a=null,n()}finally{a=t}}const bt=~(S|U|h);function T(n,t){n.f=n.f&bt|t}function Tr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},z&&!t&&(f.l={s:null,u:null,r1:[],r2:un(!1)})}function gr(n){const t=f;if(t!==null){const u=t.e;if(u!==null){var r=o,e=a;t.e=null;try{for(var s=0;s<u.length;s++){var l=u[s];Z(l.effect),$(l.reaction),Nn(l.fn)}}finally{Z(r),$(e)}}f=t.p,t.m=!0}return{}}function Ar(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(vn in n)sn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&vn in r&&sn(r)}}}function sn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{sn(n[e],t)}catch{}const r=Zn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$n(r);for(let s in e){const l=e[s].get;if(l)try{l.call(n)}catch{}}}}}function Sr(n,t,r){if(n==null)return t(void 0),r&&r(void 0),Wn;const e=Dt(()=>n.subscribe(t,r));return e.unsubscribe?()=>e.unsubscribe():e}export{C as $,zn as A,Xn as B,vr as C,cr as D,En as E,f as F,Dt as G,ot as H,Ft as I,Ar as J,_t as K,Yt as L,z as M,O as N,It as O,$ as P,Z as Q,kt as R,a as S,o as T,Jt as U,rn as V,Wt as W,zt as X,tn as Y,lr as Z,ut as _,gr as a,gn as a0,at as a1,Sn as a2,Mt as a3,ir as a4,Nt as a5,pr as a6,vn as a7,Pt as a8,Ct as a9,un as aa,Ut as ab,cn as ac,Bt as ad,Nn as ae,pt as af,Er as ag,jt as ah,qt as ai,Kt as aj,Tn as ak,m as al,W as am,Vt as an,Gt as ao,$t as ap,Lt as aq,fr as ar,Zt as as,Kn as at,wr as au,Qt as av,rr as b,ur as c,ht as d,sr as e,or as f,q as g,I as h,tr as i,yr as j,dr as k,yt as l,g as m,Zn as n,$n as o,Tr as p,_r as q,er as r,ar as s,hr as t,Xt as u,Wn as v,Sr as w,mr as x,nr as y,Ht as z};
