import{i as E,j as o,l as I,V as N,H as R,v as m,k as x,w as d,y as v,z as h,A as g,x as S,W as k,X as w,R as D,n as p,b as F,Y as H,Z as L}from"./index-client.ssEhF8R7.js";function Z(s,a,t=!1){o&&I();var e=s,r=null,n=null,u=k,y=t?N:0,l=!1;const T=(c,i=!0)=>{l=!0,_(i,c)},_=(c,i)=>{if(u===(u=c))return;let b=!1;if(o){const A=e.data===R;!!u===A&&(e=m(),x(e),d(!1),b=!0)}u?(r?v(r):i&&(r=h(()=>i(e))),n&&g(n,()=>{n=null})):(n?v(n):i&&(n=h(()=>i(e))),r&&g(r,()=>{r=null})),b&&d(!0)};E(()=>{l=!1,a(T),l||_(null,null)},y),o&&(e=S)}let f=!1;function j(s,a,t){const e=t[a]??(t[a]={store:null,source:D(void 0),unsubscribe:p});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=p;else{var r=!0;e.unsubscribe=F(s,n=>{r?e.source.v=n:L(e.source,n)}),r=!1}return H(e.source)}function q(){const s={};return w(()=>{for(var a in s)s[a].unsubscribe()}),s}function z(s){var a=f;try{return f=!1,[s(),f]}finally{f=a}}export{j as a,z as c,Z as i,q as s};