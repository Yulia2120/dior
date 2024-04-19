const swiperHero = new Swiper('.hero__swiper', {
  effect: 'fade',
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperAbout = new Swiper('.about__swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//accordeon
// document.querySelectorAll('.accordeon__triger').forEach(item => {
//   item.addEventListener('click', () => {
//     item.parentNode.classList.toggle('accordeon__item--active');
//   });
// });

document.querySelectorAll('.accordion__triger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    trigger.parentNode.classList.toggle('accordion__item--active');
  });
});
