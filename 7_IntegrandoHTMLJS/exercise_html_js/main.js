const formElement = document.getElementById('comparador');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');

const messageElement = document.querySelector('.message');

const successMessage = 'Formulário Válidado com sucesso'; 
const failMessage = 'Formulário Inválido, por favor, reveja os campos';

function comparador(event) {

  event.preventDefault();
  
  const valueA = parseInt(campoA.value);
  const valueB = parseInt(campoB.value);

  if(valueB > valueA) {
    messageElement.classList.add('success');
    messageElement.textContent = successMessage;
  } else {
    messageElement.classList.add('fail');
    messageElement.textContent = failMessage;
  }
}



formElement.addEventListener('submit', comparador);