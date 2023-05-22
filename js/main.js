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

slides.forEach((slide, index) => {
  slide.addEventListener('mouseenter', () => {
    slides.forEach((s, sIndex) => {
      if (sIndex === index) {
        s.classList.add('active-slide');
        s.style.width = '703px';
      } else {
        s.classList.remove('active-slide');
        s.style.width = '147px';
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
  var elements = document.querySelectorAll('.about__wrapper_one, .about__wrapper_two');
  elements.forEach(function(element) {
    element.classList.remove('show');
    if (isElementInViewport(element) || window.innerWidth < 1200) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('resize', animateOnScroll);
animateOnScroll();



function animatesOnScroll() {
  var elements = document.querySelectorAll('.main__desc');
  elements.forEach(function(element) {
    element.classList.remove('show');  
    if (isElementInViewport(element)) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animatesOnScroll);
animatesOnScroll(); 



const headerSection = document.querySelector('.header');
const aboutSection = document.querySelector('.about');
const servicesSection = document.querySelector('.our_services_1');
const casesSection = document.querySelector('.cases_1');

const sections = [headerSection, aboutSection, servicesSection, casesSection];
const windowHeight = window.innerHeight;

let isScrolling = false;

window.addEventListener('wheel', function(event) {
  if (!isScrolling && window.innerWidth >= 740) { 
    isScrolling = true;

    setTimeout(function() {
      const scrollPosition = window.scrollY || window.pageYOffset;

      let targetSection = null;

      for (let i = 0; i < sections.length; i++) {
        const sectionTop = sections[i].offsetTop;
        const sectionHeight = sections[i].offsetHeight;

        if (event.deltaY > 0 && scrollPosition < sectionTop) {
          targetSection = sections[i];
          break;
        } else if (event.deltaY < 0 && scrollPosition <= sectionTop + sectionHeight - windowHeight) {
          if (i > 0) {
            targetSection = sections[i - 1];
          } else {
            targetSection = sections[0];
          }
          break;
        }
      }

      if (targetSection) {
        window.scrollTo(0, targetSection.offsetTop);
      }

      isScrolling = false;
    }, 200);
  }
});




const videoButtons = document.querySelectorAll('.cases__btn');

videoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const videoSrc = button.dataset.videoSrc;
    if (videoSrc) {
      const width = 800;
      const height = 600;
      const left = (window.innerWidth - width) / 2 + window.screenLeft;
      const top = (window.innerHeight - height) / 2 + window.screenTop;
      window.open(videoSrc, 'videoPopup', `width=${width},height=${height},left=${left},top=${top}`);
    }
  });
});

const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu'); 

btn.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
});
