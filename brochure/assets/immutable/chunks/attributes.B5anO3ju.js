import{l as c,L as g,A as d,B as n}from"./utils.UQKjAkRN.js";function y(r,s,o,i){var f=r.__attributes??(r.__attributes={});c&&(f[s]=r.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&r.nodeName==="LINK")||f[s]!==(f[s]=o)&&(s==="style"&&"__styles"in r&&(r.__styles={}),s==="loading"&&(r[g]=o),o==null?r.removeAttribute(s):typeof o!="string"&&t(r).includes(s)?r[s]=o:r.setAttribute(s,o))}var p=new Map;function t(r){var s=p.get(r.nodeName);if(s)return s;p.set(r.nodeName,s=[]);for(var o,i=r,f=Element.prototype;f!==i;){o=n(i);for(var _ in o)o[_].set&&s.push(_);i=d(i)}return s}export{y as s};