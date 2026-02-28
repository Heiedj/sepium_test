$(document).ready(function () {

  //клик по карточке
  $(".catalog").on("click", ".catalog-item", function (e) {
    if ($(e.target).closest("a, button, input, .swiper, .fancybox").length) {
      return;
    }
    const link = $(this).data("link");
    if (link) {
      window.open(link, "_blank");
    }
  });
  // ---------

  // like
  $(".card__favorites").click(function () {
    $(this).toggleClass("card__favorites--active");
  });
  // ---------

  //разделитель цены
  $(".price").each(function () {
    var num = $(this).text().trim();
    var formatted = num.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    $(this).html(formatted + "&nbsp;₽");
  });
  // ---------

  // переключение материала
  $(".card .card__btn-radio").on("click", function () {
    var clickedButton = $(this);
    var card = clickedButton.closest(".card");
      if (clickedButton.hasClass("card__btn-radio--active")) {
        return;
      }   
    card.find(".card__btn-radio.card__btn-radio--active").removeClass("card__btn-radio--active");
    clickedButton.addClass("card__btn-radio--active");
  });
  // ---------

  // hover
  function hoverDecktop() {
    $(".card").hover(function () {
      $(this).css({
        "background-color": "#FFFFFF",
        "box-shadow": "0px 0px 20px 0px #00000026",
      });
        $(this).find(".btn-order").removeClass("visually-hidden");
        $(this).find(".slider__slide-description").removeClass("visually-hidden");
    },
    function () {
      $(this).css({
        "background-color": "#FFFFFF",
        "box-shadow": "0px 0px 20px 0px #00000026",
      });
      $(this).css({
        "background-color": "#F6F6F6",
        "box-shadow": "none",
      });
      $(this).find(".btn-order").addClass("visually-hidden");
      $(this).find(".slider__slide-description").addClass("visually-hidden");
    },
    );
  }
  //проверка экрана
  function checkScreenSize() {
    var screenWidth = $(window).width();
    if (screenWidth >= 1440) {
      hoverDecktop();
    }else {
      $(".btn-order").removeClass("visually-hidden");
    } 
  }
  checkScreenSize();
  $(window).resize(function () {
    checkScreenSize();
  });
  // ---------

  // Fancybox окно
  Fancybox.bind("[data-fancybox]", {});
  // ---------
});

//слайдер
const swiper = new Swiper(".slider", {
  lazy: true,
  loop: true,
  autoplay: {
  delay: 3000,
  disableOnInteraction: false,
},
  breakpoints: {
    0: {
      pagination: {
      el: ".swiper-button-pagination",
      clickable: true,
    },
      simulateTouch: false,
      spaceBetween: 0,
      initialSlide: 0,
      loopSlides: 0,
    },
    1440: {
      autoplay: false,
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
      pagination: {
      el: ".swiper-button-pagination",
      clickable: true,
    },
      simulateTouch: false,
      spaceBetween: 0,
      initialSlide: 0,
      loopSlides: 0,
    },
  },
});
// ---------
