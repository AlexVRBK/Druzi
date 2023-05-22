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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});















function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateOnScroll() {
  var elements = document.querySelectorAll('.about__wrapper_one, .about__wrapper_two,  .about__title');
  elements.forEach(function(element) {
    element.classList.remove('show'); // Видаляємо клас show з усіх елементів перед перевіркою видимості
    if (isElementInViewport(element)) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); 








