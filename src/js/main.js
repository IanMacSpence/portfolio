(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on("click", function () {
  //   if (
  //     location.pathname.replace(/^\//, "") ==
  //       this.pathname.replace(/^\//, "") &&
  //     location.hostname == this.hostname
  //   ) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
  //     if (target.length) {
  //       $("html, body").animate(
  //         {
  //           scrollTop: target.offset().top,
  //         },
  //         400,
  //         "easeInOutExpo"
  //       );
  //       return false;
  //     }
  //   }
  // });

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on(
    "click",
    function (event) {
      // Check if the clicked link's href points to the same page
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");

        if (target.length) {
          // Just let the default behavior occur, which will be smooth scrolling
          return true;
        }
      }
    }
  );

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
})(jQuery); // End of use strict
// Switches color themes
function switchTheme(themeName) {
  const themeClasses = [
    "theme-hookers-green",
    "theme-french-blue",
    "theme-red",
    "theme-orange",
  ];

  const themedElement = document.body;
  themedElement.classList.remove(...themeClasses);
  themedElement.classList.add(themeName);
  // add and remove active-theme class to darken the selected them a little so that it stands out more against the background color2
}
