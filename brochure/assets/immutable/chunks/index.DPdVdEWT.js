import{d as u,E as d,k as h,v as m,N as v,h as g,m as N}from"./utils.zV2y1udm.js";import{d as T,w as o}from"./index.BOwcq9hR.js";function y(e,s,...t){var a=e,r=m,n;u(()=>{r!==(r=s())&&(n&&(v(n),n=null),n=h(()=>r(a,...t)))},d),g&&(a=N)}const c="en",f=o("."),i=o(c),w=T([f,i],([e,s])=>t=>t==="/"?s===c?e+"/":e+"/"+s+".html":e+"/"+s+t),A=e=>{const s=e.replace(/^\//,"").split("/");f.set(E(s)),i.set(_(s))},E=e=>{const s=e.length;if(s<=1)return".";let t="";for(let a=0;a<s-1;a++)t+="../";return t.replace(/\/$/,"")},_=e=>e[0].replace(/\.html$/,"")||c,l=o(!1),p=o(!1);function F(){l.set(!0),setTimeout(()=>{p.set(!0)})}function L(){p.set(!1),setTimeout(()=>{l.set(!1)},200)}export{l as a,f as b,L as c,c as d,A as e,w as h,i as l,p as n,F as o,y as s};
