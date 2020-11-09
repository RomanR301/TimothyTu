let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  $body: $('body'),
  init: function () {
      this.events();
      var swiper = new Swiper('.gallery-slider', {
        slidesPerView: 4,
        spaceBetween: 18,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            320: {
              centeredSlides: true,
              slidesPerView: 'auto',
            },
            768: {
                centeredSlides: true,
                slidesPerView: 'auto',
            },
            992: {
              slidesPerView: 4,
              centeredSlides: false,
            },
          }
      });
      var featuresSlider = new Swiper('.features-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        allowTouchMove: false,
        loop: true,
        breakpoints: {
            320: {
              allowTouchMove: true,
              centeredSlides: true,
              slidesPerView: 'auto',
              freeMode: true,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 30,
              allowTouchMove: true,
              centeredSlides: false,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 30,
              allowTouchMove: false,
            },
        }
    });
    //   var servicesSlider = new Swiper('.services-slider', {
    //     slidesPerView: 5,
    //     spaceBetween: 30,
    //     allowTouchMove: false,
    //     loop: true,
    //     breakpoints: {
    //         320: {
    //           allowTouchMove: true,
    //           centeredSlides: true,
    //           slidesPerView: 'auto',
    //           freeMode: true,
    //         },
    //         767: {
    //           slidesPerView: 3,
    //           spaceBetween: 30,
    //           allowTouchMove: true,
    //           centeredSlides: false,
    //         },
    //         992: {
    //           slidesPerView: 5,
    //           spaceBetween: 30,
    //           allowTouchMove: false,
    //         },
    //     }
    // });
    var servicesSlider = new Swiper('.services-slider', {
      slidesPerView: 5,
      spaceBetween: 30,
      allowTouchMove: false,
      loop: true,
      breakpoints: {
          320: {
            allowTouchMove: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            freeMode: true,
          },
          767: {
            slidesPerView: 5,
            spaceBetween: 30,
            allowTouchMove: false,
          },
      }
  });
    var clientsSlider = new Swiper('.clients-slider', {
        slidesPerView: 6,
        spaceBetween: 40,
        allowTouchMove: false,
        loop: true,
        breakpoints: {
            320: {
              allowTouchMove: true,
              centeredSlides: true,
              slidesPerView: 'auto',
              freeMode: true,
              spaceBetween: 20,
            },
            768: {
                slidesPerView: 6,
                spaceBetween: 40,
                allowTouchMove: false,
            },
        }
    });
  },
  
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.nav.toggleClass('active');
        this.$body.addClass('active')
        } else {
            this.hamburger.removeClass('open');
            this.nav.toggleClass('active');
            this.$body.removeClass('active')
        }
    },
  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
      $(document).on('click', '.menu-toggle', function (){
          $(this).next('ul').slideToggle();
      })
  }
};

jQuery(function () {
  front.init();  
});




