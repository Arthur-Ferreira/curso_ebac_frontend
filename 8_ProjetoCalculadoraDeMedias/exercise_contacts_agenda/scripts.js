const formulario = document.querySelector('form');
const corpoDoFormulario = document.querySelector('tbody');
const inputNome = document.querySelector('#nome');
const inputTelefone = document.querySelector('#telefone');

const nomes = [];
const numeros = [];

function validadorTelefonico(number) {
  const regexFoneBrasileiro = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;
  return regexFoneBrasileiro.test(number);
}

function salvarContato(event) {
  event.preventDefault();
  
  let numeroInformado = inputTelefone.value;
  
  const nomeInformado = inputNome.value;

  if (!validadorTelefonico(numeroInformado) || numeros.includes(numeroInformado)) {
    alert(`O número informado ${numeroInformado}, não está dentro do padrão esperado ou já foi cadastrado, por favor, verifique o campo e tente novamente, sem usar pontuações ou espaços.`)
  } else if (nomes.includes(nomeInformado)) {
    alert(`O nome informado ${nomeInformado}, já foi cadastrado, por favor, verifique o nome digitado.`)
  } else {

    nomes.push(nomeInformado);
    numeros.push(numeroInformado);

    numeroInformado = numeroInformado.toString().replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4")
    
    const linha = `
    <tr>
    <td>${inputNome.value}</td>
    <td>${numeroInformado}</td>
    </tr>
    `;

    corpoDoFormulario.innerHTML += linha;
  }
    
  inputNome.value = '';
  inputTelefone.value = '';
}

formulario.addEventListener('submit', salvarContato);