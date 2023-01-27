let menuBtn = document.querySelector('#menu-btn');
let navbar= document.querySelector('.header .flex .navbar');


menuBtn.onclick=()=>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

var swiper = new Swiper(".course-silder", {
    grabCursor: true,
    spaceBetween:20,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
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
    var swiper = new Swiper(".teachers-slider", {
        grabCursor: true,
        spaceBetween:20,
        loop:true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
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

     var swiper = new Swiper(".reviews-slider", {
        grabCursor: true,
        spaceBetween:20,
        loop:true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
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

    function initTheme(){
        const themeSelect = document.getElementById('themeSelect');
        const themeStylesheetLink=document.getElementById('themeStylesheetLink');
        const currentTheme =localStorage.getItem("theme")||'default';
        function activeTheme(themeName){
            themeStylesheetLink.setAttribute('href',`css/themes/${themeName}.css`)
        }
        themeSelect.addEventListener(
            'change',
            ()=>{
                activeTheme(themeSelect.value);
                localStorage.setItem("theme",themeSelect.value)
            }
        );

        activeTheme(currentTheme);
    }
    initTheme();  