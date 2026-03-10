$(function() {
  // Initialize main slider
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  });

  // Initialize thumbnail slider
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: true
  });

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active");
      }
    });
  });

  document.querySelectorAll(".reveal-left, .reveal-right").forEach(el => {
    observer.observe(el);
  });

  // Optional: Hamburger menu toggle (if you use it)
  $('#menu-button').on('click',function(){
    $('.gnav-sp-wrap').fadeToggle(500);
  });

  $(".menu-button-inner").click(function() {
    $(this).toggleClass("close");
  });

  $(".gnav-sp a").on("click", function() {
    $('.gnav-sp-wrap').fadeToggle(500);
    $(".menu-button-inner").removeClass("close");
  });
});