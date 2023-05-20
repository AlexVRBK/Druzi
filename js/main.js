const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
  breakpoints: {
    650: {
      slidesPerView: 3,
    },
    550: {
      slidesPerView: 2,
    },
  300: {
      slidesPerView: 1,
    }
  },
  initialSlide: 0, 
});

const slides = document.querySelectorAll('.cases__swiper-slide');
const btns = document.querySelectorAll('.cases__btn');

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    slides.forEach((slide, slideIndex) => {
      if (slideIndex === index) {
        slide.style.width = '700px';
        slide.style.transition = 'width 0.5s ease';
      } else {
        slide.style.width = '147px';
        slide.style.transition = 'width 0.5s ease'; 
      }
    });
  });
});





