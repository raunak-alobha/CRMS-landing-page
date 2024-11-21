/*
Author       : Dreamguys
Template Name: Crms - Bootstrap Template
Version      : 1.0
*/

(function ($) {
  "use strict";

  var $wrapper = $(".main-wrapper");

  // Sidebar

  // Sticky Header

  $(window).scroll(function () {
    var sticky = $(".header"),
      scroll = $(window).scrollTop();
    if (scroll >= 50) sticky.addClass("fixed");
    else sticky.removeClass("fixed");
  });

  // Mobile menu sidebar overlay

  $(".header-fixed").append('<div class="sidebar-overlay"></div>');
  $(document).on("click", "#mobile_btn", function () {
    $("main-wrapper").toggleClass("slide-nav");
    $(".sidebar-overlay").toggleClass("opened");
    $("html").addClass("menu-opened");
    return false;
  });

  $(document).on("click", ".sidebar-overlay", function () {
    $("html").removeClass("menu-opened");
    $(this).removeClass("opened");
    $("main-wrapper").removeClass("slide-nav");
    $("#task_window").removeClass("opened");
  });

  $(document).on("click", "#menu_close", function () {
    $("html").removeClass("menu-opened");
    $(".sidebar-overlay").removeClass("opened");
    $("main-wrapper").removeClass("slide-nav");
  });

  // Small Sidebar

  $(document).on("click", "#toggle_btn", function () {
    if ($("body").hasClass("mini-sidebar")) {
      $("body").removeClass("mini-sidebar");
      $(".subdrop + ul").slideDown();
    } else {
      $("body").addClass("mini-sidebar");
      $(".subdrop + ul").slideUp();
    }
    return false;
  });

  // fade in scroll

  if ($(".main-wrapper .aos").length > 0) {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }

  // Mobile menu sidebar overlay

  $("body").append('<div class="sidebar-overlay"></div>');
  $(document).on("click", "#mobile_btns", function () {
    $wrapper.toggleClass("slide-nav");
    $(".sidebar-overlay").toggleClass("opened");
    $("html").toggleClass("menu-opened");
    return false;
  });

  // Sidebar

  var Sidemenu = function () {
    this.$menuItem = $("#sidebar-menu a");
  };

  function initi() {
    var $this = Sidemenu;
    $("#sidebar-menu a").on("click", function (e) {
      if ($(this).parent().hasClass("submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("subdrop")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("subdrop");
        $(this).next("ul").slideDown(350);
        $(this).addClass("subdrop");
      } else if ($(this).hasClass("subdrop")) {
        $(this).removeClass("subdrop");
        $(this).next("ul").slideUp(350);
      }
    });
    $("#sidebar-menu ul li.submenu a.active")
      .parents("li:last")
      .children("a:first")
      .addClass("active")
      .trigger("click");
  }

  // Sidebar Initiate
  initi();

  //Review slider

  if ($(".review-slider").length > 0) {
    $(".review-slider").owlCarousel({
      loop: false,
      margin: 24,
      nav: true,
      dots: false,
      smartSpeed: 2000,
      autoplay: false,
      navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        550: {
          items: 1,
        },
        700: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }

  // Top Header Close

  $(document).ready(function () {
    $(".close-icon").click(function () {
      $(".top-header").hide();
    });
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
      $(".back-to-top-icon").addClass("show");
    } else {
      $(".back-to-top-icon").removeClass("show");
    }
  });

  // JQuery counterUp

  if ($(".counter").length > 0) {
    $(".counter").counterUp({
      delay: 10,
      time: 2000,
    });
    $(".counter").addClass("animated fadeInDownBig");
  }

  // Smooth scroll

  $(".scrollTo").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 80,
      },
      2000
    );
  });

  $(window).on("load", function () {
    // makes sure the whole site is loaded

    $("#loader").delay(100).fadeOut("slow");
    $("#loader-wrapper").delay(500).fadeOut("slow");
    $("body").delay(500).css({ overflow: "visible" });

    AOS.init({
      duration: 1000,
      disable: "mobile",
      mirror: true,
    });
  });
})(jQuery);
