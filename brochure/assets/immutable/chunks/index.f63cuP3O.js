import{b as u,E as h,k as d,J as m,ac as v,h as g,m as T}from"./index-client.DTSP3rRi.js";import{d as b,w as o}from"./index.NL0WU0iP.js";function y(e,s,...t){var a=e,r=m,n;u(()=>{r!==(r=s())&&(n&&(v(n),n=null),n=d(()=>r(a,...t)))},h),g&&(a=T)}const c="en",f=o("."),i=o(c),w=b([f,i],([e,s])=>t=>t==="/"?s===c?e+"/":e+"/"+s+".html":e+"/"+s+t),A=e=>{const s=e.replace(/^\//,"").split("/");f.set(E(s)),i.set(N(s))},E=e=>{const s=e.length;if(s<=1)return".";let t="";for(let a=0;a<s-1;a++)t+="../";return t.replace(/\/$/,"")},N=e=>e[0].replace(/\.html$/,"")||c,l=o(!1),p=o(!1);function F(){l.set(!0),setTimeout(()=>{p.set(!0)})}function L(){p.set(!1),setTimeout(()=>{l.set(!1)},200)}export{l as a,f as b,L as c,c as d,A as e,w as h,i as l,p as n,F as o,y as s};
