import{n as c,k as s,j as t,U as r,i}from"./runtime.BGQiY3Km.js";function f(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function _(e,n,u){if(e==null)return n(void 0),u&&u(void 0),c;const o=s(()=>e.subscribe(n,u));return o.unsubscribe?()=>o.unsubscribe():o}function b(e){t===null&&f(),r&&t.l!==null?l(t).m.push(e):i(()=>{const n=s(e);if(typeof n=="function")return n})}function l(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{b as o,_ as s};