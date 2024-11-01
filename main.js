$(function() {
  $('.hamburger').on('click', function() {
    if($('.header').hasClass('active')) {
      $('.header').removeClass('active');
    } else {
      $('.header').addClass('active');
    }
  });
  
  $('.nav-menu').on('click', function() {
    $('.header').removeClass('active');
  });

  $('.mask').on('click', function() {
    $('.header').removeClass('active');
  });

  $(".question").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });

});

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  direction: 'horizontal',
  speed: 3000,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination"
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
    slidesPerView: 3,
    },
  }
});

  










