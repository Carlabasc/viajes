$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $("#enviarcorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });
});

$(function () {
  $(".carousel").carousel({
    interval: 2000,
  });

  $("#myCarousel").on("slide.bs.carousel", function () {
    // do something…
  });
});

window.scrollTo({ top: 900, behavior: "smooth" });
