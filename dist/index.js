!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.stringlib=e():t.stringlib=e()}(this,(()=>(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function r(t){return t.toUpperCase()}function n(t){return 0===t.length?t:t[0].toUpperCase()+t.slice(1)}function o(t){return t.split(" ").map((function(t,e){return 0===e?t.toLowerCase():n(t)})).join("")}function i(t){return t.split(" ").map((function(t){return n(t)})).join(" ")}function u(t){var e=t.trim();if(0===e.length)return!0;for(var r=0,n=e.split("");r<n.length;r++){var o=n[r];if(" "!=o&&"\n"!=o&&"\t"!=o)return!1}return!0}function a(t){return t.trim().split(" ").filter((function(t){return""!==t})).join(" ")}function f(t,e){return void 0===e&&(e="-"),a(t.toLowerCase().split("").filter((function(t){var e=t.charCodeAt(0);return e>96&&e<123||e>47&&e<58||32===e||45===e})).join("")).split(" ").join(e)}function l(t){var e=t.toLowerCase().split(" "),r=[];if(e.length>3)for(var n=0,o=e.sort((function(t,e){return e.length-t.length})).slice(0,3);n<o.length;n++){var i=o[n],u="#".concat(i);r.push(u)}else for(var a=0,f=e;a<f.length;a++)i=f[a],u="#".concat(i),r.push(u);return r}function s(t,e){void 0===e&&(e=1);var r=t.split("").map((function(t,r){if(r<e)return t})).join("");return t.slice(e).trim()+r}function c(t){return f(t,"_")}return t.r(e),t.d(e,{allCaps:()=>r,camelCase:()=>o,capitalize:()=>n,capitalizeWords:()=>i,isEmpty:()=>u,kebobCase:()=>f,makeHashTag:()=>l,removeExtraSpaces:()=>a,shift:()=>s,snakeCase:()=>c}),e})()));