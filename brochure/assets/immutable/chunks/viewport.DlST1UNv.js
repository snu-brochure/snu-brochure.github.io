import{h as re,i as ne,j as C,k as M,l as ae,m as ie,q as Q,H as te,v as F,w as k,x as N,I as O,y as X,z as W,A as fe,B as le,C as G,E as L,D as J,F as y,G as se,J as ue,K as ve,L as oe,M as Z,N as ce,O as de,P as _e,Q as he,R as Ee,S as K,T as pe,U as Ie}from"./index-client.ssEhF8R7.js";function Ce(i,e){return e}function we(i,e,r,u){for(var v=[],o=e.length,l=0;l<o;l++)se(e[l].e,v,!0);var p=o>0&&v.length===0&&r!==null;if(p){var d=r.parentNode;ue(d),d.append(r),u.clear(),x(i,e[0].prev,e[o-1].next)}ve(v,()=>{for(var w=0;w<o;w++){var c=e[w];p||(u.delete(c.k),x(i,c.prev,c.next)),oe(c.e,!p)}})}function be(i,e,r,u,v,o=null){var l=i,p={flags:e,items:new Map,first:null},d=(e&Z)!==0;if(d){var w=i;l=C?M(ce(w)):w.appendChild(re())}C&&ae();var c=null,A=!1;ne(()=>{var T=r(),n=ie(T)?T:T==null?[]:Q(T),t=n.length;if(A&&t===0)return;A=t===0;let s=!1;if(C){var b=l.data===te;b!==(t===0)&&(l=F(),M(l),k(!1),s=!0)}if(C){for(var _=null,h,E=0;E<t;E++){if(N.nodeType===8&&N.data===de){l=N,s=!0,k(!1);break}var I=n[E],a=u(I,E);h=$(N,p,_,null,I,a,E,v,e),p.items.set(a,h),_=h}t>0&&M(F())}if(!C){var f=_e;Ae(n,p,l,v,e,(f.f&O)!==0,u)}o!==null&&(t===0?c?X(c):c=W(()=>o(l)):c!==null&&fe(c,()=>{c=null})),s&&k(!0),r()}),C&&(l=N)}function Ae(i,e,r,u,v,o,l,p){var B,U,V,Y;var d=(v&he)!==0,w=(v&(L|y))!==0,c=i.length,A=e.items,T=e.first,n=T,t,s=null,b,_=[],h=[],E,I,a,f;if(d)for(f=0;f<c;f+=1)E=i[f],I=l(E,f),a=A.get(I),a!==void 0&&((B=a.a)==null||B.measure(),(b??(b=new Set)).add(a));for(f=0;f<c;f+=1){if(E=i[f],I=l(E,f),a=A.get(I),a===void 0){var j=n?n.e.nodes_start:r;s=$(j,e,s,s===null?e.first:s.next,E,I,f,u,v),A.set(I,s),_=[],h=[],n=s.next;continue}if(w&&Te(a,E,f,v),a.e.f&O&&(X(a.e),d&&((U=a.a)==null||U.unfix(),(b??(b=new Set)).delete(a))),a!==n){if(t!==void 0&&t.has(a)){if(_.length<h.length){var H=h[0],m;s=H.prev;var q=_[0],S=_[_.length-1];for(m=0;m<_.length;m+=1)P(_[m],H,r);for(m=0;m<h.length;m+=1)t.delete(h[m]);x(e,q.prev,S.next),x(e,s,q),x(e,S,H),n=H,s=S,f-=1,_=[],h=[]}else t.delete(a),P(a,n,r),x(e,a.prev,a.next),x(e,a,s===null?e.first:s.next),x(e,s,a),s=a;continue}for(_=[],h=[];n!==null&&n.k!==I;)(o||!(n.e.f&O))&&(t??(t=new Set)).add(n),h.push(n),n=n.next;if(n===null)continue;a=n}_.push(a),s=a,n=a.next}if(n!==null||t!==void 0){for(var g=t===void 0?[]:Q(t);n!==null;)(o||!(n.e.f&O))&&g.push(n),n=n.next;var D=g.length;if(D>0){var ee=v&Z&&c===0?r:null;if(d){for(f=0;f<D;f+=1)(V=g[f].a)==null||V.measure();for(f=0;f<D;f+=1)(Y=g[f].a)==null||Y.fix()}we(e,g,ee,A)}}d&&le(()=>{var z;if(b!==void 0)for(a of b)(z=a.a)==null||z.apply()}),G.first=e.first&&e.first.e,G.last=s&&s.e}function Te(i,e,r,u){u&L&&J(i.v,e),u&y?J(i.i,r):i.i=r}function $(i,e,r,u,v,o,l,p,d,w){var c=(d&L)!==0,A=(d&pe)===0,T=c?A?Ee(v):K(v):v,n=d&y?K(l):l,t={i:n,v:T,k:o,a:null,e:null,prev:r,next:u};try{return t.e=W(()=>p(i,T,n),C),t.e.prev=r&&r.e,t.e.next=u&&u.e,r===null?e.first=t:(r.next=t,r.e.next=t.e),u!==null&&(u.prev=t,u.e.prev=t.e),t}finally{}}function P(i,e,r){for(var u=i.next?i.next.e.nodes_start:r,v=e?e.e.nodes_start:r,o=i.e.nodes_start;o!==u;){var l=Ie(o);v.before(o),o=l}}function x(i,e,r){e===null?i.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}let R;function me(){R||(R=new IntersectionObserver(i=>{i.forEach(e=>{const r=e.isIntersecting?"enterviewport":"exitviewport";e.target.dispatchEvent(new CustomEvent(r))})}))}function ge(i){return me(),R.observe(i),{destroy(){R.unobserve(i)}}}export{be as e,Ce as i,ge as v};