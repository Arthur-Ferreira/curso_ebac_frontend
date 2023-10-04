$(document).ready(function () {
  const formElement = $('form');
  const inputTelefone = $('#telefone');

  inputTelefone.mask('(00) 00000-0000');

  formElement.validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      }
    }
  });
});