  let firstScroll = window.pageYOffset;


 window.addEventListener('scroll', ()=>{
     const actualScroll = window.pageYOffset;
       const header = document.getElementById('header')
       if(innerWidth > 1024){
       if(firstScroll >= actualScroll){
           header.style.top = '0';
         }else{
             header.style.top = '-100px';
         }
         if(actualScroll < 730){
           header.style.top = '0';
        }
     
      
         firstScroll = actualScroll;
        }
        if(innerWidth < 1024 && innerWidth > 768){
          if(firstScroll >= actualScroll){
            header.style.bottom = '0';
          }else{
            header.style.bottom = '-100px';
          }
          if(actualScroll > 5100 || actualScroll < 450){
             header.style.bottom = '0';
          }
        
        firstScroll = actualScroll;
      }
      if(innerWidth < 768){
        if(firstScroll >= actualScroll){
          header.style.bottom = '0';
        }else{
          header.style.bottom = '-100px';
        }
        if(actualScroll > 7000){
           header.style.bottom = '0';
        }
      
      firstScroll = actualScroll;
    }
  });
const menuBtn = document.getElementById('menu-btn')


menuBtn.addEventListener('click', (e)=>{
  const menu = document.getElementById('menu')

  menuBtn.firstElementChild.classList.toggle('none')
  menuBtn.lastElementChild.classList.toggle('none')
  menu.classList.toggle('active')

})

document.addEventListener('click',e=>{
    if(!e.target.matches('.menu-item')) return false;
        menuBtn.firstElementChild.classList.remove('none')
        menuBtn.lastElementChild.classList.add('none')
        menu.classList.remove('active')
   
})


//modal form


  const $form = document.querySelector(".contact-form"),
    $loader = document.querySelector(".contact-form-loader"),
    $response = document.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/juanierace74@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
