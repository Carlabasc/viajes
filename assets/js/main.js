// tooltip en boton de enviar
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $("#enviarcorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });
});

//smooth scroll

$(document).ready(function () {
  $("a").click(function () {
    var gato = this.hash;

    $("html, body").animate({ scrolltop: $(gato).offset().top - 30 }, 3000);
  });
});
