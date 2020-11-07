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
              slidesPerView: 3,
              spaceBetween: 30,
              allowTouchMove: true,
              centeredSlides: false,
            },
            992: {
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
            800: {
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



  openTab: function (element, tabName, parent) {
      let i, tab_content, tab_links;

      tab_content = $(element).closest(parent).find('.tab-content');

      for (i = 0; i < tab_content.length; i++) {
          tab_content[i].style.display = "none";
      }

      tab_links = $(element).closest('.tabs-ul').find('.tab-links');

      for (i = 0; i < tab_links.length; i++) {
          tab_links[i].className = tab_links[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      $(element).addClass('active');
  },
  hoverTab: function (el, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    el.currentTarget.className += " active";
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

let modal = {
  closeButton: $('.modal__close'),
  closeOverlay: $('.modal'),
  can: 1,
  init: function () {
      this.events();
  },
  openModal: function (id) {
      let modalWindow = $(id);
      modalWindow.fadeIn();
      modalWindow.find('.modal__content').removeClass('animate-away').addClass('animate-in');

      $('body, html').addClass('active');
  },

  closeModal: function (id) {
      let modalWindow = $(id);
      modalWindow.find('.modal__content').removeClass('animate-in').addClass('animate-away');
      modalWindow.fadeOut();
      $('body, html').removeClass('active');
  },

  events: function () {

      $(document).on('click', '.modalTrigger', function (e) {
          e.preventDefault();
          let self = $(this),
              target = self.attr('data-modal');
          modal.openModal(target);

      });

      $(document).on('click', '.modal', function (event) {
          let self = '#' + $(this).attr('id');
          if (event.target.className == 'modal__body') {
              modal.closeModal(self);
          }
      });

      $(document).on('click', '.modal__close', function () {
          let self = '#' + $(this).closest('.modal').attr('id');
          modal.closeModal(self);
      });
        $(document).on('click', '.scroll-to-top i', function () {
            $('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 500);
      });
        $(document).on('click', '.scroll-down i', function () {
            $('html, body').animate({
                scrollTop: $(this).closest("section").next().offset().top - 90
             }, "slow");
      });

  }
};


jQuery(function () {
  front.init();
  modal.init();

    
});

// $(window).scroll(function () {
//   if ($(this).scrollTop() > 10) {
//     $('.scroll-to-top').addClass("scrolled");
//   } else {
//   	$('.scroll-to-top').removeClass("scrolled");
//   }
// });

document.body.addEventListener('keyup', function(e) {
  if (e.which === 9) /* tab */ {
    document.body.classList.remove('no-focus-outline');
  }
});




