$(function () {
  // tabs nav
  $(".header__sidebar-list .header__sidebar-list-link").on(
    "click",
    function () {
      $(".tabs").fadeOut();

      $(".header__sidebar-list .header__sidebar-list-link.active").removeClass(
        "active"
      );

      $(this).addClass("active");

      var tabs = $(this).attr("href");

      $(tabs).fadeIn();
    }
  );

  // nav open
  $(".clickNav").on("click", function () {
    $('.header .header__sidebar').toggleClass('active');
  });
});
