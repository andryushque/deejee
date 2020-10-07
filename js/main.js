$(document).ready(function () {
  /*=== Mobile Menu ===*/
  // Show and hide navigation menu
  const mmenuButtonOpen = $(".mmenubtn--open");
  const mmenuButtonClose = $(".mmenubtn--close");
  const mobileMenu = $(".mmenu");

  mmenuButtonOpen.on("click", function () {
    mobileMenu.addClass("mmenu--visible");
  });
  mmenuButtonClose.on("click", function () {
    mobileMenu.removeClass("mmenu--visible");
  });

  // Close mobile menu on wide screens
  $(window)
    .resize(function () {
      if (screen.width > 991 && $(window).width() > 991) {
        mobileMenu.removeClass("mmenu--visible");
      }
    })
    .resize();

  // Intro section parallax
  const parallaxSection = $(".intro");
  parallaxSection.parallax();

  /*=== AOS Animation ===*/
  AOS.init({
    disable: function () {
      var maxWidth = 767;
      return window.innerWidth < maxWidth;
    },
  });

  /*=== Reviews slider ===*/
  const reviewsSlider = new Swiper(".reviews-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});
