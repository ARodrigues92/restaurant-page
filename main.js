!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=e=>{const t=document.createElement("nav"),n=document.createElement("ul");return["Home","Menu","Contacts"].forEach(e=>{const t=document.createElement("li"),a=document.createElement("a");a.setAttribute("href","#"),a.classList.add("nav-links"),a.innerText=e,t.append(a),n.append(t)}),t.append(n),e.append(t),e};var r=e=>{const t=document.createElement("div");t.setAttribute("id","text-container");const n=document.createElement("h1"),a=document.createElement("p");return n.innerText="Welcome to Odin's",a.innerText="Lorem ipsum dolor sit amet",t.append(n),t.append(a),e.append(t),e};const c=[{name:"French Toast",description:"",price:"3"},{name:"Pancakes",description:"3 pieces, served with choice of fresh fruits",price:"4"},{name:"Farmers Omelete",description:"Sausage, bacon, onion & green peppers",price:"5"},{name:"Vegetarian Omelete",description:"Mushrooms, green peppers, onion & tomatoes",price:"5"},{name:"Eggs benedict",description:"Poached eggs with ham and hollandaise on toasted english muffin",price:"6"},{name:"Full english breakfast",description:"Toast, mushrooms, tomatoes, sausage, bacon, beans and eggs",price:"8"}],o=[{name:"Tea",price:"1"},{name:"Espresso",price:"1.5"},{name:"Decaf",price:"1.5"},{name:"Capuccino",price:"2.5"},{name:"Hot Chocolate",price:"3"},{name:"Orange Juice",price:"3.5"}];var i=e=>{const t=document.createElement("div");t.setAttribute("id","menu-container");const n=document.createElement("div");n.classList.add("menu");const a=document.createElement("p");a.innerText="Food Menu",a.classList.add("menu-title"),n.append(a),c.forEach(e=>{const t=document.createElement("div"),a=document.createElement("p"),r=document.createElement("p"),c=document.createElement("p");t.classList.add("item-container"),a.classList.add("item-title"),r.classList.add("item-description"),c.classList.add("item-price"),a.innerText=e.name,r.innerText=e.description,c.innerText=`${e.price} €`,t.append(a),t.append(c),t.append(r),n.append(t)}),t.append(n);const r=document.createElement("div");r.classList.add("menu");const i=document.createElement("p");return i.innerText="Drinks Menu",i.classList.add("menu-title"),r.append(i),o.forEach(e=>{const t=document.createElement("div"),n=document.createElement("p"),a=document.createElement("p");t.classList.add("item-container"),n.classList.add("item-title"),a.classList.add("item-price"),n.innerText=e.name,a.innerText=`${e.price} €`,t.append(n),t.append(a),r.append(t)}),t.append(r),e.append(t),e};var d=e=>{const t=document.createElement("div");t.setAttribute("id","adress"),t.classList.add("contacts");const n=document.createElement("div");n.setAttribute("id","contacts"),n.classList.add("contacts");const a=document.createElement("p"),r=document.createElement("p"),c=document.createElement("p"),o=document.createElement("p"),i=document.createElement("p");a.innerText="Come visit us at:",r.innerText="Random Street nº1337, Barcelona",c.innerText="Contact us via e-mail or phone at:",o.innerText="randomrestaurant@randommail.com",i.innerText="+351 000 000 000",t.append(a,r),n.append(c,o,i),e.append(t,n)};const s=document.getElementById("nav-container"),m=document.getElementById("content");a(s),r(m);document.querySelectorAll(".nav-links").forEach(e=>{e.addEventListener("click",()=>{"Home"===e.textContent?(m.innerHTML="",r(m)):"Menu"===e.textContent?(m.innerHTML="",i(m)):(m.innerHTML="",d(m))})})}]);