// document.addEventListener("DOMContentLoaded", function(event) {
//   // alert("dssdaads");
//   // Back to top button
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//       // alert("mayor que 100");
//       document.getElementById("back-to-top").classList.remove("not-visible");

//       document.getElementById("back-to-top").classList.add("visible");
//     } else {
//       document.getElementById("back-to-top").classList.remove("visible");

//       document.getElementById("back-to-top").classList.add("not-visible");
//     }
//   });

document.addEventListener("DOMContentLoaded", function(event) {
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $("#back-to-top").fadeIn("slow");
    } else {
      $("#back-to-top").fadeOut("slow");
    }
  });

  $("#back-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  $("#contact-button").click(function() {
    $("html, body")
      .delay(0)
      .animate(
        { scrollTop: $("#contacto").offset().top },
        1500,
        "easeInOutExpo"
      );
    return false;
  });

  $("#contact-button-2").click(function() {
    $("html, body")
      .delay(0)
      .animate(
        { scrollTop: $("#contacto").offset().top },
        1500,
        "easeInOutExpo"
      );
    return false;
  });
});
