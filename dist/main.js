!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=e=>{const t=document.createElement("nav"),n=document.createElement("ul");return["Home","Menu","Contacts"].forEach(e=>{const t=document.createElement("li"),r=document.createElement("a");r.setAttribute("href","#"),r.classList.add("nav-links"),r.innerText=e,t.append(r),n.append(t)}),t.append(n),e.append(t),e};var o=e=>{const t=document.createElement("div");t.setAttribute("id","text-container");const n=document.createElement("h1"),r=document.createElement("p");return n.innerText="Welcome to Odin's",r.innerText="Lorem ipsum dolor sit amet",t.append(n),t.append(r),e.append(t),e};const c=document.getElementById("nav-container"),u=document.getElementById("content");r(c),o(u);document.querySelectorAll(".nav-links").forEach(e=>{e.addEventListener("click",()=>{"Home"===e.textContent?(u.innerHTML="",o(u)):(e.textContent,u.innerHTML="")})})}]);