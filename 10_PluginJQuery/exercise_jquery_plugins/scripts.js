$(document).ready(function () {
  const formElement = $('form');
  const cpfElement = $('#cpf');
  const phoneNumberElement = $('#phone-number');
  const postalCodeElement = $('#postal-code');

  cpfElement.mask('000.000.000-00');
  phoneNumberElement.mask('(00) 00000-0000');
  postalCodeElement.mask('00000-000');

  formElement.validate({
    rules: {
      ['full-name']: {
        required: true,
      },
      cpf: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      ['phone-number']: {
        required: true,
      },
      address: {
        required: false,
      },
      ['postal-code']: {
        required: true,
      }
    }, submitHandler: function () {
      alert(`Formulário enviado com sucesso!.`);
    }, invalidHandler: function (event, validator) {
      let camposInvalidos = validator.numberOfInvalids();
      if (camposInvalidos) alert(`Existem ${camposInvalidos} campos inválidos.`);
    }
  });

});