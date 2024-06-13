!function(){"use strict";var e=function(e){function t(e,t){e.addEventListener("transitionend",(function n(){e.removeAttribute("style"),e.removeEventListener("transitionend",n),t&&t()}))}!function e(n){if(!n)return;const r=n.querySelector(".submenu-toggle"),o=n.querySelector("ul.sub-menu");n.classList.contains("submenu-active")?(r.setAttribute("aria-expanded","false"),function(e,r){t(e,(()=>{n.classList.toggle("submenu-active")})),requestAnimationFrame((()=>{const t=e.getBoundingClientRect().height;e.style.height=`${t}px`,requestAnimationFrame((()=>{e.style.height="0px"}))}))}(o)):(r.setAttribute("aria-expanded","true"),[...n.parentNode.children].map((t=>{t.classList.contains("submenu-active")&&e(t)})),n.classList.toggle("submenu-active"),function(e){t(e),requestAnimationFrame((()=>{const t=e.getBoundingClientRect().height;e.style.height="0px",requestAnimationFrame((()=>{e.style.height=`${t}px`}))}))}(o))}(e)},t=(e,t)=>{for(const[n,r]of Object.entries(t))!1===r?e.style.removeProperty(n):e.style.setProperty(n,r)},n=()=>{let e,n,r=document.querySelectorAll(".header-search-btn"),o=document.querySelector(".search-form-section .search-field");function a(r){clearInterval(e),clearInterval(n),r.fadeOut=function(e){let t=1;r.style.opacity=1,n=setInterval((function(){t>0?t-=.1:t<0&&(r.style.opacity=0,r.style.display="none",clearInterval(n)),r.style.opacity=t}),e)},r.fadeOut(2),t(document.body,{overflow:!1})}let i=null;null!==r&&r.forEach((function(r){let c=r.dataset.modalKey,s=document.querySelector(`.search-toggle-form[data-modal-key="${c}"]`),l=document.querySelector(`.search-toggle-form[data-modal-key="${c}"] .btn-form-close`),d=document.querySelector(`.search-toggle-form[data-modal-key="${c}"] .search-field`),u=document.querySelector(`.search-toggle-form[data-modal-key="${c}"] .search-submit`);r.addEventListener("click",(function(r){r.preventDefault(),this.classList.add("active"),function(r){o.focus(),clearInterval(e),clearInterval(n),r.fadeIn=function(t){let n=0;r.style.display="block",r.style.opacity=0,e=setInterval((function(){n<1?n+=.1:1===n&&clearInterval(e),r.style.opacity=n}),t)},r.fadeIn(2),t(document.body,{overflow:"hidden"})}(s),o.focus(),i=s})),l.addEventListener("click",(function(e){a(s),o.blur(),r.classList.remove("active"),i=null})),null!==s&&s.addEventListener("click",(function(e){a(s)})),document.addEventListener("keyup",(function(e){"Escape"==e.key&&i&&(a(i),i=null,e.stopImmediatePropagation())})),null!==d&&d.addEventListener("click",(function(e){e.stopPropagation()})),null!==u&&u.addEventListener("click",(function(e){e.stopPropagation()}))}))},r=function(){document.querySelectorAll(".site-header .rishi-menu .sub-menu").forEach((function(e){let t=e.getBoundingClientRect();t.right+t.width>window.innerWidth?e.classList.add("right"):e.classList.remove("right")}))};const o=[".slide-up-fade-in",".slide-down-fade-in",".slide-left-fade-in",".slide-right-fade-in",".clipIn"];var a;a=function(){(function(){const e=document.querySelector("body"),t='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',n=document.querySelectorAll(".search-toggle-form, .rishi-drawer-wrapper");document.addEventListener("keydown",(t=>{"Tab"==t.key&&e.classList.add("keyboard-nav-on")})),document.addEventListener("mousemove",(()=>{e.classList.remove("keyboard-nav-on")})),n.forEach((e=>{let n=e.querySelectorAll(t)[0],r=e.querySelectorAll(t),o=r[r.length-1];document.addEventListener("keydown",(function(e){("Tab"===e.key||9===e.keyCode)&&(e.shiftKey?document.activeElement===n&&(o.focus(),e.preventDefault()):document.activeElement===o&&(n.focus(),e.preventDefault()))})),n.focus()}))})(),function(){const n=document.querySelector(".site-content"),r=document.querySelector(".rishi-offcanvas-drawer"),o=document.querySelectorAll(".rishi-drawer-inner"),a=[...new Set([...document.querySelectorAll('[href="#rishi-offcanvas"]'),...document.querySelectorAll('[aria-controls="rishi-offcanvas"]')])];if(!r)return;const i=r.querySelector('[aria-controls="rishi-offcanvas"]');let c,s,l;function d(){s=!1,window.requestAnimationFrame((()=>{a.forEach((e=>{e.setAttribute("aria-expanded","false")})),t(document.body,{overflow:!1}),t(n,{"pointer-events":!1}),r.setAttribute("aria-hidden","true"),c.focus()}))}r.setAttribute("aria-hidden","true"),s=!1,l=!1,document.body.addEventListener("focus",(e=>{s&&!e.target.closest(".rishi-drawer-wrapper")&&i.focus()}),{capture:!0}),document.addEventListener("keydown",(e=>{s&&"Escape"===e.key&&d()})),document.addEventListener("click",(e=>{s&&e.target===r&&d()})),a.forEach((e=>{function o(e){e.preventDefault(),s?d():(s=!0,c=document.activeElement,window.requestAnimationFrame((()=>{a.forEach((e=>{e.setAttribute("aria-expanded","true")})),t(document.body,{overflow:"hidden"}),t(n,{"pointer-events":"none"}),r.setAttribute("aria-hidden","false")})))}e.setAttribute("aria-controls","rishi-offcanvas"),e.addEventListener("click",o),e.hasAttribute("href")&&e.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||o(e)}))})),o.forEach((t=>{t.addEventListener("click",(t=>{if("true"===r.getAttribute("aria-hidden"))return;const n=t.target.closest(".submenu-toggle");n&&(t.preventDefault(),t.stopPropagation(),e(n.closest(".menu-item-has-children")))}))}))}(),n(),(()=>{const e=document.querySelector(".to_top");null!==e&&(document.addEventListener("scroll",(()=>{window.scrollY>300?e.classList.add("active"):e.classList.remove("active")})),e.addEventListener("click",(()=>{setTimeout((()=>{window.scrollTo({top:0,behavior:"smooth"})}),100)})))})(),r(),(async()=>{if("undefined"==typeof rishi_ajax)return;let e=parseInt(rishi_ajax.startPage)+1;const t=parseInt(rishi_ajax.maxPages);let n=rishi_ajax.nextLink;if("infinite_scroll"===rishi_ajax.autoLoad){let r=!1,o=!1;const a=document.querySelector(".blog"),i=document.querySelector(".search"),c=document.querySelector(".archive"),s=document.querySelector(".infinite-pagination");(a||i||c)&&window.addEventListener("scroll",(async function(){if(!r&&!o)if(document.querySelector(".post:last-of-type")&&e<=t){r=!0,s.classList.add("is-loading");try{const t=await fetch(n);if(!t.ok)throw new Error("HTTP error, status = "+t.status);const r=await t.text();let o=document.createElement("div");o.innerHTML=r;let a=o.querySelectorAll(".post"),i=Array.from(a).map((function(e){return e.outerHTML})).join("");e++,n=n.replace(/(\/?)page(\/|d=)[0-9]+/,"$1page$2"+e);const c=document.querySelector(".rishi-container-wrap");document.querySelector(".masonry_grid")?(document.createRange().createContextualFragment(i).querySelectorAll("article.rishi-post").forEach((e=>c.appendChild(e))),imagesLoaded(c,(()=>new Masonry(c,{itemSelector:"article.rishi-post"})))):c.lastElementChild.insertAdjacentHTML("afterend",i);const s=c.querySelector(".entry-content div");if(s?.classList.contains("tiled-gallery")){const e=document.createElement("script");e.src=rishi_pro_ajax.plugin_url+"/jetpack/modules/tiled-gallery/tiled-gallery/tiled-gallery.js",document.body.appendChild(e)}}catch(e){console.error("Fetch error: ",e)}finally{r=!1,s.classList.remove("is-loading")}}else o=!0}))}})(),function(e,t={}){const n=[];e.forEach((e=>{const t=document.querySelectorAll(e);n.push(...Array.from(t))})),n.forEach((e=>{!function(e,t){"IntersectionObserver"in window?new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("animate"),t.unobserve(e.target))}))}),t).observe(e):entry.target.classList.add("animate")}(e,t)}))}(o,{rootMargin:"0px"});const a=((e,t)=>{let n;return function(...r){clearTimeout(n),n=setTimeout((()=>{e(...r)}),t)}})((()=>{r()}),250);window.addEventListener("resize",a)},"complete"===document.readyState?a():document.addEventListener("DOMContentLoaded",a,!1)}();