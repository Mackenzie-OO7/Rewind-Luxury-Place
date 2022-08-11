var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  });


  //Menu
  (function($) {

    // Menu filter
    $("#menu-filters li a").click(function() {
      $("#menu-filters li a").removeClass('active');
      $(this).addClass('active');
  
      var selectedFilter = $(this).data("filter");
      //  $("#menu-wrapper").fadeTo(100, 0);
  
      $(".menu-restaurant").fadeOut();
  
      setTimeout(function() {
        $(selectedFilter).slideDown();
        //$("#menu-wrapper").fadeTo(300, 1);
      }, 300);
    });
  
})(jQuery);
  
   
  