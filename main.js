// start swiper 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
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

// start navbar 
let bars = document.querySelector(".bars")
let navbar = document.querySelector("header nav ul")
bars.addEventListener("click", () =>{
  bars.classList.toggle("active")
  if(bars.classList.contains("active")){
    bars.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    navbar.style.cssText = "width :100%; left:0;";
  }else{
    bars.innerHTML = '<i class="fa-solid fa-bars"></i>';
    navbar.style.cssText = "width :0; left:-60px;";
  }
})