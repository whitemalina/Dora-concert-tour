var swiper = new Swiper(".swiper", {
    slidesPerView: 3,

    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        1920: {
            slidesPerView: 3,
        },
        
        2280: {
            slidesPerView: 4,
        },
        1689: {
            slidesPerView: 2,
        },
        1867: {
            slidesPerView: 2,

        },
        1700: {
            slidesPerView: 2,

        },
        200: {
            slidesPerView: 1,
        }
    }
  });