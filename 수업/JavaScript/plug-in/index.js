function init() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    // loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },

    on: {
      slideChange: function (e) {
        console.log(e.activeIndex, e.realIndex);
        // real은 복사본제외
        // ative은 복사본포함 인덱스 개수

        // const elActive = document.querySelector(".swiper-slide-active");
        const elActive = document.querySelector(".swiper-slide-next");
        if (elActive) {
          elActive.style = `color:red`;
        }
      },
    },
  });
}

window.onload = init;
// addEvent 사용해도 무관
