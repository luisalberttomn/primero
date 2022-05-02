$(function () {
    $('.example-popover').popover({
      container: 'body'
    })
  })
  $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    });
    $('#Enviar').oneclick(function() {
      alert("El formulario fue enviado correctamente");
      })