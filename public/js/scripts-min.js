"use strict";var firstScroll=window.pageYOffset;window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.getElementById("header");innerWidth>1024&&(t.style.top=firstScroll>=e?"0":"-100px",e<730&&(t.style.top="0"),firstScroll=e),innerWidth<1024&&innerWidth>=768&&(t.style.bottom=firstScroll>=e?"0":"-100px",(e>4600||e<450)&&(t.style.bottom="0"),firstScroll=e),innerWidth<768&&(t.style.bottom=firstScroll>=e?"0":"-100px",(e>6e3||e<750)&&(t.style.bottom="0"),firstScroll=e)}));var menuBtn=document.getElementById("menu-btn");menuBtn.addEventListener("click",(function(e){var t=document.getElementById("menu");menuBtn.firstElementChild.classList.toggle("none"),menuBtn.lastElementChild.classList.toggle("none"),t.classList.toggle("active")})),document.addEventListener("click",(function(e){if(!e.target.matches(".menu-item"))return!1;menuBtn.firstElementChild.classList.remove("none"),menuBtn.lastElementChild.classList.add("none"),menu.classList.remove("active")}));var $form=document.querySelector(".contact-form"),$loader=document.querySelector(".contact-form-loader"),$response=document.querySelector(".contact-form-response");$form.addEventListener("submit",(function(e){e.preventDefault(),$loader.classList.remove("none"),fetch("https://formsubmit.co/ajax/juanierace74@gmail.com",{method:"POST",body:new FormData(e.target)}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){console.log(e),location.hash="#gracias",$form.reset()})).catch((function(e){console.log(e);var t=e.statusText||"Ocurrió un error al enviar, intenta nuevamente";$response.querySelector("h3").innerHTML="Error ".concat(e.status,": ").concat(t)})).finally((function(){$loader.classList.add("none"),setTimeout((function(){location.hash="#close"}),3e3)}))}));var sliders=document.querySelectorAll(".slider"),callback=function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("appear"),t.unobserve(e.target))}))},options={rootMargin:"0px 0px 0px 0px",threshold:0},observer=new IntersectionObserver(callback,options);sliders.forEach((function(e){return observer.observe(e)}));var swiper=new Swiper(".swiper-container",{slidesPerView:"auto",spaceBetween:40,centeredSlides:!0,grabCursor:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});