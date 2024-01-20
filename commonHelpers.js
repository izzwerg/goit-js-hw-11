import{S as c,i as u}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f=document.querySelector(".form");f.addEventListener("submit",g);const a=document.querySelector(".gallery"),l=document.querySelector(".loader"),m="https://pixabay.com/api",d="11329962-6436ba51ddb58bb96deed169a";function g(s){s.preventDefault(),a.innerHTML="",l.classList.add("is-visible");const t=s.currentTarget,o=t.elements.searchTerm.value;p(o).then(i=>{if(i.hits==0)y();else{let e="";for(const n of i.hits)e+=h(n);a.innerHTML=e,new c(".gallery a").refresh()}}).finally(()=>t.reset())}function p(s){const t=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:9});return fetch(`${m}/?${t}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}function h({webformatURL:s,largeImageURL:t,tags:o,likes:i,views:e,comments:r,downloads:n}){return`<li class="gallery-item">
    <a class="gallery-link" href="${t}">
        <img class="gallery-image" src="${s}" alt="${o}" />
    </a>
    <div class="image-details">
        <p>Likes </br> ${i}</p>
        <p>Views </br>  ${e}</p>
        <p>Comments </br>  ${r}</p>
        <p>Downloads </br>  ${n}</p>
    </div>
    </li>`}function y(){u.show({position:"topRight",messageColor:"white",iconUrl:"error.svg",iconColor:"white",color:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!"}),l.classList.remove("is-visible")}
//# sourceMappingURL=commonHelpers.js.map
