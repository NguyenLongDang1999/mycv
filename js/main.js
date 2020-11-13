$(function () {
  // tooltip sidebar
  $('[data-toggle="tooltip"]').tooltip();

  //
  $(".header__sidebar-list-item-link").on("click", function () {
    var href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(href).offset().top,
      },
      1000
    );
  });

  $('.section__home-welcome-contact').on('click', function() {
    var href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(href).offset().top,
      },
      1000
    );
  })

  $(window).on('scroll',function() {
    var body = $(window).scrollTop();
    
    $('.position').each(function(i) {
      if($(this).position().top <= body) {
        $('.header__sidebar-list-item-link.active').removeClass('active');
				$('.header__sidebar-list-item-link').eq(i).addClass('active');
      }
    })
  }).scroll();

  $('#openSidebar, .overplay').on('click', function() {
    $('.header__sidebar').toggleClass('active');
    $('.overplay').toggleClass('active')
  })
});
