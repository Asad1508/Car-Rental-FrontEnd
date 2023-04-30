let menu=document.querySelector('#menu-btn')
let navbar=document.querySelector('.navbar')
menu.onclick=()=>{
    // iss se toggle horha icon click pr
    menu.classList.toggle('fa-times')
    // iss se navbar show/hide horha click aur unclick pr
    //yani active class remove aur add kr rha active class ka css me code ha
    navbar.classList.toggle('active')
}
//jab login button ya icon pr click ho tab active class kre add
//jiski wja se login form show hoga
document.querySelector('#login-btn').onclick=()=>{
    document.querySelector('.login-form-container').classList.toggle('active')
}
document.querySelector('#close-login-form').onclick=()=>{
    document.querySelector('.login-form-container').classList.remove('active')
}

window.onscroll=()=>{
    if(window.scrollY >0)
    {
      document.querySelector('.header').classList.add('active')
    }
    else{
        document.querySelector('.header').classList.remove('active')
    }
    // iss code se jab scroll down kre ga tu cross khtm hojye ga
    menu.classList.remove('fa-times')
    //iss code se navbar close krde ga jab scroll kre ga
    navbar.classList.remove('active')
}
window.onload=()=>{
    if(window.scrollY >0)
    {
      document.querySelector('.header').classList.add('active')
    }
    else{
        document.querySelector('.header').classList.remove('active')
    }

}
//ye code mousehover pr banner image ko move kr rha
document.querySelector('.home').onmousemove = (e) =>{

    document.querySelectorAll('.home-parallax').forEach(elm =>{
  
      let speed = elm.getAttribute('data-speed');
  
      let x = (window.innerWidth - e.pageX * speed) / 90;
      let y = (window.innerHeight - e.pageY * speed) / 90;
  
      elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
  
    });
  
  };
  
  
  document.querySelector('.home').onmouseleave = (e) =>{
  
    document.querySelectorAll('.home-parallax').forEach(elm =>{
  
      elm.style.transform = `translateX(0px) translateY(0px)`;
  
    });
  
  };
// popular vehicles
  var swiper = new Swiper(".vehicles-slider", {
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay:{
      delay:2500,
      disableOnInteraction:false
    }, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });
  

