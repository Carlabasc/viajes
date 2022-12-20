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
});

window.scrollTo({ top: 900, behavior: "smooth" });
